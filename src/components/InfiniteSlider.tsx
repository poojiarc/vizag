const brands = [
  "Havells", "Crompton", "Bajaj", "Orient", "Philips",
  "Syska", "Anchor", "Polycab", "Finolex", "Luminous",
  "Microtek", "V-Guard", "Schneider", "Legrand", "GM",
];

const InfiniteSlider = () => (
  <div className="overflow-hidden py-8 border-y border-border">
    <div className="flex animate-slide-left" style={{ width: "max-content" }}>
      {[...brands, ...brands].map((brand, i) => (
        <div
          key={i}
          className="mx-8 flex items-center justify-center px-6 py-3 glass rounded-lg min-w-[140px]"
        >
          <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{brand}</span>
        </div>
      ))}
    </div>
  </div>
);

export default InfiniteSlider;
