import lenderLogos from "@/assets/lenders/lender-logos.png";

export const TrustedLendersCarousel = () => {
  return (
    <section 
      className="py-6 md:py-8 border-y"
      style={{ 
        backgroundColor: '#f0f2f5',
        borderColor: 'hsl(215, 20%, 85%)'
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
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #f0f2f5, transparent)' }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #f0f2f5, transparent)' }}
          />
          
          {/* Scrolling logo strip */}
          <div className="flex animate-marquee">
            <img 
              src={lenderLogos} 
              alt="Trusted funding partners" 
              className="h-12 md:h-14 w-auto flex-shrink-0"
            />
            <img 
              src={lenderLogos} 
              alt="" 
              aria-hidden="true"
              className="h-12 md:h-14 w-auto flex-shrink-0 ml-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
