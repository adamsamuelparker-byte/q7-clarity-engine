import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface QuickEnquiryFormProps {
  loanAmount: number;
}

const purposeOptions = [
  { id: "cash-flow", label: "Cash flow" },
  { id: "asset-finance", label: "Asset finance" },
  { id: "equipment", label: "Equipment" },
  { id: "stock-purchase", label: "Stock purchase" },
  { id: "invoice-finance", label: "Invoice finance" },
  { id: "other", label: "Other" },
];

const cardPaymentOptions = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
];

const cardVolumeOptions = [
  { id: "0-1000", label: "£0 to £1,000" },
  { id: "1000-5000", label: "£1,000 to £5,000" },
  { id: "5000-20000", label: "£5,000 to £20,000" },
  { id: "20000-plus", label: "£20,000+" },
];

const residentialOptions = [
  { id: "homeowner", label: "Homeowner" },
  { id: "tenant", label: "Tenant" },
  { id: "other", label: "Other" },
];

const tradingTimeOptions = [
  { id: "less-6-months", label: "Less than 6 months" },
  { id: "6-12-months", label: "6 to 12 months" },
  { id: "1-2-years", label: "1 to 2 years" },
  { id: "2-plus-years", label: "2+ years" },
];

const businessTypeOptions = [
  { id: "sole-trader", label: "Sole trader" },
  { id: "limited-company", label: "Limited company" },
  { id: "partnership", label: "Partnership" },
];

export const QuickEnquiryForm = ({ loanAmount }: QuickEnquiryFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [purpose, setPurpose] = useState("");
  const [acceptsCards, setAcceptsCards] = useState("");
  const [cardVolume, setCardVolume] = useState("");
  const [residentialStatus, setResidentialStatus] = useState("");
  const [tradingTime, setTradingTime] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [contactDetails, setContactDetails] = useState({
    fullName: "",
    businessName: "",
    email: "",
    mobile: "",
  });

  const totalSteps = 8;

  const formatCurrency = (amount: number) => {
    if (amount >= 200000) {
      return "£200,000+";
    }
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return !!purpose;
      case 2: return !!acceptsCards;
      case 3: return acceptsCards === "no" || !!cardVolume;
      case 4: return !!residentialStatus;
      case 5: return !!tradingTime;
      case 6: return !!businessType;
      case 7: return !!(contactDetails.fullName && contactDetails.businessName);
      case 8: return !!(contactDetails.email && contactDetails.mobile);
      default: return false;
    }
  };

  const handleNext = () => {
    // Skip card volume step if they don't accept cards
    if (step === 2 && acceptsCards === "no") {
      setStep(4);
    } else if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    // Skip card volume step when going back if they don't accept cards
    if (step === 4 && acceptsCards === "no") {
      setStep(2);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const notes = [
      `Loan Amount: ${formatCurrency(loanAmount)}`,
      `Purpose: ${purposeOptions.find(o => o.id === purpose)?.label || purpose}`,
      `Accepts Card Payments: ${acceptsCards}`,
      acceptsCards === "yes" ? `Card Volume: ${cardVolumeOptions.find(o => o.id === cardVolume)?.label || cardVolume}` : null,
      `Residential Status: ${residentialOptions.find(o => o.id === residentialStatus)?.label || residentialStatus}`,
      `Time Trading: ${tradingTimeOptions.find(o => o.id === tradingTime)?.label || tradingTime}`,
      `Business Type: ${businessTypeOptions.find(o => o.id === businessType)?.label || businessType}`,
    ].filter(Boolean).join("\n");

    try {
      const { error: dbError } = await supabase.from('leads').insert({
        company_name: contactDetails.businessName,
        email: contactDetails.email,
        phone: contactDetails.mobile,
        turnover: "Quick form - see notes",
        categories: ["business-funding"],
        sub_products: [],
        notes: `Full Name: ${contactDetails.fullName}\n${notes}`,
        page_url: window.location.href,
      });

      if (dbError) {
        console.error("Database error:", dbError);
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-lead-notification', {
        body: {
          companyName: contactDetails.businessName,
          email: contactDetails.email,
          phone: contactDetails.mobile,
          turnover: "Quick form - see notes",
          categories: ["business-funding"],
          subProducts: [],
          notes: `Full Name: ${contactDetails.fullName}\n${notes}`,
          pageUrl: window.location.href,
        },
      });

      if (emailError) {
        console.error("Email error:", emailError);
      }

      navigate("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "There was an issue submitting your enquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const OptionButton = ({ 
    selected, 
    onClick, 
    children 
  }: { 
    selected: boolean; 
    onClick: () => void; 
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 text-left",
        selected
          ? "border-[hsl(195,65%,28%)] bg-[hsl(195,65%,28%)]/5"
          : "border-[hsl(220,15%,85%)] hover:border-[hsl(195,65%,28%)]/50 bg-white"
      )}
    >
      <span 
        className="font-medium text-base"
        style={{ color: 'hsl(220, 45%, 18%)' }}
      >
        {children}
      </span>
      {selected && (
        <Check className="h-5 w-5 flex-shrink-0" style={{ color: 'hsl(195, 65%, 28%)' }} />
      )}
    </button>
  );

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: 'hsl(220, 20%, 97%)' }}>
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <h2 
          className="text-xl sm:text-2xl font-semibold text-center mb-8"
          style={{ color: 'hsl(220, 45%, 18%)' }}
        >
          Tell us a little about your business
        </h2>

        {/* Progress Bar */}
        <div className="flex items-center gap-1 mb-8">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors duration-300",
                i + 1 <= step ? "bg-[hsl(195,65%,28%)]" : "bg-[hsl(220,15%,85%)]"
              )}
            />
          ))}
        </div>

        {/* Form Card */}
        <div 
          className="rounded-lg p-6 sm:p-8"
          style={{ 
            backgroundColor: 'hsl(0, 0%, 100%)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Step 1: Purpose */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'hsl(220, 45%, 18%)' }}
              >
                Purpose of loan
              </h3>
              <div className="space-y-3">
                {purposeOptions.map((option) => (
                  <OptionButton
                    key={option.id}
                    selected={purpose === option.id}
                    onClick={() => setPurpose(option.id)}
                  >
                    {option.label}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Card Payments */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'hsl(220, 45%, 18%)' }}
              >
                Does your business accept card payments?
              </h3>
              <div className="space-y-3">
                {cardPaymentOptions.map((option) => (
                  <OptionButton
                    key={option.id}
                    selected={acceptsCards === option.id}
                    onClick={() => setAcceptsCards(option.id)}
                  >
                    {option.label}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Card Volume (conditional) */}
          {step === 3 && acceptsCards === "yes" && (
            <div className="space-y-4">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'hsl(220, 45%, 18%)' }}
              >
                How much per month?
              </h3>
              <div className="space-y-3">
                {cardVolumeOptions.map((option) => (
                  <OptionButton
                    key={option.id}
                    selected={cardVolume === option.id}
                    onClick={() => setCardVolume(option.id)}
                  >
                    {option.label}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Residential Status */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'hsl(220, 45%, 18%)' }}
              >
                Residential status
              </h3>
              <div className="space-y-3">
                {residentialOptions.map((option) => (
                  <OptionButton
                    key={option.id}
                    selected={residentialStatus === option.id}
                    onClick={() => setResidentialStatus(option.id)}
                  >
                    {option.label}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Time Trading */}
          {step === 5 && (
            <div className="space-y-4">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'hsl(220, 45%, 18%)' }}
              >
                Time trading
              </h3>
              <div className="space-y-3">
                {tradingTimeOptions.map((option) => (
                  <OptionButton
                    key={option.id}
                    selected={tradingTime === option.id}
                    onClick={() => setTradingTime(option.id)}
                  >
                    {option.label}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Business Type */}
          {step === 6 && (
            <div className="space-y-4">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'hsl(220, 45%, 18%)' }}
              >
                Business type
              </h3>
              <div className="space-y-3">
                {businessTypeOptions.map((option) => (
                  <OptionButton
                    key={option.id}
                    selected={businessType === option.id}
                    onClick={() => setBusinessType(option.id)}
                  >
                    {option.label}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Name Details */}
          {step === 7 && (
            <div className="space-y-4">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'hsl(220, 45%, 18%)' }}
              >
                Your details
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" style={{ color: 'hsl(220, 45%, 18%)' }}>Full name</Label>
                  <Input
                    id="fullName"
                    value={contactDetails.fullName}
                    onChange={(e) => setContactDetails({ ...contactDetails, fullName: e.target.value })}
                    placeholder="Your full name"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessName" style={{ color: 'hsl(220, 45%, 18%)' }}>Business name</Label>
                  <Input
                    id="businessName"
                    value={contactDetails.businessName}
                    onChange={(e) => setContactDetails({ ...contactDetails, businessName: e.target.value })}
                    placeholder="Your business name"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 8: Contact Details */}
          {step === 8 && (
            <div className="space-y-4">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'hsl(220, 45%, 18%)' }}
              >
                Contact details
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" style={{ color: 'hsl(220, 45%, 18%)' }}>Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactDetails.email}
                    onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                    placeholder="your@email.com"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile" style={{ color: 'hsl(220, 45%, 18%)' }}>Mobile number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={contactDetails.mobile}
                    onChange={(e) => setContactDetails({ ...contactDetails, mobile: e.target.value })}
                    placeholder="Your mobile number"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[hsl(220,15%,90%)]">
            {step > 1 ? (
              <Button
                variant="ghost"
                onClick={handleBack}
                className="gap-2"
                style={{ color: 'hsl(220, 12%, 50%)' }}
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="gap-2 px-6"
                style={{
                  backgroundColor: canProceed() ? 'hsl(195, 65%, 28%)' : 'hsl(220, 15%, 85%)',
                  color: 'hsl(0, 0%, 100%)',
                }}
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="px-8"
                style={{
                  backgroundColor: canProceed() && !isSubmitting ? 'hsl(195, 65%, 28%)' : 'hsl(220, 15%, 85%)',
                  color: 'hsl(0, 0%, 100%)',
                }}
              >
                {isSubmitting ? "Submitting..." : "Check my options"}
              </Button>
            )}
          </div>

          {/* Reassurance for final step */}
          {step === totalSteps && (
            <p 
              className="text-center text-sm mt-4"
              style={{ color: 'hsl(220, 12%, 50%)' }}
            >
              No obligation. No upfront fees.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
