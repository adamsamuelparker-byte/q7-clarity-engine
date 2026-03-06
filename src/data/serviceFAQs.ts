// FAQ data for all service categories

export interface FAQItem {
  question: string;
  answer: string;
}

export const serviceFAQs: Record<string, FAQItem[]> = {
  "business-funding": [
    {
      question: "What is business funding used for?",
      answer: "Business funding can be used for a wide range of purposes including growth, equipment purchases, managing cash flow, hiring staff or investing in new opportunities.",
    },
    {
      question: "How quickly can business funding be approved?",
      answer: "Approval times vary depending on the lender and the type of funding required, but many businesses can receive decisions within a short period once an application has been reviewed.",
    },
    {
      question: "Do I need perfect credit to apply for business funding?",
      answer: "Not always. Some funding options consider factors such as business performance and revenue alongside credit history.",
    },
  ],
  "emergency-funding": [
    {
      question: "What is emergency business funding?",
      answer: "Emergency funding is designed to provide businesses with fast access to capital when unexpected expenses or cash flow issues arise.",
    },
    {
      question: "How quickly can emergency funding be arranged?",
      answer: "In some cases, emergency funding can be approved much faster than traditional finance depending on the type of funding solution available.",
    },
    {
      question: "What can emergency funding be used for?",
      answer: "Businesses often use emergency funding to manage urgent costs such as supplier payments, payroll, equipment repairs or unexpected expenses.",
    },
  ],
  "payments-merchant": [
    {
      question: "What are card processing services?",
      answer: "Card processing services allow businesses to accept payments from customers using debit cards, credit cards and other digital payment methods.",
    },
    {
      question: "Do I need special equipment to accept card payments?",
      answer: "Many businesses use card terminals, mobile payment devices or online payment systems depending on how they operate.",
    },
    {
      question: "Can small businesses use merchant services?",
      answer: "Yes. Card processing solutions are available for businesses of all sizes, including small businesses, retailers, restaurants and service providers.",
    },
  ],
  "merchant-cash-advance": [
    {
      question: "What is a merchant cash advance?",
      answer: "A merchant cash advance provides businesses with funding that is repaid through a percentage of future card sales.",
    },
    {
      question: "Who can use a merchant cash advance?",
      answer: "Businesses that process regular card payments, such as restaurants, retailers and service providers, often use merchant cash advances.",
    },
    {
      question: "How are repayments made?",
      answer: "Repayments are usually taken automatically as a small percentage of daily or weekly card transactions.",
    },
  ],
  "asset-finance": [
    {
      question: "What is asset finance?",
      answer: "Asset finance allows businesses to acquire equipment, machinery or vehicles while spreading the cost over time through manageable payments.",
    },
    {
      question: "What types of assets can be financed?",
      answer: "Asset finance can be used for equipment, vehicles, machinery, technology and other business assets.",
    },
    {
      question: "Is asset finance suitable for growing businesses?",
      answer: "Yes. Many businesses use asset finance to obtain the equipment they need while preserving working capital.",
    },
  ],
  "leasing-rental": [
    {
      question: "What is business leasing?",
      answer: "Leasing allows businesses to use equipment or vehicles for a fixed monthly payment instead of purchasing them outright.",
    },
    {
      question: "What are the benefits of leasing equipment?",
      answer: "Leasing can reduce upfront costs, improve cash flow and allow businesses to upgrade equipment more easily.",
    },
    {
      question: "Can businesses lease multiple items at once?",
      answer: "Yes. Many leasing solutions support businesses that require multiple pieces of equipment or vehicles.",
    },
  ],
  "vehicles-mobility": [
    {
      question: "What businesses benefit from delivery bike leasing?",
      answer: "Restaurants, takeaway businesses, courier companies and delivery services can benefit from electric bike leasing solutions.",
    },
    {
      question: "Are electric delivery bikes cost effective?",
      answer: "Electric bikes can reduce fuel costs and maintenance expenses while improving delivery efficiency in busy urban areas.",
    },
    {
      question: "Can delivery businesses lease fleets of bikes?",
      answer: "Yes. Leasing solutions often support businesses that want to build or expand a delivery fleet.",
    },
  ],
  "tracking-protection": [
    {
      question: "What is vehicle tracking?",
      answer: "Vehicle tracking systems allow businesses to monitor the location and activity of vehicles in their fleet.",
    },
    {
      question: "Why is vehicle tracking useful for businesses?",
      answer: "Tracking systems can improve security, monitor driver activity and help businesses manage delivery routes more efficiently.",
    },
    {
      question: "Can tracking systems be installed on multiple vehicles?",
      answer: "Yes. Many solutions support businesses operating fleets of vehicles.",
    },
  ],
  "banking-accounting": [
    {
      question: "Why is a business bank account important?",
      answer: "A business bank account helps keep company finances separate from personal finances and supports better financial management.",
    },
    {
      question: "What accounting software do businesses use?",
      answer: "Many businesses use accounting software to manage invoices, track expenses and monitor financial performance.",
    },
    {
      question: "Can accounting software integrate with payment systems?",
      answer: "Yes. Many platforms allow integration with banking and payment systems to simplify financial management.",
    },
  ],
  "business-support": [
    {
      question: "What type of support do businesses need when growing?",
      answer: "Businesses often require support with finance, payment systems, equipment, technology and operational planning.",
    },
    {
      question: "Can businesses access multiple services at once?",
      answer: "Yes. Many businesses combine funding, payment solutions and operational support as they grow.",
    },
    {
      question: "How do businesses choose the right solution?",
      answer: "Working with experienced advisors can help businesses identify the services and financial solutions that best match their needs.",
    },
  ],
};
