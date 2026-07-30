import { Link } from "react-router-dom";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { SALVE, waLink } from "@/data/services";

const Footer = () => {
  return (
    <footer className="reference-footer overflow-hidden bg-sage-deep text-cream">
      <section className="border-b border-cream/25 bg-sage-deep py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="relative overflow-hidden px-6 py-10 text-center text-cream md:px-12 md:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 top-8 h-20 w-[48%] rotate-[-8deg] bg-rose-deep/60 blur-[1px]"
              style={{ clipPath: "polygon(0 18%, 100% 0, 94% 70%, 3% 100%)" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 bottom-5 h-24 w-[42%] rotate-[7deg] bg-rose-deep/55 blur-[1px]"
              style={{ clipPath: "polygon(3% 20%, 100% 0, 97% 78%, 0 100%)" }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="kicker text-rose-soft mb-4">Need more details?</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold">Everything you need to know, in one place.</h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-cream/80">
                Find answers about bookings, preparing your space, treatment safety, payments and more.
              </p>
              <Link
                to="/faq"
                className="mt-7 inline-flex rounded-full bg-rose px-7 py-3 text-xs uppercase tracking-[0.2em] text-sage-deep hover:bg-cream transition-colors"
              >
                Explore FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-cream/70 pt-8 md:pt-10">
        <p
          className="font-display font-medium whitespace-nowrap -translate-x-[10%] md:-translate-x-[7%]"
          style={{ fontSize: "clamp(6rem, 14vw, 13.5rem)", lineHeight: 0.62, letterSpacing: "-0.07em" }}
        >
          CONTACTS · COME REST ·
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-3 flex items-start justify-between gap-5 text-[7px] md:text-[8px] uppercase tracking-[-0.01em] leading-tight">
        <p className="max-w-[130px]">Luxury mobile wellness, delivered with distinction.</p>
        <a href={waLink()} target="_blank" rel="noreferrer" className="text-center hover:text-rose transition-colors">
          Just drop<br />a message
        </a>
        <p className="max-w-[88px] text-right">© {new Date().getFullYear()} all rights reserved</p>
      </div>

      <div className="relative max-w-[1440px] mx-auto h-[390px] md:h-[455px] px-4 md:px-6">
        <div className="absolute left-1/2 top-16 md:top-20 -translate-x-1/2 w-[350px] h-[295px] md:w-[760px] md:h-[345px]">
          <img
            src="/salve-maison-logo.png"
            alt="Salve Maison logo"
            width={512}
            height={512}
            loading="lazy"
            className="absolute left-1/2 top-1/2 z-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_14px_24px_hsl(var(--sage-deep)/0.45)] md:h-80 md:w-80"
          />
          <div className="absolute left-[-2%] top-[10%] h-24 w-24 md:h-32 md:w-32 rounded-full border bg-cream p-2 rotate-[-14deg] shadow-[0_8px_0_hsl(var(--rose-deep)/0.55)]" style={{ borderColor: "hsl(var(--sage-deep))" }}>
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-dashed border-sage-deep text-center text-sage-deep">
              <span className="font-display text-xl md:text-3xl leading-none">S</span>
              <span className="mt-1 text-[6px] uppercase tracking-[0.15em]">Salve Maison</span>
            </div>
          </div>
          <a
            href={`https://instagram.com/${SALVE.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="absolute left-[14%] top-[0%] rounded-full bg-cream px-4 py-2 md:px-6 md:py-3 font-display text-base md:text-xl text-sage-deep rotate-[-9deg] hover:rotate-0 transition-transform"
          >
            Instagram
          </a>
          <Link
            to="/services"
            className="absolute right-[-3%] top-[4%] rounded-full bg-cream px-4 py-2 md:px-6 md:py-3 font-display text-base md:text-xl text-sage-deep rotate-[12deg] hover:rotate-0 transition-transform"
          >
            Treatments
          </Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="absolute left-[-1%] top-[57%] rounded-full bg-cream px-4 py-2 md:px-6 md:py-3 font-display text-base md:text-xl text-sage-deep rotate-[7deg] hover:rotate-0 transition-transform"
          >
            <WhatsAppIcon className="mr-2 inline-block h-4 w-4 align-[-0.12em]" /> WhatsApp
          </a>
          <Link
            to="/packages"
            className="absolute right-[7%] top-[76%] rounded-full bg-cream px-4 py-2 md:px-6 md:py-3 font-display text-base md:text-xl text-sage-deep rotate-[-10deg] hover:rotate-0 transition-transform"
          >
            Packages
          </Link>
          <div className="absolute right-[-1%] top-[48%] h-24 w-24 md:h-32 md:w-32 rounded-full border bg-rose p-2 rotate-[12deg] shadow-[0_8px_0_hsl(var(--cream)/0.28)]" style={{ borderColor: "hsl(var(--sage-deep))" }}>
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-dashed border-sage-deep text-center text-sage-deep">
              <span className="font-display text-xl md:text-3xl leading-none">SM</span>
              <span className="mt-1 text-[6px] uppercase tracking-[0.12em]">Rest well</span>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-cream/25">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-6 md:py-7 grid md:grid-cols-[1fr_auto] gap-5 items-end text-cream/65">
          <p className="max-w-2xl text-xs leading-relaxed">
            Salve Maison brings exceptional spa experiences to your home, hotel, office and private events — where luxury, comfort and personalised care come together.
          </p>
          <p className="text-[8px] uppercase tracking-[0.16em] md:text-right">Luxury mobile spa & wellness · Care that comes to you</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
