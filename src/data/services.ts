export type ServiceCategory = "Massage" | "Express" | "Facials" | "Body Care" | "Hand & Foot Care" | "Waxing";

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  duration: string;
  price: string;
  description: string;
}

const waxingDescription = "Includes a soothing post-wax treatment to leave skin calm, soft and comfortable.";

export const services: Service[] = [
  { id: "maison-relax", category: "Massage", name: "Maison Relax – Swedish Massage", duration: "60 or 90 min", price: "₦65,000 / ₦90,000", description: "A classic Swedish massage designed to ease tension and invite full-body relaxation." },
  { id: "maison-restore", category: "Massage", name: "Maison Restore – Deep Tissue Massage", duration: "60 or 90 min", price: "₦70,000 / ₦95,000", description: "Focused pressure to release deep muscular tension and restore comfortable movement." },
  { id: "maison-aroma", category: "Massage", name: "Maison Aroma – Aromatherapy Massage", duration: "60 or 90 min", price: "₦70,000 / ₦95,000", description: "A calming massage enhanced with aromatic oils for body and mind." },
  { id: "maison-stone", category: "Massage", name: "Maison Stone – Hot Stone Massage", duration: "60 or 90 min", price: "₦80,000 / ₦110,000", description: "Heated stones and flowing massage strokes ease stubborn tension and encourage deep rest." },
  { id: "maison-stretch", category: "Massage", name: "Maison Stretch – Thai Massage", duration: "60 or 90 min", price: "₦75,000 / ₦100,000", description: "An energising combination of assisted stretches and rhythmic pressure work." },
  { id: "maison-bloom", category: "Massage", name: "Maison Bloom – Prenatal Massage", duration: "60 or 90 min", price: "₦60,000 / ₦80,000", description: "Nurturing massage for expectant mothers, available with medical clearance." },
  { id: "maison-flow", category: "Massage", name: "Maison Flow – Lymphatic Drainage Massage", duration: "60 or 90 min", price: "₦80,000 / ₦110,000", description: "A gentle, specialised massage that supports circulation and a lighter feeling in the body." },

  { id: "maison-crown", category: "Express", name: "Maison Crown – Head Massage", duration: "30 min", price: "₦35,000", description: "A focused scalp and head massage to ease everyday tension." },
  { id: "maison-sole", category: "Express", name: "Maison Sole – Reflexology", duration: "45 min", price: "₦45,000", description: "Targeted foot therapy designed to encourage relaxation and balance." },
  { id: "maison-reset", category: "Express", name: "Maison Reset – Back, Neck & Shoulder Massage", duration: "45 min", price: "₦50,000", description: "Concentrated relief for the areas that carry the most daily stress." },

  { id: "essential-glow", category: "Facials", name: "Essential Glow", duration: "Duration on request", price: "₦50,000", description: "A refreshing facial ritual for a healthy, renewed-looking complexion." },
  { id: "pure-glow", category: "Facials", name: "Pure Glow", duration: "Duration on request", price: "₦60,000", description: "A clarifying facial designed to leave skin feeling clean, balanced and luminous." },
  { id: "hydra-glow", category: "Facials", name: "Hydra Glow", duration: "Duration on request", price: "₦60,000", description: "A moisture-focused treatment that replenishes dehydrated, tired skin." },
  { id: "gentlemans-glow", category: "Facials", name: "Gentleman’s Glow", duration: "Duration on request", price: "₦55,000", description: "A tailored facial that cleanses, refreshes and restores the skin." },
  { id: "radiance-facial", category: "Facials", name: "Radiance Facial", duration: "Duration on request", price: "₦65,000", description: "A glow-boosting treatment created to revive dull-looking skin." },
  { id: "calm-glow", category: "Facials", name: "Calm Glow", duration: "Duration on request", price: "₦55,000", description: "A gentle facial that comforts the complexion and leaves it soft and refreshed." },

  { id: "silk-polish", category: "Body Care", name: "Silk Polish", duration: "Duration on request", price: "₦105,000", description: "A full-body exfoliating polish for smoother, softer-feeling skin." },
  { id: "velvet-polish", category: "Body Care", name: "Velvet Polish", duration: "Duration on request", price: "₦130,000", description: "An elevated body polish that deeply refines and nourishes the skin." },
  { id: "glow-polish", category: "Body Care", name: "Glow Polish", duration: "Duration on request", price: "₦150,000", description: "A luxurious body-care ritual for polished, radiant-looking skin." },

  { id: "signature-manicure", category: "Hand & Foot Care", name: "Signature Manicure", duration: "Duration on request", price: "₦25,000", description: "Essential nail and hand care, finished with a polished touch." },
  { id: "silk-manicure", category: "Hand & Foot Care", name: "Silk Manicure", duration: "Duration on request", price: "₦35,000", description: "A restorative manicure with extra care for hands and nails." },
  { id: "velvet-manicure", category: "Hand & Foot Care", name: "Velvet Manicure", duration: "Duration on request", price: "₦45,000", description: "A more indulgent manicure experience for beautifully cared-for hands." },
  { id: "signature-pedicure", category: "Hand & Foot Care", name: "Signature Pedicure", duration: "Duration on request", price: "₦35,000", description: "Essential foot and nail care for a fresh, polished finish." },
  { id: "silk-pedicure", category: "Hand & Foot Care", name: "Silk Pedicure", duration: "Duration on request", price: "₦45,000", description: "A restorative pedicure that softens, refreshes and revives tired feet." },
  { id: "velvet-pedicure", category: "Hand & Foot Care", name: "Velvet Pedicure", duration: "Duration on request", price: "₦55,000", description: "An indulgent pedicure ritual with elevated care from heel to toe." },

  { id: "eyebrow-wax", category: "Waxing", name: "Eyebrow Wax", duration: "Duration on request", price: "₦12,000", description: waxingDescription },
  { id: "upper-lip-wax", category: "Waxing", name: "Upper Lip Wax", duration: "Duration on request", price: "₦10,000", description: waxingDescription },
  { id: "chin-wax", category: "Waxing", name: "Chin Wax", duration: "Duration on request", price: "₦10,000", description: waxingDescription },
  { id: "full-face-wax", category: "Waxing", name: "Full Face Wax", duration: "Duration on request", price: "₦30,000", description: waxingDescription },
  { id: "underarm-wax", category: "Waxing", name: "Underarm Wax", duration: "Duration on request", price: "₦18,000", description: waxingDescription },
  { id: "half-arm-wax", category: "Waxing", name: "Half Arm Wax", duration: "Duration on request", price: "₦22,000", description: waxingDescription },
  { id: "full-arm-wax", category: "Waxing", name: "Full Arm Wax", duration: "Duration on request", price: "₦35,000", description: waxingDescription },
  { id: "chest-wax", category: "Waxing", name: "Chest Wax", duration: "Duration on request", price: "₦35,000", description: waxingDescription },
  { id: "abdomen-wax", category: "Waxing", name: "Abdomen Wax", duration: "Duration on request", price: "₦30,000", description: waxingDescription },
  { id: "back-wax", category: "Waxing", name: "Back Wax", duration: "Duration on request", price: "₦40,000", description: waxingDescription },
  { id: "shoulder-wax", category: "Waxing", name: "Shoulder Wax", duration: "Duration on request", price: "₦20,000", description: waxingDescription },
  { id: "half-leg-wax", category: "Waxing", name: "Half Leg Wax", duration: "Duration on request", price: "₦30,000", description: waxingDescription },
  { id: "full-leg-wax", category: "Waxing", name: "Full Leg Wax", duration: "Duration on request", price: "₦50,000", description: waxingDescription },
  { id: "feet-toes-wax", category: "Waxing", name: "Feet & Toes Wax", duration: "Duration on request", price: "₦15,000", description: waxingDescription },
  { id: "bikini-wax", category: "Waxing", name: "Bikini Wax", duration: "Duration on request", price: "₦25,000", description: waxingDescription },
  { id: "extended-bikini-wax", category: "Waxing", name: "Extended Bikini Wax", duration: "Duration on request", price: "₦35,000", description: waxingDescription },
  { id: "brazilian-wax", category: "Waxing", name: "Brazilian Wax", duration: "Duration on request", price: "₦45,000", description: waxingDescription },
  { id: "hollywood-wax", category: "Waxing", name: "Hollywood Wax", duration: "Duration on request", price: "₦50,000", description: waxingDescription },
  { id: "manzilian-wax", category: "Waxing", name: "Manzilian Wax", duration: "Duration on request", price: "₦55,000", description: waxingDescription },
  { id: "mens-bikini-wax", category: "Waxing", name: "Men’s Bikini Wax", duration: "Duration on request", price: "₦40,000", description: waxingDescription },
  { id: "mens-hollywood-wax", category: "Waxing", name: "Men’s Hollywood Wax", duration: "Duration on request", price: "₦60,000", description: waxingDescription },
  { id: "full-body-wax", category: "Waxing", name: "Full Body Wax (excluding intimate)", duration: "Duration on request", price: "₦120,000", description: waxingDescription },
  { id: "full-body-intimate-wax", category: "Waxing", name: "Full Body Wax (including intimate)", duration: "Duration on request", price: "₦160,000", description: waxingDescription },
];

export const categories = ["All", "Massage", "Express", "Facials", "Body Care", "Hand & Foot Care", "Waxing"] as const;

export interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  includes: string[];
}

export const packages: Package[] = [
  { id: "essential-escape", name: "The Essential Escape", price: "₦85,000", duration: "Duration on request", includes: ["Deep Tissue Massage", "Body steaming"] },
  { id: "relaxation-ritual", name: "The Relaxation Ritual", price: "₦75,000", duration: "Duration on request", includes: ["Aromatherapy Massage", "Head Massage"] },
  { id: "glow-ritual", name: "The Glow Ritual", price: "₦140,000", duration: "Duration on request", includes: ["Glow Facial", "Silk Polish body scrub"] },
  { id: "executive-reset", name: "The Executive Reset", price: "₦70,000", duration: "Duration on request", includes: ["Back, Neck & Shoulder Massage", "Indian Head Massage", "Reflexology"] },
  { id: "signature-retreat", name: "The Signature Retreat", price: "₦150,000", duration: "Duration on request", includes: ["Swedish Massage", "Glow Facial", "Signature Pedicure"] },
  { id: "ultimate-maison", name: "The Ultimate Maison", price: "₦170,000", duration: "Duration on request", includes: ["Massage of choice", "Facial of choice", "Signature Manicure or Signature Pedicure"] },
];

export const testimonials = [
  { name: "Adaeze O.", text: "The calmest three hours I have had all year. The therapists actually listen, and the space smells and feels like a proper escape from Lagos." },
  { name: "Tunde A.", text: "I booked the deep tissue for a stiff neck and left standing straighter. Clean, professional and genuinely relaxing." },
  { name: "Chioma & Emeka", text: "We did the Couples Evening for our anniversary. Everything was thoughtful, from the private suite to the tea at the end." },
];

export const SALVE = {
  name: "Salve Maison",
  tagline: "Spa & Wellness Sanctuary",
  location: "Lekki, Lagos State, Nigeria",
  email: "salvemaisonspa@gmail.com",
  phoneDisplay: "0808 915 0333",
  whatsapp: "2348089150333",
  instagram: "salve_maison",
  tiktok: "salve.maison",
  snapchat: "salvemaison",
  hours: [
    { day: "Monday – Friday", time: "9:00 am – 8:00 pm" },
    { day: "Saturday", time: "9:00 am – 9:00 pm" },
    { day: "Sunday", time: "12:00 pm – 7:00 pm" },
  ],
};

export const waLink = (message = "Hello Salve Maison, I would like to book a treatment.") =>
  `https://wa.me/${SALVE.whatsapp}?text=${encodeURIComponent(message)}`;
