import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground section-padding-xs">
          <div className="container-lg">
            <h1 className="animate-slide-up">
              About Q7
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/70 mt-4 max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: "60ms" }}>
              Your partner in organising business financial solutions
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding page-frame">
          <div className="container-lg">
            <div className="max-w-2xl space-y-10">
              <div className="animate-fade-in">
                <h2 className="mb-4 text-foreground">
                  Who We Are
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  [Placeholder: Company background and story]
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "60ms" }}>
                <h2 className="mb-4 text-foreground">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  [Placeholder: How we work with businesses to find solutions]
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "120ms" }}>
                <h2 className="mb-4 text-foreground">
                  Why Work With Us
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
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