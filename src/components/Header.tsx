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
      {/* Top Bar - Unified with hero when transparent */}
      <div className={cn(
        transparent ? "bg-transparent" : "bg-primary text-primary-foreground"
      )}>
        <div className="container-wide py-1.5">
          <div className="flex items-center justify-between">
            <Logo 
              showText={false} 
              iconClassName="w-7 h-7"
              textClassName={transparent ? "text-primary-foreground" : ""}
            />
            <span className={cn(
              "text-xs hidden sm:block",
              transparent ? "text-primary-foreground/60" : "text-primary-foreground/70"
            )}>
              Organising financial solutions for your business
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={cn(
        "container-wide",
        transparent ? "bg-transparent" : ""
      )}>
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo 
              showText={true} 
              textClassName={transparent ? "text-primary-foreground" : ""}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-0.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-2.5 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                  transparent 
                    ? location.pathname === item.href
                      ? "text-primary-foreground bg-white/10"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5"
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
              "lg:hidden",
              transparent && "text-primary-foreground hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={cn(
            "lg:hidden py-4 animate-fade-in",
            transparent ? "bg-primary/95 backdrop-blur rounded-lg mb-4" : "border-t border-border"
          )}>
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-md",
                    transparent
                      ? location.pathname === item.href
                        ? "text-primary-foreground bg-white/10"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5"
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