import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface LoanSliderHeroProps {
  onGetStarted: (amount: number) => void;
}

export const LoanSliderHero = ({ onGetStarted }: LoanSliderHeroProps) => {
  const [loanAmount, setLoanAmount] = useState(50000);
  
  // Slider goes from 10k to 200k
  const minAmount = 10000;
  const maxAmount = 200000;
  
  const formatCurrency = (amount: number) => {
    if (amount >= maxAmount) {
      return "£200,000+";
    }
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleSliderChange = (value: number[]) => {
    setLoanAmount(value[0]);
  };

  return (
    <section className="text-primary-foreground pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Headline */}
        <h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 animate-slide-up"
          style={{ color: 'hsl(0, 0%, 100%)' }}
        >
          Business Loans
        </h1>
        
        <p 
          className="text-base sm:text-lg mb-8 animate-slide-up"
          style={{ color: 'hsla(0, 0%, 100%, 0.7)', animationDelay: "40ms" }}
        >
          Quick and simple business funding solutions.
        </p>
        
        {/* Slider Card */}
        <div 
          className="rounded-lg p-6 sm:p-8 md:p-10 mb-8 animate-slide-up"
          style={{ 
            backgroundColor: 'hsl(0, 0%, 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            animationDelay: "80ms"
          }}
        >
          {/* Loan Amount Display - Focal Point */}
          <div className="mb-8">
            <p 
              className="text-sm font-medium mb-3 uppercase tracking-wider"
              style={{ color: 'hsl(220, 12%, 50%)' }}
            >
              How much do you need?
            </p>
            <div 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ color: 'hsl(220, 45%, 18%)' }}
            >
              {formatCurrency(loanAmount)}
            </div>
          </div>
          
          {/* Slider */}
          <div className="px-2 sm:px-4">
            <Slider
              value={[loanAmount]}
              onValueChange={handleSliderChange}
              min={minAmount}
              max={maxAmount}
              step={5000}
              className="w-full [&_[data-orientation=horizontal]]:h-3 [&_.relative]:h-3"
            />
            <div className="flex justify-between mt-3 text-xs sm:text-sm" style={{ color: 'hsl(220, 12%, 50%)' }}>
              <span>£10,000</span>
              <span>£200,000+</span>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="animate-slide-up" style={{ animationDelay: "120ms" }}>
          <Button
            onClick={() => onGetStarted(loanAmount)}
            size="lg"
            className="text-base font-semibold px-10 py-6 h-auto"
            style={{
              backgroundColor: 'hsl(195, 65%, 28%)',
              color: 'hsl(0, 0%, 100%)',
            }}
          >
            Get started
          </Button>
          
          {/* Reassurance Text */}
          <p 
            className="text-sm mt-4"
            style={{ color: 'hsla(0, 0%, 100%, 0.5)' }}
          >
            No obligation. No upfront fees. Speak directly with our team.
          </p>
        </div>
      </div>
    </section>
  );
};
