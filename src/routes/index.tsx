import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M.Said — Real Estate Frontend Developer Portfolio" },
      {
        name: "description",
        content:
          "Mostafa Said (M.Said) — Senior frontend engineer with 5+ years building real estate platforms: listing portals, CRMs, virtual tours, and mobile apps. React, TypeScript, bilingual EN/AR.",
      },
      { property: "og:title", content: "M.Said — Real Estate Frontend Developer Portfolio" },
      { property: "og:description", content: "Portfolio of Mostafa Said — real estate web specialist. 200+ projects delivered, 80+ open source repos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
