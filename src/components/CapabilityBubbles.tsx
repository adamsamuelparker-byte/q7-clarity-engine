import { Link } from "react-router-dom";

const capabilities = [
  { name: "Business Funding", href: "/business-funding" },
  { name: "Payments and Merchant Solutions", href: "/merchant-services" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing and Rental", href: "/leasing-rental" },
  { name: "Vehicles and Mobility", href: "/asset-finance" },
  { name: "Tracking and Protection", href: "/tracking-protection" },
  { name: "Banking and Accounting Services", href: "/banking-services" },
  { name: "Business Support Services", href: "/banking-services" },
];

export const CapabilityBubbles = () => {
  return (
    <section className="bg-muted/30 border-y border-border py-10 md:py-12">
      <div className="container-xl">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6">
          What we can help with
        </p>
        
        {/* Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {capabilities.map((capability) => (
            <Link
              key={capability.name}
              to={capability.href}
              className="group block bg-background border border-border rounded-xl px-4 py-4 md:px-5 md:py-5 transition-all duration-200 hover:border-accent hover:shadow-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            >
              <span className="text-sm md:text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                {capability.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
