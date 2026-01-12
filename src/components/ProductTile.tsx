import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductTileProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTile = ({
  title,
  description,
  href,
  icon,
  className,
  style,
}: ProductTileProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group block bg-card border border-border rounded-md p-6 transition-all duration-300 ease-out hover:border-accent hover:shadow-lg",
        className
      )}
      style={{
        transform: "translateY(0)",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {icon && (
        <div className="mb-4 text-accent">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {description}
      </p>
      <div className="flex items-center text-sm font-medium text-accent">
        Learn more
        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
