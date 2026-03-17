import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSection } from "@/components/FAQSection";
import eskutaBikeImg from "@/assets/eskuta-delivery-bikes.png";

const whoThisIsFor = [
  "Restaurants offering delivery services",
  "Takeaway businesses",
  "Courier and logistics companies",
  "Delivery riders",
  "Last-mile delivery operators",
  "Businesses expanding delivery fleets",
];

const benefits = [
  "Lower upfront investment compared to purchasing vehicles",
  "Predictable monthly payments for easier budgeting",
  "Access to modern electric delivery vehicles",
  "Reduced fuel costs compared to petrol vehicles",
  "Flexible options for expanding delivery fleets",
  "Improved efficiency for last-mile deliveries",
];

const steps = [
  {
    number: "1",
    title: "Tell us about your needs",
    description: "Tell us about your delivery needs and the type of vehicles your business requires.",
  },
  {
    number: "2",
    title: "We review options",
    description: "We review available leasing options and match suitable providers for your business.",
  },
  {
    number: "3",
    title: "Start delivering",
    description: "Once approved, you can begin using electric mopeds or bikes to support your delivery operations.",
  },
];

const faqs = [
  {
    question: "What businesses can lease delivery bikes?",
    answer: "Restaurants, takeaway businesses, courier companies and delivery services can all benefit from electric bike and moped leasing solutions.",
  },
  {
    question: "Are electric delivery bikes suitable for busy city areas?",
    answer: "Yes. Electric bikes and mopeds are ideal for urban environments because they are efficient, easy to manoeuvre and well suited to last-mile deliveries.",
  },
  {
    question: "Can businesses lease multiple bikes for a fleet?",
    answer: "Many leasing providers offer solutions for businesses that want to build or expand a delivery fleet with multiple electric bikes or mopeds.",
  },
];

const EMopedEBikePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-section-primary">
      <div className="hero-wrapper">
        <Header transparent />
        <section className="text-primary-foreground py-10 md:py-16 lg:py-20">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto md:mx-0 md:ml-[8%] lg:ml-[12%]">
              <h1 className="text-primary-foreground animate-slide-up">
                E-Moped & E-Bike Leasing for Delivery Businesses
              </h1>
              <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed animate-slide-up max-w-xl" style={{ animationDelay: "60ms" }}>
                Electric mopeds and delivery bikes are becoming an essential part of modern delivery operations. Restaurants, takeaway businesses and courier services are increasingly using electric vehicles to improve efficiency while reducing running costs.
              </p>
              <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed animate-slide-up max-w-xl mt-4" style={{ animationDelay: "100ms" }}>
                E-moped and e-bike leasing allows businesses to access reliable delivery vehicles without the large upfront investment required to purchase them outright.
              </p>
            </div>
          </div>
        </section>
      </div>

      <main className="flex-1">
        {/* What Is It */}
        <section className="section-padding section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2>What Is E-Moped & E-Bike Leasing</h2>
              <p>
                E-moped and e-bike leasing provides businesses with access to electric delivery vehicles through affordable monthly payments rather than a large one-off purchase.
              </p>
              <p>
                This approach allows restaurants, takeaway businesses and delivery companies to operate efficient delivery fleets while managing cash flow more effectively.
              </p>
              <p>
                Electric delivery bikes are particularly well suited to urban environments where fast and reliable last-mile delivery is essential.
              </p>
              <p>
                Leasing can include individual bikes for smaller businesses or multiple vehicles for companies building larger delivery fleets.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Who This Is For */}
        <section className="section-padding section-primary">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2>Who This Service Is For</h2>
              <p>
                E-moped and e-bike leasing solutions are designed for businesses that rely on regular deliveries. This includes:
              </p>
              <ul className="space-y-3 mb-6">
                {whoThisIsFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Electric delivery bikes are ideal for businesses operating in busy towns and cities where efficient and cost-effective transport is essential.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Benefits */}
        <section className="section-padding section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2>Benefits of Leasing Electric Delivery Bikes</h2>
              <p>Leasing electric delivery bikes can provide several advantages for businesses.</p>
              <ul className="space-y-3 mb-6">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Electric mopeds and bikes can help businesses manage delivery demand while maintaining reliable service for customers.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Eskuta Section */}
        <section className="section-padding section-primary">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2>Electric Delivery Bikes from Eskuta</h2>
              <p>
                Electric delivery bikes from Eskuta are designed specifically for businesses operating in the takeaway and delivery industries.
              </p>
              <p>
                Eskuta vehicles are built to support last-mile delivery operations and are well suited to restaurants, courier companies and delivery riders working in urban environments.
              </p>
              <p>
                These electric vehicles offer a practical and efficient solution for businesses that need reliable delivery transport while reducing running costs and emissions.
              </p>
              <p>
                Leasing solutions may be available for businesses looking to introduce electric delivery vehicles into their operations or expand an existing fleet.
              </p>
            </div>
            <div className="mt-8">
              <img 
                src="/src/assets/eskuta-delivery-bikes.png" 
                alt="Eskuta electric delivery bike for business use" 
                className="w-full max-w-xl rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* How It Works */}
        <section className="section-padding section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2>How E-Moped & E-Bike Leasing Works</h2>
              <div className="space-y-8 mt-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQs */}
        <FAQSection
          title="E-Moped & E-Bike Leasing FAQs"
          faqs={faqs}
        />

        <div className="section-divider" />

        {/* Closing */}
        <section className="section-padding section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2>Supporting Delivery Businesses</h2>
              <p>
                Electric mopeds and bikes are helping many businesses modernise their delivery operations. With flexible leasing options and efficient electric vehicles, businesses can expand delivery services while managing costs more effectively.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground relative">
          <div className="container-md text-center relative z-10">
            <h2 className="text-primary-foreground mb-3">
              Interested in e-moped or e-bike leasing?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto leading-relaxed">
              Get in touch to discuss your delivery vehicle requirements.
            </p>
            <div className="flex flex-col items-center" data-cta="primary">
              <EnquiryForm
                preSelectedCategory="vehicles-mobility"
                triggerVariant="hero"
                triggerSize="lg"
                triggerText="Start Your Enquiry"
              />
              <p className="text-xs text-primary-foreground/40 mt-3">
                No obligation. We'll help you understand your options.
              </p>
              <div className="mt-4">
                <WhatsAppCTA variant="service" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default EMopedEBikePage;
