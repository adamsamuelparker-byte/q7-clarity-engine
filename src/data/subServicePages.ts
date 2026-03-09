// Sub-service page data for all sub-services under solution pages
// Hero images are inherited from parent solution pages for consistency

// Parent solution hero images map
const parentHeroImages: Record<string, string> = {
  "business-funding": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
  "payments-merchant": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
  "asset-finance": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80",
  "leasing-rental": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&q=80",
  "vehicles-mobility": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
  "tracking-protection": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&q=80",
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
        intro: "An unsecured business loan is funding based on business performance rather than assets. It can offer flexibility but often comes with shorter terms. Lenders typically assess turnover, trading history, and credit profile to determine eligibility and pricing.",
        details: "Unsecured loans can range from a few thousand pounds to several hundred thousand, depending on the provider and the strength of the business. Understanding suitability, total cost, and repayment structure before committing is key to making the right decision.",
      },
      howItCanBeUsed: {
        intro: "Unsecured loans are often used for:",
        items: [
          "Covering day to day working capital requirements",
          "Investing in equipment, technology, or staffing",
          "Managing short term funding gaps between income cycles",
          "Supporting business growth such as new contracts or expansion",
          "Funding marketing campaigns or product development",
          "Meeting unexpected costs without tying up existing assets",
        ],
        outro: "Terms and availability vary based on the business profile.",
      },
      howQ7Helps: {
        intro: "We help you navigate unsecured funding options clearly.",
        items: [
          "Reviewing your business position, trading history, and financial health",
          "Explaining available loan structures including term lengths and repayment profiles",
          "Matching you with appropriate providers from our panel of lenders",
          "Preparing and packaging your application to present the strongest case",
          "Managing the application process and handling lender queries on your behalf",
          "Supporting you through completion and beyond initial drawdown",
        ],
      },
      whoThisIsFor: {
        intro: "Unsecured business loans can suit:",
        items: [
          "Small and medium sized businesses with consistent trading history",
          "Service based companies without significant physical assets",
          "Businesses needing faster access to funding without lengthy property valuations",
          "Startups and early stage businesses with strong recent performance",
          "Professional firms such as consultancies, agencies, and technology companies",
        ],
        outro: "We help assess whether this option is appropriate for your circumstances. If unsecured lending isn't the right fit, we'll explain the alternatives clearly.",
      },
      whatHappensNext: "Start an enquiry and provide some basic business details. We'll review your information and one of the team will be in touch, usually within 24 hours, to discuss your options and answer any questions. There's no obligation at this stage.",
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
        intro: "A secured business loan is funding that is supported by security, such as property or business assets. This can sometimes allow access to higher amounts or longer terms. The security gives the lender additional confidence, which can result in more competitive pricing.",
        details: "Because security is involved, it's essential to understand the risks and structure before proceeding. We ensure you have a clear picture of what is being secured, how the loan is structured, and what happens in different scenarios.",
      },
      howItCanBeUsed: {
        intro: "Secured loans are commonly used for:",
        items: [
          "Business expansion including new premises or additional locations",
          "Property related investment such as commercial purchases or refurbishment",
          "Consolidating existing finance into a single, more manageable facility",
          "Larger funding requirements that may not be available on an unsecured basis",
          "Acquiring another business or buying out a partner",
          "Long term capital investment in infrastructure or major equipment",
        ],
        outro: "The suitability depends on your circumstances and objectives.",
      },
      howQ7Helps: {
        intro: "We take a careful, transparent approach to secured funding.",
        items: [
          "Understanding your funding goals and long term business plans",
          "Explaining security requirements clearly, including what assets may be involved",
          "Assessing affordability and structure to ensure the loan fits your cash flow",
          "Presenting options from across our lender panel with honest comparisons",
          "Coordinating valuations, legal requirements, and lender communication",
          "Supporting you throughout the process from initial enquiry to drawdown",
        ],
        outro: "We focus on clarity, not pressure.",
      },
      whoThisIsFor: {
        intro: "Secured business loans may be suitable for:",
        items: [
          "Established businesses with a track record of trading",
          "Companies with commercial property, land, or high value equipment",
          "Businesses seeking larger or longer term funding than unsecured options allow",
          "Owner managed businesses looking to invest in growth or acquisition",
          "Companies restructuring existing debt against existing assets",
        ],
        outro: "We'll help you assess whether this route makes sense for your situation. If secured lending isn't appropriate, we can explore alternative structures with you.",
      },
      whatHappensNext: "Start an enquiry and tell us about your business and what you're looking to achieve. We'll review your details and arrange a conversation to discuss how secured funding could work for you. Everything is handled at your pace with no pressure to proceed.",
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
        intro: "Working capital funding provides access to short term finance designed to support operational costs such as stock, wages, and overheads. It bridges the gap between money going out and money coming in, which is a reality for most trading businesses.",
        details: "There are several types of working capital solution, from revolving credit facilities to short term loans and overdraft alternatives. The right choice depends on your trading patterns, cash flow cycle, and how the funding will be used.",
      },
      howItCanBeUsed: {
        intro: "Working capital solutions are often used for:",
        items: [
          "Managing cash flow gaps between paying suppliers and receiving payment",
          "Covering operational expenses such as wages, rent, and utilities",
          "Supporting growth periods where costs increase before revenue catches up",
          "Dealing with seasonal demand where income fluctuates throughout the year",
          "Purchasing stock or materials ahead of a busy trading period",
          "Maintaining financial stability while waiting on delayed payments",
        ],
        outro: "The right structure depends on trading patterns.",
      },
      howQ7Helps: {
        intro: "We help you find working capital solutions that fit your business.",
        items: [
          "Reviewing your cash flow patterns and identifying where pressure points occur",
          "Explaining different funding structures and how each one works in practice",
          "Matching you with suitable options from our panel of working capital providers",
          "Preparing your application and presenting your business clearly to lenders",
          "Managing the process end to end so you can focus on running the business",
          "Providing ongoing support as your working capital needs evolve over time",
        ],
      },
      whoThisIsFor: {
        intro: "Working capital solutions can suit:",
        items: [
          "Growing businesses taking on larger contracts or new customers",
          "Seasonal businesses such as hospitality, retail, and events companies",
          "Companies managing fluctuating income from project based or cyclical work",
          "Manufacturers and wholesalers with stock purchasing commitments",
          "Service businesses with gaps between delivering work and receiving payment",
        ],
        outro: "We help assess suitability clearly and without jargon. If working capital funding isn't the right fit, we'll point you in the right direction.",
      },
      whatHappensNext: "Start an enquiry and tell us about your working capital needs. One of the team will review your situation and be in touch to discuss the most suitable options. There's no commitment at this stage and the conversation is entirely confidential.",
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
        intro: "Invoice finance allows you to access funds based on the value of your outstanding invoices, rather than waiting for customers to pay. Typically, a percentage of each invoice value is advanced shortly after it is raised, with the balance released once your customer settles.",
        details: "It can help improve cash flow, smooth trading cycles, and support growth without taking on traditional loans. There are different structures available, including factoring where the provider manages collections and invoice discounting where you retain control of your customer relationships.",
      },
      howItCanBeUsed: {
        intro: "Invoice finance is often used to:",
        items: [
          "Improve day to day cash flow by releasing funds tied up in unpaid invoices",
          "Manage long payment terms of 30, 60, or 90 days without cash flow strain",
          "Support growth without upfront borrowing or traditional loan commitments",
          "Reduce pressure caused by late paying customers or inconsistent payment cycles",
          "Fund new contracts or projects where upfront costs are required before payment",
          "Provide a scalable facility that grows alongside your turnover",
        ],
        outro: "The structure depends on how your business trades and invoices.",
      },
      howQ7Helps: {
        intro: "We help you understand invoice finance clearly and decide if it's right for your business.",
        items: [
          "Reviewing your trading model, invoicing patterns, and customer base",
          "Explaining the difference between factoring and invoice discounting",
          "Matching you with appropriate providers who understand your sector",
          "Comparing fee structures, advance rates, and contract terms across options",
          "Managing the setup process including onboarding and system integration",
          "Supporting you beyond initial approval as your facility evolves",
        ],
      },
      whoThisIsFor: {
        intro: "Invoice finance can be suitable for:",
        items: [
          "Businesses that invoice other businesses on credit terms",
          "Companies with long payment terms causing regular cash flow pressure",
          "Growing businesses needing better cash flow control as revenue increases",
          "Recruitment agencies, logistics firms, and trade suppliers with high invoice volumes",
          "Businesses looking for a funding facility that scales with turnover",
        ],
        outro: "If you're unsure whether it applies to your business, we can help assess this. Not every business suits invoice finance, and we'll be upfront about that.",
      },
      whatHappensNext: "Start an enquiry and tell us a little about your business and invoicing. One of the team will review your details and be in touch to discuss how invoice finance could work for you. We'll explain the options clearly and help you decide at your own pace.",
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
        intro: "A merchant cash advance is not a traditional loan. Repayments are typically linked to card turnover, meaning payments flex with trading levels. When sales are strong, you repay more; when sales dip, repayments reduce accordingly.",
        details: "Because the cost structure differs from standard lending, it's important to understand how a merchant cash advance works before proceeding. We explain the total cost of funding, how the repayment percentage is calculated, and what to expect over the term.",
      },
      howItCanBeUsed: {
        intro: "Merchant cash advances are often used for:",
        items: [
          "Short term funding needs where speed of access is important",
          "Businesses with strong and consistent card sales volumes",
          "Managing seasonal cash flow with repayments that adjust to trading levels",
          "Quick access to capital without requiring property or asset security",
          "Funding refurbishments, stock purchases, or marketing activity",
          "Bridging gaps where traditional lending may not be suitable or available",
        ],
        outro: "Suitability depends on how your business trades.",
      },
      howQ7Helps: {
        intro: "We help you assess merchant cash advance options responsibly.",
        items: [
          "Reviewing your card turnover and monthly trading volumes",
          "Explaining the total cost of funding and how the repayment percentage works",
          "Comparing suitable providers to find the most appropriate terms",
          "Assessing whether a merchant cash advance is genuinely the right option for your situation",
          "Coordinating the setup process including provider onboarding",
          "Supporting you after funding and reviewing the arrangement over time",
        ],
      },
      whoThisIsFor: {
        intro: "Merchant cash advances may suit:",
        items: [
          "Retail businesses such as shops, salons, and high street outlets",
          "Hospitality businesses including restaurants, pubs, and cafes",
          "Companies with regular card transactions forming a significant part of revenue",
          "Businesses seeking flexible repayments that move with trading performance",
          "Operators needing fast funding without a lengthy application process",
        ],
        outro: "We help determine if this option makes sense for you. A merchant cash advance is not suitable for every business, and we'll always be straightforward about whether it fits.",
      },
      whatHappensNext: "Start an enquiry and tell us about your trading and card sales. One of the team will review your details and be in touch to talk through how a merchant cash advance could work for your business. There's no obligation and we'll explain everything clearly before you make any decisions.",
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
        intro: "Short term or emergency funding is designed to provide temporary financial support during urgent situations. It is typically arranged faster than standard business finance and can take various forms depending on the amount needed and the circumstances involved.",
        details: "Understanding the terms, structure, and total cost is particularly important with short term funding. Because speed is often a factor, there can be a temptation to accept the first option available. We help you move quickly while still making an informed decision.",
      },
      howItCanBeUsed: {
        intro: "This type of funding is often used for:",
        items: [
          "Unexpected expenses such as equipment failure, repairs, or urgent supplier payments",
          "Short term cash flow gaps caused by delayed customer payments or unforeseen costs",
          "Time sensitive opportunities where acting quickly could benefit the business",
          "Bridging periods while waiting for longer term finance to complete",
          "Tax liabilities or regulatory costs that require immediate settlement",
          "Covering essential overheads during a temporary downturn in trading",
        ],
        outro: "Speed and clarity are key.",
      },
      howQ7Helps: {
        intro: "We help businesses navigate short term funding responsibly.",
        items: [
          "Understanding the urgency and context so we can prioritise appropriately",
          "Explaining suitable options clearly including costs, terms, and repayment expectations",
          "Coordinating fast moving solutions with providers who can deliver within tight timeframes",
          "Ensuring you understand what you are committing to before anything is signed",
          "Managing lender communication and paperwork to save you time",
          "Supporting you through the process and helping plan the exit from short term finance",
        ],
      },
      whoThisIsFor: {
        intro: "Short term funding may be suitable for:",
        items: [
          "Businesses facing urgent costs that cannot wait for standard lending timelines",
          "Companies needing temporary support to manage a specific financial event",
          "Businesses awaiting incoming funds such as contract payments or asset sales",
          "Seasonal operators experiencing a temporary gap between peak trading periods",
          "Businesses dealing with an unexpected disruption to normal cash flow",
        ],
        outro: "We help assess whether short term funding is the right approach. If a longer term solution would be more appropriate, we'll explain that clearly and help you explore alternatives.",
      },
      whatHappensNext: "Start an enquiry and explain the situation. One of the team will be in touch promptly, usually within a few hours. We understand that timing matters in these situations and will work with you to move as quickly as is sensible.",
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
        intro: "Refinancing involves replacing existing finance with a new structure. This can sometimes improve cash flow, reduce complexity, or provide access to better terms. It can apply to a single facility or multiple arrangements across different providers.",
        details: "It's important to review this carefully, as refinancing is not always the right move. Early repayment charges, arrangement fees, and the total cost of the new facility all need to be considered. We help you see the full picture before making a decision.",
      },
      howItCanBeUsed: {
        intro: "Refinancing is often considered to:",
        items: [
          "Consolidate multiple facilities into a single, more manageable arrangement",
          "Adjust repayment terms to better suit current cash flow and trading patterns",
          "Improve cash flow by extending loan terms or reducing monthly commitments",
          "Simplify funding arrangements that have become complex over time",
          "Take advantage of improved business performance to secure better rates",
          "Replace expensive or inflexible finance with more suitable alternatives",
        ],
        outro: "Each situation is different.",
      },
      howQ7Helps: {
        intro: "We help you review existing funding and explore alternatives.",
        items: [
          "Reviewing current finance arrangements including terms, costs, and exit penalties",
          "Identifying potential improvements and calculating whether refinancing saves money overall",
          "Sourcing and comparing suitable refinancing options from across our lender panel",
          "Presenting a clear side by side comparison of your current and proposed arrangements",
          "Managing the transition process including settlement of existing facilities",
          "Ensuring continuity so your business is not disrupted during the changeover",
        ],
      },
      whoThisIsFor: {
        intro: "Refinancing may be suitable for:",
        items: [
          "Businesses with multiple funding facilities across different lenders",
          "Companies seeking better structure as the business has evolved since the original funding",
          "Businesses reviewing existing commitments that no longer reflect their current situation",
          "Owner managed businesses looking to reduce monthly outgoings",
          "Companies approaching the end of an existing finance term and planning ahead",
        ],
        outro: "We help you understand whether refinancing is appropriate for your situation. If the numbers don't work in your favour, we'll tell you honestly and explain why.",
      },
      whatHappensNext: "Start an enquiry and tell us about your existing funding. We'll review your current arrangements and be in touch to discuss whether refinancing could improve your position. There's no obligation and we'll give you a straightforward assessment.",
    },
  },

  // PAYMENTS AND MERCHANT SOLUTIONS SUB-SERVICES
  "payments-merchant": {
    "card-machines": {
      slug: "card-machines",
      parentSlug: "payments-merchant",
      parentName: "Payments & Merchant Services",
      name: "Card Machines",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Card machines that suit how you take payments",
        intro: "Choosing the right card machine is about more than just accepting payments. We help businesses organise card machine solutions that fit how they trade, where they trade, and how often they take payments.",
      },
      whatItIs: {
        intro: "Card machines allow businesses to accept card payments in person, whether at a fixed counter, tableside, or out on the road. The right machine depends on factors like connectivity, portability, and how your team interacts with customers during the payment process.",
        details: "Options range from countertop terminals connected via broadband to portable Bluetooth devices and fully mobile units with built-in SIM cards. Understanding the differences helps avoid paying for features you do not need or missing ones that would make a real difference to your workflow.",
      },
      howItCanBeUsed: {
        intro: "Card machines are commonly used for:",
        items: [
          "Retail shops and hospitality venues taking payments at a fixed till point",
          "Restaurants and cafes processing tableside payments for a smoother customer experience",
          "Tradespeople and mobile service providers collecting payment on site",
          "Market stalls, pop-up shops, and event vendors trading in temporary locations",
          "Multi-site businesses needing consistent payment setups across several premises",
          "Delivery drivers and couriers taking payment at the point of handover",
        ],
        outro: "The right setup depends on how and where payments are taken.",
      },
      howQ7Helps: {
        intro: "We help you choose card machine solutions that work in practice, not just on paper.",
        items: [
          "Assessing your trading environment, transaction volumes, and connectivity requirements",
          "Explaining the practical differences between countertop, portable, and mobile terminals",
          "Comparing providers on cost, contract terms, and settlement timescales",
          "Matching you with a provider whose pricing structure suits your transaction patterns",
          "Coordinating delivery, setup, and staff onboarding so you can start taking payments quickly",
          "Reviewing your setup as your business grows or your trading patterns change",
        ],
      },
      whoThisIsFor: {
        intro: "Card machines can suit:",
        items: [
          "Independent retailers and high street shops moving away from cash-only trading",
          "Restaurants, pubs, and cafes wanting faster tableside or counter payments",
          "Tradespeople, mobile hairdressers, and other service providers who visit customers on site",
          "New businesses setting up their first card payment facility",
          "Established businesses reviewing outdated terminals or expensive existing contracts",
        ],
        outro: "We help you assess what makes sense for your operation. There is no obligation to proceed, and we are happy to talk through the options before you make a decision.",
      },
      whatHappensNext: "Start an enquiry and tell us how you currently take payments and where your transactions typically happen. One of the team will review your details and be in touch to discuss which card machine options are most suitable for how you trade.",
    },
    "epos-systems": {
      slug: "epos-systems",
      parentSlug: "payments-merchant",
      parentName: "Payments & Merchant Services",
      name: "EPOS Systems",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "EPOS systems built around your operation",
        intro: "An EPOS system can help manage payments, stock, and reporting in one place. We help businesses organise EPOS solutions that support day to day operations.",
      },
      whatItIs: {
        intro: "An EPOS system combines payment processing with tools for managing sales, stock, and reporting from a single interface. It replaces a traditional till with a connected system that gives you a clearer picture of how your business is performing day to day.",
        details: "Modern EPOS systems can integrate with card machines, accounting software, and online ordering platforms. Features vary significantly between providers, so choosing the right system means understanding which capabilities matter for your particular operation and which ones you can do without.",
      },
      howItCanBeUsed: {
        intro: "EPOS systems are often used to:",
        items: [
          "Process in-store card and contactless payments with itemised receipts",
          "Track stock levels automatically and flag when items need reordering",
          "Generate daily, weekly, or monthly sales reports broken down by product or category",
          "Manage staff access, shifts, and individual performance across till points",
          "Support multi-location businesses with centralised reporting and stock visibility",
          "Integrate with online ordering platforms for hospitality and takeaway operations",
        ],
        outro: "Suitability depends on the complexity of your operation.",
      },
      howQ7Helps: {
        intro: "We help businesses navigate EPOS options without unnecessary complexity.",
        items: [
          "Understanding how your business operates, including peak times, product range, and staffing",
          "Explaining the practical differences between cloud-based, hybrid, and traditional EPOS setups",
          "Identifying which features will genuinely improve your workflow rather than adding cost",
          "Matching you with providers whose systems are well suited to your sector",
          "Supporting setup, data migration, and staff training during the transition",
          "Remaining available to help if your requirements change as the business develops",
        ],
      },
      whoThisIsFor: {
        intro: "EPOS systems can suit:",
        items: [
          "Retail shops and convenience stores looking for better stock and sales visibility",
          "Restaurants, pubs, and cafes needing integrated ordering and payment systems",
          "Salons, gyms, and service businesses that want to manage bookings alongside payments",
          "Multi-site operators wanting centralised reporting across all locations",
          "Businesses replacing outdated tills or standalone card terminals with a connected system",
        ],
        outro: "We help determine whether EPOS is right for you based on how you currently operate. If a simpler card machine setup would serve you better, we will tell you that instead.",
      },
      whatHappensNext: "Start an enquiry and tell us about your business setup, including how many locations you operate and what you currently use for payments and stock management. We will review your details and guide you through the available options.",
    },
    "ecommerce-payments": {
      slug: "ecommerce-payments",
      parentSlug: "payments-merchant",
      parentName: "Payments & Merchant Services",
      name: "Ecommerce Payments",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Ecommerce payment solutions that support online trading",
        intro: "Online payments need to be reliable, secure, and easy for customers. We help businesses organise ecommerce payment solutions that support online sales.",
      },
      whatItIs: {
        intro: "Ecommerce payment solutions enable businesses to accept payments through websites, online platforms, or mobile apps. They handle the secure transfer of funds from a customer's card or digital wallet to your business account as part of the online checkout process.",
        details: "A typical ecommerce payment setup involves a payment gateway that connects your website to a payment processor and acquiring bank. Depending on your platform, this might be a hosted checkout page, an embedded payment form, or an API-based integration. The right approach depends on your website platform, transaction volumes, and the types of payments you need to accept.",
      },
      howItCanBeUsed: {
        intro: "Ecommerce payments are commonly used for:",
        items: [
          "Online retail stores selling physical products with delivery or collection options",
          "Service-based businesses taking bookings and deposits through their website",
          "Subscription and membership businesses collecting recurring monthly or annual payments",
          "Digital product sellers providing instant access after purchase",
          "Charities and organisations accepting online donations securely",
          "Businesses offering invoice payment links so customers can settle balances online",
        ],
        outro: "The right setup depends on your sales model.",
      },
      howQ7Helps: {
        intro: "We help businesses put ecommerce payment solutions in place smoothly.",
        items: [
          "Understanding your online sales model, including average order values and payment types needed",
          "Explaining the differences between hosted, embedded, and API-based payment integrations",
          "Recommending gateways and processors that work well with your website platform",
          "Coordinating setup and integration with your chosen provider and web developer",
          "Supporting testing to confirm payments, refunds, and notifications work correctly before launch",
          "Advising on PCI compliance requirements and how to keep customer payment data secure",
        ],
      },
      whoThisIsFor: {
        intro: "Ecommerce payments suit:",
        items: [
          "Online retailers selling through platforms like Shopify, WooCommerce, or Magento",
          "Service businesses such as consultancies, agencies, or training providers taking payments online",
          "Brick-and-mortar shops adding an online sales channel alongside their physical store",
          "Subscription or membership businesses needing automated recurring billing",
          "Businesses currently using manual bank transfers or invoicing who want to offer card payments online",
        ],
        outro: "We help ensure the setup works properly from the start. If you are unsure which integration approach suits your website, we can talk through the options clearly.",
      },
      whatHappensNext: "Start an enquiry and tell us about your online sales, including what platform your website runs on and what payment methods you would like to offer. We will review your setup and recommend a solution that fits your requirements.",
    },
    "merchant-accounts": {
      slug: "merchant-accounts",
      parentSlug: "payments-merchant",
      parentName: "Payments & Merchant Services",
      name: "Merchant Accounts",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Merchant accounts organised for your business",
        intro: "A merchant account allows businesses to accept card payments securely. We help you organise merchant accounts that align with how your business trades.",
      },
      whatItIs: {
        intro: "A merchant account is an agreement between your business and an acquiring bank that enables you to accept and process card payments. It acts as a holding account where funds from card transactions are settled before being transferred to your business bank account.",
        details: "Merchant account terms cover transaction fees, settlement periods, chargeback handling, and any monthly or annual charges. These terms vary depending on your industry, average transaction value, and monthly card turnover, so comparing providers properly requires an understanding of how your business trades.",
      },
      howItCanBeUsed: {
        intro: "Merchant accounts are required for:",
        items: [
          "Accepting in-person card payments through countertop or portable terminals",
          "Processing online transactions through a website or ecommerce platform",
          "Collecting recurring subscription or membership payments automatically",
          "Handling telephone or mail order payments where the card is not physically present",
          "Processing payments across multiple sales channels from a single merchant account",
          "Accepting international card payments from overseas customers",
        ],
        outro: "Choosing the right account helps ensure smooth payment processing.",
      },
      howQ7Helps: {
        intro: "We help businesses organise merchant accounts clearly and efficiently.",
        items: [
          "Reviewing your trading model, including transaction volumes, average values, and payment channels",
          "Explaining the difference between flat-rate, interchange-plus, and blended pricing structures",
          "Comparing providers on settlement speed, contract length, and fee transparency",
          "Coordinating the application and underwriting process with your chosen provider",
          "Supporting onboarding, terminal activation, and gateway configuration",
          "Helping you review your merchant account periodically to ensure terms remain competitive",
        ],
      },
      whoThisIsFor: {
        intro: "Merchant accounts are suitable for:",
        items: [
          "Retailers, restaurants, and hospitality businesses taking regular card payments",
          "Online sellers and ecommerce businesses needing a dedicated acquiring relationship",
          "Professional services firms such as accountants, solicitors, or consultancies accepting card payments",
          "Tradespeople and contractors who want to offer card payment as an option on site",
          "Businesses currently using aggregator services like PayPal or Stripe who want dedicated merchant terms",
        ],
        outro: "We help assess suitability and requirements based on how your business currently operates. If an aggregator service would actually suit you better, we will let you know.",
      },
      whatHappensNext: "Start an enquiry and tell us how your business takes payments, including your approximate monthly card turnover and average transaction value. One of the team will review your details and be in touch to discuss the most suitable merchant account options.",
    },
    "payment-processing": {
      slug: "payment-processing",
      parentSlug: "payments-merchant",
      parentName: "Payments & Merchant Services",
      name: "Payment Processing",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Payment processing setup for your business",
        intro: "Efficient payment processing is essential for smooth trading. We help businesses set up reliable processing that suits their needs.",
      },
      whatItIs: {
        intro: "Payment processing covers the systems, relationships, and infrastructure that allow card payments to move securely from a customer's account to your business bank account. It involves multiple parties working together, including the card network, the acquiring bank, the payment gateway, and your merchant account.",
        details: "Processing speeds, costs, and reliability vary between providers and configurations. Factors like interchange fees, gateway charges, and settlement timescales all affect how much you pay and how quickly you receive funds. Understanding how these elements fit together helps you make informed decisions about your payment setup.",
      },
      howItCanBeUsed: {
        intro: "Payment processing is used for:",
        items: [
          "All card and contactless transactions taken in person at a terminal or till",
          "Online payments processed through a website checkout or payment link",
          "Recurring billing for subscriptions, memberships, or instalment plans",
          "Telephone and mail order payments where card details are provided remotely",
          "Multi-channel trading where payments are taken across several platforms or locations",
          "Refund and chargeback handling as part of ongoing transaction management",
        ],
      },
      howQ7Helps: {
        intro: "We help you understand the payment processing landscape.",
        items: [
          "Mapping out how your current payment flow works and where costs are incurred",
          "Comparing acquirers, gateways, and processors on pricing, speed, and reliability",
          "Explaining the difference between interchange-plus, blended, and flat-rate fee models",
          "Coordinating setup, integration, and testing with your chosen processing provider",
          "Advising on PCI compliance and data security requirements relevant to your setup",
          "Supporting ongoing reviews to ensure your processing terms remain fair as volumes change",
        ],
      },
      whoThisIsFor: {
        intro: "Payment processing support suits:",
        items: [
          "New businesses setting up card payment acceptance for the first time",
          "Established retailers or hospitality businesses reviewing processing costs and settlement speed",
          "Ecommerce businesses needing reliable online transaction processing at scale",
          "Multi-location or franchise operations wanting consistent processing across all sites",
          "Businesses adding new payment channels such as online, mobile, or in-app payments",
        ],
        outro: "Whether you are starting from scratch or reviewing an existing arrangement, we help you understand your options clearly. There is no pressure to change provider if your current setup already works well.",
      },
      whatHappensNext: "Start an enquiry and tell us about your current payment setup, including where and how you take payments and any concerns about costs or reliability. We will review your situation and discuss suitable processing arrangements.",
    },
    "switching-providers": {
      slug: "switching-providers",
      parentSlug: "payments-merchant",
      parentName: "Payments & Merchant Services",
      name: "Switching Providers",
      heroImage: parentHeroImages["payments-merchant"],
      hero: {
        headline: "Review and switch payment providers",
        intro: "If your current payment setup isn't working well, switching providers may help. We help businesses review existing arrangements and transition smoothly.",
      },
      whatItIs: {
        intro: "Switching payment providers involves moving from your current merchant account, payment gateway, or terminal provider to a new one that better suits your business. It can cover one element of your payment setup or a complete change across terminals, processing, and gateway services.",
        details: "Common reasons for switching include high transaction fees, slow settlement times, poor customer support, outdated terminal hardware, or contract terms that no longer reflect how the business trades. A well-managed switch should result in no disruption to your ability to take payments.",
      },
      howItCanBeUsed: {
        intro: "Businesses consider switching to:",
        items: [
          "Reduce transaction fees and monthly charges that have crept up over time",
          "Improve settlement speed so funds reach your bank account sooner",
          "Replace outdated or unreliable terminal hardware with modern equipment",
          "Move to a provider with better customer support and issue resolution",
          "Consolidate multiple payment relationships into a single, simpler arrangement",
          "Align payment infrastructure with changes in how or where the business trades",
        ],
      },
      howQ7Helps: {
        intro: "We help manage the switching process carefully.",
        items: [
          "Reviewing your current provider contracts, fees, and settlement terms in detail",
          "Benchmarking your existing costs against what is available in the current market",
          "Identifying alternative providers that suit your sector, volumes, and payment channels",
          "Managing the timeline so the new provider is live before the old one is deactivated",
          "Coordinating terminal delivery, gateway migration, and integration testing",
          "Minimising disruption to trading so there is no gap in your ability to take payments",
        ],
      },
      whoThisIsFor: {
        intro: "Switching support suits:",
        items: [
          "Retailers and hospitality businesses paying more in fees than they should be",
          "Businesses locked into legacy contracts with providers who no longer offer competitive terms",
          "Companies using outdated terminals that are slow, unreliable, or no longer supported",
          "Growing businesses whose transaction volumes have increased but whose rates have not been reviewed",
          "Any business that has experienced poor service, slow support, or unresolved issues with their current provider",
        ],
        outro: "We review your current arrangement honestly and only recommend switching if the numbers and service levels genuinely justify it. If staying with your current provider makes more sense, we will tell you.",
      },
      whatHappensNext: "Start an enquiry and tell us about your current provider, including any issues you have experienced and what you are hoping to improve. We will review your existing terms, compare them against current market options, and discuss whether switching makes sense for your business.",
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
      parentName: "Leasing & Rental",
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
      parentName: "Leasing & Rental",
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
      parentName: "Leasing & Rental",
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
      parentName: "Leasing & Rental",
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
      parentName: "Vehicles & Fleet Solutions",
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
      parentName: "Vehicles & Fleet Solutions",
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
      parentName: "Vehicles & Fleet Solutions",
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
      parentName: "Vehicles & Fleet Solutions",
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
      parentName: "Vehicles & Fleet Solutions",
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
      parentName: "Vehicles & Fleet Solutions",
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
      parentName: "Vehicles & Fleet Solutions",
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
      parentName: "Vehicles & Fleet Solutions",
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
      parentName: "Tracking & Protection",
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
      parentName: "Tracking & Protection",
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
      parentName: "Tracking & Protection",
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
      parentName: "Tracking & Protection",
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
      parentName: "Tracking & Protection",
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
      parentName: "Banking & Accounting Services",
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
      parentName: "Banking & Accounting Services",
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
      parentName: "Banking & Accounting Services",
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
      parentName: "Banking & Accounting Services",
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
