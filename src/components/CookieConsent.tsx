import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

export const CookieConsent = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("q7-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("q7-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("q7-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div ref={ref} className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up" {...props}>
      <div className="container-wide pb-5">
        <div className="bg-card rounded-lg shadow-lg border border-border p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1 flex items-start gap-3">
            <Cookie className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
            <div>
              <h3 className="text-sm font-semibold mb-1 text-heading">We use cookies</h3>
              <p className="text-sm text-muted-foreground mb-0">
                We use essential cookies to make our website work and analytics cookies to understand how visitors use our site. Read our{" "}
                <Link to="/privacy-policy" className="text-accent hover:text-accent-hover underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                for more details.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={handleDecline}>
              Decline
            </Button>
            <Button variant="accent" size="sm" onClick={handleAccept}>
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

CookieConsent.displayName = "CookieConsent";
