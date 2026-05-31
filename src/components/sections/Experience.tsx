import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./About";

export function Experience() {
  const { t, lang } = useI18n();

  const jobs = [
    {
      role: { en: "Senior Frontend Engineer", ar: "مهندس واجهات أمامية أول" },
      company: { en: "Real Estate Tech Studio", ar: "استوديو تقنيات العقارات" },
      period: "2023 — Present",
      desc: {
        en: "Lead frontend for luxury property platforms, mentoring a team of 5, architecting design systems and i18n infrastructure.",
        ar: "أقود تطوير الواجهات لمنصات عقارية فاخرة، وأرشد فريقاً مكوناً من 5 مطورين، وأصمم أنظمة التصميم وبنية تعدد اللغات.",
      },
    },
    {
      role: { en: "Frontend Developer", ar: "مطور واجهات أمامية" },
      company: { en: "PropertyHub", ar: "PropertyHub" },
      period: "2021 — 2023",
      desc: {
        en: "Built MLS-style listing portals, agent dashboards, and a React Native mobile app serving 100k+ users.",
        ar: "بنيت بوابات قوائم على غرار MLS ولوحات تحكم الوكلاء وتطبيق React Native لأكثر من 100 ألف مستخدم.",
      },
    },
    {
      role: { en: "Junior Web Developer", ar: "مطور ويب مبتدئ" },
      company: { en: "Freelance & Agencies", ar: "عمل حر ووكالات" },
      period: "2020 — 2021",
      desc: {
        en: "Delivered 30+ marketing sites and small SaaS dashboards, learning modern React and animation tooling.",
        ar: "أنجزت أكثر من 30 موقعاً تسويقياً ولوحات SaaS صغيرة، وتعلمت React الحديثة وأدوات الحركة.",
      },
    },
  ];

  const edu = [
    {
      title: { en: "B.Sc. Computer Science", ar: "بكالوريوس علوم الحاسب" },
      org: { en: "Cairo University", ar: "جامعة القاهرة" },
      period: "2016 — 2020",
    },
    {
      title: { en: "Meta Frontend Developer Certificate", ar: "شهادة Meta لمطوري الواجهات" },
      org: { en: "Coursera", ar: "كورسيرا" },
      period: "2022",
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker={t("experience.kicker")} title={t("experience.title")} />

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="flex items-center gap-2 font-bold text-xl mb-6">
              <Briefcase className="h-5 w-5 text-gold" /> {t("experience.title")}
            </h3>
            <ol className="relative border-s-2 border-gold/30 space-y-6 ps-6">
              {jobs.map((j, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative rounded-2xl bg-card border border-border p-5 shadow-lg"
                >
                  <span className="absolute -start-[33px] top-5 h-4 w-4 rounded-full bg-gradient-gold shadow-gold ring-4 ring-background" />
                  <p className="text-xs text-gold font-semibold">{j.period}</p>
                  <p className="mt-1 font-bold">{j.role[lang]}</p>
                  <p className="text-sm text-muted-foreground">{j.company[lang]}</p>
                  <p className="mt-2 text-sm leading-relaxed">{j.desc[lang]}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-bold text-xl mb-6">
              <GraduationCap className="h-5 w-5 text-gold" /> {t("education.title")}
            </h3>
            <ul className="space-y-4">
              {edu.map((e, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl bg-card border border-border p-5 shadow-lg"
                >
                  <p className="text-xs text-gold font-semibold">{e.period}</p>
                  <p className="mt-1 font-bold">{e.title[lang]}</p>
                  <p className="text-sm text-muted-foreground">{e.org[lang]}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
