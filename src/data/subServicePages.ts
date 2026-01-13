// Sub-service page data for all sub-services under solution pages
// Hero images are inherited from parent solution pages for consistency

// Parent solution hero images map
const parentHeroImages: Record<string, string> = {
  "business-funding": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
  "payments-merchant": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
  "asset-finance": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80",
  "leasing-rental": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&q=80",
  "vehicles-mobility": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
  "tracking-protection": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
  "banking-accounting": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
  "business-support": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
};

export interface SubServicePageData {
  slug: string;
  parentSlug: string;
  parentName: string;
  name: string;
  heroImage: string;
  hero: {
    headline: string;
    intro: string;
  };
  whatItIs: {
    intro: string;
    details?: string;
  };
  howItCanBeUsed: {
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
  whatHappensNext: string;
}

export const subServicePages: Record<string, Record<string, SubServicePageData>> = {
  // BUSINESS FUNDING SUB-SERVICES
  "business-funding": {
    "unsecured-business-loans": {
      slug: "unsecured-business-loans",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Unsecured Business Loans",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Unsecured business loans, without asset security",
        intro: "Unsecured business loans allow businesses to borrow without providing assets as security. We help you explore whether this type of funding fits your situation.",
      },
      whatItIs: {
        intro: "An unsecured business loan is funding based on business performance rather than assets. It can offer flexibility but often comes with shorter terms.",
        details: "Understanding suitability is key.",
      },
      howItCanBeUsed: {
        intro: "Unsecured loans are often used for:",
        items: [
          "Working capital",
          "Business investment",
          "Short term funding needs",
          "Managing growth",
        ],
        outro: "Terms and availability vary based on the business profile.",
      },
      howQ7Helps: {
        intro: "We help you navigate unsecured funding options clearly.",
        items: [
          "Reviewing your business position",
          "Explaining available loan structures",
          "Matching you with appropriate providers",
          "Managing the application process",
          "Supporting you through completion",
        ],
      },
      whoThisIsFor: {
        intro: "Unsecured business loans can suit:",
        items: [
          "Small and medium sized businesses",
          "Companies without asset security",
          "Businesses needing faster access to funding",
        ],
        outro: "We help assess whether this option is appropriate.",
      },
      whatHappensNext: "Start an enquiry and provide some basic business details. We'll review and be in touch to discuss options.",
    },
    "secured-business-loans": {
      slug: "secured-business-loans",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Secured Business Loans",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Secured business loans, structured with care",
        intro: "Secured business loans allow businesses to borrow against assets. We help you understand the implications and organise secured funding responsibly.",
      },
      whatItIs: {
        intro: "A secured business loan is funding that is supported by security, such as property or business assets. This can sometimes allow access to higher amounts or longer terms.",
        details: "Understanding the risks and structure is essential.",
      },
      howItCanBeUsed: {
        intro: "Secured loans are commonly used for:",
        items: [
          "Business expansion",
          "Property related investment",
          "Consolidating existing finance",
          "Larger funding requirements",
        ],
        outro: "The suitability depends on your circumstances and objectives.",
      },
      howQ7Helps: {
        intro: "We take a careful, transparent approach to secured funding.",
        items: [
          "Understanding your funding goals",
          "Explaining security requirements clearly",
          "Assessing affordability and structure",
          "Coordinating suitable funding options",
          "Supporting you throughout the process",
        ],
        outro: "We focus on clarity, not pressure.",
      },
      whoThisIsFor: {
        intro: "Secured business loans may be suitable for:",
        items: [
          "Established businesses",
          "Companies with valuable assets",
          "Businesses seeking larger or longer term funding",
        ],
        outro: "We'll help you assess whether this route makes sense.",
      },
      whatHappensNext: "Start an enquiry and tell us about your business and what you're looking to achieve. We'll guide you through the next steps.",
    },
    "working-capital": {
      slug: "working-capital",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Working Capital",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Working capital solutions to support day to day trading",
        intro: "Working capital funding helps businesses manage everyday costs and cash flow. We help you explore options that support stability and growth.",
      },
      whatItIs: {
        intro: "Working capital funding provides access to short term finance designed to support operational costs such as stock, wages, and overheads.",
        details: "It's focused on keeping businesses moving smoothly.",
      },
      howItCanBeUsed: {
        intro: "Working capital solutions are often used for:",
        items: [
          "Managing cash flow gaps",
          "Covering operational expenses",
          "Supporting growth periods",
          "Dealing with seasonal demand",
        ],
        outro: "The right structure depends on trading patterns.",
      },
      howQ7Helps: {
        intro: "We help you find working capital solutions that fit your business.",
        items: [
          "Reviewing cash flow needs",
          "Explaining funding structures",
          "Matching you with suitable options",
          "Managing the process end to end",
        ],
      },
      whoThisIsFor: {
        intro: "Working capital solutions can suit:",
        items: [
          "Growing businesses",
          "Seasonal businesses",
          "Companies managing fluctuating income",
        ],
        outro: "We help assess suitability clearly.",
      },
      whatHappensNext: "Start an enquiry and tell us about your working capital needs. We'll discuss the next steps with you.",
    },
    "invoice-finance": {
      slug: "invoice-finance",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Invoice Finance",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Invoice finance, built around your cash flow",
        intro: "Invoice finance helps businesses unlock cash tied up in unpaid invoices. We help you understand whether invoice finance is suitable and organise the right solution for your business.",
      },
      whatItIs: {
        intro: "Invoice finance allows you to access funds based on the value of your outstanding invoices, rather than waiting for customers to pay.",
        details: "It can help improve cash flow, smooth trading cycles, and support growth without taking on traditional loans.",
      },
      howItCanBeUsed: {
        intro: "Invoice finance is often used to:",
        items: [
          "Improve day to day cash flow",
          "Manage long payment terms",
          "Support growth without upfront borrowing",
          "Reduce pressure caused by late paying customers",
        ],
        outro: "The structure depends on how your business trades and invoices.",
      },
      howQ7Helps: {
        intro: "We help you understand invoice finance clearly and decide if it's right for your business.",
        items: [
          "Reviewing your trading model and invoicing",
          "Explaining different invoice finance structures",
          "Matching you with appropriate providers",
          "Managing the setup process",
          "Supporting you beyond initial approval",
        ],
      },
      whoThisIsFor: {
        intro: "Invoice finance can be suitable for:",
        items: [
          "Businesses that invoice other businesses",
          "Companies with long payment terms",
          "Growing businesses needing better cash flow control",
        ],
        outro: "If you're unsure whether it applies to your business, we can help assess this.",
      },
      whatHappensNext: "Start an enquiry and tell us a little about your business and invoicing. One of the team will be in touch to discuss next steps.",
    },
    "merchant-cash-advance": {
      slug: "merchant-cash-advance",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Merchant Cash Advance",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Merchant cash advance, aligned to your trading",
        intro: "A merchant cash advance provides funding based on future card sales. We help you understand how it works and whether it's suitable for your business.",
      },
      whatItIs: {
        intro: "A merchant cash advance is not a traditional loan. Repayments are typically linked to card turnover, meaning payments flex with trading levels.",
        details: "It's important to understand how this structure works.",
      },
      howItCanBeUsed: {
        intro: "Merchant cash advances are often used for:",
        items: [
          "Short term funding needs",
          "Businesses with strong card sales",
          "Managing seasonal cash flow",
          "Quick access to capital",
        ],
        outro: "Suitability depends on how your business trades.",
      },
      howQ7Helps: {
        intro: "We help you assess merchant cash advance options responsibly.",
        items: [
          "Reviewing your card turnover",
          "Explaining repayment structures clearly",
          "Comparing suitable providers",
          "Coordinating the setup process",
          "Supporting you after funding",
        ],
      },
      whoThisIsFor: {
        intro: "Merchant cash advances may suit:",
        items: [
          "Retail and hospitality businesses",
          "Companies with regular card transactions",
          "Businesses seeking flexible repayments",
        ],
        outro: "We help determine if this option makes sense for you.",
      },
      whatHappensNext: "Start an enquiry and tell us about your trading and card sales. One of the team will be in touch.",
    },
    "emergency-funding": {
      slug: "emergency-funding",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Emergency Funding",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Short term and emergency funding when timing matters",
        intro: "Short term funding can help businesses manage unexpected situations. We help you understand available options and move quickly where appropriate.",
      },
      whatItIs: {
        intro: "Short term or emergency funding is designed to provide temporary financial support during urgent situations.",
        details: "Understanding the terms and structure is important.",
      },
      howItCanBeUsed: {
        intro: "This type of funding is often used for:",
        items: [
          "Unexpected expenses",
          "Short term cash flow gaps",
          "Time sensitive opportunities",
          "Bridging periods",
        ],
        outro: "Speed and clarity are key.",
      },
      howQ7Helps: {
        intro: "We help businesses navigate short term funding responsibly.",
        items: [
          "Understanding the urgency and context",
          "Explaining suitable options clearly",
          "Coordinating fast moving solutions",
          "Supporting you through the process",
        ],
      },
      whoThisIsFor: {
        intro: "Short term funding may be suitable for:",
        items: [
          "Businesses facing urgent costs",
          "Companies needing temporary support",
          "Businesses awaiting incoming funds",
        ],
        outro: "We help assess whether it's the right approach.",
      },
      whatHappensNext: "Start an enquiry and explain the situation. One of the team will be in touch promptly.",
    },
    "refinancing": {
      slug: "refinancing",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Refinancing",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Refinancing existing business funding",
        intro: "Refinancing can help businesses improve terms, simplify arrangements, or restructure existing finance. We help you assess whether refinancing makes sense.",
      },
      whatItIs: {
        intro: "Refinancing involves replacing existing finance with a new structure. This can sometimes improve cash flow or reduce complexity.",
        details: "It's important to review this carefully.",
      },
      howItCanBeUsed: {
        intro: "Refinancing is often considered to:",
        items: [
          "Consolidate multiple facilities",
          "Adjust repayment terms",
          "Improve cash flow",
          "Simplify funding arrangements",
        ],
        outro: "Each situation is different.",
      },
      howQ7Helps: {
        intro: "We help you review existing funding and explore alternatives.",
        items: [
          "Reviewing current finance arrangements",
          "Identifying potential improvements",
          "Coordinating suitable refinancing options",
          "Managing the transition process",
        ],
      },
      whoThisIsFor: {
        intro: "Refinancing may be suitable for:",
        items: [
          "Businesses with multiple funding facilities",
          "Companies seeking better structure",
          "Businesses reviewing existing commitments",
        ],
        outro: "We help you understand whether refinancing is appropriate.",
      },
      whatHappensNext: "Start an enquiry and tell us about your existing funding. We'll review and discuss options with you.",
    },
  },

  // PAYMENTS AND MERCHANT SOLUTIONS SUB-SERVICES
  "payments-merchant": {
    "card-machines": {
      slug: "card-machines",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "Card Machines",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Card machines that suit how you take payments",
        intro: "Choosing the right card machine is about more than just accepting payments. We help businesses organise card machine solutions that fit how they trade, where they trade, and how often they take payments.",
      },
      whatItIs: {
        intro: "Card machines allow businesses to accept card payments in person, whether at a fixed location or on the move.",
        details: "Different setups suit different trading styles, so understanding your options is key.",
      },
      howItCanBeUsed: {
        intro: "Card machines are commonly used for:",
        items: [
          "Retail and hospitality environments",
          "Service based businesses",
          "Mobile or on the go payments",
          "Multi location trading",
        ],
        outro: "The right setup depends on how and where payments are taken.",
      },
      howQ7Helps: {
        intro: "We help you choose card machine solutions that work in practice, not just on paper.",
        items: [
          "Understanding your trading environment",
          "Explaining available machine options",
          "Matching you with suitable providers",
          "Coordinating setup and onboarding",
          "Supporting changes as your business grows",
        ],
      },
      whoThisIsFor: {
        intro: "Card machines can suit:",
        items: [
          "Small and medium sized businesses",
          "New or expanding businesses",
          "Businesses reviewing existing payment setups",
        ],
        outro: "We help you assess what makes sense for your operation.",
      },
      whatHappensNext: "Start an enquiry and tell us how you currently take payments. One of the team will be in touch to discuss options.",
    },
    "epos-systems": {
      slug: "epos-systems",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "EPOS Systems",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "EPOS systems built around your operation",
        intro: "An EPOS system can help manage payments, stock, and reporting in one place. We help businesses organise EPOS solutions that support day to day operations.",
      },
      whatItIs: {
        intro: "An EPOS system combines payment processing with tools for managing sales, stock, and reporting.",
        details: "Different systems offer different features, so choosing the right one is important.",
      },
      howItCanBeUsed: {
        intro: "EPOS systems are often used to:",
        items: [
          "Process in store payments",
          "Manage stock and inventory",
          "Track sales performance",
          "Support multi location businesses",
        ],
        outro: "Suitability depends on the complexity of your operation.",
      },
      howQ7Helps: {
        intro: "We help businesses navigate EPOS options without unnecessary complexity.",
        items: [
          "Understanding how your business operates",
          "Explaining system features clearly",
          "Matching you with appropriate providers",
          "Supporting setup and transition",
          "Remaining available as needs change",
        ],
      },
      whoThisIsFor: {
        intro: "EPOS systems can suit:",
        items: [
          "Retail and hospitality businesses",
          "Businesses needing better reporting",
          "Companies expanding or upgrading systems",
        ],
        outro: "We help determine whether EPOS is right for you.",
      },
      whatHappensNext: "Start an enquiry and tell us about your business setup. We'll guide you through next steps.",
    },
    "ecommerce-payments": {
      slug: "ecommerce-payments",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "Ecommerce Payments",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Ecommerce payment solutions that support online trading",
        intro: "Online payments need to be reliable, secure, and easy for customers. We help businesses organise ecommerce payment solutions that support online sales.",
      },
      whatItIs: {
        intro: "Ecommerce payment solutions enable businesses to accept payments through websites or online platforms.",
        details: "They can include card payments, digital wallets, and recurring billing.",
      },
      howItCanBeUsed: {
        intro: "Ecommerce payments are commonly used for:",
        items: [
          "Online stores",
          "Service bookings",
          "Subscription based businesses",
          "Digital products",
        ],
        outro: "The right setup depends on your sales model.",
      },
      howQ7Helps: {
        intro: "We help businesses put ecommerce payment solutions in place smoothly.",
        items: [
          "Understanding your online sales setup",
          "Explaining available payment options",
          "Coordinating integration with providers",
          "Supporting testing and launch",
        ],
      },
      whoThisIsFor: {
        intro: "Ecommerce payments suit:",
        items: [
          "Online businesses",
          "Hybrid online and in store operations",
          "Businesses expanding into digital sales",
        ],
        outro: "We help ensure the setup works properly from the start.",
      },
      whatHappensNext: "Start an enquiry and tell us about your online sales. We'll review and discuss suitable options.",
    },
    "merchant-accounts": {
      slug: "merchant-accounts",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "Merchant Accounts",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Merchant accounts organised for your business",
        intro: "A merchant account allows businesses to accept card payments securely. We help you organise merchant accounts that align with how your business trades.",
      },
      whatItIs: {
        intro: "A merchant account is an agreement that enables businesses to process card transactions.",
        details: "The setup and terms vary depending on business type and transaction volume.",
      },
      howItCanBeUsed: {
        intro: "Merchant accounts are required for:",
        items: [
          "In person card payments",
          "Online transactions",
          "Recurring or subscription payments",
        ],
        outro: "Choosing the right account helps ensure smooth payment processing.",
      },
      howQ7Helps: {
        intro: "We help businesses organise merchant accounts clearly and efficiently.",
        items: [
          "Reviewing your trading model",
          "Explaining merchant account requirements",
          "Coordinating setup with providers",
          "Supporting onboarding and activation",
        ],
      },
      whoThisIsFor: {
        intro: "Merchant accounts are suitable for:",
        items: [
          "Businesses accepting card payments",
          "Online and ecommerce sellers",
          "Service based businesses",
        ],
        outro: "We help assess suitability and requirements.",
      },
      whatHappensNext: "Start an enquiry and tell us how your business takes payments. One of the team will be in touch.",
    },
    "payment-processing": {
      slug: "payment-processing",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "Payment Processing",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Payment processing setup for your business",
        intro: "Efficient payment processing is essential for smooth trading. We help businesses set up reliable processing that suits their needs.",
      },
      whatItIs: {
        intro: "Payment processing involves the systems and relationships that allow card payments to flow from customer to your bank account.",
        details: "This includes acquirers, gateways, and settlement arrangements. Costs and speeds vary between providers.",
      },
      howItCanBeUsed: {
        intro: "Payment processing is used for:",
        items: [
          "All card transactions",
          "Online and in person payments",
          "Recurring billing",
          "Multi channel trading",
        ],
      },
      howQ7Helps: {
        intro: "We help you understand the payment processing landscape.",
        items: [
          "Comparing options and providers",
          "Explaining costs and settlement times",
          "Coordinating setup and integration",
          "Supporting ongoing requirements",
        ],
      },
      whoThisIsFor: {
        intro: "Payment processing support suits:",
        items: [
          "Businesses setting up card payments",
          "Companies reviewing existing arrangements",
          "Businesses expanding payment channels",
        ],
      },
      whatHappensNext: "Start an enquiry and tell us about your payment needs. We will review your situation and discuss suitable processing arrangements.",
    },
    "switching-providers": {
      slug: "switching-providers",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "Switching Providers",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Review and switch payment providers",
        intro: "If your current payment setup isn't working well, switching providers may help. We help businesses review existing arrangements and transition smoothly.",
      },
      whatItIs: {
        intro: "Switching payment providers involves moving to a new merchant account, gateway, or terminal provider.",
        details: "Reasons for switching include high fees, poor service, outdated equipment, or changing business needs.",
      },
      howItCanBeUsed: {
        intro: "Businesses consider switching to:",
        items: [
          "Reduce transaction costs",
          "Improve service levels",
          "Access better equipment",
          "Align with new business requirements",
        ],
      },
      howQ7Helps: {
        intro: "We help manage the switching process carefully.",
        items: [
          "Reviewing your current setup and costs",
          "Identifying suitable alternatives",
          "Coordinating the transition",
          "Minimising disruption to trading",
        ],
      },
      whoThisIsFor: {
        intro: "Switching support suits:",
        items: [
          "Businesses unhappy with current providers",
          "Companies with outdated equipment",
          "Businesses seeking better value",
        ],
      },
      whatHappensNext: "Start an enquiry and tell us about your current provider and any issues. We will discuss whether switching makes sense for your business.",
    },
  },

  // ASSET FINANCE SUB-SERVICES
  "asset-finance": {
    "equipment-finance": {
      slug: "equipment-finance",
      parentSlug: "asset-finance",
      parentName: "Asset Finance",
      name: "Equipment Finance",
      heroImage: parentHeroImages["asset-finance"],
      hero: {
        headline: "Equipment finance to support business investment",
        intro: "Equipment finance helps businesses access essential equipment without large upfront costs. We help you organise finance solutions that allow you to invest while managing cash flow effectively.",
      },
      whatItIs: {
        intro: "Equipment finance allows businesses to spread the cost of equipment over an agreed period, rather than paying in full at the outset.",
        details: "It can support growth while preserving working capital.",
      },
      howItCanBeUsed: {
        intro: "Equipment finance is commonly used for:",
        items: [
          "Office equipment",
          "Specialist tools",
          "Business machinery",
          "Operational equipment",
        ],
        outro: "The structure depends on the type of equipment and how it is used.",
      },
      howQ7Helps: {
        intro: "We help you explore equipment finance options clearly and practically.",
        items: [
          "Understanding what equipment you need",
          "Explaining finance structures in plain terms",
          "Matching you with suitable providers",
          "Managing the finance process",
          "Supporting you through completion",
        ],
      },
      whoThisIsFor: {
        intro: "Equipment finance can suit:",
        items: [
          "Growing businesses",
          "Companies upgrading equipment",
          "Businesses preserving cash reserves",
        ],
        outro: "We help assess whether this option is right for you.",
      },
      whatHappensNext: "Start an enquiry and tell us what equipment you're looking to finance. One of the team will be in touch.",
    },
    "machinery-finance": {
      slug: "machinery-finance",
      parentSlug: "asset-finance",
      parentName: "Asset Finance",
      name: "Machinery Finance",
      heroImage: parentHeroImages["asset-finance"],
      hero: {
        headline: "Machinery finance for larger business assets",
        intro: "Machinery finance supports businesses investing in larger or specialist machinery. We help organise suitable finance structures that align with operational needs.",
      },
      whatItIs: {
        intro: "Machinery finance allows businesses to fund the purchase of machinery over time, rather than paying upfront.",
        details: "This can support productivity and expansion.",
      },
      howItCanBeUsed: {
        intro: "Machinery finance is often used for:",
        items: [
          "Manufacturing equipment",
          "Construction machinery",
          "Industrial or specialist assets",
          "Production upgrades",
        ],
        outro: "Suitability depends on the machinery and business profile.",
      },
      howQ7Helps: {
        intro: "We help you navigate machinery finance carefully.",
        items: [
          "Reviewing machinery requirements",
          "Explaining available finance options",
          "Coordinating with appropriate providers",
          "Supporting the approval process",
          "Managing completion",
        ],
      },
      whoThisIsFor: {
        intro: "Machinery finance can suit:",
        items: [
          "Established businesses",
          "Manufacturing or industrial companies",
          "Businesses investing in productivity",
        ],
        outro: "We help determine if this route makes sense.",
      },
      whatHappensNext: "Start an enquiry and share details of the machinery you're considering. We'll guide you through the next steps.",
    },
    "technology-finance": {
      slug: "technology-finance",
      parentSlug: "asset-finance",
      parentName: "Asset Finance",
      name: "Technology Finance",
      heroImage: parentHeroImages["asset-finance"],
      hero: {
        headline: "Technology finance for modern business needs",
        intro: "Technology finance helps businesses access essential technology while spreading costs. We help organise finance solutions that keep businesses up to date.",
      },
      whatItIs: {
        intro: "Technology finance allows businesses to fund technology purchases over time, including hardware and systems.",
        details: "This can help manage cash flow while staying competitive.",
      },
      howItCanBeUsed: {
        intro: "Technology finance is commonly used for:",
        items: [
          "IT hardware",
          "Business software systems",
          "Network infrastructure",
          "Technology upgrades",
        ],
        outro: "The right structure depends on the technology and business setup.",
      },
      howQ7Helps: {
        intro: "We help businesses explore technology finance options clearly.",
        items: [
          "Understanding your technology requirements",
          "Explaining finance structures",
          "Matching you with suitable providers",
          "Supporting setup and implementation",
        ],
      },
      whoThisIsFor: {
        intro: "Technology finance can suit:",
        items: [
          "Growing businesses",
          "Companies upgrading systems",
          "Businesses managing IT investment",
        ],
        outro: "We help assess whether this option fits your needs.",
      },
      whatHappensNext: "Start an enquiry and tell us about the technology you're looking to finance. One of the team will be in touch.",
    },
    "specialist-assets": {
      slug: "specialist-assets",
      parentSlug: "asset-finance",
      parentName: "Asset Finance",
      name: "Specialist Assets",
      heroImage: parentHeroImages["asset-finance"],
      hero: {
        headline: "Finance for specialist and industry-specific assets",
        intro: "Specialist assets often require tailored finance solutions. We help businesses access appropriate funding for industry-specific equipment.",
      },
      whatItIs: {
        intro: "Some industries require unique equipment that standard finance providers may not understand.",
        details: "This can include medical equipment, agricultural machinery, or industry-specific tools. Specialist asset finance requires providers who understand the sector.",
      },
      howItCanBeUsed: {
        intro: "Specialist asset finance is used for:",
        items: [
          "Medical and healthcare equipment",
          "Agricultural machinery",
          "Industry-specific tools",
          "Unique operational assets",
        ],
      },
      howQ7Helps: {
        intro: "We help identify providers who understand your industry.",
        items: [
          "Assessing your specialist requirements",
          "Finding providers with sector expertise",
          "Coordinating appropriate finance structures",
          "Supporting the application process",
        ],
      },
      whoThisIsFor: {
        intro: "Specialist asset finance suits:",
        items: [
          "Healthcare providers",
          "Agricultural businesses",
          "Specialist trade companies",
          "Niche industry operators",
        ],
      },
      whatHappensNext: "Start an enquiry and tell us about your specialist equipment needs. We will connect you with appropriate finance options.",
    },
  },

  // LEASING AND RENTAL SUB-SERVICES
  "leasing-rental": {
    "vehicle-leasing": {
      slug: "vehicle-leasing",
      parentSlug: "leasing-rental",
      parentName: "Leasing and Rental",
      name: "Vehicle Leasing",
      heroImage: parentHeroImages["leasing-rental"],
      hero: {
        headline: "Vehicle leasing structured for business use",
        intro: "Vehicle leasing allows businesses to access vehicles without purchasing outright. We help you organise vehicle leasing solutions that suit how your business operates and grows.",
      },
      whatItIs: {
        intro: "Vehicle leasing provides access to cars or vans for an agreed period in return for regular payments. At the end of the term, vehicles are typically returned rather than owned.",
        details: "This can offer flexibility and predictable costs.",
      },
      howItCanBeUsed: {
        intro: "Vehicle leasing is commonly used for:",
        items: [
          "Company cars",
          "Business vans",
          "Fleet vehicles",
          "Short to medium term vehicle needs",
        ],
        outro: "The right lease structure depends on mileage, usage, and contract length.",
      },
      howQ7Helps: {
        intro: "We help businesses navigate vehicle leasing without unnecessary complexity.",
        items: [
          "Understanding how vehicles are used in your business",
          "Explaining leasing options clearly",
          "Matching you with suitable providers",
          "Coordinating contracts and delivery",
          "Supporting changes during the lease term",
        ],
      },
      whoThisIsFor: {
        intro: "Vehicle leasing can suit:",
        items: [
          "Growing businesses",
          "Companies managing fleets",
          "Businesses seeking predictable vehicle costs",
        ],
        outro: "We help assess whether leasing is right for you.",
      },
      whatHappensNext: "Start an enquiry and tell us about the vehicles you're looking to lease. We'll guide you through the next steps.",
    },
    "equipment-leasing": {
      slug: "equipment-leasing",
      parentSlug: "leasing-rental",
      parentName: "Leasing and Rental",
      name: "Equipment Leasing",
      heroImage: parentHeroImages["leasing-rental"],
      hero: {
        headline: "Equipment leasing for flexible access to assets",
        intro: "Equipment leasing allows businesses to use essential equipment without committing to ownership. We help organise leasing solutions that offer flexibility and control.",
      },
      whatItIs: {
        intro: "Equipment leasing provides access to equipment for an agreed period, with payments spread over time.",
        details: "This can reduce upfront costs and improve cash flow management.",
      },
      howItCanBeUsed: {
        intro: "Equipment leasing is often used for:",
        items: [
          "Office and operational equipment",
          "Specialist business tools",
          "Short to medium term equipment needs",
        ],
        outro: "Leasing structures vary depending on usage and duration.",
      },
      howQ7Helps: {
        intro: "We help you choose equipment leasing options that fit your business.",
        items: [
          "Understanding equipment requirements",
          "Explaining leasing structures",
          "Matching you with suitable providers",
          "Managing agreements and setup",
        ],
      },
      whoThisIsFor: {
        intro: "Equipment leasing can suit:",
        items: [
          "Businesses needing flexibility",
          "Companies avoiding capital expenditure",
          "Businesses with changing equipment needs",
        ],
        outro: "We help determine if leasing is appropriate.",
      },
      whatHappensNext: "Start an enquiry and tell us what equipment you're looking to lease. One of the team will be in touch.",
    },
    "fleet-leasing": {
      slug: "fleet-leasing",
      parentSlug: "leasing-rental",
      parentName: "Leasing and Rental",
      name: "Fleet Leasing",
      heroImage: parentHeroImages["leasing-rental"],
      hero: {
        headline: "Fleet leasing for growing operations",
        intro: "Fleet leasing supports businesses operating multiple vehicles. We help organise scalable solutions for fleet requirements.",
      },
      whatItIs: {
        intro: "Fleet leasing allows businesses to access multiple vehicles under coordinated agreements.",
        details: "Managing a fleet through leasing can simplify budgeting, maintenance, and vehicle replacement cycles.",
      },
      howItCanBeUsed: {
        intro: "Fleet leasing is commonly used for:",
        items: [
          "Delivery and logistics operations",
          "Service based businesses",
          "Sales and field teams",
          "Growing vehicle requirements",
        ],
      },
      howQ7Helps: {
        intro: "We help structure fleet arrangements that match your operational needs.",
        items: [
          "Understanding fleet size and usage",
          "Explaining fleet lease structures",
          "Coordinating with providers",
          "Managing the relationship over time",
        ],
      },
      whoThisIsFor: {
        intro: "Fleet leasing suits:",
        items: [
          "Businesses with multiple vehicles",
          "Expanding operations",
          "Companies seeking fleet efficiency",
        ],
      },
      whatHappensNext: "Submit an enquiry with details of your fleet. We will discuss suitable leasing arrangements with you.",
    },
    "short-term-rental": {
      slug: "short-term-rental",
      parentSlug: "leasing-rental",
      parentName: "Leasing and Rental",
      name: "Short Term Rental",
      heroImage: parentHeroImages["leasing-rental"],
      hero: {
        headline: "Short term rental solutions for changing needs",
        intro: "Short term rental offers temporary access to vehicles or equipment without long term commitment. We help businesses organise rental solutions that meet immediate requirements.",
      },
      whatItIs: {
        intro: "Short term rental provides access to assets for a limited period, typically days, weeks, or months.",
        details: "This can be useful when flexibility or speed is required.",
      },
      howItCanBeUsed: {
        intro: "Short term rental is commonly used for:",
        items: [
          "Temporary projects",
          "Seasonal demand",
          "Covering breakdowns or delays",
          "Trialling equipment before longer commitments",
        ],
      },
      howQ7Helps: {
        intro: "We help businesses arrange short term rental solutions efficiently.",
        items: [
          "Understanding the urgency and requirements",
          "Identifying suitable rental providers",
          "Coordinating availability and delivery",
          "Supporting extensions or changes",
        ],
      },
      whoThisIsFor: {
        intro: "Short term rental can suit:",
        items: [
          "Businesses with temporary needs",
          "Companies managing peak periods",
          "Businesses needing rapid access to assets",
        ],
        outro: "We help assess whether rental is the best approach.",
      },
      whatHappensNext: "Start an enquiry and tell us what you need to rent and for how long. We'll take it from there.",
    },
  },

  // VEHICLES AND MOBILITY SUB-SERVICES
  "vehicles-mobility": {
    "electric-bikes": {
      slug: "electric-bikes",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Electric Bikes",
      heroImage: parentHeroImages["vehicles-mobility"],
      hero: {
        headline: "Electric bikes for modern, urban businesses",
        intro: "Electric bikes offer a flexible and efficient way to move people and goods in urban environments. We help businesses organise electric bike solutions that support day to day operations.",
      },
      whatItIs: {
        intro: "Electric bikes provide assisted cycling, making them suitable for longer distances and frequent use while keeping running costs low.",
        details: "They are increasingly used as a practical alternative to traditional vehicles in cities.",
      },
      howItCanBeUsed: {
        intro: "Electric bikes are commonly used for:",
        items: [
          "Urban deliveries",
          "Service and field teams",
          "Last mile logistics",
          "Environmentally conscious operations",
        ],
        outro: "Suitability depends on distance, load, and usage.",
      },
      howQ7Helps: {
        intro: "We help businesses explore electric bike options clearly.",
        items: [
          "Understanding how bikes will be used",
          "Explaining purchase, leasing, or rental options",
          "Coordinating suitable providers",
          "Supporting setup and onboarding",
        ],
      },
      whoThisIsFor: {
        intro: "Electric bikes can suit:",
        items: [
          "Delivery and courier businesses",
          "Urban based operations",
          "Businesses seeking lower running costs",
        ],
        outro: "We help assess whether electric bikes fit your needs.",
      },
      whatHappensNext: "Start an enquiry and tell us how you plan to use electric bikes. One of the team will be in touch.",
    },
    "electric-mopeds": {
      slug: "electric-mopeds",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Electric Mopeds",
      heroImage: parentHeroImages["vehicles-mobility"],
      hero: {
        headline: "Electric mopeds for efficient city travel",
        intro: "Electric mopeds provide a compact, efficient transport solution for businesses operating in busy urban areas. We help organise electric moped solutions suited to your operation.",
      },
      whatItIs: {
        intro: "Electric mopeds are powered by electric motors and are designed for short to medium distance travel.",
        details: "They offer lower running costs and reduced environmental impact compared to traditional alternatives.",
      },
      howItCanBeUsed: {
        intro: "Electric mopeds are often used for:",
        items: [
          "Food and parcel delivery",
          "Field based teams",
          "Urban service businesses",
        ],
        outro: "The right solution depends on range, charging, and usage.",
      },
      howQ7Helps: {
        intro: "We help businesses navigate electric moped options confidently.",
        items: [
          "Understanding operational requirements",
          "Explaining available models and finance options",
          "Coordinating providers and delivery",
          "Supporting setup and compliance",
        ],
      },
      whoThisIsFor: {
        intro: "Electric mopeds can suit:",
        items: [
          "Delivery businesses",
          "Urban service providers",
          "Businesses transitioning to electric mobility",
        ],
        outro: "We help determine suitability.",
      },
      whatHappensNext: "Start an enquiry and tell us how electric mopeds would be used in your business. We'll discuss next steps.",
    },
    "branded-vehicles": {
      slug: "branded-vehicles",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Branded Vehicles",
      heroImage: parentHeroImages["vehicles-mobility"],
      hero: {
        headline: "Branded vehicles that support visibility and operations",
        intro: "Branded vehicles help businesses promote their brand while operating day to day. We help organise branded vehicle solutions that align with your business needs.",
      },
      whatItIs: {
        intro: "Branded vehicles are business vehicles that include company branding, logos, or messaging.",
        details: "They combine transport with mobile brand visibility.",
      },
      howItCanBeUsed: {
        intro: "Branded vehicles are commonly used for:",
        items: [
          "Delivery fleets",
          "Service teams",
          "Mobile businesses",
          "Brand visibility and marketing",
        ],
        outro: "Branding options vary depending on vehicle type and usage.",
      },
      howQ7Helps: {
        intro: "We help businesses organise branded vehicle solutions efficiently.",
        items: [
          "Understanding vehicle and branding requirements",
          "Coordinating vehicle sourcing and branding",
          "Aligning finance, leasing, or rental options",
          "Managing the process end to end",
        ],
      },
      whoThisIsFor: {
        intro: "Branded vehicles can suit:",
        items: [
          "Growing businesses",
          "Customer facing operations",
          "Businesses wanting increased visibility",
        ],
        outro: "We help assess what makes sense.",
      },
      whatHappensNext: "Start an enquiry and tell us about the vehicles and branding you're considering. We'll take it from there.",
    },
    "fleet-vehicles": {
      slug: "fleet-vehicles",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Fleet Vehicles",
      heroImage: parentHeroImages["vehicles-mobility"],
      hero: {
        headline: "Fleet vehicle solutions for growing businesses",
        intro: "Managing multiple vehicles requires structure and planning. We help businesses organise fleet vehicle solutions that support efficiency and control.",
      },
      whatItIs: {
        intro: "Fleet vehicles refer to multiple business vehicles managed as part of a wider operation.",
        details: "This can include cars, vans, or specialist vehicles.",
      },
      howItCanBeUsed: {
        intro: "Fleet solutions are often used for:",
        items: [
          "Delivery and logistics operations",
          "Service based businesses",
          "Regional or national teams",
          "Growing vehicle requirements",
        ],
        outro: "The right setup depends on size and usage.",
      },
      howQ7Helps: {
        intro: "We help businesses manage fleet vehicle solutions effectively.",
        items: [
          "Understanding fleet size and usage",
          "Exploring finance, leasing, or rental options",
          "Coordinating vehicle sourcing",
          "Supporting ongoing fleet needs",
        ],
      },
      whoThisIsFor: {
        intro: "Fleet vehicle solutions can suit:",
        items: [
          "Businesses with multiple vehicles",
          "Expanding operations",
          "Companies seeking better fleet control",
        ],
        outro: "We help determine the best approach.",
      },
      whatHappensNext: "Start an enquiry and tell us about your fleet requirements. We'll discuss next steps.",
    },
    "business-vehicles": {
      slug: "business-vehicles",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Business Vehicles",
      heroImage: parentHeroImages["vehicles-mobility"],
      hero: {
        headline: "Business vehicles for operations and staff",
        intro: "Access to suitable vehicles supports business operations. We help organise vehicles through finance, lease, or rental depending on your needs.",
      },
      whatItIs: {
        intro: "Business vehicles can include company cars, vans, pickup trucks, and specialist vehicles.",
        details: "The right acquisition method depends on usage, budget, and tax considerations.",
      },
      howItCanBeUsed: {
        intro: "Business vehicles are commonly used for:",
        items: [
          "Staff transport",
          "Client visits",
          "Deliveries and logistics",
          "Operational requirements",
        ],
      },
      howQ7Helps: {
        intro: "We help you navigate vehicle options clearly.",
        items: [
          "Assessing your vehicle needs",
          "Explaining acquisition options",
          "Coordinating with suppliers and finance providers",
          "Finding the right vehicles through the right channels",
        ],
      },
      whoThisIsFor: {
        intro: "Business vehicle support suits:",
        items: [
          "Growing businesses",
          "Companies with staff vehicle needs",
          "Businesses reviewing vehicle arrangements",
        ],
      },
      whatHappensNext: "Start an enquiry and tell us about your vehicle requirements. We will discuss suitable options with you.",
    },
    "electric-vehicles": {
      slug: "electric-vehicles",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Electric Vehicles",
      heroImage: parentHeroImages["vehicles-mobility"],
      hero: {
        headline: "Electric vehicles for business use",
        intro: "Electric vehicles can reduce running costs and emissions. We help businesses explore suitable EV options for their operations.",
      },
      whatItIs: {
        intro: "Electric vehicles offer lower fuel costs and maintenance requirements, along with tax benefits in many cases.",
        details: "Range, charging infrastructure, and vehicle availability are key considerations. The market is evolving rapidly.",
      },
      howItCanBeUsed: {
        intro: "Electric vehicles are commonly used for:",
        items: [
          "Company cars",
          "Urban deliveries",
          "Fleet operations",
          "Environmental commitments",
        ],
      },
      howQ7Helps: {
        intro: "We help assess suitability for your operations.",
        items: [
          "Reviewing your usage patterns",
          "Explaining EV options and charging requirements",
          "Coordinating finance, lease, or purchase",
          "Supporting the transition to electric",
        ],
      },
      whoThisIsFor: {
        intro: "Electric vehicles suit:",
        items: [
          "Businesses with urban routes",
          "Companies with charging access",
          "Businesses seeking lower running costs",
        ],
      },
      whatHappensNext: "Submit an enquiry and explain how vehicles will be used. We will discuss whether electric options suit your needs.",
    },
    "delivery-courier-vehicles": {
      slug: "delivery-courier-vehicles",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Delivery and Courier Vehicles",
      heroImage: parentHeroImages["vehicles-mobility"],
      hero: {
        headline: "Delivery and courier vehicles for operations",
        intro: "Reliable vehicles are essential for delivery businesses. We help organise suitable solutions for delivery and courier operations.",
      },
      whatItIs: {
        intro: "Delivery vehicles need to balance capacity, reliability, running costs, and access requirements.",
        details: "This includes vans, bikes, cargo vehicles, and specialist delivery solutions. The right choice depends on your routes, volumes, and operational model.",
      },
      howItCanBeUsed: {
        intro: "Delivery vehicles are used for:",
        items: [
          "Local and national deliveries",
          "Last mile logistics",
          "Courier services",
          "Food and parcel delivery",
        ],
      },
      howQ7Helps: {
        intro: "We coordinate vehicles that suit delivery operations.",
        items: [
          "Understanding your delivery patterns",
          "Exploring vehicle options",
          "Arranging finance, lease, or rental",
          "Supporting ongoing requirements",
        ],
      },
      whoThisIsFor: {
        intro: "Delivery vehicle support suits:",
        items: [
          "Courier and logistics businesses",
          "Food delivery operations",
          "Ecommerce fulfilment",
        ],
      },
      whatHappensNext: "Start an enquiry and outline your delivery needs. We will discuss suitable vehicle options with you.",
    },
    "micro-mobility": {
      slug: "micro-mobility",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Micro Mobility",
      heroImage: parentHeroImages["vehicles-mobility"],
      hero: {
        headline: "Micro mobility and urban transport solutions",
        intro: "Electric bikes, scooters, and micro vehicles suit urban and last-mile operations. We help businesses access suitable micro mobility options.",
      },
      whatItIs: {
        intro: "Micro mobility can reduce costs and carbon footprint for urban deliveries and staff transport.",
        details: "Options include electric bikes, cargo bikes, scooters, and small electric vehicles. Regulations and infrastructure vary by location.",
      },
      howItCanBeUsed: {
        intro: "Micro mobility is used for:",
        items: [
          "Urban deliveries",
          "Staff transport",
          "Last mile logistics",
          "Sustainable operations",
        ],
      },
      howQ7Helps: {
        intro: "We help assess suitability for your operations.",
        items: [
          "Understanding your urban mobility needs",
          "Explaining available options",
          "Coordinating access to suitable providers",
          "Considering local conditions",
        ],
      },
      whoThisIsFor: {
        intro: "Micro mobility suits:",
        items: [
          "Urban based businesses",
          "Delivery operations",
          "Companies seeking sustainable transport",
        ],
      },
      whatHappensNext: "Start an enquiry and tell us about your urban mobility needs. We will explore suitable options with you.",
    },
  },

  // TRACKING AND PROTECTION SUB-SERVICES
  "tracking-protection": {
    "vehicle-tracking": {
      slug: "vehicle-tracking",
      parentSlug: "tracking-protection",
      parentName: "Tracking and Protection",
      name: "Vehicle Tracking",
      heroImage: parentHeroImages["tracking-protection"],
      hero: {
        headline: "Vehicle tracking for visibility and control",
        intro: "Vehicle tracking helps businesses monitor vehicle location and usage. We help organise vehicle tracking solutions that support security, efficiency, and oversight.",
      },
      whatItIs: {
        intro: "Vehicle tracking systems use GPS technology to monitor the location and movement of vehicles in real time or through reporting.",
        details: "They can provide insight into usage patterns and improve security.",
      },
      howItCanBeUsed: {
        intro: "Vehicle tracking is commonly used for:",
        items: [
          "Fleet monitoring",
          "Improving route efficiency",
          "Vehicle security",
          "Operational oversight",
        ],
        outro: "The level of tracking depends on business needs.",
      },
      howQ7Helps: {
        intro: "We help businesses understand and organise vehicle tracking clearly.",
        items: [
          "Understanding what you want to monitor",
          "Explaining available tracking options",
          "Coordinating suitable providers",
          "Supporting installation and setup",
        ],
      },
      whoThisIsFor: {
        intro: "Vehicle tracking can suit:",
        items: [
          "Fleet operators",
          "Delivery businesses",
          "Service based companies",
          "Businesses seeking greater visibility",
        ],
        outro: "We help assess the right level of tracking.",
      },
      whatHappensNext: "Start an enquiry and tell us about the vehicles you want to track. One of the team will be in touch.",
    },
    "asset-tracking": {
      slug: "asset-tracking",
      parentSlug: "tracking-protection",
      parentName: "Tracking and Protection",
      name: "Asset Tracking",
      heroImage: parentHeroImages["tracking-protection"],
      hero: {
        headline: "Asset tracking to protect valuable equipment",
        intro: "Asset tracking helps businesses monitor and protect valuable equipment and assets. We help organise solutions that provide visibility and reassurance.",
      },
      whatItIs: {
        intro: "Asset tracking systems monitor the location and status of physical assets using tracking technology.",
        details: "They can help reduce loss and improve asset management.",
      },
      howItCanBeUsed: {
        intro: "Asset tracking is often used for:",
        items: [
          "High value equipment",
          "Mobile or remote assets",
          "Tools and machinery",
          "Reducing theft and loss",
        ],
        outro: "Tracking solutions vary based on asset type.",
      },
      howQ7Helps: {
        intro: "We help businesses implement asset tracking responsibly.",
        items: [
          "Understanding what assets need monitoring",
          "Explaining tracking technologies",
          "Coordinating appropriate providers",
          "Supporting setup and implementation",
        ],
      },
      whoThisIsFor: {
        intro: "Asset tracking can suit:",
        items: [
          "Businesses with valuable equipment",
          "Companies managing mobile assets",
          "Operations seeking improved asset control",
        ],
        outro: "We help assess suitability.",
      },
      whatHappensNext: "Start an enquiry and tell us what assets you'd like to track. We'll guide you through next steps.",
    },
    "thatcham-tracking": {
      slug: "thatcham-tracking",
      parentSlug: "tracking-protection",
      parentName: "Tracking and Protection",
      name: "Thatcham Approved Trackers",
      heroImage: parentHeroImages["tracking-protection"],
      hero: {
        headline: "Thatcham approved trackers for added reassurance",
        intro: "Thatcham approved trackers meet recognised security standards. We help businesses organise approved tracking solutions where higher security is required.",
      },
      whatItIs: {
        intro: "Thatcham approved trackers are security devices that meet industry recognised standards, often used for higher value vehicles.",
        details: "They can support theft recovery and insurance requirements.",
      },
      howItCanBeUsed: {
        intro: "Thatcham approved trackers are commonly used for:",
        items: [
          "High value vehicles",
          "Fleet security",
          "Enhanced theft protection",
          "Insurance related requirements",
        ],
        outro: "Approval level depends on the vehicle and usage.",
      },
      howQ7Helps: {
        intro: "We help businesses understand and organise approved tracking solutions.",
        items: [
          "Explaining approval levels clearly",
          "Coordinating suitable providers",
          "Supporting installation and certification",
          "Ensuring solutions meet requirements",
        ],
      },
      whoThisIsFor: {
        intro: "Thatcham approved trackers can suit:",
        items: [
          "Businesses with high value vehicles",
          "Fleet operators",
          "Businesses seeking enhanced security",
        ],
        outro: "We help determine if approval is required.",
      },
      whatHappensNext: "Start an enquiry and tell us about the vehicles you want to protect. We'll discuss suitable options.",
    },
    "cctv-webcams": {
      slug: "cctv-webcams",
      parentSlug: "tracking-protection",
      parentName: "Tracking and Protection",
      name: "Webcams and CCTV",
      heroImage: parentHeroImages["tracking-protection"],
      hero: {
        headline: "Webcams and CCTV for monitoring and security",
        intro: "Webcams and CCTV systems help businesses monitor premises, vehicles, and operations. We help organise solutions that support security and oversight.",
      },
      whatItIs: {
        intro: "Webcams and CCTV systems provide visual monitoring of locations or assets, either live or through recorded footage.",
        details: "They can support security and operational awareness.",
      },
      howItCanBeUsed: {
        intro: "Webcams and CCTV are often used for:",
        items: [
          "Premises security",
          "Monitoring vehicles or yards",
          "Remote oversight",
          "Theft prevention",
        ],
        outro: "Solutions vary based on coverage and complexity.",
      },
      howQ7Helps: {
        intro: "We help businesses explore CCTV and webcam options clearly.",
        items: [
          "Understanding monitoring requirements",
          "Explaining system options",
          "Coordinating suitable providers",
          "Supporting setup and installation",
        ],
      },
      whoThisIsFor: {
        intro: "Webcams and CCTV can suit:",
        items: [
          "Businesses with premises or yards",
          "Fleet or logistics operations",
          "Companies seeking added security",
        ],
        outro: "We help assess what level of monitoring is appropriate.",
      },
      whatHappensNext: "Start an enquiry and tell us what you're looking to monitor. We'll take it from there.",
    },
    "asset-recovery": {
      slug: "asset-recovery",
      parentSlug: "tracking-protection",
      parentName: "Tracking and Protection",
      name: "Asset Recovery",
      heroImage: parentHeroImages["tracking-protection"],
      hero: {
        headline: "Asset recovery support when it matters",
        intro: "Recovery solutions help retrieve stolen or lost assets. We help organise appropriate protection and recovery services.",
      },
      whatItIs: {
        intro: "Asset recovery services combine tracking technology with active recovery support.",
        details: "This is particularly relevant for high-value vehicles and equipment. Insurance requirements sometimes mandate specific recovery solutions.",
      },
      howItCanBeUsed: {
        intro: "Asset recovery is used for:",
        items: [
          "High value vehicle protection",
          "Equipment theft recovery",
          "Insurance compliance",
          "Peace of mind",
        ],
      },
      howQ7Helps: {
        intro: "We help coordinate approved recovery solutions.",
        items: [
          "Understanding your protection needs",
          "Explaining recovery options",
          "Coordinating with approved providers",
          "Meeting insurance requirements",
        ],
      },
      whoThisIsFor: {
        intro: "Asset recovery suits:",
        items: [
          "Businesses with high value assets",
          "Fleet operators",
          "Companies with insurance requirements",
        ],
      },
      whatHappensNext: "Start an enquiry and explain your concerns. We will discuss suitable protection and recovery options with you.",
    },
  },

  // BANKING AND ACCOUNTING SERVICES SUB-SERVICES
  "banking-accounting": {
    "business-bank-accounts": {
      slug: "business-bank-accounts",
      parentSlug: "banking-accounting",
      parentName: "Banking and Accounting Services",
      name: "Business Bank Accounts",
      heroImage: parentHeroImages["banking-accounting"],
      hero: {
        headline: "Business bank accounts built around how you operate",
        intro: "Choosing the right business bank account is about more than just holding money. We help businesses access banking solutions that support day to day operations and long term plans.",
      },
      whatItIs: {
        intro: "A business bank account allows a company to manage income, expenses, and payments separately from personal finances.",
        details: "Different accounts offer different features, depending on how a business trades.",
      },
      howItCanBeUsed: {
        intro: "Business bank accounts are commonly used for:",
        items: [
          "Managing business income and expenses",
          "Separating personal and business finances",
          "Supporting card payments and transfers",
          "Improving financial visibility",
        ],
        outro: "The right account depends on your business structure and activity.",
      },
      howQ7Helps: {
        intro: "We help businesses access suitable banking solutions through trusted partners.",
        items: [
          "Understanding how your business operates",
          "Explaining available account options",
          "Coordinating account setup where appropriate",
          "Supporting you through the process",
        ],
        outro: "Our focus is on clarity and suitability.",
      },
      whoThisIsFor: {
        intro: "Business bank accounts are suitable for:",
        items: [
          "New businesses setting up",
          "Established companies reviewing banking",
          "Growing businesses needing better functionality",
        ],
        outro: "We help assess what makes sense for your situation.",
      },
      whatHappensNext: "Start an enquiry and tell us about your business and banking needs. One of the team will be in touch.",
    },
    "business-credit-cards": {
      slug: "business-credit-cards",
      parentSlug: "banking-accounting",
      parentName: "Banking and Accounting Services",
      name: "Business Credit Cards",
      heroImage: parentHeroImages["banking-accounting"],
      hero: {
        headline: "Business credit cards for controlled spending",
        intro: "Business credit cards can help manage expenses and cash flow when used appropriately. We help businesses understand and access suitable card options.",
      },
      whatItIs: {
        intro: "A business credit card allows companies to make purchases on credit, typically with monthly repayment terms.",
        details: "Features and limits vary depending on the provider and business profile.",
      },
      howItCanBeUsed: {
        intro: "Business credit cards are often used for:",
        items: [
          "Managing day to day expenses",
          "Online purchases and subscriptions",
          "Short term cash flow flexibility",
          "Tracking business spending",
        ],
        outro: "Responsible use is important.",
      },
      howQ7Helps: {
        intro: "We help businesses explore business credit card options clearly.",
        items: [
          "Reviewing your business profile",
          "Explaining card features and requirements",
          "Coordinating suitable options",
          "Supporting the application process",
        ],
      },
      whoThisIsFor: {
        intro: "Business credit cards can suit:",
        items: [
          "Small and medium sized businesses",
          "Companies managing regular expenses",
          "Businesses seeking controlled flexibility",
        ],
        outro: "We help determine if this option fits your needs.",
      },
      whatHappensNext: "Start an enquiry and tell us about your business and spending requirements. We'll discuss next steps.",
    },
    "accounting-services": {
      slug: "accounting-services",
      parentSlug: "banking-accounting",
      parentName: "Banking and Accounting Services",
      name: "Accounting Services",
      heroImage: parentHeroImages["banking-accounting"],
      hero: {
        headline: "Accounting services that support better decision making",
        intro: "Accounting is about more than compliance. We help businesses access accounting support that provides clarity and supports growth.",
      },
      whatItIs: {
        intro: "Accounting services help businesses manage financial records, reporting, and obligations.",
        details: "The level of support varies depending on business size and complexity.",
      },
      howItCanBeUsed: {
        intro: "Accounting services are commonly used for:",
        items: [
          "Bookkeeping and reporting",
          "Year end accounts",
          "Management information",
          "Ongoing financial oversight",
        ],
        outro: "The right support depends on your business needs.",
      },
      howQ7Helps: {
        intro: "We work with trusted partners to help businesses access accounting support.",
        items: [
          "Understanding your business structure",
          "Coordinating appropriate accounting services",
          "Acting as a point of contact where needed",
          "Ensuring services align with wider financial setup",
        ],
      },
      whoThisIsFor: {
        intro: "Accounting services can suit:",
        items: [
          "New and growing businesses",
          "Established companies needing support",
          "Business owners seeking clarity",
        ],
        outro: "We help match you with suitable support.",
      },
      whatHappensNext: "Start an enquiry and tell us about the accounting support you're looking for. One of the team will be in touch.",
    },
    "tax-compliance-support": {
      slug: "tax-compliance-support",
      parentSlug: "banking-accounting",
      parentName: "Banking and Accounting Services",
      name: "Tax and Compliance Support",
      heroImage: parentHeroImages["banking-accounting"],
      hero: {
        headline: "Tax and compliance support with clarity and care",
        intro: "Managing tax and compliance is an essential part of running a business. We help businesses access support that keeps everything structured and compliant.",
      },
      whatItIs: {
        intro: "Tax and compliance support helps businesses meet their obligations and manage reporting requirements.",
        details: "This can include ongoing advice and support.",
      },
      howItCanBeUsed: {
        intro: "Tax and compliance support is often used for:",
        items: [
          "Tax planning and reporting",
          "Compliance requirements",
          "Ongoing advisory support",
          "Reducing administrative burden",
        ],
        outro: "The right level of support depends on the business.",
      },
      howQ7Helps: {
        intro: "We help businesses access tax and compliance support through trusted partners.",
        items: [
          "Understanding your business obligations",
          "Coordinating appropriate specialist support",
          "Ensuring services align with your wider setup",
          "Remaining involved where needed",
        ],
      },
      whoThisIsFor: {
        intro: "Tax and compliance support can suit:",
        items: [
          "Businesses with ongoing obligations",
          "Growing companies needing advice",
          "Business owners seeking reassurance",
        ],
        outro: "We help assess what support is appropriate.",
      },
      whatHappensNext: "Start an enquiry and tell us about your tax or compliance requirements. We'll guide you through the next steps.",
    },
  },

  // BUSINESS SUPPORT SERVICES SUB-SERVICES
  "business-support": {
    "operational-support": {
      slug: "operational-support",
      parentSlug: "business-support",
      parentName: "Business Support Services",
      name: "Operational Support",
      heroImage: parentHeroImages["business-support"],
      hero: {
        headline: "Operational support for growing businesses",
        intro: "Operational support helps businesses run smoothly. We help organise practical assistance that fits your needs.",
      },
      whatItIs: {
        intro: "Growing businesses often need additional capacity without permanent hires.",
        details: "Operational support can include process improvement, project support, or temporary resource. The right support depends on your specific challenges.",
      },
      howItCanBeUsed: {
        intro: "Operational support is used for:",
        items: [
          "Process improvement",
          "Project delivery",
          "Temporary capacity",
          "Operational efficiency",
        ],
      },
      howQ7Helps: {
        intro: "We identify gaps and coordinate suitable support.",
        items: [
          "Understanding your operational challenges",
          "Identifying suitable support options",
          "Coordinating with partners",
          "Managing ongoing requirements",
        ],
      },
      whoThisIsFor: {
        intro: "Operational support suits:",
        items: [
          "Growing businesses",
          "Companies with temporary needs",
          "Businesses seeking efficiency",
        ],
      },
      whatHappensNext: "Submit an enquiry and outline where support is needed. We will discuss suitable options with you.",
    },
    "back-office-services": {
      slug: "back-office-services",
      parentSlug: "business-support",
      parentName: "Business Support Services",
      name: "Back Office Services",
      heroImage: parentHeroImages["business-support"],
      hero: {
        headline: "Back office services for administrative efficiency",
        intro: "Back office support handles essential administrative functions. We help businesses access reliable support services.",
      },
      whatItIs: {
        intro: "Back office functions include data entry, document management, customer service support, and administrative processing.",
        details: "Outsourcing these functions can free up time for core business activities.",
      },
      howItCanBeUsed: {
        intro: "Back office services are used for:",
        items: [
          "Data entry and processing",
          "Document management",
          "Customer service support",
          "Administrative tasks",
        ],
      },
      howQ7Helps: {
        intro: "We help assess your back office needs.",
        items: [
          "Understanding your requirements",
          "Identifying suitable providers",
          "Coordinating setup",
          "Focusing on reliability and quality",
        ],
      },
      whoThisIsFor: {
        intro: "Back office services suit:",
        items: [
          "Busy business owners",
          "Growing companies",
          "Businesses seeking efficiency",
        ],
      },
      whatHappensNext: "Start an enquiry and tell us about your back office requirements. We will discuss suitable support options.",
    },
    "admin-support": {
      slug: "admin-support",
      parentSlug: "business-support",
      parentName: "Business Support Services",
      name: "Admin Support",
      heroImage: parentHeroImages["business-support"],
      hero: {
        headline: "Business administration support",
        intro: "Admin support helps manage day-to-day business tasks. We help organise appropriate administrative assistance.",
      },
      whatItIs: {
        intro: "Administrative support can include diary management, correspondence, filing, and general business coordination.",
        details: "This suits businesses where the owner needs to focus on higher-value activities.",
      },
      howItCanBeUsed: {
        intro: "Admin support is used for:",
        items: [
          "Diary management",
          "Correspondence handling",
          "Filing and organisation",
          "General coordination",
        ],
      },
      howQ7Helps: {
        intro: "We help identify your admin support needs.",
        items: [
          "Understanding your challenges",
          "Coordinating with suitable providers",
          "Focusing on practical solutions",
          "Ensuring reliability",
        ],
      },
      whoThisIsFor: {
        intro: "Admin support suits:",
        items: [
          "Busy business owners",
          "Growing companies",
          "Professionals needing assistance",
        ],
      },
      whatHappensNext: "Start an enquiry and describe your admin challenges. We will discuss suitable support options.",
    },
    "partner-introductions": {
      slug: "partner-introductions",
      parentSlug: "business-support",
      parentName: "Business Support Services",
      name: "Partner Introductions",
      heroImage: parentHeroImages["business-support"],
      hero: {
        headline: "Partner introductions you can trust",
        intro: "Finding the right partners matters. We help introduce businesses to trusted providers across various services.",
      },
      whatItIs: {
        intro: "Businesses often need specialists they can trust but don't know where to start.",
        details: "Introductions are based on suitability and track record. This can cover legal, HR, marketing, IT, and other business services.",
      },
      howItCanBeUsed: {
        intro: "Partner introductions cover:",
        items: [
          "Legal services",
          "HR support",
          "Marketing services",
          "IT and technology",
        ],
      },
      howQ7Helps: {
        intro: "We assess your requirements and make suitable introductions.",
        items: [
          "Understanding what you need",
          "Identifying trusted partners",
          "Facilitating introductions",
          "Remaining available if needed",
        ],
      },
      whoThisIsFor: {
        intro: "Partner introductions suit:",
        items: [
          "Businesses needing specialists",
          "Companies seeking trusted providers",
          "Business owners without existing networks",
        ],
      },
      whatHappensNext: "Start an enquiry and explain what you're looking for. We will discuss suitable partner introductions.",
    },
    "advisory-support": {
      slug: "advisory-support",
      parentSlug: "business-support",
      parentName: "Business Support Services",
      name: "Advisory Support",
      heroImage: parentHeroImages["business-support"],
      hero: {
        headline: "Ongoing advisory support for your business",
        intro: "Sometimes businesses benefit from ongoing guidance and support. We help organise advisory relationships that suit your needs.",
      },
      whatItIs: {
        intro: "Advisory support provides regular access to experienced guidance on business decisions, challenges, and opportunities.",
        details: "This can range from informal check-ins to structured advisory arrangements.",
      },
      howItCanBeUsed: {
        intro: "Advisory support is used for:",
        items: [
          "Strategic guidance",
          "Decision support",
          "Challenge resolution",
          "Opportunity assessment",
        ],
      },
      howQ7Helps: {
        intro: "We help identify what type of advisory support would benefit your business.",
        items: [
          "Understanding your needs",
          "Explaining options",
          "Coordinating suitable arrangements",
          "Providing ongoing support",
        ],
      },
      whoThisIsFor: {
        intro: "Advisory support suits:",
        items: [
          "Business owners seeking guidance",
          "Growing companies",
          "Businesses facing decisions",
        ],
      },
      whatHappensNext: "Start an enquiry and tell us what kind of support you're looking for. We will discuss suitable advisory options.",
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
