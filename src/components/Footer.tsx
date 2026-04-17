import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart, Home, Wrench, ShoppingBag, Info, MessageSquare, Instagram, Globe, Clock } from "lucide-react";
import { serviceCategories } from "@/data/services";
import logo from "@/assets/logo.jpeg";

const quickLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Wrench },
  { to: "/products", label: "Products", icon: ShoppingBag },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: MessageSquare },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="Vizag Electro Logo" className="w-10 h-10 rounded-full object-cover" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight gradient-text">Vizag Electro</span>
                <span className="text-[10px] text-muted-foreground leading-tight">The EEE Services</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Your trusted partner for all electrical needs.</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/vizagelectro?igsh=MTR1bG1qOHlobHBiYg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full glass hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.google.co.in/search?utm_medium=noren&utm_source=gbp&utm_campaign=2026&q=Vizag+electro&ludocid=1169363051205453117&lsig=AB86z5XlrN4y1NdHP1OF-QU5Eicd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business"
                title="Google Business"
                className="flex items-center justify-center w-9 h-9 rounded-full glass hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link key={link.to} to={link.to} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
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
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p>Mon – Sun: 8 AM – 8 PM</p>
                  <p className="text-xs text-primary mt-0.5">24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border mt-0 pt-8 pb-8 flex flex-col items-center gap-4 px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vizag Electro. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-1 text-xs text-muted-foreground">
          Made with <Heart className="inline h-4 w-4 text-destructive mx-1" /> by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent hover:underline"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain"
            />
            StaffArc
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
