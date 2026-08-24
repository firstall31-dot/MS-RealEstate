import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Stats() {
  const { t } = useI18n();

  const stats = [
    { value: "200+", label: t("stats.deals") },
    { value: "$180M", label: t("stats.volume") },
    { value: "10+", label: t("stats.years") },
    { value: "5.0", label: t("stats.rating") },
  ];

  return (
    <section className="bg-gradient-hero py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl font-semibold text-primary-foreground sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
