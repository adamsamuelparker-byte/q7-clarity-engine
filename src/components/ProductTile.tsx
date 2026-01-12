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
        "group block bg-card rounded-lg p-8 transition-all duration-300 ease-out",
        "border border-border/60 hover:border-accent/30",
        "shadow-sm hover:shadow-lg hover:-translate-y-1",
        className
      )}
      style={style}
    >
      {icon && (
        <div className="mb-5 text-accent">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center text-sm font-medium text-accent">
        Learn more
        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};