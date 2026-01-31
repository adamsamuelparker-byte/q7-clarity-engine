import lenderLogos from "@/assets/lenders/lender-logos.png";

export const TrustedLendersCarousel = () => {
  return (
    <section 
      className="py-8 md:py-10"
      style={{ 
        backgroundColor: '#e8eaef',
        borderTop: '3px solid hsl(215, 25%, 85%)',
        borderBottom: '1px solid hsl(215, 25%, 85%)'
      }}
    >
      <div className="container-xl">
        <p 
          className="text-xs font-semibold uppercase tracking-wider mb-5 text-center"
          style={{ color: 'hsl(222, 47%, 25%)' }}
        >
          Access to a wide panel of UK lenders
        </p>
        
        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Fade edges for premium feel */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #e8eaef, transparent)' }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #e8eaef, transparent)' }}
          />
          
          {/* Scrolling logo strip */}
          <div className="flex animate-marquee">
            <img 
              src={lenderLogos} 
              alt="Trusted funding partners" 
              className="h-16 md:h-20 w-auto flex-shrink-0"
            />
            <img 
              src={lenderLogos} 
              alt="" 
              aria-hidden="true"
              className="h-16 md:h-20 w-auto flex-shrink-0 ml-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
