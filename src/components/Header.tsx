import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Business Funding", href: "/business-funding" },
  { name: "Payments & Merchant", href: "/payments-merchant" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing & Rental", href: "/leasing-rental" },
  { name: "Vehicles & Fleet", href: "/vehicles-mobility" },
  { name: "Tracking & Protection", href: "/tracking-protection" },
  { name: "Banking & Accounting", href: "/banking-accounting" },
  { name: "Business Support", href: "/business-support" },
];

const secondaryNav = [
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
        ? "relative" 
        : "sticky top-0 bg-background/98 backdrop-blur-sm border-b border-border/40"
    )}>
      <div className="container-wide">
        <nav className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo 
              showText={true} 
              variant={transparent ? "light" : "dark"}
            />
          </Link>

          {/* Desktop Navigation - 8 solution pages */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-2 py-1.5 text-[10px] font-normal transition-colors duration-200 whitespace-nowrap",
                  transparent 
                    ? location.pathname === item.href
                      ? "text-primary-foreground"
                      : "text-primary-foreground/50 hover:text-primary-foreground/80"
                    : location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <span className={cn(
              "mx-1.5 h-4 w-px",
              transparent ? "bg-primary-foreground/20" : "bg-border"
            )} />
            {secondaryNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-2 py-1.5 text-[10px] font-normal transition-colors duration-200",
                  transparent 
                    ? location.pathname === item.href
                      ? "text-primary-foreground"
                      : "text-primary-foreground/50 hover:text-primary-foreground/80"
                    : location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - larger touch target */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden h-11 w-11 min-h-[44px] min-w-[44px]",
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

        {/* Mobile Navigation - fixed styling */}
        {mobileMenuOpen && (
          <div className={cn(
            "lg:hidden py-3 animate-fade-in",
            transparent 
              ? "bg-primary/98 backdrop-blur-sm rounded-lg mb-2" 
              : "border-t border-border/40"
          )}>
            <div className="flex flex-col">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3.5 text-base font-normal min-h-[48px] flex items-center rounded-lg mx-2 transition-colors duration-200",
                  transparent
                    ? location.pathname === "/"
                      ? "text-primary-foreground bg-white/10"
                      : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-white/5"
                    : location.pathname === "/"
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                Home
              </Link>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3.5 text-base font-normal min-h-[48px] flex items-center rounded-lg mx-2 transition-colors duration-200",
                    transparent
                      ? location.pathname === item.href
                        ? "text-primary-foreground bg-white/10"
                        : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-white/5"
                      : location.pathname === item.href
                        ? "text-foreground bg-secondary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className={cn(
                "my-3 mx-4 h-px",
                transparent ? "bg-primary-foreground/10" : "bg-border"
              )} />
              {secondaryNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3.5 text-base font-normal min-h-[48px] flex items-center rounded-lg mx-2 transition-colors duration-200",
                    transparent
                      ? location.pathname === item.href
                        ? "text-primary-foreground bg-white/10"
                        : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-white/5"
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