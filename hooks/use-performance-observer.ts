'use client';

import { useEffect } from 'react';

export function usePerformanceObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Web Vitals observer
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`${entry.name}: ${entry.startTime}`);
        }
        
        // Send to analytics service in production
        if (process.env.NODE_ENV === 'production') {
          // You can implement your analytics service here
          // Example: analytics.track('performance', { metric: entry.name, value: entry.startTime });
        }
      });
    });

    // Observe different performance metrics
    try {
      observer.observe({ entryTypes: ['paint', 'navigation', 'resource'] });
    } catch (error) {
      // Fallback for older browsers
      console.warn('Performance Observer not supported');
    }

    return () => {
      observer.disconnect();
    };
  }, []);
}