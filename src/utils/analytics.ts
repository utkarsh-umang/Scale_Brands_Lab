declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    clarity?: (method: string, ...args: any[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
  if (typeof window.clarity === 'function') {
    window.clarity('event', eventName);
  }
}
