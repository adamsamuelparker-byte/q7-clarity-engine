import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const navigation = {
  solutions: [
    { name: "Business Funding", href: "/business-funding" },
    { name: "Payments & Merchant", href: "/payments-merchant" },
    { name: "Asset Finance", href: "/asset-finance" },
    { name: "Leasing & Rental", href: "/leasing-rental" },
    { name: "Vehicles & Mobility", href: "/vehicles-mobility" },
    { name: "Tracking & Protection", href: "/tracking-protection" },
    { name: "Banking & Accounting", href: "/banking-accounting" },
    { name: "Business Support", href: "/business-support" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo 
              showText={false} 
              variant="light"
              iconClassName="h-12 sm:h-14 md:h-16 w-auto"
            />
            <p className="mt-4 text-sm text-primary-foreground/60 max-w-xs">
              Q7 Business and Financial Solutions
            </p>
            <p className="mt-1.5 text-xs text-primary-foreground/40">
              Organising financial solutions for your business
            </p>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium mb-4 text-primary-foreground/80">Solutions</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-primary-foreground/80">Company</h3>
            <ul className="space-y-2.5">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} Q7 Business and Financial Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
