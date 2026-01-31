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
              className="group block rounded-md px-4 py-4 md:px-5 md:py-5 min-h-[56px] md:min-h-[64px] transition-all duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-accent/20"
              style={{
                backgroundColor: 'hsl(215, 20%, 90%)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.10), 0 2px 4px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span 
                className="text-sm md:text-base font-semibold transition-colors leading-tight group-hover:text-[hsl(195,65%,28%)]"
                style={{ color: 'hsl(220, 45%, 18%)' }}
              >
                {capability.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
