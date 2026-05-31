import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export type ProjectCategory = "listing" | "dashboard" | "mobile" | "tools";

export interface Project {
  id: string;
  category: ProjectCategory;
  image: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  title: { en: string; ar: string };
  short: { en: string; ar: string };
  description: { en: string; ar: string };
}

export const projects: Project[] = [
  {
    id: "p1",
    category: "listing",
    image: p1,
    tech: ["React", "TypeScript", "Tailwind", "Mapbox", "Next.js"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/Mostafa-SAID7",
    title: {
      en: "LuxNest — Luxury Property Listings",
      ar: "لوكس نِست — قوائم العقارات الفاخرة",
    },
    short: {
      en: "MLS-style portal for high-end villas with interactive map search.",
      ar: "بوابة على غرار MLS للفلل الفاخرة مع بحث تفاعلي على الخريطة.",
    },
    description: {
      en: "A premium property marketplace with advanced filters, saved searches, mortgage estimator and a Mapbox-powered map view. Built with SSR for SEO and image optimization for sub-2s LCP.",
      ar: "سوق عقاري متميز مع فلاتر متقدمة وبحث محفوظ وحاسبة رهن وعرض خريطة بتقنية Mapbox. مبني بالعرض من جهة الخادم لتحسين SEO وأداء فائق.",
    },
  },
  {
    id: "p2",
    category: "dashboard",
    image: p2,
    tech: ["React", "TypeScript", "Recharts", "Zustand", "Supabase"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/Mostafa-SAID7",
    title: { en: "AgentCRM — Real Estate CRM", ar: "AgentCRM — نظام إدارة عملاء" },
    short: {
      en: "End-to-end CRM for real estate agents with leads pipeline and analytics.",
      ar: "نظام متكامل لإدارة العملاء للوكلاء العقاريين مع لوحة تحليلات.",
    },
    description: {
      en: "Manages thousands of leads, deals, and properties with a Kanban pipeline, role-based access, automated email follow-ups, and rich analytics dashboards.",
      ar: "يدير آلاف العملاء والصفقات والعقارات مع لوحة Kanban وصلاحيات حسب الدور ومتابعات بريدية وتحليلات غنية.",
    },
  },
  {
    id: "p3",
    category: "mobile",
    image: p3,
    tech: ["React Native", "Expo", "TypeScript", "React Query"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/Mostafa-SAID7",
    title: { en: "HomeFinder Mobile App", ar: "تطبيق HomeFinder للجوال" },
    short: {
      en: "Cross-platform property search app with offline favorites.",
      ar: "تطبيق بحث عن العقارات يعمل على iOS و Android مع المفضلة دون اتصال.",
    },
    description: {
      en: "Native-feeling property search experience with map clustering, push notifications for new listings, and offline-first favorites using React Query persistence.",
      ar: "تجربة بحث عقاري بإحساس أصلي مع تجميع الخرائط وإشعارات للقوائم الجديدة ومفضلة تعمل دون اتصال.",
    },
  },
  {
    id: "p4",
    category: "listing",
    image: p4,
    tech: ["React", "Three.js", "@react-three/fiber", "GSAP"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/Mostafa-SAID7",
    title: { en: "VirtualTour 360°", ar: "VirtualTour — جولات افتراضية 360°" },
    short: {
      en: "Immersive 3D walkthroughs for luxury villas.",
      ar: "جولات ثلاثية الأبعاد غامرة للفلل الفاخرة.",
    },
    description: {
      en: "WebGL-powered 360° virtual tours with hotspots, room labels, and floor-plan navigation. Lazy-loaded scenes to keep the bundle lean.",
      ar: "جولات افتراضية 360° مدعومة بـ WebGL مع نقاط ساخنة وتسميات للغرف والتنقل عبر مخطط الطابق.",
    },
  },
  {
    id: "p5",
    category: "tools",
    image: p5,
    tech: ["React", "TypeScript", "Zod", "Recharts"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/Mostafa-SAID7",
    title: { en: "MortgageCalc Pro", ar: "MortgageCalc Pro — حاسبة الرهن" },
    short: {
      en: "Embeddable mortgage and affordability calculator widget.",
      ar: "أداة قابلة للتضمين لحساب الرهن العقاري والقدرة على التحمل.",
    },
    description: {
      en: "A drop-in calculator suite for real estate sites: mortgage, rent vs buy, and ROI for investors. Fully themeable and i18n-ready.",
      ar: "مجموعة حاسبات للمواقع العقارية: الرهن، الإيجار مقابل الشراء، وعائد الاستثمار. قابلة للتخصيص ومتعددة اللغات.",
    },
  },
  {
    id: "p6",
    category: "dashboard",
    image: p6,
    tech: ["React", "TypeScript", "D3", "Mapbox", "PostgreSQL"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/Mostafa-SAID7",
    title: { en: "Market Insights Dashboard", ar: "لوحة تحليلات السوق العقاري" },
    short: {
      en: "Heatmaps and trend analytics for property investors.",
      ar: "خرائط حرارية وتحليلات اتجاهات لمستثمري العقارات.",
    },
    description: {
      en: "Aggregates millions of property records into interactive heatmaps, price-per-sqm trends, and neighborhood comparisons. Optimized for fast pan/zoom with virtualized rendering.",
      ar: "يجمع ملايين السجلات العقارية في خرائط حرارية تفاعلية واتجاهات الأسعار ومقارنات الأحياء.",
    },
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
