import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Phone } from "lucide-react";
import Hls from "hls.js";
import InfiniteSlider from "@/components/InfiniteSlider";
import SectionReveal from "@/components/SectionReveal";
import { serviceCategories } from "@/data/services";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const src = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-30 pointer-events-none"
    />
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
        <HeroVideo />

        <div className="relative z-20 container mx-auto px-4 text-center">
          {/* Announcement pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
            <span className="text-xs text-muted-foreground">Used by homeowners. Trusted by professionals.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Your Vision.{" "}
            <span className="gradient-text">Our Electrical Precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            We power homes, offices, showrooms, workshops, hospitals, schools, colleges and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="gradient-bg text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Book a Service
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:7981188798"
              className="glass px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              7981188798
            </a>
          </motion.div>
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Logo slider */}
      <InfiniteSlider />

      {/* Services preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Professional electrical solutions for every need
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCategories.map((cat, i) => (
              <SectionReveal key={cat.slug} delay={i * 0.05}>
                <Link to={`/services/${cat.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="relative h-48 rounded-xl overflow-hidden glass group cursor-pointer"
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                      loading="lazy"
                    />
                    <div className="relative z-10 h-full flex flex-col justify-end p-4">
                      <h3 className="font-semibold text-sm">{cat.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{cat.items.length} services</p>
                    </div>
                  </motion.div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 24 Hour Emergency */}
      <SectionReveal>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="gradient-bg rounded-2xl p-8 md:p-12 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                24 Hour Emergency Service
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
                Electrical emergency? We're available round the clock. Call us anytime for immediate assistance.
              </p>
              <a
                href="tel:7981188798"
                className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:bg-background/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call 7981188798
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>
    </div>
  );
};

export default Index;
