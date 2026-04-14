import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { serviceCategories } from "@/data/services";
import { products } from "@/data/products";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) return <Navigate to="/services" replace />;

  const relatedProducts = products.filter((p) =>
    p.category.toLowerCase().includes(category.title.split(" ")[0].toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:underline mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </SectionReveal>

        {/* Hero */}
        <SectionReveal>
          <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-10 glass">
            <img
              src={category.image}
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
              <h1 className="text-2xl md:text-4xl font-bold">{category.title}</h1>
              <p className="text-muted-foreground mt-2 max-w-lg">{category.description}</p>
            </div>
          </div>
        </SectionReveal>

        {/* Services list */}
        <SectionReveal>
          <h2 className="text-xl font-bold mb-6">
            Available <span className="gradient-text">Services</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {category.items.map((item, i) => (
            <SectionReveal key={item.name} delay={i * 0.03}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-white/10 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{item.name}</span>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <>
            <SectionReveal>
              <h2 className="text-xl font-bold mb-6">
                Related <span className="gradient-text">Products</span>
              </h2>
            </SectionReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {relatedProducts.slice(0, 8).map((product, i) => (
                <SectionReveal key={product.name} delay={i * 0.03}>
                  <motion.div whileHover={{ scale: 1.03 }} className="glass rounded-xl overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-32 object-cover opacity-60" loading="lazy" />
                    <div className="p-3">
                      <p className="text-sm font-semibold">{product.name}</p>
                      {product.refCode && <p className="text-xs text-muted-foreground">{product.refCode}</p>}
                      <Link
                        to={`/contact?product=${encodeURIComponent(product.name)}`}
                        className="mt-2 inline-block text-xs gradient-bg text-primary-foreground px-3 py-1 rounded-full"
                      >
                        Add
                      </Link>
                    </div>
                  </motion.div>
                </SectionReveal>
              ))}
            </div>
          </>
        )}

        <SectionReveal>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Book This Service
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default ServiceDetail;
