import { Link } from "react-router-dom";

const capabilities = [
  { name: "Business Funding", href: "/business-funding" },
  { name: "Payments and Merchant", href: "/payments-merchant" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing and Rental", href: "/leasing-rental" },
  { name: "Vehicles and Mobility", href: "/vehicles-mobility" },
  { name: "Tracking and Protection", href: "/tracking-protection" },
  { name: "Banking and Accounting", href: "/banking-accounting" },
  { name: "Business Support", href: "/business-support" },
];

export const CapabilityBubbles = () => {
  return (
    <section className="section-alt py-6 md:py-8">
      <div className="container-xl">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 md:mb-5">
          What we can help with
        </p>
        
        {/* Mobile: 2 columns, Desktop: 4 columns - improved touch targets */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {capabilities.map((capability) => (
            <Link
              key={capability.name}
              to={capability.href}
              className="group block bg-card rounded-xl px-3 py-3 md:px-4 md:py-4 min-h-[48px] md:min-h-[56px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 flex items-center"
              style={{
                border: '1px solid hsl(var(--card-border))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'hsl(var(--card-border-hover))';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'hsl(var(--card-border))';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className="text-sm md:text-base font-medium text-heading group-hover:text-accent transition-colors leading-tight">
                {capability.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};