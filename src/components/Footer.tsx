import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { serviceCategories } from "@/data/services";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg gradient-text mb-3">Vizag Electro</h3>
            <p className="text-sm text-muted-foreground mb-4">The EEE Services — Your trusted partner for all electrical needs.</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Mon–Sat: 8 AM – 6 PM</span>
            </div>
            <p className="text-xs text-primary mt-1 ml-6">+ 24 Hour Emergency Service</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/products", label: "Products" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">Services</h4>
            <div className="flex flex-col gap-2">
              {serviceCategories.slice(0, 6).map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:7981188798" className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                7981188798
              </a>
              <a href="mailto:vizagelectro@gmail.com" className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                vizagelectro@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>Shop-03, Opp Indian Oil Petrol Bunk, 1 Town Old Post Office, Visakhapatnam - 530001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} Vizag Electro</span>
          <span className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <a href="https://staffarc.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
              StaffArc
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
