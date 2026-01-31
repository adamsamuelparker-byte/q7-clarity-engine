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
        "group block rounded-lg p-6 md:p-7 lg:p-9",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1.5",
        "min-h-[140px] md:min-h-[160px]",
        className
      )}
      style={{
        backgroundColor: 'hsl(215, 30%, 97%)',
        border: '1px solid hsl(215, 25%, 88%)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.borderColor = 'hsl(222, 47%, 25%, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
        e.currentTarget.style.borderColor = 'hsl(215, 25%, 88%)';
      }}
    >
      {icon && (
        <div className="mb-3 md:mb-4 text-muted-foreground group-hover:text-primary transition-colors duration-300">
          {icon}
        </div>
      )}
      <h3 
        className={cn(
          "font-bold mb-3 group-hover:text-primary transition-colors duration-300",
          featured ? "text-base md:text-lg" : "text-[15px] md:text-base"
        )}
        style={{ color: 'hsl(222, 47%, 25%)' }}
      >
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
        {description}
      </p>
      <div 
        className="flex items-center text-sm font-medium transition-colors duration-300"
        style={{ color: 'hsl(180, 50%, 32%)' }}
      >
        <span className="cta-text">Learn more</span>
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
