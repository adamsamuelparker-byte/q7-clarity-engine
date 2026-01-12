import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  { name: "Business Funding", href: "/business-funding" },
  { name: "Merchant Services", href: "/merchant-services" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing and Rental", href: "/leasing-rental" },
  { name: "Vehicles and Mobility", href: "/asset-finance" },
  { name: "Tracking and Protection", href: "/tracking-protection" },
  { name: "Banking Services", href: "/banking-services" },
];

export const ServicesDiscoverySection = () => {
  const isMobile = useIsMobile();

  // Mobile: Always visible list (no collapsible)
  if (isMobile) {
    return (
      <section className="bg-muted/50 border-y border-border py-4">
        <div className="container-lg">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Our Services
          </p>
          <div className="flex flex-col divide-y divide-border">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="flex items-center justify-between py-3.5 text-foreground/80 hover:text-foreground transition-colors group"
              >
                <span className="text-sm">{service.name}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: Rounded teal container
  return (
    <section className="bg-muted/30 border-y border-border py-8">
      <div className="container-xl">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-5">
          What we can help with
        </p>
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
          <div className="grid grid-cols-4 gap-x-8 gap-y-4">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
