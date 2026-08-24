import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import agentHero from "@/assets/agent-hero.png";
import property1 from "@/assets/property-1.png";

const partners = ["ESTATLY", "askimat", "MARTINO", "Rocker", "HAVEN"];

export function Hero() {
  const { t, dir } = useI18n();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero pt-24 sm:pt-28"
    >
      {/* soft texture + edge fade into the page */}
      <div className="absolute inset-0 bg-noise opacity-40" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" aria-hidden />

      {/* decorative winding road line */}
      <svg
        className="pointer-events-none absolute bottom-6 left-0 w-[55%] max-w-2xl text-foreground/25"
        viewBox="0 0 500 120"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 90 C 120 90, 130 30, 250 40 S 420 100, 500 60"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="2 12"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-end gap-8 px-4 pb-0 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left: copy */}
        <div className="pb-14 lg:pb-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/25 px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-sm sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
            {t("hero.tagline")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl leading-[0.98] text-primary-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {t("hero.title.1")}
            <br />
            <span className="italic text-background/95">— {t("hero.title.2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/85 sm:text-base"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("properties")}
              className="rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              {t("hero.cta.properties")}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="rounded-full border-foreground/25 bg-background/20 text-foreground backdrop-blur-sm hover:bg-background/40"
            >
              <Phone className="h-4 w-4" />
              {t("hero.cta.contact")}
            </Button>
          </motion.div>

          {/* partner logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <p className="text-[11px] font-medium uppercase tracking-widest text-foreground/50">
              {t("hero.partners")}
            </p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
              {partners.map((p) => (
                <li
                  key={p}
                  className="font-display text-lg font-semibold tracking-tight text-foreground/55"
                >
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right: portrait + floating cards */}
        <div className="relative flex min-h-[420px] items-end justify-center lg:min-h-[560px]">
          <motion.img
            src={agentHero}
            alt="Mostafa Said, licensed real estate agent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative z-10 h-auto w-full max-w-md self-end object-contain drop-shadow-2xl"
          />

          {/* Free consultation badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            className="animate-float absolute left-2 top-8 z-20 flex flex-col items-center rounded-full border border-foreground/10 bg-background px-6 py-4 text-center shadow-xl sm:left-6"
          >
            <span className="font-display text-lg font-semibold leading-none text-primary">
              {t("hero.badge.name")}
            </span>
            <span className="mt-1 text-xs font-medium text-muted-foreground">
              {t("hero.badge.sub")}
            </span>
          </motion.div>

          {/* Property listing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`absolute bottom-6 z-20 w-[280px] rounded-2xl border border-foreground/10 bg-card p-3 shadow-2xl sm:w-[320px] ${
              dir === "rtl" ? "left-0" : "right-0"
            }`}
          >
            <div className="flex items-start justify-between gap-2 px-1 pb-2">
              <p className="font-display text-sm font-semibold leading-snug text-card-foreground">
                {t("hero.card.title")}
              </p>
              <button
                onClick={() => scrollTo("properties")}
                className="inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t("hero.card.cta")}
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={property1}
                alt={t("hero.card.title")}
                className="h-32 w-full object-cover sm:h-36"
              />
              <span className="absolute bottom-2 left-2 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-foreground backdrop-blur-sm">
                {t("hero.card.price")}
              </span>
              <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
                <Star className="h-3 w-3 fill-current" /> 5.0
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
