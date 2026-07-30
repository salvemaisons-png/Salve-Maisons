import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImg from "@/assets/spa-hero.jpg";
import massageImg from "@/assets/spa-massage.jpg";
import facialImg from "@/assets/spa-facial.jpg";
import detailImg from "@/assets/spa-detail.jpg";
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

  return (
    <Layout
      title="Salve Maison — Luxury Spa & Wellness in Lekki, Lagos"
      description="Massage, facials and body rituals at Salve Maison, a luxury day spa in Lekki, Lagos. Book instantly on WhatsApp."
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
            <span className="block">Wellness within</span>
            <span className="block text-right pr-[4%]">reach.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mt-12 grid overflow-hidden md:mt-16 md:grid-cols-2"
          >
            <div className="relative min-h-[245px] md:min-h-[330px] overflow-hidden">
              <img
                src={massageImg}
                alt="Massage treatment at Salve Maison"
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
                src={facialImg}
                alt="Skincare ritual at Salve Maison"
                width={1200}
                height={900}
                className="absolute left-[18%] top-[8%] h-[84%] w-[30%] rounded-[50%] object-cover"
              />
              <img
                src={heroImg}
                alt="Salve Maison treatment space"
                width={1600}
                height={1100}
                className="absolute left-[51%] top-[13%] h-[74%] w-[18%] rounded-[50%] object-cover"
              />
              <img
                src={detailImg}
                alt="Spa details at Salve Maison"
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
            <p className="kicker text-primary mb-4">Welcome</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Rest is not a luxury. It is maintenance.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Salve Maison was created for people who give a lot and rarely stop. Behind our doors
              in Lekki, you will find soft light, warm towels and unhurried therapists who make
              space for you to properly switch off. Every treatment is tailored to how your body
              feels on the day, whether you need deep relief, gentle care or a quiet reset.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every ritual begins with a short consultation, allowing us to understand your needs
              and make thoughtful recommendations. It ends with tea and a little time to settle
              back into yourself, so nothing is rushed — least of all you.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Clean products",
                  text: "Gentle, skin-first formulations chosen to nourish and comfort your skin.",
                },
                {
                  title: "Private suites",
                  text: "Discreet, spotless rooms where every detail is arranged for your comfort.",
                },
                {
                  title: "On your time",
                  text: "Open late, seven days a week, so self-care can fit around your life.",
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
              src={massageImg}
              alt="Warm stones and towels prepared for a massage"
              width={1200}
              height={900}
              loading="lazy"
              className=" object-cover h-full w-full shadow-soft"
            />
            <motion.img
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.45 }}
              src={detailImg}
              alt="Spa still life with towels, candles and rose petals"
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
              treatment is delivered with care in a private, peaceful room. Choose what your body
              needs today, or let our team guide you toward the right ritual.
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
            <p className="kicker text-primary mb-4">Spa Days</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Packages worth clearing your day for</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our spa packages bring together complementary treatments for a longer, more complete
              escape. Settle in, take your time and leave feeling rested from head to toe.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {packages.map((p, i) => (
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
            src={facialImg}
            alt="Skincare products used in Salve Maison facials"
            width={1200}
            height={900}
            loading="lazy"
            className=" w-full h-64 object-cover mb-10 shadow-soft"
          />
          <p className="kicker text-primary mb-4">Booking</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Your appointment is one message away</h2>
          <p className="mt-5 text-muted-foreground">
            Send us a WhatsApp message with the treatment and time you'd like. We reply quickly and
            will help you choose if you're unsure.
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
