import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqGroups = [
  {
    title: "About Salve Maison",
    questions: [
      { question: "What is SALVE MAISON?", answer: "SALVE MAISON is a luxury mobile spa and wellness brand that delivers premium spa experiences directly to your home, hotel, office or preferred location." },
      { question: "Do you come to my home, hotel or office?", answer: "Yes. We bring the complete spa experience to your preferred location, including all professional equipment and spa essentials." },
      { question: "What areas do you serve?", answer: "We currently serve clients across Lagos and selected surrounding areas. Additional travel charges may apply for locations outside our standard service area." },
      { question: "Why choose SALVE MAISON?", answer: "Because we believe luxury wellness should come to you. Every experience is thoughtfully designed to provide exceptional care, personalised treatments and the comfort of enjoying a premium spa experience in your own space." },
    ],
  },
  {
    title: "Booking & Preparation",
    questions: [
      { question: "What should I prepare before my appointment?", answer: "Simply ensure there is enough space for your treatment. We bring the massage table, fresh linens, towels and other spa essentials." },
      { question: "Do you provide the massage bed and other equipment?", answer: "Yes. Our therapists arrive fully equipped with a professional portable massage bed and everything required for your treatment." },
      { question: "How do I book an appointment?", answer: "You can book through our website, WhatsApp, phone call or social media platforms. Our team will confirm your appointment promptly." },
      { question: "How far in advance should I book?", answer: "We recommend booking at least 24–48 hours in advance to secure your preferred date and time." },
      { question: "Do you accept same-day bookings?", answer: "Yes, subject to therapist availability." },
      { question: "Can I reschedule my appointment?", answer: "Yes. Please notify us as early as possible, and we’ll be happy to arrange another convenient appointment." },
      { question: "What is your cancellation policy?", answer: "Appointments cancelled with sufficient notice may be rescheduled. Late cancellations may attract a cancellation fee." },
    ],
  },
  {
    title: "Treatments, Comfort & Safety",
    questions: [
      { question: "Are your therapists professionally trained?", answer: "Yes. Our therapists are professionally trained and committed to delivering exceptional care with the highest standards of professionalism and hygiene." },
      { question: "Is massage suitable for everyone?", answer: "Massage is suitable for most people. However, certain medical conditions may require approval from your healthcare provider before treatment." },
      { question: "Is prenatal massage safe?", answer: "Yes. Prenatal massage is available after medical clearance and is carefully adapted to each stage of pregnancy." },
      { question: "What should I wear during my treatment?", answer: "Wear comfortable clothing. Your comfort and privacy are always respected, and only the area being treated will be appropriately uncovered." },
      { question: "Can I choose a male or female therapist?", answer: "Yes. You may request your preferred therapist, subject to availability." },
      { question: "How long does a treatment last?", answer: "Treatment times vary depending on the service selected, typically ranging from 30 minutes to 3 hours or more for our luxury rituals." },
      { question: "Do I need to shower before my appointment?", answer: "While not mandatory, we recommend arriving clean and comfortable to enhance your spa experience." },
      { question: "What products do you use?", answer: "We use carefully selected professional spa products chosen for their quality, safety and effectiveness." },
      { question: "What if I have allergies or a medical condition?", answer: "Please let us know before your appointment so we can tailor your treatment to your individual needs and ensure your safety." },
      { question: "Is my personal information kept confidential?", answer: "Absolutely. Your privacy is important to us, and all personal information and treatment details are handled with complete confidentiality." },
    ],
  },
  {
    title: "Groups, Gifts & Payments",
    questions: [
      { question: "Do you offer couples or group bookings?", answer: "Absolutely. We provide Couples Rituals, bridal packages, family bookings, birthday spa experiences and corporate wellness services." },
      { question: "What payment methods do you accept?", answer: "We accept bank transfers and other approved payment methods, which will be confirmed during booking." },
      { question: "Can I book SALVE MAISON for corporate events?", answer: "Yes. We provide luxury wellness experiences for offices, conferences, executive teams, hotels, weddings and private events." },
      { question: "Can I purchase a treatment as a gift?", answer: "Yes. Our treatments and rituals make thoughtful gifts for birthdays, anniversaries, bridal celebrations, Mother’s Day, Father’s Day and other special occasions." },
      { question: "Is gratuity included in the service price?", answer: "Our pricing does not include gratuities. Tipping is entirely optional and always appreciated as a gesture of satisfaction with your therapist’s service." },
    ],
  },
];

type FaqSectionProps = {
  heading?: boolean;
  className?: string;
};

const FaqSection = ({ heading = false, className = "" }: FaqSectionProps) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      {heading && (
        <div className="mb-12 text-center">
          <p className="kicker text-primary mb-4">Helpful details</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Frequently asked questions</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Everything you need to know about booking your Salve Maison experience.</p>
        </div>
      )}
      <div className="space-y-14 md:space-y-20">
        {faqGroups.map((group, groupIndex) => (
          <motion.section key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: groupIndex * 0.04 }}>
            <p className="kicker text-primary">{String(groupIndex + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold">{group.title}</h3>
            <Accordion type="single" collapsible className="mt-6 border-t border-border">
              {group.questions.map((item, itemIndex) => (
                <AccordionItem key={item.question} value={`${groupIndex}-${itemIndex}`}>
                  <AccordionTrigger className="gap-6 py-5 text-left font-display text-xl md:text-2xl font-semibold no-underline hover:no-underline">{item.question}</AccordionTrigger>
                  <AccordionContent className="max-w-2xl text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
