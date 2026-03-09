import { cn } from "@/lib/utils";
import q7LogoPng from "@/assets/q7-logo.png";

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
        src={q7LogoPng}
        alt="Q7 Business and Financial Solutions"
        className={cn(
          "h-8 sm:h-9 md:h-10 w-auto",
          isLight && "brightness-0 invert",
          iconClassName
        )}
      />
    </div>
  );
};
