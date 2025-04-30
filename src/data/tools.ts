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
    name: "Canva",
    description:
      "Online design platform that simplifies graphic design with drag-and-drop features and templates for social media, presentations, posters, and more",
    url: "https://www.canva.com/",
    image: "/images/tools/canva-5.png",
    categories: ["design", "graphic design", "templates", "no code"],
  },
  {
    id: "6",
    name: "The Brand Identity",
    description:
      "Elliott Moody's Platform showcasing the best branding, packaging, and graphic design work from around the world",
    url: "https://the-brandidentity.com/",
    image: "/images/tools/the-brand-identity-6.png",
    categories: ["branding", "design", "inspiration"],
  },
  {
    id: "7",
    name: "Spaces / Lovers Magazine",
    description:
      "Talent representation agency connecting designers and engineers with opportunities. SPACES bridges the talent gap by matching extraordinary creators with meaningful projects.",
    url: "https://spaces.is/loversmagazine",
    image: "/images/tools/spaces-lovers-magazine-7.png",
    categories: [],
  },
  {
    id: "8",
    name: "Nahuel Gerth Lab",
    description:
      "Experimental design laboratory and portfolio showcasing innovative typography and interactive design projects",
    url: "https://nahuelgerth.de/lab",
    image: "/images/tools/nahuel-gerth-lab-8.png",
    categories: ["type design", "experimental", "portfolio"],
  },
  {
    id: "9",
    name: "Samu.space",
    description:
      "Personal website, blog, and reading list by Samu featuring curated content and insights",
    url: "https://samu.space/",
    image: "/images/tools/samu-space-9.png",
    categories: ["blog", "personal", "reading list"],
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
    id: "12",
    name: "Font Style Matcher",
    description:
      "Tool to help match fallback fonts to custom fonts to minimize layout shifts",
    url: "https://meowni.ca/font-style-matcher/",
    image: "/images/tools/font-style-matcher-12.png",
    categories: ["typography", "tools", "digital playground"],
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
    categories: ["development"],
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
    id: "19",
    name: "Meow",
    description:
      "Monica Dinculescu's personal website and blog with web experiments",
    url: "https://meowni.ca/",
    image: "/images/tools/meow-19.png",
    categories: [
      "⭐️ favourite",
      "development",
      "blog",
      "web experiments",
      "creative coding",
      "digital playground",
      "typography",
      "design",
    ],
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
      "Hungarian type foundry founded by Gábor Kóthay, specializing in contemporary typefaces with Central European character support, particularly focusing on Hungarian and other Central European languages",
    url: "https://hungarumlaut.com/info",
    image: "/images/tools/hungarumlaut-36.png",
    categories: ["type designer", "foundry / studio", "portfolio"],
  },
  {
    id: "37",
    name: "Adam Katyi",
    description:
      "Hungarian type designer and founder of his eponymous foundry, known for his work on the Hungarian National Typeface project and creating typefaces that bridge traditional and contemporary design",
    url: "https://adamkatyi.com/",
    image: "/images/tools/adam-katyi-37.png",
    categories: ["type designer", "foundry / studio", "portfolio"],
  },
  {
    id: "38",
    name: "Setup Type",
    description:
      "Barcelona-based type foundry founded by Joan Barjau and Ricard Garcia, known for their experimental approach to type design and their work on custom typefaces for brands like Desigual and Roca",
    url: "https://www.setuptype.com/info",
    image: "/images/tools/setup-type-38.png",
    categories: ["fonts", "type design", "foundry / studio", "portfolio"],
  },
  {
    id: "39",
    name: "TypeJockeys",
    description:
      "Vienna-based type foundry founded by Oliver Schöndorfer and Veronika Burian, specializing in high-quality typefaces with a focus on Central European character sets and custom type design for cultural institutions",
    url: "https://typejockeys.com/",
    image: "/images/tools/typejockeys-39.png",
    categories: ["type designer", "foundry / studio", "portfolio"],
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
      "Swiss type foundry founded by Cornel Windlin and Stephan Müller, known for their minimalist approach and iconic typefaces like Circular and Akkurat, with a strong focus on corporate type design",
    url: "https://lineto.com/",
    image: "/images/tools/lineto-41.png",
    categories: [
      "⭐️ favourite",
      "type designer",
      "foundry / studio",
      "portfolio",
    ],
  },
  {
    id: "42",
    name: "Subtext",
    description:
      "Platform for exploring and analyzing text through various linguistic and semantic lenses",
    url: "http://www.subtext.xyz/",
    image: "/images/tools/subtext-42.png",
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
  {
    id: "56",
    name: "notwk.london",
    description:
      "London-based creative studio specializing in brand identity, digital design, and art direction with a contemporary and innovative approach",
    url: "https://notwk.london/",
    image: "/images/tools/notwk-london-56.png",
    categories: ["design", "branding", "digital playground"],
  },
  {
    id: "57",
    name: "Asenda Law",
    description:
      "UK-based law firm offering specialized legal services with a modern, client-focused approach to legal representation and consultation",
    url: "https://asendalaw.co.uk/",
    image: "/images/tools/asenda-law-57.png",
    categories: ["legal", "business", "services"],
  },

  {
    id: "58",
    name: "Black Foundry",
    description:
      "Independent type design studio creating innovative and high-quality typefaces with a focus on contemporary design and technical excellence",
    url: "https://black-foundry.com/",
    image: "/images/tools/black-foundry-58.png",
    categories: ["type design", "fonts", "design", "foundry / studio"],
  },
  {
    id: "59",
    name: "Bold Monday",
    description:
      "Dutch type foundry founded by Paul van der Laan and Pieter van Rosmalen, specializing in custom type design for brands and publications, with notable clients including The New York Times and The Guardian",
    url: "https://boldmonday.com/",
    image: "/images/tools/bold-monday-59.png",
    categories: ["type design", "fonts", "design", "foundry / studio"],
  },
  {
    id: "60",
    name: "Contrast Foundry",
    description:
      "Russian type foundry founded by Maria Doreuli, focusing on creating typefaces that combine traditional calligraphic principles with modern design, with a particular emphasis on Cyrillic script development",
    url: "https://contrastfoundry.com/",
    image: "/images/tools/contrast-foundry-60.png",
    categories: ["type design", "fonts", "design", "foundry / studio"],
  },
  {
    id: "61",
    name: "Creative Market",
    description:
      "Online marketplace for design assets including fonts, graphics, templates, and more from independent creators",
    url: "https://creativemarket.com/",
    image: "/images/tools/creative-market-61.png",
    categories: ["design", "marketplace", "fonts", "resources"],
  },
  {
    id: "62",
    name: "Fontfabric",
    description:
      "Bulgarian type foundry founded by Plamen Motev, known for their extensive library of display and text typefaces, with a strong focus on multilingual support and corporate type design",
    url: "https://www.fontfabric.com/",
    image: "/images/tools/fontfabric-62.png",
    categories: ["type design", "fonts", "design", "foundry / studio"],
  },
  {
    id: "63",
    name: "Hiles Consulting",
    description:
      "Specialized consulting services for creative businesses and type designers, offering strategic guidance and business development",
    url: "https://www.hilesconsulting.com/",
    image: "/images/tools/hiles-consulting-63.png",
    categories: ["business", "consulting", "type design", "services"],
  },
  {
    id: "64",
    name: "I Love Typography",
    description:
      "Educational platform and blog dedicated to typography, type design, and the history and culture of letterforms",
    url: "https://ilovetypography.com/",
    image: "/images/tools/i-love-typography-64.png",
    categories: ["education", "typography", "blog", "resources"],
  },
  {
    id: "65",
    name: "JTD Type",
    description:
      "UK-based type foundry founded by James Hultquist-Todd, specializing in custom type design for publishing and branding, with a particular focus on editorial typefaces and variable fonts",
    url: "https://www.jtdtype.com/",
    image: "/images/tools/jtd-type-65.png",
    categories: ["type design", "fonts", "design", "foundry / studio"],
  },
  {
    id: "66",
    name: "Newlyn",
    description:
      "UK-based type foundry founded by Miles Newlyn, known for creating distinctive typefaces for global brands like BBC, Nike, and Samsung, with a focus on brand identity and custom type design",
    url: "https://newlyn.com/",
    image: "/images/tools/newlyn-66.png",
    categories: ["type design", "fonts", "branding", "foundry / studio"],
  },
  {
    id: "67",
    name: "Sharp Type",
    description:
      "New York-based type foundry founded by Chantra Malee and Lucas Sharp, with notable work for Apple, Nike, and The New York Times. OmniLatin tool is also worth checking out.",
    url: "https://www.sharptype.co/case-studies",
    image: "/images/tools/sharp-type-67.png",
    categories: ["type design", "fonts", "design", "foundry / studio", "tools"],
  },
  {
    id: "68",
    name: "Tiro Typeworks",
    description:
      "Canadian type foundry founded by John Hudson and Ross Mills, specializing in multilingual typography and complex script development, with extensive work on Indic and Arabic script typefaces",
    url: "https://tiro.com/",
    image: "/images/tools/tiro-typeworks-68.png",
    categories: ["type design", "fonts", "multilingual", "foundry / studio"],
  },
  {
    id: "69",
    name: "TypeMates",
    description:
      "German type foundry founded by Jakob Runge and Yanone, known for their work on custom typefaces for brands like Audi and Volkswagen, with a focus on automotive and corporate type design",
    url: "https://www.typemates.com/",
    image: "/images/tools/typemates-69.png",
    categories: ["type design", "fonts", "design", "foundry / studio"],
  },
  {
    id: "70",
    name: "TypeType",
    description:
      "Russian type foundry founded by Alexander Kudriavtsev, specializing in contemporary typefaces with extensive Cyrillic support, known for their work on custom typefaces for Russian brands and publications",
    url: "https://typetype.org/",
    image: "/images/tools/typetype-70.png",
    categories: ["type design", "fonts", "design", "foundry / studio"],
  },
  {
    id: "71",
    name: "Women in Type",
    description:
      "Initiative celebrating and promoting the work of women in type design and typography, offering resources and community support",
    url: "https://www.women-in-type.com/",
    image: "/images/tools/women-in-type-71.png",
    categories: ["type design", "community", "education", "resources"],
  },
  {
    id: "72",
    name: "Words of Type",
    description:
      "Educational platform and resource for typography enthusiasts, offering insights into type design and typographic practices",
    url: "https://wordsoftype.com/",
    image: "/images/tools/words-of-type-72.png",
    categories: ["education", "typography", "type design", "resources", "blog"],
  },
  {
    id: "73",
    name: "Zetafonts",
    description:
      "Italian type foundry founded by Cosimo Lorenzo Pancini, known for their extensive library of contemporary typefaces and their work on custom type design for Italian fashion and design brands",
    url: "https://www.zetafonts.com/",
    image: "/images/tools/zetafonts-73.png",
    categories: ["type design", "fonts", "design", "foundry / studio"],
  },
  {
    id: "74",
    name: "This Chair Does Not Exist",
    description:
      "AI-generated chair designs that showcase the intersection of artificial intelligence and furniture design, creating unique and sometimes impossible chair concepts",
    url: "https://thischairdoesnotexist.com/",
    image: "/images/tools/this-chair-does-not-exist-74.png",
    categories: ["design", "creative coding", "digital playground"],
  },
  {
    id: "75",
    name: "Drajmarsh",
    description:
      "Interactive digital playground featuring creative coding experiments and visual explorations, showcasing the intersection of art, design, and technology",
    url: "https://drajmarsh.bitbucket.io/",
    image: "/images/tools/drajmarsh-75.png",
    categories: [
      "creative coding",
      "digital playground",
      "design",
      "interactive",
    ],
  },
  {
    id: "76",
    name: "Calligrapher.ai",
    description:
      "Neural network that generates realistic handwriting in various styles, allowing users to create personalized handwritten text for creative projects",
    url: "https://www.calligrapher.ai/",
    image: "/images/tools/calligrapher-ai-76.png",
    categories: ["typography", "digital playground"],
  },
  {
    id: "77",
    name: "SVG.io",
    description:
      "Online tool for creating, editing, and optimizing SVG files, offering a user-friendly interface for vector graphics manipulation and export options for web and print use",
    url: "https://svg.io/",
    image: "/images/tools/svg-io-77.png",
    categories: ["digital playground"],
  },
  {
    id: "78",
    name: "Brian Stauffer",
    description:
      "Award-winning illustrator and artist known for his conceptual, thought-provoking editorial illustrations for major publications and brands, combining traditional and digital techniques",
    url: "https://brianstauffer.com/",
    image: "/images/tools/brian-stauffer-78.png",
    categories: [
      "graphic design",
      "illustration",
      "portfolio",
      "animation",
      "editorial",
    ],
  },
  {
    id: "79",
    name: "Software Engineering Books Collection by Guillermo Moral",
    description:
      "Comprehensive collection of software engineering books covering various topics including programming languages, design patterns, algorithms, and best practices for developers",
    url: "https://github.com/gmoral/Books",
    image:
      "/images/tools/software-engineering-books-collection-by-guillermo-moral-79.png",
    categories: ["⭐️ favourite", "books", "education", "software engineering"],
  },
  {
    id: "80",
    name: "Google AI Studio",
    description:
      "Platform for building and experimenting with generative AI applications using Google's AI models",
    url: "https://aistudio.google.com/prompts/new_chat",
    image: "/images/tools/google-ai-studio-80.png",
    categories: ["ai", "chat", "llm"],
  },
  {
    id: "81",
    name: "ChatGPT",
    description:
      "OpenAI's conversational AI model that can understand and generate human-like text, assist with writing, answer questions, and help with various creative and technical tasks",
    url: "https://chat.openai.com/",
    image: "/images/tools/chatgpt-81.png",
    categories: ["ai", "chat", "llm"],
  },
  {
    id: "82",
    name: "Bruno Arizio",
    description:
      "Creative designer and art director, custom web animations for branding",
    url: "https://brunoarizio.com/",
    image: "/images/tools/bruno-arizio-82.png",
    categories: [
      "graphic design",
      "portfolio",
      "branding",
      "art direction",
      "animation",
    ],
  },
  {
    id: "83",
    name: "Adrian Roselli",
    description: "Web accessibility expert and consultant, web font size guide",
    url: "https://adrianroselli.com/2024/03/the-ultimate-ideal-bestest-base-font-size-that-everyone-is-keeping-a-secret-especially-chet.html",
    image: "/images/tools/adrian-roselli-83.png",
    categories: [
      "accessibility",
      "a11y",
      "web development",
      "ux",
      "design",
      "education",
    ],
  },
  {
    id: "84",
    name: "GitHub Copilot",
    description:
      "AI-powered code completion tool that helps developers write code faster and with fewer errors by suggesting whole lines or blocks of code as you type",
    url: "https://github.com/copilot",
    image: "/images/tools/github-copilot-84.png",
    categories: ["ai", "chat", "llm"],
  },
  {
    id: "85",
    name: "TypeMorpher P5 Sketch",
    description:
      "Interactive typography experiment using P5.js that allows users to morph and manipulate letterforms in real-time",
    url: "https://typemorpher.xyz/p5-sketch-02",
    image: "/images/tools/typemorpher-p5-sketch-85.png",
    categories: ["digital playground"],
  },
  {
    id: "86",
    name: "Gradientor",
    description:
      "A tool for creating and exploring beautiful CSS gradients with an intuitive interface",
    url: "https://gradientor.afterimage.cc/",
    image: "/images/tools/gradientor-86.png",
    categories: ["digital playground"],
  },
  {
    id: "87",
    name: "Grid Paint",
    description:
      "An interactive tool by Schultzschultz for creating and exploring grid-based designs and patterns",
    url: "https://schultzschultz.com/gridpaint/",
    image: "/images/tools/grid-paint-87.png",
    categories: ["⭐️ favourite", "digital playground"],
  },
  {
    id: "88",
    name: "Bauhaus Labyrinth",
    description:
      "An interactive tool that generates unique typefaces inspired by the Bauhaus design principles and geometric forms",
    url: "https://otf.bauhauslabor.de/#/generate",
    image: "/images/tools/bauhaus-labyrinth-88.png",
    categories: ["digital playground"],
  },
  {
    id: "89",
    name: "Lena Weber",
    description:
      "A creative portfolio showcasing innovative design work and interactive digital experiences",
    url: "https://lenaweber.com/",
    image: "/images/tools/lena-weber-89.png",
    categories: ["portfolio", "digital playground", "creative coding"],
  },
  {
    id: "90",
    name: "P5.JS visuals",
    description:
      "P5.js playground featuring interactive examples like Rainbow JS. Also worth to check: https://p5-tools.glitch.me/",
    url: "https://p5-t00ls.glitch.me/#rainbow-js",
    image: "/images/tools/p5-js-visuals-90.png",
    categories: ["creative coding", "digital playground"],
  },
  {
    id: "91",
    name: "p5live",
    description: "p5.js playground running in browser.",
    url: "https://teddavis.org/p5live/",
    image: "/images/tools/p5live-91.png",
    categories: ["creative coding"],
  },
  {
    id: "92",
    name: "React Spring",
    description:
      "A spring-physics based animation library for React applications that makes it easy to create fluid and natural animations",
    url: "https://www.react-spring.dev/",
    image: "/images/tools/react-spring-92.png",
    categories: ["development", "animation", "animation library"],
  },
  {
    id: "93",
    name: "Motion.dev",
    description:
      "A powerful animation editor for creating complex web animations with a visual interface, allowing designers to export production-ready code",
    url: "https://motion.dev/",
    image: "/images/tools/motion-dev-93.png",
    categories: ["animation", "animation library", "development"],
  },
  {
    id: "94",
    name: "Material UI (MUI)",
    description:
      "Google's Material Design components for React, providing a comprehensive set of pre-built, accessible UI components with customizable styling",
    url: "https://mui.com/",
    image: "/images/tools/material-ui-mui-94.png",
    categories: ["ui component library"],
  },
  {
    id: "95",
    name: "Chakra UI",
    description:
      "Accessible and themeable React components that make it easy to build consistent, responsive user interfaces with support for light and dark modes",
    url: "https://chakra-ui.com/",
    image: "/images/tools/chakra-ui-95.png",
    categories: ["ui component library"],
  },
  {
    id: "96",
    name: "Ant Design",
    description:
      "Enterprise-level UI design system for React applications with a comprehensive collection of high-quality components for building rich, interactive user interfaces",
    url: "https://ant.design/",
    image: "/images/tools/ant-design-96.png",
    categories: ["ui component library"],
  },
  {
    id: "97",
    name: "ShadCN/UI",
    description:
      "Collection of headless Radix components styled with Tailwind CSS, offering beautifully designed, accessible UI components with complete styling flexibility",
    url: "https://ui.shadcn.com/",
    image: "/images/tools/shadcn-ui-97.png",
    categories: ["ui component library"],
  },
  {
    id: "98",
    name: "Blueprint.js",
    description:
      "UI toolkit designed specifically for building complex, data-dense desktop-like web applications with a focus on consistency and usability",
    url: "https://blueprintjs.com/",
    image: "/images/tools/blueprint-js-98.png",
    categories: ["ui component library"],
  },
  {
    id: "99",
    name: "Mantine",
    description:
      "Modern React component library featuring a clean design system with over 100 customizable components and hooks for building feature-rich applications",
    url: "https://mantine.dev/",
    image: "/images/tools/mantine-99.png",
    categories: ["ui component library"],
  },
  {
    id: "100",
    name: "Radix UI",
    description:
      "Unstyled, accessible UI primitives for building high-quality React applications with complete separation of styling and behavior, providing robust functionality while allowing total design freedom",
    url: "https://www.radix-ui.com/",
    image: "/images/tools/radix-ui-100.png",
    categories: ["headless component library"],
  },
  {
    id: "101",
    name: "React Aria",
    description:
      "Adobe's collection of React Hooks that provides accessible UI primitives for your design system, handling complex interactions, accessibility, and behavior while leaving styling completely up to you",
    url: "https://react-spectrum.adobe.com/react-aria/",
    image: "/images/tools/react-aria-101.png",
    categories: ["headless component library"],
  },
  {
    id: "102",
    name: "Headless UI",
    description:
      "Completely unstyled, fully accessible UI components from Tailwind Labs, designed to integrate perfectly with Tailwind CSS while providing robust functionality for common interface elements like dropdowns and modals",
    url: "https://headlessui.com/",
    image: "/images/tools/headless-ui-102.png",
    categories: ["headless component library"],
  },
  {
    id: "103",
    name: "Method of Action",
    description: "Typography games on kerning, Bézier curves, and colors",
    url: "https://method.ac/",
    image: "/images/tools/method-of-action-103.png",
    categories: ["typography", "digital playground"],
  },
  {
    id: "104",
    name: "Perplexity AI",
    description:
      "AI-powered search engine that provides comprehensive answers to complex questions by analyzing and synthesizing information from across the web",
    url: "https://www.perplexity.ai/",
    image: "/images/tools/perplexity-ai-104.png",
    categories: ["ai", "chat", "llm"],
  },
  {
    id: "105",
    name: "Full-Bleed Layout Tutorial",
    description:
      "Josh Comeau's comprehensive guide to creating full-bleed layouts in CSS, explaining how to break content out of containers while maintaining readable text widths",
    url: "https://www.joshwcomeau.com/css/full-bleed/",
    image: "/images/tools/full-bleed-layout-tutorial-105.png",
    categories: ["web UI layout", "css", "development"],
  },
  {
    id: "106",
    name: "Layout Breakouts",
    description:
      "Ryan Mulligan's tutorial on advanced CSS layout techniques for breaking elements out of their containers to create visually dynamic and engaging web designs",
    url: "https://ryanmulligan.dev/blog/layout-breakouts/",
    image: "/images/tools/layout-breakouts-106.png",
    categories: ["web UI layout", "css", "development"],
  },
  {
    id: "107",
    name: "Clamp Calculator",
    description:
      "A tool for creating fluid typography and spacing with CSS clamp() function",
    url: "https://clamp.font-size.app/",
    image: "/images/tools/clamp-calculator-107.png",
    categories: ["typography", "css", "development", "tools"],
  },
  {
    id: "108",
    name: "Shreya Maheshwari Design",
    description:
      "Portfolio showcasing type design, UX/UI process, creative coding",
    url: "https://shreyamaheshwaridesign.myportfolio.com/",
    image: "/images/tools/shreya-maheshwari-design-108.png",
    categories: ["portfolio", "graphic design", "typography", "ux", "ui"],
  },
  {
    id: "109",
    name: "Monotype Font Pairing",
    description:
      "A tool by Monotype that helps designers find complementary font combinations for their projects",
    url: "https://www.monotype.com/font-pairing",
    image: "/images/tools/monotype-font-pairing-109.png",
    categories: ["typography", "fonts", "tools"],
  },
  {
    id: "110",
    name: "Font Pairing Generator",
    description:
      "A tool by Fontpair that helps designers find complementary font combinations for their projects",
    url: "https://fontpair.co/",
    image: "/images/tools/font-pairing-generator-110.png",
    categories: ["typography", "fonts", "tools"],
  },
  {
    id: "111",
    name: "BBC Sound Effects",
    description:
      "Archive of over 33,000 high-quality sound effects for personal, educational, and research purposes",
    url: "https://sound-effects.bbcrewind.co.uk/",
    image: "/images/tools/bbc-sound-effects-111.png",
    categories: ["audio", "sound", "resources", "media"],
  },
  {
    id: "112",
    name: "Fontjoy",
    description:
      "Deep learning-based font pairing tool that generates harmonious font combinations based on your input",
    url: "https://fontjoy.com/pairing/",
    image: "/images/tools/fontjoy-112.png",
    categories: ["typography", "fonts", "tools"],
  },
  {
    id: "113",
    name: "Typewolf",
    description:
      "Independent typography resource that helps designers choose the perfect font combination for their next design project, featuring curated typography inspiration from real websites",
    url: "https://www.typewolf.com/",
    image: "/images/tools/typewolf-113.png",
    categories: ["typography", "fonts", "inspiration", "resources"],
  },
  {
    id: "114",
    name: "Typewolf All Fonts",
    description:
      "Comprehensive database of font statistics and usage trends across the web, showing the most popular fonts used on design-focused websites and offering insights into typography trends",
    url: "https://www.typewolf.com/all-fonts",
    image: "/images/tools/typewolf-all-fonts-114.png",
    categories: ["typography", "fonts", "resources", "statistics"],
  },
  {
    id: "115",
    name: "Jeremiah Shoaf",
    description:
      "Personal website and portfolio of Jeremiah Shoaf, the founder of Typewolf, featuring typography resources, design insights, and curated font recommendations",
    url: "https://www.jeremiahshoaf.com/",
    image: "/images/tools/jeremiah-shoaf-115.png",
    categories: ["typography", "fonts", "portfolio", "design"],
  },
  {
    id: "117",
    name: "Coding Font",
    description:
      "Find your programming font by comparing different coding fonts side by side in a realistic coding environment",
    url: "https://www.codingfont.com/",
    image: "/images/tools/coding-font-117.png",
    categories: ["digital playground"],
  },
  {
    id: "118",
    name: "Repomix",
    description:
      "Pack your codebase into AI-friendly formats on the web or use the npm package: https://github.com/yamadashy/repomix",
    url: "https://repomix.com/",
    image: "/images/tools/repomix-118.png",
    categories: ["development", "github", "resources", "tools", "llm", "ai"],
  },
  {
    id: "119",
    name: "GitHub Profile Summary Cards",
    description:
      "Tool to generate summary cards for GitHub profiles with visualizations of user statistics, contributions, and repository information",
    url: "https://github-profile-summary-cards-dimkagithubvercel.vercel.app/demo.html",
    image: "/images/tools/github-profile-summary-cards-119.png",
    categories: ["development", "github", "tools"],
  },
  {
    id: "120",
    name: "A Complete Guide to CSS Grid",
    description:
      "Comprehensive reference guide to CSS Grid layout, featuring visual examples, code snippets, and detailed explanations of all grid properties and concepts",
    url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    image: "/images/tools/a-complete-guide-to-css-grid-120.png",
    categories: ["development", "css", "web design", "resources", "education"],
  },
  {
    id: "121",
    name: "Use & Modify",
    description:
      "A typeface collection by Raphaël Bastide featuring beautiful, classy, punk, professional, incomplete, and weird typefaces for creative projects",
    url: "https://usemodify.com/",
    image: "/images/tools/use-modify-121.png",
    categories: ["typography", "fonts", "resources", "type design"],
  },
];

export const fixedCategories = [
  "⭐️ favourite",
  "type design",
  "fonts",
  "data science",
  "artificial intelligence",
  "graphic design",
  "no code",
  "courses",
  "portfolio",
  "infographics",
  "creative coding",
  "digital playground",
];

// Get all unique categories from tools
export const getAllCategories = (): string[] => {
  const allCategories = new Set<string>();

  // Add fixed categories
  fixedCategories.forEach((cat) => allCategories.add(cat));

  // Add categories from tools
  tools.forEach((tool) => {
    tool.categories.forEach((cat) => allCategories.add(cat));
  });

  return Array.from(allCategories).sort();
};
