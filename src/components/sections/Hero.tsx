import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const { t, dir } = useI18n();
  const Arrow = ArrowRight;

  const stats = [
    { label: t("hero.stat.projects"), value: "200+" },
    { label: t("hero.stat.repos"), value: "80+" },
    { label: t("hero.stat.years"), value: "5+" },
  ];

  return (
    <section id="home" className="relative min-h-dvh flex items-center pt-20 overflow-hidden bg-gradient-hero">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1536}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            {t("hero.tagline")}
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-primary-foreground dark:text-foreground leading-[1.05]">
            {t("hero.title").split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient-gold">{t("hero.title").split(" ").slice(-2).join(" ")}</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-primary-foreground/80 dark:text-muted-foreground max-w-2xl leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold rounded-full"
            >
              {t("hero.cta.projects")}
              <Arrow className={dir === "rtl" ? "rotate-180" : ""} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 dark:border-border dark:text-foreground dark:hover:bg-muted"
            >
              <Mail className="h-4 w-4" />
              {t("hero.cta.contact")}
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs sm:text-sm text-primary-foreground/70 dark:text-muted-foreground">{s.label}</dt>
                <dd className="mt-1 text-2xl sm:text-3xl font-bold text-gradient-gold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
