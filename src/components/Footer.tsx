import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const navigation = {
  solutions: [
    { name: "Business Funding", href: "/business-funding" },
    { name: "Merchant Services", href: "/merchant-services" },
    { name: "Asset Finance", href: "/asset-finance" },
    { name: "Leasing and Rental", href: "/leasing-rental" },
    { name: "Tracking and Protection", href: "/tracking-protection" },
    { name: "Banking and Business Services", href: "/banking-services" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo 
              showText={false} 
              iconClassName="bg-accent text-accent-foreground"
            />
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
              Q7 Business and Financial Solutions
            </p>
            <p className="mt-2 text-xs text-primary-foreground/50">
              Organising financial solutions for your business
            </p>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} Q7 Business and Financial Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
