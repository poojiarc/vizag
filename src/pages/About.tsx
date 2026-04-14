import { motion } from "framer-motion";
import { Phone, Shield, Award, Clock, DollarSign, HeartHandshake, HardHat, Wrench } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const whyChooseUs = [
  { icon: DollarSign, title: "Affordable Price", desc: "Competitive pricing without compromising quality." },
  { icon: HeartHandshake, title: "Excellent Customer Service", desc: "Dedicated support from inquiry to completion." },
  { icon: HardHat, title: "Safe Work Practices", desc: "Strict safety protocols for every project." },
  { icon: Award, title: "Quality Workmanship", desc: "Skilled professionals delivering top-notch work." },
  { icon: Clock, title: "24 Hour Emergency Service", desc: "Available around the clock for urgent needs." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Vizag Electro</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for comprehensive electrical services across Visakhapatnam and beyond.
            </p>
          </div>
        </SectionReveal>

        {/* Service types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Residential", desc: "Complete home electrical solutions — from new wiring to smart home automation.", icon: "🏠" },
            { title: "Commercial", desc: "Professional electrical services for offices, showrooms, hospitals, and schools.", icon: "🏢" },
            { title: "Industrial", desc: "Heavy-duty electrical installations, maintenance and emergency services for workshops and factories.", icon: "🏭" },
          ].map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -4 }} className="glass rounded-xl p-6 text-center h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Why Choose Us */}
        <SectionReveal>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {whyChooseUs.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.05}>
              <motion.div whileHover={{ scale: 1.02 }} className="glass rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* UC Cover */}
        <SectionReveal>
          <div className="glass rounded-2xl p-8 md:p-10 mb-16">
            <h2 className="text-xl font-bold mb-6 text-center">
              Our <span className="gradient-text">UC Cover</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: "Safety First" },
                { icon: Shield, label: "Insurance Protection" },
                { icon: Award, label: "Verified Experts" },
                { icon: Wrench, label: "Standardized Process" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4">
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal>
          <div className="gradient-bg rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              FOR MORE INFO
            </h2>
            <a
              href="tel:7981188798"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-background/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              CALL 7981188798
            </a>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default About;
