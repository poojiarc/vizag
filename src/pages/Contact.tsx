import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, AlertTriangle, Info, Shield, BadgeCheck, ClipboardCheck, ShieldCheck } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { serviceCategories } from "@/data/services";
import { products } from "@/data/products";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    product: preselectedProduct,
    message: "",
  });

  useEffect(() => {
    if (preselectedProduct) {
      setForm((prev) => ({ ...prev, product: preselectedProduct }));
    }
  }, [preselectedProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Mobile: ${form.mobile.trim()}`,
      form.service && `Service: ${form.service}`,
      form.product && `Product: ${form.product}`,
      `Message: ${form.message.trim()}`,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/917981188798?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
  };

  const allProducts = [...new Set(products.map((p) => p.name))];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Contact</span> Us
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get in touch for a free consultation or emergency service.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact info */}
          <SectionReveal>
            <div className="glass rounded-2xl p-6 md:p-8 h-full">
              <h2 className="font-bold text-xl mb-6 gradient-text">Vizag Electro - The EEE Services</h2>
              <p className="text-sm text-muted-foreground mb-1 font-semibold">Mahammad Afeez</p>

              <div className="flex flex-col gap-4 mt-6">
                <a href="tel:7981188798" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  7981188798
                </a>
                <a href="mailto:vizagelectro@gmail.com" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  vizagelectro@gmail.com
                </a>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Shop-03, Opp Indian Oil Petrol Bunk, 1 Town Old Post Office, Visakhapatnam - 530001</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <span>Mon–Sat: 8 AM – 6 PM</span>
                    <p className="text-xs text-primary mt-0.5">+ 24 Hour Emergency Service</p>
                  </div>
                </div>
              </div>

              {/* Business Hours Detail */}
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Business Hours
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <span>Monday</span><span>8:00 AM – 6:00 PM</span>
                  <span>Tuesday</span><span>8:00 AM – 6:00 PM</span>
                  <span>Wednesday</span><span>8:00 AM – 6:00 PM</span>
                  <span>Thursday</span><span>8:00 AM – 6:00 PM</span>
                  <span>Friday</span><span>8:00 AM – 6:00 PM</span>
                  <span>Saturday</span><span>8:00 AM – 6:00 PM</span>
                  <span>Sunday</span><span className="text-primary">Emergency Only</span>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
              <h2 className="font-bold text-xl mb-6">Send us a message</h2>
              <div className="space-y-4">
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name *"
                  className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground" />
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email *"
                  className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground" />
                <input name="mobile" type="tel" value={form.mobile} onChange={handleChange} required placeholder="Mobile Number *"
                  className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground" />
                <select name="service" value={form.service} onChange={handleChange}
                  className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-muted-foreground">
                  <option value="">Select a Service (optional)</option>
                  {serviceCategories.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                </select>
                <select name="product" value={form.product} onChange={handleChange}
                  className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-muted-foreground">
                  <option value="">Select a Product (optional)</option>
                  {allProducts.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your Message *" rows={4}
                  className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground resize-none" />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full gradient-bg text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Send via WhatsApp
                </motion.button>
              </div>
            </form>
          </SectionReveal>
        </div>

        {/* UC Cover Section */}
        <SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Shield, label: "Safety First", desc: "All work follows safety standards" },
              { icon: ShieldCheck, label: "Insurance Protection", desc: "Covered for your peace of mind" },
              { icon: BadgeCheck, label: "Verified Experts", desc: "Trained & certified electricians" },
              { icon: ClipboardCheck, label: "Standardized Process", desc: "Consistent quality every time" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-4 text-center">
                <item.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Important Notes */}
        <SectionReveal>
          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              Important Notes
            </h2>
            <ul className="space-y-2">
              {[
                "Diagnosis fee applies for inspection visits.",
                "Spare parts and materials cost extra.",
                "Final estimate will be provided after inspection.",
                "No responsibility for pre-existing issues.",
                "Warranty depends on manufacturer terms.",
              ].map((note) => (
                <li key={note} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default Contact;
