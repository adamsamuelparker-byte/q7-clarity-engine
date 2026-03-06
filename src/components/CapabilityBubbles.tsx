import { Link } from "react-router-dom";

const capabilities = [
  { name: "Business Funding", href: "/business-funding" },
  { name: "Card Processing & Merchant Services", href: "/payments-merchant" },
  { name: "Emergency Funding", href: "/business-funding/emergency-funding" },
  { name: "Merchant Cash Advance", href: "/business-funding/merchant-cash-advance" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing & Rental", href: "/leasing-rental" },
  { name: "E-Moped & E-Bike", href: "/vehicles-mobility" },
  { name: "Tracking & Protect", href: "/tracking-protection" },
  { name: "Bank Accounts & Accounting", href: "/banking-accounting" },
  { name: "Business Support", href: "/business-support" },
];

export const CapabilityBubbles = () => {
  return (
    <section 
      className="-mt-px py-8 md:py-10 section-alt"
    >
      <div className="container-xl">
        <p 
          className="text-xs font-semibold uppercase tracking-wider mb-5 md:mb-6 text-muted-foreground"
        >
          What we can help with
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {capabilities.map((capability) => (
            <Link
              key={capability.name}
              to={capability.href}
              className="group block rounded-md overflow-hidden bg-card transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/20"
              style={{
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Top green strip */}
              <div 
                className="h-[4px] w-full transition-colors duration-300 bg-primary/50 group-hover:bg-primary"
              />
              
              <div className="px-4 py-4 md:px-5 md:py-5 min-h-[52px] md:min-h-[60px] flex items-center">
                <span className="text-sm md:text-base font-semibold text-heading leading-tight">
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
