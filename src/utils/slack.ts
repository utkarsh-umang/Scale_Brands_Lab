export type SlackChannel = 'contact' | 'audit';

export const sendSlackNotification = async (channel: SlackChannel, message: string) => {
  try {
    const response = await fetch('/api/slack-notify', {
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
