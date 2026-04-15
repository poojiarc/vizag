import { motion } from "framer-motion";

const logos = [
  { name: "Havells", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Havells_Logo.svg/200px-Havells_Logo.svg.png" },
  { name: "Crompton", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Crompton_Greaves_Consumer_Electricals_logo.svg/200px-Crompton_Greaves_Consumer_Electricals_logo.svg.png" },
  { name: "Bajaj", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Bajaj_Electricals_logo.svg/200px-Bajaj_Electricals_logo.svg.png" },
  { name: "Philips", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Philips_logo_new.svg/200px-Philips_logo_new.svg.png" },
  { name: "Polycab", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Polycab_logo.svg/200px-Polycab_logo.svg.png" },
  { name: "Schneider", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_2007.svg/200px-Schneider_Electric_2007.svg.png" },
  { name: "Legrand", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Legrand_logo.svg/200px-Legrand_logo.svg.png" },
];

const brandNames = [
  "Havells", "Crompton", "Bajaj", "Orient", "Philips",
  "Syska", "Anchor", "Polycab", "Finolex", "Luminous",
  "Microtek", "V-Guard", "Schneider", "Legrand", "GM",
];

const InfiniteSlider = () => (
  <div className="bg-black/20 backdrop-blur-sm border-t border-white/5">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center py-6 gap-6">
        {/* Left text */}
        <div className="shrink-0 text-center md:text-left">
          <p className="text-sm text-muted-foreground font-medium">Powering the best teams</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-white/10" />

        {/* Slider */}
        <div className="overflow-hidden flex-1 w-full">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...brandNames, ...brandNames].map((brand, i) => (
              <div key={i} className="flex items-center justify-center min-w-[100px]">
                <span className="text-sm font-semibold text-white/40 whitespace-nowrap">{brand}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

export default InfiniteSlider;
