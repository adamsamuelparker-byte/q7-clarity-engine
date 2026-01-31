import lenderLogos from "@/assets/lenders/lender-logos.png";

export const TrustedLendersCarousel = () => {
  return (
    <section className="py-8 md:py-10 bg-section-alt border-y border-border/30">
      <div className="container-xl">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6 text-center">
          Access to a wide panel of UK lenders
        </p>
        
        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Fade edges for premium feel */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-section-alt to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-section-alt to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling logos */}
          <div className="flex animate-marquee">
            {/* First set of logos */}
            <div className="flex-shrink-0 flex items-center px-8">
              <img 
                src={lenderLogos} 
                alt="Trusted funding partners including 365 Finance, YouLend, Funding Circle, iwoca, Capital On Tap, Triver, ReCap, Capify, and more" 
                className="h-10 md:h-12 w-auto object-contain opacity-70"
              />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex-shrink-0 flex items-center px-8">
              <img 
                src={lenderLogos} 
                alt="" 
                aria-hidden="true"
                className="h-10 md:h-12 w-auto object-contain opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};