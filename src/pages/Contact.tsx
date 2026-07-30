import { useState } from "react";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { SALVE, services, waLink } from "@/data/services";
import { SnapchatIcon, TikTokIcon, WhatsAppIcon } from "@/components/BrandIcons";

const Contact = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0].name);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const message = `Hello Salve Maison! My name is ${name || "(name)"}. I'd like to book the ${service}${
    date ? ` on ${date}` : ""
  }.${notes ? ` Note: ${notes}` : ""}`;

  return (
    <Layout
      title="Book a Mobile Spa Experience | Salve Maison"
      description="Book a luxury Salve Maison spa experience at your home, hotel, office or private event."
    >
      <section className="bg-gradient-soft py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="kicker text-primary mb-4">Book Your Experience</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold">We'd love to come to you</h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Tell us where you would like your experience. Fill in the short form and it will open a
            ready-made WhatsApp message for our team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12">
          {/* Booking form */}
          <div className="bg-card border border-border  p-8 shadow-soft">
            <h2 className="font-display text-2xl font-bold mb-6">Request an appointment</h2>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="kicker text-muted-foreground block mb-2">Your name</label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ada Okoye"
                  className="w-full  border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="service" className="kicker text-muted-foreground block mb-2">Treatment</label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full  border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} — {s.price}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="kicker text-muted-foreground block mb-2">Preferred date & time</label>
                <input
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Saturday 3pm"
                  className="w-full  border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="notes" className="kicker text-muted-foreground block mb-2">Anything we should know?</label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  placeholder="Allergies, pregnancy, pressure preference…"
                  className="w-full  border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <a
                href={waLink(message)}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
              >
                <WhatsAppIcon className="w-4 h-4" /> Send on WhatsApp
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold mb-5">Find us</h2>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" /> {SALVE.location}
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-primary transition">
                    {SALVE.phoneDisplay} (call or WhatsApp)
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href={`mailto:${SALVE.email}`} className="hover:text-primary transition break-all">
                    {SALVE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Opening hours
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {SALVE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between border-b border-border pb-2">
                    <span>{h.day}</span>
                    <span className="text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-4">Follow the house</h3>
              <div className="flex flex-wrap gap-3 text-xs">
                <a
                  href={`https://instagram.com/${SALVE.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-5 py-2.5 hover:border-primary hover:text-primary transition"
                >
                  <Instagram className="w-4 h-4" /> @{SALVE.instagram}
                </a>
                <a
                  href={`https://tiktok.com/@${SALVE.tiktok}`}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-5 py-2.5 hover:border-primary hover:text-primary transition"
                >
                  <TikTokIcon className="w-4 h-4" /> TikTok @{SALVE.tiktok}
                </a>
                <a
                  href={`https://snapchat.com/add/${SALVE.snapchat}`}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-5 py-2.5 hover:border-primary hover:text-primary transition"
                >
                  <SnapchatIcon className="w-4 h-4" /> Snapchat @{SALVE.snapchat}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
