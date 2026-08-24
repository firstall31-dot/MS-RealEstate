import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, Languages, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionIds = ["home", "about", "properties", "services", "reviews", "contact"] as const;
const navKey: Record<(typeof sectionIds)[number], string> = {
  home: "nav.home",
  about: "nav.about",
  properties: "nav.properties",
  services: "nav.services",
  reviews: "nav.reviews",
  contact: "nav.contact",
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.href = `/#${id}`;
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "glass shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground font-display text-sm font-bold text-background">
            MS
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            Mostafa Said
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {sectionIds.map((id) => (
            <li key={id}>
              <button
                onClick={() => goTo(id)}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {t(navKey[id] as never)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("lang.toggle")}
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="rounded-full"
          >
            <Languages className="h-4 w-4" />
            <span className="sr-only">{t("lang.toggle")}</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("theme.toggle")}
            onClick={toggle}
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            onClick={() => goTo("contact")}
            className="hidden rounded-full bg-foreground text-background hover:bg-foreground/90 sm:inline-flex"
            size="sm"
          >
            <Phone className="h-4 w-4" />
            {t("nav.contactUs")}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={cn("overflow-hidden border-t border-border bg-background/95 backdrop-blur md:hidden")}
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {sectionIds.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => goTo(id)}
                    className="w-full rounded-lg px-3 py-2.5 text-start text-sm font-medium hover:bg-muted"
                  >
                    {t(navKey[id] as never)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
