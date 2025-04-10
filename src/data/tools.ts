export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
  categories: string[];
}

// Note: Image paths are relative to the public directory and will be properly
// resolved at runtime using getAssetPath utility to account for base path
export const tools: Tool[] = [
  {
    id: "0",
    name: "Google AI Studio",
    description:
      "Platform for building and experimenting with generative AI applications using Google's AI models",
    url: "https://aistudio.google.com/prompts/new_chat",
    image: "/images/tools/google-ai-studio-0.png",
    categories: ["ai", "chat", "llm"],
  },
  {
    id: "1",
    name: "Readymag",
    description:
      "Web design tool for creating stunning websites, portfolios, and digital publications without coding",
    url: "https://readymag.com/",
    image: "/images/tools/readymag-1.png",
    categories: ["site build", "no code"],
  },
  {
    id: "2",
    name: "Unblast Fonts",
    description:
      "Collection of free high-quality Mockups, Fonts, Icons, Templates, Graphics, 3D Models, Colors",
    url: "https://unblast.com/fonts/",
    image: "/images/tools/unblast-fonts-2.png",
    categories: ["fonts", "design", "resources"],
  },
  {
    id: "3",
    name: "Claude AI",
    description:
      "Anthropic's AI assistant that's helpful, harmless, and honest with advanced reasoning capabilities",
    url: "https://claude.ai/new",
    image: "/images/tools/claude-ai-3.png",
    categories: ["ai", "chat", "llm"],
  },
  {
    id: "4",
    name: "Gemini",
    description:
      "Google's multimodal AI model that can understand and generate text, code, images, and more",
    url: "https://gemini.google.com/",
    image: "/images/tools/gemini-4.png",
    categories: ["ai", "chat", "llm", "multimodal"],
  },
  {
    id: "5",
    name: "Fonts In Use",
    description: "Archive of typography and lettering in modern graphic design",
    url: "https://fontsinuse.com/",
    image: "/images/tools/fonts-in-use-5.png",
    categories: ["type design", "portfolio", "fonts"],
  },
  {
    id: "6",
    name: "The Brand Identity",
    description:
      "Elliott Moody's Platform showcasing the best branding, packaging, and graphic design work from around the world",
    url: "https://the-brandidentity.com/",
    image: "/images/tools/the-brandidentity-6.png",
    categories: ["branding", "design", "inspiration"],
  },
  {
    id: "7",
    name: "Spaces / Lovers Magazine",
    description:
      "Talent representation agency connecting designers and engineers with opportunities. SPACES bridges the talent gap by matching extraordinary creators with meaningful projects.",
    url: "https://spaces.is/loversmagazine",
    image: "/images/tools/spaces-7.png",
    categories: [],
  },
  {
    id: "10",
    name: "Fonts In Use",
    description: "Archive of typography and lettering in modern graphic design",
    url: "https://fontsinuse.com/",
    image: "/images/tools/fonts-in-use-10.png",
    categories: ["type design", "portfolio", "fonts"],
  },
  {
    id: "11",
    name: "Vercel",
    description: "Platform for frontend frameworks and static sites",
    url: "https://vercel.com/",
    image: "/images/tools/vercel-11.png",
    categories: ["development", "hosting"],
  },
  {
    id: "13",
    name: "Airtable",
    description: "Part spreadsheet, part database, and entirely flexible",
    url: "https://airtable.com/",
    image: "/images/tools/airtable-13.png",
    categories: ["productivity", "business"],
  },
  {
    id: "14",
    name: "Webflow",
    description: "Visual web design platform for professiona`ls",
    url: "https://webflow.com/",
    image: "/images/tools/webflow-14.png",
    categories: ["design", "development"],
  },
  {
    id: "15",
    name: "Framer",
    description: "Interactive design tool for creating responsive websites",
    url: "https://www.framer.com/",
    image: "/images/tools/framer-15.png",
    categories: ["design", "development"],
  },
  {
    id: "16",
    name: "Supabase",
    description: "Open source Firebase alternative with PostgreSQL",
    url: "https://supabase.com/",
    image: "/images/tools/supabase-16.png",
    categories: ["development", "database"],
  },
  {
    id: "17",
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    url: "https://tailwindcss.com/",
    image: "/images/tools/tailwind-css-17.png",
    categories: ["development", "graphic design"],
  },
  {
    id: "18",
    name: "Stable Diffusion",
    description: "Open-source AI art generator",
    url: "https://stability.ai/",
    image: "/images/tools/stable-diffusion-18.png",
    categories: ["artificial intelligence", "graphic design"],
  },
  {
    id: "22",
    name: "Miro",
    description: "Online collaborative whiteboard platform",
    url: "https://miro.com/",
    image: "/images/tools/miro-22.png",
    categories: ["productivity", "collaboration"],
  },
  {
    id: "24",
    name: "Loom",
    description: "Video messaging for work",
    url: "https://www.loom.com/",
    image: "/images/tools/loom-24.png",
    categories: ["productivity", "communication"],
  },
  {
    id: "25",
    name: "Unsplash",
    description: "Beautiful free images and photos",
    url: "https://unsplash.com/",
    image: "/images/tools/unsplash-25.png",
    categories: ["stock photos", "graphic design"],
  },
  {
    id: "26",
    name: "Hugging Face",
    description: "Platform for building, training and deploying ML models",
    url: "https://huggingface.co/",
    image: "/images/tools/hugging-face-26.png",
    categories: ["data science", "artificial intelligence"],
  },
  {
    id: "27",
    name: "Dribbble",
    description: "Community of designers sharing their work",
    url: "https://dribbble.com/",
    image: "/images/tools/dribbble-27.png",
    categories: ["graphic design"],
  },
  {
    id: "28",
    name: "Refactoring Guru",
    description:
      "Educational resource on design patterns and refactoring techniques",
    url: "https://refactoring.guru/design-patterns/behavioral-patterns",
    image: "/images/tools/refactoring-guru-28.png",
    categories: ["development", "education", "design patterns"],
  },
  {
    id: "29",
    name: "Tilegrams",
    description:
      "Tool for creating map visualizations where regions are represented as tiles",
    url: "https://pitchinteractiveinc.github.io/tilegrams/",
    image: "/images/tools/tilegrams-29.png",
    categories: [
      "development",
      "graphic design",
      "data-visualization",
      "infographics",
      "diagrams",
    ],
  },
  {
    id: "30",
    name: "Happy Hues",
    description: "Curated color palettes for web design and UI projects",
    url: "https://www.happyhues.co/palettes/13",
    image: "/images/tools/happy-hues-30.png",
    categories: ["graphic design", "color palette"],
  },
  {
    id: "31",
    name: "FontTools",
    description: "Library for manipulating fonts, written in Python",
    url: "https://fonttools.readthedocs.io/en/latest/",
    image: "/images/tools/fonttools-31.png",
    categories: ["development", "type design"],
  },
  {
    id: "32",
    name: "Free Faces",
    description: "Gallery of free and open-source typefaces",
    url: "https://www.freefaces.gallery/",
    image: "/images/tools/free-faces-32.png",
    categories: ["fonts", "typefaces"],
  },
  {
    id: "33",
    name: "Carbone Tipografía",
    description: "Typography courses and workshops based in Buenos Aires",
    url: "https://carbonetipografia.ar/en/blog-en/",
    image: "/images/tools/carbone-tipograf-a-33.png",
    categories: ["university", "education", "courses", "workshops"],
  },

  {
    id: "34",
    name: "All Things Letters, Chris Campe",
    description:
      "Educational resource for typography and lettering enthusiasts",
    url: "https://www.allthingsletters.com/start/",
    image: "/images/tools/all-things-letters-chris-campe-34.png",
    categories: ["education", "fonts", "typefaces", "signpainting"],
  },
  {
    id: "35",
    name: "Amélie Bonet",
    description:
      "Portfolio of a graphic designer and type designer showcasing typography projects",
    url: "https://ameliebonet.com/",
    image: "/images/tools/am-lie-bonet-35.png",
    categories: ["portfolio", "type designer"],
  },
  {
    id: "36",
    name: "Hungarumlaut",
    description:
      "Type foundry specializing in contemporary typefaces with Central European character support",
    url: "https://hungarumlaut.com/info",
    image: "/images/tools/hungarumlaut-36.png",
    categories: ["type designer", "font studio", "portfolio"],
  },
  {
    id: "37",
    name: "Adam Katyi",
    description:
      "Type designer and typographer with a focus on contemporary typefaces",
    url: "https://adamkatyi.com/",
    image: "/images/tools/adam-katyi-37.png",
    categories: ["type designer", "font studio", "portfolio"],
  },
  {
    id: "38",
    name: "Setup Type",
    description: "Independent type foundry creating contemporary typefaces",
    url: "https://www.setuptype.com/info",
    image: "/images/tools/setup-type-38.png",
    categories: ["fonts", "type design", "font studio", "portfolio"],
  },
  {
    id: "39",
    name: "TypeJockeys",
    description:
      "Independent type foundry creating high-quality typefaces with a focus on craftsmanship",
    url: "https://typejockeys.com/",
    image: "/images/tools/typejockeys-39.png",
    categories: ["type designer", "font studio", "portfolio"],
  },
  {
    id: "40",
    name: "ESAD Type",
    description:
      "Post-graduate program in typeface design at École Supérieure d'Art et de Design d'Amiens",
    url: "https://esad-amiens.design/en/esadtype/post-diplome",
    image: "/images/tools/esad-type-40.png",
    categories: ["education", "university", "course"],
  },
  {
    id: "41",
    name: "Lineto",
    description:
      "Swiss type foundry. Rich portfolio of typefaces and spectacular example of font presentation.",
    url: "https://lineto.com/",
    image: "/images/tools/lineto-41.png",
    categories: ["type designer", "font studio", "portfolio"],
  },
  {
    id: "42",
    name: "Subtext",
    description:
      "Platform for exploring and analyzing text through various linguistic and semantic lenses",
    url: "http://www.subtext.xyz/",
    image: "/images/tools/subtext.png",
    categories: ["development", "productivity"],
  },
  {
    id: "43",
    name: "Reading Typography",
    description:
      "Typography and Graphic Communication department at the University of Reading offering specialized short courses in typeface design",
    url: "https://www.reading.ac.uk/typography/short-courses/tdi-course",
    image: "/images/tools/reading-typography-43.png",
    categories: ["education", "university", "course"],
  },
  {
    id: "44",
    name: "I Love Typography - Glyphs Python Crash Course",
    description:
      "A comprehensive crash course on Python scripting for the Glyphs font editor, helping type designers automate and enhance their workflow",
    url: "https://ilovetypography.com/academy/glyphs-python-crash-course/",
    image: "/images/tools/i-love-typography-glyphs-python-crash-course-44.png",
    categories: ["graphic design", "education", "development"],
  },
  {
    id: "45",
    name: "Type Electives",
    description:
      "Online platform offering specialized courses in typography, type design, and lettering taught by industry professionals",
    url: "https://www.typeelectives.com/courses",
    image: "/images/tools/type-electives-45.png",
    categories: ["graphic design", "education"],
  },
  {
    id: "46",
    name: "Type West Online",
    description:
      "Online typography courses from Letterform Archive, offering in-depth education on type design and typography fundamentals",
    url: "https://letterformarchive.org/type-west-online/",
    image: "/images/tools/type-west-online-46.png",
    categories: ["graphic design", "education"],
  },
  {
    id: "47",
    name: "Cooper Union Typography & Calligraphy",
    description:
      "Continuing education courses in typography and calligraphy at The Cooper Union, offering hands-on instruction in letterform design and typographic principles",
    url: "https://cooper.edu/continuing-education/courses/typography-calligraphy",
    image: "/images/tools/cooper-union-typography-calligraphy-47.png",
    categories: ["education", "calligraphy"],
  },
  {
    id: "48",
    name: "Plantin Institute Expert Class Type Design",
    description:
      "Specialized one-year program in type design at the Plantin Institute of Typography in Antwerp, focusing on professional typeface development",
    url: "https://plantininstituut.be/opleiding/expert-class-type-design/",
    image: "/images/tools/plantin-institute-expert-class-type-design-48.png",
    categories: ["education"],
  },
  {
    id: "49",
    name: "Font Gauntlet",
    description:
      "Interactive web tool for testing and comparing variable fonts, allowing designers to explore the full range of a font's design space",
    url: "https://fontgauntlet.com/",
    image: "/images/tools/font-gauntlet-49.png",
    categories: ["tools", "type design"],
  },
  {
    id: "50",
    name: "Type Everything",
    description:
      "A curated blog showcasing beautiful typography, lettering, and type design from around the world, serving as inspiration for designers and typography enthusiasts",
    url: "https://typeverything.com/",
    image: "/images/tools/type-everything-50.png",
    categories: ["design", "inspiration"],
  },
  {
    id: "51",
    name: "Typonym",
    description:
      "Interactive reference tool for identifying and learning about typographic features and characters, helping designers and typography enthusiasts understand the anatomy of letterforms",
    url: "https://typonym.xyz/about.php",
    image: "/images/tools/typonym-51.png",
    categories: ["design", "education"],
  },
  {
    id: "52",
    name: "Evan on Earth",
    description:
      "Personal website and portfolio of designer Evan Collins, showcasing creative projects and design work with a unique aesthetic approach",
    url: "https://www.evanonearth.net/",
    image: "/images/tools/evan-on-earth-52.png",
    categories: ["design", "portfolio", "inspiration"],
  },
  {
    id: "53",
    name: "Domestika: Animated Typography",
    description:
      "Online course teaching motion design for dynamic typographic compositions, helping designers create engaging animated typography for various digital media projects",
    url: "https://www.domestika.org/en/courses/2253-animated-typography-motion-design-for-dynamic-compositions/course",
    image: "/images/tools/domestika-animated-typography-53.png",
    categories: ["design", "animation", "education"],
  },
  {
    id: "54",
    name: "DrawBot",
    description:
      "Open-source application for creating generative graphics and typography using Python, popular among type designers for creating specimens and testing fonts",
    url: "https://www.drawbot.com/",
    image: "/images/tools/drawbot-54.png",
    categories: ["design", "development", "tools"],
  },
  {
    id: "55",
    name: "TTX (FontTools)",
    description:
      "Command-line tool from the FontTools library that converts OpenType and TrueType fonts to and from XML, allowing for detailed inspection and modification of font files",
    url: "https://fonttools.readthedocs.io/en/latest/ttx.html",
    image: "/images/tools/ttx-fonttools-55.png",
    categories: ["development", "tools"],
  },
];

export const fixedCategories = [
  "type design",
  "fonts",
  "data science",
  "artificial intelligence",
  "graphic design",
  "courses",
  "portfolio",
  "infographics",
];
