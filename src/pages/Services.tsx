import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { serviceCategories } from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive electrical solutions for residential, commercial and industrial needs.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat, i) => (
            <SectionReveal key={cat.slug} delay={i * 0.05}>
              <Link to={`/services/${cat.slug}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative h-64 rounded-xl overflow-hidden glass group cursor-pointer"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 z-[1]" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="font-bold text-xl mb-1 text-white drop-shadow-lg">{cat.title}</h3>
                    <p className="text-sm text-white/90 mb-3 drop-shadow">{cat.description}</p>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                      <span>{cat.items.length} services</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
