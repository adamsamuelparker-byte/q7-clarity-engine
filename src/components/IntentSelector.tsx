import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export const intentServices = [
  { id: "business-funding", name: "Business Funding" },
  { id: "card-machines", name: "Card Machines" },
  { id: "epos-systems", name: "EPOS Systems" },
  { id: "vehicle-finance", name: "Vehicle Finance" },
  { id: "electric-bikes", name: "Electric Bikes" },
  { id: "branded-vehicles", name: "Branded Vehicles" },
  { id: "vehicle-leasing-rental", name: "Vehicle Leasing and Rental" },
  { id: "vehicle-tracking", name: "Vehicle Tracking" },
  { id: "webcams-cctv", name: "Webcams and CCTV" },
  { id: "business-bank-accounts", name: "Business Bank Accounts" },
  { id: "accounting-services", name: "Accounting Services" },
  { id: "not-sure", name: "I'm Not Sure Yet" },
  { id: "general-enquiry", name: "General Enquiry" },
];

interface IntentSelectorProps {
  selectedService: string | null;
  onServiceSelect: (serviceId: string, serviceName: string) => void;
}

export const IntentSelector = ({
  selectedService,
  onServiceSelect,
}: IntentSelectorProps) => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const selectedServiceName = selectedService
    ? intentServices.find((s) => s.id === selectedService)?.name
    : null;

  const handleSelect = (serviceId: string, serviceName: string) => {
    onServiceSelect(serviceId, serviceName);
    setOpen(false);
  };

  const SelectorButton = (
    <button
      onClick={() => setOpen(true)}
      className="w-full bg-background text-foreground rounded-lg px-5 py-4 flex items-center justify-between gap-3 cursor-pointer transition-all hover:bg-background/95"
    >
      <span className="text-left">
        <span className="text-muted-foreground">I'm looking for… </span>
        {selectedServiceName && (
          <span className="font-medium">{selectedServiceName}</span>
        )}
      </span>
      <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
    </button>
  );

  const ServiceList = (
    <div className="space-y-2">
      {intentServices.map((service) => (
        <button
          key={service.id}
          onClick={() => handleSelect(service.id, service.name)}
          className={cn(
            "w-full flex items-center justify-between p-4 rounded-md border transition-all text-left",
            selectedService === service.id
              ? "border-accent bg-accent/5"
              : "border-border hover:border-muted-foreground/30"
          )}
        >
          <span className="font-medium">{service.name}</span>
          {selectedService === service.id && (
            <Check className="h-5 w-5 text-accent" />
          )}
        </button>
      ))}
    </div>
  );

  // Mobile: use bottom sheet
  if (isMobile) {
    return (
      <>
        {SelectorButton}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto rounded-t-2xl">
            <SheetHeader className="mb-4">
              <SheetTitle>What are you looking for?</SheetTitle>
            </SheetHeader>
            {ServiceList}
          </SheetContent>
        </Sheet>
      </>
    );
  }

  // Desktop: use dialog
  return (
    <>
      {SelectorButton}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>What are you looking for?</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {ServiceList}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
