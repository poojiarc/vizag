import { motion } from "framer-motion";

const brands = [
  { name: "Havells", url: "https://logo.clearbit.com/havells.com" },
  { name: "Crompton", url: "https://logo.clearbit.com/crompton.co.in" },
  { name: "Bajaj Electricals", url: "https://logo.clearbit.com/bajajelectricals.com" },
  { name: "Philips", url: "https://logo.clearbit.com/philips.com" },
  { name: "Polycab", url: "https://logo.clearbit.com/polycab.com" },
  { name: "Schneider", url: "https://logo.clearbit.com/se.com" },
  { name: "Legrand", url: "https://logo.clearbit.com/legrand.com" },
  { name: "Orient", url: "https://logo.clearbit.com/orientelectric.com" },
  { name: "Syska", url: "https://logo.clearbit.com/syska.co.in" },
  { name: "Anchor", url: "https://logo.clearbit.com/anchor-world.com" },
  { name: "Finolex", url: "https://logo.clearbit.com/finolex.com" },
  { name: "Luminous", url: "https://logo.clearbit.com/luminousindia.com" },
  { name: "V-Guard", url: "https://logo.clearbit.com/vguard.in" },
  { name: "Microtek", url: "https://logo.clearbit.com/microtekdirect.com" },
];

const InfiniteSlider = () => (
  <div className="bg-black/30 backdrop-blur-sm border-y border-white/5">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center py-6 gap-6">
        <div className="shrink-0 text-center md:text-left">
          <p className="text-sm text-muted-foreground font-medium">Powering the best teams</p>
        </div>

        <div className="hidden md:block w-px h-10 bg-white/10" />

        <div className="overflow-hidden flex-1 w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center justify-center min-w-[120px] h-12 gap-2">
                <img
                  src={brand.url}
                  alt={brand.name}
                  className="h-8 w-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <span className="text-sm font-semibold text-white/60 whitespace-nowrap">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

export default InfiniteSlider;
