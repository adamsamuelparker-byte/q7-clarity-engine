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
    <section className="section-padding-sm bg-secondary/40">
      <div className="container-content">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Why Work With Q7
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We organise financial solutions that work for your business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/8 text-accent mb-5">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
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