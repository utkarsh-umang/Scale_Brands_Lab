// AWS Lambda handler for Slack forwarding - paste this into AWS Console > Lambda > Code
// Runtime: Node.js 20.x (fetch is built-in). Works with API Gateway HTTP API and REST API.
// Env vars to set in Lambda > Configuration > Environment variables:
//   SLACK_CONTACT_WEBHOOK_URL
//   SLACK_AUDIT_WEBHOOK_URL

const WEBHOOKS = {
  contact: process.env.SLACK_CONTACT_WEBHOOK_URL,
  audit: process.env.SLACK_AUDIT_WEBHOOK_URL,
};

// CORS: restrict to your domains. Add preview domains if needed.
const ALLOWED_ORIGINS = new Set([
  'https://scalebrandslab.com',
  'https://www.scalebrandslab.com',
  'http://localhost:5173',
  'http://localhost:3000',
]);

function getCorsHeaders(origin) {
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : 'https://www.scalebrandslab.com';
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function isSlackChannel(value) {
  return value === 'contact' || value === 'audit';
}

export const handler = async (event) => {
  const origin = event.headers?.origin || event.headers?.Origin || '';
  const cors = getCorsHeaders(origin);

  // Preflight
  if (event.requestContext?.http?.method === 'OPTIONS' || event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: cors, body: '' };
  }

  const method = event.requestContext?.http?.method || event.httpMethod || '';
  if (method !== 'POST') {
    return {
      statusCode: 405,
      headers: { ...cors, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  let body;
  try {
    body = event.body ? JSON.parse(event.body) : {};
    // API Gateway can base64-encode
    if (event.isBase64Encoded && event.body) {
      body = JSON.parse(Buffer.from(event.body, 'base64').toString('utf8'));
    }
  } catch {
    return {
      statusCode: 400,
      headers: { ...cors, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Invalid JSON' }),
    };
  }

  if (!isSlackChannel(body.channel) || typeof body.message !== 'string' || !body.message.trim()) {
    return {
      statusCode: 400,
      headers: { ...cors, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Invalid request' }),
    };
  }

  // Re-resolve env at runtime (in case Lambda was warm and env was set after init)
  const webhookUrl = (process.env[body.channel === 'contact' ? 'SLACK_CONTACT_WEBHOOK_URL' : 'SLACK_AUDIT_WEBHOOK_URL'] || '').trim();

  if (!webhookUrl) {
    console.error(`Slack webhook not configured for channel: ${body.channel}`);
    return {
      statusCode: 500,
      headers: { ...cors, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Slack notifications are not configured' }),
    };
  }

  try {
    const slackRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: body.message }),
    });

    if (!slackRes.ok) {
      console.error('Slack webhook error:', slackRes.status, await slackRes.text().catch(() => ''));
      return {
        statusCode: 502,
        headers: { ...cors, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Failed to notify Slack' }),
      };
    }

    return {
      statusCode: 200,
      headers: { ...cors, 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error forwarding to Slack:', error);
    return {
      statusCode: 500,
      headers: { ...cors, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
