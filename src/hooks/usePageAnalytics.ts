import { useEffect, useRef } from 'react';
import { trackEvent } from '../utils/analytics';

export function usePageAnalytics(pageType: 'home' | 'clips'): void {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    const eventName = pageType === 'home' ? 'home_page_viewed' : 'clips_page_viewed';
    trackEvent(eventName, { pageType, path: window.location.pathname });

    const milestones = [25, 50, 75, 100];

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const milestone of milestones) {
        if (!fired.current.has(milestone) && pct >= milestone) {
          fired.current.add(milestone);
          trackEvent(`scroll_${milestone}`, { pageType, path: window.location.pathname });
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageType]);
}
