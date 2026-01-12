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
        "group block bg-card rounded-lg p-6 lg:p-8",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-px",
        className
      )}
      style={{
        border: '1px solid hsl(var(--card-border))',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'hsl(var(--card-border-hover))';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'hsl(var(--card-border))';
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.02)';
      }}
    >
      {icon && (
        <div className="mb-4 text-accent/70 group-hover:text-accent transition-colors duration-200">
          {icon}
        </div>
      )}
      <h3 className={cn(
        "font-medium text-heading mb-2 group-hover:text-accent transition-colors duration-200",
        featured ? "text-base" : "text-[15px]"
      )}>
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center text-xs font-medium text-accent/60 group-hover:text-accent transition-colors duration-200">
        Learn more
        <ChevronRight className="ml-0.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
};