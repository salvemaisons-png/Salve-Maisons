import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroImg from "@/assets/spa-hero.jpg";
import massageImg from "@/assets/spa-massage.jpg";
import { SALVE } from "@/data/services";

const values = [
  { number: "01", title: "Gentle by default", text: "Products and pressure chosen for your skin and body, never a one-size ritual." },
  { number: "02", title: "Hygiene first", text: "Fresh linen for every guest, sterilised tools and spotless private rooms." },
  { number: "03", title: "Trained hands", text: "Certified therapists who keep learning, and who listen before they begin." },
  { number: "04", title: "Quiet luxury", text: "No noise, no rush, no upselling — just a beautiful hour that belongs to you." },
];

const About = () => (
  <Layout
      title="About Salve Maison | Luxury Day Spa in Lekki"
      description="Our story, therapists and philosophy of rest at Salve Maison, a boutique luxury spa in Lekki, Lagos."
    >
    <section className="relative h-[52vh] min-h-[340px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Interior of Salve Maison spa"
        width={1600}
        height={1100}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
      <div className="relative text-center px-6">
        <p className="kicker text-primary-foreground/80 mb-4">Our Story</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">About Salve Maison</h1>
        <p className="mt-5 max-w-xl mx-auto text-primary-foreground/80 leading-relaxed">
          A considered place for rest, repair and the small rituals that help you feel like yourself again.
        </p>
      </div>
    </section>

    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="kicker text-primary mb-4">Who we are</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            A house of care in the heart of Lekki
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            "Salve" means to soothe. That word shaped everything: the sage-and-rose rooms, the
            unhurried pace and the therapists we chose. We opened Salve Maison because Lagos moves
            fast, and there were too few places to properly stop, breathe and be cared for without
            feeling rushed.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today we welcome guests for everything from a 30-minute steam before work to full
            bridal spa days and slow weekends shared with someone special. Whatever brings you in,
            the standard is the same — clean, calm, attentive and completely yours for the hour.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We believe wellness is most meaningful when it feels personal. That is why we begin by
            listening: to the tension you are carrying, the result you are hoping for and the pace
            that feels right for you. From there, we create a treatment that meets you where you are.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
          >
            Visit us in {SALVE.location.split(",")[0]}
          </Link>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={massageImg}
          alt="Therapist preparing hot stones and towels"
          width={1200}
          height={900}
          loading="lazy"
          className=" w-full object-cover shadow-soft"
        />
      </div>
    </section>

    <section className="py-20 md:py-24 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="kicker text-primary mb-4">Your time with us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Thoughtful from your first message to your final cup of tea.
          </h2>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Tell us what you need",
              text: "When you book, our team can help you choose a treatment, combine services or plan around the time you have available.",
            },
            {
              number: "02",
              title: "Settle into your ritual",
              text: "Arrive a few minutes early, take a breath and let your therapist tailor the pressure, products and pace to your comfort.",
            },
            {
              number: "03",
              title: "Leave feeling restored",
              text: "Your appointment closes gently with time to reset, hydrate and carry that calmer feeling back into the rest of your day.",
            },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="py-7 md:py-0 md:px-8 first:md:pl-0 border-t border-border md:border-t-0 md:border-l first:md:border-l-0"
            >
              <p className="kicker text-primary">{step.number}</p>
              <h3 className="mt-4 font-display text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="kicker text-primary mb-4">What we stand for</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Our promise to every guest</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-t border-border pt-5"
            >
              <p className="kicker text-primary">{v.number}</p>
              <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
