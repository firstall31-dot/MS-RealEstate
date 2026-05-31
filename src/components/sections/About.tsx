import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.jpg";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker={t("about.kicker")} title={t("about.title")} />
        <div className="mt-12 grid md:grid-cols-[280px_1fr] gap-8 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 -m-2 rounded-3xl bg-gradient-gold blur-xl opacity-30" />
            <img
              src={avatar}
              alt="Mostafa Said"
              width={280}
              height={280}
              className="relative rounded-3xl object-cover border-2 border-gold/30 shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">{t("about.p1")}</p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{t("about.p2")}</p>
            <Button asChild className="mt-6 rounded-full bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
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

export function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl mx-auto"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-gold">{kicker}</p>
      <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-gold" />
    </motion.div>
  );
}
