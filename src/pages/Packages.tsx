import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { packages, ritualCollections, waLink } from "@/data/services";
import spaEssentials from "@/assets/spa-essentials.png";

const packageCollections = [
  "Signature Rituals",
  "Couples Rituals",
  "Bridal Rituals",
  "Motherhood Rituals",
  "Gentlemen’s Rituals",
] as const;

const PackagesPage = () => (
  <Layout
      title="Mobile Spa Packages & Gift Vouchers | Salve Maison"
      description="Curated Salve Maison wellness packages, delivered to your home, hotel, office or private event."
    >
    <section className="bg-gradient-soft py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="kicker text-primary mb-4">Spa Packages</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold">Half days, whole resets</h1>
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
          Curated combinations of our most-loved treatments, thoughtfully delivered to your chosen
          space. Perfect for birthdays, brides, corporate wellness and long-overdue self-care.
        </p>
      </div>
    </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16 md:space-y-24">
          {packageCollections.map((collection) => {
            const collectionPackages = packages.filter((item) => item.collection === collection);
            const collectionDetails = ritualCollections[collection];

            return (
              <section key={collection}>
                <div className="mb-8 md:mb-10 border-b border-border pb-5">
                  <p className="kicker text-primary">Salve Maison</p>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{collection}</h2>
                  {collectionDetails.description && (
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{collectionDetails.description}</p>
                  )}
                  {collectionDetails.note && (
                    <p className="mt-4 max-w-3xl border-l-2 border-secondary pl-4 text-xs leading-relaxed text-muted-foreground">{collectionDetails.note}</p>
                  )}
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {collectionPackages.map((p, i) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="border border-border bg-card p-8 flex flex-col"
                    >
                      <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                      <p className="kicker text-muted-foreground mt-2">{p.duration}</p>
                      {p.description && <p className="mt-4 font-display text-base italic leading-relaxed text-foreground/75">“{p.description}”</p>}
                      <ul className="mt-6 space-y-3 text-sm text-muted-foreground flex-1">
                        {p.includes.map((inc) => (
                          <li key={inc} className="flex gap-3">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {inc}
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
              </section>
            );
          })}
        </div>
      </section>

    <section className="pb-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center  bg-cream p-8 md:p-12">
        <img
          src={spaEssentials}
          alt="Salve Maison towels, candles and spa essentials"
          width={1200}
          height={900}
          loading="lazy"
          className=" object-cover w-full h-64"
        />
        <div>
          <p className="kicker text-primary mb-3">Gift Vouchers</p>
          <h2 className="font-display text-3xl font-bold">Give someone a slower afternoon</h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Vouchers are available for any treatment or package and are valid for six months.
            Message us and we'll send a digital card ready to forward.
          </p>
          <a
            href={waLink("Hello Salve Maison, I'd like to buy a gift voucher.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary text-primary px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition"
          >
            Request a voucher
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default PackagesPage;
