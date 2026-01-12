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
  "Tailored funding and working capital",
  "Asset finance, leasing and payments",
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
            <div className="max-w-xl">
              {/* 1. Primary Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-medium leading-[1.2] mb-6 animate-slide-up">
                Financial solutions, organised for your business
              </h1>
              
              {/* 2. Intent Selector */}
              <div className="mb-6 animate-slide-up" style={{ animationDelay: "60ms" }}>
                <IntentSelector
                  selectedService={selectedIntent}
                  onServiceSelect={handleIntentSelect}
                />
              </div>
              
              {/* 3. Supporting Sentence */}
              <p className="text-base md:text-lg text-primary-foreground/75 mb-5 leading-relaxed animate-slide-up" style={{ animationDelay: "100ms" }}>
                We help businesses access the right funding, services, and solutions, guiding you through every step of the process.
              </p>
              
              {/* 4. Reassurance Strip */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mb-4 animate-slide-up text-primary-foreground/60 text-sm font-medium" style={{ animationDelay: "140ms" }}>
                {reassuranceItems.map((item, index) => (
                  <span key={index} className="flex items-center">
                    <span>{item}</span>
                    {index < reassuranceItems.length - 1 && (
                      <span className="ml-2 text-primary-foreground/30">·</span>
                    )}
                  </span>
                ))}
              </div>
              
              {/* 5. Trust Sentence */}
              <p className="text-sm text-primary-foreground/50 mb-8 max-w-md leading-relaxed animate-slide-up" style={{ animationDelay: "180ms" }}>
                We assess your needs, source the right partners, and manage the process for you.
              </p>
              
              {/* 6. CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: "220ms" }}>
                <EnquiryForm
                  triggerVariant="hero"
                  triggerSize="lg"
                  triggerText="Get Started"
                  preSelectedService={selectedIntent || undefined}
                  preSelectedServiceName={selectedIntentName || undefined}
                />
                <EnquiryForm
                  triggerVariant="hero-outline"
                  triggerSize="lg"
                  triggerText="Speak to Our Team"
                  isGeneralEnquiry
                />
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