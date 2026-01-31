import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";
import { EnquiryForm } from "./EnquiryForm";
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
  { id: "business-funding", name: "Business Funding", href: "/business-funding" },
  { id: "payments-merchant", name: "Payments & Merchant Services", href: "/payments-merchant" },
  { id: "asset-finance", name: "Asset Finance", href: "/asset-finance" },
  { id: "leasing-rental", name: "Leasing and Rental", href: "/leasing-rental" },
  { id: "vehicles-mobility", name: "Vehicles & Fleet Solutions", href: "/vehicles-mobility" },
  { id: "tracking-protection", name: "Tracking and Protection", href: "/tracking-protection" },
  { id: "banking-accounting", name: "Banking and Accounting", href: "/banking-accounting" },
  { id: "business-support", name: "Business Support", href: "/business-support" },
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
  const [actionOpen, setActionOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [pendingService, setPendingService] = useState<{ id: string; name: string; href: string } | null>(null);
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

  const handleSelect = (service: { id: string; name: string; href: string }) => {
    onServiceSelect(service.id, service.name);
    setIsRotating(false);
    setOpen(false);
    setPendingService(service);
    setActionOpen(true);
  };

  const handleClick = () => {
    setIsRotating(false);
    setOpen(true);
  };

  const handleActionClose = () => {
    setActionOpen(false);
    setPendingService(null);
  };

  const ServiceList = (
    <div className="space-y-2">
      {intentServices.map((service) => (
        <button
          key={service.id}
          onClick={() => handleSelect(service)}
          className={cn(
            "w-full flex items-center justify-between p-3 md:p-4 rounded-lg border transition-all text-left min-h-[52px]",
            selectedService === service.id
              ? "border-accent bg-accent/5"
              : "border-card-border hover:border-accent"
          )}
        >
          <span className="font-medium text-heading text-sm md:text-base">{service.name}</span>
          {selectedService === service.id && (
            <Check className="h-5 w-5 text-accent" />
          )}
        </button>
      ))}
    </div>
  );

  const ActionDialog = pendingService && (
    <div className="space-y-4">
      <p className="text-muted-foreground text-sm">
        You selected <span className="font-medium text-heading">{pendingService.name}</span>. What would you like to do?
      </p>
      <div className="space-y-3">
        <Link
          to={pendingService.href}
          onClick={handleActionClose}
          className="w-full flex items-center justify-between p-3 md:p-4 rounded-lg border border-card-border hover:border-accent transition-all min-h-[52px] group"
        >
          <div>
            <span className="font-medium text-heading group-hover:text-accent transition-colors text-sm md:text-base">Understand more</span>
            <p className="text-xs text-muted-foreground mt-0.5">Learn about this solution</p>
          </div>
          <ArrowRight className="h-5 w-5 text-foreground/40 group-hover:text-accent transition-colors" />
        </Link>
        <EnquiryForm
          preSelectedCategory={pendingService.id}
          skipCategorySelection={true}
          preSelectedServiceName={pendingService.name}
          triggerClassName="w-full"
          customTrigger={
            <button
              className="w-full flex items-center justify-between p-3 md:p-4 rounded-lg border border-accent bg-accent/5 hover:bg-accent/10 transition-all min-h-[52px] group"
            >
              <div className="text-left">
                <span className="font-medium text-heading group-hover:text-accent transition-colors text-sm md:text-base">Get in touch</span>
                <p className="text-xs text-muted-foreground mt-0.5">Start your enquiry</p>
              </div>
              <MessageCircle className="h-5 w-5 text-accent" />
            </button>
          }
          onOpenChange={(isOpen) => {
            if (!isOpen) handleActionClose();
          }}
        />
      </div>
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
          <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto rounded-t-2xl bg-card">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-heading">What are you looking for?</SheetTitle>
            </SheetHeader>
            {ServiceList}
          </SheetContent>
        </Sheet>
        <Sheet open={actionOpen} onOpenChange={setActionOpen}>
          <SheetContent side="bottom" className="rounded-t-2xl bg-card">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-heading">Next steps</SheetTitle>
            </SheetHeader>
            {ActionDialog}
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
        <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto shadow-xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-heading">What are you looking for?</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {ServiceList}
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={actionOpen} onOpenChange={setActionOpen}>
        <DialogContent className="sm:max-w-md shadow-xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-heading">Next steps</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {ActionDialog}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};