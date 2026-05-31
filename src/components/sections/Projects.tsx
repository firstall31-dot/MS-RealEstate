import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { projects, type ProjectCategory } from "@/lib/projects-data";
import { SectionHeader } from "./About";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

export function Projects() {
  const { t, lang, dir } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("projects.filter.all") },
    { key: "listing", label: t("projects.filter.listing") },
    { key: "dashboard", label: t("projects.filter.dashboard") },
    { key: "mobile", label: t("projects.filter.mobile") },
    { key: "tools", label: t("projects.filter.tools") },
  ];

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker={t("projects.kicker")} title={t("projects.title")} />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                filter === f.key
                  ? "bg-gradient-gold text-gold-foreground border-transparent shadow-gold"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl bg-card border border-border overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-1"
              >
                <Link to="/projects/$id" params={{ id: p.id }} className="block">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.title[lang]}
                      width={1280}
                      height={832}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <h3 className="font-bold text-lg leading-tight">{p.title[lang]}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.short[lang]}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <li key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-foreground/70 font-medium">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      to="/projects/$id"
                      params={{ id: p.id }}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline"
                    >
                      {t("projects.view")}
                      <ArrowRight className={cn("h-4 w-4", dir === "rtl" && "rotate-180")} />
                    </Link>
                    <div className="flex items-center gap-1">
                      {p.codeUrl && (
                        <a
                          href={p.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Source code"
                          className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Live demo"
                          className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
