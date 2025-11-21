import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

// Hook to track page views on route changes
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever location changes
    trackPageView(location.pathname + location.search);
  }, [location]);
};
