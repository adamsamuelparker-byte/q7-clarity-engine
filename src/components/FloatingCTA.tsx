import { useState, useEffect } from "react";
import { EnquiryForm } from "./EnquiryForm";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { cn } from "@/lib/utils";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCTAInView, setIsCTAInView] = useState(true);

  useEffect(() => {
    const checkCTAsInView = () => {
      const ctaElements = document.querySelectorAll('[data-cta="primary"]');
      const viewportHeight = window.innerHeight;
      
      let anyInView = false;
      ctaElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight - 50 && rect.bottom > 50) {
          anyInView = true;
        }
      });
      
      setIsCTAInView(anyInView);
    };

    const checkScrollPosition = () => {
      const scrollY = window.scrollY;
      const heroThreshold = window.innerHeight * 0.6;
      setIsVisible(scrollY > heroThreshold);
    };

    checkScrollPosition();
    checkCTAsInView();

    const handleScroll = () => {
      checkScrollPosition();
      checkCTAsInView();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
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
        "bottom-6 right-6",
        "max-sm:left-4 max-sm:right-4 max-sm:bottom-4",
        shouldShow 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <div className={cn(
        "bg-primary/95 backdrop-blur-sm rounded-xl shadow-xl border border-primary-foreground/10",
        "p-5",
        "flex flex-col items-center gap-4"
      )}>
        <EnquiryForm
          triggerVariant="hero"
          triggerSize="lg"
          triggerText="Enquire now"
          triggerClassName="w-full text-base"
        />
        <WhatsAppCTA 
          text="Chat to us on WhatsApp"
          className="text-primary-foreground/70 hover:text-primary-foreground text-sm"
        />
      </div>
    </div>
  );
};
