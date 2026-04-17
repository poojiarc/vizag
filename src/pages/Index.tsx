import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Phone, BadgeCheck } from "lucide-react";
import Hls from "hls.js";
import InfiniteSlider from "@/components/InfiniteSlider";
import SectionReveal from "@/components/SectionReveal";
import { serviceCategories } from "@/data/services";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const heroBackgrounds = [heroBg1, heroBg2, heroBg3];

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const src = "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8";
    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => setBgIndex((i) => (i + 1) % heroBackgrounds.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Rotating background images */}
      <AnimatePresence mode="sync">
        <motion.img
          key={bgIndex}
          src={heroBackgrounds[bgIndex]}
          alt="Vizag Electro hero background"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.55, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      {/* Video on top with blend */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40 z-10 pointer-events-none" />
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero — full-screen with video background */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <HeroVideo />

        {/* Bottom-left hero content */}
        <div className="relative z-20 container mx-auto px-6 pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ background: "rgba(43,35,10,0.4)", border: "1px solid rgba(212,168,37,0.2)" }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-md gradient-bg shadow-[0_0_12px_rgba(212,168,37,0.5)]">
              <Zap className="w-3.5 h-3.5 text-primary-foreground" />
            </span>
            <span className="text-xs text-foreground/70">Used by homeowners. Trusted by professionals.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.08] mb-5 max-w-3xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[hsl(45,30%,95%)] via-[hsl(43,80%,70%)] to-[hsl(43,85%,55%)]">
              Your Vision.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[hsl(43,80%,70%)] via-[hsl(43,85%,55%)] to-[hsl(38,90%,40%)]">
              Our Electrical Precision.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-foreground/70 text-base md:text-lg max-w-xl mb-8"
          >
            We power homes, offices, showrooms, workshops, hospitals, schools, colleges and more — with precision and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <div className="rounded-full p-[1px] bg-gradient-to-r from-[hsl(43,80%,70%)]/30 to-[hsl(38,90%,40%)]/10">
              <Link
                to="/contact"
                className="gradient-bg text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-3 hover:opacity-90 transition-opacity"
              >
                Book a Service
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/20">
                  <ArrowRight className="w-4 h-4 text-primary-foreground" />
                </span>
              </Link>
            </div>
            <a
              href="tel:7981188798"
              className="glass px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-primary" />
              7981188798
            </a>
          </motion.div>
        </div>
      </section>

      {/* Logo slider */}
      <InfiniteSlider />

      {/* AMC Highlight */}
      <SectionReveal>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl glass border border-primary/30 p-6 md:p-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl gradient-bg shadow-[0_0_40px_hsl(43_85%_55%/0.4)]">
                  <BadgeCheck className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">Annual Maintenance Contract</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    AMC starting at just <span className="gradient-text">₹49 / month</span>
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground">
                    For offices, apartments, schools, colleges, showrooms, function halls, businesses & more.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="shrink-0 inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Get AMC Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

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
