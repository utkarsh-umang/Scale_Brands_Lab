// Vercel serverless function (Node.js runtime). Deployed automatically from the
// /api directory — keeps the Slack webhook server-side only, so it is never
// bundled into the client JS the way `import.meta.env.VITE_*` values are.

declare const process: { env: Record<string, string | undefined> };

interface ApiRequest {
  method?: string;
  body?: unknown;
}

interface ApiResponse {
  status(code: number): ApiResponse;
  json(body: unknown): void;
  setHeader(name: string, value: string): void;
}

type SlackChannel = 'contact' | 'audit';

const WEBHOOKS: Record<SlackChannel, string | undefined> = {
  contact: process.env.SLACK_CONTACT_WEBHOOK_URL,
  audit: process.env.SLACK_AUDIT_WEBHOOK_URL,
};

function isSlackChannel(value: unknown): value is SlackChannel {
  return value === 'contact' || value === 'audit';
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = (req.body ?? {}) as { channel?: unknown; message?: unknown };

  if (!isSlackChannel(body.channel) || typeof body.message !== 'string' || !body.message.trim()) {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }

  const webhookUrl = WEBHOOKS[body.channel];

  if (!webhookUrl) {
    console.error(`Slack webhook URL not configured for channel: ${body.channel}`);
    res.status(500).json({ error: 'Slack notifications are not configured' });
    return;
  }

  try {
    const slackRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: body.message }),
    });

    if (!slackRes.ok) {
      console.error('Slack webhook responded with an error status:', slackRes.status);
      res.status(502).json({ error: 'Failed to notify Slack' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error forwarding Slack notification:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
