import { useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SALVE, waLink } from "@/data/services";
import { WhatsAppIcon } from "@/components/BrandIcons";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Treatments" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Visit & Book" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/80 shadow-[0_4px_24px_-18px_hsl(var(--sage-deep)/0.5)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="leading-none">
          <span className="font-display text-2xl md:text-[1.7rem] font-bold tracking-[0.18em] uppercase text-foreground">
            Salve Maison
          </span>
          <span className="block kicker text-muted-foreground mt-1">{SALVE.tagline}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.18em] transition-colors ${
                  isActive || (l.to !== "/" && pathname.startsWith(l.to))
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:opacity-90 transition"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" /> Book
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-card"
          >
            <nav className="px-4 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-primary transition"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-xs uppercase tracking-[0.18em]"
              >
                <WhatsAppIcon className="w-4 h-4" /> Book on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
