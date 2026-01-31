import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductTileProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  featured?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTile = ({
  title,
  description,
  href,
  icon,
  featured,
  className,
  style,
}: ProductTileProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group block bg-card rounded-lg p-5 md:p-6 lg:p-8",
        "border border-card-border",
        "transition-all duration-300 ease-out",
        "hover:border-primary/20 hover:-translate-y-1",
        "hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)]",
        "min-h-[140px] md:min-h-[160px]",
        className
      )}
      style={style}
    >
      {icon && (
        <div className="mb-3 md:mb-4 text-muted-foreground group-hover:text-primary transition-colors duration-300">
          {icon}
        </div>
      )}
      <h3 className={cn(
        "font-semibold text-heading mb-2 group-hover:text-primary transition-colors duration-300",
        featured ? "text-base md:text-lg" : "text-[15px] md:text-base"
      )}>
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
        {description}
      </p>
      <div className="flex items-center text-sm font-medium text-accent group-hover:text-accent-hover transition-colors duration-300">
        <span className="cta-text">Learn more</span>
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};