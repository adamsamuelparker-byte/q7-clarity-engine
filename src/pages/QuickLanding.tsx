import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoanSliderHero } from "@/components/LoanSliderHero";
import { TrustedLendersCarousel } from "@/components/TrustedLendersCarousel";
import { QuickEnquiryForm } from "@/components/QuickEnquiryForm";
import { EmergencyFundingBanner } from "@/components/EmergencyFundingBanner";

const QuickLanding = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = (amount: number) => {
    setLoanAmount(amount);
    setShowForm(true);
    // Scroll to form
    setTimeout(() => {
      const formSection = document.getElementById("quick-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-section-primary">
      {/* Hero wrapper - includes header for unified fade treatment */}
      <div className="hero-wrapper">
        <Header transparent />
        
        {/* Loan Slider Hero */}
        <LoanSliderHero onGetStarted={handleGetStarted} />
      </div>

      <main className="flex-1">
        {/* Trusted Lenders Carousel */}
        <TrustedLendersCarousel />

        {/* Multi-step Enquiry Form */}
        <div id="quick-form">
          <QuickEnquiryForm loanAmount={loanAmount} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuickLanding;
