// Basic client-side validation and spam filtering for lead/contact forms.

const EMAIL_REGEX = /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,24}$/;

// Common throwaway / placeholder domains. Not exhaustive — catches the usual suspects.
const BLOCKED_EMAIL_DOMAINS = new Set([
  'example.com', 'example.org', 'example.net', 'test.com', 'test.test', 'email.com',
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'sharklasers.com',
  '10minutemail.com', 'tempmail.com', 'temp-mail.org', 'tempmail.net', 'throwawaymail.com',
  'yopmail.com', 'getnada.com', 'trashmail.com', 'dispostable.com', 'maildrop.cc',
  'fakeinbox.com', 'mintemail.com', 'mohmal.com', 'emailondeck.com', 'spamgourmet.com',
]);

// Minimum time (ms) a human realistically needs to fill the form. Bots submit instantly.
export const MIN_FILL_TIME_MS = 3000;

export function validateEmail(raw: string): string | null {
  const email = raw.trim();
  if (!email) return 'Email is required.';
  if (email.length > 254 || !EMAIL_REGEX.test(email) || email.includes('..')) {
    return 'Please enter a valid email address.';
  }
  const domain = email.split('@')[1].toLowerCase();
  if (BLOCKED_EMAIL_DOMAINS.has(domain)) {
    return 'Please use your real work or personal email.';
  }
  return null;
}

export function validateName(raw: string, label: string): string | null {
  const name = raw.trim();
  if (!name) return `${label} is required.`;
  if (name.length > 50) return `${label} is too long.`;
  // Letters (any language), spaces, apostrophes, hyphens, periods only
  if (!/^[\p{L}][\p{L} '.-]*$/u.test(name)) return `Please enter a valid ${label.toLowerCase()}.`;
  return null;
}

export function validateMessage(raw: string): string | null {
  const message = raw.trim();
  if (!message) return 'Please tell us a bit about your project.';
  if (message.length < 10) return 'Message is too short.';
  if (message.length > 3000) return 'Message is too long (max 3000 characters).';
  const linkCount = (message.match(/https?:\/\/|www\./gi) || []).length;
  if (linkCount > 2) return 'Please include no more than 2 links.';
  if (/<a\s|\[url=|\[link=/i.test(message)) return 'HTML and BBCode links are not allowed.';
  return null;
}

// Returns true if the submission looks automated (honeypot filled or submitted too fast).
export function isLikelyBot(honeypot: string, formLoadedAt: number): boolean {
  return honeypot.trim() !== '' || Date.now() - formLoadedAt < MIN_FILL_TIME_MS;
}

// Strip Slack mrkdwn control characters so user input can't inject mentions/formatting.
export function sanitizeForSlack(value: string): string {
  return value.trim().replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c] as string));
}
