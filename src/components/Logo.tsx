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
    <div className={cn("flex items-center", className)}>
      {/* Q7 Logo - Full brand mark */}
      <img 
        src={logoImage}
        alt="Q7 Business & Financial Solutions"
        className={cn(
          "w-auto h-full object-contain",
          "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
          iconClassName
        )}
      />
    </div>
  );
};