import { motion } from "framer-motion";
import { Home, Tag, TrendingUp, MessagesSquare, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./About";

export function Services() {
  const { t } = useI18n();

  const services = [
    { icon: Home, title: t("services.buy.title"), desc: t("services.buy.desc") },
    { icon: Tag, title: t("services.sell.title"), desc: t("services.sell.desc") },
    { icon: TrendingUp, title: t("services.invest.title"), desc: t("services.invest.desc") },
    { icon: MessagesSquare, title: t("services.consult.title"), desc: t("services.consult.desc") },
  ];

  return (
    <section id="services" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker={t("services.kicker")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
