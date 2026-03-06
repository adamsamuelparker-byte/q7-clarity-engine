import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
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

export const ServicesDiscoverySection = () => {
  const isMobile = useIsMobile();

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
                className="flex items-center justify-between py-4 text-foreground/80 hover:text-foreground transition-colors group"
              >
                <span className="text-base">{service.name}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground/50 group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-muted/30 border-y border-border py-8">
      <div className="container-xl">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-5">
          What we can help with
        </p>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <div className="grid grid-cols-5 gap-x-8 gap-y-4">
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
