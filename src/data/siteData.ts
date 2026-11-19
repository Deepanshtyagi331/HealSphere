export const siteConfig = {
  name: "HealSphere",
  tagline: "Energy Therapy & Quantum Healing by Sachin Karve",
  description:
    "Experience spontaneous relief from acute and chronic pain through HealSphere energy healing. Online video sessions, accredited masterclasses, and transformative self-healing techniques with Sachin Karve.",
  phone: "+91 9819858269",
  whatsappNumber: "919819858269",
  whatsappUrl: "https://wa.me/919819858269?text=Hello%20Sachin,%20I%20would%20like%20to%20enquire%20about%20HealSphere%20Sessions%20and%20Courses.",
  email: "sachin@healsphere.com",
  location: "Mumbai, Maharashtra, India (Serving Clients Globally via Video Calls)",
  timing: "Available for Remote Appointments Across All Time Zones (IST, EST, GMT, AEST)",
  stats: {
    studentsTrained: "40,000+",
    countriesReached: "95+",
    yearsExperience: "25+",
    satisfactionRate: "98%",
  },
  disclaimer:
    "Medical Disclaimer: Healing methods provided by HealSphere and Sachin Karve are designed to support holistic well-being and natural self-regulation. These services are complementary and do not replace professional medical advice, clinical diagnosis, or prescribed treatments. Always consult your qualified healthcare physician regarding medical conditions.",
};

// Main header navigation: 6 concise items
export const headerNavLinks = [
  { name: "Home", href: "/" },
  { name: "What is Quantum Healing", href: "/what-is-quantum-healing" },
  {
    name: "Learn Healing",
    href: "/learn-energy-healing",
    subLinks: [
      { name: "Learn Healing Overview", href: "/learn-energy-healing", description: "Discover how anyone can learn to heal" },
      { name: "Quantum Healing Course", href: "/learn-quantum-healing", description: "12-hr masterclass on Zero Point stillness" },
      { name: "Heart Energy Healing Course", href: "/learn-heart-energy-healing", description: "Master heart coherence & emotional healing" },
    ],
  },
  { name: "Healing Session", href: "/quantum-healing-session" },
  { name: "E-Book", href: "/book-on-quantum-healing" },
  { name: "Contact", href: "/contact-for-quantum-healing" },
];

// Footer navigation: preserves full platform directory including Articles and About Sachin Karve
export const footerNavLinks = [
  { name: "Home", href: "/" },
  { name: "What is Quantum Healing", href: "/what-is-quantum-healing" },
  { name: "Learn Healing", href: "/learn-energy-healing" },
  { name: "Healing Session", href: "/quantum-healing-session" },
  { name: "E-Book", href: "/book-on-quantum-healing" },
  { name: "Articles", href: "/insightful-articles-on-quantum-healing-and-wellness" },
  { name: "About Sachin Karve", href: "/sachin-karve-quantum-healer" },
  { name: "Contact", href: "/contact-for-quantum-healing" },
];

// navLinks defaults to headerNavLinks
export const navLinks = headerNavLinks;

export const homeFaqs = [
  {
    question: "What exactly is Quantum Healing?",
    answer:
      "Quantum Healing is a gentle, non-invasive method of energy alignment rooted in the understanding that the physical body is supported by an underlying quantum field of pure consciousness. When a practitioner enters the 'No-Mind' state of zero-point stillness, the recipient's body entrains with this coherent field, activating spontaneous physical and emotional self-correction.",
  },
  {
    question: "How can healing happen remotely over a video call?",
    answer:
      "In modern quantum physics, quantum entanglement and non-locality demonstrate that consciousness and energy are not confined by physical space or geographic distance. During a remote session via Zoom, WhatsApp, or Google Meet, the healer tunes into the client's energetic blueprint. Clients frequently experience tingling, deep warmth, involuntary muscle unwinding, and immediate pain reduction during the call.",
  },
  {
    question: "Do I need any previous background or belief for it to work?",
    answer:
      "No. Quantum healing works on physiological and energetic resonance rather than belief. Many skeptical clients have experienced immediate shifts. All that is required is an open willingness to sit comfortably and observe the sensations in your body without judgment during the session.",
  },
  {
    question: "What conditions can Quantum Healing help address?",
    answer:
      "Clients seek assistance for chronic lower back pain, sciatica, neck and shoulder stiffness, knee and joint discomfort, sports sprains, tension migraines, digestive issues, chronic fatigue, anxiety, and lingering emotional trauma.",
  },
  {
    question: "What is the fee policy for personal therapy sessions?",
    answer:
      "Sachin Karve follows a unique client-first philosophy: fees ($50 USD / special subsidized rates for India) are requested only when the recipient physically perceives a shift or relief in their condition during or immediately after the 30-minute session.",
  },
];

export const ebookData = {
  title: "Instant Healing for Self and Others",
  subtitle: "A Practical Guide to Accessing the Quantum Field and Awakening Your Innate Healing Power",
  author: "Sachin Karve",
  coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
  kindleUrl: "https://www.amazon.com/dp/B08XYZ1234",
  rating: 4.8,
  reviewsCount: 320,
  pages: "180 Pages",
  format: "Kindle Edition & Paperback",
  description:
    "Written in simple, jargon-free language, 'Instant Healing for Self and Others' by Sachin Karve demystifies energy medicine and gives you hands-on protocols you can apply immediately to relieve headaches, muscular aches, emotional tension, and chronic stress for yourself and your loved ones.",
  chapters: [
    "Chapter 1: The Six Layers of the Human Being",
    "Chapter 2: The Myth of Incurable Ailments",
    "Chapter 3: Stepping into No-Mind: The Zero Point Gateway",
    "Chapter 4: The Triangulation Technique Step-by-Step",
    "Chapter 5: Healing Musculoskeletal Pain in Minutes",
    "Chapter 6: Transmuting Trapped Emotional Traumas",
    "Chapter 7: Non-Local Remote Healing Across Distances",
    "Chapter 8: Cultivating Unshakeable Daily Vitality",
  ],
};
