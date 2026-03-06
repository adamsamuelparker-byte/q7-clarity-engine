import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const services = [
  { name: "Business Funding", href: "/business-funding" },
  { name: "Card Processing & Merchant Services", href: "/payments-merchant" },
  { name: "Emergency Funding", href: "/business-funding/emergency-funding" },
  { name: "Merchant Cash Advance", href: "/business-funding/merchant-cash-advance" },
  { name: "Asset Finance", href: "/asset-finance" },
  { name: "Leasing & Rental", href: "/leasing-rental" },
  { name: "E-Moped & E-Bike", href: "/e-moped-e-bike" },
  { name: "Tracking & Protect", href: "/tracking-protection" },
  { name: "Bank Accounts & Accounting", href: "/banking-accounting" },
  { name: "Business Support", href: "/business-support" },
];

interface HeaderProps {
  transparent?: boolean;
}

export const Header = ({ transparent = false }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isServicePage = services.some(s => location.pathname === s.href || location.pathname.startsWith(s.href + "/"));

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

          {/* Desktop Navigation - simplified */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {/* Our Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                  transparent
                    ? isServicePage
                      ? "text-primary-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                    : isServicePage
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                Our Services
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )} />
              </button>

              {servicesOpen && (
                <div className={cn(
                  "absolute top-full left-0 mt-1 w-72 rounded-lg shadow-lg border animate-fade-in z-50",
                  "bg-card border-border"
                )}>
                  <div className="py-2">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={cn(
                          "block px-4 py-3 text-sm transition-colors duration-150",
                          location.pathname === item.href
                            ? "text-primary font-medium bg-primary/5"
                            : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              to="/about"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                transparent
                  ? location.pathname === "/about"
                    ? "text-primary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                  : location.pathname === "/about"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
              )}
            >
              About
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                transparent
                  ? location.pathname === "/contact"
                    ? "text-primary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                  : location.pathname === "/contact"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden h-12 w-12 min-h-[48px] min-w-[48px]",
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
                  "px-4 py-4 text-base font-normal min-h-[52px] flex items-center rounded-lg mx-2 transition-colors duration-200",
                  transparent
                    ? location.pathname === "/"
                      ? "text-primary-foreground bg-white/10"
                      : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-white/5"
                    : location.pathname === "/"
                      ? "text-foreground bg-secondary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
                )}
              >
                Home
              </Link>

              {/* Our Services - expandable */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={cn(
                  "px-4 py-4 text-base font-normal min-h-[52px] flex items-center justify-between rounded-lg mx-2 transition-colors duration-200",
                  transparent
                    ? isServicePage
                      ? "text-primary-foreground bg-white/10"
                      : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-white/5"
                    : isServicePage
                      ? "text-foreground bg-secondary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
                )}
              >
                Our Services
                <ChevronDown className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  mobileServicesOpen && "rotate-180"
                )} />
              </button>

              {mobileServicesOpen && (
                <div className="ml-4 animate-fade-in">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3.5 text-[0.9rem] font-normal min-h-[48px] flex items-center rounded-lg mx-2 transition-colors duration-200",
                        transparent
                          ? location.pathname === item.href
                            ? "text-primary-foreground bg-white/10"
                            : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/5"
                          : location.pathname === item.href
                            ? "text-foreground bg-secondary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              <div className={cn(
                "my-3 mx-4 h-px",
                transparent ? "bg-primary-foreground/10" : "bg-border"
              )} />

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-4 text-base font-normal min-h-[52px] flex items-center rounded-lg mx-2 transition-colors duration-200",
                  transparent
                    ? location.pathname === "/about"
                      ? "text-primary-foreground bg-white/10"
                      : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-white/5"
                    : location.pathname === "/about"
                      ? "text-foreground bg-secondary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
                )}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-4 text-base font-normal min-h-[52px] flex items-center rounded-lg mx-2 transition-colors duration-200",
                  transparent
                    ? location.pathname === "/contact"
                      ? "text-primary-foreground bg-white/10"
                      : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-white/5"
                    : location.pathname === "/contact"
                      ? "text-foreground bg-secondary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
                )}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
