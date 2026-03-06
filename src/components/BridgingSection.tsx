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
    <section className="py-14 md:py-18 section-primary">
      <div className="container-lg text-center">
        <h2 className="font-bold text-heading mb-4">
          How we work
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-base md:text-lg">
          We take a different approach. Rather than sending you to multiple providers, 
          we organise everything through one dedicated team who understands your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {supportPoints.map((point, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center px-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <point.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-xl mx-auto">
          <p className="text-sm md:text-base text-muted-foreground/70 leading-relaxed">
            Q7 acts as your advisory partner, helping you navigate the options and find solutions 
            that fit your business. There's no pressure, just honest guidance from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
};
