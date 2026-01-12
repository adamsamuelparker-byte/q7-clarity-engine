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
    <section className="section-padding section-primary">
      <div className="container-lg text-center">
        <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold text-heading mb-4">
          How we work
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          We take a different approach. Rather than sending you to multiple providers, 
          we organise everything through one dedicated team who understands your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {supportPoints.map((point, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <point.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mid-page reassurance paragraph */}
        <div className="max-w-xl mx-auto pt-4">
          <p className="text-sm text-text-muted leading-relaxed">
            Q7 acts as your advisory partner, helping you navigate the options and find solutions 
            that fit your business. There's no pressure, just honest guidance from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
};