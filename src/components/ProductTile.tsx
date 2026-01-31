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
        "group block rounded-md p-7 md:p-8 lg:p-10",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        "min-h-[160px] md:min-h-[180px]",
        className
      )}
      style={{
        backgroundColor: 'hsl(215, 20%, 90%)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)';
        e.currentTarget.style.borderLeft = '3px solid hsl(195, 65%, 28%)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)';
        e.currentTarget.style.borderLeft = 'none';
      }}
    >
      {icon && (
        <div 
          className="mb-4 transition-colors duration-300"
          style={{ color: 'hsl(220, 12%, 50%)' }}
        >
          {icon}
        </div>
      )}
      <h3 
        className={cn(
          "font-bold mb-3 transition-colors duration-300",
          featured ? "text-lg md:text-xl" : "text-base md:text-lg"
        )}
        style={{ color: 'hsl(220, 45%, 18%)' }}
      >
        {title}
      </h3>
      <p 
        className="text-sm mb-5 leading-relaxed line-clamp-2"
        style={{ color: 'hsl(220, 12%, 45%)' }}
      >
        {description}
      </p>
      <div 
        className="flex items-center text-sm font-semibold transition-colors duration-300 group-hover:translate-x-0.5"
        style={{ color: 'hsl(195, 65%, 28%)' }}
      >
        <span>Learn more</span>
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
