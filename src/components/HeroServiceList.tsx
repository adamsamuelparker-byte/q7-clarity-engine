import logoImage from "@/assets/q7-logo.png";

const services = [
  "Business Funding",
  "Merchant Services (Card Machines and EPOS)",
  "Asset Finance",
  "Leasing and Rental",
  "Vehicles and Mobility",
  "Tracking and Protection",
  "Banking and Accounting Services",
];

export const HeroServiceList = () => {
  return (
    <div className="flex flex-col gap-4">
      {services.map((service, index) => (
        <div 
          key={service} 
          className="flex items-center gap-2.5 animate-fade-in"
          style={{ animationDelay: `${200 + index * 80}ms` }}
        >
          <img 
            src={logoImage}
            alt=""
            className="h-3.5 w-auto opacity-50"
            aria-hidden="true"
          />
          <span className="text-sm text-primary-foreground/40 font-normal">
            {service}
          </span>
        </div>
      ))}
    </div>
  );
};
