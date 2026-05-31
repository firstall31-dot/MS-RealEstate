import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
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
    message: z.string().min(10, t("contact.errors.message")),
  });
  type FormData = z.infer<typeof schema>;

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    toast.success(t("contact.success"));
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker={t("contact.kicker")} title={t("contact.title")} />
        <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">{t("contact.subtitle")}</p>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.3fr] gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-hero text-primary-foreground p-8 shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold">M.Said</h3>
              <p className="mt-2 text-primary-foreground/70 text-sm">Frontend Engineer — Real Estate</p>
              <ul className="mt-8 space-y-3 text-sm">
                <li>📧 mostafa.said@example.com</li>
                <li>📱 +20 106 735 8073</li>
                <li>📍 Cairo, Egypt</li>
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
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 hover:bg-gold hover:text-gold-foreground hover:border-transparent transition-colors"
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
            className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-xl space-y-4"
            noValidate
          >
            <div>
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input id="name" {...register("name")} className="mt-1.5 rounded-lg" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input id="email" type="email" {...register("email")} className="mt-1.5 rounded-lg" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="message">{t("contact.message")}</Label>
              <Textarea id="message" rows={5} {...register("message")} className="mt-1.5 rounded-lg" />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting || sent}
              className="w-full rounded-full bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold"
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
