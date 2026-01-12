import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const services = [
  { name: "Business Funding", href: "/business-funding" },
  { name: "Merchant Services (Card Machines and EPOS)", href: "/merchant-services" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing and Rental", href: "/leasing-rental" },
  { name: "Vehicles and Mobility", href: "/asset-finance" },
  { name: "Tracking and Protection", href: "/tracking-protection" },
  { name: "Banking and Accounting Services", href: "/banking-services" },
];

export const ServicesDiscoverySection = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  // Mobile: Expandable accordion
  if (isMobile) {
    return (
      <section className="bg-muted/50 border-y border-border">
        <div className="container-lg">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="w-full flex items-center justify-between py-4 text-left">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Our Services
              </span>
              <ChevronDown 
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col divide-y divide-border pb-4">
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
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>
    );
  }

  // Desktop: Full width grid
  return (
    <section className="bg-muted/30 border-y border-border py-8">
      <div className="container-xl">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-5">
          What we can help with
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
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
    </section>
  );
};
