import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FloatingCTA } from "@/components/FloatingCTA";
import type { SubServicePageData } from "@/data/subServicePages";

interface SubServicePageLayoutProps {
  subService: SubServicePageData;
}

export const SubServicePageLayout = ({ subService }: SubServicePageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-section-primary">
      {/* Hero wrapper - includes header for unified fade treatment */}
      <div className="hero-wrapper">
        <Header transparent />
        
        {/* Breadcrumb - tighter spacing on mobile */}
        <div className="border-b border-primary-foreground/10">
          <div className="container-wide py-2 md:py-3">
            <nav className="flex items-center text-xs md:text-sm text-primary-foreground/50 flex-wrap gap-0.5">
              <Link to="/" className="hover:text-primary-foreground transition-colors min-h-[40px] flex items-center">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 mx-1" />
              <Link to={`/${subService.parentSlug}`} className="hover:text-primary-foreground transition-colors min-h-[40px] flex items-center">
                {subService.parentName}
              </Link>
              <ChevronRight className="h-3 w-3 mx-1" />
              <span className="text-primary-foreground">{subService.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section - Text left, image right, tighter spacing */}
        <section className="text-primary-foreground py-8 md:py-12 lg:py-14">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center md:pl-[4%] lg:pl-[6%]">
              {/* Text content - left side with centered block */}
              <div className="max-w-xl mx-auto md:mx-0">
                <h1 className="text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.15] mb-3 animate-slide-up text-primary-foreground">
                  {subService.hero.headline}
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-primary-foreground/70 leading-relaxed animate-slide-up max-w-md" style={{ animationDelay: "60ms" }}>
                  {subService.hero.intro}
                </p>
              </div>
              
              {/* Image - right side */}
              <div className="animate-fade-in order-first lg:order-last" style={{ animationDelay: "180ms" }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-primary-foreground/10">
                  <img 
                    src={subService.heroImage} 
                    alt={subService.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Hero to content transition - reduced height */}
      <div className="hero-fade h-4 md:h-6" />
      
      <main className="flex-1">

        {/* Overview Section - on alt background */}
        <section className="py-14 md:py-16 lg:py-20 section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-heading">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {subService.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Subtle divider */}
        <div className="section-divider" />

        {/* How Q7 Helps Section - on primary background */}
        <section className="py-14 md:py-16 lg:py-20 section-primary">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-heading">
                How Q7 Helps
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {subService.howQ7Helps}
              </p>
            </div>
          </div>
        </section>

        {/* Subtle divider */}
        <div className="section-divider" />

        {/* What Happens Next Section - on alt background */}
        <section className="py-14 md:py-16 lg:py-20 section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-heading">
                What Happens Next
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {subService.whatHappensNext}
              </p>
            </div>
          </div>
        </section>

        {/* Back to Parent Link - on primary background */}
        <section className="pb-8 section-primary">
          <div className="container-lg">
            <Link 
              to={`/${subService.parentSlug}`}
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {subService.parentName}
            </Link>
          </div>
        </section>

        {/* CTA Section with reassurance */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground relative">
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-section-primary/10 to-transparent pointer-events-none" />
          <div className="container-md text-center relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-[1.75rem] font-semibold mb-3 text-primary-foreground">
              Interested in {subService.name.toLowerCase()}?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Get in touch to discuss your requirements and find out how we can help.
            </p>
            <div className="flex flex-col items-center" data-cta="primary">
              <EnquiryForm
                preSelectedCategory={subService.parentSlug}
                preSelectedSubProduct={`${subService.parentSlug}-${subService.slug}`}
                triggerVariant="hero"
                triggerSize="lg"
                triggerText="Start Your Enquiry"
              />
              <p className="text-xs text-primary-foreground/40 mt-3">
                No obligation. We'll help you understand your options.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Floating CTA */}
      <FloatingCTA />

      <Footer />
    </div>
  );
};