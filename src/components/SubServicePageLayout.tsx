import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import type { SubServicePageData } from "@/data/subServicePages";

interface SubServicePageLayoutProps {
  subService: SubServicePageData;
}

export const SubServicePageLayout = ({ subService }: SubServicePageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border/50">
          <div className="container-wide py-3">
            <nav className="flex items-center text-xs text-muted-foreground flex-wrap gap-0.5">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 mx-1" />
              <Link to={`/${subService.parentSlug}`} className="hover:text-foreground transition-colors">
                {subService.parentName}
              </Link>
              <ChevronRight className="h-3 w-3 mx-1" />
              <span className="text-foreground">{subService.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section - Text left, image right */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20 lg:py-24">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text content - left side */}
              <div className="max-w-xl">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-6 animate-slide-up">
                  {subService.hero.headline}
                </h1>
                <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed animate-slide-up" style={{ animationDelay: "60ms" }}>
                  {subService.hero.intro}
                </p>
              </div>
              
              {/* Image - right side */}
              <div className="animate-fade-in order-first lg:order-last" style={{ animationDelay: "180ms" }}>
                <div className="aspect-[4/3] bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 flex items-center justify-center">
                  <div className="text-primary-foreground/20 text-sm">
                    Service Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-14 md:py-16 lg:py-20">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-foreground">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {subService.overview}
              </p>
            </div>
          </div>
        </section>

        {/* How Q7 Helps Section */}
        <section className="py-14 md:py-16 lg:py-20 bg-secondary/30">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-foreground">
                How Q7 Helps
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {subService.howQ7Helps}
              </p>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="py-14 md:py-16 lg:py-20">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-foreground">
                What Happens Next
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {subService.whatHappensNext}
              </p>
            </div>
          </div>
        </section>

        {/* Back to Parent Link */}
        <section className="pb-8">
          <div className="container-lg">
            <Link 
              to={`/${subService.parentSlug}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {subService.parentName}
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container-md text-center">
            <h2 className="text-xl md:text-2xl font-medium mb-3 text-primary-foreground">
              Interested in {subService.name.toLowerCase()}?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Get in touch to discuss your requirements and find out how we can help.
            </p>
            <div className="flex justify-center">
              <EnquiryForm
                preSelectedCategory={subService.parentSlug}
                preSelectedSubProduct={`${subService.parentSlug}-${subService.slug}`}
                triggerVariant="hero"
                triggerSize="lg"
                triggerText="Start Your Enquiry"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
