import { motion } from "framer-motion";
import FaqSection from "@/components/FaqSection";
import Layout from "@/components/layout/Layout";
import { waLink } from "@/data/services";

const Faq = () => (
  <Layout
    title="Frequently Asked Questions | Salve Maison"
    description="Answers to common questions about Salve Maison mobile spa bookings, treatments, safety, payments and corporate wellness."
  >
    <section className="bg-gradient-soft py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 md:px-8 text-center"
      >
        <p className="kicker text-primary mb-4">Helpful details</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold">Frequently asked questions</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Everything you need to know about booking your Salve Maison experience, from preparing your space to choosing the right ritual.
        </p>
      </motion.div>
    </section>

    <FaqSection />

    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="kicker text-primary mb-4">Still need help?</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Our team is happy to help.</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">Send us a message with your preferred location, date and treatment, and we will guide you from there.</p>
        <a href={waLink()} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition">
          Message Salve Maison
        </a>
      </div>
    </section>
  </Layout>
);

export default Faq;
