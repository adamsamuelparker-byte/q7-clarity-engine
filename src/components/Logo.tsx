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
        "flex items-center justify-center rounded-md",
        "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10",
        isLight 
          ? "bg-white/15 border border-white/30" 
          : "bg-primary/10 border border-primary/20 shadow-sm",
        iconClassName
      )}>
        <div className="flex flex-col items-center">
          <span className={cn(
            "text-base sm:text-lg md:text-xl font-bold tracking-tight leading-none",
            isLight ? "text-white" : "text-primary"
          )}>
            Q7
          </span>
          <div className={cn(
            "w-5 sm:w-6 md:w-7 h-[2px] mt-0.5 rounded-full",
            isLight ? "bg-white" : "bg-primary"
          )} />
        </div>
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
            <Check className={cn(
              "h-3 w-3 sm:h-3.5 sm:w-3.5",
              isLight ? "text-white" : "text-primary"
            )} strokeWidth={3} />
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