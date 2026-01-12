import { useState } from "react";
import { 
  Banknote, 
  CreditCard, 
  Truck, 
  Building2, 
  MapPin, 
  Landmark 
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductTile } from "@/components/ProductTile";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { IntentSelector } from "@/components/IntentSelector";
import { HeroServiceList } from "@/components/HeroServiceList";

const products = [
  {
    title: "Business Funding",
    description: "Access working capital and growth finance tailored to your business needs.",
    href: "/business-funding",
    icon: <Banknote className="h-5 w-5" />,
  },
  {
    title: "Merchant Services",
    description: "Accept payments efficiently with solutions that grow with your business.",
    href: "/merchant-services",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Asset Finance",
    description: "Finance equipment and vehicles without depleting your working capital.",
    href: "/asset-finance",
    icon: <Truck className="h-5 w-5" />,
  },
  {
    title: "Leasing and Rental",
    description: "Flexible leasing options for equipment, vehicles, and technology.",
    href: "/leasing-rental",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Tracking and Protection",
    description: "Monitor and protect your valuable assets with advanced tracking solutions.",
    href: "/tracking-protection",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    title: "Banking and Business Services",
    description: "Streamline your business operations with tailored banking solutions.",
    href: "/banking-services",
    icon: <Landmark className="h-5 w-5" />,
  },
];

const reassuranceItems = [
  "Funding",
  "Payments",
  "Asset finance",
  "Leasing",
  "Business services",
  "One team, end to end",
];

const Index = () => {
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const [selectedIntentName, setSelectedIntentName] = useState<string | null>(null);

  const handleIntentSelect = (serviceId: string, serviceName: string) => {
    setSelectedIntent(serviceId);
    setSelectedIntentName(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="container-lg">
            <div className="flex items-start justify-between gap-12">
              {/* Left: Main content */}
              <div className="max-w-xl flex-1">
                {/* 1. Primary Headline */}
                <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-semibold leading-[1.25] mb-5 animate-slide-up">
                  Business solutions, organised for your business
                </h1>
                
                {/* 2. Supporting Sentence */}
                <p className="text-base md:text-lg text-primary-foreground/70 mb-6 leading-relaxed animate-slide-up" style={{ animationDelay: "60ms" }}>
                  From funding to payments, assets, and services, one team helps you organise what your business needs.
                </p>
                
                {/* Desktop: Reassurance Strip */}
                <div className="hidden md:flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-8 animate-slide-up text-primary-foreground/50 text-sm" style={{ animationDelay: "100ms" }}>
                  <div className="max-w-md">
                    {reassuranceItems.map((item, index) => (
                      <span key={index} className="inline">
                        <span>{item}</span>
                        {index < reassuranceItems.length - 1 && (
                          <span className="mx-2 text-primary-foreground/25">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* 4. Inline Rotating Intent Selector */}
                <div className="mb-8 animate-slide-up" style={{ animationDelay: "140ms" }}>
                  <IntentSelector
                    selectedService={selectedIntent}
                    onServiceSelect={handleIntentSelect}
                  />
                </div>
                
                {/* 5. Single Primary CTA */}
                <div className="animate-slide-up" style={{ animationDelay: "180ms" }}>
                  <EnquiryForm
                    triggerVariant="hero"
                    triggerSize="lg"
                    triggerText="Get Started"
                    preSelectedService={selectedIntent || undefined}
                    preSelectedServiceName={selectedIntentName || undefined}
                  />
                </div>

                {/* Mobile: Reassurance Strip - below CTA */}
                <div className="md:hidden flex flex-wrap items-center gap-x-2 gap-y-1 mt-8 pt-6 border-t border-primary-foreground/10 animate-slide-up text-primary-foreground/50 text-xs" style={{ animationDelay: "220ms" }}>
                  {reassuranceItems.map((item, index) => (
                    <span key={index} className="inline">
                      <span>{item}</span>
                      {index < reassuranceItems.length - 1 && (
                        <span className="mx-1.5 text-primary-foreground/20">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Decorative service list (desktop only) */}
              <div className="hidden lg:block pt-4">
                <HeroServiceList />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding">
          <div className="container-xl">
            <div className="mb-10">
              <h2 className="text-foreground mb-2">
                Our Solutions
              </h2>
              <p className="text-muted-foreground max-w-lg text-sm">
                Explore our range of financial and business solutions designed to support your growth
              </p>
            </div>

            {/* Grid with subtle variation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product, index) => (
                <ProductTile
                  key={product.title}
                  {...product}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 40}ms` }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <TrustSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
