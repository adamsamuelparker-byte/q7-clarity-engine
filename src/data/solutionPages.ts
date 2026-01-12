// Solution page data for all 8 core solutions
export interface SolutionPageData {
  slug: string;
  name: string;
  hero: {
    headline: string;
    intro: string;
    tagline: string;
  };
  whatThisCovers: {
    intro: string;
    items: string[];
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
    hero: {
      headline: "Business funding, organised around your business",
      intro: "Accessing funding doesn't need to be complicated. We help businesses understand their options, structure the right solution, and move forward with clarity and confidence.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Business funding can mean different things depending on where your business is and what you are trying to achieve. We help you explore and arrange funding solutions that align with your goals, cash flow, and trading position.",
      items: [
        "Unsecured business loans",
        "Secured business lending",
        "Working capital solutions",
        "Invoice finance",
        "Merchant cash advance",
        "Short term or emergency funding",
        "Refinancing existing facilities",
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
      { id: "unsecured-loans", name: "Unsecured Business Loans", description: "Fast access to funds without needing to secure against assets." },
      { id: "secured-loans", name: "Secured Business Loans", description: "Larger amounts with competitive rates using asset security." },
      { id: "invoice-finance", name: "Invoice Finance", description: "Unlock cash tied up in your outstanding invoices." },
      { id: "merchant-cash", name: "Merchant Cash Advance", description: "Funding based on your card payment turnover." },
    ],
  },
  "payments-merchant": {
    slug: "payments-merchant",
    name: "Payments and Merchant Solutions",
    hero: {
      headline: "Payments and merchant solutions, built around how you trade",
      intro: "Taking payments should be simple, reliable, and suited to the way your business operates. We help you organise the right payment and merchant setup, so you can focus on running your business, not managing systems.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Every business takes payments differently. Whether you trade in person, online, or across multiple locations, we help you put the right merchant and payment solutions in place.",
      items: [
        "Card machines",
        "EPOS systems",
        "Ecommerce payment solutions",
        "Merchant accounts",
        "Payment processing setup",
        "Switching or reviewing existing providers",
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
      { id: "card-terminals", name: "Card Payment Terminals", description: "Countertop and portable terminals for face-to-face payments." },
      { id: "epos-systems", name: "EPOS Systems", description: "Complete point of sale systems for retail and hospitality." },
      { id: "online-payments", name: "Online Payment Solutions", description: "Secure payment gateways for your e-commerce operations." },
    ],
  },
  "asset-finance": {
    slug: "asset-finance",
    name: "Asset Finance",
    hero: {
      headline: "Asset finance, structured to support your business",
      intro: "Investing in equipment or assets shouldn't put unnecessary strain on your cash flow. We help businesses access and organise asset finance solutions that allow them to grow while keeping finances manageable.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Asset finance allows businesses to spread the cost of essential equipment over time, rather than paying upfront. We can help organise finance for:",
      items: [
        "Business equipment",
        "Machinery and tools",
        "Technology and hardware",
        "Specialist or industry specific assets",
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
      { id: "equipment-finance", name: "Equipment Finance", description: "Finance machinery, equipment, and tools for your business." },
      { id: "technology-finance", name: "Technology Finance", description: "Spread the cost of IT and technology investments." },
      { id: "refinancing", name: "Asset Refinancing", description: "Release capital from assets you already own." },
    ],
  },
  "leasing-rental": {
    slug: "leasing-rental",
    name: "Leasing and Rental",
    hero: {
      headline: "Leasing and rental solutions that fit how you operate",
      intro: "Leasing and rental can provide flexibility without long term commitment. We help businesses organise leasing and rental solutions that align with their operational needs and budget.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Leasing and rental solutions allow businesses to access vehicles or equipment without outright purchase. This can include:",
      items: [
        "Vehicle leasing",
        "Equipment leasing",
        "Short or long term rental",
        "Flexible contract options",
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
      { id: "vehicle-leasing", name: "Vehicle Leasing", description: "Contract hire and leasing for cars and commercial vehicles." },
      { id: "equipment-leasing", name: "Equipment Leasing", description: "Lease machinery and equipment with flexible terms." },
      { id: "technology-rental", name: "Technology Rental", description: "Short and long-term rental for IT and technology." },
    ],
  },
  "vehicles-mobility": {
    slug: "vehicles-mobility",
    name: "Vehicles and Mobility",
    hero: {
      headline: "Vehicles and mobility solutions for modern businesses",
      intro: "Access to the right vehicles can be essential for how your business operates. We help organise vehicle and mobility solutions that support your team, deliveries, and day to day operations.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "We support businesses with a range of vehicle and mobility needs. This can include:",
      items: [
        "Business vehicles",
        "Electric bikes and mopeds",
        "Branded vehicles",
        "Fleet solutions",
        "Micro and urban mobility options",
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
      { id: "business-vehicles", name: "Business Vehicles", description: "Cars, vans, and commercial vehicles for your operations." },
      { id: "electric-mobility", name: "Electric Bikes and Mopeds", description: "Sustainable urban mobility solutions." },
      { id: "branded-vehicles", name: "Branded Vehicles", description: "Vehicles with your branding for maximum visibility." },
    ],
  },
  "tracking-protection": {
    slug: "tracking-protection",
    name: "Tracking and Protection",
    hero: {
      headline: "Tracking and protection solutions for peace of mind",
      intro: "Protecting vehicles and assets is an important part of running a business. We help organise tracking and protection solutions that give visibility, security, and reassurance.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Tracking and protection solutions help businesses monitor and safeguard their assets. This can include:",
      items: [
        "Vehicle tracking systems",
        "Asset tracking and monitoring",
        "Theft recovery solutions",
        "Webcams and CCTV",
        "Thatcham approved tracking options",
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
      { id: "vehicle-tracking", name: "Vehicle Tracking", description: "Real-time GPS tracking for cars, vans, and trucks." },
      { id: "asset-tracking", name: "Asset Tracking", description: "Monitor the location of valuable equipment and assets." },
      { id: "cctv-webcams", name: "CCTV and Webcams", description: "Visual monitoring and security solutions." },
    ],
  },
  "banking-accounting": {
    slug: "banking-accounting",
    name: "Banking and Accounting Services",
    hero: {
      headline: "Banking and accounting services, organised for clarity",
      intro: "Managing business finances requires structure and visibility. We help organise banking and accounting services so your financial setup supports better decision making.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "We help businesses access and organise essential banking and accounting support. This can include:",
      items: [
        "Business bank accounts",
        "Business credit cards",
        "Accounting services",
        "Tax and compliance support",
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
      { id: "business-accounts", name: "Business Bank Accounts", description: "Current accounts designed for business needs." },
      { id: "business-cards", name: "Business Credit Cards", description: "Credit and charge cards for business expenses." },
      { id: "accounting", name: "Accounting Services", description: "Bookkeeping, accounts, and financial reporting." },
    ],
  },
  "business-support": {
    slug: "business-support",
    name: "Business Support Services",
    hero: {
      headline: "Business support services that help everything run smoothly",
      intro: "Behind every successful business is a strong support structure. We help organise business support services that keep operations running efficiently.",
      tagline: "One team. End to end.",
    },
    whatThisCovers: {
      intro: "Business support services can vary depending on your needs and stage of growth. This may include:",
      items: [
        "Operational support",
        "Back office services",
        "Business administration support",
        "Partner introductions",
        "Ongoing advisory support",
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
      { id: "operational-support", name: "Operational Support", description: "Day-to-day business operations assistance." },
      { id: "admin-services", name: "Administration Services", description: "Back office and administrative support." },
      { id: "advisory", name: "Advisory Services", description: "Ongoing guidance and business advice." },
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
  { name: "Vehicles & Mobility", href: "/vehicles-mobility" },
  { name: "Tracking & Protection", href: "/tracking-protection" },
  { name: "Banking & Accounting", href: "/banking-accounting" },
  { name: "Business Support", href: "/business-support" },
];
