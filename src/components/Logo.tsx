import { cn } from "@/lib/utils";
import q7LogoSvg from "@/assets/q7-logo.svg";

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
    <div className={cn("flex items-center", className)}>
      <img
        src={q7LogoSvg}
        alt="Q7 Business and Financial Solutions"
        className={cn(
          "h-10 sm:h-12 md:h-14 w-auto",
          isLight && "brightness-0 invert",
          iconClassName
        )}
      />
    </div>
  );
};
