import { useState, useEffect } from "react";
import { EnquiryForm } from "./EnquiryForm";
import { cn } from "@/lib/utils";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCTAInView, setIsCTAInView] = useState(true); // Start hidden until we scroll past hero

  useEffect(() => {
    // Track visibility of other CTA buttons
    const checkCTAsInView = () => {
      const ctaElements = document.querySelectorAll('[data-cta="primary"]');
      const viewportHeight = window.innerHeight;
      
      let anyInView = false;
      ctaElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Check if element is in viewport (with some padding)
        if (rect.top < viewportHeight - 50 && rect.bottom > 50) {
          anyInView = true;
        }
      });
      
      setIsCTAInView(anyInView);
    };

    // Check if we've scrolled past hero section
    const checkScrollPosition = () => {
      const scrollY = window.scrollY;
      const heroThreshold = window.innerHeight * 0.6; // 60% of viewport height
      setIsVisible(scrollY > heroThreshold);
    };

    // Initial checks
    checkScrollPosition();
    checkCTAsInView();

    // Add scroll listener
    const handleScroll = () => {
      checkScrollPosition();
      checkCTAsInView();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Also observe DOM changes for dynamic CTAs
    const observer = new MutationObserver(() => {
      checkCTAsInView();
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['data-cta']
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const shouldShow = isVisible && !isCTAInView;

  return (
    <div
      className={cn(
        "fixed z-40 transition-all duration-300 ease-out",
        // Desktop: bottom right corner
        "bottom-6 right-6",
        // Mobile: full width bar at bottom
        "max-sm:left-4 max-sm:right-4 max-sm:bottom-4",
        shouldShow 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <div className={cn(
        "bg-primary/95 backdrop-blur-sm rounded-xl shadow-lg border border-primary-foreground/10",
        // Desktop: compact
        "p-3 sm:p-4",
        // Mobile: full width centered
        "max-sm:flex max-sm:items-center max-sm:justify-between max-sm:gap-3"
      )}>
        <p className="text-primary-foreground/70 text-xs sm:text-sm mb-2 max-sm:mb-0 max-sm:flex-1">
          Ready to get started?
        </p>
        <EnquiryForm
          triggerVariant="hero"
          triggerSize="default"
          triggerText="Start Your Enquiry"
          triggerClassName="w-full sm:w-auto text-sm"
        />
      </div>
    </div>
  );
};
