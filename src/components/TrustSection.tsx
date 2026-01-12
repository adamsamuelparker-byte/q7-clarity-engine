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
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Why Work With Q7
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We organise financial solutions that work for your business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="text-center p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
