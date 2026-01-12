import { useState, useEffect, useRef } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const isMobile = useIsMobile();
  const rotationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Rotation interval - slower on mobile
  const rotationInterval = isMobile ? 4000 : 3500;

  // Get the display name - either selected service or rotating service
  const displayName = selectedService
    ? intentServices.find((s) => s.id === selectedService)?.name
    : intentServices[currentIndex].name;

  // Handle rotation
  useEffect(() => {
    if (!isRotating || selectedService || isHovered) {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
        rotationIntervalRef.current = null;
      }
      return;
    }

    rotationIntervalRef.current = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % intentServices.length);
        setIsFading(false);
      }, 200);
    }, rotationInterval);

    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
    };
  }, [isRotating, selectedService, isHovered, rotationInterval]);

  const handleSelect = (serviceId: string, serviceName: string) => {
    onServiceSelect(serviceId, serviceName);
    setIsRotating(false);
    setOpen(false);
  };

  const handleClick = () => {
    setIsRotating(false);
    setOpen(true);
  };

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

  const SelectorText = (
    <div className={cn(
      "inline-block rounded-full px-5 py-3",
      "bg-white/[0.06] border border-white/[0.08]",
      isMobile && "w-full"
    )}>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer group text-left",
          isMobile ? "text-base w-full justify-between" : "text-lg md:text-xl"
        )}
      >
        <span className="flex items-center gap-2 min-w-0">
          <span className="text-primary-foreground/50 whitespace-nowrap">I'm looking for…</span>
          <span 
            className={cn(
              "text-accent font-medium transition-opacity duration-200 truncate",
              isFading ? "opacity-0" : "opacity-100"
            )}
          >
            {displayName}
          </span>
        </span>
        <ChevronDown 
          className={cn(
            "h-4 w-4 text-accent flex-shrink-0 transition-transform duration-300",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
    </div>
  );

  // Mobile: use bottom sheet
  if (isMobile) {
    return (
      <>
        {SelectorText}
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
      {SelectorText}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto shadow-xl border-0">
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
