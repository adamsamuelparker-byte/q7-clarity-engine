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
      transparent ? "absolute top-0 left-0 right-0" : "sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
    )}>
      {/* Main Header - No separate top bar, unified surface */}
      <div className="container-wide">
        <nav className="flex items-center justify-between py-2.5">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo 
              showText={true} 
              textClassName={transparent ? "text-primary-foreground/70" : ""}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-0.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-2.5 py-1.5 text-[13px] font-normal transition-colors duration-200 rounded",
                  transparent 
                    ? location.pathname === item.href
                      ? "text-primary-foreground bg-white/10"
                      : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/5"
                    : location.pathname === item.href
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
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
            "lg:hidden py-3 animate-fade-in",
            transparent ? "bg-primary/95 backdrop-blur rounded-lg mb-3" : "border-t border-border"
          )}>
            <div className="flex flex-col space-y-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2.5 text-sm font-normal transition-colors duration-200 rounded",
                    transparent
                      ? location.pathname === item.href
                        ? "text-primary-foreground bg-white/10"
                        : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/5"
                      : location.pathname === item.href
                        ? "text-foreground bg-secondary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
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