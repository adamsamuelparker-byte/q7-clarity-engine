import { useParams, Navigate, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

// Sub-product data
const subProductData: Record<string, Record<string, {
  name: string;
  whatItIs: string;
  whoItIsFor: string;
  howQ7Helps: string;
}>> = {
  "business-funding": {
    "unsecured-loans": {
      name: "Unsecured Business Loans",
      whatItIs: "Unsecured business loans provide funding without requiring you to put up assets as security. These loans are typically based on your business performance, trading history, and ability to repay.",
      whoItIsFor: "Ideal for established businesses with a strong trading history who need quick access to capital without tying up assets. Suitable for working capital, expansion, or managing cash flow.",
      howQ7Helps: "We compare options from multiple lenders to find competitive rates and terms that match your circumstances. Our process is straightforward—we gather your requirements once and present you with suitable options.",
    },
    "secured-loans": {
      name: "Secured Business Loans",
      whatItIs: "Secured loans use assets such as property, equipment, or other valuables as collateral. This security typically allows access to larger amounts and more competitive interest rates.",
      whoItIsFor: "Businesses with assets to secure against who need larger funding amounts. Often used for significant investments, acquisitions, or major capital expenditure.",
      howQ7Helps: "We help you understand the options available based on your assets and requirements, connecting you with lenders who can offer appropriate terms for your situation.",
    },
    "invoice-finance": {
      name: "Invoice Finance",
      whatItIs: "Invoice finance allows you to access funds tied up in unpaid invoices. This includes factoring (where the lender manages collections) and invoice discounting (where you retain control).",
      whoItIsFor: "B2B businesses with outstanding invoices who need to improve cash flow. Particularly useful for businesses with long payment terms or rapid growth.",
      howQ7Helps: "We explain the different types of invoice finance and match you with providers who suit your industry, invoice values, and preferences for confidentiality.",
    },
    "merchant-cash": {
      name: "Merchant Cash Advance",
      whatItIs: "A merchant cash advance provides upfront funding that's repaid through a percentage of your daily card transactions. Repayments flex with your sales volume.",
      whoItIsFor: "Retail, hospitality, and service businesses that take significant card payments and want flexible repayment that adjusts to their trading patterns.",
      howQ7Helps: "We compare advance providers to find options with reasonable rates and terms, ensuring you understand exactly how the product works before proceeding.",
    },
  },
  "merchant-services": {
    "card-terminals": {
      name: "Card Payment Terminals",
      whatItIs: "Physical card terminals for accepting chip and PIN, contactless, and mobile wallet payments at your premises. Options include countertop, portable, and mobile devices.",
      whoItIsFor: "Any business accepting face-to-face payments, from retail shops and restaurants to market traders and service providers.",
      howQ7Helps: "We compare terminal providers to find solutions with competitive transaction fees, suitable hardware, and good customer support for your business type.",
    },
    "online-payments": {
      name: "Online Payment Solutions",
      whatItIs: "Payment gateways and online checkout solutions that allow you to accept card payments through your website or online store securely.",
      whoItIsFor: "E-commerce businesses, online service providers, and any business wanting to take payments online or over the phone.",
      howQ7Helps: "We help you find payment solutions that integrate with your platform, offer appropriate security, and provide competitive processing rates.",
    },
    "mobile-payments": {
      name: "Mobile Payment Solutions",
      whatItIs: "Compact card readers that connect to your smartphone or tablet, allowing you to take card payments anywhere. Perfect for businesses on the move.",
      whoItIsFor: "Mobile businesses, tradespeople, market traders, delivery services, and anyone who needs to take payments away from fixed premises.",
      howQ7Helps: "We compare mobile payment providers based on your expected volumes, helping you find the right balance of hardware costs and transaction fees.",
    },
  },
  "asset-finance": {
    "equipment-finance": {
      name: "Equipment Finance",
      whatItIs: "Finance solutions for purchasing machinery, equipment, and tools for your business. Options include hire purchase, finance lease, and operating lease.",
      whoItIsFor: "Businesses needing to invest in equipment without depleting cash reserves. From manufacturing machinery to office equipment.",
      howQ7Helps: "We explain the different finance structures and their implications, matching you with lenders who specialise in your equipment type.",
    },
    "vehicle-finance": {
      name: "Vehicle Finance",
      whatItIs: "Finance for cars, vans, trucks, and commercial vehicles. Options include hire purchase, PCP, and lease agreements.",
      whoItIsFor: "Businesses needing vehicles for operations, whether a single company car or a complete commercial fleet.",
      howQ7Helps: "We compare vehicle finance options across multiple providers, helping you choose between ownership and lease based on your needs.",
    },
    "refinancing": {
      name: "Asset Refinancing",
      whatItIs: "Release capital from assets you already own. This involves using owned equipment or vehicles as security for a loan or lease-back arrangement.",
      whoItIsFor: "Businesses with valuable assets that want to release equity for working capital or investment without selling.",
      howQ7Helps: "We help you understand asset valuations and connect you with providers who can offer appropriate refinancing arrangements.",
    },
  },
  "leasing-rental": {
    "equipment-leasing": {
      name: "Equipment Leasing",
      whatItIs: "Lease arrangements for business equipment that allow you to use assets without ownership. Various lease types offer different options at the end of the term.",
      whoItIsFor: "Businesses preferring to spread costs and keep options open for equipment upgrades rather than committing to ownership.",
      howQ7Helps: "We explain the lease options and help you find arrangements that match your budget and plans for the equipment.",
    },
    "vehicle-leasing": {
      name: "Vehicle Leasing",
      whatItIs: "Contract hire and leasing for cars and commercial vehicles. Typically includes maintenance packages and allows regular vehicle updates.",
      whoItIsFor: "Businesses wanting hassle-free vehicle access without the complications of ownership, depreciation, and disposal.",
      howQ7Helps: "We compare lease providers and terms, helping you find competitive monthly costs and appropriate mileage allowances.",
    },
    "technology-rental": {
      name: "Technology Rental",
      whatItIs: "Short and long-term rental for IT equipment, laptops, phones, and technology. Particularly useful for projects, events, or trial periods.",
      whoItIsFor: "Businesses needing technology for specific durations, wanting to trial before purchase, or preferring to keep tech updated.",
      howQ7Helps: "We connect you with rental providers who can meet your technology needs with appropriate terms and support.",
    },
  },
  "tracking-protection": {
    "vehicle-tracking": {
      name: "Vehicle Tracking",
      whatItIs: "GPS tracking systems that provide real-time location data for your vehicles. Monitor routes, stops, and driver behaviour.",
      whoItIsFor: "Any business with vehicles who wants better visibility of fleet location, improved efficiency, and security.",
      howQ7Helps: "We compare tracking providers and platforms, helping you find solutions with the features you need at competitive costs.",
    },
    "asset-tracking": {
      name: "Asset Tracking",
      whatItIs: "Tracking solutions for non-vehicle assets like equipment, trailers, containers, or high-value items. Know where your assets are at all times.",
      whoItIsFor: "Businesses with valuable moveable assets, particularly those in construction, logistics, or equipment hire.",
      howQ7Helps: "We help you find appropriate tracking technology and providers for your specific asset types and monitoring needs.",
    },
    "fleet-management": {
      name: "Fleet Management",
      whatItIs: "Comprehensive telematics platforms that combine tracking with vehicle diagnostics, driver scoring, fuel monitoring, and maintenance scheduling.",
      whoItIsFor: "Businesses with multiple vehicles who want to optimise operations, reduce costs, and improve safety across their fleet.",
      howQ7Helps: "We compare fleet management platforms based on your fleet size and requirements, helping you find systems that deliver real operational benefits.",
    },
  },
  "banking-services": {
    "business-accounts": {
      name: "Business Bank Accounts",
      whatItIs: "Current accounts designed for business use, with features like online banking, payment facilities, and integration with accounting software.",
      whoItIsFor: "All businesses, from sole traders needing their first business account to established companies looking for better service or rates.",
      howQ7Helps: "We help you understand the account options available and identify providers that match your transaction volumes and service requirements.",
    },
    "currency-exchange": {
      name: "Currency Exchange",
      whatItIs: "Services for exchanging currencies at competitive rates, making international payments, and managing foreign exchange risk.",
      whoItIsFor: "Businesses that pay overseas suppliers, receive foreign currency, or trade internationally.",
      howQ7Helps: "We connect you with currency specialists who can offer better rates than high street banks and help manage exchange risk.",
    },
    "corporate-cards": {
      name: "Corporate Cards",
      whatItIs: "Business credit and charge cards for company expenses. Options include individual cards, fleet cards, and purchasing cards with spending controls.",
      whoItIsFor: "Businesses wanting to separate company expenses, provide staff with payment facilities, or manage fleet fuel costs.",
      howQ7Helps: "We compare card providers based on your spending patterns and requirements, helping you find cards with appropriate limits and benefits.",
    },
  },
};

// Parent product names
const parentProducts: Record<string, string> = {
  "business-funding": "Business Funding",
  "merchant-services": "Merchant Services",
  "asset-finance": "Asset Finance",
  "leasing-rental": "Leasing and Rental",
  "tracking-protection": "Tracking and Protection",
  "banking-services": "Banking and Business Services",
};

const SubProductPage = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();
  
  if (!categorySlug || !productSlug || !subProductData[categorySlug] || !subProductData[categorySlug][productSlug]) {
    return <Navigate to="/404" replace />;
  }

  const product = subProductData[categorySlug][productSlug];
  const parentName = parentProducts[categorySlug];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary/30">
          <div className="container-wide py-2.5">
            <nav className="flex items-center text-xs text-muted-foreground flex-wrap gap-0.5">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 mx-1" />
              <Link to={`/${categorySlug}`} className="hover:text-foreground transition-colors">
                {parentName}
              </Link>
              <ChevronRight className="h-3.5 w-3.5 mx-1" />
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="container-hero">
            <div className="max-w-2xl">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 animate-slide-up tracking-tight">
                {product.name}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-14 md:py-20">
          <div className="container-content">
            <div className="max-w-2xl space-y-12">
              {/* What It Is */}
              <div className="animate-fade-in">
                <h2 className="text-base font-medium mb-3 text-foreground">
                  What It Is
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.whatItIs}
                </p>
              </div>

              {/* Who It's For */}
              <div className="animate-fade-in" style={{ animationDelay: "80ms" }}>
                <h2 className="text-base font-medium mb-3 text-foreground">
                  Who It's For
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.whoItIsFor}
                </p>
              </div>

              {/* How Q7 Helps */}
              <div className="animate-fade-in" style={{ animationDelay: "160ms" }}>
                <h2 className="text-base font-medium mb-3 text-foreground">
                  How Q7 Helps
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.howQ7Helps}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          preSelectedCategory={categorySlug}
          preSelectedSubProduct={`${categorySlug}-${productSlug}`}
          title={`Interested in ${product.name.toLowerCase()}?`}
          description="Get in touch to discuss your requirements and find out how we can help."
        />
      </main>

      <Footer />
    </div>
  );
};

export default SubProductPage;