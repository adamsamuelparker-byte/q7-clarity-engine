// FAQ data for all service categories

export interface FAQItem {
  question: string;
  answer: string;
}

export const serviceFAQs: Record<string, FAQItem[]> = {
  "business-funding": [
    {
      question: "What is business funding used for?",
      answer: "Business funding can be used for a wide range of purposes including growth investment, purchasing equipment or stock, managing cash flow during quieter periods, hiring staff, expanding into new markets, refurbishing premises, or covering unexpected costs. The right type of funding depends on what the business needs and how quickly it is required.",
    },
    {
      question: "How quickly can business funding be approved?",
      answer: "Approval times vary depending on the type of funding and the lender involved. Some unsecured funding options can provide decisions within 24 to 48 hours, while larger or more complex facilities may take several weeks. We help businesses prepare applications properly to avoid unnecessary delays.",
    },
    {
      question: "Do I need perfect credit to apply for business funding?",
      answer: "Not necessarily. While credit history is considered by most lenders, many funding options also take into account factors such as monthly turnover, trading history, and the overall performance of the business. Some providers specialise in working with businesses that have imperfect credit.",
    },
    {
      question: "What is the difference between secured and unsecured business funding?",
      answer: "Secured funding requires an asset such as property or equipment to be used as security against the loan. This can allow access to larger amounts and lower rates. Unsecured funding does not require asset security and is typically based on business performance, but may come with shorter terms or higher costs. We help you understand which approach suits your situation.",
    },
    {
      question: "How much can my business borrow?",
      answer: "Borrowing amounts vary widely depending on the type of funding, your business turnover, trading history, and the lender's criteria. Unsecured options typically range from around ten thousand pounds to several hundred thousand, while secured facilities can be significantly higher. We assess your position and match you with suitable options.",
    },
    {
      question: "Will applying for business funding affect my credit score?",
      answer: "Initial enquiries and soft searches do not typically affect your credit score. A full credit check is usually only carried out once you proceed with a formal application. We explain the process clearly before any searches are conducted so there are no surprises.",
    },
  ],
  "emergency-funding": [
    {
      question: "What is emergency business funding?",
      answer: "Emergency funding is designed to provide businesses with fast access to capital when unexpected expenses or cash flow issues arise. It covers situations such as urgent supplier payments, equipment breakdowns, payroll shortfalls, or unforeseen costs that cannot wait for traditional funding timelines.",
    },
    {
      question: "How quickly can emergency funding be arranged?",
      answer: "Some emergency funding solutions can be approved and paid out within 24 to 48 hours, depending on the type of funding and the information available. Speed is often the priority with emergency funding, and we work to identify the fastest suitable route for your business.",
    },
    {
      question: "What can emergency funding be used for?",
      answer: "Businesses commonly use emergency funding to manage urgent costs such as supplier payments, payroll, equipment repairs, tax liabilities, bridging gaps between invoices being paid, or covering costs during unexpected disruptions to trading.",
    },
    {
      question: "Is emergency funding more expensive than standard business loans?",
      answer: "Emergency funding can carry higher costs than longer term funding arrangements because of the speed and flexibility involved. However, the cost needs to be weighed against the consequences of not having access to funds when they are needed. We help you understand the full cost before proceeding.",
    },
    {
      question: "What information do I need to apply for emergency funding?",
      answer: "Requirements vary by provider, but typically you will need to provide basic business details, recent bank statements, and information about how much funding is required and what it is for. The more information available upfront, the faster the process can move.",
    },
  ],
  "payments-merchant": [
    {
      question: "What are card processing services?",
      answer: "Card processing services allow businesses to accept payments from customers using debit cards, credit cards, contactless payments, and other digital payment methods. This includes in-person payments via card terminals, online payments through ecommerce platforms, and mobile payment solutions for businesses that operate on the move.",
    },
    {
      question: "Do I need special equipment to accept card payments?",
      answer: "The equipment you need depends on how your business operates. In-person businesses typically use countertop or portable card terminals. Mobile businesses may use handheld devices or smartphone-connected readers. Online businesses need a payment gateway integrated with their website. We help identify the right setup for your situation.",
    },
    {
      question: "Can small businesses use merchant services?",
      answer: "Yes. Card processing solutions are available for businesses of all sizes, including sole traders, small retailers, restaurants, market traders, and service providers. Many solutions are designed specifically for smaller businesses with straightforward pricing and minimal setup requirements.",
    },
    {
      question: "How much does card processing cost?",
      answer: "Costs typically include a per-transaction fee, which varies depending on the type of card used, the provider, and your monthly transaction volume. Some providers also charge monthly fees for equipment rental or account maintenance. We help businesses compare options to find a cost-effective solution.",
    },
    {
      question: "How long does it take to set up card processing?",
      answer: "Setup times vary depending on the provider and the type of solution. Some card terminal providers can have you up and running within a few days, while more complex setups involving ecommerce integration or EPOS systems may take longer. We coordinate the process to minimise disruption to your business.",
    },
    {
      question: "Can I switch my existing card processing provider?",
      answer: "Yes. Many businesses switch providers to reduce costs, improve service, or access better technology. We can review your current arrangement, compare alternatives, and manage the transition so there is no disruption to your ability to take payments.",
    },
  ],
  "merchant-cash-advance": [
    {
      question: "What is a merchant cash advance?",
      answer: "A merchant cash advance provides businesses with an upfront lump sum of funding that is repaid through a fixed percentage of future card sales. It is not a traditional loan and does not have fixed monthly repayments. Instead, repayments flex with your card turnover, meaning you pay more when business is busy and less during quieter periods.",
    },
    {
      question: "Who can use a merchant cash advance?",
      answer: "Businesses that process regular card payments are typically eligible. This includes restaurants, cafes, retail shops, salons, pubs, hotels, and other businesses with consistent card transaction volumes. Most providers require a minimum monthly card turnover to qualify.",
    },
    {
      question: "How are repayments made?",
      answer: "Repayments are taken automatically as a small percentage of your daily or weekly card transactions. This means repayments adjust in line with your trading activity. There are no fixed monthly instalments, which can help with cash flow management during quieter trading periods.",
    },
    {
      question: "How much can I borrow with a merchant cash advance?",
      answer: "The amount available is typically based on your average monthly card turnover. Most providers offer advances ranging from a few thousand pounds to several hundred thousand, depending on your card processing volume and trading history.",
    },
    {
      question: "How quickly can a merchant cash advance be arranged?",
      answer: "Merchant cash advances can often be approved and funded within a few days, sometimes faster. The process is generally straightforward because approval is based primarily on card transaction data rather than traditional credit assessments.",
    },
  ],
  "asset-finance": [
    {
      question: "What is asset finance?",
      answer: "Asset finance allows businesses to acquire equipment, machinery, vehicles, or technology while spreading the cost over time through manageable monthly payments. Rather than paying the full cost upfront, businesses can preserve their working capital and invest in growth while using the assets they need.",
    },
    {
      question: "What types of assets can be financed?",
      answer: "A wide range of business assets can be financed including vehicles, construction equipment, manufacturing machinery, IT hardware, catering equipment, medical equipment, agricultural machinery, printing equipment, and specialist industry tools. If the asset has a tangible value and a useful working life, it can usually be financed.",
    },
    {
      question: "Is asset finance suitable for growing businesses?",
      answer: "Yes. Asset finance is commonly used by growing businesses because it allows them to access the equipment they need without depleting cash reserves. This means the business can continue to invest in other areas while still acquiring essential assets.",
    },
    {
      question: "What is the difference between hire purchase and leasing?",
      answer: "With hire purchase, the business owns the asset once all payments have been made. With leasing, the business uses the asset for an agreed period and returns it at the end, with the option to upgrade. The right choice depends on whether you want to own the asset long term or prefer flexibility to upgrade regularly.",
    },
    {
      question: "Can I finance used or second-hand equipment?",
      answer: "Yes. Many asset finance providers will consider both new and used equipment, provided it has a reasonable remaining useful life. Financing used equipment can be a cost-effective way for businesses to access what they need at a lower overall cost.",
    },
    {
      question: "What deposit is required for asset finance?",
      answer: "Deposit requirements vary depending on the provider, the type of asset, and the financial profile of the business. Some providers offer zero-deposit options, while others may require a deposit of ten to twenty percent. We help find arrangements that suit your cash flow.",
    },
  ],
  "leasing-rental": [
    {
      question: "What is business leasing?",
      answer: "Leasing allows businesses to use equipment, vehicles, or technology for a fixed monthly payment over an agreed period instead of purchasing outright. At the end of the lease term, the business typically returns the asset, extends the lease, or upgrades to newer equipment. It provides flexibility without the commitment of ownership.",
    },
    {
      question: "What are the benefits of leasing equipment?",
      answer: "Leasing can reduce upfront costs, improve cash flow, allow businesses to access better equipment than they might otherwise afford, provide tax advantages in some cases, and make it easier to upgrade equipment regularly. It also avoids the risk of owning depreciating assets.",
    },
    {
      question: "Can businesses lease multiple items at once?",
      answer: "Yes. Many leasing solutions support businesses that require multiple pieces of equipment, vehicles, or technology items. Fleet leasing, for example, allows businesses to lease multiple vehicles under a single arrangement with consolidated billing and management.",
    },
    {
      question: "What happens at the end of a lease?",
      answer: "Options at the end of a lease typically include returning the equipment, extending the lease at a reduced rate, upgrading to newer equipment under a new agreement, or in some cases purchasing the asset at a residual value. The options available depend on the type of lease and the provider.",
    },
    {
      question: "Is leasing better than buying for my business?",
      answer: "It depends on your circumstances. Leasing is often better for businesses that want to preserve capital, need flexibility, or prefer to upgrade regularly. Buying may be preferable for assets that hold their value well or that the business plans to use for many years. We help you assess which approach makes more sense.",
    },
    {
      question: "What types of equipment can be leased?",
      answer: "Almost any business equipment can be leased, including vehicles, IT hardware and software, office equipment, catering and hospitality equipment, construction machinery, medical devices, and specialist industry tools. If it has a useful business purpose, there is usually a leasing option available.",
    },
  ],
  "vehicles-mobility": [
    {
      question: "What vehicle and fleet solutions does Q7 offer?",
      answer: "We help businesses access a range of vehicle and mobility solutions including business car leasing, van and commercial vehicle finance, electric vehicle options, delivery and courier vehicles, fleet management solutions, and micro-mobility options such as electric bikes and mopeds for urban operations.",
    },
    {
      question: "Can businesses lease electric vehicles?",
      answer: "Yes. Electric vehicle leasing is becoming increasingly popular as businesses look to reduce running costs and environmental impact. We help businesses explore electric options including cars, vans, and delivery vehicles, and understand the cost savings compared to traditional fuel vehicles.",
    },
    {
      question: "What businesses benefit from fleet solutions?",
      answer: "Any business that operates multiple vehicles can benefit from fleet solutions. This includes delivery and courier companies, service businesses with mobile teams, construction companies, sales teams, and businesses with pool vehicles. Fleet solutions can reduce costs through bulk arrangements and simplify vehicle management.",
    },
    {
      question: "How does vehicle finance work for businesses?",
      answer: "Business vehicle finance typically works through either hire purchase, where the business owns the vehicle after all payments are made, or leasing, where the business uses the vehicle for an agreed period. Both options spread the cost into manageable monthly payments and avoid large upfront expenditure.",
    },
    {
      question: "What are micro-mobility solutions?",
      answer: "Micro-mobility solutions include electric bikes, e-mopeds, and electric scooters used for urban deliveries and short-distance business operations. They are particularly popular with delivery businesses, restaurants, and courier services operating in busy city environments where they offer speed, efficiency, and lower running costs.",
    },
    {
      question: "Can Q7 help with replacing an existing fleet?",
      answer: "Yes. We help businesses review their current fleet arrangements, assess whether their existing setup is still suitable, and organise replacements or upgrades. This can include transitioning to electric vehicles, switching finance providers, or restructuring fleet arrangements for better value.",
    },
  ],
  "tracking-protection": [
    {
      question: "What is vehicle tracking?",
      answer: "Vehicle tracking systems use GPS technology to allow businesses to monitor the real-time location and movement of vehicles in their fleet. Most systems also provide historical journey data, speed monitoring, mileage reports, and driver behaviour analytics. This helps businesses improve efficiency, reduce costs, and enhance security.",
    },
    {
      question: "Why is vehicle tracking useful for businesses?",
      answer: "Tracking systems help businesses improve route efficiency, reduce fuel costs, monitor driver behaviour, verify job completion times, improve customer service through accurate arrival estimates, reduce insurance premiums, and protect against theft or unauthorised use of vehicles.",
    },
    {
      question: "Can tracking systems be installed on multiple vehicles?",
      answer: "Yes. Most tracking solutions are designed for businesses operating fleets of any size, from a single vehicle to hundreds. Fleet tracking platforms provide a centralised dashboard where all vehicles can be monitored simultaneously, with alerts and reporting tools built in.",
    },
    {
      question: "What is Thatcham-approved tracking?",
      answer: "Thatcham-approved tracking devices meet the security standards set by the Motor Insurance Repair Research Centre. These systems are often required by insurers for high-value vehicles and can help reduce insurance premiums. Thatcham-approved trackers provide stolen vehicle recovery capabilities and are monitored around the clock.",
    },
    {
      question: "Do you provide CCTV and webcam solutions?",
      answer: "Yes. We help businesses access CCTV and webcam solutions for premises, vehicles, and assets. This includes dashcams for fleet vehicles, site security cameras, and remote monitoring systems. These solutions provide visual evidence, deter theft, and support health and safety compliance.",
    },
    {
      question: "How much does vehicle tracking cost?",
      answer: "Costs vary depending on the type of system, the number of vehicles, and the level of monitoring required. Basic tracking devices have a one-off installation cost plus a monthly subscription, while more advanced systems with real-time monitoring and alerts may carry higher ongoing fees. We help businesses find solutions that fit their budget.",
    },
  ],
  "banking-accounting": [
    {
      question: "Why is a business bank account important?",
      answer: "A dedicated business bank account separates company finances from personal finances, which is essential for accurate record keeping, tax compliance, and professional credibility. It also makes it easier to manage cash flow, track expenses, process payments, and apply for business funding when needed.",
    },
    {
      question: "What accounting software do businesses typically use?",
      answer: "Popular accounting software options for UK businesses include Xero, QuickBooks, FreeAgent, and Sage. The best choice depends on the size and complexity of your business. Most modern platforms offer features such as invoicing, expense tracking, bank reconciliation, VAT returns, and financial reporting.",
    },
    {
      question: "Can accounting software integrate with payment systems?",
      answer: "Yes. Most modern accounting platforms integrate directly with business bank accounts, card processing systems, and payment gateways. This allows transactions to be automatically recorded and reconciled, reducing manual data entry and improving the accuracy of your financial records.",
    },
    {
      question: "Do I need an accountant as well as accounting software?",
      answer: "For many small businesses, accounting software can handle day-to-day bookkeeping. However, having a qualified accountant is recommended for year-end accounts, tax planning, compliance with Companies House requirements, and strategic financial advice. We can help introduce you to suitable accountants if needed.",
    },
    {
      question: "What business credit card options are available?",
      answer: "Business credit cards can help manage expenses, improve cash flow, and track spending. Options range from basic cards with no annual fee to premium cards with rewards, cashback, and higher credit limits. The right card depends on your spending patterns and business needs.",
    },
    {
      question: "Can Q7 help with tax and compliance support?",
      answer: "Yes. We work with trusted partners who provide tax preparation, VAT registration and returns, payroll services, and Companies House compliance. We help connect businesses with the right support so financial obligations are met accurately and on time.",
    },
  ],
  "business-support": [
    {
      question: "What type of support do businesses need when growing?",
      answer: "Growing businesses often require support across several areas including finance and funding, payment systems, operational processes, technology, administration, legal and compliance, and strategic planning. The challenge is often knowing where to start and finding reliable partners. We help coordinate the right support around your specific needs.",
    },
    {
      question: "Can businesses access multiple services at once?",
      answer: "Yes. Many businesses work with us across several areas simultaneously. For example, a business might need funding, payment processing, and vehicle solutions at the same time. We coordinate everything through a single point of contact so you do not need to manage multiple providers independently.",
    },
    {
      question: "How do businesses choose the right solution?",
      answer: "Working with experienced advisors who understand different industries and business stages can help identify the services and financial solutions that best match your needs. We take the time to understand your business before recommending anything, ensuring suitability rather than pushing products.",
    },
    {
      question: "What is operational support?",
      answer: "Operational support covers practical assistance with the day-to-day running of a business. This can include process improvement, supplier management, logistics coordination, technology implementation, and general problem solving. We help connect businesses with the right operational support partners.",
    },
    {
      question: "Does Q7 charge for initial consultations?",
      answer: "There is no obligation and no charge for an initial conversation. We take the time to understand your business, discuss what you need, and explain how we can help before anything progresses further. This allows you to make an informed decision without pressure.",
    },
    {
      question: "How does Q7 differ from other business support providers?",
      answer: "Q7 acts as a single point of contact across multiple business services. Rather than dealing with separate providers for funding, payments, vehicles, and support, you work with one team that understands the full picture. This means better coordination, less duplication, and solutions that fit together properly.",
    },
  ],
};
