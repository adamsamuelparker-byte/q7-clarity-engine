import { useState } from "react";
import { 
  Banknote, 
  CreditCard, 
  Truck, 
  Building2, 
  Car, 
  MapPin, 
  Landmark,
  HeadphonesIcon
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductTile } from "@/components/ProductTile";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { IntentSelector } from "@/components/IntentSelector";
import { CapabilityBubbles } from "@/components/CapabilityBubbles";
import { BridgingSection } from "@/components/BridgingSection";

const products = [
  {
    title: "Business Funding",
    description: "Access working capital and growth finance tailored to your business needs.",
    href: "/business-funding",
    icon: <Banknote className="h-5 w-5" />,
  },
  {
    title: "Payments & Merchant",
    description: "Accept payments efficiently with solutions that grow with your business.",
    href: "/payments-merchant",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Asset Finance",
    description: "Finance equipment and vehicles without depleting your working capital.",
    href: "/asset-finance",
    icon: <Truck className="h-5 w-5" />,
  },
  {
    title: "Leasing & Rental",
    description: "Flexible leasing options for equipment, vehicles, and technology.",
    href: "/leasing-rental",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Vehicles & Mobility",
    description: "Business vehicles, electric bikes, and mobility solutions for your operations.",
    href: "/vehicles-mobility",
    icon: <Car className="h-5 w-5" />,
  },
  {
    title: "Tracking & Protection",
    description: "Monitor and protect your valuable assets with advanced tracking solutions.",
    href: "/tracking-protection",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    title: "Banking & Accounting",
    description: "Streamline your business finances with banking and accounting services.",
    href: "/banking-accounting",
    icon: <Landmark className="h-5 w-5" />,
  },
  {
    title: "Business Support",
    description: "Operational support and business services to help everything run smoothly.",
    href: "/business-support",
    icon: <HeadphonesIcon className="h-5 w-5" />,
  },
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
        {/* Hero Section - Clean and focused */}
        <section className="hero-gradient text-primary-foreground pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-28 md:pb-16">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:pl-[10%] lg:pl-[15%]">
            <div className="max-w-xl mx-auto md:mx-0">
              {/* 1. Primary Headline */}
              <h1 className="text-[1.65rem] sm:text-[2rem] md:text-[2.75rem] font-semibold leading-[1.3] mb-5 animate-slide-up text-left">
                Business solutions, organised for your business
              </h1>
              
              {/* 2. Supporting Sentence */}
              <p className="text-base md:text-lg text-primary-foreground/70 font-medium mb-5 leading-relaxed animate-slide-up text-left" style={{ animationDelay: "60ms" }}>
                From funding to payments, assets, and services, one team helps you organise what your business needs.
              </p>
              
              {/* 3. Confidence Line */}
              <p className="text-sm text-primary-foreground/50 mb-8 animate-slide-up text-left" style={{ animationDelay: "100ms" }}>
                One team. End to end.
              </p>
              
              {/* 4. Intent Selector */}
              <div className="mb-6 animate-slide-up" style={{ animationDelay: "140ms" }}>
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
            </div>
          </div>
        </section>

        {/* Capability Bubbles Grid */}
        <CapabilityBubbles />

        {/* Bridging Section */}
        <BridgingSection />

        {/* Solution Cards (Primary Branches) */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
