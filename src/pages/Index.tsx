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
    icon: <Banknote className="h-8 w-8" />,
  },
  {
    title: "Merchant Services",
    description: "Accept payments efficiently with solutions that grow with your business.",
    href: "/merchant-services",
    icon: <CreditCard className="h-8 w-8" />,
  },
  {
    title: "Asset Finance",
    description: "Finance equipment and vehicles without depleting your working capital.",
    href: "/asset-finance",
    icon: <Truck className="h-8 w-8" />,
  },
  {
    title: "Leasing and Rental",
    description: "Flexible leasing options for equipment, vehicles, and technology.",
    href: "/leasing-rental",
    icon: <Building2 className="h-8 w-8" />,
  },
  {
    title: "Tracking and Protection",
    description: "Monitor and protect your valuable assets with advanced tracking solutions.",
    href: "/tracking-protection",
    icon: <MapPin className="h-8 w-8" />,
  },
  {
    title: "Banking and Business Services",
    description: "Streamline your business operations with tailored banking solutions.",
    href: "/banking-services",
    icon: <Landmark className="h-8 w-8" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-slide-up">
                Financial solutions, organised for your business
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "100ms" }}>
                We help businesses access the right funding, services, and solutions. No complexity. Just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
                <EnquiryForm
                  triggerVariant="hero"
                  triggerSize="xl"
                  triggerText="Get Started"
                />
                <EnquiryForm
                  triggerVariant="hero-outline"
                  triggerSize="xl"
                  triggerText="Speak to Our Team"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Our Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our range of financial and business solutions designed to support your growth
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductTile
                  key={product.title}
                  {...product}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
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
