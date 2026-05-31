import { Github, Linkedin, Facebook, MessageCircle, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/Mostafa-SAID7" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mostafasamirsaid" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/MostafaSaid94" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/201067358073" },
  { name: "Email", icon: Mail, href: "mailto:mostafa.said@example.com" },
];

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-start">
          <p className="font-semibold">M.Said — Mostafa Said</p>
          <p className="text-sm text-muted-foreground mt-1">
            © {year} {t("footer.rights")} • {t("footer.built")}
          </p>
        </div>
        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <s.icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
