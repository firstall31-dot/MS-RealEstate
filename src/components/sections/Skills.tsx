import { motion } from "framer-motion";
import { Code2, Wrench, Palette, Server } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./About";

export function Skills() {
  const { t } = useI18n();

  const groups = [
    {
      icon: Code2,
      title: t("skills.frontend"),
      items: ["React 19", "TypeScript", "Next.js 15", "Tailwind CSS", "Framer Motion", "React Query", "Zustand"],
    },
    {
      icon: Wrench,
      title: t("skills.tooling"),
      items: ["Vite", "Bun", "Vitest", "Playwright", "ESLint", "Prettier", "Git / GitHub Actions"],
    },
    {
      icon: Palette,
      title: t("skills.design"),
      items: ["Figma", "shadcn/ui", "Design Systems", "WCAG 2.2", "RTL / i18n", "Motion Design"],
    },
    {
      icon: Server,
      title: t("skills.backend"),
      items: ["Node.js", "Supabase", "PostgreSQL", "REST / GraphQL", "Mapbox", "Vercel / Cloudflare"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker={t("skills.kicker")} title={t("skills.title")} />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-card border border-border p-6 shadow-lg hover:shadow-xl hover:border-gold/40 transition-all hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold mb-4">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li key={it} className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground/80 font-medium">
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
