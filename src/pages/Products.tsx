import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { products, productCategories } from "@/data/products";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const cats = ["All", ...productCategories];
  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Quality electrical products from trusted brands.
            </p>
          </div>
        </SectionReveal>

        {/* Category filter */}
        <SectionReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "gradient-bg text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((product, i) => (
            <SectionReveal key={product.name + product.refCode} delay={i * 0.02}>
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                className="glass rounded-xl overflow-hidden group"
              >
                <div className="relative h-36 overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain opacity-100 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold leading-tight text-foreground">{product.name}</p>
                  {product.refCode && (
                    <p className="text-xs text-muted-foreground mt-0.5">{product.refCode}</p>
                  )}
                  <Link
                    to={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="mt-2 inline-block text-xs gradient-bg text-primary-foreground px-4 py-1.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
                  >
                    Add
                  </Link>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
