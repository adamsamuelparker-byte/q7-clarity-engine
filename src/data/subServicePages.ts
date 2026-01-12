// Sub-service page data for all sub-services under solution pages
export interface SubServicePageData {
  slug: string;
  parentSlug: string;
  parentName: string;
  name: string;
  hero: {
    headline: string;
    intro: string;
  };
  overview: string;
  howQ7Helps: string;
  whatHappensNext: string;
}

export const subServicePages: Record<string, Record<string, SubServicePageData>> = {
  // BUSINESS FUNDING SUB-SERVICES
  "business-funding": {
    "secured-business-loans": {
      slug: "secured-business-loans",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Secured Business Loans",
      hero: {
        headline: "Secured business loans, structured with care",
        intro: "Secured business loans use property or assets as security to support larger or longer term borrowing. We help businesses understand when this type of funding is appropriate and how to approach it sensibly.",
      },
      overview: "Secured lending can offer access to higher amounts or longer repayment periods, but it requires careful consideration due to the assets involved.",
      howQ7Helps: "We help you assess suitability, explain risks clearly, and coordinate funding through appropriate lending partners.",
      whatHappensNext: "Start an enquiry and tell us about your funding goals and available security.",
    },
    "working-capital": {
      slug: "working-capital",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Working Capital",
      hero: {
        headline: "Working capital solutions to support cash flow",
        intro: "Working capital funding helps businesses manage day to day costs and trading cycles. We help organise solutions that support stability and continuity.",
      },
      overview: "Working capital can assist with wages, suppliers, or operational costs during busy or uneven trading periods.",
      howQ7Helps: "We help assess your cash flow position and coordinate suitable short term funding options where appropriate.",
      whatHappensNext: "Submit an enquiry and tell us about your trading cycle and requirements.",
    },
    "emergency-funding": {
      slug: "emergency-funding",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Emergency Funding",
      hero: {
        headline: "Emergency funding when timing matters",
        intro: "Unexpected costs or delays can put pressure on a business. We help businesses explore emergency funding options calmly and responsibly.",
      },
      overview: "Emergency funding is designed to provide short term support while longer term plans are reviewed.",
      howQ7Helps: "We help you assess urgency, explain available options, and coordinate solutions without unnecessary complexity.",
      whatHappensNext: "Start an enquiry and outline the situation you're facing.",
    },
    "refinancing": {
      slug: "refinancing",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Refinancing",
      hero: {
        headline: "Refinancing existing business funding",
        intro: "Refinancing can help improve cash flow or simplify existing arrangements. We help businesses review current funding and explore alternatives.",
      },
      overview: "Refinancing may involve consolidating facilities or restructuring repayments.",
      howQ7Helps: "We review your current setup and help organise more suitable structures where appropriate.",
      whatHappensNext: "Submit an enquiry and share details of your existing facilities.",
    },
  },

  // PAYMENTS AND MERCHANT SOLUTIONS SUB-SERVICES
  "payments-merchant": {
    "ecommerce-payments": {
      slug: "ecommerce-payments",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "Ecommerce Payments",
      hero: {
        headline: "Ecommerce payment solutions that support online trading",
        intro: "Online businesses require reliable and secure payment systems. We help organise ecommerce payment solutions that integrate smoothly.",
      },
      overview: "Ecommerce payments can include card processing, gateways, and fraud protection.",
      howQ7Helps: "We help match platforms with suitable providers and coordinate setup.",
      whatHappensNext: "Start an enquiry and tell us about your online sales channels.",
    },
    "merchant-accounts": {
      slug: "merchant-accounts",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "Merchant Accounts",
      hero: {
        headline: "Merchant accounts organised with clarity",
        intro: "A merchant account enables businesses to accept card payments. We help businesses access suitable accounts without confusion.",
      },
      overview: "Different providers offer different structures depending on trading profile.",
      howQ7Helps: "We help assess requirements and coordinate account setup.",
      whatHappensNext: "Submit an enquiry with details of your business activity.",
    },
  },

  // ASSET FINANCE SUB-SERVICES
  "asset-finance": {
    "equipment-finance": {
      slug: "equipment-finance",
      parentSlug: "asset-finance",
      parentName: "Asset Finance",
      name: "Equipment Finance",
      hero: {
        headline: "Equipment finance for essential business assets",
        intro: "Equipment finance allows businesses to spread the cost of tools and machinery. We help organise suitable solutions.",
      },
      overview: "This can apply to technology, machinery, or specialist equipment.",
      howQ7Helps: "We assess asset type and usage and coordinate finance accordingly.",
      whatHappensNext: "Start an enquiry and tell us what equipment you need.",
    },
    "technology-finance": {
      slug: "technology-finance",
      parentSlug: "asset-finance",
      parentName: "Asset Finance",
      name: "Technology Finance",
      hero: {
        headline: "Technology finance for modern operations",
        intro: "Technology finance supports investment in IT and digital infrastructure. We help businesses access appropriate options.",
      },
      overview: "This can include hardware, systems, or upgrades.",
      howQ7Helps: "We help structure finance to suit your operational needs.",
      whatHappensNext: "Submit an enquiry with details of your technology requirements.",
    },
  },

  // LEASING AND RENTAL SUB-SERVICES
  "leasing-rental": {
    "vehicle-leasing": {
      slug: "vehicle-leasing",
      parentSlug: "leasing-rental",
      parentName: "Leasing and Rental",
      name: "Vehicle Leasing",
      hero: {
        headline: "Vehicle leasing for flexibility and control",
        intro: "Vehicle leasing allows businesses to access vehicles without ownership. We help organise leasing solutions.",
      },
      overview: "Leasing can provide predictable costs and flexibility.",
      howQ7Helps: "We assess usage and coordinate suitable leasing options.",
      whatHappensNext: "Start an enquiry and tell us about your vehicle needs.",
    },
    "fleet-leasing": {
      slug: "fleet-leasing",
      parentSlug: "leasing-rental",
      parentName: "Leasing and Rental",
      name: "Fleet Leasing",
      hero: {
        headline: "Fleet leasing for growing operations",
        intro: "Fleet leasing supports businesses operating multiple vehicles. We help organise scalable solutions.",
      },
      overview: "Fleet leasing can simplify management and budgeting.",
      howQ7Helps: "We help structure fleet arrangements and coordinate providers.",
      whatHappensNext: "Submit an enquiry with details of your fleet.",
    },
    "short-term-rental": {
      slug: "short-term-rental",
      parentSlug: "leasing-rental",
      parentName: "Leasing and Rental",
      name: "Short Term Rental",
      hero: {
        headline: "Short term rental for changing needs",
        intro: "Short term rental provides flexibility without long commitments. We help organise rental solutions.",
      },
      overview: "Ideal for seasonal or temporary requirements.",
      howQ7Helps: "We coordinate suitable rental providers based on duration and usage.",
      whatHappensNext: "Start an enquiry and outline your rental timeframe.",
    },
  },

  // VEHICLES AND MOBILITY SUB-SERVICES
  "vehicles-mobility": {
    "electric-vehicles": {
      slug: "electric-vehicles",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Electric Vehicles",
      hero: {
        headline: "Electric vehicles for business use",
        intro: "Electric vehicles can reduce running costs and emissions. We help businesses explore suitable options.",
      },
      overview: "Options vary by range, usage, and charging needs.",
      howQ7Helps: "We help assess suitability and coordinate access.",
      whatHappensNext: "Submit an enquiry and explain how vehicles will be used.",
    },
    "delivery-courier-vehicles": {
      slug: "delivery-courier-vehicles",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Delivery and Courier Vehicles",
      hero: {
        headline: "Delivery and courier vehicles for operations",
        intro: "Reliable vehicles are essential for delivery businesses. We help organise suitable solutions.",
      },
      overview: "This includes vans, bikes, and specialist vehicles.",
      howQ7Helps: "We coordinate vehicles, finance, or rental options.",
      whatHappensNext: "Start an enquiry and outline your delivery needs.",
    },
  },

  // TRACKING AND PROTECTION SUB-SERVICES
  "tracking-protection": {
    "asset-tracking": {
      slug: "asset-tracking",
      parentSlug: "tracking-protection",
      parentName: "Tracking and Protection",
      name: "Asset Tracking",
      hero: {
        headline: "Asset tracking for control and visibility",
        intro: "Asset tracking helps monitor valuable equipment. We help organise appropriate solutions.",
      },
      overview: "Tracking can reduce loss and improve management.",
      howQ7Helps: "We assess requirements and coordinate providers.",
      whatHappensNext: "Submit an enquiry with details of the assets.",
    },
    "asset-recovery": {
      slug: "asset-recovery",
      parentSlug: "tracking-protection",
      parentName: "Tracking and Protection",
      name: "Asset Recovery",
      hero: {
        headline: "Asset recovery support when it matters",
        intro: "Recovery solutions help retrieve stolen or lost assets. We help organise appropriate protection.",
      },
      overview: "Recovery services vary by asset and risk level.",
      howQ7Helps: "We help coordinate approved recovery solutions.",
      whatHappensNext: "Start an enquiry and explain your concerns.",
    },
  },

  // BANKING AND ACCOUNTING SERVICES SUB-SERVICES
  "banking-accounting": {
    "business-credit-cards": {
      slug: "business-credit-cards",
      parentSlug: "banking-accounting",
      parentName: "Banking and Accounting Services",
      name: "Business Credit Cards",
      hero: {
        headline: "Business credit cards for controlled spending",
        intro: "Business credit cards can help manage expenses. We help businesses access suitable options.",
      },
      overview: "Different cards offer different limits and benefits.",
      howQ7Helps: "We help assess suitability and coordinate access.",
      whatHappensNext: "Submit an enquiry with details of your business.",
    },
    "tax-compliance-support": {
      slug: "tax-compliance-support",
      parentSlug: "banking-accounting",
      parentName: "Banking and Accounting Services",
      name: "Tax and Compliance Support",
      hero: {
        headline: "Tax and compliance support for peace of mind",
        intro: "Managing tax and compliance is essential. We help organise appropriate support.",
      },
      overview: "This can include ongoing or ad hoc assistance.",
      howQ7Helps: "We coordinate support through trusted partners.",
      whatHappensNext: "Start an enquiry and explain your requirements.",
    },
  },

  // BUSINESS SUPPORT SERVICES SUB-SERVICES
  "business-support": {
    "operational-support": {
      slug: "operational-support",
      parentSlug: "business-support",
      parentName: "Business Support Services",
      name: "Operational Support",
      hero: {
        headline: "Operational support for growing businesses",
        intro: "Operational support helps businesses run smoothly. We help organise practical assistance.",
      },
      overview: "Support varies depending on needs and stage.",
      howQ7Helps: "We identify gaps and coordinate suitable support.",
      whatHappensNext: "Submit an enquiry and outline where support is needed.",
    },
    "partner-introductions": {
      slug: "partner-introductions",
      parentSlug: "business-support",
      parentName: "Business Support Services",
      name: "Partner Introductions",
      hero: {
        headline: "Partner introductions you can trust",
        intro: "Finding the right partners matters. We help introduce businesses to trusted providers.",
      },
      overview: "Introductions are based on suitability and need.",
      howQ7Helps: "We assess requirements and coordinate introductions.",
      whatHappensNext: "Start an enquiry and explain what you're looking for.",
    },
  },
};

// Helper function to get sub-service by parent and slug
export const getSubService = (parentSlug: string, serviceSlug: string): SubServicePageData | undefined => {
  return subServicePages[parentSlug]?.[serviceSlug];
};

// Helper to get all sub-services for a parent
export const getSubServicesForParent = (parentSlug: string): SubServicePageData[] => {
  const parent = subServicePages[parentSlug];
  return parent ? Object.values(parent) : [];
};
