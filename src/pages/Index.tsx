import { useState } from "react";
import { 
  Banknote, 
  CreditCard, 
  Zap,
  Truck, 
  Building2, 
  Bike, 
  MapPin, 
  Landmark,
  HeadphonesIcon,
  ArrowRight,
  PoundSterling
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustSection } from "@/components/TrustSection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { IntentSelector } from "@/components/IntentSelector";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { TrustedLendersCarousel } from "@/components/TrustedLendersCarousel";
import { EmergencyFundingBanner } from "@/components/EmergencyFundingBanner";

const primaryProducts = [
  {
    title: "Business Funding",
    description: "Access working capital and growth finance tailored to your business needs. From £10,000 to £200,000+.",
    href: "/business-funding",
    icon: <Banknote className="h-7 w-7" />,
  },
  {
    title: "Emergency Funding",
    description: "Fast-track funding when your business needs it most. Quick decisions, minimal paperwork.",
    href: "/business-funding/emergency-funding",
    icon: <Zap className="h-7 w-7" />,
  },
  {
    title: "Card Processing & Merchant Services",
    description: "Accept payments efficiently with solutions that grow with your business.",
    href: "/payments-merchant",
    icon: <CreditCard className="h-7 w-7" />,
  },
];

const secondaryServices = [
  {
    title: "Merchant Cash Advance",
    description: "Advance funding against your future card sales with flexible repayments.",
    href: "/business-funding/merchant-cash-advance",
    icon: <PoundSterling className="h-6 w-6" />,
  },
  {
    title: "Asset Finance",
    description: "Finance equipment and vehicles without depleting your working capital.",
    href: "/asset-finance",
    icon: <Truck className="h-6 w-6" />,
  },
  {
    title: "Leasing & Rental",
    description: "Flexible leasing options for equipment, vehicles, and technology.",
    href: "/leasing-rental",
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    title: "E-Moped & E-Bike",
    description: "Electric mobility solutions for urban deliveries and business operations.",
    href: "/e-moped-e-bike",
    icon: <Bike className="h-6 w-6" />,
  },
  {
    title: "Tracking & Protect",
    description: "Monitor and protect your valuable assets with advanced tracking solutions.",
    href: "/tracking-protection",
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    title: "Business Bank Accounts & Accounting Software",
    description: "Streamline your business finances with banking and accounting services.",
    href: "/banking-accounting",
    icon: <Landmark className="h-6 w-6" />,
  },
  {
    title: "Business Support",
    description: "Operational support and business services to help everything run smoothly.",
    href: "/business-support",
    icon: <HeadphonesIcon className="h-6 w-6" />,
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
    <div className="min-h-screen flex flex-col bg-section-primary">
      {/* Hero wrapper */}
      <div className="hero-wrapper">
        <Header transparent />
        
        <section className="text-primary-foreground pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-8 md:pb-14 lg:pt-6 lg:pb-10">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-xl mx-auto md:mx-0 md:ml-[8%] lg:ml-[12%]">
              <h1 className="text-[2rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] font-semibold leading-[1.2] mb-3 sm:mb-4 animate-slide-up text-left text-primary-foreground">
                Business solutions, organised for your business
              </h1>
              
              <p className="text-base md:text-lg text-accent font-medium mb-5 animate-slide-up text-left" style={{ animationDelay: "40ms" }}>
                One team. End to end.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 font-medium mb-8 leading-relaxed animate-slide-up text-left max-w-md" style={{ animationDelay: "80ms" }}>
                From funding to payments, assets, and services, one team helps you organise what your business needs.
              </p>
              
              <div className="mb-6 animate-slide-up" style={{ animationDelay: "120ms" }}>
                <IntentSelector
                  selectedService={selectedIntent}
                  onServiceSelect={handleIntentSelect}
                />
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: "160ms" }} data-cta="primary">
                <EnquiryForm
                  triggerVariant="hero"
                  triggerSize="lg"
                  triggerText="Start Your Enquiry"
                  preSelectedService={selectedIntent || undefined}
                  preSelectedServiceName={selectedIntentName || undefined}
                />
                <p className="text-sm text-primary-foreground/60 mt-3 text-left">
                  No obligation. One of the team will be in touch.
                </p>
                <div className="mt-5">
                  <WhatsAppCTA variant="default" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="flex-1">
        {/* Trusted Lenders Carousel */}
        <TrustedLendersCarousel />

        {/* PRIMARY PRODUCTS - 3 main offerings */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'hsl(0, 0%, 99%)' }}>
          <div className="container-xl">
            <div className="mb-12 md:mb-14">
              <h2 className="text-heading font-bold text-2xl md:text-[2.25rem] mb-3">
                Our Core Solutions
              </h2>
              <p className="text-muted-foreground max-w-lg text-base md:text-lg">
                The three things most businesses need — funding, emergency support, and payment processing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {primaryProducts.map((product, index) => (
                <Link
                  key={product.title}
                  to={product.href}
                  className="group block rounded-lg overflow-hidden bg-card border-2 border-transparent hover:border-primary/20 transition-all duration-300 ease-out hover:-translate-y-1 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 60}ms`,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  {/* Green accent strip */}
                  <div 
                    className="h-[6px] w-full transition-colors duration-300"
                    style={{ backgroundColor: 'hsl(152, 45%, 28%)' }}
                  />
                  <div className="p-8 md:p-10">
                    <div className="mb-5 text-primary">
                      {product.icon}
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl mb-3 text-heading">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center text-base font-semibold text-accent transition-all duration-300 group-hover:translate-x-0.5">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECONDARY SERVICES GRID */}
        <section className="py-16 md:py-20 section-alt">
          <div className="container-xl">
            <div className="mb-12 md:mb-14">
              <h2 className="text-heading font-bold mb-3">
                More Business Solutions
              </h2>
              <p className="text-muted-foreground max-w-lg text-base md:text-lg">
                Additional services to support every part of your business
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {secondaryServices.map((service, index) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group block rounded-lg overflow-hidden bg-card transition-all duration-300 ease-out hover:-translate-y-1 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 40}ms`,
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div 
                    className="h-[4px] w-full transition-colors duration-300 group-hover:bg-secondary"
                    style={{ backgroundColor: 'hsl(152, 45%, 28%, 0.5)' }}
                  />
                  <div className="p-6 md:p-7">
                    <div className="mb-4 text-secondary">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-heading leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-accent transition-all duration-300 group-hover:translate-x-0.5">
                      <span>Learn more</span>
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Q7 */}
        <TrustSection />
      </main>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Index;
