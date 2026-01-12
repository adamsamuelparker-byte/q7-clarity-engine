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

const products = [
  {
    title: "Business Funding",
    description: "Access working capital and growth finance tailored to your business needs.",
    href: "/business-funding",
    icon: <Banknote className="h-6 w-6" />,
    featured: true,
  },
  {
    title: "Merchant Services",
    description: "Accept payments efficiently with solutions that grow with your business.",
    href: "/merchant-services",
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    title: "Asset Finance",
    description: "Finance equipment and vehicles without depleting your working capital.",
    href: "/asset-finance",
    icon: <Truck className="h-6 w-6" />,
  },
  {
    title: "Leasing and Rental",
    description: "Flexible leasing options for equipment, vehicles, and technology.",
    href: "/leasing-rental",
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    title: "Tracking and Protection",
    description: "Monitor and protect your valuable assets with advanced tracking solutions.",
    href: "/tracking-protection",
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    title: "Banking and Business Services",
    description: "Streamline your business operations with tailored banking solutions.",
    href: "/banking-services",
    icon: <Landmark className="h-6 w-6" />,
    featured: true,
  },
];

const reassuranceItems = [
  "Tailored funding & working capital",
  "Asset finance, leasing & payments",
  "One team, end to end",
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />
      
      <main className="flex-1">
        {/* Hero Section - Reduced height, calmer presence */}
        <section className="bg-primary text-primary-foreground pt-20 pb-24 md:pt-24 md:pb-32">
          <div className="container-hero">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.25] mb-5 animate-slide-up tracking-tight">
                Financial solutions, organised for your business
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 mb-6 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: "80ms" }}>
                We help businesses access the right funding, services, and solutions—guiding you through every step of the process.
              </p>
              
              {/* Horizontal Reassurance Strip */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5 animate-slide-up text-primary-foreground/60 text-sm" style={{ animationDelay: "120ms" }}>
                {reassuranceItems.map((item, index) => (
                  <span key={index} className="flex items-center">
                    <span>{item}</span>
                    {index < reassuranceItems.length - 1 && (
                      <span className="ml-3 text-primary-foreground/30">|</span>
                    )}
                  </span>
                ))}
              </div>
              
              {/* Bespoke Support Line */}
              <p className="text-sm text-primary-foreground/50 mb-8 max-w-md leading-relaxed animate-slide-up" style={{ animationDelay: "160ms" }}>
                We assess your needs, source the right partners, and manage the process for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: "200ms" }}>
                <EnquiryForm
                  triggerVariant="hero"
                  triggerSize="lg"
                  triggerText="Get Started"
                />
                <EnquiryForm
                  triggerVariant="hero-outline"
                  triggerSize="lg"
                  triggerText="Speak to Our Team"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section - Pulled up with negative margin for flow */}
        <section className="pt-16 pb-20 md:pt-20 md:pb-28 -mt-6 relative z-10">
          <div className="container-content">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                Our Solutions
              </h2>
              <p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
                Explore our range of financial and business solutions designed to support your growth
              </p>
            </div>

            {/* Asymmetric Grid - Breaking perfect symmetry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
              {/* First row - varied widths */}
              <div className="lg:col-span-5">
                <ProductTile
                  {...products[0]}
                  className="animate-fade-in h-full"
                  style={{ animationDelay: "0ms" } as React.CSSProperties}
                />
              </div>
              <div className="lg:col-span-4">
                <ProductTile
                  {...products[1]}
                  className="animate-fade-in h-full"
                  style={{ animationDelay: "50ms" } as React.CSSProperties}
                />
              </div>
              <div className="lg:col-span-3">
                <ProductTile
                  {...products[2]}
                  className="animate-fade-in h-full"
                  style={{ animationDelay: "100ms" } as React.CSSProperties}
                />
              </div>
              
              {/* Second row - different rhythm */}
              <div className="lg:col-span-3">
                <ProductTile
                  {...products[3]}
                  className="animate-fade-in h-full"
                  style={{ animationDelay: "150ms" } as React.CSSProperties}
                />
              </div>
              <div className="lg:col-span-4">
                <ProductTile
                  {...products[4]}
                  className="animate-fade-in h-full"
                  style={{ animationDelay: "200ms" } as React.CSSProperties}
                />
              </div>
              <div className="lg:col-span-5">
                <ProductTile
                  {...products[5]}
                  className="animate-fade-in h-full"
                  style={{ animationDelay: "250ms" } as React.CSSProperties}
                />
              </div>
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