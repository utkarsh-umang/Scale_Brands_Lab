export const sendSlackNotification = async (message: string, webhookUrl: string) => {
  if (!webhookUrl) {
    console.error('Slack webhook URL missing');
    return false;
  }

  try {
    // We send it as text/plain (default when passing a string body without headers)
    // to avoid CORS preflight checks that Slack blocks. Slack webhooks accept text/plain.
    await fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify({ text: message }),
    });

    // Since this is a simple request without CORS headers returned, we can't reliably
    // read response.ok due to opaque responses, but if fetch doesn't throw a network error, 
    // it was sent to the server.
    return true;
  } catch (error) {
    console.error('Error sending Slack notification via Webhook:', error);
    return false;
  }
};
