import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Homepage", href: "/" },
  { name: "Business Funding", href: "/business-funding" },
  { name: "Merchant Services", href: "/merchant-services" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing and Rental", href: "/leasing-rental" },
  { name: "Tracking and Protection", href: "/tracking-protection" },
  { name: "Banking and Business Services", href: "/banking-services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

interface HeaderProps {
  transparent?: boolean;
}

export const Header = ({ transparent = false }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={cn(
      "w-full z-50",
      transparent 
        ? "absolute top-0 left-0 right-0" 
        : "sticky top-0 bg-background/98 backdrop-blur-sm border-b border-border/40"
    )}>
      <div className="container-wide">
        <nav className="flex items-center justify-between py-4">
          {/* Logo - single logo, no duplicate text */}
          <Link to="/" className="flex-shrink-0">
            <Logo 
              showText={false} 
              variant={transparent ? "light" : "dark"}
              iconClassName="h-10 md:h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation - reduced weight, increased spacing */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-2.5 py-1.5 text-[11px] font-normal transition-colors duration-200",
                  transparent 
                    ? location.pathname === item.href
                      ? "text-primary-foreground/90"
                      : "text-primary-foreground/50 hover:text-primary-foreground/80"
                    : location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground/80 hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden h-9 w-9",
              transparent && "text-primary-foreground hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={cn(
            "lg:hidden py-2 animate-fade-in",
            transparent 
              ? "bg-primary/98 backdrop-blur-sm rounded-lg mb-2" 
              : "border-t border-border/40"
          )}>
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2.5 text-sm font-normal transition-colors duration-200",
                    transparent
                      ? location.pathname === item.href
                        ? "text-primary-foreground"
                        : "text-primary-foreground/50"
                      : location.pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground/80"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
