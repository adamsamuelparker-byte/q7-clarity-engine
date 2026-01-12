import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground section-padding-sm">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 animate-slide-up">
                About Q7
              </h1>
              <p className="text-lg text-primary-foreground/80 animate-slide-up" style={{ animationDelay: "100ms" }}>
                Your partner in organising business financial solutions
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  Who We Are
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Company background and story]
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: How we work with businesses to find solutions]
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  Why Work With Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Key differentiators and benefits]
                </p>
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
