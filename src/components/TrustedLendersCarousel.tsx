// 17 lender logos with their names
const lenders = [
  { name: "365 Finance", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=120&h=60&fit=crop&q=80" },
  { name: "YouLend" },
  { name: "Funding Circle" },
  { name: "iwoca" },
  { name: "Capital On Tap" },
  { name: "Triver" },
  { name: "ReCap" },
  { name: "Capify" },
  { name: "Sigma Lending" },
  { name: "Swiftfund" },
  { name: "Got Capital" },
  { name: "MixCap" },
  { name: "Bizcap" },
  { name: "MCL Finance" },
  { name: "Cube Funder" },
  { name: "Multifi" },
  { name: "Swish Fund" },
];

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
            {lenders.map((lender, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 mx-3 md:mx-4"
              >
                <div className="bg-card border border-card-border rounded-lg px-4 py-2.5 md:px-5 md:py-3 whitespace-nowrap">
                  <span className="text-xs md:text-sm font-medium text-muted-foreground">
                    {lender.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {lenders.map((lender, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 mx-3 md:mx-4"
              >
                <div className="bg-card border border-card-border rounded-lg px-4 py-2.5 md:px-5 md:py-3 whitespace-nowrap">
                  <span className="text-xs md:text-sm font-medium text-muted-foreground">
                    {lender.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};