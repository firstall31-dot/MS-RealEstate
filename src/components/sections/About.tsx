import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import agentAbout from "@/assets/agent-about.png";

export function About() {
  const { t } = useI18n();
  const points = [t("about.point.1"), t("about.point.2"), t("about.point.3")];

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1"
          >
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2rem] bg-primary/15" />
            <img
              src={agentAbout}
              alt="Mostafa Said in a modern home"
              className="aspect-[4/5] w-full rounded-[2rem] border border-border object-cover shadow-xl"
            />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-background/90 px-5 py-3 shadow-lg backdrop-blur">
              <p className="font-display text-2xl font-semibold text-primary">200+</p>
              <p className="text-xs text-muted-foreground">{t("stats.deals")}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              {t("about.kicker")}
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {t("about.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/90">{t("about.p1")}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("about.p2")}</p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="mt-8 rounded-full bg-foreground text-background hover:bg-foreground/90"
              size="lg"
            >
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                {t("about.download")}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-start"}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">{kicker}</p>
      <h2 className="mt-3 text-balance font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-pretty text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
