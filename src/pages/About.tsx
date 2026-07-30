import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import therapistArrival from "@/assets/therapist-arrival.png";
import prenatalTreatment from "@/assets/prenatal-treatment.png";

const values = [
  { number: "01", title: "Excellence", text: "Every detail matters, and every treatment reflects our commitment to exceptional standards." },
  { number: "02", title: "Professionalism", text: "Our therapists bring integrity, discretion, punctuality and polished service to every appointment." },
  { number: "03", title: "Luxury", text: "We create refined, personalised experiences that feel elegant, effortless and memorable." },
  { number: "04", title: "Care", text: "People are at the heart of everything we do, with every service delivered warmly and thoughtfully." },
];

const About = () => (
  <Layout
      title="About Salve Maison | Luxury Mobile Spa & Wellness"
      description="Learn about Salve Maison, a luxury mobile spa bringing premium wellness experiences to homes, hotels, offices and private events."
    >
    <section className="relative h-[52vh] min-h-[340px] flex items-center justify-center overflow-hidden">
      <img
        src={therapistArrival}
        alt="Salve Maison therapist arriving for a mobile spa appointment"
        width={1600}
        height={1100}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
      <div className="relative text-center px-6">
        <p className="kicker text-primary-foreground/80 mb-4">Our Story</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">About Salve Maison</h1>
        <p className="mt-5 max-w-xl mx-auto text-primary-foreground/80 leading-relaxed">
          Luxury mobile wellness, thoughtfully delivered to the places where you feel most at ease.
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
            Wellness delivered with distinction.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Salve Maison is a luxury mobile spa and wellness brand, created for people who value
            exceptional care without compromising comfort or convenience. We bring premium spa
            experiences directly to homes, hotels, offices and private events.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From professional equipment and luxury linens to premium products and highly trained
            therapists, every detail arrives with us. Every treatment is tailored to your needs,
            your setting and the kind of restoration you are looking for.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We exist for busy professionals, families, brides, expectant mothers, hotels,
            corporate organisations and anyone seeking a more personal way to experience wellness.
            Our goal is always the same: to leave you feeling refreshed, renewed and deeply cared for.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
          >
            Book your experience
          </Link>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={prenatalTreatment}
          alt="Personalised prenatal massage treatment"
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
            Thoughtful from your first message to our final warm towel.
          </h2>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Tell us what you need",
              text: "Share your preferred location, the occasion and the kind of care you need. Our team will help shape the right ritual.",
            },
            {
              number: "02",
              title: "We bring the spa to you",
              text: "Our therapists arrive with the professional equipment, luxury linens and premium products needed to transform your space.",
            },
            {
              number: "03",
              title: "Feel deeply restored",
              text: "Settle into a personalised experience created to help you pause, breathe and return to your day feeling renewed.",
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
