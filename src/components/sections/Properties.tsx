import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BedDouble, Bath, Maximize, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { properties, type PropertyCategory } from "@/lib/projects-data";
import { SectionHeader } from "./About";
import { cn } from "@/lib/utils";

type Filter = "all" | PropertyCategory | "sold";

export function Properties() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("properties.filter.all") },
    { key: "house", label: t("properties.filter.house") },
    { key: "villa", label: t("properties.filter.villa") },
    { key: "condo", label: t("properties.filter.condo") },
    { key: "sold", label: t("properties.filter.sold") },
  ];

  const visible = useMemo(() => {
    if (filter === "all") return properties;
    if (filter === "sold") return properties.filter((p) => p.status === "sold");
    return properties.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="properties" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker={t("properties.kicker")}
          title={t("properties.title")}
          subtitle={t("properties.subtitle")}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                filter === f.key
                  ? "border-transparent bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <Link to="/projects/$id" params={{ id: p.id }} className="block">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title[lang]}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={cn(
                        "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold",
                        p.status === "sold"
                          ? "bg-foreground/90 text-background"
                          : "bg-primary text-primary-foreground",
                      )}
                    >
                      {p.status === "sold" ? t("properties.status.sold") : t("properties.status.active")}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 text-sm font-bold text-foreground backdrop-blur">
                      {p.price}
                    </span>
                  </div>
                </Link>
                <div className="p-5">
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {p.location[lang]}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg leading-tight">
                    <Link to="/projects/$id" params={{ id: p.id }} className="hover:text-primary">
                      {p.title[lang]}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.short[lang]}</p>

                  <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm text-foreground/80">
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4 text-primary" /> {p.beds}
                      <span className="text-muted-foreground">{t("properties.beds")}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="h-4 w-4 text-primary" /> {p.baths}
                      <span className="text-muted-foreground">{t("properties.baths")}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize className="h-4 w-4 text-primary" /> {p.sqft}
                    </span>
                  </div>

                  <Link
                    to="/projects/$id"
                    params={{ id: p.id }}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    {t("properties.view")} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
