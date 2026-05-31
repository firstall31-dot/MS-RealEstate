import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();

  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.href = `/#${id}`;
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold font-extrabold">
            M
          </span>
          <span className="hidden sm:inline">M.Said</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {sectionIds.map((id) => (
            <li key={id}>
              <button
                onClick={() => goTo(id)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {t(`nav.${id === "home" ? "home" : id}` as never)}
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
          <span className="text-xs font-semibold text-muted-foreground w-6 text-center" aria-hidden>
            {lang === "en" ? "AR" : "EN"}
          </span>
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
            className="hidden sm:inline-flex bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold rounded-full"
            size="sm"
          >
            {t("nav.hireMe")}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
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
            className={cn("md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur")}
          >
            <ul className="px-4 py-3 flex flex-col gap-1">
              {sectionIds.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => goTo(id)}
                    className="w-full text-start px-3 py-2.5 rounded-lg hover:bg-muted text-sm font-medium"
                  >
                    {t(`nav.${id}` as never)}
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
