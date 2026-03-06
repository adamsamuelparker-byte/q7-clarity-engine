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
        "group block rounded-md overflow-hidden bg-card",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        "min-h-[160px] md:min-h-[180px]",
        className
      )}
      style={{
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        ...style,
      }}
    >
      {/* Top green strip */}
      <div 
        className="h-[6px] w-full transition-colors duration-300 bg-primary/70 group-hover:bg-primary"
      />
      
      {/* Card content */}
      <div className="p-7 md:p-8 lg:p-10">
        {icon && (
          <div className="mb-4 text-muted-foreground transition-colors duration-300">
            {icon}
          </div>
        )}
        <h3 
          className={cn(
            "font-bold mb-3 text-heading transition-colors duration-300",
            featured ? "text-lg md:text-xl" : "text-base md:text-lg"
          )}
        >
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="flex items-center text-sm font-semibold text-accent transition-all duration-300 group-hover:translate-x-0.5">
          <span>Learn more</span>
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
