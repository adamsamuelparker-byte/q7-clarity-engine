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
        intro: "Equipment finance allows businesses to spread the cost of equipment over an agreed period, rather than paying in full at the outset. This means you can access the tools your business needs today while managing budgets over a timeline that suits your operations.",
        details: "It can support growth while preserving working capital. By financing rather than purchasing outright, businesses maintain liquidity for day-to-day expenses and can respond to opportunities without depleting cash reserves.",
      },
      howItCanBeUsed: {
        intro: "Equipment finance is commonly used for:",
        items: [
          "Office furniture, computers, printers, and workplace infrastructure",
          "Specialist tools and diagnostic instruments used in trade or professional services",
          "Warehouse racking, handling equipment, and storage systems",
          "Catering and hospitality equipment such as ovens, fridges, and point-of-sale systems",
          "Workshop machinery including lathes, drills, and cutting tools",
          "Medical and dental practice equipment including chairs, imaging devices, and sterilisation units",
        ],
        outro: "The structure depends on the type of equipment and how it is used.",
      },
      howQ7Helps: {
        intro: "We help you explore equipment finance options clearly and practically.",
        items: [
          "Understanding what equipment you need and how it fits your business plan",
          "Explaining finance structures such as hire purchase, lease, and loan options in plain terms",
          "Comparing offers from multiple providers to find the most suitable arrangement",
          "Managing the application and approval process on your behalf",
          "Coordinating delivery timelines with suppliers and funders",
          "Supporting you through completion and any post-agreement queries",
        ],
      },
      whoThisIsFor: {
        intro: "Equipment finance can suit:",
        items: [
          "Growing SMEs investing in their first major equipment",
          "Dental and veterinary practices upgrading clinical equipment",
          "Restaurants and hospitality businesses fitting out new premises",
          "Trade and construction firms replacing or expanding their tool inventory",
          "Professional service firms modernising office infrastructure",
        ],
        outro: "We help assess whether this option is right for you. If equipment finance is not the best fit, we can suggest alternative approaches tailored to your situation.",
      },
      whatHappensNext: "Start an enquiry and tell us what equipment you're looking to finance. One of the team will be in touch to discuss your requirements, explain the options available, and guide you through each step at a pace that works for you.",
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
        intro: "Machinery finance allows businesses to fund the purchase of machinery over time, rather than paying upfront. For many businesses, machinery represents a significant capital investment, and financing provides a practical way to acquire what is needed without placing undue strain on cash reserves.",
        details: "This can support productivity and expansion. Whether you are replacing aging machinery or adding new capacity, financing spreads the cost across a manageable term and helps align repayments with the revenue the machinery generates.",
      },
      howItCanBeUsed: {
        intro: "Machinery finance is often used for:",
        items: [
          "CNC machines, lathes, and precision manufacturing equipment",
          "Excavators, loaders, cranes, and other construction plant",
          "Agricultural machinery such as tractors, combine harvesters, and irrigation systems",
          "Printing presses, packaging lines, and production line upgrades",
          "Woodworking and metalworking machinery for fabrication workshops",
          "Industrial ovens, compressors, and heavy-duty processing equipment",
        ],
        outro: "Suitability depends on the machinery and business profile.",
      },
      howQ7Helps: {
        intro: "We help you navigate machinery finance carefully.",
        items: [
          "Reviewing your machinery requirements and understanding the operational context",
          "Explaining available finance options including hire purchase, refinance, and leasing structures",
          "Sourcing and comparing terms from providers experienced in your sector",
          "Coordinating valuations or inspections where required by lenders",
          "Supporting the approval process with clear documentation and communication",
          "Managing completion and ensuring funds are released in line with delivery schedules",
        ],
      },
      whoThisIsFor: {
        intro: "Machinery finance can suit:",
        items: [
          "Manufacturing and engineering firms expanding production capacity",
          "Construction companies investing in plant and heavy equipment",
          "Agricultural businesses upgrading or replacing farm machinery",
          "Print and packaging businesses modernising production lines",
          "Waste management and recycling operations requiring specialist plant",
        ],
        outro: "We help determine if this route makes sense. Every business has different priorities, and we take the time to understand yours before recommending a direction.",
      },
      whatHappensNext: "Start an enquiry and share details of the machinery you're considering. We will review your requirements, explain what is available, and support you through each stage of the process without pressure or jargon.",
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
        intro: "Technology finance allows businesses to fund technology purchases over time, including hardware, software, and supporting systems. In a landscape where technology evolves quickly, financing helps businesses stay current without absorbing the full cost in a single period.",
        details: "This can help manage cash flow while staying competitive. Technology finance is particularly relevant for businesses that need to refresh equipment regularly or invest in systems that improve efficiency, security, or customer experience.",
      },
      howItCanBeUsed: {
        intro: "Technology finance is commonly used for:",
        items: [
          "Servers, workstations, laptops, and IT hardware for teams of any size",
          "Enterprise software platforms, ERP systems, and CRM implementations",
          "Networking equipment including switches, routers, firewalls, and cabling infrastructure",
          "Cybersecurity hardware and monitoring systems",
          "Audio-visual and presentation technology for offices, boardrooms, or retail environments",
          "Cloud migration projects and associated hardware upgrades",
        ],
        outro: "The right structure depends on the technology and business setup.",
      },
      howQ7Helps: {
        intro: "We help businesses explore technology finance options clearly.",
        items: [
          "Understanding your technology requirements and how they align with business objectives",
          "Explaining finance structures including leasing, hire purchase, and subscription-based models",
          "Comparing providers to find terms that reflect the lifespan and value of the technology",
          "Coordinating with your IT team or supplier to ensure timelines are aligned",
          "Managing the application process and keeping things moving efficiently",
          "Supporting you after completion, including upgrades or refinancing at end of term",
        ],
      },
      whoThisIsFor: {
        intro: "Technology finance can suit:",
        items: [
          "Professional service firms investing in secure, modern IT infrastructure",
          "Retailers and hospitality businesses upgrading point-of-sale and customer-facing systems",
          "Healthcare practices implementing digital records or diagnostic technology",
          "Growing businesses scaling their teams and needing additional hardware quickly",
          "Education providers and training organisations equipping classrooms or remote learning platforms",
        ],
        outro: "We help assess whether this option fits your needs. If technology finance is not the right route, we can explore alternatives that may suit your situation better.",
      },
      whatHappensNext: "Start an enquiry and tell us about the technology you're looking to finance. One of the team will be in touch to talk through what you need, outline suitable options, and help you move forward with confidence.",
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
        intro: "Some industries require unique equipment that standard finance providers may not understand. Specialist asset finance bridges this gap by connecting businesses with lenders who have sector-specific knowledge and a track record of funding similar assets.",
        details: "This can include medical equipment, agricultural machinery, marine vessels, or industry-specific tools. Because these assets often have non-standard depreciation profiles or niche resale markets, working with experienced providers is essential to securing appropriate terms.",
      },
      howItCanBeUsed: {
        intro: "Specialist asset finance is used for:",
        items: [
          "Medical imaging equipment, surgical instruments, and clinical devices for healthcare settings",
          "Agricultural machinery including GPS-guided equipment, milking systems, and grain dryers",
          "Marine assets such as fishing vessels, workboats, and harbour equipment",
          "Broadcast, film, and media production equipment",
          "Laboratory instruments, scientific testing equipment, and clean-room systems",
          "Renewable energy installations including solar panels, battery storage, and wind turbines",
        ],
      },
      howQ7Helps: {
        intro: "We help identify providers who understand your industry.",
        items: [
          "Assessing your specialist requirements and the operational context behind them",
          "Finding providers with genuine sector expertise and a history of funding similar assets",
          "Coordinating appropriate finance structures that reflect the asset's useful life and value",
          "Preparing documentation that presents your case clearly to specialist lenders",
          "Supporting the application and approval process from start to finish",
          "Advising on end-of-term options including refinancing, upgrade, or purchase",
        ],
      },
      whoThisIsFor: {
        intro: "Specialist asset finance suits:",
        items: [
          "Private healthcare clinics and dental practices investing in clinical equipment",
          "Farming and agricultural businesses upgrading or expanding operations",
          "Marine and fishing operators acquiring or refitting vessels",
          "Renewable energy companies funding installations and infrastructure",
          "Laboratories, research facilities, and specialist manufacturers with niche equipment needs",
        ],
        outro: "If your industry is not listed, that does not mean we cannot help. We work across a wide range of sectors and are always happy to discuss your requirements.",
      },
      whatHappensNext: "Start an enquiry and tell us about your specialist equipment needs. We will take the time to understand your industry, identify suitable finance providers, and guide you through the process with clarity and care.",
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
        intro: "Vehicle leasing provides access to cars or vans for an agreed period in return for regular payments. At the end of the term, vehicles are typically returned rather than owned. This approach allows businesses to drive newer, well-maintained vehicles without tying up capital in depreciating assets.",
        details: "This can offer flexibility and predictable costs. Leasing often includes options for maintenance packages, mileage adjustments, and end-of-term choices, making it easier to plan and budget over the life of the agreement.",
      },
      howItCanBeUsed: {
        intro: "Vehicle leasing is commonly used for:",
        items: [
          "Company cars for directors, managers, and employees including salary sacrifice schemes",
          "Commercial vans and panel vans for delivery, trade, and service operations",
          "Electric and hybrid vehicles as part of a transition to lower-emission fleets",
          "Pool vehicles shared across teams for site visits, client meetings, and travel",
          "Specialist vehicles such as refrigerated vans, tippers, or accessible transport",
          "Short to medium term vehicle access while longer-term plans are finalised",
        ],
        outro: "The right lease structure depends on mileage, usage, and contract length.",
      },
      howQ7Helps: {
        intro: "We help businesses navigate vehicle leasing without unnecessary complexity.",
        items: [
          "Understanding how vehicles are used in your business and what types suit each role",
          "Explaining leasing options clearly, including contract hire, finance lease, and salary sacrifice",
          "Comparing offers from multiple providers to secure competitive terms",
          "Coordinating contracts, delivery schedules, and vehicle specifications",
          "Advising on maintenance packages, insurance, and mileage arrangements",
          "Supporting changes during the lease term such as early termination, extensions, or vehicle swaps",
        ],
      },
      whoThisIsFor: {
        intro: "Vehicle leasing can suit:",
        items: [
          "SMEs providing company cars or vans for the first time",
          "Sales and consultancy firms equipping mobile teams with reliable vehicles",
          "Trade and construction businesses needing commercial vehicles for daily operations",
          "Businesses transitioning to electric or hybrid vehicles under government incentive schemes",
          "Care providers, charities, and community organisations requiring accessible or specialist transport",
        ],
        outro: "We help assess whether leasing is right for you. Every business uses vehicles differently, and we take the time to understand your needs before suggesting a direction.",
      },
      whatHappensNext: "Start an enquiry and tell us about the vehicles you're looking to lease. We will discuss your requirements, explain the options available, and support you through the process so you can make a well-informed decision.",
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
        intro: "Equipment leasing provides access to equipment for an agreed period, with payments spread over time. Rather than purchasing outright, your business can use the equipment it needs while preserving capital for other priorities.",
        details: "This can reduce upfront costs and improve cash flow management. Leasing also offers the advantage of simpler upgrades at the end of a term, which is particularly valuable when equipment has a limited useful life or when technology moves quickly.",
      },
      howItCanBeUsed: {
        intro: "Equipment leasing is often used for:",
        items: [
          "Office furniture, desks, and fit-out equipment for new or expanding premises",
          "Photocopiers, printers, scanners, and managed print systems",
          "Catering and kitchen equipment for restaurants, cafes, and hospitality venues",
          "Gym and fitness equipment for leisure centres, hotels, and wellness businesses",
          "Salon and spa equipment including chairs, treatment beds, and styling stations",
          "Audio-visual, signage, and display equipment for retail and events",
        ],
        outro: "Leasing structures vary depending on usage and duration.",
      },
      howQ7Helps: {
        intro: "We help you choose equipment leasing options that fit your business.",
        items: [
          "Understanding your equipment requirements and how they support your operations",
          "Explaining leasing structures including operating leases and finance leases in practical terms",
          "Comparing providers to find competitive rates and flexible terms",
          "Managing agreements, paperwork, and setup so you can focus on your business",
          "Advising on end-of-lease options such as renewal, upgrade, or return",
          "Supporting you if circumstances change during the lease period",
        ],
      },
      whoThisIsFor: {
        intro: "Equipment leasing can suit:",
        items: [
          "Startups and new businesses that need to equip premises without heavy upfront investment",
          "Hospitality and leisure operators furnishing or upgrading venues",
          "Professional service firms managing regular equipment refresh cycles",
          "Retail businesses fitting out new locations or refurbishing existing stores",
          "Healthcare and beauty businesses investing in treatment or clinical equipment",
        ],
        outro: "We help determine if leasing is appropriate. If another approach would work better for your situation, we will let you know.",
      },
      whatHappensNext: "Start an enquiry and tell us what equipment you're looking to lease. One of the team will be in touch to understand your needs, explain the options, and help you move forward without unnecessary complexity.",
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
        intro: "Fleet leasing allows businesses to access multiple vehicles under coordinated agreements. Rather than purchasing vehicles individually, fleet leasing brings structure and consistency to how your business acquires, manages, and replaces its vehicles over time.",
        details: "Managing a fleet through leasing can simplify budgeting, maintenance, and vehicle replacement cycles. With predictable monthly costs and the ability to scale up or down, fleet leasing gives operational managers greater control and fewer surprises.",
      },
      howItCanBeUsed: {
        intro: "Fleet leasing is commonly used for:",
        items: [
          "Delivery and courier fleets including vans, trucks, and last-mile vehicles",
          "Mobile service teams such as engineers, technicians, and maintenance crews",
          "Sales teams requiring company cars across multiple regions",
          "Construction and trades businesses operating mixed fleets of vans and pickups",
          "Care and community organisations providing transport for staff and service users",
          "Businesses transitioning entire fleets to electric or low-emission vehicles",
        ],
      },
      howQ7Helps: {
        intro: "We help structure fleet arrangements that match your operational needs.",
        items: [
          "Understanding your current fleet size, usage patterns, and growth plans",
          "Explaining fleet lease structures including contract hire, salary sacrifice, and grey fleet alternatives",
          "Sourcing competitive terms from providers experienced in fleet management",
          "Coordinating vehicle specifications, livery, and delivery schedules across the fleet",
          "Advising on maintenance packages, fuel cards, and telematics integration",
          "Managing the relationship over time, including replacements, additions, and contract renewals",
        ],
      },
      whoThisIsFor: {
        intro: "Fleet leasing suits:",
        items: [
          "Logistics and distribution companies managing large or growing vehicle fleets",
          "Field service businesses with engineers or technicians on the road daily",
          "Sales organisations equipping regional teams with reliable, well-presented vehicles",
          "Care providers and charities operating transport for vulnerable individuals",
          "Construction and facilities management firms with diverse vehicle requirements",
        ],
        outro: "Whether you operate five vehicles or fifty, we can help you find a fleet leasing arrangement that fits. There is no minimum fleet size to get started.",
      },
      whatHappensNext: "Submit an enquiry with details of your fleet. We will review your requirements, discuss suitable leasing arrangements, and support you through the setup process so your team can stay on the road.",
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
        intro: "Short term rental provides access to assets for a limited period, typically days, weeks, or months. It is designed for situations where a long-term commitment is unnecessary or where speed of access is a priority.",
        details: "This can be useful when flexibility or speed is required. Short term rental avoids the obligations of a full lease, making it well suited to project-based work, seasonal fluctuations, or bridging gaps while longer-term arrangements are put in place.",
      },
      howItCanBeUsed: {
        intro: "Short term rental is commonly used for:",
        items: [
          "Temporary construction projects requiring plant, vehicles, or site equipment",
          "Seasonal peaks in demand such as harvest periods, holiday trading, or event seasons",
          "Covering vehicle breakdowns, delays in delivery, or planned maintenance downtime",
          "Trialling vehicles or equipment before committing to a longer lease or purchase",
          "Supporting new contracts or tenders where additional capacity is needed at short notice",
          "Staff relocation or temporary office setups requiring short-lived transport or equipment access",
        ],
      },
      howQ7Helps: {
        intro: "We help businesses arrange short term rental solutions efficiently.",
        items: [
          "Understanding the urgency and specific requirements of your situation",
          "Identifying suitable rental providers with relevant stock and availability",
          "Coordinating delivery, collection, and any on-site logistics",
          "Negotiating competitive rates, especially for longer rental windows",
          "Supporting extensions, swaps, or early returns as your needs change",
          "Advising on whether rental, lease, or purchase offers the best value for your timeline",
        ],
      },
      whoThisIsFor: {
        intro: "Short term rental can suit:",
        items: [
          "Construction and civil engineering firms managing project-based vehicle and plant needs",
          "Event management companies requiring temporary transport, power, or logistics equipment",
          "Agricultural businesses needing additional machinery during planting or harvest seasons",
          "Retailers and e-commerce businesses scaling delivery capacity for peak trading periods",
          "Any business facing an unexpected equipment failure or delay that needs a rapid solution",
        ],
        outro: "We help assess whether rental is the best approach. If a longer-term arrangement would save you money or reduce hassle, we will tell you that too.",
      },
      whatHappensNext: "Start an enquiry and tell us what you need to rent and for how long. We will respond promptly, source suitable options, and work to get you up and running as quickly as possible.",
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
        intro: "Electric bikes provide pedal-assisted cycling powered by a rechargeable battery, making them suitable for longer distances and more frequent use than traditional bicycles. They keep running costs low while allowing riders to cover ground quickly, even in congested urban areas. For businesses, they offer a practical way to move people and lightweight goods without the overhead of motor vehicles.",
        details: "Electric bikes are increasingly used as a practical alternative to traditional vehicles in cities, particularly where parking, emissions restrictions, or access limitations apply. Many models now offer cargo-carrying capability, and battery technology continues to improve range and reliability.",
      },
      howItCanBeUsed: {
        intro: "Electric bikes are commonly used for:",
        items: [
          "Urban parcel and document deliveries where speed and access matter",
          "Service engineers and field teams covering multiple city appointments",
          "Last mile logistics connecting depots with final delivery addresses",
          "Staff commuting schemes that reduce parking pressure and travel costs",
          "Environmentally conscious operations looking to lower their carbon footprint",
          "Event and promotional teams needing flexible, visible urban transport",
        ],
        outro: "Suitability depends on distance, load, and usage.",
      },
      howQ7Helps: {
        intro: "We help businesses explore electric bike options clearly.",
        items: [
          "Understanding how bikes will be used day to day and what capacity is needed",
          "Explaining the differences between purchase, leasing, cycle-to-work schemes, and rental",
          "Coordinating with suitable providers to source the right models for your operation",
          "Advising on charging infrastructure, storage, and maintenance considerations",
          "Supporting onboarding so staff are confident and safe from day one",
          "Reviewing insurance, liability, and compliance requirements before you commit",
        ],
      },
      whoThisIsFor: {
        intro: "Electric bikes can suit:",
        items: [
          "Courier and same-day delivery businesses operating in urban areas",
          "Facilities management and maintenance companies with city-based teams",
          "Hospitality and catering businesses running local supply routes",
          "Professional services firms offering cycle-to-work benefits for staff",
          "Retail businesses needing flexible, low-cost local delivery options",
        ],
        outro: "We help assess whether electric bikes fit your needs and operational profile. There is no obligation, and we are happy to talk through the practicalities before you decide.",
      },
      whatHappensNext: "Start an enquiry and tell us how you plan to use electric bikes. One of the team will review your requirements and come back with clear, practical guidance on suitable options. There is no pressure and no commitment at this stage.",
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
        intro: "Electric mopeds are powered by electric motors and designed for short to medium distance travel, typically within urban and suburban areas. They require minimal running costs compared to petrol equivalents and produce zero tailpipe emissions. For businesses with regular local routes, they offer a reliable and cost-effective transport option.",
        details: "They offer lower running costs and reduced environmental impact compared to traditional alternatives, with fewer moving parts meaning less maintenance. Charging can be handled overnight or during breaks, and many models now offer swappable batteries for continuous use throughout the day.",
      },
      howItCanBeUsed: {
        intro: "Electric mopeds are often used for:",
        items: [
          "Food delivery services covering regular local routes throughout the day",
          "Parcel and document couriers operating across towns and city centres",
          "Field-based service teams attending multiple appointments in compact areas",
          "Mobile beauty, healthcare, or cleaning professionals travelling between clients",
          "Urban service businesses looking to reduce fuel costs and emissions",
          "Staff transport for short commutes where parking is limited or expensive",
        ],
        outro: "The right solution depends on range, charging, and usage.",
      },
      howQ7Helps: {
        intro: "We help businesses navigate electric moped options confidently.",
        items: [
          "Understanding your operational requirements including typical daily distances and loads",
          "Explaining available models, battery options, and how they compare to petrol mopeds",
          "Setting out finance, lease, and rental options so you can choose what works best",
          "Coordinating with providers to handle delivery, registration, and handover",
          "Supporting compliance with licensing, insurance, and safety requirements",
          "Advising on charging setup and ongoing maintenance considerations",
        ],
      },
      whoThisIsFor: {
        intro: "Electric mopeds can suit:",
        items: [
          "Food delivery and takeaway businesses with regular local routes",
          "Courier and logistics companies operating in towns and cities",
          "Mobile tradespeople and service providers covering compact territories",
          "Healthcare and domiciliary care providers visiting patients locally",
          "Businesses transitioning their fleet to electric as part of sustainability goals",
        ],
        outro: "We help determine suitability based on your routes, usage, and budget. If electric mopeds are not the right fit, we will tell you honestly and suggest alternatives.",
      },
      whatHappensNext: "Start an enquiry and tell us how electric mopeds would be used in your business. We will review your situation and come back with clear options and honest advice. There is no commitment at this stage.",
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
        intro: "Branded vehicles are business vehicles that carry company branding, logos, livery, or messaging as part of their design. They turn every journey into an opportunity for visibility, reinforcing your brand across the areas where you operate. Whether you run a single van or a large fleet, consistent branding helps build recognition and trust.",
        details: "They combine practical transport with mobile brand visibility, effectively acting as moving advertisements wherever they travel. Branding can range from simple vinyl lettering to full vehicle wraps, and the approach depends on your budget, vehicle type, and how long you intend to keep the vehicle.",
      },
      howItCanBeUsed: {
        intro: "Branded vehicles are commonly used for:",
        items: [
          "Delivery fleets where consistent branding builds customer confidence at the door",
          "Service teams such as plumbers, electricians, and engineers arriving at customer premises",
          "Mobile businesses including catering, cleaning, and pet grooming services",
          "Sales and account management teams making regular client visits",
          "Brand awareness campaigns across specific regions or territories",
          "Event support vehicles that represent the business at shows, exhibitions, and functions",
        ],
        outro: "Branding options vary depending on vehicle type and usage.",
      },
      howQ7Helps: {
        intro: "We help businesses organise branded vehicle solutions efficiently.",
        items: [
          "Understanding your vehicle requirements and how branding fits your wider marketing",
          "Coordinating vehicle sourcing and connecting you with suitable branding specialists",
          "Aligning finance, leasing, or rental options so vehicles and branding work within budget",
          "Managing the process from initial design concepts through to finished, road-ready vehicles",
          "Advising on branding durability, removal options, and what works for leased vehicles",
          "Ensuring consistency across multiple vehicles if you are building a branded fleet",
        ],
      },
      whoThisIsFor: {
        intro: "Branded vehicles can suit:",
        items: [
          "Trade and home service businesses such as plumbing, electrical, and landscaping companies",
          "Delivery and courier operations wanting a professional, consistent appearance",
          "Growing businesses looking to increase local brand recognition cost-effectively",
          "Customer-facing operations where the vehicle is part of the client experience",
          "Franchise businesses that need to maintain brand standards across multiple locations",
        ],
        outro: "We help assess what approach makes sense for your business and budget. Whether you are branding one vehicle or twenty, we will guide you through the options clearly.",
      },
      whatHappensNext: "Start an enquiry and tell us about the vehicles and branding you are considering. We will connect you with the right people and manage the process so it runs smoothly. There is no obligation to proceed.",
    },
    "fleet-solutions": {
      slug: "fleet-solutions",
      parentSlug: "vehicles-mobility",
      parentName: "Vehicles & Fleet Solutions",
      name: "Fleet Vehicles",
      heroImage: parentHeroImages["vehicles-mobility"],
      hero: {
        headline: "Fleet vehicle solutions for growing businesses",
        intro: "Managing multiple vehicles requires structure and planning. We help businesses organise fleet vehicle solutions that support efficiency and control.",
      },
      whatItIs: {
        intro: "Fleet vehicles refer to multiple business vehicles managed together as part of a coordinated operation. Whether you run five vans or fifty, having a structured approach to sourcing, financing, and managing your vehicles can reduce costs and improve efficiency. Fleet management covers everything from acquisition through to disposal.",
        details: "This can include cars, vans, pickup trucks, or specialist vehicles depending on your industry and operational needs. A well-managed fleet considers lifecycle costs, maintenance schedules, replacement cycles, and how vehicles are allocated across your teams.",
      },
      howItCanBeUsed: {
        intro: "Fleet solutions are often used for:",
        items: [
          "Delivery and logistics operations managing multiple daily routes and drivers",
          "Service-based businesses with engineers, technicians, or sales teams on the road",
          "Regional or national teams needing consistent, reliable vehicles across locations",
          "Growing businesses adding vehicles as they expand into new areas",
          "Organisations replacing ageing vehicles in a planned, cost-effective way",
          "Companies looking to consolidate vehicle management under one structured approach",
        ],
        outro: "The right setup depends on size and usage.",
      },
      howQ7Helps: {
        intro: "We help businesses manage fleet vehicle solutions effectively.",
        items: [
          "Understanding your current fleet size, usage patterns, and where improvements can be made",
          "Exploring finance, leasing, and rental options to find the most cost-effective approach",
          "Coordinating vehicle sourcing across multiple suppliers to get the right vehicles at the right price",
          "Advising on fleet policies including driver responsibilities, maintenance, and replacement cycles",
          "Supporting ongoing fleet needs as your business grows or requirements change",
          "Providing a single point of contact so fleet management does not become a distraction",
        ],
      },
      whoThisIsFor: {
        intro: "Fleet vehicle solutions can suit:",
        items: [
          "Logistics and distribution companies managing daily delivery schedules",
          "Facilities management and maintenance businesses with mobile teams",
          "Construction and trades firms needing vans and specialist vehicles on site",
          "Healthcare and care providers with staff travelling between locations",
          "Sales and field service organisations covering wide geographic areas",
        ],
        outro: "We help determine the best approach based on your fleet size, budget, and operational goals. Whether you are starting a fleet or restructuring an existing one, we can guide you through the options.",
      },
      whatHappensNext: "Start an enquiry and tell us about your fleet requirements. We will review your situation, explain the available options, and help you build a fleet approach that works. There is no obligation at this stage.",
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
        intro: "Business vehicles can include company cars, vans, pickup trucks, and specialist vehicles used for daily operations, staff transport, or client-facing work. Choosing the right vehicle and the right way to acquire it can have a significant impact on costs, tax efficiency, and day-to-day convenience. We help businesses make informed decisions rather than rushing into commitments.",
        details: "The right acquisition method depends on usage, budget, and tax considerations. Options typically include outright purchase, hire purchase, contract hire, finance lease, and short-term rental, each with different implications for cash flow, ownership, and flexibility.",
      },
      howItCanBeUsed: {
        intro: "Business vehicles are commonly used for:",
        items: [
          "Staff transport for employees who need a vehicle as part of their role",
          "Client and site visits where a professional, reliable vehicle matters",
          "Deliveries and logistics supporting daily commercial operations",
          "Carrying tools, equipment, or stock to job sites and customer locations",
          "Director and management vehicles provided as part of remuneration packages",
          "Temporary or seasonal transport needs where flexibility is important",
        ],
      },
      howQ7Helps: {
        intro: "We help you navigate vehicle options clearly.",
        items: [
          "Assessing your vehicle needs based on how the vehicle will actually be used",
          "Explaining acquisition options including purchase, lease, hire, and rental in plain terms",
          "Coordinating with suppliers and finance providers to get competitive terms",
          "Advising on tax implications, benefit-in-kind considerations, and running cost comparisons",
          "Finding the right vehicles through the right channels without unnecessary mark-ups",
          "Supporting the process from initial enquiry through to delivery and handover",
        ],
      },
      whoThisIsFor: {
        intro: "Business vehicle support suits:",
        items: [
          "Growing businesses adding their first company vehicles to the operation",
          "Professional services firms providing vehicles for partners or senior staff",
          "Trade and construction companies needing reliable vans and commercial vehicles",
          "Companies reviewing existing vehicle arrangements to reduce costs or improve terms",
          "Organisations with staff who rely on vehicles for daily work and client visits",
        ],
        outro: "We work with businesses of all sizes and are happy to help whether you need one vehicle or several. There is no minimum requirement.",
      },
      whatHappensNext: "Start an enquiry and tell us about your vehicle requirements. We will review your needs, explain the options available, and help you find the right solution without pressure. You are under no obligation at any point.",
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
        intro: "Electric vehicles offer significantly lower fuel costs and reduced maintenance requirements compared to petrol or diesel equivalents, along with tax benefits in many cases. For businesses, the savings on fuel, servicing, and benefit-in-kind tax can be substantial over the life of the vehicle. The technology has matured considerably, with a wide range of cars, vans, and commercial vehicles now available.",
        details: "Range, charging infrastructure, and vehicle availability are key considerations when deciding whether electric is right for your business. The market is evolving rapidly, with new models, longer ranges, and faster charging becoming available regularly. We help you cut through the noise and focus on what actually works for your operation.",
      },
      howItCanBeUsed: {
        intro: "Electric vehicles are commonly used for:",
        items: [
          "Company cars for directors, managers, and staff benefiting from lower benefit-in-kind rates",
          "Urban delivery operations where daily mileage falls comfortably within battery range",
          "Fleet operations transitioning gradually from diesel or petrol vehicles",
          "Businesses meeting environmental commitments or sustainability reporting requirements",
          "Client-facing roles where a modern, clean vehicle supports the brand image",
          "Pool vehicles shared across a team for local journeys and site visits",
        ],
      },
      howQ7Helps: {
        intro: "We help assess suitability for your operations.",
        items: [
          "Reviewing your typical daily mileage and usage patterns to determine if electric works",
          "Explaining the current EV options available for your vehicle type and budget",
          "Advising on charging requirements including workplace, home, and public charging options",
          "Coordinating finance, lease, or purchase through competitive channels",
          "Helping you understand the tax advantages and total cost of ownership compared to alternatives",
          "Supporting the transition to electric at a pace that suits your business",
        ],
      },
      whoThisIsFor: {
        intro: "Electric vehicles suit:",
        items: [
          "Professional services firms looking to reduce company car tax for directors and staff",
          "Delivery and logistics businesses with predictable urban or suburban routes",
          "Local authorities and public sector organisations with sustainability targets",
          "Trades and service companies with daily mileage within comfortable EV range",
          "Any business wanting to reduce fuel costs and future-proof its vehicle choices",
        ],
        outro: "We are honest about where electric vehicles work well and where they may not yet be the best option. Our advice is based on your real-world usage, not assumptions.",
      },
      whatHappensNext: "Submit an enquiry and explain how vehicles will be used day to day. We will review your situation and give you an honest assessment of whether electric is the right choice. There is no pressure to proceed, and we are happy to compare electric with other options.",
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
        intro: "Delivery vehicles need to balance capacity, reliability, running costs, and access requirements to keep operations moving efficiently. Whether you operate a single van or a fleet of vehicles covering multiple routes, the right vehicle choice directly affects your margins and service quality. Getting the specification, financing, and timing right from the outset saves time and money.",
        details: "This includes vans, bikes, cargo vehicles, and specialist delivery solutions such as refrigerated or tail-lift vehicles. The right choice depends on your routes, delivery volumes, load types, and operational model, and we help you work through these factors clearly.",
      },
      howItCanBeUsed: {
        intro: "Delivery vehicles are used for:",
        items: [
          "Local and regional deliveries covering scheduled daily routes",
          "National distribution and long-distance courier services",
          "Last mile logistics connecting hubs and depots with final delivery points",
          "Food delivery requiring temperature control or hygiene compliance",
          "Parcel and ecommerce fulfilment with high daily stop counts",
          "Specialist deliveries involving fragile, oversized, or high-value goods",
        ],
      },
      howQ7Helps: {
        intro: "We coordinate vehicles that suit delivery operations.",
        items: [
          "Understanding your delivery patterns, volumes, and typical route distances",
          "Exploring vehicle options across vans, electric vehicles, bikes, and specialist builds",
          "Arranging finance, lease, or rental to match your cash flow and operational model",
          "Advising on payload, access restrictions, and clean air zone compliance",
          "Coordinating multiple vehicle sourcing if you are building or expanding a delivery fleet",
          "Supporting ongoing requirements as routes, volumes, or contracts change",
        ],
      },
      whoThisIsFor: {
        intro: "Delivery vehicle support suits:",
        items: [
          "Courier and logistics businesses managing daily collection and delivery routes",
          "Food delivery and catering companies with temperature-sensitive cargo",
          "Ecommerce fulfilment operations handling high parcel volumes",
          "Florists, pharmacies, and specialist retailers with local delivery services",
          "Contract delivery businesses supplying drivers and vehicles to larger networks",
        ],
        outro: "We work with delivery businesses at every stage, from a single van startup to established operations looking to upgrade or expand. Our advice is practical and based on your actual needs.",
      },
      whatHappensNext: "Start an enquiry and outline your delivery needs. We will review your requirements and come back with clear, suitable vehicle options. There is no commitment, and we are happy to discuss different approaches before you decide.",
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
        intro: "Micro mobility covers a range of small, lightweight electric transport options designed for short urban journeys. These solutions can significantly reduce costs and carbon footprint for businesses that operate in towns and cities. As congestion charges, emissions zones, and parking pressures increase, micro mobility is becoming a genuinely practical alternative for many operations.",
        details: "Options include electric bikes, cargo bikes, electric scooters, and small electric vehicles such as quadricycles. Regulations and infrastructure vary by location, so it is important to understand what is permitted and practical in the areas where you operate before committing.",
      },
      howItCanBeUsed: {
        intro: "Micro mobility is used for:",
        items: [
          "Urban deliveries where traditional vehicles face congestion, parking, or access restrictions",
          "Staff transport for short commutes or journeys between nearby sites",
          "Last mile logistics connecting distribution hubs with final delivery addresses",
          "Campus and estate transport across large commercial or institutional sites",
          "Sustainable operations looking to reduce vehicle emissions and running costs",
          "Promotional and brand visibility activities in busy pedestrian and urban areas",
        ],
      },
      howQ7Helps: {
        intro: "We help assess suitability for your operations.",
        items: [
          "Understanding your urban mobility needs and whether micro mobility genuinely fits",
          "Explaining the available options, their capabilities, and their limitations honestly",
          "Coordinating access to suitable providers for purchase, lease, or rental",
          "Considering local conditions including regulations, road infrastructure, and storage",
          "Advising on insurance, safety equipment, and staff training requirements",
          "Supporting a phased approach if you want to trial micro mobility before committing fully",
        ],
      },
      whoThisIsFor: {
        intro: "Micro mobility suits:",
        items: [
          "Urban delivery and courier businesses operating in congested city centres",
          "University, hospital, and large campus operations needing on-site transport",
          "Hospitality and events businesses with short-distance logistics needs",
          "Local councils and public sector organisations pursuing sustainable transport goals",
          "Retail and service businesses looking for cost-effective alternatives to vans or cars",
        ],
        outro: "We help you work out whether micro mobility makes practical sense for your operation. If it does, we will connect you with suitable providers. If it does not, we will say so.",
      },
      whatHappensNext: "Start an enquiry and tell us about your urban mobility needs. We will review your situation and come back with honest, practical advice on what could work. There is no obligation, and we are happy to explore the options with you at your own pace.",
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
        intro: "Vehicle tracking systems use GPS technology to monitor the location and movement of vehicles in real time or through historical reporting. They give businesses visibility over where vehicles are, how they are being used, and whether they are being operated efficiently and safely. For many businesses, tracking is as much about operational improvement as it is about security.",
        details: "They can provide detailed insight into usage patterns, driver behaviour, fuel consumption, and journey times. Modern tracking systems range from simple location-only devices to comprehensive platforms offering geofencing, route replay, and integration with fleet management software.",
      },
      howItCanBeUsed: {
        intro: "Vehicle tracking is commonly used for:",
        items: [
          "Fleet monitoring to see where all vehicles are at any given time",
          "Improving route efficiency by analysing journey data and identifying better patterns",
          "Vehicle security and theft deterrence through real-time location alerts",
          "Operational oversight for managers responsible for mobile teams and drivers",
          "Customer service improvements by providing accurate estimated arrival times",
          "Insurance and compliance where tracking data supports claims or regulatory requirements",
        ],
        outro: "The level of tracking depends on business needs.",
      },
      howQ7Helps: {
        intro: "We help businesses understand and organise vehicle tracking clearly.",
        items: [
          "Understanding what you want to monitor and what outcomes matter most to your business",
          "Explaining the available tracking options from basic location to full telematics platforms",
          "Coordinating with suitable providers to find solutions that match your fleet and budget",
          "Supporting installation, setup, and staff onboarding so the system works from day one",
          "Advising on data privacy, driver communication, and legal considerations",
          "Helping you get value from the data once tracking is in place, not just collecting it",
        ],
      },
      whoThisIsFor: {
        intro: "Vehicle tracking can suit:",
        items: [
          "Logistics and delivery companies managing multiple vehicles across daily routes",
          "Construction and trades firms with vans and equipment moving between job sites",
          "Service businesses with engineers, technicians, or sales teams on the road",
          "Transport and passenger service operators needing real-time fleet visibility",
          "Any business wanting to improve vehicle security, efficiency, or driver accountability",
        ],
        outro: "We help assess the right level of tracking for your operation. Not every business needs the most advanced system, and we will recommend what genuinely fits your requirements.",
      },
      whatHappensNext: "Start an enquiry and tell us about the vehicles you want to track and what you are hoping to achieve. One of the team will review your needs and come back with clear, suitable options. There is no commitment at this stage.",
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
        intro: "Asset tracking systems monitor the location and status of physical assets using GPS, Bluetooth, RFID, or cellular tracking technology. They help businesses know where their valuable equipment and assets are at all times, reducing the risk of loss, theft, and misplacement. For businesses with mobile or distributed assets, tracking provides visibility that manual record-keeping simply cannot match.",
        details: "They can help reduce loss and improve asset management by providing real-time location data, movement alerts, and usage reporting. Tracking devices range from small, battery-powered tags for tools and equipment to hardwired units for larger plant and machinery.",
      },
      howItCanBeUsed: {
        intro: "Asset tracking is often used for:",
        items: [
          "High value equipment such as generators, compressors, and specialist machinery",
          "Mobile or remote assets that move between sites, depots, or client locations",
          "Tools and smaller equipment that are easily misplaced or vulnerable to theft",
          "Shipping containers, trailers, and portable storage units",
          "Reducing theft and loss by deterring opportunistic and organised crime",
          "Audit and compliance where businesses need to prove asset location and condition",
        ],
        outro: "Tracking solutions vary based on asset type.",
      },
      howQ7Helps: {
        intro: "We help businesses implement asset tracking responsibly.",
        items: [
          "Understanding which assets genuinely need monitoring and what level of tracking is appropriate",
          "Explaining the different tracking technologies and what suits your asset types and environment",
          "Coordinating with appropriate providers to source reliable, cost-effective solutions",
          "Supporting setup, installation, and integration with your existing systems where possible",
          "Advising on battery life, connectivity, and ongoing costs so there are no surprises",
          "Helping you build a practical asset management approach around the tracking data",
        ],
      },
      whoThisIsFor: {
        intro: "Asset tracking can suit:",
        items: [
          "Construction and civil engineering firms with plant and equipment across multiple sites",
          "Event and production companies managing high-value kit that moves frequently",
          "Healthcare organisations tracking medical devices and specialist equipment",
          "Agricultural businesses monitoring machinery, trailers, and remote assets",
          "Any business that has experienced equipment loss and wants better control going forward",
        ],
        outro: "We help assess suitability and recommend the right level of tracking for your situation. Not every asset needs a tracker, and we will help you focus on where it adds genuine value.",
      },
      whatHappensNext: "Start an enquiry and tell us what assets you would like to track and what concerns prompted your interest. We will guide you through the options clearly and without pressure. You are under no obligation to proceed.",
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
        intro: "Thatcham approved trackers are security devices that meet industry-recognised standards set by Thatcham Research, the motor insurance research centre. They are often required for higher value vehicles where insurers specify a minimum level of tracking as a condition of cover. Thatcham approval gives both the business and the insurer confidence that the device meets a verified security standard.",
        details: "They support theft recovery and insurance compliance by providing monitored tracking with alert capabilities and, in many cases, active stolen vehicle recovery services. Different approval categories exist depending on the level of protection required, and the right category often depends on the vehicle value, type, and insurer requirements.",
      },
      howItCanBeUsed: {
        intro: "Thatcham approved trackers are commonly used for:",
        items: [
          "High value vehicles including prestige cars, SUVs, and performance vehicles",
          "Fleet security for businesses operating expensive commercial or specialist vehicles",
          "Enhanced theft protection with monitored alerts and stolen vehicle recovery",
          "Meeting insurance requirements where a specific Thatcham category is mandated",
          "Protecting vehicles parked in higher risk areas or left unattended for extended periods",
          "Satisfying finance or lease agreement conditions that require approved tracking",
        ],
        outro: "Approval level depends on the vehicle and usage.",
      },
      howQ7Helps: {
        intro: "We help businesses understand and organise approved tracking solutions.",
        items: [
          "Explaining the different Thatcham approval categories and what each one covers",
          "Helping you understand what your insurer or finance provider actually requires",
          "Coordinating with suitable Thatcham-approved providers and installers",
          "Supporting professional installation and ensuring correct certification is provided",
          "Advising on subscription costs, monitoring services, and ongoing commitments",
          "Ensuring the solution meets both your security needs and any mandatory requirements",
        ],
      },
      whoThisIsFor: {
        intro: "Thatcham approved trackers can suit:",
        items: [
          "Businesses with high value company cars, director vehicles, or prestige fleet vehicles",
          "Fleet operators managing vehicles that are frequently targeted for theft",
          "Car dealerships and vehicle hire companies protecting stock and rental vehicles",
          "Logistics businesses with specialist or high-value commercial vehicles",
          "Any business where insurers have specified Thatcham-approved tracking as a policy condition",
        ],
        outro: "We help determine whether Thatcham approval is required for your situation and, if so, which category applies. If a simpler tracking solution would be more appropriate, we will tell you.",
      },
      whatHappensNext: "Start an enquiry and tell us about the vehicles you want to protect and any insurer requirements you are aware of. We will explain your options clearly and help you get the right level of protection in place. There is no obligation to proceed.",
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
        intro: "Webcams and CCTV systems provide visual monitoring of locations, vehicles, or assets through live feeds, recorded footage, or both. They are one of the most effective ways to deter crime, monitor activity, and provide evidence when incidents occur. Modern systems offer remote access, motion detection, and cloud storage, making them far more flexible than traditional setups.",
        details: "They support security, operational awareness, and accountability across a wide range of business environments. Systems range from standalone cameras with basic recording to fully networked installations with remote monitoring, analytics, and integration with alarm systems.",
      },
      howItCanBeUsed: {
        intro: "Webcams and CCTV are often used for:",
        items: [
          "Premises security covering entrances, car parks, loading areas, and perimeters",
          "Monitoring vehicle yards, compounds, and outdoor storage areas",
          "Remote oversight allowing managers to view sites from anywhere via mobile or desktop",
          "Theft and vandalism prevention through visible deterrence and recorded evidence",
          "Health and safety monitoring in warehouses, workshops, and operational areas",
          "In-vehicle cameras for fleet vehicles recording driver behaviour and road incidents",
        ],
        outro: "Solutions vary based on coverage and complexity.",
      },
      howQ7Helps: {
        intro: "We help businesses explore CCTV and webcam options clearly.",
        items: [
          "Understanding your monitoring requirements and what you actually need to see and record",
          "Explaining the system options available, from simple standalone cameras to networked installations",
          "Coordinating with suitable providers for supply, installation, and ongoing support",
          "Advising on storage, retention, and remote access so the system works the way you need it to",
          "Supporting compliance with data protection and signage requirements for CCTV use",
          "Helping you scale the system sensibly, starting with what matters most and expanding if needed",
        ],
      },
      whoThisIsFor: {
        intro: "Webcams and CCTV can suit:",
        items: [
          "Warehousing and logistics businesses with yards, depots, and loading areas to secure",
          "Retail and hospitality businesses wanting to protect premises and monitor activity",
          "Construction companies needing temporary site security with camera coverage",
          "Fleet operators looking for in-vehicle or yard-based camera solutions",
          "Any business that wants visible security and reliable evidence in case of incidents",
        ],
        outro: "We help assess what level of monitoring is appropriate for your situation and budget. We focus on practical solutions that deliver genuine security value rather than over-specifying.",
      },
      whatHappensNext: "Start an enquiry and tell us what you are looking to monitor and what has prompted the need. We will review your requirements and connect you with suitable providers who can design and install the right system. There is no obligation at this stage.",
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
        intro: "Asset recovery services combine tracking technology with active recovery support to retrieve stolen or missing vehicles and equipment. When a theft occurs, having a recovery solution in place can mean the difference between getting an asset back quickly and losing it entirely. These services typically involve monitored tracking devices linked to a recovery team that coordinates with police to locate and retrieve stolen assets.",
        details: "This is particularly relevant for high-value vehicles, plant, and equipment where replacement costs are significant and downtime is disruptive. Insurance requirements sometimes mandate specific recovery solutions, particularly for prestige vehicles and expensive commercial assets, and having the right system in place can also reduce insurance premiums.",
      },
      howItCanBeUsed: {
        intro: "Asset recovery is used for:",
        items: [
          "High value vehicle protection with monitored tracking and rapid response recovery",
          "Equipment and plant theft recovery for assets operating across multiple locations",
          "Insurance compliance where policies require an approved recovery solution to be fitted",
          "Reducing financial exposure by maximising the chance of recovering stolen property",
          "Peace of mind for business owners who have experienced theft or operate in higher risk areas",
          "Protecting leased or financed assets where the business is contractually liable for loss",
        ],
      },
      howQ7Helps: {
        intro: "We help coordinate approved recovery solutions.",
        items: [
          "Understanding your protection needs and identifying which assets are most at risk",
          "Explaining the different recovery options, service levels, and what each one provides",
          "Coordinating with approved providers who have proven track records in asset recovery",
          "Ensuring the solution meets any insurance or finance agreement requirements",
          "Supporting professional installation so devices are fitted correctly and discreetly",
          "Advising on complementary security measures that work alongside recovery services",
        ],
      },
      whoThisIsFor: {
        intro: "Asset recovery suits:",
        items: [
          "Businesses with high value vehicles including prestige cars, HGVs, and specialist commercial vehicles",
          "Construction and plant hire companies with expensive equipment on open or remote sites",
          "Fleet operators wanting an additional layer of protection beyond standard tracking",
          "Companies whose insurers require or recommend an approved recovery solution",
          "Any business that has suffered theft and wants to reduce the risk of it happening again",
        ],
        outro: "We help you understand what level of recovery protection is appropriate and connect you with the right providers. If a simpler tracking solution would be sufficient, we will tell you honestly.",
      },
      whatHappensNext: "Start an enquiry and explain your concerns. We will review your situation, explain the recovery options available, and help you put the right protection in place. There is no obligation, and we will give you honest advice on what level of cover makes sense for your business.",
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
        intro: "A business bank account allows a company to manage income, expenses, and payments separately from personal finances. Having the right account in place is fundamental to maintaining clear financial records and supporting smooth day to day operations. It also provides a professional foundation for managing supplier payments, customer receipts, and payroll.",
        details: "Different accounts offer different features depending on how a business trades, including options for multi-currency handling, integrated invoicing, and digital banking tools. Choosing the right provider and account type can have a meaningful impact on how efficiently a business manages its cash flow and reporting.",
      },
      howItCanBeUsed: {
        intro: "Business bank accounts are commonly used for:",
        items: [
          "Managing business income and expenses with clear transaction records",
          "Separating personal and business finances for cleaner accounting",
          "Supporting card payments, direct debits, and bank transfers",
          "Improving financial visibility through real-time reporting and statements",
          "Facilitating payroll processing and supplier payments",
          "Establishing a professional banking relationship for future credit needs",
        ],
        outro: "The right account depends on your business structure and activity.",
      },
      howQ7Helps: {
        intro: "We help businesses access suitable banking solutions through trusted partners.",
        items: [
          "Understanding how your business operates and what banking features matter most",
          "Explaining available account options across traditional and digital providers",
          "Coordinating account setup and ensuring documentation is prepared correctly",
          "Supporting you through the application and onboarding process",
          "Reviewing your banking arrangements as your business grows or changes",
          "Acting as a point of contact if questions arise during setup",
        ],
        outro: "Our focus is on clarity and suitability.",
      },
      whoThisIsFor: {
        intro: "Business bank accounts are suitable for:",
        items: [
          "Newly incorporated limited companies setting up their first business account",
          "Sole traders and partnerships looking to separate personal and business finances",
          "Established companies reviewing their banking arrangements for better terms",
          "E-commerce businesses needing integrated payment and banking solutions",
          "Growing businesses requiring multi-user access or enhanced digital banking tools",
        ],
        outro: "We help assess what makes sense for your situation. Whether you are just starting out or reviewing your current provider, we can guide you through the options clearly.",
      },
      whatHappensNext: "Start an enquiry and tell us about your business and banking needs. One of the team will review your situation and come back to you with suitable options, typically within a couple of working days. There is no obligation at this stage, and we are happy to answer any questions before you decide how to proceed.",
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
        intro: "A business credit card allows companies to make purchases on credit, typically with monthly repayment terms. It provides a practical way to manage everyday business spending while keeping a clear audit trail. Many cards also offer additional benefits such as cashback, purchase protection, or travel insurance.",
        details: "Features and limits vary depending on the provider and business profile, including interest rates, credit limits, and reward structures. Understanding the terms and choosing a card that aligns with your spending patterns can make a real difference to how effectively you manage short-term business costs.",
      },
      howItCanBeUsed: {
        intro: "Business credit cards are often used for:",
        items: [
          "Managing day to day expenses such as travel, fuel, and office supplies",
          "Paying for online purchases, software subscriptions, and recurring services",
          "Providing short term cash flow flexibility between invoice payments",
          "Tracking and categorising business spending for cleaner record keeping",
          "Issuing employee cards with individual spending limits for team purchases",
          "Building a business credit profile to support future borrowing needs",
        ],
        outro: "Responsible use is important.",
      },
      howQ7Helps: {
        intro: "We help businesses explore business credit card options clearly.",
        items: [
          "Reviewing your business profile and typical spending patterns",
          "Explaining card features, interest rates, and eligibility requirements",
          "Comparing options across providers to find a suitable match",
          "Coordinating applications and supporting you through the process",
          "Advising on responsible use and repayment planning",
          "Revisiting your arrangements as business needs change over time",
        ],
      },
      whoThisIsFor: {
        intro: "Business credit cards can suit:",
        items: [
          "Small and medium sized businesses with regular operational expenses",
          "Startups looking to manage cash flow during early trading periods",
          "Professional services firms with recurring travel and client costs",
          "Retail and hospitality businesses needing flexible purchasing options",
          "Companies with employees who make regular business purchases on the go",
        ],
        outro: "We help determine if this option fits your needs. If a credit card is not the right solution, we can also explore alternatives such as business overdrafts or expense management tools.",
      },
      whatHappensNext: "Start an enquiry and tell us about your business and spending requirements. We will review your situation and discuss the most suitable card options with you, explaining everything clearly so you can make an informed decision. There is no obligation at this stage.",
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
        intro: "Accounting services help businesses manage financial records, reporting, and regulatory obligations. Good accounting provides more than compliance; it gives business owners the clarity they need to make informed decisions about spending, investment, and growth. Whether you need day-to-day bookkeeping or strategic financial reporting, the right accounting support keeps your business on solid ground.",
        details: "The level of support varies depending on business size and complexity, from basic bookkeeping and VAT returns to full management accounts and financial planning. Many businesses benefit from a combination of regular record keeping and periodic strategic review to ensure they remain financially healthy and well prepared.",
      },
      howItCanBeUsed: {
        intro: "Accounting services are commonly used for:",
        items: [
          "Day-to-day bookkeeping, bank reconciliation, and transaction recording",
          "Preparing year-end accounts and statutory filings",
          "Producing management accounts and financial reports for decision making",
          "Ongoing financial oversight and cash flow monitoring",
          "VAT returns and payroll processing",
          "Budgeting, forecasting, and scenario planning for business growth",
        ],
        outro: "The right support depends on your business needs.",
      },
      howQ7Helps: {
        intro: "We work with trusted partners to help businesses access accounting support.",
        items: [
          "Understanding your business structure, trading history, and financial requirements",
          "Coordinating appropriate accounting services matched to your complexity and budget",
          "Acting as a point of contact to ensure the service runs smoothly over time",
          "Ensuring accounting services align with your wider financial setup and banking arrangements",
          "Reviewing your support level as your business grows or circumstances change",
          "Helping you understand what reports and information you should expect to receive",
        ],
      },
      whoThisIsFor: {
        intro: "Accounting services can suit:",
        items: [
          "Newly formed limited companies needing their first accountant and company filings",
          "Established SMEs looking for more responsive or cost-effective accounting support",
          "Sole traders and freelancers who want professional help managing their books",
          "E-commerce and online businesses with high transaction volumes",
          "Property investors and landlords needing specialist tax-aware accounting",
        ],
        outro: "We help match you with suitable support. If you are unsure what level of accounting you need, we are happy to talk it through and recommend an appropriate starting point.",
      },
      whatHappensNext: "Start an enquiry and tell us about the accounting support you are looking for. One of the team will review your situation and introduce you to a trusted accounting partner who fits your needs. We remain available throughout to make sure everything works as it should.",
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
        intro: "Tax and compliance support helps businesses meet their legal obligations and manage reporting requirements accurately and on time. Falling behind on tax filings or compliance obligations can lead to penalties, unnecessary stress, and disruption to business operations. Having the right support in place ensures that these responsibilities are handled professionally and proactively.",
        details: "This can include corporation tax, self-assessment, VAT compliance, PAYE, and Companies House filings, as well as ongoing advisory support to help with tax planning and efficiency. The complexity of your obligations will depend on your business structure, turnover, and the jurisdictions in which you operate.",
      },
      howItCanBeUsed: {
        intro: "Tax and compliance support is often used for:",
        items: [
          "Corporation tax planning, calculation, and filing with HMRC",
          "Self-assessment returns for directors, sole traders, and partners",
          "VAT registration, returns, and scheme selection",
          "PAYE, payroll compliance, and employer reporting obligations",
          "Companies House annual filings, confirmation statements, and director changes",
          "Ongoing advisory support to ensure tax efficiency within legal boundaries",
        ],
        outro: "The right level of support depends on the business.",
      },
      howQ7Helps: {
        intro: "We help businesses access tax and compliance support through trusted partners.",
        items: [
          "Understanding your current business obligations and identifying any gaps",
          "Coordinating appropriate specialist support from qualified professionals",
          "Ensuring tax and compliance services align with your wider financial setup",
          "Remaining involved as a point of contact to keep things running smoothly",
          "Reviewing your arrangements periodically as your business structure evolves",
          "Helping you understand what deadlines apply and what actions are required",
        ],
      },
      whoThisIsFor: {
        intro: "Tax and compliance support can suit:",
        items: [
          "Limited companies needing reliable corporation tax and filing support",
          "Sole traders and partnerships managing self-assessment obligations",
          "Growing businesses that have outgrown their current compliance arrangements",
          "Property companies and landlords with specific tax reporting requirements",
          "International businesses operating across multiple jurisdictions or VAT regimes",
        ],
        outro: "We help assess what support is appropriate. If you are unsure where you stand or what your obligations are, that is a perfectly good reason to get in touch.",
      },
      whatHappensNext: "Start an enquiry and tell us about your tax or compliance requirements. We will review your situation and connect you with a trusted specialist who can help, explaining everything clearly along the way. There is no pressure and no obligation at this stage.",
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
        intro: "Growing businesses often need additional capacity without committing to permanent hires. Operational support provides practical assistance with the day-to-day running of your business, helping you maintain momentum during busy periods or when internal resources are stretched. It bridges the gap between where you are now and where you need to be.",
        details: "Operational support can include process improvement, project coordination, workflow management, or temporary resource to cover specific needs. The right type of support depends on your specific challenges, whether that is a short-term capacity issue or a longer-term need to streamline how your business operates.",
      },
      howItCanBeUsed: {
        intro: "Operational support is used for:",
        items: [
          "Reviewing and improving internal processes to reduce inefficiency",
          "Supporting project delivery when internal teams are at capacity",
          "Providing temporary operational resource during periods of growth or transition",
          "Streamlining workflows across departments or business functions",
          "Managing supplier relationships and procurement coordination",
          "Implementing new systems, tools, or operational procedures",
        ],
      },
      howQ7Helps: {
        intro: "We identify gaps and coordinate suitable support.",
        items: [
          "Understanding your operational challenges and what is causing bottlenecks",
          "Identifying the most suitable type of support for your situation",
          "Coordinating with trusted partners who specialise in operational delivery",
          "Managing ongoing requirements and adjusting support as priorities shift",
          "Providing a single point of contact so you are not managing multiple providers",
          "Reviewing outcomes to ensure the support is delivering practical results",
        ],
      },
      whoThisIsFor: {
        intro: "Operational support suits:",
        items: [
          "Growing SMEs that need extra capacity without hiring full-time staff",
          "Professional services firms managing multiple client projects simultaneously",
          "Retail and hospitality businesses streamlining supply chain or logistics operations",
          "Technology companies scaling operations alongside product development",
          "Owner-managed businesses where the founder is stretched across too many roles",
        ],
        outro: "If your business is running but not running smoothly, operational support can help you get things back on track without overcommitting resources.",
      },
      whatHappensNext: "Submit an enquiry and outline where support is needed. We will arrange a conversation to understand your situation properly and discuss the most practical options available. There is no cost or commitment involved in exploring what might help.",
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
        intro: "Back office functions include data entry, document management, customer service support, and administrative processing. These are the essential tasks that keep a business running behind the scenes, but they can quickly consume time and attention that would be better spent on revenue-generating activities. Having reliable back office support in place allows business owners and their teams to focus on what matters most.",
        details: "Outsourcing these functions can free up significant time for core business activities while also improving accuracy and consistency. Whether you need ongoing daily support or help with specific administrative projects, the right back office arrangement can make a noticeable difference to how efficiently your business operates.",
      },
      howItCanBeUsed: {
        intro: "Back office services are used for:",
        items: [
          "Data entry, processing, and database management to keep records accurate",
          "Document management including filing, archiving, and retrieval systems",
          "Customer service support such as email handling and enquiry responses",
          "Invoice processing, purchase order management, and payment reconciliation",
          "CRM updates, contact management, and lead tracking administration",
          "Preparing reports, presentations, and internal communications",
        ],
      },
      howQ7Helps: {
        intro: "We help assess your back office needs.",
        items: [
          "Understanding your current workload and where time is being lost",
          "Identifying suitable providers with relevant experience and capacity",
          "Coordinating setup so the transition is smooth and well managed",
          "Focusing on reliability and quality to ensure consistent output",
          "Reviewing arrangements periodically to make sure they continue to work well",
          "Acting as your point of contact so you are not managing another supplier directly",
        ],
      },
      whoThisIsFor: {
        intro: "Back office services suit:",
        items: [
          "Busy business owners who are spending too much time on administrative tasks",
          "Growing companies that need additional capacity without hiring in-house",
          "E-commerce businesses with high volumes of order processing and customer queries",
          "Professional services firms needing reliable document and data management",
          "Property management companies handling tenant communications and record keeping",
        ],
        outro: "If administrative tasks are slowing your business down, outsourcing your back office can free up your time and improve the quality of your operations.",
      },
      whatHappensNext: "Start an enquiry and tell us about your back office requirements. We will review your situation and introduce you to a suitable support provider, making sure the arrangement is set up properly from the start. There is no obligation, and we are happy to discuss your options informally first.",
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
        intro: "Administrative support can include diary management, correspondence, filing, and general business coordination. For many business owners, admin tasks are a constant drain on time that could be better spent on clients, strategy, or growth. Having dependable admin support means the important details are handled properly without you having to manage everything yourself.",
        details: "This suits businesses where the owner or key staff need to focus on higher-value activities but cannot afford to let administrative standards slip. Admin support can be arranged on a regular ongoing basis or for specific periods when workload increases, and it can be delivered remotely or on-site depending on what works best.",
      },
      howItCanBeUsed: {
        intro: "Admin support is used for:",
        items: [
          "Diary and calendar management, including scheduling meetings and appointments",
          "Handling correspondence, emails, and telephone enquiries professionally",
          "Filing, document organisation, and maintaining business records",
          "General business coordination across teams, suppliers, and clients",
          "Travel arrangements, event planning, and meeting preparation",
          "Managing renewals, subscriptions, and recurring administrative tasks",
        ],
      },
      howQ7Helps: {
        intro: "We help identify your admin support needs.",
        items: [
          "Understanding your day-to-day challenges and where time is being lost",
          "Coordinating with suitable providers who can deliver reliable, consistent support",
          "Focusing on practical solutions that fit your working style and budget",
          "Ensuring reliability so you can trust that tasks are being completed properly",
          "Adjusting the level of support as your business needs change over time",
          "Remaining available as a point of contact if anything needs to be refined",
        ],
      },
      whoThisIsFor: {
        intro: "Admin support suits:",
        items: [
          "Busy business owners who are spending evenings catching up on admin tasks",
          "Consultants and freelancers who need professional support without hiring staff",
          "Growing companies where admin workload has outpaced current capacity",
          "Medical, legal, and financial professionals needing reliable practice administration",
          "Small teams that need flexible support without the commitment of a full-time hire",
        ],
        outro: "If admin tasks are taking you away from the work that generates revenue, dedicated support can give you that time back. We help you find the right arrangement without overcomplicating things.",
      },
      whatHappensNext: "Start an enquiry and describe your admin challenges. We will have a straightforward conversation about what support would help most and introduce you to a provider who fits your needs. There is no commitment required at this stage, and we are happy to start with a simple discussion.",
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
        intro: "Businesses often need specialists they can trust but do not know where to start looking. Finding the right provider can be time-consuming and uncertain, especially when you are unfamiliar with a particular field. Our partner introductions take the guesswork out of this process by connecting you with professionals we know and trust.",
        details: "Introductions are based on suitability and track record, not commission or referral arrangements. This can cover legal, HR, marketing, IT, insurance, and a wide range of other business services, ensuring you speak to someone who genuinely understands your type of business and your specific requirements.",
      },
      howItCanBeUsed: {
        intro: "Partner introductions cover:",
        items: [
          "Legal services including commercial contracts, employment law, and intellectual property",
          "HR support such as recruitment, policies, and employee relations guidance",
          "Marketing services including branding, digital strategy, and content creation",
          "IT and technology support including infrastructure, cybersecurity, and software solutions",
          "Insurance broking for business, professional indemnity, and key person cover",
          "Specialist consultants for compliance, health and safety, or sector-specific regulations",
        ],
      },
      howQ7Helps: {
        intro: "We assess your requirements and make suitable introductions.",
        items: [
          "Understanding what you need and why, so we can match you with the right specialist",
          "Identifying trusted partners from our network based on experience and track record",
          "Facilitating introductions personally so you are not starting from cold",
          "Providing context to the partner so they understand your situation before the first conversation",
          "Remaining available throughout in case the introduction needs adjusting or refining",
          "Following up to make sure the relationship is working well for both sides",
        ],
      },
      whoThisIsFor: {
        intro: "Partner introductions suit:",
        items: [
          "Startups and early-stage businesses building their professional support network for the first time",
          "Established SMEs looking to replace an underperforming provider with someone more reliable",
          "Business owners relocating to a new area who need local professional contacts",
          "Companies entering new markets or sectors that require specialist expertise",
          "International businesses setting up in the UK who need trusted local partners",
        ],
        outro: "Whether you need one introduction or several, we are happy to help. Our network has been built over time and we only introduce businesses to people we would use ourselves.",
      },
      whatHappensNext: "Start an enquiry and explain what you are looking for. We will discuss your requirements and introduce you to a suitable partner from our network, giving them the context they need so the first conversation is productive. There is no cost or obligation for the introduction itself.",
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
        intro: "Advisory support provides regular access to experienced guidance on business decisions, challenges, and opportunities. Running a business can be isolating, and having a trusted sounding board makes it easier to think clearly about what comes next. This is not about being told what to do; it is about having informed, objective input when it matters most.",
        details: "This can range from informal check-ins and ad hoc conversations to structured advisory arrangements with regular meetings and defined objectives. The format and frequency are shaped around what works best for you and your business, and the relationship can evolve as your priorities change over time.",
      },
      howItCanBeUsed: {
        intro: "Advisory support is used for:",
        items: [
          "Strategic planning and thinking through medium to long-term business direction",
          "Decision support when evaluating significant investments, hires, or partnerships",
          "Working through operational or commercial challenges with an objective perspective",
          "Assessing new opportunities and understanding the risks and benefits involved",
          "Preparing for key milestones such as funding rounds, acquisitions, or exits",
          "Regular check-ins to maintain focus on priorities and hold progress to account",
        ],
      },
      howQ7Helps: {
        intro: "We help identify what type of advisory support would benefit your business.",
        items: [
          "Understanding your current situation, goals, and the challenges you are facing",
          "Explaining the different advisory options available and what each involves",
          "Coordinating suitable arrangements with experienced advisors from our network",
          "Providing ongoing support and remaining involved as a point of contact",
          "Adjusting the advisory relationship as your business needs evolve over time",
          "Ensuring the advisory support complements your wider business and financial arrangements",
        ],
      },
      whoThisIsFor: {
        intro: "Advisory support suits:",
        items: [
          "Founder-led businesses where the owner needs a trusted external perspective",
          "Growing companies approaching a stage where strategic guidance would add real value",
          "Businesses preparing for significant change such as expansion, restructuring, or exit",
          "Professional services firms looking for non-executive or board-level input",
          "International businesses establishing operations in the UK market for the first time",
        ],
        outro: "Advisory support works best when there is trust and openness. We take the time to understand your business properly before recommending any arrangement, so the relationship starts on the right footing.",
      },
      whatHappensNext: "Start an enquiry and tell us what kind of support you are looking for. We will arrange an initial conversation to understand your business and what would be most helpful, then discuss the advisory options that make the most sense. There is no obligation, and we are happy to keep things informal to begin with.",
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
