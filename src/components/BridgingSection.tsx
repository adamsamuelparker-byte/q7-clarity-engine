import { Users, Compass, Handshake } from "lucide-react";

const supportPoints = [
  {
    icon: Users,
    text: "A single point of contact for all your business needs",
  },
  {
    icon: Compass,
    text: "Bespoke solutions tailored to your goals",
  },
  {
    icon: Handshake,
    text: "End to end support from enquiry to completion",
  },
];

export const BridgingSection = () => {
  return (
    <section className="py-10 md:py-14 section-primary">
      <div className="container-lg text-center">
        <h2 className="text-xl md:text-2xl lg:text-[1.75rem] font-semibold text-heading mb-3">
          How we work
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-sm md:text-base">
          We take a different approach. Rather than sending you to multiple providers, 
          we organise everything through one dedicated team who understands your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8">
          {supportPoints.map((point, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center px-3"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <point.icon className="h-4 w-4 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mid-page reassurance paragraph */}
        <div className="max-w-xl mx-auto">
          <p className="text-xs md:text-sm text-muted-foreground/70 leading-relaxed">
            Q7 acts as your advisory partner, helping you navigate the options and find solutions 
            that fit your business. There's no pressure, just honest guidance from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
};