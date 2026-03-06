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
    <section className="py-16 md:py-20 section-primary">
      <div className="container-xl">
        <div className="mb-12">
          <h2 className="text-heading font-bold mb-3">
            Why Work With Q7
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-md">
            We organise financial solutions that work for your business
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
