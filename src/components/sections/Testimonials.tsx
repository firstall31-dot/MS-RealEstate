import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./About";

const reviews = [
  {
    name: "Sarah & James Miller",
    role: { en: "First-time buyers", ar: "مشترون لأول مرة" },
    quote: {
      en: "Mostafa made our first home purchase feel effortless. He fought for us on price and explained every step so we never felt lost.",
      ar: "جعل مصطفى شراء منزلنا الأول يبدو سهلاً. تفاوض بقوة على السعر وشرح كل خطوة حتى لم نشعر بالضياع أبداً.",
    },
  },
  {
    name: "Daniel Okafor",
    role: { en: "Property investor", ar: "مستثمر عقاري" },
    quote: {
      en: "His market data is sharp and his negotiation is even sharper. I've closed three investment deals with him and every one beat my numbers.",
      ar: "بياناته عن السوق دقيقة وتفاوضه أدق. أتممت ثلاث صفقات استثمارية معه وكل واحدة تجاوزت توقعاتي.",
    },
  },
  {
    name: "The Rivera Family",
    role: { en: "Sold in 9 days", ar: "بيع خلال 9 أيام" },
    quote: {
      en: "We listed on a Friday and had multiple offers over asking by the next weekend. Calm, honest, and genuinely on our side.",
      ar: "أدرجنا المنزل يوم الجمعة وحصلنا على عروض متعددة فوق السعر بحلول عطلة الأسبوع التالية. هادئ وصادق وفي صفّنا حقاً.",
    },
  },
];

export function Testimonials() {
  const { t, lang } = useI18n();

  return (
    <section id="reviews" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker={t("reviews.kicker")}
          title={t("reviews.title")}
          subtitle={t("reviews.subtitle")}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/25" />
              <div className="mt-3 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed text-foreground/90">
                {r.quote[lang]}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.role[lang]}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
