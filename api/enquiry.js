// Native enquiry handler — receives the contact form POST and emails it via Resend.
// No third-party form provider. Requires env var RESEND_API_KEY (set in Vercel).
// Optional env vars: ENQUIRY_TO (default hello@…), ENQUIRY_FROM (must be a Resend-verified sender).

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

function esc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function readBody(req) {
  let body = req.body;
  if (body === undefined || body === null || body === '') {
    body = await new Promise((resolve) => {
      let data = '';
      req.on('data', (c) => { data += c; });
      req.on('end', () => resolve(data));
      req.on('error', () => resolve(''));
    });
  }
  if (typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch (e) { body = {}; }
  }
  return body || {};
}

function asArray(v) {
  if (Array.isArray(v)) return v;
  return v ? [v] : [];
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Email is not configured yet.' });
  }

  const body = await readBody(req);

  // Honeypot: bots fill hidden fields. Silently accept and drop.
  if (body.company) return res.status(200).json({ ok: true });

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const stress = (body.stress || '').trim();
  const needs = asArray(body.needs);
  const support = asArray(body.support);

  if (!name || !email || !stress || support.length === 0 || !body.consent) {
    return res.status(400).json({ error: 'Please complete the required fields.' });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Nursery', body.nursery],
    ['Role', body.role],
    ['Location', body.location],
    ['Nursery size', body.size],
    ['Needs help with', needs.join(', ')],
    ['Interested in', support.join(', ')],
    ['Biggest stress', stress],
    ['Deadline / change', body.deadline],
    ['Timeframe', body.timing],
    ['Marketing opt-in', body.marketing ? 'Yes' : 'No'],
  ];

  const html =
    '<h2 style="font-family:sans-serif">New nursery enquiry</h2>' +
    '<table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">' +
    rows.map(function (r) {
      return '<tr>' +
        '<td style="font-weight:bold;vertical-align:top;border-bottom:1px solid #eee">' + esc(r[0]) + '</td>' +
        '<td style="vertical-align:top;border-bottom:1px solid #eee">' + esc(r[1] || '—').replace(/\n/g, '<br>') + '</td>' +
        '</tr>';
    }).join('') +
    '</table>';

  const text = rows.map(function (r) { return r[0] + ': ' + (r[1] || '—'); }).join('\n');

  const from = process.env.ENQUIRY_FROM || 'Smoothly Operating Nursery <enquiries@smoothlyoperatingnursery.com>';
  const to = process.env.ENQUIRY_TO || 'hello@smoothlyoperatingnursery.com';

  try {
    const r = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: from,
        to: [to],
        reply_to: email,
        subject: 'New enquiry — ' + name + (body.nursery ? ' (' + body.nursery + ')' : ''),
        html: html,
        text: text,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error('Resend error', r.status, detail);
      return res.status(502).json({ error: 'We could not send your enquiry. Please email us directly.' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Enquiry send failed', e);
    return res.status(500).json({ error: 'Something went wrong. Please email us directly.' });
  }
};
