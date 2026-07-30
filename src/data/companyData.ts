export interface ContactPerson {
  name: string;
  phone: string;
  waLink: string;
  role?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  icon: string; // Lucide icon identifier name
  details: string[];
  subcategories?: {
    title: string;
    items: string[];
  }[];
}

export interface EquipmentItem {
  id: number;
  name: string;
  category: string;
  description?: string;
}

export interface ProjectTrackRecord {
  id: number;
  title: string;
  location: string;
  date: string;
  category: 'Hull Cleaning' | 'Video Survey' | 'Subsea Repair' | 'Hydrographic & Inspection' | 'Underwater Works';
}

export const COMPANY_INFO = {
  name: "PT. FIONA LINTAS SERVIS",
  tagline: "Commercial Diving, Marine Salvage & Subsea Engineering Experts",
  shortName: "Fiona Lintas Servis",
  address: "Komplek Pertokoan Tiban Lestari Blok RC No. 16, Tiban Indah - Sekupang, Batam - Kepulauan Riau, Indonesia",
  phone: "+62-778-323-074",
  fax: "+62-778-351-005",
  emails: [
    "fionalintas.servis@fiona-sejahtera.com",
    "fiona@fiona-sejahtera.com"
  ],
  contactPersons: [
    {
      name: "Sukri",
      phone: "+62-813-7215-4234",
      waLink: "https://wa.me/6281372154234",
      role: "Operations & Technical Lead"
    },
    {
      name: "Fionna",
      phone: "+62-813-5751-5108",
      waLink: "https://wa.me/6281357515108",
      role: "Commercial & Business Inquiries"
    }
  ] as ContactPerson[]
};

export const VISION_MISSION = {
  vision: "Being a leading diversified entity through excellence in our core business.",
  mission: [
    "As a business entity, we optimize our service quality, efficiency of cost, and profitability in all company activities.",
    "As a private company, we contribute to public welfare through Community Social Responsibility (CSR) programs."
  ]
};

export const CORE_VALUES = [
  {
    title: "Customer Focus",
    description: "We try to meet and exceed customers' demands by delivering all of our promises."
  },
  {
    title: "Honesty and Integrity",
    description: "Honesty and integrity are the foundation of our trust. The company's success stems from the approach and honesty of our employees."
  },
  {
    title: "Trust",
    description: "Trust in our company is built by sharing a common purpose and always prioritizing our clients' requirements."
  },
  {
    title: "Knowledge-Sharing Culture",
    description: "We focus on company-wide knowledge-sharing platforms consisting of a wide range of information-exchange tools and techniques, creating a true knowledge-sharing corporate culture."
  },
  {
    title: "Collaborative Teamwork",
    description: "Collaborative teamwork is a strategic capability and a key keyword for business success."
  },
  {
    title: "Commitment to Excellence",
    description: "Commitment to excellence is built when we earn our customers' trust in every detail."
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "inspection",
    title: "INSPECTION SERVICE",
    shortDesc: "Comprehensive NDT and structural subsea inspection using advanced video and measurement technologies.",
    icon: "Search",
    details: [
      "Pipeline & Cable Inspection",
      "SPM / SBM Floating Hose Inspection",
      "NDT Inspection (Cathodic Protection, Ultrasonic Thickness UT, Magnetic Particle Inspection MPI, NTT Eddy Current)"
    ],
    subcategories: [
      {
        title: "Pipeline & Offshore Hose Inspection",
        items: ["Subsea Pipeline & Cable Integrity Checks", "SPM / SBM Floating Hose Structural Verification"]
      },
      {
        title: "NDT (Non-Destructive Testing) Methods",
        items: [
          "Cathodic Protection (CP) Inspection & Anode Potential Measurement",
          "Ultrasonic Thickness (UT) Gauging",
          "Magnetic Particle Inspection (MPI)",
          "NTT Eddy Current Testing"
        ]
      }
    ]
  },
  {
    id: "underwater-repair",
    title: "UNDERWATER REPAIR AND MAINTENANCE",
    shortDesc: "Full-spectrum maintenance for port structures, SPM/SBM systems, and subsea pipelines.",
    icon: "Wrench",
    details: [
      "Port Structure Facilities Repair & Maintenance",
      "Offshore Structure Facilities (SPM / SBM Structure Facility, Pipeline and Cable Structure)",
      "Navigation Facilities Repair"
    ],
    subcategories: [
      {
        title: "Port & Harbors",
        items: ["Port Structure Facilities Repair & Maintenance", "Piling & Jetty Rehabilitation"]
      },
      {
        title: "Offshore Facilities & Navigation",
        items: [
          "SPM / SBM Structure Facility Maintenance",
          "Pipeline and Cable Subsea Support & Stabilization",
          "Navigation Buoy & Marker Repairs"
        ]
      }
    ]
  },
  {
    id: "ship-service",
    title: "SHIP SERVICE",
    shortDesc: "Certified UWILD inspections, underwater hull cleaning, propeller polishing, and ship repair.",
    icon: "Ship",
    details: [
      "Underwater Inspection IN-LIEU of Dry Docking (UWILD)",
      "Damage Survey",
      "Hull Cleaning",
      "Propeller Polishing",
      "Underwater Welding and Cutting",
      "Underwater Repair Ship Structure",
      "Ship Sale Inspection"
    ],
    subcategories: [
      {
        title: "Class Approved Surveys & Sales",
        items: ["UWILD (In-Lieu of Dry Docking) Inspection", "Comprehensive Damage Survey", "Pre-Purchase & Ship Sale Inspection"]
      },
      {
        title: "Maintenance & Mechanical Operations",
        items: ["Underwater Hull Cleaning & Fouling Removal", "Super-Smooth Propeller Polishing", "Underwater Structural Welding & Thermal Cutting"]
      }
    ]
  },
  {
    id: "underwater-works",
    title: "UNDERWATER WORKS",
    shortDesc: "Heavy underwater construction, wet/dry welding, cold cutting, sand blasting, and corrosion protection.",
    icon: "Anchor",
    details: [
      "Construction and Anode Installation",
      "Wet and Dry Welding",
      "Cutting / Burning",
      "Cold Cutting",
      "Waterjet Cleaning and Sand Blasting",
      "Painting, Coating, Wrapping, etc."
    ],
    subcategories: [
      {
        title: "Construction & Protection",
        items: ["Subsea Construction & Cathodic Anode Installation", "Wet and Hyperbaric Dry Welding", "Protective Marine Painting, Coating & Wrapping"]
      },
      {
        title: "Subsea Tooling & Blasting",
        items: ["Thermal Cutting / Oxygen-Arc Burning", "Cold Cutting Operations", "Ultra High-Pressure Waterjet Cleaning & Sand Blasting"]
      }
    ]
  },
  {
    id: "hydrographic-surveying",
    title: "HYDROGRAPHIC SURVEYING",
    shortDesc: "National & international certified bathymetric surveys, seabed volume analysis, and pipeline path investigations.",
    icon: "MapPin",
    details: [
      "Bathymetric Surveys",
      "Seabed Volume Survey",
      "Seabed Pipeline Investigations",
      "Progress and Post Dredge Survey",
      "Channel and Harbour Depth Certification"
    ],
    subcategories: [
      {
        title: "Survey Scope & Offerings",
        items: [
          "Bathymetric Surveys for Coastal & Offshore Infrastructure",
          "Seabed Volume & Dredging Calculation",
          "Seabed Pipeline & Cable Route Investigations",
          "Progress & Post-Dredge Survey Verification",
          "Official Channel & Harbour Depth Certification"
        ]
      },
      {
        title: "Technology & Equipment Fleet",
        items: [
          "State-of-the-art GNSS Equipment with RTK Positioning",
          "Specialized Survey Vessel rated to 2C Survey Standards",
          "Dual-Frequency & Multi-Beam Echo Sounders",
          "Advanced Data Reduction & Bathymetric Processing Software"
        ]
      }
    ]
  }
];

export const EQUIPMENT_FLEET: EquipmentItem[] = [
  { id: 1, name: "Umbilical Systems", category: "Diving Systems", description: "Surface-supplied diving air hose & comms assembly" },
  { id: 2, name: "CCTV Portable Video System", category: "Inspection & Video", description: "Real-time surface monitoring with high-res recording" },
  { id: 3, name: "KMB 37 & KMB Band Mask 18", category: "Diving Systems", description: "Industry standard Kirby Morgan commercial diving helmets & masks" },
  { id: 4, name: "SRP & Aqualung Tank", category: "Air & Breathing", description: "Emergency reserve and scuba cylinder tanks" },
  { id: 5, name: "Air Compressor", category: "Air & Breathing", description: "Low-pressure surface supplied air delivery unit" },
  { id: 6, name: "HP Charging Compressor", category: "Air & Breathing", description: "High-pressure breathing air filling compressor" },
  { id: 7, name: "Air Control Panel", category: "Diving Systems", description: "Precision multi-diver air management and depth manifold" },
  { id: 8, name: "Two-Way Radio Communication", category: "Communications", description: "Surface-to-diver clarity comms link" },
  { id: 9, name: "Lifting Bags", category: "Salvage & Rigging", description: "Enclosed & open-bottom subsea salvage lift bags" },
  { id: 10, name: "Air Diver & Scuba Regulator", category: "Diving Systems", description: "High-demand underwater air regulators" },
  { id: 11, name: "Hand Scraps", category: "Cleaning & Tools", description: "Heavy-duty marine growth cleaning hand scrapers" },
  { id: 12, name: "Underwater Camera + Housing", category: "Inspection & Video", description: "Depth-rated digital still & video camera systems" },
  { id: 13, name: "GPS Navigation Units", category: "Navigation & Survey", description: "Precision marine GNSS & satellite positioning" },
  { id: 14, name: "Water Pump", category: "Tooling", description: "High-volume submersible dewatering & jetting pump" },
  { id: 15, name: "Cutting Broco Systems", category: "Welding & Cutting", description: "Exothermic underwater oxy-arc cutting systems" },
  { id: 16, name: "Canon Systems", category: "Inspection", description: "Underwater high-resolution photographic gear" },
  { id: 17, name: "Fins & Booties", category: "Personal Gear", description: "Heavy commercial fins and thermal protection booties" },
  { id: 18, name: "Hand Talky & Underwater Torch Light", category: "Safety & Comms", description: "VHF hand radios & high-lumen dive lights" },
  { id: 19, name: "Body Harness", category: "Safety Gear", description: "Commercial diving harness with emergency D-rings" },
  { id: 20, name: "Hydraulic Power Pack Unit", category: "Tooling", description: "Heavy hydraulic power unit for underwater tools" }
];

export const PROJECT_TRACK_RECORD: ProjectTrackRecord[] = [
  { id: 1, title: "Underwater Video Survey LNG GANDRIA", location: "Galang Anchorage", date: "October 2019", category: "Video Survey" },
  { id: 2, title: "Underwater Cleaning & Propeller Polishing MV. FJELL", location: "Batu Ampar", date: "December 2019", category: "Hull Cleaning" },
  { id: 3, title: "Underwater Video Survey LNG WILENERGY", location: "Galang Anchorage", date: "March 2020", category: "Video Survey" },
  { id: 4, title: "Underwater Video Survey LNG WILPOWER", location: "Galang Anchorage", date: "April 2020", category: "Video Survey" },
  { id: 5, title: "Underwater Cleaning & Propeller Polishing MV. DAWN", location: "Galang Anchorage", date: "November 2021", category: "Hull Cleaning" },
  { id: 6, title: "Underwater Cleaning & Propeller Polishing GOLDEN DESTINY", location: "Galang Anchorage", date: "December 2021", category: "Hull Cleaning" },
  { id: 7, title: "Underwater Hull Cleaning FPSO ROAR", location: "Galang Anchorage", date: "January 2022", category: "Hull Cleaning" },
  { id: 8, title: "Underwater Hull Cleaning Drilling Rig SAPURA T 11 & 12", location: "BOMC Bintan", date: "August 2022", category: "Hull Cleaning" },
  { id: 9, title: "Underwater Hull Cleaning & Propeller Polishing ENERGI ARMADA 01", location: "Tg. Riau Anchorage", date: "July 2023", category: "Hull Cleaning" },
  { id: 10, title: "Underwater Hull Cleaning & Video Survey TOPAZ INSTALLER", location: "PaxOcean, Tg. Uncang", date: "October 2023", category: "Video Survey" },
  { id: 11, title: "Underwater Welding 106 pcs Zinc Anode of FLOATING DOCK V", location: "PaxOcean, Tg. Uncang", date: "July 2024", category: "Underwater Works" },
  { id: 12, title: "Reposition of Buoy Marker No. 6 owned by PT. Transgas Indonesia", location: "P. Buluh", date: "December 2024", category: "Subsea Repair" },
  { id: 13, title: "Underwater Inspection at Jetty owned by PT. Kalimantan Energi Lestari", location: "Kotabaru, Kalsel", date: "February 2025", category: "Hydrographic & Inspection" },
  { id: 14, title: "Pre Survey Underwater Cleaning IPA Duriankang", location: "PT AIR BATAM HILIR", date: "Mid 2025", category: "Hydrographic & Inspection" },
  { id: 15, title: "Refloating Pontoon", location: "Bintan, Kep. Riau", date: "Mid 2025", category: "Underwater Works" },
  { id: 16, title: "Underwater Ballast Pipe Plugging & Unplugging", location: "Galang Anchorage", date: "August 2025", category: "Subsea Repair" }
];

export const CLIENT_LIST = [
  { name: "SAFE HAVEN MARITIME", logoText: "Safe Haven Maritime", type: "Shipping & Logistics" },
  { name: "PT. BIAS MANDIRI GROUP", logoText: "Bias Mandiri Group", type: "Maritime Logistics" },
  { name: "WORLDWIDE UNDERWATER SERVICE", logoText: "Worldwide Underwater", type: "Subsea Operations" },
  { name: "SEASWAN SHIPPING", logoText: "Seaswan Shipping", type: "Vessel Owner & Charterer" },
  { name: "BOMC PTE LTD", logoText: "BOMC Pte Ltd", type: "Offshore Supply Base" },
  { name: "PT. KAPAL MINI INDONESIA", logoText: "Kapal Mini Indonesia", type: "Ship Building & Repair" },
  { name: "P & O MARITIME", logoText: "P&O Maritime", type: "Marine Services" },
  { name: "PT. TRANSGAS INDONESIA", logoText: "PT. Transgas Indonesia", type: "Energy & Pipeline" },
  { name: "PT. INOVASI PROTEKSI ENERGI", logoText: "Inovasi Proteksi Energi", type: "Energy Services" },
  { name: "PT. BRIGHTSUN MARINDO PERKASA", logoText: "Brightsun Marindo", type: "Marine Engineering" },
  { name: "PT. AIR BATAM HILIR", logoText: "PT. Air Batam Hilir", type: "Utilities & Infrastructure" },
  { name: "PT. KALIMANTAN ENERGI LESTARI", logoText: "Kalimantan Energi Lestari", type: "Mining & Energy Port" }
];
