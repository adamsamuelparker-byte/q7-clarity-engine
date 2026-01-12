import { useParams, Navigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ProductTile } from "@/components/ProductTile";

// Product data structure
const coreProducts: Record<string, {
  name: string;
  slug: string;
  description: string;
  intro: string;
  subProducts: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}> = {
  "business-funding": {
    name: "Business Funding",
    slug: "business-funding",
    description: "Access the capital your business needs to grow",
    intro: "Whether you need working capital, growth finance, or funds for a specific project, we help you navigate the options and find the right funding solution for your business.",
    subProducts: [
      {
        id: "unsecured-loans",
        name: "Unsecured Business Loans",
        description: "Fast access to funds without needing to secure against assets.",
      },
      {
        id: "secured-loans",
        name: "Secured Business Loans",
        description: "Larger amounts with competitive rates using asset security.",
      },
      {
        id: "invoice-finance",
        name: "Invoice Finance",
        description: "Unlock cash tied up in your outstanding invoices.",
      },
      {
        id: "merchant-cash",
        name: "Merchant Cash Advance",
        description: "Funding based on your card payment turnover.",
      },
    ],
  },
  "merchant-services": {
    name: "Merchant Services",
    slug: "merchant-services",
    description: "Accept payments efficiently and grow your business",
    intro: "From in-store terminals to online payment solutions, we help you accept payments in the way that works best for your customers and your business.",
    subProducts: [
      {
        id: "card-terminals",
        name: "Card Payment Terminals",
        description: "Countertop and portable terminals for face-to-face payments.",
      },
      {
        id: "online-payments",
        name: "Online Payment Solutions",
        description: "Secure payment gateways for your e-commerce operations.",
      },
      {
        id: "mobile-payments",
        name: "Mobile Payment Solutions",
        description: "Take payments anywhere with mobile card readers.",
      },
    ],
  },
  "asset-finance": {
    name: "Asset Finance",
    slug: "asset-finance",
    description: "Finance your equipment and vehicles",
    intro: "Spread the cost of essential equipment and vehicles while preserving your working capital. We help you find the right finance structure for your needs.",
    subProducts: [
      {
        id: "equipment-finance",
        name: "Equipment Finance",
        description: "Finance machinery, equipment, and tools for your business.",
      },
      {
        id: "vehicle-finance",
        name: "Vehicle Finance",
        description: "Cars, vans, and commercial vehicles for your fleet.",
      },
      {
        id: "refinancing",
        name: "Asset Refinancing",
        description: "Release capital from assets you already own.",
      },
    ],
  },
  "leasing-rental": {
    name: "Leasing and Rental",
    slug: "leasing-rental",
    description: "Flexible options without ownership commitment",
    intro: "Access the equipment and vehicles you need through flexible leasing and rental arrangements, with options to upgrade and adapt as your business evolves.",
    subProducts: [
      {
        id: "equipment-leasing",
        name: "Equipment Leasing",
        description: "Lease machinery and equipment with flexible terms.",
      },
      {
        id: "vehicle-leasing",
        name: "Vehicle Leasing",
        description: "Contract hire and leasing for cars and commercial vehicles.",
      },
      {
        id: "technology-rental",
        name: "Technology Rental",
        description: "Short and long-term rental for IT and technology.",
      },
    ],
  },
  "tracking-protection": {
    name: "Tracking and Protection",
    slug: "tracking-protection",
    description: "Monitor and protect your valuable assets",
    intro: "Keep track of your vehicles and assets with GPS tracking and telematics solutions. Improve efficiency, reduce costs, and protect your investments.",
    subProducts: [
      {
        id: "vehicle-tracking",
        name: "Vehicle Tracking",
        description: "Real-time GPS tracking for cars, vans, and trucks.",
      },
      {
        id: "asset-tracking",
        name: "Asset Tracking",
        description: "Monitor the location of valuable equipment and assets.",
      },
      {
        id: "fleet-management",
        name: "Fleet Management",
        description: "Comprehensive telematics and fleet management solutions.",
      },
    ],
  },
  "banking-services": {
    name: "Banking and Business Services",
    slug: "banking-services",
    description: "Streamline your business operations",
    intro: "From business banking to international payments, we help you find the services that simplify your financial operations and support your business growth.",
    subProducts: [
      {
        id: "business-accounts",
        name: "Business Bank Accounts",
        description: "Current accounts designed for business needs.",
      },
      {
        id: "currency-exchange",
        name: "Currency Exchange",
        description: "Competitive rates for international transactions.",
      },
      {
        id: "corporate-cards",
        name: "Corporate Cards",
        description: "Credit and charge cards for business expenses.",
      },
    ],
  },
};

const CoreProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !coreProducts[slug]) {
    return <Navigate to="/404" replace />;
  }

  const product = coreProducts[slug];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary/50">
          <div className="container-wide py-3">
            <nav className="flex items-center text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">
                Home
              </a>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container-hero">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 animate-slide-up">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 animate-slide-up leading-relaxed" style={{ animationDelay: "100ms" }}>
                {product.description}
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-14 md:py-20">
          <div className="container-content">
            <div className="max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Sub Products Grid */}
        <section className="section-padding bg-secondary/40">
          <div className="container-content">
            <h2 className="text-2xl font-semibold mb-10">
              Explore Our {product.name} Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.subProducts.map((subProduct, index) => (
                <ProductTile
                  key={subProduct.id}
                  title={subProduct.name}
                  description={subProduct.description}
                  href={`/${slug}/${subProduct.id}`}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Q7 Role Section */}
        <section className="py-16 md:py-20">
          <div className="container-content">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold mb-5">
                How Q7 Helps
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                We work with a wide network of lenders and providers to find the right {product.name.toLowerCase()} solutions for your business. Instead of approaching multiple providers individually, we do the work for you—matching your requirements with the best options available.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our role is to simplify the process, provide guidance, and help you make informed decisions about the solutions that will best support your business goals.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          preSelectedCategory={slug}
          title={`Ready to explore ${product.name.toLowerCase()}?`}
          description="Get in touch to discuss your requirements and find the right solution for your business."
        />
      </main>

      <Footer />
    </div>
  );
};

export default CoreProductPage;