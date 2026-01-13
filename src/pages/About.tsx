import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { FloatingCTA } from "@/components/FloatingCTA";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-section-primary">
      {/* Hero wrapper - includes header for unified fade treatment */}
      <div className="hero-wrapper">
        <Header transparent />
        
        {/* Hero Section */}
        <section className="text-primary-foreground py-8 md:py-10">
          <div className="container-lg">
            <h1 className="text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.15] animate-slide-up text-primary-foreground">
              Leadership and Experience
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground/70 mt-3 max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: "60ms" }}>
              Over 25 years of experience working with businesses of all sizes
            </p>
          </div>
        </section>
      </div>

      {/* Hero to content transition */}
      <div className="hero-fade" />

      <main className="flex-1">
        {/* Content Section */}
        <section className="section-padding section-alt">
          <div className="container-lg">
            <div className="max-w-2xl space-y-8">
              {/* Leadership Section */}
              <div className="animate-fade-in">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Q7 is led by Brian Pearson, who brings over 25 years of experience working with large corporate organisations and growing businesses.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
                  Brian has spent a significant part of his career working within major corporate environments, including BMW, gaining first hand experience of how large scale operations, finance, and decision making work in practice.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
                  For the past 20 years, his focus has been on building and refining the Q7 approach. That experience shapes how the business operates today.
                </p>
                <p className="text-foreground font-medium text-sm md:text-base mt-4">
                  Hands on, practical, and relationship led.
                </p>
              </div>

              <div className="section-divider" />

              {/* How We Work */}
              <div className="animate-fade-in" style={{ animationDelay: "60ms" }}>
                <h2 className="mb-3 text-heading text-lg md:text-xl font-semibold">
                  How We Work
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                  We believe businesses value clarity, honesty, and consistency.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-2">
                  Our approach is:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Hands on and involved</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Clear and easy to understand</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Built around long term relationships</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Focused on what works in the real world</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
                  Clients deal with one team that understands the full picture, not multiple disconnected providers.
                </p>
              </div>

              <div className="section-divider" />

              {/* Who We Work With */}
              <div className="animate-fade-in" style={{ animationDelay: "120ms" }}>
                <h2 className="mb-3 text-heading text-lg md:text-xl font-semibold">
                  Who We Work With
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                  We work with businesses across a wide range of sectors and stages, from new ventures to established companies.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-2">
                  Our clients typically want:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Clear guidance</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>A trusted point of contact</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Access to the right solutions without unnecessary complexity</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
                  We adapt our support to the needs of each business.
                </p>
              </div>

              <div className="section-divider" />

              {/* Our Role */}
              <div className="animate-fade-in" style={{ animationDelay: "180ms" }}>
                <h2 className="mb-3 text-heading text-lg md:text-xl font-semibold">
                  Our Role
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Q7 acts as an organiser and introducer, working with a network of trusted partners across funding, payments, vehicles, technology, and business support services.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
                  This allows us to focus on suitability, structure, and outcomes rather than pushing a single solution.
                </p>
              </div>

              <div className="section-divider" />

              {/* What Happens Next */}
              <div className="animate-fade-in" style={{ animationDelay: "240ms" }}>
                <h2 className="mb-3 text-heading text-lg md:text-xl font-semibold">
                  What Happens Next
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  If you would like to understand how Q7 can support your business, start an enquiry and one of the team will be in touch.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
                  We will take the time to understand your situation and explain next steps clearly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Floating CTA */}
      <FloatingCTA />

      <Footer />
    </div>
  );
};

export default About;