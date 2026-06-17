export const profile = {
  name: "Anand Shukla",
  role: "Laravel Developer",
  location: "Delhi, India",
  email: "akshukla2938@gmail.com",
  phone: "+91 98101 81486",
  initials: "AS",
  yearsExperience: "4+",
  summary:
    "Laravel Developer with 4+ years of experience designing and building scalable web applications, RESTful APIs, and CRM platforms across travel, e-commerce, and SaaS domains. I work closely with stakeholders to translate business requirements into reliable technical solutions.",
  resumeUrl: "/Anand_Shukla_Resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/anand-shukla-ba5625225",
    github: "https://github.com/AnandShukla98",
    email: "mailto:akshukla2938@gmail.com",
  },
};

export const experience = [
  {
    company: "Nibble Software Technologies",
    role: "Laravel Developer",
    period: "Jun 2022 — Present",
    location: "Delhi, India",
    bullets: [
      "Designed and developed scalable Laravel applications and RESTful APIs for clients across travel, e-commerce, and SaaS domains.",
      "Improved data retrieval efficiency by 40% through query optimization and caching strategies.",
      "Enhanced application performance by 30% via code refactoring and backend optimization.",
      "Integrated third-party SOAP and REST APIs including payment gateways, flight/hotel inventory systems, and notification services (SendGrid, Razorpay, GRN Connect).",
      "Led the team through a complex technical audit, ensuring full regulatory compliance.",
      "Presented technical solutions and project progress directly to client stakeholders.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "REST", "SOAP", "Razorpay", "SendGrid"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Chandigarh University",
    period: "Pursuing",
  },
  {
    degree: "Master Diploma in Computer Engineering (MDCE+)",
    institute: "IICS",
    period: "Completed",
  },
  {
    degree: "CBSE — Class 12",
    institute: "Central Board of Secondary Education",
    period: "2019",
  },
  {
    degree: "Class 10",
    institute: "School Board",
    period: "2017",
  },
];

export const skills = [
  {
    group: "Backend",
    items: [
      { name: "Laravel", level: 92 },
      { name: "PHP", level: 90 },
      { name: "CodeIgniter", level: 80 },
      { name: "Livewire", level: 78 },
      { name: "REST APIs", level: 88 },
      { name: "SOAP", level: 75 },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 78 },
      { name: "JavaScript", level: 85 },
      { name: "jQuery", level: 88 },
      { name: "Bootstrap", level: 85 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    group: "Database",
    items: [
      { name: "MySQL", level: 90 },
      { name: "Query Optimization", level: 85 },
    ],
  },
  {
    group: "APIs & Integrations",
    items: [
      { name: "Payment Gateways", level: 88 },
      { name: "Razorpay", level: 85 },
      { name: "SendGrid", level: 82 },
      { name: "GRN Connect", level: 78 },
      { name: "Currency Exchange", level: 80 },
      { name: "Geo-location", level: 78 },
    ],
  },
  {
    group: "Cloud & Tools",
    items: [
      { name: "AWS Administrator", level: 75 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
];

export const projects = [
  {
    title: "FlyBird Tourism",
    tagline: "End-to-end Travel Portal — Solo Laravel build",
    url: "https://www.flybirdtourism.com/",
    domain: "Travel",
    description:
      "Built end-to-end as a solo Laravel project covering CRM, Marketing, Accounts, and Admin modules. Multi-user authentication with role-based access for Admin, Agent, User, and Vendor. Dashboard-based booking management system for day-to-day operations.",
    tags: ["Laravel", "MySQL", "RBAC", "CRM"],
  },
  {
    title: "FareEase — Flight Meta Search",
    tagline: "JetCost/Kayak-style flight meta search & booking",
    url: "https://www.fareease.com/",
    domain: "Travel",
    description:
      "Developed flight meta search platforms integrating multiple flight APIs for real-time pricing and availability. Built redirect-based booking flow connecting users to airline & OTA sites. Extended for the Indian market with hotel, holiday, and sightseeing modules; multi-currency support (INR, USD, EUR, GBP, AED).",
    tags: ["Laravel", "REST APIs", "Multi-currency", "Meta Search"],
    secondaryUrl: "https://www.fareease.in/",
  },
  {
    title: "TravoByte",
    tagline: "AI-Powered Travel CRM (B2B / B2C / B2B2C)",
    url: "https://www.travobyte.com/",
    domain: "SaaS",
    description:
      "Contributed to TravoByte's Travel CRM platform supporting B2B / B2C / B2B2C portals with flight, hotel, and bus API integrations. Built an animated dashboard widget showcasing AI-driven quote generation, lead pipeline tracking, and flight route visualization.",
    tags: ["Laravel", "AI Dashboard", "CRM", "Animations"],
  },
  {
    title: "Karz & Dolls",
    tagline: "E-commerce — Diecast models, action figures, collectibles",
    url: "https://www.karzanddolls.com/",
    domain: "E-commerce",
    description:
      "Online store with catalog browsing, wishlist, and secure checkout. Developed and maintained as part of the e-commerce portfolio.",
    tags: ["Laravel", "E-commerce", "Checkout", "Catalog"],
  },
  {
    title: "BirthdayMasti & Club147",
    tagline: "E-commerce storefronts",
    url: "https://www.birthdaymasti.com/",
    domain: "E-commerce",
    description:
      "Developed and maintained e-commerce storefronts with product catalog, cart, and order management modules.",
    tags: ["PHP", "Laravel", "Storefronts"],
    secondaryUrl: "https://www.club147.in/",
  },
  {
    title: "Nibble & Pixel",
    tagline: "Product photography studio website",
    url: "https://www.nibbleandpixel.com/",
    domain: "Studio",
    description:
      "Contributed to Nibble & Pixel — a product photography studio website built with a modern, design-focused frontend.",
    tags: ["Frontend", "Design", "Studio"],
  },
];

export const metrics = [
  { label: "Years of Experience", value: "4+" },
  { label: "Data Retrieval Boost", value: "40%" },
  { label: "Performance Gain", value: "30%" },
  { label: "Production Platforms", value: "8+" },
];
