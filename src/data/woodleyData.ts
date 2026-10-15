export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  detailedContent: {
    heading: string;
    paragraphs: string[];
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'extensions' | 'kitchens' | 'bathrooms' | 'maintenance';
  location: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
}

export const COMPANY_DETAILS = {
  name: "Woodley Builders",
  tagline: "Building, Home Improvement and House Modernisation Specialists",
  founder: "Laurence Woodley",
  phone: "07967 666 360",
  phoneRaw: "+447967666360",
  email: "enquiries@woodleybuilders.co.uk",
  dataEmail: "data@woodleybuilders.co.uk",
  address: {
    line1: "27 Warren Road",
    town: "Guildford",
    county: "Surrey",
    postcode: "GU1 2HG",
    country: "United Kingdom"
  },
  experienceYears: 30,
  familyHeritageYears: 60,
  hours: [
    { days: "Monday – Friday", times: "08:00 – 18:00" },
    { days: "Saturday", times: "08:30 – 13:00" },
    { days: "Sunday", times: "Emergency Callouts Only" }
  ],
  serviceAreas: [
    { name: "Guildford", distance: "Central hub" },
    { name: "Farnham", distance: "10 miles" },
    { name: "Godalming", distance: "4 miles" },
    { name: "Cranleigh", distance: "8 miles" },
    { name: "Dorking", distance: "12 miles" },
    { name: "Cobham", distance: "14 miles" },
    { name: "Esher", distance: "16 miles" },
    { name: "Epsom", distance: "18 miles" },
    { name: "Camberley", distance: "15 miles" },
    { name: "Woking", distance: "6 miles" },
    { name: "Weybridge", distance: "15 miles" }
  ],
  values: [
    {
      title: "Clean & Tidy Workmanship",
      description: "We guarantee a trouble-free, clean and tidy job. Sites are swept, dust sheets protected, and rooms made good every single day."
    },
    {
      title: "Guaranteed Quotations",
      description: "The price we quote at the start of your job is the price you pay unless unforeseen structural problems arise. No hidden extras or surprise invoices."
    },
    {
      title: "Minimal Life Disruption",
      description: "We work around you and to your times and needs, ensuring that your home extension, new kitchen, or bathroom causes as little disruption as possible."
    },
    {
      title: "60+ Years Family Tradition",
      description: "Laurence Woodley is a life-long Surrey resident continuing a 60+ year family building heritage. Deep trade mastery, honest advice, and personal accountability."
    }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "extensions",
    slug: "home-extensions",
    title: "Home Extensions",
    subtitle: "Need More Space? Increase your living space with room to grow.",
    shortDescription: "From open-plan kitchen extensions and light-filled social living spaces to complete multi-level house extensions, conservatories, and garages.",
    heroImage: "/src/assets/projects/extension-6-scaled.jpg",
    galleryImages: [
      "/src/assets/projects/extension-6-scaled.jpg",
      "/src/assets/projects/extension-5-scaled.jpg",
      "/src/assets/projects/extension-4-scaled.jpg",
      "/src/assets/projects/extension-3-scaled.jpg",
      "/src/assets/projects/extension-2.jpg",
      "/src/assets/projects/extension-1.jpg",
      "/src/assets/projects/house-2-scaled.jpg",
      "/src/assets/projects/2-extension.jpg"
    ],
    features: [
      "Single & Multi-Storey Extensions",
      "Structural Knock-Throughs & RSJ Steelwork",
      "Open-Plan Kitchen Diners & Garden Rooms",
      "Conservatories & Garage Conversions",
      "Architectural Collaboration & Building Control",
      "Bricklaying, Glazing, Plumbing & Electrics"
    ],
    detailedContent: [
      {
        heading: "Home Extensions Expert with Decades of Local Experience",
        paragraphs: [
          "Sometimes we all need a little more room in our lives. Whether it’s new members in the household or you just want to get a bit more space for yourself, Woodley Builders can help you build the dream extension.",
          "From bigger kitchens and social areas to completely new multi-level accommodation and bathrooms, Woodley Builders have decades of experience converting your needs and desires to reality.",
          "As always, we work to your times and needs to ensure as little disruption to your life as possible."
        ]
      },
      {
        heading: "Extensions, Conservatories and Garages",
        paragraphs: [
          "If you want an extra reception room, an office or a playroom for the kids, we can give you what you want and how you want it. Woodley Builders can build your extension from scratch.",
          "We regularly work alongside architects and structural engineers to bring approved drawings to life, ensuring every phase complies fully with current UK Building Regulations and Guildford / Surrey planning guidelines.",
          "Every discipline is managed seamlessly under one roof: groundworks, brickwork, steel installation, thermal insulation, roofing, glazing, electrics, plumbing, central heating, plastering, flooring and final decorating."
        ]
      }
    ],
    specifications: [
      { label: "Lead Builder", value: "Laurence Woodley" },
      { label: "Experience", value: "30+ Years in Surrey" },
      { label: "Building Control", value: "Fully Compliant & Certified" },
      { label: "Quote Guarantee", value: "Fixed-price quote agreed in advance" },
      { label: "Cleanliness", value: "Daily tidy & sealed dust containment" }
    ]
  },
  {
    id: "kitchens",
    slug: "kitchens",
    title: "Kitchen Renovations",
    subtitle: "The Heart of Your Home – Creating your amazing practical spaces.",
    shortDescription: "A kitchen is for more than food preparation: it is the centre of any household. Bespoke cabinetry, solid quartz worktops, wall & floor tiling, and total project management.",
    heroImage: "/src/assets/projects/kitchen1-scaled.jpg",
    galleryImages: [
      "/src/assets/projects/kitchen1-scaled.jpg",
      "/src/assets/projects/kitchen-2.jpg",
      "/src/assets/projects/kitchen-3.jpg",
      "/src/assets/projects/kitchen-4.jpg",
      "/src/assets/projects/kitchen-5.jpg",
      "/src/assets/projects/kitchens1.jpg",
      "/src/assets/projects/kitchens2.jpg",
      "/src/assets/projects/kitchens3.jpg"
    ],
    features: [
      "Kitchen Design & Spatial Layout Planning",
      "Cabinet Supply & Precision Fitting",
      "Solid Stone, Quartz & Timber Worktops",
      "Wall & Floor Tiling (Porcelain, Ceramic, Stone)",
      "Integrated Appliance Fitting & Plumbing",
      "Gas Safe & NICEIC Compliant Connections"
    ],
    detailedContent: [
      {
        heading: "A Kitchen is for More than Food Preparation!",
        paragraphs: [
          "The kitchen is the centre of any household. It is where morning coffee is brewed, family dinners are shared, homework is done, and guests gather when entertaining.",
          "Woodley Builders will help you through the process of designing your kitchen. When you’ve chosen your style, let’s see what will fit and how you can achieve your practical and beautiful solution.",
          "Working efficiently to your needs and with minimal mess, we manage all stages of a kitchen build, so relax and let us build you the kitchen of your dreams."
        ]
      },
      {
        heading: "Bespoke Structural Refits & Kitchen Knock-Throughs",
        paragraphs: [
          "Many Surrey homes feature compartmentalised ground floors. Laurence Woodley specialises in removing load-bearing walls, installing steel support beams, and reconfiguring layouts to connect dark dining rooms into bright, flowing open-plan family kitchen spaces.",
          "Whether you are looking to refit existing units with new granite worktops, sinks and splashbacks, or undertake a full ground-up transformation with island units and feature LED mood lighting, we handle everything with care and precision."
        ]
      }
    ],
    specifications: [
      { label: "Service", value: "Design, Supply & Full Installation" },
      { label: "Appliance Fitting", value: "Certified Gas & Electric" },
      { label: "Finishes", value: "Quartz, Granite, Solid Oak, Tiles" },
      { label: "Project Duration", value: "Typically 2 – 4 weeks depending on scope" },
      { label: "Living Support", value: "Temporary cooking amenities maintained" }
    ]
  },
  {
    id: "bathrooms",
    slug: "bathrooms",
    title: "Bathroom Renovations",
    subtitle: "Beautiful, Functional and Personal – Your personal oasis.",
    shortDescription: "From luxurious family bathrooms and wet rooms to compact en suites and cloakrooms. Impeccable tiling, walk-in showers, underfloor heating, and high-end plumbing.",
    heroImage: "/src/assets/projects/Bathroom-bath.jpg",
    galleryImages: [
      "/src/assets/projects/Bathroom-bath.jpg",
      "/src/assets/projects/bathroom-shower.jpg",
      "/src/assets/projects/bathroom-shower-2.jpg",
      "/src/assets/projects/shower-2.jpg",
      "/src/assets/projects/shower-open.jpg",
      "/src/assets/projects/shower-chrome.jpg",
      "/src/assets/projects/1e-bath.jpg",
      "/src/assets/projects/1e-shower-bath.jpeg",
      "/src/assets/projects/1e-shower-room.jpeg",
      "/src/assets/projects/1e-sink.jpeg",
      "/src/assets/projects/1e-shiny-bath-.jpeg",
      "/src/assets/projects/blue-waterfall2.jpeg"
    ],
    features: [
      "Complete Bathroom Design & Supply",
      "Walk-In Showers & Wet Room Tanking",
      "Freestanding Baths & Designer Vanity Units",
      "Precision Wall & Floor Tiling",
      "Underfloor Heating & Heated Towel Rails",
      "Waterproof Membrane Tanking & Concealed Pipework"
    ],
    detailedContent: [
      {
        heading: "Your Bathroom is Your Personal Oasis",
        paragraphs: [
          "A place for pampering and practicality. We manage every stage of a bathroom build, from initial design consultation to final water commissioning.",
          "We work to your times and needs to ensure as little disruption to your life as possible.",
          "Design – Years of experience has given us the knowledge to know what will fit where best, what works well and what limitations you might have. Let us help you through the process of getting the look you want for your bathroom."
        ]
      },
      {
        heading: "High-End Tiling and Flawless Finishes",
        paragraphs: [
          "When the tiling has to be perfect, trust us to give you the ‘high-end’ look and finish your bathroom deserves.",
          "From large-format Italian porcelain and textured marble to intricate herringbone and metro tiles, we ensure sharp mitred corners, laser-straight grout lines, and complete waterproof tanking beneath every surface.",
          "We also offer underfloor heating systems, bespoke glass shower enclosures, recessed illuminated niches, and discreet ventilation for a serene, spa-like atmosphere in your own home."
        ]
      }
    ],
    specifications: [
      { label: "Specialism", value: "Complete Bathroom Remodeling" },
      { label: "Waterproofing", value: "Full wet-zone tanking system" },
      { label: "Flooring Options", value: "Porcelain tiles, luxury vinyl, underfloor heating" },
      { label: "Sanitaryware", value: "Concealed cisterns, freestanding baths, brassware" },
      { label: "Disruption", value: "Functional toilet maintained where possible" }
    ]
  },
  {
    id: "maintenance",
    slug: "house-maintenance",
    title: "House Maintenance & Emergency Work",
    subtitle: "Trouble-Free Building, Property Maintenance and Rapid Response",
    shortDescription: "Specialist repair and maintenance services for Surrey homes. Roof repairs, guttering, brickwork repointing, plumbing leaks, structural repairs, and emergency callouts.",
    heroImage: "/src/assets/projects/rooftiles1.jpg",
    galleryImages: [
      "/src/assets/projects/rooftiles1.jpg",
      "/src/assets/projects/plumbing1.jpg",
      "/src/assets/projects/025-scaled.jpg",
      "/src/assets/projects/053-scaled.jpg",
      "/src/assets/projects/078-scaled.jpg",
      "/src/assets/projects/123-scaled.jpg"
    ],
    features: [
      "Roofing Repairs & Tile Replacements",
      "Gutter Clearance, Realignment & Replacement",
      "Burst Pipes & Emergency Plumbing Repairs",
      "Brickwork Repointing & Chimney Maintenance",
      "Soffits, Fascias & Exterior Timber Care",
      "Storm Damage Remediation & Urgent Callouts"
    ],
    detailedContent: [
      {
        heading: "Trusted Maintenance for Surrey Homes",
        paragraphs: [
          "Even the most well-built properties require ongoing care to withstand British weather and everyday wear. Woodley Builders provides both scheduled house maintenance and responsive repairs across Guildford and the Surrey area.",
          "Whether you need damaged roof tiles replaced after high winds, guttering cleared and realigned, damp issues rectified, or brickwork repointed, Laurence Woodley brings decades of practical trade know-how.",
          "We believe in doing jobs properly the first time using durable materials, so you don't face repeated repair bills down the road."
        ]
      },
      {
        heading: "Emergency Callout Service",
        paragraphs: [
          "If you have an emergency, we can help. A leaking roof in heavy rain, a burst pipe causing water ingress, or damaged structural masonry can quickly cause serious distress and property damage.",
          "Contact Laurence Woodley on 07967 666 360 for prompt advice and emergency assistance across Guildford, Godalming, Cranleigh, Farnham and surrounding Surrey villages."
        ]
      }
    ],
    specifications: [
      { label: "Response", value: "Prompt assessment & emergency triage" },
      { label: "Direct Phone", value: "07967 666 360" },
      { label: "Coverage", value: "Guildford and surrounding Surrey area" },
      { label: "Trades", value: "Roofing, plumbing, masonry, drainage" }
    ]
  },
  {
    id: "roofing",
    slug: "roofing-guttering",
    title: "Roofing & Guttering",
    subtitle: "Protecting Your Home From the Weather – Weatherproof Surrey Roofing",
    shortDescription: "Complete roof repairs, pitched and flat roofing, lead flashing, chimney repairs, and high-capacity uPVC guttering and drainage systems.",
    heroImage: "/src/assets/projects/rooftiles1.jpg",
    galleryImages: [
      "/src/assets/projects/rooftiles1.jpg",
      "/src/assets/projects/053-scaled.jpg",
      "/src/assets/projects/078-scaled.jpg",
      "/src/assets/projects/123-scaled.jpg"
    ],
    features: [
      "Pitched Roof Tile & Slate Replacement",
      "Flat Roof Systems (EPDM, Felt, Fiberglass)",
      "Chimney Repointing & Lead Flashing Repairs",
      "uPVC Fascias, Soffits & Bargeboards",
      "High-Flow Guttering & Downpipe Installation",
      "Moss Removal & Preventative Storm Checks"
    ],
    detailedContent: [
      {
        heading: "Roofing Craftsmanship Built to Last",
        paragraphs: [
          "Your roof is your home's first line of defence. Woodley Builders provides comprehensive roofing and guttering services to keep your property dry, insulated, and structurally sound.",
          "From replacing slipped slates and broken clay tiles to stripping and rebuilding extension roofs with modern breathable membranes and timber battens, our workmanship is thorough and tidy.",
          "We pay particular attention to vulnerable points like valleys, abutments, and chimney stacks where poor lead flashing often leads to internal damp."
        ]
      }
    ],
    specifications: [
      { label: "Materials", value: "Natural slate, clay, concrete tiles, lead code 4/5" },
      { label: "Rainwater Systems", value: "Deep-flow uPVC, cast iron style" },
      { label: "Guarantee", value: "All works backed by Woodley Builders standard" }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "vj-guildford",
    author: "V.J.",
    location: "Guildford",
    projectType: "Kitchen & En Suite Bathroom",
    quote: "I am very happy to recommend Laurence to you, although should point out that he did rather more than a 'kitchen refit' for us. He built an en suite bathroom into what is now our bedroom, involving removing walls and installing all plumbed units, cupboards, tiling etc. He returned to do the kitchen. He basically knocked two rooms into one, replacing a load-bearing wall with a large arch and blocking off a door. We kept most of the kitchen cupboards, but rearranged some to build in cooker and other items. He tiled the floor and walls and replaced worktops and sink. I would endorse the quality of his work unreservedly. He is both thorough and conscientious, and provided valuable advice to us on several occasions. You would be welcome to come round to see the results of his work.",
    rating: 5
  },
  {
    id: "td-guildford",
    author: "T.D.",
    location: "Guildford",
    projectType: "Kitchen, Decking & Downstairs Reconfiguration",
    quote: "Laurence has done a few jobs for us over the years, from laying decking, through installing a new kitchen, and reconfiguring the downstairs of our house. He’s been a pleasure to work with, always kept to schedule and turned up when he said he would, and did excellent work. The most important thing is that when issues arise he deals with them well and always finds a good solution. He’ll continue to be my go-to builder for any work I need doing in future. The only thing that makes me question his building credentials is his lack of tea drinking, no matter how many times I offer.",
    rating: 5
  },
  {
    id: "homeowner-farnham",
    author: "M. & R. Davies",
    location: "Farnham, Surrey",
    projectType: "Single-Storey Rear Extension",
    quote: "Woodley Builders built our kitchen extension and we couldn't be more pleased. Laurence quoted a fair price and stuck to it. He kept the site tidy at the end of each day so our family could continue living in the house with minimal disruption. Highly recommended.",
    rating: 5
  },
  {
    id: "homeowner-cranleigh",
    author: "S. Holloway",
    location: "Cranleigh, Surrey",
    projectType: "Full Bathroom Modernisation",
    quote: "Exceptional tiling and bathroom installation. Laurence knows exactly what works in tight spaces and his attention to detail with the chrome fittings and walk-in shower was first-class. True local craftsmanship.",
    rating: 5
  }
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: "ext-1",
    title: "Double-Storey Gable Extension & Masonry",
    category: "extensions",
    location: "Guildford, Surrey",
    image: "/src/assets/projects/extension-6-scaled.jpg",
    description: "Substantial two-storey rear addition creating an extended master bedroom suite and open-plan kitchen dining space below."
  },
  {
    id: "ext-2",
    title: "Contemporary Garden Room & Conservatory",
    category: "extensions",
    location: "Godalming, Surrey",
    image: "/src/assets/projects/extension-5-scaled.jpg",
    description: "Light-filled rear extension featuring expansive glazing and seamless transition to garden patio."
  },
  {
    id: "ext-3",
    title: "Surrey Red Brick Ground Floor Extension",
    category: "extensions",
    location: "Farnham, Surrey",
    image: "/src/assets/projects/extension-4-scaled.jpg",
    description: "Period brick-matched single-storey extension expanding existing ground floor living accommodation."
  },
  {
    id: "ext-4",
    title: "Architectural Vaulted Extension",
    category: "extensions",
    location: "Cranleigh, Surrey",
    image: "/src/assets/projects/extension-3-scaled.jpg",
    description: "Vaulted ceiling family room extension with skylights and steel-framed structural opening."
  },
  {
    id: "ext-5",
    title: "Completed House Modernisation & Roof",
    category: "extensions",
    location: "Guildford, Surrey",
    image: "/src/assets/projects/house-2-scaled.jpg",
    description: "Whole house exterior transformation including side extension, roof tiles and window surrounds."
  },
  {
    id: "kit-1",
    title: "Modern Shaker Kitchen with Quartz Worktops",
    category: "kitchens",
    location: "Guildford, Surrey",
    image: "/src/assets/projects/kitchen1-scaled.jpg",
    description: "Complete kitchen redesign with bespoke fitted cabinetry, quartz worktops, and integrated breakfast seating."
  },
  {
    id: "kit-2",
    title: "Open-Plan Kitchen Knock-Through",
    category: "kitchens",
    location: "Guildford, Surrey",
    image: "/src/assets/projects/kitchen-2.jpg",
    description: "Load-bearing wall removal replaced with steel beam, creating a spacious kitchen and dining room."
  },
  {
    id: "kit-3",
    title: "Contemporary Charcoal & Oak Kitchen",
    category: "kitchens",
    location: "Cobham, Surrey",
    image: "/src/assets/projects/kitchen-3.jpg",
    description: "Modern handleless cabinetry with recessed LED accent lighting and premium built-in ovens."
  },
  {
    id: "kit-4",
    title: "Family Kitchen Diner Refit",
    category: "kitchens",
    location: "Dorking, Surrey",
    image: "/src/assets/projects/kitchen-4.jpg",
    description: "Comprehensive refit maximizing storage with full-height pantry cupboards and durable flooring."
  },
  {
    id: "kit-5",
    title: "Bespoke Tile Splashbacks & Granite",
    category: "kitchens",
    location: "Esher, Surrey",
    image: "/src/assets/projects/kitchen-5.jpg",
    description: "Detailed tiling, undermount sink installation, and custom quartz worktop fabricating."
  },
  {
    id: "bath-1",
    title: "Luxury Freestanding Bath & Stone Tiling",
    category: "bathrooms",
    location: "Guildford, Surrey",
    image: "/src/assets/projects/Bathroom-bath.jpg",
    description: "Freestanding double-ended bath with wall-mounted brassware and heated porcelain floor tiles."
  },
  {
    id: "bath-2",
    title: "Walk-In Wet Room with Chrome Rain Shower",
    category: "bathrooms",
    location: "Farnham, Surrey",
    image: "/src/assets/projects/bathroom-shower.jpg",
    description: "Flush wet-room floor with linear drain, frameless glass panel, and thermostatic chrome shower valve."
  },
  {
    id: "bath-3",
    title: "Monochrome Tile En Suite Shower Room",
    category: "bathrooms",
    location: "Guildford, Surrey",
    image: "/src/assets/projects/bathroom-shower-2.jpg",
    description: "En suite shower room built into newly partitioned bedroom space with concealed cistern toilet."
  },
  {
    id: "bath-4",
    title: "Spa Shower Enclosure with Built-In Niche",
    category: "bathrooms",
    location: "Godalming, Surrey",
    image: "/src/assets/projects/shower-2.jpg",
    description: "Large shower enclosure with illuminated shampoo recess and polished chrome fittings."
  },
  {
    id: "bath-5",
    title: "Blue Waterfall Feature Tiling",
    category: "bathrooms",
    location: "Cranleigh, Surrey",
    image: "/src/assets/projects/blue-waterfall2.jpeg",
    description: "Statement blue glass mosaic accent wall behind chrome mixer taps."
  },
  {
    id: "maint-1",
    title: "Surrey Clay Tile Roof Renovation",
    category: "maintenance",
    location: "Guildford, Surrey",
    image: "/src/assets/projects/rooftiles1.jpg",
    description: "Complete roof check, broken tile replacement, and lead flashing resealing."
  },
  {
    id: "maint-2",
    title: "Specialist Heating & Plumbing Infrastructure",
    category: "maintenance",
    location: "Guildford, Surrey",
    image: "/src/assets/projects/plumbing1.jpg",
    description: "Underfloor heating manifold installation, water pressure booster, and copper pipework."
  }
];

export const TERMS_AND_CONDITIONS = {
  title: "Woodley Builders Terms and Conditions",
  generalTerms: [
    "When you agree to having work done by us, you agree to the following terms and conditions:",
    "This is a contract between you (the client) and Laurence Woodley of Woodley Builders, 27 Warren Road, Guildford, Surrey, GU1 2HG.",
    "These terms and conditions are governed and construed in accordance with English Law. If any part of these terms and conditions is found to be invalid or unenforceable, then the remainder of these terms and conditions will not be affected but will remain valid and enforceable."
  ],
  sections: [
    {
      title: "Quotations",
      paragraphs: [
        "Quotations are submitted on a best-effort basis and whilst we aim to be precise with costings, there may be a variation to the end price depending on issues that become apparent once work starts.",
        "We guarantee you a trouble-free, clean and tidy job. The price we quote at the start of the job is the price you pay unless unforeseen problems arise.",
        "We will inform you of any variation as your project progresses."
      ]
    },
    {
      title: "Payment",
      paragraphs: [
        "Depending on the type of job, work involved and the materials required, variable upfront payments may be required to commence work. We will discuss the job's needs with you before we start work."
      ]
    },
    {
      title: "Suppliers",
      paragraphs: [
        "We use a number of skilled partners who will invoice you separately for their work."
      ]
    },
    {
      title: "VAT",
      paragraphs: [
        "We are currently not VAT registered and operate below the threshold required for VAT."
      ]
    },
    {
      title: "Liability",
      paragraphs: [
        "The Company is not liable for any frustration of this contract caused by strikes, labour disputes, accidents, extreme weather, global event (Pandemic, for instance) or any other cause beyond the Company’s control and outside the ordinary and reasonable contemplation of the parties at the time of the contract.",
        "In such an event, Woodley Builders shall use reasonable endeavours to offer the client alternative services, if such can be found and are acceptable to the client (such acceptance not to be unreasonably withheld). In the event that this is not possible, however, the Company’s obligation to the client extends up to, and is limited to, a full refund of any deposits held for work not yet completed.",
        "Woodley Builders reserves the right to pass on to the client any additional costs incurred by them in respect of goods and services requested during the course of the works carried out."
      ]
    },
    {
      title: "Client Responsibilities",
      paragraphs: [
        "The client must grant sufficient access to the property for work to be carried out. Whilst on site we will also need access to a suitable power source and a water supply. We cannot be held responsible for delays in the progress of a job if we are unable to access the property or all the facilities."
      ]
    },
    {
      title: "Privacy & GDPR",
      paragraphs: [
        "In accordance with The General Data Protection Regulations of 2018, Woodley Builders are committed to protecting your privacy and promise to collect, process and share your data safely and securely when you do business with us. Please refer to our dedicated Privacy Policy for full details."
      ]
    },
    {
      title: "Direct Marketing & Photography",
      paragraphs: [
        "As part of Woodley Builders operations and marketing we respectfully ask for your permission to retain your details to contact you in the future to keep you informed of our news and latest offers. You can opt out of direct marketing at any time.",
        "As part of our service and operations, Woodley Builders respectfully request to use images and information from your project for website and marketing purposes. This includes images of the work we have carried out on your property. We always use images that will not identify the exact location or homeowners."
      ]
    }
  ]
};

export const PRIVACY_POLICY = {
  title: "Woodley Builders Privacy Policy",
  intro: "In accordance with The General Data Protection Regulations of 2018, Woodley Builders are committed to protecting your privacy and promise to collect, process and share your data safely and securely when you do business with us.",
  promises: [
    {
      label: "Transparency",
      desc: "We will always tell you what data we’re collecting about you and how we use it. We only share your data with third parties when it is necessary in the planning and deployment of your project. We never sell on your data."
    },
    {
      label: "Security",
      desc: "We are committed to following industry best practice in ensuring that your data is held safely and securely."
    },
    {
      label: "Control",
      desc: "You have full control over the information we hold about you."
    }
  ],
  sections: [
    {
      title: "Information we may collect about you and why",
      paragraphs: [
        "Personal information may include some or all of the following: Your name, your address, your phone number(s), your email address(es), and required information relating to the building work being carried out.",
        "All of the above information is used strictly in connection with the work being carried out. We only take the data we need to effectively execute our building, extension, kitchen, or bathroom services to you."
      ]
    },
    {
      title: "How long do we keep your information?",
      paragraphs: [
        "We only keep information for as long as is necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, tax or reporting requirements. At the end of that period of retention your data is safely deleted."
      ]
    },
    {
      title: "Do we share your data with third parties?",
      paragraphs: [
        "No, we do not share your information with any third party that is not directly involved with the work we are doing for you.",
        "All our specialist suppliers (such as scaffolding, skips, or gas engineers) are committed to the security of shared data. We request that all data that is shared during the job is deleted within 7 days after the work is finished."
      ]
    },
    {
      title: "Photography and Marketing",
      paragraphs: [
        "As part of our service we like to publish photographs of the completed jobs for the benefit of prospective customers and to assist with marketing our local business.",
        "It is your choice to opt in or out of appearing on our website or portfolio. We always ask for permission to take photographs, and we never publish identifying house numbers or personal owner details. You may rescind permission at any time."
      ]
    },
    {
      title: "Website Cookies & Security",
      paragraphs: [
        "Our website utilizes modern SSL encryption in accordance with SHA-2 2048-bit protocols to guarantee secure communications through our enquiry forms.",
        "We use standard essential cookies to assist with website navigation and anonymous usage metrics."
      ]
    },
    {
      title: "Your Rights & Data Controller Contact",
      paragraphs: [
        "You have the right to request access to the personal data we hold about you, request rectification of any inaccurate information, or request deletion where applicable under GDPR.",
        "To exercise your rights, please contact the Data Controller by post at: Data Controller, Woodley Builders, 27 Warren Road, Guildford, Surrey, GU1 2HG, by telephone on 07967 666 360, or by email at data@woodleybuilders.co.uk."
      ]
    }
  ]
};
