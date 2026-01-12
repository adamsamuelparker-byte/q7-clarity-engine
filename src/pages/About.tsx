import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-section-primary">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground section-padding-xs">
          <div className="container-lg">
            <h1 className="animate-slide-up text-primary-foreground">
              About Q7
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/70 mt-4 max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: "60ms" }}>
              Your partner in organising business financial solutions
            </p>
          </div>
        </section>

        {/* Hero to content transition */}
        <div className="hero-fade h-6 md:h-8" />

        {/* Content Section */}
        <section className="section-padding section-primary">
          <div className="container-lg">
            <div className="max-w-2xl space-y-10">
              <div className="animate-fade-in">
                <h2 className="mb-4 text-heading">
                  Who We Are
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Q7 Business and Financial Solutions is dedicated to helping UK businesses access the financial tools and services they need to grow and succeed. We act as your single point of contact, connecting you with trusted providers across funding, payments, assets, and support services.
                </p>
              </div>

              <div className="section-divider" />

              <div className="animate-fade-in" style={{ animationDelay: "60ms" }}>
                <h2 className="mb-4 text-heading">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Rather than sending you to multiple providers, we organise everything through one dedicated team who understands your business. We take the time to understand your needs and connect you with the right solutions, handling the complexity so you can focus on running your business.
                </p>
              </div>

              <div className="section-divider" />

              <div className="animate-fade-in" style={{ animationDelay: "120ms" }}>
                <h2 className="mb-4 text-heading">
                  Why Work With Us
                </h2>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>One team, end to end support from enquiry to completion</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Access to a wide network of trusted providers and lenders</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Bespoke solutions tailored to your business goals</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Transparent guidance with no hidden costs or surprises</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default About;