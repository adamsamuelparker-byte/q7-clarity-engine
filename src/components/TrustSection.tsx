import { Shield, Users, Clock, Award } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Trusted Partners",
    description: "Working with established lenders and providers",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Dedicated support throughout your journey",
  },
  {
    icon: Clock,
    title: "Fast Decisions",
    description: "Efficient processes for quick responses",
  },
  {
    icon: Award,
    title: "Tailored Solutions",
    description: "Options matched to your business needs",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/25">
      <div className="container-content">
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-medium text-foreground mb-2">
            Why Work With Q7
          </h2>
          <p className="text-muted-foreground text-sm max-w-md">
            We organise financial solutions that work for your business
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/8 text-accent/70 mb-4">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};