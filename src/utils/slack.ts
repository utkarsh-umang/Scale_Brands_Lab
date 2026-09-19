export type SlackChannel = 'contact' | 'audit';

// VITE_SLACK_API_URL = API Gateway URL for Amplify (e.g. https://xxx.execute-api.ap-south-1.amazonaws.com/slack-notify)
// If empty, falls back to /api/slack-notify for Vercel-style deployments.
const API_URL = (import.meta.env.VITE_SLACK_API_URL as string | undefined)?.trim() || '/api/slack-notify';

export const sendSlackNotification = async (channel: SlackChannel, message: string) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ channel, message }),
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending Slack notification:', error);
    return false;
  }
};

// Back-compat for old call sites: sendSlackNotification(message, webhookUrl) — keep until all components migrated.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendSlackNotificationLegacy = async (message: string, _webhookUrl: string) => {
  return sendSlackNotification('contact', message);
};
