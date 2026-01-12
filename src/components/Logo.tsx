import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

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
  const isLight = variant === "light";
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Q7 Icon */}
      <div className={cn(
        "flex items-center justify-center rounded-lg",
        "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12",
        isLight ? "bg-white/10 border border-white/20" : "bg-primary/5 border border-primary/10",
        iconClassName
      )}>
        <span className={cn(
          "text-lg sm:text-xl md:text-2xl font-bold tracking-tight",
          isLight ? "text-white" : "text-primary"
        )}>
          Q7
        </span>
      </div>
      
      {/* Text beside logo */}
      {showText && (
        <div className={cn(
          "flex flex-col leading-none",
          textClassName
        )}>
          <span className={cn(
            "text-xs sm:text-sm font-semibold tracking-tight flex items-center gap-0.5",
            isLight ? "text-white" : "text-primary"
          )}>
            Business and Financial
            <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent" strokeWidth={3} />
          </span>
          <span className={cn(
            "text-[10px] sm:text-xs font-normal tracking-wide",
            isLight ? "text-white/60" : "text-muted-foreground"
          )}>
            Solutions
          </span>
        </div>
      )}
    </div>
  );
};