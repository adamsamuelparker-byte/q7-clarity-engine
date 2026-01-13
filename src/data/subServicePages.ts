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
  overview: string;
  howQ7Helps: string;
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
        headline: "Unsecured business loans for quick access funding",
        intro: "Unsecured business loans allow you to borrow without using property or assets as security. We help businesses understand when this type of funding is appropriate and access suitable options.",
      },
      overview: "Unsecured loans are typically faster to arrange and don't put personal or business assets at risk. They can be suitable for smaller amounts, short term needs, or businesses without significant assets to offer as security. Amounts, rates and terms vary depending on trading history, turnover, and creditworthiness.",
      howQ7Helps: "We help you assess whether unsecured lending suits your situation, explain the costs and terms clearly, and match you with appropriate lenders from our network. We manage the application process and remain involved until completion.",
      whatHappensNext: "Start an enquiry and tell us about your funding requirements. One of our team will review your details and be in touch to discuss your options. There is no obligation to proceed.",
    },
    "secured-business-loans": {
      slug: "secured-business-loans",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Secured Business Loans",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Secured business loans, structured with care",
        intro: "Secured business loans use property or assets as security to support larger or longer term borrowing. We help businesses understand when this type of funding is appropriate and how to approach it sensibly.",
      },
      overview: "Secured lending can offer access to higher amounts or longer repayment periods, but it requires careful consideration due to the assets involved. Because the lender has security, rates are often more competitive than unsecured options. However, assets used as security could be at risk if repayments are not maintained.",
      howQ7Helps: "We help you assess suitability by reviewing your assets, funding requirements, and repayment capacity. We explain risks clearly and coordinate funding through appropriate lending partners. We remain involved throughout to ensure the process runs smoothly.",
      whatHappensNext: "Start an enquiry and tell us about your funding goals and available security. One of our team will review your details and discuss your options. There is no obligation to proceed.",
    },
    "working-capital": {
      slug: "working-capital",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Working Capital",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Working capital solutions to support cash flow",
        intro: "Working capital funding helps businesses manage day to day costs and trading cycles. We help organise solutions that support stability and continuity.",
      },
      overview: "Working capital can assist with wages, suppliers, or operational costs during busy or uneven trading periods. This type of funding is designed to support ongoing operations rather than major investments. Solutions vary from overdrafts to short term facilities depending on your needs.",
      howQ7Helps: "We help assess your cash flow position and coordinate suitable short term funding options where appropriate. We explain the different structures available and help you choose one that fits your trading cycle.",
      whatHappensNext: "Submit an enquiry and tell us about your trading cycle and requirements. We will review your situation and be in touch to discuss suitable options.",
    },
    "invoice-finance": {
      slug: "invoice-finance",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Invoice Finance",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Invoice finance to unlock cash in your receivables",
        intro: "Invoice finance allows businesses to access cash tied up in unpaid invoices. We help you understand the options and organise suitable facilities.",
      },
      overview: "If your business invoices other businesses and waits for payment, invoice finance can release a percentage of the invoice value upfront. This can help with cash flow gaps, growth funding, or smoothing out uneven payment cycles. Options include factoring (where the provider manages collections) and invoice discounting (where you retain control).",
      howQ7Helps: "We help you assess your invoice book, explain the different structures clearly, and coordinate with suitable providers. We focus on finding arrangements that work with how your business operates and your customer relationships.",
      whatHappensNext: "Start an enquiry and tell us about your invoicing and payment patterns. We will review your situation and discuss suitable options with you.",
    },
    "merchant-cash-advance": {
      slug: "merchant-cash-advance",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Merchant Cash Advance",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Merchant cash advance against future card sales",
        intro: "A merchant cash advance provides upfront funding repaid through a percentage of future card transactions. We help businesses understand if this suits their trading profile.",
      },
      overview: "Merchant cash advances are designed for businesses that take regular card payments. You receive a lump sum upfront and repay through an agreed percentage of daily or weekly card sales. Repayments flex with your trading volume, which can suit seasonal or variable businesses. Costs are typically expressed as a factor rate rather than an APR.",
      howQ7Helps: "We help assess your card turnover and trading patterns, explain the costs in practical terms, and coordinate with suitable providers. We ensure you understand how repayments will work before you commit.",
      whatHappensNext: "Start an enquiry and share details of your card payment volumes. We will be in touch to discuss whether this type of funding suits your business.",
    },
    "emergency-funding": {
      slug: "emergency-funding",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Emergency Funding",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Emergency funding when timing matters",
        intro: "Unexpected costs or delays can put pressure on a business. We help businesses explore emergency funding options calmly and responsibly.",
      },
      overview: "Emergency funding is designed to provide short term support while longer term plans are reviewed. This could help bridge unexpected gaps, cover urgent costs, or provide breathing room during challenging periods. Speed of access is often a key consideration.",
      howQ7Helps: "We help you assess urgency, explain available options, and coordinate solutions without unnecessary complexity. We focus on finding practical support while ensuring you understand the terms and costs involved.",
      whatHappensNext: "Start an enquiry and outline the situation you're facing. We will review your details and be in touch promptly to discuss suitable options.",
    },
    "refinancing": {
      slug: "refinancing",
      parentSlug: "business-funding",
      parentName: "Business Funding",
      name: "Refinancing",
      heroImage: parentHeroImages["business-funding"],
      hero: {
        headline: "Refinancing existing business funding",
        intro: "Refinancing can help improve cash flow or simplify existing arrangements. We help businesses review current funding and explore alternatives.",
      },
      overview: "Refinancing may involve consolidating facilities, restructuring repayments, or replacing existing funding with better terms. This can help reduce monthly outgoings, simplify administration, or release equity. Each situation is different and requires careful assessment.",
      howQ7Helps: "We review your current setup, assess your goals, and help organise more suitable structures where appropriate. We coordinate with lenders and manage the transition process.",
      whatHappensNext: "Submit an enquiry and share details of your existing facilities. We will review your situation and discuss whether refinancing could work for you.",
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
        headline: "Card machines for reliable in-person payments",
        intro: "Card machines allow businesses to take card payments in person. We help you find the right terminals for your business without unnecessary complexity.",
      },
      overview: "Card terminals vary in features, connectivity, and costs. Options include countertop terminals, portable devices, and mobile card readers. The right choice depends on how and where you trade, your transaction volumes, and integration requirements.",
      howQ7Helps: "We help assess your payment environment, explain the options available, and coordinate with suitable providers. We focus on finding terminals that work reliably for your business.",
      whatHappensNext: "Start an enquiry and tell us about how your business takes payments. We will review your requirements and be in touch to discuss suitable options.",
    },
    "epos-systems": {
      slug: "epos-systems",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "EPOS Systems",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "EPOS systems for retail and hospitality",
        intro: "EPOS systems combine payment processing with stock management and reporting. We help businesses access suitable systems that fit their operations.",
      },
      overview: "Electronic Point of Sale systems are commonly used in retail, hospitality, and service businesses. They can help manage inventory, track sales, and streamline operations. Systems vary significantly in capability and cost.",
      howQ7Helps: "We help you understand what features you need, compare options, and coordinate with providers. We focus on practical solutions that integrate with how your business operates.",
      whatHappensNext: "Start an enquiry and tell us about your business operations. We will discuss suitable EPOS options with you.",
    },
    "ecommerce-payments": {
      slug: "ecommerce-payments",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "Ecommerce Payments",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Ecommerce payment solutions that support online trading",
        intro: "Online businesses require reliable and secure payment systems. We help organise ecommerce payment solutions that integrate smoothly with your website or platform.",
      },
      overview: "Ecommerce payments can include card processing, payment gateways, fraud protection, and alternative payment methods. The right setup depends on your platform, transaction volumes, and customer expectations.",
      howQ7Helps: "We help match your platform with suitable providers and coordinate setup. We focus on reliability, security, and smooth customer experience.",
      whatHappensNext: "Start an enquiry and tell us about your online sales channels. We will review your requirements and discuss suitable solutions.",
    },
    "merchant-accounts": {
      slug: "merchant-accounts",
      parentSlug: "payments-merchant",
      parentName: "Payments and Merchant Solutions",
      name: "Merchant Accounts",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Merchant accounts organised with clarity",
        intro: "A merchant account enables businesses to accept card payments. We help businesses access suitable accounts without confusion or unnecessary delays.",
      },
      overview: "Different providers offer different structures depending on trading profile, industry, and risk level. Some businesses require dedicated merchant accounts while others can use aggregated solutions. Understanding the differences helps you choose appropriately.",
      howQ7Helps: "We help assess your requirements, explain the options, and coordinate account setup. We work with multiple providers to find suitable solutions for your business.",
      whatHappensNext: "Submit an enquiry with details of your business activity. We will be in touch to discuss merchant account options.",
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
      overview: "Payment processing involves the systems and relationships that allow card payments to flow from customer to your bank account. This includes acquirers, gateways, and settlement arrangements. Costs and speeds vary between providers.",
      howQ7Helps: "We help you understand the payment processing landscape, compare options, and coordinate setup. We focus on reliability, competitive rates, and integration with your existing systems.",
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
      overview: "Reasons for switching include high fees, poor service, outdated equipment, or changing business needs. Switching requires careful planning to avoid disruption to trading. We help manage the transition process.",
      howQ7Helps: "We review your current setup, identify issues, and coordinate with alternative providers. We manage the transition to minimise disruption and ensure a smooth changeover.",
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
        headline: "Equipment finance for essential business assets",
        intro: "Equipment finance allows businesses to spread the cost of tools and machinery. We help organise suitable finance solutions for your equipment needs.",
      },
      overview: "Equipment finance can cover a wide range of business assets from office equipment to specialist tools. Spreading the cost over time preserves working capital and can make larger investments more manageable. Terms and structures vary based on asset type and value.",
      howQ7Helps: "We assess the asset type and usage, explain finance options, and coordinate with appropriate providers. We help structure finance that fits your operational needs and budget.",
      whatHappensNext: "Start an enquiry and tell us what equipment you need. We will review your requirements and discuss suitable finance options.",
    },
    "machinery-finance": {
      slug: "machinery-finance",
      parentSlug: "asset-finance",
      parentName: "Asset Finance",
      name: "Machinery Finance",
      heroImage: parentHeroImages["asset-finance"],
      hero: {
        headline: "Machinery finance for industrial and manufacturing needs",
        intro: "Machinery finance helps businesses invest in production equipment without large upfront costs. We help organise suitable funding for machinery investments.",
      },
      overview: "Industrial machinery often represents significant investment. Finance can help spread costs, preserve cash flow, and allow businesses to access better equipment than outright purchase would allow. Options include hire purchase, leasing, and refinancing existing equipment.",
      howQ7Helps: "We help assess your machinery requirements, explain the different finance structures, and coordinate with suitable providers. We focus on finding solutions that support your production needs.",
      whatHappensNext: "Start an enquiry and tell us about the machinery you need. We will discuss suitable finance options with you.",
    },
    "technology-finance": {
      slug: "technology-finance",
      parentSlug: "asset-finance",
      parentName: "Asset Finance",
      name: "Technology Finance",
      heroImage: parentHeroImages["asset-finance"],
      hero: {
        headline: "Technology finance for modern operations",
        intro: "Technology finance supports investment in IT and digital infrastructure. We help businesses access appropriate options for technology investments.",
      },
      overview: "Technology moves quickly, making finance particularly suitable for IT equipment. This can include hardware, software, systems upgrades, or digital infrastructure. Spreading costs can help businesses stay current without major capital outlay.",
      howQ7Helps: "We help structure finance to suit your operational needs and technology refresh cycles. We coordinate with providers who understand technology assets.",
      whatHappensNext: "Submit an enquiry with details of your technology requirements. We will be in touch to discuss suitable finance options.",
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
      overview: "Some industries require unique equipment that standard finance providers may not understand. This can include medical equipment, agricultural machinery, or industry-specific tools. Specialist asset finance requires providers who understand the sector.",
      howQ7Helps: "We help identify providers who understand your industry and asset type. We coordinate finance that reflects the value and usage of specialist equipment.",
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
        headline: "Vehicle leasing for flexibility and control",
        intro: "Vehicle leasing allows businesses to access vehicles without ownership. We help organise leasing solutions that fit your operational needs.",
      },
      overview: "Leasing can provide predictable costs, flexibility, and access to newer vehicles without large capital outlay. Options include contract hire, finance lease, and personal contract hire for directors. Each has different implications for ownership, maintenance, and end of term.",
      howQ7Helps: "We assess your usage patterns, explain the different lease structures, and coordinate with suitable providers. We help you understand total costs and end of term options.",
      whatHappensNext: "Start an enquiry and tell us about your vehicle needs. We will discuss suitable leasing options with you.",
    },
    "equipment-leasing": {
      slug: "equipment-leasing",
      parentSlug: "leasing-rental",
      parentName: "Leasing and Rental",
      name: "Equipment Leasing",
      heroImage: parentHeroImages["leasing-rental"],
      hero: {
        headline: "Equipment leasing to preserve capital",
        intro: "Equipment leasing allows businesses to use essential assets without ownership. We help organise leasing arrangements that suit your operations.",
      },
      overview: "Leasing equipment can preserve working capital, provide tax benefits, and offer flexibility to upgrade as needs change. This suits businesses that prefer operational expenditure over capital investment, or those in industries with rapidly changing equipment.",
      howQ7Helps: "We help assess whether leasing suits your situation, explain the structures available, and coordinate with appropriate providers.",
      whatHappensNext: "Start an enquiry and tell us about your equipment requirements. We will discuss suitable leasing options.",
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
      overview: "Managing a fleet through leasing can simplify budgeting, maintenance, and vehicle replacement cycles. Fleet leasing arrangements can include maintenance packages, fuel cards, and replacement vehicle provisions. Scale can also provide negotiating power on rates.",
      howQ7Helps: "We help structure fleet arrangements that match your operational needs. We coordinate with providers and help manage the relationship over time.",
      whatHappensNext: "Submit an enquiry with details of your fleet. We will discuss suitable leasing arrangements with you.",
    },
    "short-term-rental": {
      slug: "short-term-rental",
      parentSlug: "leasing-rental",
      parentName: "Leasing and Rental",
      name: "Short Term Rental",
      heroImage: parentHeroImages["leasing-rental"],
      hero: {
        headline: "Short term rental for changing needs",
        intro: "Short term rental provides flexibility without long commitments. We help organise rental solutions for temporary or variable requirements.",
      },
      overview: "Short term rental suits seasonal peaks, temporary projects, or uncertain requirements. Rental periods can range from days to months. This provides maximum flexibility but typically at higher daily rates than long term arrangements.",
      howQ7Helps: "We coordinate suitable rental providers based on duration, usage, and vehicle or equipment type. We help you understand costs and return conditions.",
      whatHappensNext: "Start an enquiry and outline your rental timeframe. We will discuss suitable options with you.",
    },
  },

  // VEHICLES AND MOBILITY SUB-SERVICES
  "vehicles-mobility": {
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
      overview: "Business vehicles can include company cars, vans, pickup trucks, and specialist vehicles. The right acquisition method depends on usage, budget, and tax considerations. We help you navigate the options.",
      howQ7Helps: "We assess your vehicle needs, explain acquisition options, and coordinate with suppliers and finance providers. We help you find the right vehicles through the right channels.",
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
      overview: "Electric vehicles offer lower fuel costs and maintenance requirements, along with tax benefits in many cases. Range, charging infrastructure, and vehicle availability are key considerations. The market is evolving rapidly.",
      howQ7Helps: "We help assess suitability for your operations, explain the options, and coordinate access through finance, lease, or purchase. We consider charging requirements alongside vehicle selection.",
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
      overview: "Delivery vehicles need to balance capacity, reliability, running costs, and access requirements. This includes vans, bikes, cargo vehicles, and specialist delivery solutions. The right choice depends on your routes, volumes, and operational model.",
      howQ7Helps: "We coordinate vehicles, finance, or rental options that suit delivery operations. We consider usage patterns and help you access suitable solutions.",
      whatHappensNext: "Start an enquiry and outline your delivery needs. We will discuss suitable vehicle options with you.",
    },
    "fleet-solutions": {
      slug: "fleet-solutions",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles and Mobility",
      name: "Fleet Solutions",
      heroImage: parentHeroImages["vehicles-mobility"],
      hero: {
        headline: "Comprehensive fleet solutions",
        intro: "Managing multiple vehicles requires coordinated solutions. We help businesses organise fleet operations efficiently.",
      },
      overview: "Fleet solutions can include vehicle acquisition, maintenance management, fuel cards, tracking, and driver management. A coordinated approach can reduce costs and administrative burden. Requirements vary by fleet size and usage.",
      howQ7Helps: "We help assess your fleet needs and coordinate comprehensive solutions. We work with providers who specialise in fleet management.",
      whatHappensNext: "Start an enquiry and tell us about your fleet. We will discuss how we can help coordinate solutions.",
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
      overview: "Micro mobility can reduce costs and carbon footprint for urban deliveries and staff transport. Options include electric bikes, cargo bikes, scooters, and small electric vehicles. Regulations and infrastructure vary by location.",
      howQ7Helps: "We help assess suitability for your operations and coordinate access to suitable providers. We consider usage requirements and local conditions.",
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
        intro: "Vehicle tracking helps monitor fleet location and usage. We help businesses access suitable tracking solutions.",
      },
      overview: "Vehicle tracking provides real-time location data, route history, and usage insights. Benefits include improved fleet efficiency, driver accountability, and theft recovery. Systems vary in features and costs.",
      howQ7Helps: "We assess your tracking requirements, explain available options, and coordinate with suitable providers. We help you choose systems that deliver practical value.",
      whatHappensNext: "Start an enquiry and tell us about your fleet. We will discuss suitable tracking options with you.",
    },
    "asset-tracking": {
      slug: "asset-tracking",
      parentSlug: "tracking-protection",
      parentName: "Tracking and Protection",
      name: "Asset Tracking",
      heroImage: parentHeroImages["tracking-protection"],
      hero: {
        headline: "Asset tracking for control and visibility",
        intro: "Asset tracking helps monitor valuable equipment. We help organise appropriate tracking solutions for your assets.",
      },
      overview: "Tracking can reduce loss and improve management of valuable equipment, tools, and containers. Systems range from simple location beacons to sophisticated monitoring with sensors. The right choice depends on asset value and usage.",
      howQ7Helps: "We assess your requirements and coordinate with providers who specialise in asset tracking. We help you choose practical solutions.",
      whatHappensNext: "Submit an enquiry with details of the assets you want to track. We will discuss suitable options with you.",
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
      overview: "Asset recovery services combine tracking technology with active recovery support. This is particularly relevant for high-value vehicles and equipment. Insurance requirements sometimes mandate specific recovery solutions.",
      howQ7Helps: "We help coordinate approved recovery solutions that meet your needs and any insurance requirements. We work with established recovery providers.",
      whatHappensNext: "Start an enquiry and explain your concerns. We will discuss suitable protection and recovery options with you.",
    },
    "cctv-webcams": {
      slug: "cctv-webcams",
      parentSlug: "tracking-protection",
      parentName: "Tracking and Protection",
      name: "CCTV and Webcams",
      heroImage: parentHeroImages["tracking-protection"],
      hero: {
        headline: "CCTV and visual monitoring solutions",
        intro: "Visual monitoring provides security and oversight for premises and vehicles. We help businesses access suitable CCTV and webcam solutions.",
      },
      overview: "CCTV systems can protect premises, monitor operations, and provide evidence in case of incidents. Vehicle cameras can protect against false claims and improve driver safety. Systems vary from basic recording to cloud-connected monitoring.",
      howQ7Helps: "We help assess your monitoring needs and coordinate with suitable providers. We focus on practical solutions that deliver value.",
      whatHappensNext: "Start an enquiry and tell us about your monitoring requirements. We will discuss suitable options.",
    },
    "thatcham-tracking": {
      slug: "thatcham-tracking",
      parentSlug: "tracking-protection",
      parentName: "Tracking and Protection",
      name: "Thatcham Tracking",
      heroImage: parentHeroImages["tracking-protection"],
      hero: {
        headline: "Thatcham approved tracking solutions",
        intro: "Thatcham approved trackers meet insurance industry standards. We help businesses access approved solutions for high-value vehicles.",
      },
      overview: "Thatcham Research sets security standards for the insurance industry. Their approved tracking systems are often required for high-value vehicles to maintain insurance cover. Categories range from S5 to S7 depending on vehicle value and risk.",
      howQ7Helps: "We help identify the right Thatcham category for your vehicle and coordinate installation with approved providers. We ensure solutions meet insurance requirements.",
      whatHappensNext: "Start an enquiry and tell us about your vehicle. We will advise on the appropriate Thatcham category and suitable providers.",
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
        headline: "Business bank accounts for proper financial foundations",
        intro: "A suitable business bank account provides the foundation for managing business finances. We help businesses access appropriate banking relationships.",
      },
      overview: "Business bank accounts vary in features, fees, and accessibility. Options include traditional high street banks, challenger banks, and specialist business accounts. The right choice depends on your transaction patterns, integration needs, and service requirements.",
      howQ7Helps: "We help you understand the options available and coordinate account setup. We work with various banking partners to find suitable solutions.",
      whatHappensNext: "Start an enquiry and tell us about your banking needs. We will discuss suitable account options with you.",
    },
    "business-credit-cards": {
      slug: "business-credit-cards",
      parentSlug: "banking-accounting",
      parentName: "Banking and Accounting Services",
      name: "Business Credit Cards",
      heroImage: parentHeroImages["banking-accounting"],
      hero: {
        headline: "Business credit cards for controlled spending",
        intro: "Business credit cards can help manage expenses and cash flow. We help businesses access suitable card options.",
      },
      overview: "Different cards offer different limits, benefits, and fee structures. Cards can help manage expenses, provide purchase protection, and smooth cash flow. Some offer rewards or cashback that may benefit your business.",
      howQ7Helps: "We help assess suitability and coordinate access to appropriate card products. We explain the options and help you choose appropriately.",
      whatHappensNext: "Submit an enquiry with details of your business. We will discuss suitable card options with you.",
    },
    "accounting-services": {
      slug: "accounting-services",
      parentSlug: "banking-accounting",
      parentName: "Banking and Accounting Services",
      name: "Accounting Services",
      heroImage: parentHeroImages["banking-accounting"],
      hero: {
        headline: "Accounting services for financial clarity",
        intro: "Professional accounting support helps maintain accurate records and financial control. We help businesses access suitable accounting services.",
      },
      overview: "Accounting services range from basic bookkeeping to comprehensive financial management. Good accounting provides visibility, supports decision making, and ensures compliance. Requirements vary by business size and complexity.",
      howQ7Helps: "We help identify your accounting needs and coordinate with trusted accounting partners. We focus on finding the right level of support for your business.",
      whatHappensNext: "Start an enquiry and tell us about your accounting requirements. We will connect you with suitable providers.",
    },
    "tax-compliance-support": {
      slug: "tax-compliance-support",
      parentSlug: "banking-accounting",
      parentName: "Banking and Accounting Services",
      name: "Tax and Compliance Support",
      heroImage: parentHeroImages["banking-accounting"],
      hero: {
        headline: "Tax and compliance support for peace of mind",
        intro: "Managing tax and compliance is essential for every business. We help organise appropriate support to keep you on track.",
      },
      overview: "Tax and compliance requirements can be complex and time-consuming. Support can include tax planning, returns preparation, VAT, payroll, and regulatory compliance. Getting this right protects your business and avoids penalties.",
      howQ7Helps: "We coordinate support through trusted partners who understand business tax and compliance. We help you access the right level of ongoing or ad hoc assistance.",
      whatHappensNext: "Start an enquiry and explain your requirements. We will connect you with suitable tax and compliance support.",
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
      overview: "Growing businesses often need additional capacity without permanent hires. Operational support can include process improvement, project support, or temporary resource. The right support depends on your specific challenges.",
      howQ7Helps: "We identify gaps in your operations and coordinate suitable support. We work with partners who understand business operations.",
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
      overview: "Back office functions include data entry, document management, customer service support, and administrative processing. Outsourcing these functions can free up time for core business activities.",
      howQ7Helps: "We help assess your back office needs and coordinate with suitable service providers. We focus on reliability and quality.",
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
      overview: "Administrative support can include diary management, correspondence, filing, and general business coordination. This suits businesses where the owner needs to focus on higher-value activities.",
      howQ7Helps: "We help identify your admin support needs and coordinate with suitable providers. We focus on practical, reliable solutions.",
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
      overview: "Businesses often need specialists they can trust but don't know where to start. Introductions are based on suitability and track record. This can cover legal, HR, marketing, IT, and other business services.",
      howQ7Helps: "We assess your requirements and make introductions to partners we trust. We facilitate the initial connection and remain available if needed.",
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
      overview: "Advisory support provides regular access to experienced guidance on business decisions, challenges, and opportunities. This can range from informal check-ins to structured advisory arrangements.",
      howQ7Helps: "We help identify what type of advisory support would benefit your business and coordinate suitable arrangements.",
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
