import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ArrowRight } from "lucide-react";

interface LoanSliderHeroProps {
  onGetStarted: (amount: number) => void;
}

export const LoanSliderHero = ({ onGetStarted }: LoanSliderHeroProps) => {
  const [loanAmount, setLoanAmount] = useState(50000);
  
  const minAmount = 10000;
  const maxAmount = 200000;
  const step = 5000;
  
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

  const handleDecrement = () => {
    setLoanAmount((prev) => Math.max(minAmount, prev - step));
  };

  const handleIncrement = () => {
    setLoanAmount((prev) => Math.min(maxAmount, prev + step));
  };

  return (
    <section className="text-primary-foreground pt-3 pb-6 sm:pt-4 sm:pb-8 md:pt-5 md:pb-10">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Opening Sentence - Two line structure */}
        <h1 
          className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight mb-1 animate-slide-up"
          style={{ color: 'hsl(0, 0%, 100%)' }}
        >
          Looking for business funding?
          <br />
          <span>Find out what options may be available in </span>
          <span style={{ color: 'hsl(340, 75%, 55%)' }}>minutes</span>
        </h1>
        
        {/* Supporting Line */}
        <p 
          className="text-sm sm:text-base mb-4 animate-slide-up"
          style={{ color: 'hsla(0, 0%, 100%, 0.7)', animationDelay: "40ms" }}
        >
          From £10,000 to £200,000 plus. No obligation.
        </p>
        
        {/* Slider Card */}
        <div 
          className="rounded-lg p-5 sm:p-6 md:p-8 mb-4 animate-slide-up"
          style={{ 
            backgroundColor: 'hsl(0, 0%, 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            animationDelay: "80ms"
          }}
        >
          {/* Card Title */}
          <p 
            className="text-sm font-medium mb-2 uppercase tracking-wider"
            style={{ color: 'hsl(220, 12%, 50%)' }}
          >
            How much funding do you need?
          </p>
          
          {/* Loan Amount Display - Focal Point */}
          <div 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ color: 'hsl(220, 45%, 18%)' }}
          >
            {formatCurrency(loanAmount)}
          </div>
          
          {/* Slider with Plus/Minus Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Minus Button */}
            <button
              type="button"
              onClick={handleDecrement}
              disabled={loanAmount <= minAmount}
              className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors disabled:opacity-40 hover:bg-[hsl(220,45%,14%)]"
              style={{ 
                backgroundColor: 'hsl(220, 45%, 18%)',
              }}
              aria-label="Decrease amount"
            >
              <Minus className="w-5 h-5 text-white" />
            </button>
            
            {/* Slider */}
            <div className="flex-1">
              <Slider
                value={[loanAmount]}
                onValueChange={handleSliderChange}
                min={minAmount}
                max={maxAmount}
                step={step}
                className="w-full [&_[data-orientation=horizontal]]:h-3 [&_.relative]:h-3"
              />
            </div>
            
            {/* Plus Button */}
            <button
              type="button"
              onClick={handleIncrement}
              disabled={loanAmount >= maxAmount}
              className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors disabled:opacity-40 hover:bg-[hsl(220,45%,14%)]"
              style={{ 
                backgroundColor: 'hsl(220, 45%, 18%)',
              }}
              aria-label="Increase amount"
            >
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
          
          {/* Min/Max Labels */}
          <div className="flex justify-between mt-2 px-12 sm:px-14 text-xs sm:text-sm" style={{ color: 'hsl(220, 12%, 50%)' }}>
            <span>£10,000</span>
            <span>£200,000+</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="animate-slide-up" style={{ animationDelay: "120ms" }}>
          <Button
            onClick={() => onGetStarted(loanAmount)}
            size="lg"
            className="group text-lg font-bold px-12 py-4 h-auto gap-2"
            style={{
              backgroundColor: 'hsl(340, 75%, 55%)',
              color: 'hsl(0, 0%, 100%)',
            }}
          >
            Get started
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </Button>
          
          {/* Reassurance Text - Two Lines */}
          <div className="mt-4 space-y-0.5">
            <p 
              className="text-sm"
              style={{ color: 'hsla(0, 0%, 100%, 0.6)' }}
            >
              No obligation. No upfront fees.
            </p>
            <p 
              className="text-sm"
              style={{ color: 'hsla(0, 0%, 100%, 0.6)' }}
            >
              Speak directly with our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
