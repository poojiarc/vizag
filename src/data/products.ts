export interface Product {
  name: string;
  refCode?: string;
  category: string;
  image: string;
}

export const productCategories = [
  "Fans",
  "Lighting",
  "Appliances",
  "Switch, Socket & Smart Home",
  "Inverter & Stabilizer",
  "MCB, Submeter & Wiring",
  "General Professional Services",
] as const;

export const products: Product[] = [
  // Fans
  { name: "Ceiling Fan", refCode: "VE-FAN-001", category: "Fans", image: "https://img.freepik.com/free-psd/modern-black-ceiling-fan-with-integrated-led-light_191095-86171.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "BLDC Smart Fan", refCode: "VE-FAN-002", category: "Fans", image: "https://orpatgroup.s3.ap-south-1.amazonaws.com/wp-content/uploads/2026/04/LELANTOS-BIRCH-WOOD-QQQ-29-01-2025-600x600.jpg" },
  { name: "Exhaust Fan", refCode: "VE-FAN-003", category: "Fans", image: "https://cdn.moglix.com/p/jFe3Ar9Qz23SX-xxlarge.jpg" },
  { name: "Table Fan", refCode: "VE-FAN-004", category: "Fans", image: "https://www.ivas.homes/electricals/assets/product-img/1723782502580_Breeze_HS-TPW_Table_Black.png" },
  { name: "Wall Fan", refCode: "VE-FAN-005", category: "Fans", image: "https://havells.com/media/catalog/product/cache/844a913d283fe95e56e39582c5f2767b/f/h/fhwsw4sblk16_1.jpg" },
  { name: "Fan Regulator", refCode: "VE-FAN-006", category: "Fans", image: "https://shiningbulb.com/wp-content/uploads/AC2040-ShiningBulbcom-1.jpg" },

  // Lighting
  { name: "LED Bulb", refCode: "VE-LT-001", category: "Lighting", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp7GclYhnVaHJW96EoHIXaCryLxkgu7MDBg&s" },
  { name: "LED Tube Light", refCode: "VE-LT-002", category: "Lighting", image: "https://www.goldmedalindia.com/blog/wp-content/uploads/2024/11/How-to-Change-an-LED-Tube-Light.jpg" },
  { name: "LED Panel Light", refCode: "VE-LT-003", category: "Lighting", image: "https://www.goldmedalindia.com/blog/wp-content/uploads/2023/09/A-Comprehensive-Guide-to-LED-Panel-Lights.jpg" },
  { name: "LED Strip Light", refCode: "VE-LT-004", category: "Lighting", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Artboard_3_12c49fc8-d4de-40e3-b762-9b52738d824e.png?v=1747311686" },
  { name: "Chandelier", refCode: "VE-LT-005", category: "Lighting", image: "https://haroldelectricals.com/cdn/shop/products/LeBrilliantChandelierHarold.png?v=1649711887" },
  { name: "Spotlight", refCode: "VE-LT-006", category: "Lighting", image: "https://www.lighting-direct.co.uk/media/catalog/product/2/9/29066_01.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=" },
  {
    name: "Outdoor Light",
    refCode: "VE-LT-007",
    category: "Lighting",
    image: "https://m.media-amazon.com/images/I/7196nDDe-yL.jpg"
  },
  {
    name: "Decorative Light",
    refCode: "VE-LT-008",
    category: "Lighting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdUBR5lLVp_FD361jac40Dxy9mlvz35d4DA&s"
  },

  // Appliances
  {
    name: "Geyser / Water Heater",
    refCode: "VE-AP-001",
    category: "Appliances",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZniMdp_l2iheL2vO3_ZoUKRMoXrONkheu5A&s"
  },
  {
    name: "Chimney",
    refCode: "VE-AP-002",
    category: "Appliances",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/6/426620553/UX/UH/FI/3911276/kitchen-chimney.jpg"
  },
  {
    name: "Water Pump / Motor",
    refCode: "VE-AP-003",
    category: "Appliances",
    image: "https://m.media-amazon.com/images/I/81zxmNowlAL.jpg"
  },
  {
    name: "Doorbell",
    refCode: "VE-AP-004",
    category: "Appliances",
    image: "https://m.media-amazon.com/images/I/61-WZ9X7ppL._AC_UF1000,1000_QL80_.jpg"
  },

  // Switch, Socket & Smart Home
  {
    name: "Modular Switch",
    refCode: "VE-SW-001",
    category: "Switch, Socket & Smart Home",
    image: "https://m.media-amazon.com/images/I/41-2tZiQoLL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Smart Switch",
    refCode: "VE-SW-002",
    category: "Switch, Socket & Smart Home",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4elsPRgSbkbHxKF3h7Kw52ekjdSRHVxOvQ&s"
  },
  {
    name: "USB Socket",
    refCode: "VE-SW-003",
    category: "Switch, Socket & Smart Home",
    image: "https://m.media-amazon.com/images/I/51nNlgfqHPL.jpg"
  },
  {
    name: "Dimmer Switch",
    refCode: "VE-SW-004",
    category: "Switch, Socket & Smart Home",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTAheEcMh2ZqETPXWhxR0Mwk8O8f_kOrXZg&s"
  },
  {
    name: "Smart Plug",
    refCode: "VE-SW-005",
    category: "Switch, Socket & Smart Home",
    image: "https://m.media-amazon.com/images/I/51EcK82FOUL.jpg"
  },

  // Inverter & Stabilizer
  {
    name: "Inverter",
    refCode: "VE-INV-001",
    category: "Inverter & Stabilizer",
    image: "https://lumprodsta.blob.core.windows.net/prodcontainer/Images/48753258-6e02-4947-ad84-e30bcd081d08_NXG_1850_1.png"
  },
  {
    name: "Inverter Battery",
    refCode: "VE-INV-002",
    category: "Inverter & Stabilizer",
    image: "https://www.batteryboss.in/assets/images/batteryboss/battery/341_Luminous%20Red%20Charge%20RC%2018000ST%20PRO%20150AH%2012V%20Inverter%20Battery.jpg"
  },
  {
    name: "Voltage Stabilizer",
    refCode: "VE-INV-003",
    category: "Inverter & Stabilizer",
    image: "https://5.imimg.com/data5/GB/BP/HH/SELLER-6929611/stabilizers.jpg"
  },
  {
    name: "UPS",
    refCode: "VE-INV-004",
    category: "Inverter & Stabilizer",
    image: "https://cms.microtek.in/upload/product/UPS-LEGEND-650-0-1720602014877.jpg"
  },

  // MCB, Submeter & Wiring
  {
    name: "MCB (Miniature Circuit Breaker)",
    refCode: "VE-MCB-001",
    category: "MCB, Submeter & Wiring",
    image: "https://5.imimg.com/data5/LS/QV/AH/SELLER-2488669/mcb-500x500.png"
  },
  {
    name: "RCCB",
    refCode: "VE-MCB-002",
    category: "MCB, Submeter & Wiring",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd68k4E-AU92CCqBfTJipZHGdo8cojp1FacQ&s"
  },
  {
    name: "Distribution Board",
    refCode: "VE-MCB-003",
    category: "MCB, Submeter & Wiring",
    image: "https://5.imimg.com/data5/CJ/XZ/PW/SELLER-8415811/electrical-distribution-board-500x500.jpg"
  },
  {
    name: "Submeter",
    refCode: "VE-MCB-004",
    category: "MCB, Submeter & Wiring",
    image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/metal-electrical-box/y/1/7/6-submeter-for-electricity-meter-reading-bntek-6-original-imahkd58hjmzbkge.jpeg?q=70"
  },
  {
    name: "Wiring Cable (per meter)",
    refCode: "VE-MCB-005",
    category: "MCB, Submeter & Wiring",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/1/VX/ME/BB/118741601/electric-service-wire-2.jpeg"
  },
  {
    name: "Earthing Kit",
    refCode: "VE-MCB-006",
    category: "MCB, Submeter & Wiring",
    image: "https://in.element14.com/productimages/standard/en_GB/1371336-40.jpg"
  },

  // General Professional Services
  {
    name: "CCTV Camera",
    refCode: "VE-GEN-001",
    category: "General Professional Services",
    image: "https://tiimg.tistatic.com/fp/1/007/800/easy-to-setup-black-color-bullet-cctv-camera-for-home-high-weather-resistivity-445.jpg"
  },
  {
    name: "Generator (Portable)",
    refCode: "VE-GEN-002",
    category: "General Professional Services",
    image: "https://static1.industrybuying.com/products/electrical/generators-transformers/portable-generators/ELE.POR.427500583_1727267260974.webp"
  },
  {
    name: "Smart Door Lock",
    refCode: "VE-GEN-003",
    category: "General Professional Services",
    image: "https://okos.in/cdn/shop/products/lock2_800x.jpg?v=1737481819"
  },
  {
    name: "Smart Security Camera",
    refCode: "VE-GEN-004",
    category: "General Professional Services",
    image: "https://i.ytimg.com/vi/9hXZ7oPpOuk/maxresdefault.jpg"
  }
];