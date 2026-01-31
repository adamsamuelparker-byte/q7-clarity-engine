import { Link } from "react-router-dom";

const capabilities = [
  { name: "Business Funding", href: "/business-funding" },
  { name: "Payments & Merchant Services", href: "/payments-merchant" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing & Rental", href: "/leasing-rental" },
  { name: "Vehicles & Fleet Solutions", href: "/vehicles-mobility" },
  { name: "Tracking & Protection", href: "/tracking-protection" },
  { name: "Banking & Accounting", href: "/banking-accounting" },
  { name: "Business Support", href: "/business-support" },
];

export const CapabilityBubbles = () => {
  return (
    <section 
      className="-mt-px py-8 md:py-10"
      style={{ backgroundColor: 'hsl(220, 15%, 94%)' }}
    >
      <div className="container-xl">
        <p 
          className="text-xs font-semibold uppercase tracking-wider mb-5 md:mb-6"
          style={{ color: 'hsl(220, 12%, 50%)' }}
        >
          What we can help with
        </p>
        
        {/* Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {capabilities.map((capability) => (
            <Link
              key={capability.name}
              to={capability.href}
              className="group block rounded-md overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20"
              style={{
                backgroundColor: 'hsl(215, 20%, 93%)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                const strip = e.currentTarget.querySelector('[data-strip]') as HTMLElement;
                if (strip) strip.style.backgroundColor = 'hsl(195, 65%, 28%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
                const strip = e.currentTarget.querySelector('[data-strip]') as HTMLElement;
                if (strip) strip.style.backgroundColor = 'hsl(220, 45%, 20%, 0.7)';
              }}
            >
              {/* Top navy strip */}
              <div 
                data-strip
                className="h-[4px] w-full transition-colors duration-300"
                style={{ backgroundColor: 'hsl(220, 45%, 20%, 0.7)' }}
              />
              
              {/* Card content */}
              <div className="px-4 py-4 md:px-5 md:py-5 min-h-[52px] md:min-h-[60px] flex items-center">
                <span 
                  className="text-sm md:text-base font-semibold transition-colors leading-tight"
                  style={{ color: 'hsl(220, 45%, 18%)' }}
                >
                  {capability.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
