import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Home, Wrench, ShoppingBag, Info, MessageSquare } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Wrench },
  { to: "/products", label: "Products", icon: ShoppingBag },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: MessageSquare },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Vizag Electro Logo" className="w-10 h-10 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-tight gradient-text">Vizag Electro</span>
            <span className="text-[10px] text-muted-foreground leading-tight">The EEE Services</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors hover:text-primary flex items-center gap-1.5 ${
                  location.pathname === link.to ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:7981188798"
            className="flex items-center gap-2 gradient-bg text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-sm py-2 transition-colors flex items-center gap-2 ${
                      location.pathname === link.to ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="tel:7981188798"
                className="flex items-center justify-center gap-2 gradient-bg text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
