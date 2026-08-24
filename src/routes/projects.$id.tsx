import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BedDouble, Bath, Maximize, MapPin, Check, Phone } from "lucide-react";
import { getProperty, properties } from "@/lib/projects-data";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/$id")({
  component: PropertyPage,
  notFoundComponent: () => (
    <div className="flex min-h-dvh items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="font-display text-4xl">Property not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">
          Go home
        </Link>
      </div>
    </div>
  ),
});

function PropertyPage() {
  const { id } = Route.useParams();
  const { t, lang, dir } = useI18n();
  const property = getProperty(id);

  if (!property) {
    return (
      <div className="flex min-h-dvh items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl">Property not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary underline">
            Go home
          </Link>
        </div>
      </div>
    );
  }

  const idx = properties.findIndex((p) => p.id === property.id);
  const prev = properties[(idx - 1 + properties.length) % properties.length];
  const next = properties[(idx + 1) % properties.length];
  const BackArrow = dir === "rtl" ? ArrowRight : ArrowLeft;
  const FwdArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const specs = [
    { icon: BedDouble, value: property.beds, label: t("properties.beds") },
    { icon: Bath, value: property.baths, label: t("properties.baths") },
    { icon: Maximize, value: property.sqft, label: t("properties.sqft") },
  ];

  return (
    <article className="pb-20 pt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          hash="properties"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <BackArrow className="h-4 w-4" /> {t("properties.back")}
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold",
                property.status === "sold"
                  ? "bg-foreground/90 text-background"
                  : "bg-primary text-primary-foreground",
              )}
            >
              {property.status === "sold" ? t("properties.status.sold") : t("properties.status.active")}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> {property.location[lang]}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h1 className="max-w-2xl text-balance font-display text-3xl leading-tight sm:text-5xl">
              {property.title[lang]}
            </h1>
            <p className="font-display text-3xl font-semibold text-primary">{property.price}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-xl">
            <img src={property.image} alt={property.title[lang]} className="h-auto w-full object-cover" />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {specs.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center">
                <s.icon className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 font-display text-xl font-semibold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_280px]">
            <div>
              <h2 className="font-display text-2xl">{t("properties.overview")}</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/90">{property.description[lang]}</p>
              <Button asChild className="mt-6 rounded-full bg-foreground text-background hover:bg-foreground/90" size="lg">
                <Link to="/" hash="contact">
                  <Phone className="h-4 w-4" /> {t("properties.enquire")}
                </Link>
              </Button>
            </div>
            <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 font-display text-lg">{t("properties.details")}</h3>
              <ul className="space-y-2.5">
                {property.features[lang].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </motion.div>

        <nav className="mt-16 grid gap-4 sm:grid-cols-2">
          <Link
            to="/projects/$id"
            params={{ id: prev.id }}
            className="group rounded-3xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <BackArrow
                className={cn(
                  "h-3 w-3 transition-transform group-hover:-translate-x-1",
                  dir === "rtl" && "rotate-180 group-hover:translate-x-1",
                )}
              />
              {t("properties.prev")}
            </p>
            <p className="mt-2 font-display font-semibold">{prev.title[lang]}</p>
          </Link>
          <Link
            to="/projects/$id"
            params={{ id: next.id }}
            className="group rounded-3xl border border-border bg-card p-5 text-end transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <p className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
              {t("properties.next")}
              <FwdArrow className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </p>
            <p className="mt-2 font-display font-semibold">{next.title[lang]}</p>
          </Link>
        </nav>
      </div>
    </article>
  );
}
