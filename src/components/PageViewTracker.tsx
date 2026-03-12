import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const getDeviceType = (width: number): string => {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

export const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const deviceType = getDeviceType(screenWidth);

    // Don't track the /tracking page itself
    if (location.pathname === "/tracking") return;

    supabase
      .from("page_views")
      .insert({
        page_url: location.pathname,
        device_type: deviceType,
        screen_width: screenWidth,
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
      })
      .then(); // fire and forget
  }, [location.pathname]);

  return null;
};
