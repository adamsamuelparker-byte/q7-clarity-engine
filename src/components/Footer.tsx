import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const navigation = {
  solutions: [
    { name: "Business Funding", href: "/business-funding" },
    { name: "Payments and Merchant", href: "/payments-merchant" },
    { name: "Asset Finance", href: "/asset-finance" },
    { name: "Leasing and Rental", href: "/leasing-rental" },
    { name: "Vehicles and Mobility", href: "/vehicles-mobility" },
    { name: "Tracking and Protection", href: "/tracking-protection" },
    { name: "Banking and Accounting", href: "/banking-accounting" },
    { name: "Business Support", href: "/business-support" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
  ],
};

const contactInfo = {
  sales: "0330 6113399",
  whatsapp: "07454 759742",
  email: "Ibusinessfinancialsolutions@gmail.com",
  address: "71-75 Shelton Street, Covent Garden, London WC2H 9JQ",
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo 
              showText={true} 
              variant="light"
            />
            <p className="mt-4 text-sm text-primary-foreground/75 max-w-xs">
              Organising financial solutions for your business
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-primary-foreground/80">Solutions</h3>
            <ul className="space-y-2.5">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground/90 transition-colors duration-200"
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
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground/90 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-primary-foreground/80">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`tel:${contactInfo.sales.replace(/\s/g, '')}`}
                  className="flex items-start gap-2.5 text-sm text-primary-foreground/70 hover:text-primary-foreground/90 transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                  <span>{contactInfo.sales}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/44${contactInfo.whatsapp.replace(/\s/g, '').substring(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-primary-foreground/70 hover:text-primary-foreground/90 transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                  <span>{contactInfo.whatsapp}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-2.5 text-sm text-primary-foreground/70 hover:text-primary-foreground/90 transition-colors duration-200 break-all"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <div className="text-xs text-primary-foreground/40 text-center space-y-1">
            <p>
              © {new Date().getFullYear()} Q7 Business and Financial Solutions Ltd. All rights reserved.
            </p>
            <p>
              Company No. 16917917 | Registered in England and Wales
            </p>
            <p>
              Registered Address: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};