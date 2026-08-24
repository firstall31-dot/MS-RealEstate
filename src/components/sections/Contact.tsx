import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Check, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./About";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { socials } from "@/components/layout/Footer";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const schema = z.object({
    name: z.string().min(2, t("contact.errors.name")),
    email: z.string().email(t("contact.errors.email")),
    phone: z.string().optional(),
    message: z.string().min(10, t("contact.errors.message")),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    toast.success(t("contact.success"));
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    { icon: Mail, value: "mostafa.said@example.com" },
    { icon: Phone, value: "+1 (619) 555-0142" },
    { icon: MapPin, value: "San Diego, California" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker={t("contact.kicker")} title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-3xl bg-gradient-hero p-8 text-primary-foreground shadow-xl"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold">Mostafa Said</h3>
              <p className="mt-1 text-sm text-primary-foreground/80">{t("contact.info.role")}</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactItems.map((c) => (
                  <li key={c.value} className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/20">
                      <c.icon className="h-4 w-4" />
                    </span>
                    {c.value}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="mt-10 flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:border-transparent hover:bg-background hover:text-foreground"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">{t("contact.name")}</Label>
                <Input id="name" {...register("name")} className="mt-1.5 rounded-xl" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone">{t("contact.phone")}</Label>
                <Input id="phone" type="tel" {...register("phone")} className="mt-1.5 rounded-xl" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input id="email" type="email" {...register("email")} className="mt-1.5 rounded-xl" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="message">{t("contact.message")}</Label>
              <Textarea id="message" rows={5} {...register("message")} className="mt-1.5 rounded-xl" />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting || sent}
              className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
              size="lg"
            >
              {sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
              {sent ? t("contact.success") : isSubmitting ? t("contact.sending") : t("contact.send")}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
