import { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";

const coreCategories = [
  { id: "business-funding", name: "Business Funding" },
  { id: "payments-merchant", name: "Payments and Merchant Solutions" },
  { id: "asset-finance", name: "Asset Finance" },
  { id: "leasing-rental", name: "Leasing and Rental" },
  { id: "vehicles-mobility", name: "Vehicles and Mobility" },
  { id: "tracking-protection", name: "Tracking and Protection" },
  { id: "banking-accounting", name: "Banking and Accounting Services" },
  { id: "business-support", name: "Business Support Services" },
  { id: "general", name: "General enquiry" },
  { id: "not-sure", name: "I'm not sure yet" },
];

const subProducts: Record<string, { id: string; name: string }[]> = {
  "business-funding": [
    { id: "secured-business-loans", name: "Secured Business Loans" },
    { id: "working-capital", name: "Working Capital" },
    { id: "emergency-funding", name: "Emergency Funding" },
    { id: "refinancing", name: "Refinancing" },
    { id: "not-sure", name: "I'm not sure yet" },
  ],
  "payments-merchant": [
    { id: "ecommerce-payments", name: "Ecommerce Payments" },
    { id: "merchant-accounts", name: "Merchant Accounts" },
    { id: "not-sure", name: "I'm not sure yet" },
  ],
  "asset-finance": [
    { id: "equipment-finance", name: "Equipment Finance" },
    { id: "technology-finance", name: "Technology Finance" },
    { id: "not-sure", name: "I'm not sure yet" },
  ],
  "leasing-rental": [
    { id: "vehicle-leasing", name: "Vehicle Leasing" },
    { id: "fleet-leasing", name: "Fleet Leasing" },
    { id: "short-term-rental", name: "Short Term Rental" },
    { id: "not-sure", name: "I'm not sure yet" },
  ],
  "vehicles-mobility": [
    { id: "electric-vehicles", name: "Electric Vehicles" },
    { id: "delivery-courier-vehicles", name: "Delivery and Courier Vehicles" },
    { id: "not-sure", name: "I'm not sure yet" },
  ],
  "tracking-protection": [
    { id: "asset-tracking", name: "Asset Tracking" },
    { id: "asset-recovery", name: "Asset Recovery" },
    { id: "not-sure", name: "I'm not sure yet" },
  ],
  "banking-accounting": [
    { id: "business-credit-cards", name: "Business Credit Cards" },
    { id: "tax-compliance-support", name: "Tax and Compliance Support" },
    { id: "not-sure", name: "I'm not sure yet" },
  ],
  "business-support": [
    { id: "operational-support", name: "Operational Support" },
    { id: "partner-introductions", name: "Partner Introductions" },
    { id: "not-sure", name: "I'm not sure yet" },
  ],
};

const turnoverBands = [
  "Under £50,000",
  "£50,000 - £100,000",
  "£100,000 - £250,000",
  "£250,000 - £500,000",
  "£500,000 - £1,000,000",
  "£1,000,000 - £5,000,000",
  "Over £5,000,000",
];

interface EnquiryFormProps {
  preSelectedCategory?: string;
  preSelectedSubProduct?: string;
  preSelectedService?: string;
  preSelectedServiceName?: string;
  isGeneralEnquiry?: boolean;
  triggerClassName?: string;
  triggerVariant?: "accent" | "hero" | "hero-outline" | "accent-outline";
  triggerSize?: "default" | "lg" | "xl";
  triggerText?: string;
  customTrigger?: ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export const EnquiryForm = ({
  preSelectedCategory,
  preSelectedSubProduct,
  preSelectedService,
  preSelectedServiceName,
  isGeneralEnquiry = false,
  triggerClassName,
  triggerVariant = "accent",
  triggerSize = "lg",
  triggerText = "Get Started",
  customTrigger,
  onOpenChange,
}: EnquiryFormProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    onOpenChange?.(newOpen);
  };
  
  // Determine initial categories based on props
  const getInitialCategories = () => {
    if (isGeneralEnquiry) return ["general"];
    if (preSelectedService) {
      // Map intent services to categories where applicable
      const serviceToCategory: Record<string, string> = {
        "business-funding": "business-funding",
        "payments-merchant": "payments-merchant",
        "asset-finance": "asset-finance",
        "leasing-rental": "leasing-rental",
        "vehicles-mobility": "vehicles-mobility",
        "tracking-protection": "tracking-protection",
        "banking-accounting": "banking-accounting",
        "business-support": "business-support",
        "not-sure": "not-sure",
        "general-enquiry": "general",
      };
      const category = serviceToCategory[preSelectedService];
      return category ? [category] : [];
    }
    if (preSelectedCategory) return [preSelectedCategory];
    return [];
  };

  const [selectedCategories, setSelectedCategories] = useState<string[]>(getInitialCategories);
  const [selectedSubProducts, setSelectedSubProducts] = useState<string[]>(
    preSelectedSubProduct ? [preSelectedSubProduct] : []
  );
  const [formData, setFormData] = useState({
    companyName: "",
    turnover: "",
    email: "",
    phone: "",
    notes: preSelectedServiceName ? `Interested in: ${preSelectedServiceName}` : "",
  });

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleSubProduct = (subProductId: string) => {
    setSelectedSubProducts((prev) =>
      prev.includes(subProductId)
        ? prev.filter((id) => id !== subProductId)
        : [...prev, subProductId]
    );
  };

  const getAvailableSubProducts = () => {
    const products: { id: string; name: string; category: string }[] = [];
    selectedCategories.forEach((catId) => {
      if (subProducts[catId]) {
        subProducts[catId].forEach((sub) => {
          products.push({ ...sub, category: catId });
        });
      }
    });
    return products;
  };

  const handleSubmit = () => {
    // In a real implementation, this would submit to a backend
    console.log({
      categories: selectedCategories,
      subProducts: selectedSubProducts,
      ...formData,
      pageUrl: window.location.href,
      timestamp: new Date().toISOString(),
    });
    handleOpenChange(false);
    navigate("/thank-you");
  };

  const canProceedStep1 = selectedCategories.length > 0;
  const canProceedStep2 = true; // Sub-products are optional
  const canSubmit =
    formData.companyName && formData.turnover && formData.email && formData.phone;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {customTrigger || (
          <Button 
            variant={triggerVariant} 
            size={triggerSize}
            className={triggerClassName}
          >
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-xl text-heading">
            {step === 1 && "What are you looking for?"}
            {step === 2 && "Any specific products?"}
            {step === 3 && "Your details"}
          </DialogTitle>
          {/* Progress indicator */}
          <div className="flex items-center gap-2 pt-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors duration-300",
                  s <= step ? "bg-accent" : "bg-muted"
                )}
              />
            ))}
          </div>
        </DialogHeader>

        <div className="mt-6">
          {/* Step 1: Category Selection */}
          {step === 1 && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-4">
                Select all that apply
              </p>
              {coreCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-200 text-left min-h-[56px]",
                    selectedCategories.includes(category.id)
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/50"
                  )}
                >
                  <span className="font-medium text-heading">{category.name}</span>
                  {selectedCategories.includes(category.id) && (
                    <Check className="h-5 w-5 text-accent" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Sub-product Selection */}
          {step === 2 && (
            <div className="space-y-3">
              {getAvailableSubProducts().length > 0 ? (
                <>
                  <p className="text-sm text-muted-foreground mb-4">
                    Optional: Select specific products you're interested in
                  </p>
                  {getAvailableSubProducts().map((product) => (
                    <button
                      key={`${product.category}-${product.id}`}
                      onClick={() => toggleSubProduct(`${product.category}-${product.id}`)}
                      className={cn(
                        "w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-200 text-left min-h-[56px]",
                        selectedSubProducts.includes(`${product.category}-${product.id}`)
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      )}
                    >
                      <span className="font-medium text-heading">{product.name}</span>
                      {selectedSubProducts.includes(`${product.category}-${product.id}`) && (
                        <Check className="h-5 w-5 text-accent" />
                      )}
                    </button>
                  ))}
                </>
              ) : (
                <p className="text-sm text-muted-foreground py-8 text-center">
                  No specific products available for your selection. You can proceed to the next step.
                </p>
              )}
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  placeholder="Your company name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="turnover">Annual Turnover *</Label>
                <Select
                  value={formData.turnover}
                  onValueChange={(value) =>
                    setFormData({ ...formData, turnover: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select turnover band" />
                  </SelectTrigger>
                  <SelectContent>
                    {turnoverBands.map((band) => (
                      <SelectItem key={band} value={band}>
                        {band}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Any additional information..."
                  rows={3}
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
          {step > 1 ? (
            <Button
              variant="ghost"
              onClick={() => setStep(step - 1)}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <Button
              variant="accent"
              onClick={() => setStep(step + 1)}
              disabled={step === 1 && !canProceedStep1}
              className="gap-2"
            >
              Continue
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant="accent"
              onClick={handleSubmit}
              disabled={!canSubmit}
            >
              Submit Enquiry
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};