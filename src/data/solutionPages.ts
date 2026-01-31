// Solution page data for all 8 core solutions
export interface WhatThisCoversItem {
  name: string;
  slug: string;
}

export interface SolutionPageData {
  slug: string;
  name: string;
  heroImage: string;
  hero: {
    headline: string;
    intro: string;
    tagline: string;
  };
  whatThisCovers: {
    intro: string;
    items: WhatThisCoversItem[];
    outro?: string;
  };
  howQ7Helps: {
    intro: string;
    items: string[];
    outro?: string;
  };
  whoThisIsFor: {
    intro: string;
    items: string[];
    outro?: string;
  };
  whatHappensNext: {
    intro: string;
    details?: string;
    closing?: string;
  };
  subProducts?: {
    id: string;
    name: string;
    description: string;
  }[];
}

export const solutionPages: Record<string, SolutionPageData> = {
  "business-funding": {
    slug: "business-funding",
    name: "Business Funding",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
    hero: {
      headline: "Business funding, organised around your business",
      intro: "Accessing funding doesn't need to be complicated. We help businesses understand their options, structure the right solution, and move forward with clarity and confidence.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Business funding can mean different things depending on where your business is and what you are trying to achieve. We help you explore and arrange funding solutions that align with your goals, cash flow, and trading position.",
      items: [
        { name: "Unsecured business loans", slug: "unsecured-business-loans" },
        { name: "Secured business lending", slug: "secured-business-loans" },
        { name: "Working capital solutions", slug: "working-capital" },
        { name: "Invoice finance", slug: "invoice-finance" },
        { name: "Merchant cash advance", slug: "merchant-cash-advance" },
        { name: "Short term or emergency funding", slug: "emergency-funding" },
        { name: "Refinancing existing facilities", slug: "refinancing" },
      ],
      outro: "Our role is not to push a single product, but to help you identify what makes sense for your business and then organise it properly.",
    },
    howQ7Helps: {
      intro: "We act as your funding partner, guiding you through the process from start to finish. Rather than approaching multiple providers yourself, we take the time to understand your business and then match you with appropriate funding options through our partner network.",
      items: [
        "Understanding your business and funding requirements",
        "Explaining available options in plain English",
        "Structuring funding in a way that fits your cash flow",
        "Managing the process from enquiry through to completion",
        "Remaining involved as your business evolves",
      ],
      outro: "You deal with one team, not multiple lenders or providers.",
    },
    whoThisIsFor: {
      intro: "Business funding can be suitable for businesses at many different stages. We regularly help:",
      items: [
        "Small and medium sized businesses",
        "Growing companies looking to invest or expand",
        "Businesses managing cash flow gaps",
        "Companies needing short term support",
        "Established businesses refinancing existing funding",
      ],
      outro: "If you are unsure what type of funding is appropriate, we can help you work that out.",
    },
    whatHappensNext: {
      intro: "If you would like to explore business funding options, start an enquiry and tell us a little about your business.",
      details: "We will review your information and one of the team will be in touch to discuss next steps.",
      closing: "There is no obligation, and no pressure to proceed.",
    },
    subProducts: [
      { id: "unsecured-business-loans", name: "Unsecured Business Loans", description: "Quick access funding without property security." },
      { id: "secured-business-loans", name: "Secured Business Loans", description: "Larger amounts with competitive rates using asset security." },
      { id: "working-capital", name: "Working Capital", description: "Solutions to support cash flow and trading cycles." },
      { id: "invoice-finance", name: "Invoice Finance", description: "Unlock cash tied up in outstanding invoices." },
      { id: "merchant-cash-advance", name: "Merchant Cash Advance", description: "Advance funding against future card sales." },
      { id: "emergency-funding", name: "Emergency Funding", description: "Short term support when timing matters." },
      { id: "refinancing", name: "Refinancing", description: "Review and restructure existing funding arrangements." },
    ],
  },
  "payments-merchant": {
    slug: "payments-merchant",
    name: "Payments & Merchant Services",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
    hero: {
      headline: "Payments and merchant solutions, built around how you trade",
      intro: "Taking payments should be simple, reliable, and suited to the way your business operates. We help you organise the right payment and merchant setup, so you can focus on running your business, not managing systems.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Every business takes payments differently. Whether you trade in person, online, or across multiple locations, we help you put the right merchant and payment solutions in place.",
      items: [
        { name: "Card machines", slug: "card-machines" },
        { name: "EPOS systems", slug: "epos-systems" },
        { name: "Ecommerce payment solutions", slug: "ecommerce-payments" },
        { name: "Merchant accounts", slug: "merchant-accounts" },
        { name: "Payment processing setup", slug: "payment-processing" },
        { name: "Switching or reviewing existing providers", slug: "switching-providers" },
      ],
      outro: "Rather than offering one size fits all solutions, we help you understand the options and choose what works best for your business.",
    },
    howQ7Helps: {
      intro: "We help you organise your payments infrastructure properly, without confusion or disruption to your day to day trading. We work with a range of partners and providers, allowing us to focus on what suits your business rather than pushing a single solution.",
      items: [
        "Understanding how and where you take payments",
        "Explaining different payment and merchant options clearly",
        "Helping you compare providers and setups",
        "Coordinating the setup and transition process",
        "Supporting you as your business grows or changes",
      ],
      outro: "You have one point of contact throughout.",
    },
    whoThisIsFor: {
      intro: "Payment and merchant solutions can be useful for businesses of all sizes and sectors. We regularly help:",
      items: [
        "Retail and hospitality businesses",
        "Service based businesses",
        "Ecommerce and online sellers",
        "Businesses upgrading or replacing existing systems",
        "Businesses expanding to new locations or channels",
      ],
      outro: "If you are unsure whether your current setup is right, we can help you review it.",
    },
    whatHappensNext: {
      intro: "If you would like to explore payment and merchant solutions, start an enquiry and let us know how your business currently takes payments.",
      details: "One of the team will review your details and get in touch to discuss suitable next steps.",
      closing: "There is no obligation to proceed.",
    },
    subProducts: [
      { id: "card-machines", name: "Card Machines", description: "Card terminal solutions for in-person payments." },
      { id: "epos-systems", name: "EPOS Systems", description: "Point of sale systems for retail and hospitality." },
      { id: "ecommerce-payments", name: "Ecommerce Payments", description: "Reliable and secure payment systems for online trading." },
      { id: "merchant-accounts", name: "Merchant Accounts", description: "Access suitable merchant accounts without confusion." },
      { id: "payment-processing", name: "Payment Processing", description: "Set up efficient payment processing for your business." },
      { id: "switching-providers", name: "Switching Providers", description: "Review and switch existing payment providers." },
    ],
  },
  "asset-finance": {
    slug: "asset-finance",
    name: "Asset Finance",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80",
    hero: {
      headline: "Asset finance, structured to support your business",
      intro: "Investing in equipment or assets shouldn't put unnecessary strain on your cash flow. We help businesses access and organise asset finance solutions that allow them to grow while keeping finances manageable.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Asset finance allows businesses to spread the cost of essential equipment over time, rather than paying upfront. We can help organise finance for:",
      items: [
        { name: "Business equipment", slug: "equipment-finance" },
        { name: "Machinery and tools", slug: "machinery-finance" },
        { name: "Technology and hardware", slug: "technology-finance" },
        { name: "Specialist or industry specific assets", slug: "specialist-assets" },
      ],
      outro: "Our role is to help you understand what options are available and ensure the finance structure suits how your business operates.",
    },
    howQ7Helps: {
      intro: "We work with you to assess what assets you need and how best to finance them. We help by:",
      items: [
        "Reviewing your requirements and budget",
        "Explaining asset finance options clearly",
        "Matching you with appropriate providers",
        "Coordinating the finance process",
        "Supporting you through approval and completion",
      ],
      outro: "You deal with one team throughout the process.",
    },
    whoThisIsFor: {
      intro: "Asset finance can be suitable for:",
      items: [
        "Growing businesses investing in equipment",
        "Established companies upgrading assets",
        "Businesses wanting to preserve working capital",
        "Companies needing specialist equipment",
      ],
      outro: "If you're unsure whether asset finance is right for your situation, we can help you explore it.",
    },
    whatHappensNext: {
      intro: "Start an enquiry and tell us what assets you're looking to finance. One of the team will be in touch to discuss your options and next steps.",
    },
    subProducts: [
      { id: "equipment-finance", name: "Equipment Finance", description: "Spread the cost of tools and machinery." },
      { id: "machinery-finance", name: "Machinery Finance", description: "Finance for industrial machinery and tools." },
      { id: "technology-finance", name: "Technology Finance", description: "Investment in IT and digital infrastructure." },
      { id: "specialist-assets", name: "Specialist Assets", description: "Finance for industry-specific equipment." },
    ],
  },
  "leasing-rental": {
    slug: "leasing-rental",
    name: "Leasing & Rental",
    heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&q=80",
    hero: {
      headline: "Leasing and rental solutions that fit how you operate",
      intro: "Leasing and rental can provide flexibility without long term commitment. We help businesses organise leasing and rental solutions that align with their operational needs and budget.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Leasing and rental solutions allow businesses to access vehicles or equipment without outright purchase. This can include:",
      items: [
        { name: "Vehicle leasing", slug: "vehicle-leasing" },
        { name: "Equipment leasing", slug: "equipment-leasing" },
        { name: "Fleet leasing", slug: "fleet-leasing" },
        { name: "Short or long term rental", slug: "short-term-rental" },
      ],
      outro: "We help you understand the differences and choose an approach that suits your business.",
    },
    howQ7Helps: {
      intro: "We take a practical approach to leasing and rental, focusing on usability and flexibility. We support you by:",
      items: [
        "Understanding how the asset will be used",
        "Explaining leasing and rental structures",
        "Sourcing suitable providers",
        "Coordinating agreements and setup",
        "Remaining available if your needs change",
      ],
      outro: "Our aim is to make the process straightforward.",
    },
    whoThisIsFor: {
      intro: "Leasing and rental can work well for:",
      items: [
        "Businesses needing flexibility",
        "Companies managing fleet or equipment changes",
        "Start ups avoiding large upfront costs",
        "Businesses with seasonal or short term needs",
      ],
      outro: "We help you assess whether leasing or rental makes sense for you.",
    },
    whatHappensNext: {
      intro: "If you're considering leasing or rental, start an enquiry and tell us what you're looking to access. We'll guide you through the next steps.",
    },
    subProducts: [
      { id: "vehicle-leasing", name: "Vehicle Leasing", description: "Access vehicles without ownership for flexibility and control." },
      { id: "equipment-leasing", name: "Equipment Leasing", description: "Lease equipment to preserve capital." },
      { id: "fleet-leasing", name: "Fleet Leasing", description: "Scalable solutions for businesses operating multiple vehicles." },
      { id: "short-term-rental", name: "Short Term Rental", description: "Flexibility without long commitments." },
    ],
  },
  "vehicles-mobility": {
    slug: "vehicles-mobility",
    name: "Vehicles & Fleet Solutions",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
    hero: {
      headline: "Vehicles and fleet solutions for modern businesses",
      intro: "Access to the right vehicles can be essential for how your business operates. We help organise vehicle and mobility solutions that support your team, deliveries, and day to day operations.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "We support businesses with a range of vehicle and mobility needs. This can include:",
      items: [
        { name: "Business vehicles", slug: "business-vehicles" },
        { name: "Electric vehicles", slug: "electric-vehicles" },
        { name: "Delivery and courier vehicles", slug: "delivery-courier-vehicles" },
        { name: "Fleet solutions", slug: "fleet-solutions" },
        { name: "Micro and urban mobility options", slug: "micro-mobility" },
      ],
      outro: "We help you understand what's available and how to access it in a way that suits your business.",
    },
    howQ7Helps: {
      intro: "We focus on helping you organise vehicle and mobility solutions efficiently. We do this by:",
      items: [
        "Understanding how vehicles are used in your business",
        "Exploring finance, leasing, or rental options",
        "Coordinating suppliers and providers",
        "Supporting setup and delivery",
        "Remaining involved as your requirements evolve",
      ],
      outro: "You have one point of contact throughout.",
    },
    whoThisIsFor: {
      intro: "Vehicle and mobility solutions can suit:",
      items: [
        "Delivery and logistics businesses",
        "Service based companies",
        "Urban and last mile operations",
        "Businesses transitioning to electric options",
      ],
      outro: "If you're unsure what solution fits best, we can help you assess it.",
    },
    whatHappensNext: {
      intro: "Start an enquiry and let us know what type of vehicle or mobility solution you're exploring. We'll be in touch to discuss next steps.",
    },
    subProducts: [
      { id: "business-vehicles", name: "Business Vehicles", description: "Vehicles for business operations and staff." },
      { id: "electric-vehicles", name: "Electric Vehicles", description: "Reduce running costs and emissions with electric options." },
      { id: "delivery-courier-vehicles", name: "Delivery and Courier Vehicles", description: "Reliable vehicles for delivery operations." },
      { id: "fleet-solutions", name: "Fleet Solutions", description: "Comprehensive fleet management options." },
      { id: "micro-mobility", name: "Micro Mobility", description: "Electric bikes, scooters and urban mobility solutions." },
    ],
  },
  "tracking-protection": {
    slug: "tracking-protection",
    name: "Tracking & Protection",
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&q=80",
    hero: {
      headline: "Tracking and protection solutions for peace of mind",
      intro: "Protecting vehicles and assets is an important part of running a business. We help organise tracking and protection solutions that give visibility, security, and reassurance.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Tracking and protection solutions help businesses monitor and safeguard their assets. This can include:",
      items: [
        { name: "Vehicle tracking systems", slug: "vehicle-tracking" },
        { name: "Asset tracking and monitoring", slug: "asset-tracking" },
        { name: "Theft recovery solutions", slug: "asset-recovery" },
        { name: "Webcams and CCTV", slug: "cctv-webcams" },
        { name: "Thatcham approved tracking options", slug: "thatcham-tracking" },
      ],
      outro: "We help you understand what level of protection is appropriate for your business.",
    },
    howQ7Helps: {
      intro: "We take a practical approach to asset protection, focusing on reliability and suitability. We help by:",
      items: [
        "Understanding what needs protecting",
        "Explaining available tracking and monitoring options",
        "Coordinating approved providers",
        "Supporting installation and setup",
        "Ensuring solutions remain fit for purpose",
      ],
      outro: "Our role is to simplify the process.",
    },
    whoThisIsFor: {
      intro: "Tracking and protection solutions are often used by:",
      items: [
        "Fleet operators",
        "Businesses with high value assets",
        "Delivery and logistics companies",
        "Businesses seeking added security",
      ],
      outro: "We can help assess what level of protection makes sense.",
    },
    whatHappensNext: {
      intro: "If you'd like to explore tracking or protection options, start an enquiry and tell us what assets you're looking to protect.",
    },
    subProducts: [
      { id: "vehicle-tracking", name: "Vehicle Tracking", description: "Monitor vehicle location and usage in real time." },
      { id: "asset-tracking", name: "Asset Tracking", description: "Monitor valuable equipment for control and visibility." },
      { id: "asset-recovery", name: "Asset Recovery", description: "Retrieve stolen or lost assets when it matters." },
      { id: "cctv-webcams", name: "CCTV and Webcams", description: "Visual monitoring for security and oversight." },
      { id: "thatcham-tracking", name: "Thatcham Tracking", description: "Insurance-approved tracking solutions." },
    ],
  },
  "banking-accounting": {
    slug: "banking-accounting",
    name: "Banking & Accounting Services",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
    hero: {
      headline: "Banking and accounting services, organised for clarity",
      intro: "Managing business finances requires structure and visibility. We help organise banking and accounting services so your financial setup supports better decision making.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "We help businesses access and organise essential banking and accounting support. This can include:",
      items: [
        { name: "Business bank accounts", slug: "business-bank-accounts" },
        { name: "Business credit cards", slug: "business-credit-cards" },
        { name: "Accounting services", slug: "accounting-services" },
        { name: "Tax and compliance support", slug: "tax-compliance-support" },
      ],
      outro: "Our focus is on helping you put the right foundations in place.",
    },
    howQ7Helps: {
      intro: "We work with trusted partners to help businesses organise their financial services efficiently. We support you by:",
      items: [
        "Understanding your business structure",
        "Helping you access appropriate banking services",
        "Coordinating accounting and compliance support",
        "Acting as a point of contact where needed",
        "Ensuring everything fits together properly",
      ],
      outro: "You are supported without unnecessary complexity.",
    },
    whoThisIsFor: {
      intro: "Banking and accounting services can benefit:",
      items: [
        "New businesses setting up",
        "Growing companies improving financial control",
        "Businesses seeking better visibility",
        "Companies needing ongoing support",
      ],
      outro: "If you're unsure what services you need, we can help clarify this.",
    },
    whatHappensNext: {
      intro: "Start an enquiry and let us know what banking or accounting support you're looking for. We'll be in touch to discuss next steps.",
    },
    subProducts: [
      { id: "business-bank-accounts", name: "Business Bank Accounts", description: "Set up suitable business banking." },
      { id: "business-credit-cards", name: "Business Credit Cards", description: "Manage expenses with suitable card options." },
      { id: "accounting-services", name: "Accounting Services", description: "Professional accounting support for your business." },
      { id: "tax-compliance-support", name: "Tax and Compliance Support", description: "Essential tax and compliance assistance." },
    ],
  },
  "business-support": {
    slug: "business-support",
    name: "Business Support Services",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
    hero: {
      headline: "Business support services that help everything run smoothly",
      intro: "Behind every successful business is a strong support structure. We help organise business support services that keep operations running efficiently.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Business support services can vary depending on your needs and stage of growth. This may include:",
      items: [
        { name: "Operational support", slug: "operational-support" },
        { name: "Back office services", slug: "back-office-services" },
        { name: "Business administration support", slug: "admin-support" },
        { name: "Partner introductions", slug: "partner-introductions" },
        { name: "Ongoing advisory support", slug: "advisory-support" },
      ],
      outro: "Our role is to help you access the right support when you need it.",
    },
    howQ7Helps: {
      intro: "We act as a central point of coordination for your business support needs. We help by:",
      items: [
        "Understanding where support is required",
        "Identifying appropriate partners or solutions",
        "Coordinating introductions and services",
        "Remaining involved as your needs change",
      ],
      outro: "This allows you to focus on running your business.",
    },
    whoThisIsFor: {
      intro: "Business support services can be helpful for:",
      items: [
        "Growing businesses",
        "Busy business owners",
        "Companies looking to streamline operations",
        "Businesses needing additional support without internal hires",
      ],
      outro: "We tailor support around your situation.",
    },
    whatHappensNext: {
      intro: "If you'd like to explore business support services, start an enquiry and tell us what you need help with. We'll guide you from there.",
    },
    subProducts: [
      { id: "operational-support", name: "Operational Support", description: "Practical assistance for growing businesses." },
      { id: "back-office-services", name: "Back Office Services", description: "Administrative and operational support." },
      { id: "admin-support", name: "Admin Support", description: "Business administration assistance." },
      { id: "partner-introductions", name: "Partner Introductions", description: "Trusted provider introductions." },
      { id: "advisory-support", name: "Advisory Support", description: "Ongoing business guidance and advice." },
    ],
  },
};

// Get solution by slug
export const getSolutionBySlug = (slug: string): SolutionPageData | undefined => {
  return solutionPages[slug];
};

// Get all solution slugs for navigation
export const getAllSolutionSlugs = (): string[] => {
  return Object.keys(solutionPages);
};

// Navigation data for the 8 solution pages
export const solutionNavigation = [
  { name: "Business Funding", href: "/business-funding" },
  { name: "Payments & Merchant", href: "/payments-merchant" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing & Rental", href: "/leasing-rental" },
  { name: "Vehicles & Fleet", href: "/vehicles-mobility" },
  { name: "Tracking & Protection", href: "/tracking-protection" },
  { name: "Banking & Accounting", href: "/banking-accounting" },
  { name: "Business Support", href: "/business-support" },
];
