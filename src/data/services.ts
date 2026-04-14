export interface ServiceItem {
  name: string;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Appliance Installation & Repair",
    slug: "appliance-installation-repair",
    description: "Professional installation, repair and maintenance of all home and commercial appliances.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    items: [
      { name: "Geyser Installation" },
      { name: "Geyser Repair" },
      { name: "Geyser Uninstallation" },
      { name: "Washing Machine Installation" },
      { name: "Washing Machine Repair" },
      { name: "Chimney Installation" },
      { name: "Chimney Repair" },
      { name: "Exhaust Fan Installation" },
      { name: "Exhaust Fan Repair" },
      { name: "Motor Pump Installation" },
      { name: "Motor Pump Repair" },
      { name: "Doorbell Installation" },
    ],
  },
  {
    title: "Fans",
    slug: "fans",
    description: "Expert fan installation, repair and replacement services for all types of fans.",
    icon: "Fan",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    items: [
      { name: "Smart/BLDC Fan Installation" },
      { name: "Fan Installation" },
      { name: "Fan Replacement" },
      { name: "Fan Repair" },
      { name: "Fan Uninstallation" },
      { name: "Fan Regulator Repair" },
    ],
  },
  {
    title: "Lighting",
    slug: "lighting",
    description: "Complete lighting solutions from installation to repair for homes and businesses.",
    icon: "Lightbulb",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    items: [
      { name: "Decorative Light Installation" },
      { name: "Chandelier Installation" },
      { name: "LED Panel Light Installation" },
      { name: "Tube Light Installation" },
      { name: "Tube Light Repair" },
      { name: "Bulb/CFL Replacement" },
      { name: "Outdoor Light Installation" },
      { name: "Spotlight Installation" },
    ],
  },
  {
    title: "Switch, Socket & Smart Home",
    slug: "switch-socket-smart-home",
    description: "Modern switch, socket installations and smart home automation solutions.",
    icon: "ToggleRight",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    items: [
      { name: "Switch/Socket Replacement" },
      { name: "Switch Board Installation" },
      { name: "Dimmer Switch Installation" },
      { name: "Smart Switch Installation" },
      { name: "Smart Plug Setup" },
      { name: "USB Socket Installation" },
    ],
  },
  {
    title: "Inverter & Stabilizer",
    slug: "inverter-stabilizer",
    description: "Reliable power backup and voltage stabilization solutions.",
    icon: "Battery",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80",
    items: [
      { name: "Inverter Installation" },
      { name: "Inverter Repair" },
      { name: "Inverter Battery Replacement" },
      { name: "Stabilizer Installation" },
      { name: "Stabilizer Repair" },
      { name: "UPS Installation" },
      { name: "UPS Repair" },
    ],
  },
  {
    title: "MCB, Submeter & Wiring",
    slug: "mcb-submeter-wiring",
    description: "Professional electrical wiring, MCB installation and submeter services.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    items: [
      { name: "MCB/RCCB Installation" },
      { name: "MCB/RCCB Replacement" },
      { name: "Submeter Installation" },
      { name: "New Wiring (Per Point)" },
      { name: "Wiring Repair" },
      { name: "Distribution Board Installation" },
      { name: "Earthing Installation" },
      { name: "Earthing Repair" },
    ],
  },
  {
    title: "Home Automation",
    slug: "home-automation",
    description: "Smart home automation solutions for modern living.",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    items: [
      { name: "Smart Lighting Setup" },
      { name: "Smart Fan Control" },
      { name: "Voice Assistant Integration" },
      { name: "Smart Security Camera Setup" },
      { name: "Smart Door Lock Installation" },
      { name: "Automated Curtain/Blind Setup" },
    ],
  },
  {
    title: "General Services",
    slug: "general-services",
    description: "General electrical maintenance, inspection and troubleshooting services.",
    icon: "Settings",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    items: [
      { name: "Electrical Inspection" },
      { name: "Fault Finding / Troubleshooting" },
      { name: "Power Socket Extension" },
      { name: "Electrical Maintenance (AMC)" },
      { name: "Generator Installation" },
      { name: "Generator Repair" },
      { name: "CCTV Installation" },
      { name: "CCTV Repair" },
    ],
  },
];
