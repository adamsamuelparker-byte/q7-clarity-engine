import lenderLogos from "@/assets/lenders/lender-logos.png";

export const TrustedLendersCarousel = () => {
  return (
    <section 
      className="py-10 md:py-12"
      style={{ 
        backgroundColor: '#e4e7ed',
        borderTop: '4px solid hsl(215, 30%, 80%)',
        borderBottom: '1px solid hsl(215, 25%, 85%)'
      }}
    >
      <div className="container-xl">
        <p 
          className="text-sm font-semibold uppercase tracking-wider mb-6 text-center"
          style={{ color: 'hsl(222, 47%, 25%)' }}
        >
          Access to a wide panel of UK lenders
        </p>
        
        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Fade edges for premium feel */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #e4e7ed, transparent)' }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #e4e7ed, transparent)' }}
          />
          
          {/* Scrolling logo strip */}
          <div className="flex animate-marquee">
            <img 
              src={lenderLogos} 
              alt="Trusted funding partners including 365 Finance, YouLend, Funding Circle, iwoca, Capital on Tap, Triver, Recap, Capify, Sigma Lending, Swiftfund, Got Capital, MarCap, Bizcap, MCL Finance, Cube Funder, Multifi, and Swish Fund" 
              className="h-20 md:h-24 w-auto flex-shrink-0"
            />
            <img 
              src={lenderLogos} 
              alt="" 
              aria-hidden="true"
              className="h-20 md:h-24 w-auto flex-shrink-0 ml-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
