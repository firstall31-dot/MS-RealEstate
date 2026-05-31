import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { getProject, projects } from "@/lib/projects-data";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/$id")({
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title.en} — M.Said` : "Project — M.Said";
    const desc = p?.short.en ?? "Real estate project by Mostafa Said.";
    const url = `/projects/${params.id}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: p?.image ?? "" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-dvh flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <Link to="/" className="mt-4 inline-block text-gold underline">Go home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-dvh flex items-center justify-center">
      <button onClick={reset} className="text-gold underline">Try again</button>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const { t, lang, dir } = useI18n();

  const idx = projects.findIndex((p) => p.id === project.id);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const Arrow = dir === "rtl" ? ArrowRight : ArrowLeft;
  const FwdArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <article className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <Arrow className="h-4 w-4" /> {t("projects.back")}
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{project.title[lang]}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{project.short[lang]}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild className="rounded-full bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> {t("projects.live")}
                </a>
              </Button>
            )}
            {project.codeUrl && (
              <Button asChild variant="outline" className="rounded-full">
                <a href={project.codeUrl} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> {t("projects.code")}
                </a>
              </Button>
            )}
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden border border-border shadow-xl">
            <img src={project.image} alt={project.title[lang]} width={1280} height={832} className="w-full h-auto" />
          </div>

          <div className="mt-10 grid md:grid-cols-[1fr_280px] gap-8">
            <div>
              <h2 className="text-2xl font-bold">{t("projects.overview")}</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/90">{project.description[lang]}</p>
            </div>
            <aside className="rounded-2xl bg-card border border-border p-6 shadow-lg h-fit">
              <h3 className="font-semibold mb-3">{t("projects.tech")}</h3>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <li key={tech} className="text-xs px-2.5 py-1 rounded-full bg-muted font-medium">{tech}</li>
                ))}
              </ul>
            </aside>
          </div>
        </motion.div>

        <nav className="mt-16 grid sm:grid-cols-2 gap-4">
          <Link
            to="/projects/$id"
            params={{ id: prev.id }}
            className="group rounded-2xl border border-border p-5 hover:border-gold/50 hover:shadow-lg transition-all bg-card"
          >
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Arrow className={cn("h-3 w-3 transition-transform group-hover:-translate-x-1", dir === "rtl" && "rotate-180 group-hover:translate-x-1")} />
              {t("projects.prev")}
            </p>
            <p className="mt-2 font-bold">{prev.title[lang]}</p>
          </Link>
          <Link
            to="/projects/$id"
            params={{ id: next.id }}
            className="group rounded-2xl border border-border p-5 hover:border-gold/50 hover:shadow-lg transition-all text-end bg-card"
          >
            <p className="text-xs text-muted-foreground flex items-center justify-end gap-2">
              {t("projects.next")}
              <FwdArrow className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </p>
            <p className="mt-2 font-bold">{next.title[lang]}</p>
          </Link>
        </nav>
      </div>
    </article>
  );
}
