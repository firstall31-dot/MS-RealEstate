import { Instagram, Linkedin, Facebook, MessageCircle, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const socials = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mostafasamirsaid" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/MostafaSaid94" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/201067358073" },
  { name: "Email", icon: Mail, href: "mailto:mostafa.said@example.com" },
];

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-start">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground font-display text-xs font-bold text-background">
              MS
            </span>
            <p className="font-display text-lg font-semibold">Mostafa Said</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            © {year} Mostafa Said. {t("footer.rights")} • {t("footer.built")}
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
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
