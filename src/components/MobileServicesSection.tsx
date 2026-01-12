import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const mobileServices = [
  { name: "Business Funding", href: "/business-funding" },
  { name: "Merchant Services (Card Machines and EPOS)", href: "/merchant-services" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing and Rental", href: "/leasing-rental" },
  { name: "Vehicles and Mobility", href: "/asset-finance" },
  { name: "Tracking and Protection", href: "/tracking-protection" },
  { name: "Banking and Accounting Services", href: "/banking-services" },
];

export const MobileServicesSection = () => {
  return (
    <section className="lg:hidden bg-primary/95 border-t border-primary-foreground/10">
      <div className="container-lg py-8">
        <h2 className="text-sm font-medium text-primary-foreground/60 mb-4 uppercase tracking-wider">
          Our Services
        </h2>
        <div className="flex flex-col divide-y divide-primary-foreground/10">
          {mobileServices.map((service) => (
            <Link
              key={service.name}
              to={service.href}
              className="flex items-center justify-between py-3.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
            >
              <span className="text-sm font-normal">{service.name}</span>
              <ChevronRight className="h-4 w-4 text-primary-foreground/30 group-hover:text-accent transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
