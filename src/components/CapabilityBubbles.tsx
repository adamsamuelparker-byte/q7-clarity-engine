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
    <section className="section-alt -mt-px py-6 md:py-8">
      <div className="container-xl">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 md:mb-5">
          What we can help with
        </p>
        
        {/* Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {capabilities.map((capability) => (
            <Link
              key={capability.name}
              to={capability.href}
              className="group block bg-card rounded-lg px-3 py-3 md:px-4 md:py-4 min-h-[48px] md:min-h-[52px] border border-card-border hover:border-card-border-hover transition-all duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              <span 
                className="text-sm md:text-base font-semibold transition-colors leading-tight group-hover:text-[hsl(180,50%,32%)]"
                style={{ color: 'hsl(222, 47%, 25%)' }}
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