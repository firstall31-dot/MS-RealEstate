import p1 from "@/assets/property-1.png";
import p2 from "@/assets/property-2.png";
import p3 from "@/assets/property-3.png";
import p4 from "@/assets/property-4.png";
import p5 from "@/assets/property-5.png";
import p6 from "@/assets/property-6.png";

export type PropertyCategory = "house" | "villa" | "condo";
export type PropertyStatus = "active" | "sold";

export interface Property {
  id: string;
  category: PropertyCategory;
  status: PropertyStatus;
  image: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  location: { en: string; ar: string };
  title: { en: string; ar: string };
  short: { en: string; ar: string };
  description: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
}

export const properties: Property[] = [
  {
    id: "p1",
    category: "house",
    status: "active",
    image: p1,
    price: "$1,850,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    location: { en: "San Diego, CA", ar: "سان دييغو، كاليفورنيا" },
    title: { en: "Striking Design in this San Diego Home", ar: "تصميم مميز في هذا المنزل بسان دييغو" },
    short: {
      en: "A light-filled modern family home with soaring windows and a chef's kitchen.",
      ar: "منزل عائلي عصري مليء بالضوء مع نوافذ عالية ومطبخ فاخر.",
    },
    description: {
      en: "This striking two-story residence blends warm materials with clean modern lines. Floor-to-ceiling windows flood the open living space with light, while the chef's kitchen, spa-inspired primary suite, and landscaped backyard make it perfect for both entertaining and everyday family life.",
      ar: "يمزج هذا المنزل المكوّن من طابقين بين المواد الدافئة والخطوط العصرية النظيفة. تغمر النوافذ الممتدة من الأرض إلى السقف مساحة المعيشة المفتوحة بالضوء، بينما يجعله المطبخ الفاخر والجناح الرئيسي والحديقة الخلفية مثالياً للاستضافة والحياة العائلية.",
    },
    features: {
      en: ["Chef's kitchen", "Landscaped backyard", "Two-car garage", "Smart home system"],
      ar: ["مطبخ فاخر", "حديقة منسّقة", "مرآب لسيارتين", "نظام منزل ذكي"],
    },
  },
  {
    id: "p2",
    category: "villa",
    status: "active",
    image: p2,
    price: "$4,200,000",
    beds: 5,
    baths: 6,
    sqft: "6,100",
    location: { en: "La Jolla, CA", ar: "لا هويا، كاليفورنيا" },
    title: { en: "Hillside Villa with Infinity Pool", ar: "فيلا على التل مع مسبح لا متناهٍ" },
    short: {
      en: "Contemporary glass villa with an infinity pool and panoramic ocean views.",
      ar: "فيلا زجاجية عصرية مع مسبح لا متناهٍ وإطلالات بانورامية على المحيط.",
    },
    description: {
      en: "Perched on the hillside, this architectural villa offers walls of glass, warm wood accents, and a turquoise infinity pool that melts into the horizon. A true statement home for those who want privacy, light, and unforgettable sunset views.",
      ar: "تقع هذه الفيلا المعمارية على التل وتوفّر جدراناً زجاجية ولمسات خشبية دافئة ومسبحاً لا متناهياً يذوب في الأفق. منزل استثنائي لمن يبحث عن الخصوصية والضوء وإطلالات غروب لا تُنسى.",
    },
    features: {
      en: ["Infinity pool", "Ocean views", "Home theater", "Wine cellar"],
      ar: ["مسبح لا متناهٍ", "إطلالات على المحيط", "مسرح منزلي", "قبو نبيذ"],
    },
  },
  {
    id: "p3",
    category: "house",
    status: "active",
    image: p3,
    price: "$975,000",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    location: { en: "Encinitas, CA", ar: "إنسينيتاس، كاليفورنيا" },
    title: { en: "Charming Craftsman Retreat", ar: "منزل كرافتسمان ساحر" },
    short: {
      en: "A warm craftsman home with a covered porch and lush, mature landscaping.",
      ar: "منزل كرافتسمان دافئ مع شرفة مغطاة وحدائق غنّاء ناضجة.",
    },
    description: {
      en: "Full of character, this craftsman home welcomes you with a covered front porch, stone accents, and beautifully mature landscaping. Inside, cozy living spaces and updated finishes make it move-in ready for a growing family.",
      ar: "مليء بالطابع الخاص، يرحّب بك هذا المنزل بشرفة أمامية مغطاة ولمسات حجرية وحدائق ناضجة جميلة. في الداخل، مساحات معيشة دافئة وتشطيبات محدّثة تجعله جاهزاً للسكن لعائلة متنامية.",
    },
    features: {
      en: ["Covered porch", "Mature garden", "Updated finishes", "Quiet street"],
      ar: ["شرفة مغطاة", "حديقة ناضجة", "تشطيبات محدّثة", "شارع هادئ"],
    },
  },
  {
    id: "p4",
    category: "villa",
    status: "sold",
    image: p4,
    price: "$2,650,000",
    beds: 4,
    baths: 4,
    sqft: "4,000",
    location: { en: "Del Mar, CA", ar: "دِل مار، كاليفورنيا" },
    title: { en: "Open-Concept Luxury Living", ar: "معيشة فاخرة بمفهوم مفتوح" },
    short: {
      en: "Sold in 9 days — an open-plan interior with a statement kitchen island.",
      ar: "بيعت خلال 9 أيام — تصميم داخلي مفتوح مع جزيرة مطبخ مميزة.",
    },
    description: {
      en: "This open-concept luxury home sold in just nine days after a targeted marketing campaign and multiple offers. Soaring ceilings, warm oak floors, and a dramatic kitchen island anchored a space made for gathering.",
      ar: "بيع هذا المنزل الفاخر ذو المفهوم المفتوح خلال تسعة أيام فقط بعد حملة تسويقية مستهدفة وعروض متعددة. أسقف عالية وأرضيات بلوط دافئة وجزيرة مطبخ لافتة شكّلت مساحة مصمّمة للتجمّع.",
    },
    features: {
      en: ["Sold in 9 days", "Open floor plan", "Oak flooring", "Designer kitchen"],
      ar: ["بيعت في 9 أيام", "مخطط مفتوح", "أرضيات بلوط", "مطبخ مصمّم"],
    },
  },
  {
    id: "p5",
    category: "condo",
    status: "active",
    image: p5,
    price: "$720,000",
    beds: 2,
    baths: 2,
    sqft: "1,250",
    location: { en: "Downtown San Diego, CA", ar: "وسط مدينة سان دييغو" },
    title: { en: "Downtown Luxury Condo", ar: "شقة فاخرة في وسط المدينة" },
    short: {
      en: "A sleek high-rise condo with warm-lit balconies and skyline views.",
      ar: "شقة أنيقة في برج مع شرفات مضيئة وإطلالات على أفق المدينة.",
    },
    description: {
      en: "Live above it all in this sleek downtown condo. Floor-to-ceiling glass, a private balcony, and premium building amenities put restaurants, culture, and the waterfront moments from your door.",
      ar: "عش فوق كل شيء في هذه الشقة الأنيقة بوسط المدينة. زجاج ممتد من الأرض إلى السقف وشرفة خاصة ومرافق مبنى متميزة تجعل المطاعم والثقافة والواجهة البحرية على بعد لحظات من بابك.",
    },
    features: {
      en: ["Private balcony", "Concierge building", "Skyline views", "Fitness center"],
      ar: ["شرفة خاصة", "مبنى بخدمة كونسيرج", "إطلالات على الأفق", "مركز لياقة"],
    },
  },
  {
    id: "p6",
    category: "house",
    status: "sold",
    image: p6,
    price: "$1,320,000",
    beds: 4,
    baths: 3,
    sqft: "2,900",
    location: { en: "Carlsbad, CA", ar: "كارلسباد، كاليفورنيا" },
    title: { en: "Single-Story Ranch Estate", ar: "منزل رانش من طابق واحد" },
    short: {
      en: "Sold above asking — a spacious ranch home on a beautifully treed lot.",
      ar: "بيعت فوق السعر المطلوب — منزل رانش واسع على قطعة أرض مشجّرة جميلة.",
    },
    description: {
      en: "This single-story ranch estate sold above asking price thanks to strong staging and a competitive bidding strategy. Warm white brick, a three-car garage, and mature trees give it timeless curb appeal.",
      ar: "بيع منزل الرانش هذا فوق السعر المطلوب بفضل تهيئة قوية واستراتيجية مزايدة تنافسية. طوب أبيض دافئ ومرآب لثلاث سيارات وأشجار ناضجة تمنحه جاذبية خالدة.",
    },
    features: {
      en: ["Sold above asking", "Single story", "Three-car garage", "Large lot"],
      ar: ["بيعت فوق المطلوب", "طابق واحد", "مرآب لثلاث سيارات", "قطعة أرض كبيرة"],
    },
  },
];

export const getProperty = (id: string) => properties.find((p) => p.id === id);
