import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { categories, services, waLink } from "@/data/services";

const ServicesPage = () => {
  const [active, setActive] = useState<string>("All");
  const list = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <Layout
      title="Mobile Spa Treatments & Prices | Salve Maison"
      description="Explore Salve Maison massage, facial, body and beauty treatments, delivered to your home, hotel, office or private event."
    >
      <section className="bg-gradient-soft py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="kicker text-primary mb-4">Treatment Menu</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold">Every service at Salve Maison</h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Prices are per guest. Choose your preferred location, then let us create a treatment
            ritual around your time, needs and occasion.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="-mx-4 mb-9 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0 [scrollbar-width:none]">
            <div className="flex min-w-max gap-2 md:justify-center">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2.5 text-[10px] uppercase tracking-[0.16em] border transition ${
                    active === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6">
            {list.map((s, i) => (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-card border-x-0 border-b-0 border-t border-border first:border-t-0 p-6 sm:border sm:p-7 flex flex-col hover:shadow-soft transition-shadow"
              >
                <span className="kicker text-primary">{s.category}</span>
                <h2 className="font-display text-xl font-bold mt-3 leading-snug">{s.name}</h2>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{s.description}</p>
                <div className="mt-5 flex flex-col gap-2 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between text-xs border-t border-border pt-4">
                  <span className="text-muted-foreground">{s.duration}</span>
                  <span className="font-semibold">{s.price}</span>
                </div>
                <a
                  href={waLink(`Hello Salve Maison, I'd like to book the ${s.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-primary text-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-primary hover:text-primary-foreground transition"
                >
                  Book this
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
