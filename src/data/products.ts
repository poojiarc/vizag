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
  { name: "Ceiling Fan", refCode: "VE-FAN-001", category: "Fans", image: "https://images.unsplash.com/photo-1572455043072-c24b43f4a248?w=400&q=80" },
  { name: "BLDC Smart Fan", refCode: "VE-FAN-002", category: "Fans", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" },
  { name: "Exhaust Fan", refCode: "VE-FAN-003", category: "Fans", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
  { name: "Table Fan", refCode: "VE-FAN-004", category: "Fans", image: "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=400&q=80" },
  { name: "Wall Fan", refCode: "VE-FAN-005", category: "Fans", image: "https://images.unsplash.com/photo-1631548556373-3fa3aff13fa0?w=400&q=80" },
  { name: "Fan Regulator", refCode: "VE-FAN-006", category: "Fans", image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?w=400&q=80" },

  // Lighting
  { name: "LED Bulb", refCode: "VE-LT-001", category: "Lighting", image: "https://images.unsplash.com/photo-1565814636199-ae8133055a1c?w=400&q=80" },
  { name: "LED Tube Light", refCode: "VE-LT-002", category: "Lighting", image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80" },
  { name: "LED Panel Light", refCode: "VE-LT-003", category: "Lighting", image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&q=80" },
  { name: "LED Strip Light", refCode: "VE-LT-004", category: "Lighting", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80" },
  { name: "Chandelier", refCode: "VE-LT-005", category: "Lighting", image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&q=80" },
  { name: "Spotlight", refCode: "VE-LT-006", category: "Lighting", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Outdoor Light", refCode: "VE-LT-007", category: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80" },
  { name: "Decorative Light", refCode: "VE-LT-008", category: "Lighting", image: "https://images.unsplash.com/photo-1530603907829-659dc1b3f567?w=400&q=80" },

  // Appliances
  { name: "Geyser / Water Heater", refCode: "VE-AP-001", category: "Appliances", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },
  { name: "Chimney", refCode: "VE-AP-002", category: "Appliances", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" },
  { name: "Water Pump / Motor", refCode: "VE-AP-003", category: "Appliances", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80" },
  { name: "Doorbell", refCode: "VE-AP-004", category: "Appliances", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80" },

  // Switch, Socket & Smart Home
  { name: "Modular Switch", refCode: "VE-SW-001", category: "Switch, Socket & Smart Home", image: "https://images.unsplash.com/photo-1544724107-6d5c4caaff30?w=400&q=80" },
  { name: "Smart Switch", refCode: "VE-SW-002", category: "Switch, Socket & Smart Home", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" },
  { name: "USB Socket", refCode: "VE-SW-003", category: "Switch, Socket & Smart Home", image: "https://images.unsplash.com/photo-1563884072569-1e1057ce1178?w=400&q=80" },
  { name: "Dimmer Switch", refCode: "VE-SW-004", category: "Switch, Socket & Smart Home", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80" },
  { name: "Smart Plug", refCode: "VE-SW-005", category: "Switch, Socket & Smart Home", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },

  // Inverter & Stabilizer
  { name: "Inverter", refCode: "VE-INV-001", category: "Inverter & Stabilizer", image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&q=80" },
  { name: "Inverter Battery", refCode: "VE-INV-002", category: "Inverter & Stabilizer", image: "https://images.unsplash.com/photo-1619641805634-b867e5e6fa06?w=400&q=80" },
  { name: "Voltage Stabilizer", refCode: "VE-INV-003", category: "Inverter & Stabilizer", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80" },
  { name: "UPS", refCode: "VE-INV-004", category: "Inverter & Stabilizer", image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&q=80" },

  // MCB, Submeter & Wiring
  { name: "MCB (Miniature Circuit Breaker)", refCode: "VE-MCB-001", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80" },
  { name: "RCCB", refCode: "VE-MCB-002", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&q=80" },
  { name: "Distribution Board", refCode: "VE-MCB-003", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1581092921461-eab10380ed26?w=400&q=80" },
  { name: "Submeter", refCode: "VE-MCB-004", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&q=80" },
  { name: "Wiring Cable (per meter)", refCode: "VE-MCB-005", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
  { name: "Earthing Kit", refCode: "VE-MCB-006", category: "MCB, Submeter & Wiring", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80" },

  // General Professional Services
  { name: "CCTV Camera", refCode: "VE-GEN-001", category: "General Professional Services", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&q=80" },
  { name: "Generator (Portable)", refCode: "VE-GEN-002", category: "General Professional Services", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80" },
  { name: "Smart Door Lock", refCode: "VE-GEN-003", category: "General Professional Services", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80" },
  { name: "Smart Security Camera", refCode: "VE-GEN-004", category: "General Professional Services", image: "https://images.unsplash.com/photo-1580820267682-426da823b514?w=400&q=80" },
];
