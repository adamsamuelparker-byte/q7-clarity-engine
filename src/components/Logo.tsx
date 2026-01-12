import { cn } from "@/lib/utils";

interface LogoProps {
  showText?: boolean;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export const Logo = ({ 
  showText = true, 
  className,
  iconClassName,
  textClassName 
}: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Q7 Logo Symbol - Stylised Q with 7 integrated */}
      <div className={cn(
        "relative flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold text-lg",
        iconClassName
      )}>
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer circle for Q */}
          <circle 
            cx="20" 
            cy="18" 
            r="12" 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none"
          />
          {/* Q tail */}
          <line 
            x1="26" 
            y1="26" 
            x2="34" 
            y2="36" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          {/* Number 7 inside */}
          <text 
            x="20" 
            y="23" 
            textAnchor="middle" 
            fill="currentColor" 
            fontSize="14" 
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            7
          </text>
        </svg>
      </div>
      
      {/* Business Name - Plain text, not stylised */}
      {showText && (
        <span className={cn(
          "text-sm font-medium text-foreground hidden sm:block",
          textClassName
        )}>
          Q7 Business and Financial Solutions
        </span>
      )}
    </div>
  );
};
