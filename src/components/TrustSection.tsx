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
    <section className="py-10 md:py-14 section-primary">
      <div className="container-xl">
        <div className="mb-8">
          <h2 className="text-heading mb-2 text-lg md:text-xl lg:text-2xl font-semibold">
            Why Work With Q7
          </h2>
          <p className="text-muted-foreground text-sm max-w-md">
            We organise financial solutions that work for your business
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent/8 text-accent/70 mb-3">
                <item.icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-medium text-heading mb-1">
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