import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
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
        "group block bg-card rounded-lg p-4 md:p-5 lg:p-6",
        "border border-card-border",
        "transition-all duration-200 ease-out",
        "hover:border-card-border-hover hover:-translate-y-px",
        "hover:shadow-sm",
        "min-h-[120px] md:min-h-[140px]",
        className
      )}
      style={style}
    >
      {icon && (
        <div className="mb-2.5 md:mb-3 text-foreground/60 group-hover:text-accent transition-colors duration-200">
          {icon}
        </div>
      )}
      <h3 className={cn(
        "font-medium text-heading mb-1.5 group-hover:text-accent transition-colors duration-200",
        featured ? "text-base" : "text-[15px] md:text-base"
      )}>
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-2.5 md:mb-3 leading-relaxed line-clamp-2">
        {description}
      </p>
      <div className="flex items-center text-xs md:text-sm font-medium text-foreground/50 group-hover:text-accent transition-colors duration-200">
        Learn more
        <ChevronRight className="ml-0.5 h-3.5 w-3.5 md:h-4 md:w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
};