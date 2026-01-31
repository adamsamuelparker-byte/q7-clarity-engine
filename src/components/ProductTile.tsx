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
        "group block rounded-md overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        "min-h-[160px] md:min-h-[180px]",
        className
      )}
      style={{
        backgroundColor: 'hsl(215, 20%, 93%)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)';
        const strip = e.currentTarget.querySelector('[data-strip]') as HTMLElement;
        if (strip) strip.style.backgroundColor = 'hsl(195, 65%, 28%)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
        const strip = e.currentTarget.querySelector('[data-strip]') as HTMLElement;
        if (strip) strip.style.backgroundColor = 'hsl(220, 45%, 20%, 0.7)';
      }}
    >
      {/* Top navy strip */}
      <div 
        data-strip
        className="h-[6px] w-full transition-colors duration-300"
        style={{ backgroundColor: 'hsl(220, 45%, 20%, 0.7)' }}
      />
      
      {/* Card content */}
      <div className="p-7 md:p-8 lg:p-10">
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
          className="flex items-center text-sm font-semibold transition-all duration-300 group-hover:translate-x-0.5"
          style={{ color: 'hsl(195, 65%, 28%)' }}
        >
          <span>Learn more</span>
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
