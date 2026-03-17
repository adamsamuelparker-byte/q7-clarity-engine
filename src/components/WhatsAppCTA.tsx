import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppCTAProps {
  text?: string;
  className?: string;
  showIcon?: boolean;
  variant?: "default" | "contact" | "service";
}

const WHATSAPP_LINK = "https://wa.me/447378375160?text=Hi%20I%20am%20getting%20in%20touch%20from%20your%20website";

export const WhatsAppCTA = ({ 
  text = "Or chat to us on WhatsApp",
  className,
  showIcon = true,
  variant = "default"
}: WhatsAppCTAProps) => {
  const variantText = {
    default: "Or chat to us on WhatsApp",
    contact: "Prefer a quick reply? Chat to us on WhatsApp",
    service: "Questions? Chat to us on WhatsApp"
  };

  const displayText = text === "Or chat to us on WhatsApp" ? variantText[variant] : text;

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm font-medium",
        "animate-fade-in",
        className
      )}
      style={{ animationDelay: "400ms" }}
    >
      {showIcon && <MessageCircle className="h-4 w-4" />}
      <span>{displayText}</span>
    </a>
  );
};
