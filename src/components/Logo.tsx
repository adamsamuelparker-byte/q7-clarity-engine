import { cn } from "@/lib/utils";
import logoImage from "@/assets/q7-logo.png";

interface LogoProps {
  showText?: boolean;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  variant?: "dark" | "light";
}

export const Logo = ({ 
  showText = true, 
  className,
  iconClassName,
  textClassName,
  variant = "dark"
}: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* Q7 Logo Symbol - Primary brand mark */}
      <img 
        src={logoImage}
        alt="Q7 Logo"
        className={cn(
          "h-20 w-auto",
          iconClassName
        )}
      />
      
      {/* Business Name - Plain, neutral text (not a wordmark) */}
      {showText && (
        <span className={cn(
          "text-[13px] font-normal text-foreground/80 hidden sm:block tracking-normal",
          textClassName
        )}>
          Q7 Business and Financial Solutions
        </span>
      )}
    </div>
  );
};