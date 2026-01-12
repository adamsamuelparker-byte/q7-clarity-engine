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
        "group block bg-card rounded-lg transition-all duration-300 ease-out",
        "border-0 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04)]",
        "hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)]",
        "hover:-translate-y-0.5",
        featured ? "p-8 lg:p-10" : "p-7 lg:p-8",
        className
      )}
      style={style}
    >
      {icon && (
        <div className="mb-4 text-accent/80 group-hover:text-accent transition-colors duration-200">
          {icon}
        </div>
      )}
      <h3 className={cn(
        "font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-200",
        featured ? "text-lg" : "text-base"
      )}>
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center text-xs font-medium text-accent/70 group-hover:text-accent transition-colors duration-200">
        Learn more
        <ChevronRight className="ml-0.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
};