export type ServiceCategory = "Massage" | "Facials" | "Body Care" | "Hand & Foot Care" | "Waxing" | "Corporate Wellness";

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  duration: string;
  price: string;
  description: string;
}

export const services: Service[] = [
  { id: "maison-relax", category: "Massage", name: "Maison Relax – Swedish Massage", duration: "60 or 90 min", price: "₦65,000 / ₦90,000", description: "A gentle full-body massage that promotes relaxation, improves circulation and relieves everyday stress." },
  { id: "maison-restore", category: "Massage", name: "Maison Restore – Deep Tissue Massage", duration: "60 or 90 min", price: "₦70,000 / ₦95,000", description: "A therapeutic massage that targets deep muscle tension, chronic aches and stiffness." },
  { id: "maison-aroma", category: "Massage", name: "Maison Aroma – Aromatherapy Massage", duration: "60 or 90 min", price: "₦70,000 / ₦95,000", description: "A relaxing massage enhanced with essential oils to calm the mind and restore balance." },
  { id: "maison-stone", category: "Massage", name: "Maison Stone – Hot Stone Massage", duration: "60 or 90 min", price: "₦80,000 / ₦110,000", description: "A soothing massage using heated stones to ease muscle tension and encourage deep relaxation." },
  { id: "maison-stretch", category: "Massage", name: "Maison Stretch – Thai Massage", duration: "60 or 90 min", price: "₦75,000 / ₦100,000", description: "A combination of assisted stretching and pressure techniques to improve flexibility and mobility." },
  { id: "maison-bloom", category: "Massage", name: "Maison Bloom – Prenatal Massage", duration: "60 or 90 min", price: "₦60,000 / ₦80,000", description: "A gentle massage specially adapted to support comfort and relaxation during pregnancy." },
  { id: "maison-flow", category: "Massage", name: "Maison Flow – Lymphatic Drainage Massage", duration: "60 or 90 min", price: "₦80,000 / ₦110,000", description: "A light, rhythmic massage that encourages healthy lymphatic circulation and reduces fluid retention." },

  { id: "maison-crown", category: "Massage", name: "Maison Crown – Indian Head Massage", duration: "30 min", price: "₦35,000", description: "A focused treatment that relieves tension in the scalp, neck and shoulders while promoting relaxation." },
  { id: "maison-sole", category: "Massage", name: "Maison Sole – Reflexology", duration: "45 min", price: "₦45,000", description: "A therapeutic foot treatment that uses pressure points to support overall wellbeing and relaxation." },
  { id: "maison-reset", category: "Massage", name: "Maison Reset – Back, Neck & Shoulder Massage", duration: "45 min", price: "₦50,000", description: "A targeted massage that relieves tension in the areas most affected by stress and poor posture." },

  { id: "essential-glow", category: "Facials", name: "Essential Glow", duration: "Duration on request", price: "₦50,000", description: "A refreshing facial that deeply cleanses, hydrates and restores your skin’s natural glow. Ideal for dull, tired and dehydrated skin." },
  { id: "pure-glow", category: "Facials", name: "Pure Glow", duration: "Duration on request", price: "₦60,000", description: "A purifying facial that deeply cleanses the skin and helps reduce congestion. Ideal for oily, acne-prone and congested skin." },
  { id: "hydra-glow", category: "Facials", name: "Hydra Glow", duration: "Duration on request", price: "₦60,000", description: "An intensive hydrating facial that replenishes moisture for soft, radiant skin. Ideal for dry, dehydrated and sensitive skin." },
  { id: "gentlemans-glow", category: "Facials", name: "Gentleman’s Glow", duration: "Duration on request", price: "₦55,000", description: "A facial specially designed to cleanse, hydrate and refresh men’s skin. Ideal for dullness, razor irritation and tired-looking skin." },
  { id: "radiance-facial", category: "Facials", name: "Radiance Facial", duration: "Duration on request", price: "₦65,000", description: "A brightening facial that improves skin tone and enhances a healthy, luminous complexion. Ideal for uneven skin tone, dark spots and pigmentation." },
  { id: "calm-glow", category: "Facials", name: "Calm Glow", duration: "Duration on request", price: "₦55,000", description: "A soothing facial that comforts delicate skin while restoring balance and hydration. Ideal for sensitive, irritated or redness-prone skin." },

  { id: "silk-polish", category: "Body Care", name: "Silk Polish", duration: "Duration on request", price: "₦105,000", description: "A gentle exfoliating body scrub that leaves the skin smooth, soft and refreshed." },
  { id: "velvet-polish", category: "Body Care", name: "Velvet Polish", duration: "Duration on request", price: "₦130,000", description: "A luxurious body polish that deeply exfoliates while revealing radiant, glowing skin." },
  { id: "glow-polish", category: "Body Care", name: "Glow Polish", duration: "Duration on request", price: "₦150,000", description: "An indulgent full-body exfoliation designed to brighten the skin and enhance its natural glow." },

  { id: "signature-manicure", category: "Hand & Foot Care", name: "Signature Manicure", duration: "Duration on request", price: "₦25,000", description: "Essential nail and hand care, finished with a polished touch." },
  { id: "silk-manicure", category: "Hand & Foot Care", name: "Silk Manicure", duration: "Duration on request", price: "₦35,000", description: "A restorative manicure with extra care for hands and nails." },
  { id: "velvet-manicure", category: "Hand & Foot Care", name: "Velvet Manicure", duration: "Duration on request", price: "₦45,000", description: "A more indulgent manicure experience for beautifully cared-for hands." },
  { id: "signature-pedicure", category: "Hand & Foot Care", name: "Signature Pedicure", duration: "Duration on request", price: "₦35,000", description: "Essential foot and nail care for a fresh, polished finish." },
  { id: "silk-pedicure", category: "Hand & Foot Care", name: "Silk Pedicure", duration: "Duration on request", price: "₦45,000", description: "A restorative pedicure that softens, refreshes and revives tired feet." },
  { id: "velvet-pedicure", category: "Hand & Foot Care", name: "Velvet Pedicure", duration: "Duration on request", price: "₦55,000", description: "An indulgent pedicure ritual with elevated care from heel to toe." },

  { id: "eyebrow-wax", category: "Waxing", name: "Eyebrow Wax", duration: "Duration on request", price: "₦12,000", description: "Shapes and defines the eyebrows by removing unwanted hair. Targets the eyebrow area." },
  { id: "upper-lip-wax", category: "Waxing", name: "Upper Lip Wax", duration: "Duration on request", price: "₦10,000", description: "Removes hair above the upper lip for a smooth finish. Targets the upper lip." },
  { id: "chin-wax", category: "Waxing", name: "Chin Wax", duration: "Duration on request", price: "₦10,000", description: "Eliminates unwanted chin hair for a clean look. Targets the chin." },
  { id: "full-face-wax", category: "Waxing", name: "Full Face Wax", duration: "Duration on request", price: "₦30,000", description: "Removes facial hair for soft, smooth skin. Targets the entire face." },
  { id: "underarm-wax", category: "Waxing", name: "Underarm Wax", duration: "Duration on request", price: "₦18,000", description: "Removes underarm hair for longer-lasting smoothness. Targets the underarms." },
  { id: "half-arm-wax", category: "Waxing", name: "Half Arm Wax", duration: "Duration on request", price: "₦22,000", description: "Removes hair from either the upper or lower arms. Targets half of the arms." },
  { id: "full-arm-wax", category: "Waxing", name: "Full Arm Wax", duration: "Duration on request", price: "₦35,000", description: "Removes hair from shoulder to wrist. Targets the entire arms." },
  { id: "chest-wax", category: "Waxing", name: "Chest Wax", duration: "Duration on request", price: "₦35,000", description: "Removes chest hair for a smooth appearance. Targets the chest." },
  { id: "abdomen-wax", category: "Waxing", name: "Abdomen Wax", duration: "Duration on request", price: "₦30,000", description: "Removes unwanted hair from the stomach area. Targets the abdomen." },
  { id: "back-wax", category: "Waxing", name: "Back Wax", duration: "Duration on request", price: "₦40,000", description: "Removes hair from the upper and lower back. Targets the back." },
  { id: "shoulder-wax", category: "Waxing", name: "Shoulder Wax", duration: "Duration on request", price: "₦20,000", description: "Removes hair from the shoulder area. Targets the shoulders." },
  { id: "half-leg-wax", category: "Waxing", name: "Half Leg Wax", duration: "Duration on request", price: "₦30,000", description: "Removes hair from either the upper or lower legs. Targets half of the legs." },
  { id: "full-leg-wax", category: "Waxing", name: "Full Leg Wax", duration: "Duration on request", price: "₦50,000", description: "Removes hair from thigh to ankle. Targets the entire legs." },
  { id: "feet-toes-wax", category: "Waxing", name: "Feet & Toes Wax", duration: "Duration on request", price: "₦15,000", description: "Removes hair from the feet and toes. Targets the feet and toes." },
  { id: "bikini-wax", category: "Waxing", name: "Bikini Wax", duration: "Duration on request", price: "₦25,000", description: "Removes hair outside the bikini line. Targets the bikini area." },
  { id: "extended-bikini-wax", category: "Waxing", name: "Extended Bikini Wax", duration: "Duration on request", price: "₦35,000", description: "Removes more hair beyond the bikini line. Targets the bikini and inner bikini area." },
  { id: "brazilian-wax", category: "Waxing", name: "Brazilian Wax", duration: "Duration on request", price: "₦45,000", description: "Removes most intimate hair, leaving a strip if preferred. Targets the intimate area." },
  { id: "hollywood-wax", category: "Waxing", name: "Hollywood Wax", duration: "Duration on request", price: "₦50,000", description: "Removes all intimate hair for a completely smooth finish. Targets the entire intimate area." },
  { id: "manzilian-wax", category: "Waxing", name: "Manzilian Wax", duration: "Duration on request", price: "₦55,000", description: "Removes hair from the male intimate area. Targets the front and intimate region." },
  { id: "mens-bikini-wax", category: "Waxing", name: "Men’s Bikini Wax", duration: "Duration on request", price: "₦40,000", description: "Removes hair around the bikini line. Targets the bikini line." },
  { id: "mens-hollywood-wax", category: "Waxing", name: "Men’s Hollywood Wax", duration: "Duration on request", price: "₦60,000", description: "Removes all intimate hair for a smooth finish. Targets the entire intimate area." },
  { id: "full-body-wax", category: "Waxing", name: "Full Body Wax (excluding intimate)", duration: "Duration on request", price: "₦120,000", description: "Complete hair removal from the body, excluding intimate areas. Targets the full body except intimate areas." },
  { id: "full-body-intimate-wax", category: "Waxing", name: "Full Body Wax (including intimate)", duration: "Duration on request", price: "₦160,000", description: "Complete hair removal from the entire body, including intimate areas. Targets the entire body." },

  { id: "chair-massage-10-20", category: "Corporate Wellness", name: "Chair Massage — 10–20 guests", duration: "15–20 min per person", price: "₦15,000 per person", description: "A premium workplace wellness experience for corporate offices, events and executive teams." },
  { id: "chair-massage-21-50", category: "Corporate Wellness", name: "Chair Massage — 21–50 guests", duration: "15–20 min per person", price: "₦13,000 per person", description: "A premium workplace wellness experience for corporate offices, events and executive teams." },
  { id: "chair-massage-51-100", category: "Corporate Wellness", name: "Chair Massage — 51–100 guests", duration: "15–20 min per person", price: "₦12,000 per person", description: "A premium workplace wellness experience for corporate offices, events and executive teams." },
  { id: "chair-massage-100-plus", category: "Corporate Wellness", name: "Chair Massage — 100+ guests", duration: "15–20 min per person", price: "Custom quote", description: "Pricing is tailored to the event size, duration, location and number of therapists required." },
  { id: "executive-office-reset", category: "Corporate Wellness", name: "Executive Office Reset", duration: "Custom schedule", price: "Custom quote", description: "A wellness experience designed for busy professionals, executive teams and corporate offices." },
  { id: "event-wellness-lounge", category: "Corporate Wellness", name: "Event Wellness Lounge", duration: "Custom schedule", price: "Custom quote", description: "A premium wellness lounge for conferences, weddings, product launches, trade fairs and VIP events." },
  { id: "workplace-wellness-day", category: "Corporate Wellness", name: "Workplace Wellness Day", duration: "Custom schedule", price: "Custom quote", description: "Tailored wellbeing support for staff wellness, employee appreciation, Mental Health Week and team retreats." },
];

export const categories = ["All", "Massage", "Facials", "Body Care", "Hand & Foot Care", "Waxing", "Corporate Wellness"] as const;

export type RitualCollection = "Signature Rituals" | "Couples Rituals" | "Bridal Rituals" | "Motherhood Rituals" | "Gentlemen’s Rituals";

export interface Package {
  id: string;
  name: string;
  collection: RitualCollection;
  price: string;
  duration: string;
  includes: string[];
  description?: string;
}

export const ritualCollections: Record<RitualCollection, { description?: string; note?: string }> = {
  "Signature Rituals": {
    description: "Thoughtfully paired treatments for a complete, restorative escape.",
  },
  "Couples Rituals": {
    description: "Created for couples, anniversaries, birthdays, engagements, honeymoon stays or a relaxing date at home.",
  },
  "Bridal Rituals": {
    description: "Every bride deserves a moment of calm before her big day. These rituals relax the body, refresh the skin and leave you feeling radiant, confident and beautifully prepared.",
  },
  "Motherhood Rituals": {
    description: "Nurturing wellness experiences for pregnancy and the season after birth.",
    note: "Prenatal massage is available after medical clearance and is tailored to the appropriate stage of pregnancy. Postpartum treatments are offered once your healthcare provider has confirmed they are appropriate.",
  },
  "Gentlemen’s Rituals": {
    description: "Focused wellness and grooming rituals created for restoration, recovery and refined self-care.",
  },
};

export const packages: Package[] = [
  { id: "essential-escape", collection: "Signature Rituals", name: "The Essential Escape", price: "₦85,000", duration: "75 minutes", includes: ["Deep Tissue Massage", "Body Steaming"] },
  { id: "relaxation-ritual", collection: "Signature Rituals", name: "The Relaxation Ritual", price: "₦75,000", duration: "1 hour", includes: ["Aromatherapy Massage", "Head Massage"] },
  { id: "glow-ritual", collection: "Signature Rituals", name: "The Glow Ritual", price: "₦140,000", duration: "2 hrs 30 mins", description: "A lovely self-care package.", includes: ["Glow Facial", "Silk Polish (Body Scrub)"] },
  { id: "executive-reset", collection: "Signature Rituals", name: "The Executive Reset", price: "₦70,000", duration: "1 hour", description: "Created for busy professionals.", includes: ["Back, Neck & Shoulder Massage", "Indian Head Massage", "Reflexology"] },
  { id: "signature-retreat", collection: "Signature Rituals", name: "The Signature Retreat", price: "₦150,000", duration: "2 hrs 30 mins", includes: ["Swedish Massage", "Glow Facial", "Signature Pedicure"] },
  { id: "ultimate-maison", collection: "Signature Rituals", name: "The Ultimate Maison", price: "₦170,000", duration: "3 hours", includes: ["Massage of Choice", "Facial of Choice", "Signature Manicure or Signature Pedicure"] },

  { id: "together-in-tranquility", collection: "Couples Rituals", name: "Together in Tranquility", price: "₦140,000", duration: "Approximately 2 hours", description: "Luxury wellness, shared together.", includes: ["60-Minute Swedish Massage for each person", "Aromatherapy Enhancement", "Warm Towel Ritual", "Herbal Tea or Sparkling Water", "Candlelit ambiance with relaxing music"] },
  { id: "signature-couples-escape", collection: "Couples Rituals", name: "The Signature Couple’s Escape", price: "₦220,000", duration: "Approximately 3 hours", description: "An unforgettable spa experience for two.", includes: ["90-Minute Swedish or Aromatherapy Massage", "Express Glow Facial for each person", "Warm Towel Ritual", "Aromatherapy Enhancement", "Herbal Tea & Light Refreshments"] },
  { id: "intimate-escape", collection: "Couples Rituals", name: "The Intimate Escape", price: "₦320,000", duration: "Approximately 3 hrs 30 mins", description: "Because unforgettable moments deserve unforgettable care.", includes: ["90-Minute Signature Massage", "Velvet Polish", "Signature Pedicure and Manicure", "Aromatherapy Enhancement", "Luxury spa setup with candles, soft music and fresh towels", "Herbal Tea or Non-Alcoholic Sparkling Drink"] },

  { id: "bridal-radiance-ritual", collection: "Bridal Rituals", name: "The Bridal Radiance Ritual", price: "₦180,000", duration: "4–5 hours", includes: ["90-Minute Aromatherapy Massage", "Luxury Bridal Glow Facial", "Signature Manicure", "Signature Pedicure", "Warm Towel Ritual", "Herbal Tea or Refreshments"] },
  { id: "bridal-luxe-experience", collection: "Bridal Rituals", name: "The Bridal Luxe Experience", price: "₦260,000", duration: "5–6 hours", description: "An unforgettable wellness experience before your walk down the aisle.", includes: ["90-Minute Aromatherapy Massage", "Luxury Bridal Glow Facial", "Full-Body Velvet Polish", "Velvet Manicure", "Velvet Pedicure", "Aromatherapy Enhancement", "Warm Towel Ritual", "Herbal Tea or Refreshments"] },

  { id: "blooming-mama", collection: "Motherhood Rituals", name: "The Blooming Mama", price: "₦70,000", duration: "90 minutes", description: "Nurturing comfort through every stage of motherhood.", includes: ["60-Minute Prenatal Massage", "Indian Head Massage", "Gentle Foot Massage with no reflexology pressure points"] },
  { id: "mama-glow-ritual", collection: "Motherhood Rituals", name: "The Mama Glow Ritual", price: "₦120,000", duration: "2 hours", description: "Relax, restore and glow.", includes: ["Prenatal Massage", "Hydrating Facial", "Warm Towel Ritual"] },
  { id: "new-mama-retreat", collection: "Motherhood Rituals", name: "The New Mama Retreat", price: "₦115,000", duration: "2 hours", description: "Because every new mother deserves to be cared for too.", includes: ["Swedish Massage", "Indian Head Massage", "Glow Facial"] },
  { id: "postpartum-restore", collection: "Motherhood Rituals", name: "The Postpartum Restore", price: "₦105,000", duration: "2 hours", description: "Gentle care to help you relax and recharge.", includes: ["Lymphatic Drainage Massage when medically appropriate", "Neck & Shoulder Massage", "Hydrating Facial"] },
  { id: "motherhood-escape", collection: "Motherhood Rituals", name: "The Motherhood Escape", price: "₦120,000", duration: "2 hrs 30 mins", description: "A premium experience for mothers.", includes: ["90-Minute Prenatal or Swedish Massage, depending on the client", "Signature Facial", "Warm Towel Ritual", "Herbal Tea"] },

  { id: "gentlemens-executive-reset", collection: "Gentlemen’s Rituals", name: "The Executive Reset", price: "₦210,000", duration: "3 hours", includes: ["60-Minute Deep Tissue Massage", "Silk Polish body scrub", "Gentleman’s Facial"] },
  { id: "gentlemens-retreat", collection: "Gentlemen’s Rituals", name: "The Gentleman’s Retreat", price: "₦110,000", duration: "2 hours", includes: ["60-Minute Swedish Massage", "Gentleman’s Glow Facial"] },
  { id: "urban-men-recharge", collection: "Gentlemen’s Rituals", name: "The Urban Men Recharge", price: "₦85,000", duration: "90 minutes", includes: ["Deep Tissue Massage", "Body steam"] },
  { id: "chairmans-ritual", collection: "Gentlemen’s Rituals", name: "The Chairman’s Ritual", price: "₦120,000", duration: "2 hrs 30 mins", includes: ["90-Minute Signature Massage", "Gentleman’s Glow Facial"] },
  { id: "gentlemens-grooming-ritual", collection: "Gentlemen’s Rituals", name: "The Gentleman’s Grooming Ritual", price: "₦100,000", duration: "2 hours", includes: ["Gentleman’s Glow Facial", "Signature Manicure", "Signature Pedicure"] },
];

export const testimonials = [
  { name: "Adaeze O.", text: "The calmest three hours I have had all year. The therapists actually listen, and the space smells and feels like a proper escape from Lagos." },
  { name: "Tunde A.", text: "I booked the deep tissue for a stiff neck and left standing straighter. Clean, professional and genuinely relaxing." },
  { name: "Chioma & Emeka", text: "We did the Couples Evening for our anniversary. Everything was thoughtful, from the private suite to the tea at the end." },
];

export const SALVE = {
  name: "Salve Maison",
  tagline: "Luxury Mobile Spa & Wellness",
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
