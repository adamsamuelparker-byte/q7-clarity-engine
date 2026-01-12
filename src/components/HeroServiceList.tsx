import logoImage from "@/assets/q7-logo.png";

const services = [
  "Funding",
  "Payments",
  "Asset finance",
  "Leasing",
  "Business services",
];

export const HeroServiceList = () => {
  return (
    <div className="flex flex-col gap-3">
      {services.map((service, index) => (
        <div 
          key={service} 
          className="flex items-center gap-3 animate-fade-in"
          style={{ animationDelay: `${200 + index * 80}ms` }}
        >
          <img 
            src={logoImage}
            alt=""
            className="h-10 w-auto opacity-70"
            aria-hidden="true"
          />
          <span className="text-sm text-primary-foreground/50 font-normal">
            {service}
          </span>
        </div>
      ))}
    </div>
  );
};
