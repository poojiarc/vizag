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
  { name: "Ceiling Fan", refCode: "VE-FAN-001", category: "Fans", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },
  { name: "BLDC Smart Fan", refCode: "VE-FAN-002", category: "Fans", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },
  { name: "Exhaust Fan", refCode: "VE-FAN-003", category: "Fans", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },
  { name: "Table Fan", refCode: "VE-FAN-004", category: "Fans", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },
  { name: "Wall Fan", refCode: "VE-FAN-005", category: "Fans", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },
  { name: "Fan Regulator", refCode: "VE-FAN-006", category: "Fans", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },

  // Lighting
  { name: "LED Bulb", refCode: "VE-LT-001", category: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80" },
  { name: "LED Tube Light", refCode: "VE-LT-002", category: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80" },
  { name: "LED Panel Light", refCode: "VE-LT-003", category: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80" },
  { name: "LED Strip Light", refCode: "VE-LT-004", category: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80" },
  { name: "Chandelier", refCode: "VE-LT-005", category: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80" },
  { name: "Spotlight", refCode: "VE-LT-006", category: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80" },
  { name: "Outdoor Light", refCode: "VE-LT-007", category: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80" },
  { name: "Decorative Light", refCode: "VE-LT-008", category: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80" },

  // Appliances
  { name: "Geyser / Water Heater", refCode: "VE-AP-001", category: "Appliances", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80" },
  { name: "Chimney", refCode: "VE-AP-002", category: "Appliances", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80" },
  { name: "Water Pump / Motor", refCode: "VE-AP-003", category: "Appliances", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80" },
  { name: "Doorbell", refCode: "VE-AP-004", category: "Appliances", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80" },

  // Switch, Socket & Smart Home
  { name: "Modular Switch", refCode: "VE-SW-001", category: "Switch, Socket & Smart Home", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
  { name: "Smart Switch", refCode: "VE-SW-002", category: "Switch, Socket & Smart Home", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
  { name: "USB Socket", refCode: "VE-SW-003", category: "Switch, Socket & Smart Home", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
  { name: "Dimmer Switch", refCode: "VE-SW-004", category: "Switch, Socket & Smart Home", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
  { name: "Smart Plug", refCode: "VE-SW-005", category: "Switch, Socket & Smart Home", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },

  // Inverter & Stabilizer
  { name: "Inverter", refCode: "VE-INV-001", category: "Inverter & Stabilizer", image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&q=80" },
  { name: "Inverter Battery", refCode: "VE-INV-002", category: "Inverter & Stabilizer", image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&q=80" },
  { name: "Voltage Stabilizer", refCode: "VE-INV-003", category: "Inverter & Stabilizer", image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&q=80" },
  { name: "UPS", refCode: "VE-INV-004", category: "Inverter & Stabilizer", image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&q=80" },

  // MCB, Submeter & Wiring
  { name: "MCB (Miniature Circuit Breaker)", refCode: "VE-MCB-001", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80" },
  { name: "RCCB", refCode: "VE-MCB-002", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80" },
  { name: "Distribution Board", refCode: "VE-MCB-003", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80" },
  { name: "Submeter", refCode: "VE-MCB-004", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80" },
  { name: "Wiring Cable (per meter)", refCode: "VE-MCB-005", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80" },
  { name: "Earthing Kit", refCode: "VE-MCB-006", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80" },

  // General Professional Services
  { name: "CCTV Camera", refCode: "VE-GEN-001", category: "General Professional Services", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80" },
  { name: "Generator (Portable)", refCode: "VE-GEN-002", category: "General Professional Services", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80" },
  { name: "Smart Door Lock", refCode: "VE-GEN-003", category: "General Professional Services", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80" },
  { name: "Smart Security Camera", refCode: "VE-GEN-004", category: "General Professional Services", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80" },
];
