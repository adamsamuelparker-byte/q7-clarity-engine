import React from "react";
import { cn } from "@/lib/utils";
import q7LogoSvg from "@/assets/q7-logo.svg";
import q7LogoWhiteSvg from "@/assets/q7-logo-white.svg";

interface LogoProps {
  showText?: boolean;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  variant?: "dark" | "light";
}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ showText = true, className, iconClassName, textClassName, variant = "dark", ...props }, ref) => {
    const isLight = variant === "light";

    return (
      <div ref={ref} className={cn("flex items-center", className)} {...props}>
        <img
          src={isLight ? q7LogoWhiteSvg : q7LogoSvg}
          alt="Q7 Business and Financial Solutions"
          className={cn("h-10 sm:h-12 md:h-14 w-auto", iconClassName)}
        />
      </div>
    );
  }
);

Logo.displayName = "Logo";
