import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import mobileSpaHero from "@/assets/mobile-spa-hero.png";
import mobileMassageTreatment from "@/assets/mobile-massage-treatment.png";
import therapistArrival from "@/assets/therapist-arrival.png";
import treatmentSetup from "@/assets/treatment-setup.png";
import spaEssentials from "@/assets/spa-essentials.png";
import prenatalTreatment from "@/assets/prenatal-treatment.png";
import { SALVE, packages, services, testimonials, waLink } from "@/data/services";
import { WhatsAppIcon } from "@/components/BrandIcons";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const testimonialImages = ["/morocco.jpg", "/france.jpg", "/asia-temple.jpg"];

const Index = () => {
  const featured = services.slice(0, 6);
  const featuredPackages = packages.filter((item) => item.collection === "Signature Rituals");

  return (
    <Layout
      title="Salve Maison — Luxury Mobile Spa & Wellness"
      description="Luxury spa and wellness experiences delivered to your home, hotel, office or private event. Book Salve Maison on WhatsApp."
    >
      {/* Hero */}
      <section className="overflow-hidden bg-sage-deep px-4 py-8 text-[#f8f4ec] md:px-8 md:py-10">
        <div className="max-w-[1440px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="font-display font-normal uppercase leading-[0.7] tracking-[-0.07em]"
            style={{ fontSize: "clamp(4.2rem, 11.3vw, 11.8rem)" }}
          >
            <span className="block">Luxury wellness,</span>
            <span className="block text-right pr-[4%]">delivered to you.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mt-12 grid overflow-hidden md:mt-16 md:grid-cols-2"
          >
            <div className="relative min-h-[245px] md:min-h-[330px] overflow-hidden">
              <img
                src={mobileSpaHero}
                alt="Salve Maison mobile spa treatment room"
                width={1200}
                height={900}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-deep/85 via-transparent to-transparent" />
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-6 left-6 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-[#f8f4ec] before:block before:h-px before:w-5 before:bg-[#f8f4ec] hover:text-secondary transition-colors"
              >
                Book appointment
              </a>
            </div>

            <div className="relative min-h-[245px] md:min-h-[330px] overflow-hidden bg-[#bbb6ae]">
              <div className="absolute right-0 top-0 h-full w-[36%] bg-sage/35" />
              <div className="absolute right-[8%] top-0 h-full w-10 bg-sage/30 [clip-path:ellipse(35%_50%_at_50%_50%)]" />
              <img
                src={treatmentSetup}
                alt="Therapist preparing a mobile massage setup"
                width={1200}
                height={900}
                className="absolute left-[18%] top-[8%] h-[84%] w-[30%] rounded-[50%] object-cover"
              />
              <img
                src={prenatalTreatment}
                alt="Prenatal massage treatment by Salve Maison"
                width={1600}
                height={1100}
                className="absolute left-[51%] top-[13%] h-[74%] w-[18%] rounded-[50%] object-cover"
              />
              <img
                src={spaEssentials}
                alt="Salve Maison spa essentials"
                width={1200}
                height={900}
                className="absolute right-[4%] top-[17%] h-[65%] w-[13%] rounded-[50%] object-cover opacity-75"
              />
              <Link
                to="/services"
                className="absolute bottom-6 left-6 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-sage-deep before:block before:h-px before:w-5 before:bg-sage-deep hover:text-rose-deep transition-colors"
              >
                Explore treatments
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...fade}>
            <p className="kicker text-primary mb-4">Welcome to Salve Maison</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Luxury is not where you go. It is how you are cared for.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Salve Maison brings exceptional spa and wellness experiences directly to your home,
              hotel, office or private residence. We transform the space around you into a calm,
              considered sanctuary, so relaxation can begin the moment we arrive.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every visit is thoughtfully curated around professionalism, discretion and genuine
              care. Whether you need to reset after a demanding week, prepare for a celebration or
              create a memorable wellness moment for your team, we bring everything needed to you.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Luxury, wherever you are",
                  text: "Premium spa care delivered to your preferred location, on your terms.",
                },
                {
                  title: "Thoughtful setup",
                  text: "Luxury linens, calming details and professional equipment brought to you.",
                },
                {
                  title: "Personalised care",
                  text: "Each ritual is tailored to your body, schedule and wellbeing needs.",
                },
              ].map((f) => (
                <div key={f.title} className="border-t border-border pt-4">
                  <h3 className="font-display text-lg font-bold">{f.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{f.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fade} className="grid grid-cols-2 gap-4">
            <motion.img
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.45 }}
              src={therapistArrival}
              alt="Salve Maison therapist arriving with mobile spa equipment"
              width={1200}
              height={900}
              loading="lazy"
              className=" object-cover h-full w-full shadow-soft"
            />
            <motion.img
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.45 }}
              src={treatmentSetup}
              alt="Mobile massage bed prepared with luxury linens"
              width={1200}
              height={900}
              loading="lazy"
              className=" object-cover h-full w-full mt-10 shadow-soft"
            />
          </motion.div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="kicker text-primary mb-4">The Menu</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Signature treatments</h2>
            <p className="mt-4 text-muted-foreground">
              From restorative massage to glow-boosting facials and full-body rituals, every
              treatment is delivered with care in the comfort of your chosen space. Tell us what
              you need, and our team will help create the right experience for you.
            </p>
          </motion.div>
          <div className="treatment-grid grid sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <motion.article
                key={s.id}
                {...fade}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-6 sm:p-7 transition-colors hover:bg-rose-soft/30"
              >
                <span className="kicker text-primary">{s.category}</span>
                <h3 className="font-display text-xl font-bold mt-3 leading-snug">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.description}</p>
                <div className="mt-5 flex flex-col gap-2 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <span>{s.duration}</span>
                  <span className="font-semibold text-foreground">{s.price}</span>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition"
            >
              Full treatment menu <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...fade} className="mb-14 max-w-2xl">
            <p className="kicker text-primary mb-4">Signature Rituals</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Wellness, thoughtfully brought together</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our curated rituals bring together complementary treatments for a complete, luxurious
              escape — whether you are celebrating, recovering or simply making time for yourself.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {featuredPackages.map((p, i) => (
              <motion.div
                key={p.id}
                {...fade}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-border bg-card p-7 md:p-8 flex flex-col lift-on-hover"
              >
                <span className="block w-10 border-t-2 border-secondary mb-6" />
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="kicker text-muted-foreground mt-2">{p.duration}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground flex-1">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex gap-2">
                      <span className="text-primary">·</span> {inc}
                    </li>
                  ))}
                </ul>
                <p className="font-display text-3xl font-bold mt-8">{p.price}</p>
                <a
                  href={waLink(`Hello Salve Maison, I'd like to book the ${p.name} package.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
                >
                  Reserve
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 bg-sage-deep text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...fade} className="text-center mb-10 md:mb-14">
            <p className="kicker text-primary-foreground/70 mb-4">Guest Notes</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Kind words</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                {...fade}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t border-primary-foreground/25 pt-6 md:pt-7"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-display text-lg md:text-xl italic leading-relaxed text-primary-foreground/90">"{t.text}"</p>
                <footer className="mt-7 flex items-center gap-3">
                  <img
                    src={testimonialImages[i]}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-1 ring-primary-foreground/30"
                  />
                  <span className="kicker text-primary-foreground/60">{t.name}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <motion.div {...fade} className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <img
            src={mobileMassageTreatment}
            alt="Massage treatment by Salve Maison"
            width={1200}
            height={900}
            loading="lazy"
            className=" w-full h-64 object-cover mb-10 shadow-soft"
          />
          <p className="kicker text-primary mb-4">Booking</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Luxury wellness, wherever you are</h2>
          <p className="mt-5 text-muted-foreground">
            Tell us where and when you would like to unwind. We will bring the therapists, premium
            products and thoughtful details needed for an effortless spa experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
            >
              <WhatsAppIcon className="w-4 h-4" /> Book on WhatsApp
            </a>
            <a
              href={`mailto:${SALVE.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary text-primary px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition"
            >
              Email us
            </a>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
