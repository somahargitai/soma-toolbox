export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
  categories: string[];
}

export const tools: Tool[] = [
  {
    id: '1',
    name: 'Midjourney',
    description: 'AI image generation tool using text prompts',
    url: 'https://www.midjourney.com/',
    image: '/images/tools/midjourney.png',
    categories: ['ai', 'design'],
  },
  {
    id: '2',
    name: 'Figma',
    description: 'Design, prototype, and collaborate all in the browser',
    url: 'https://www.figma.com/',
    image: '/images/tools/figma.png',
    categories: ['design', 'productivity'],
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write better code',
    url: 'https://github.com/features/copilot',
    image: '/images/tools/github-copilot.png',
    categories: ['ai', 'development'],
  },
  {
    id: '4',
    name: 'VS Code',
    description: 'Free source-code editor made by Microsoft',
    url: 'https://code.visualstudio.com/',
    image: '/images/tools/vscode.png',
    categories: ['development', 'productivity'],
  },
  {
    id: '5',
    name: 'Notion',
    description: 'All-in-one workspace for notes, tasks, wikis, and databases',
    url: 'https://www.notion.so/',
    image: '/images/tools/notion.png',
    categories: ['productivity'],
  },
  {
    id: '6',
    name: 'ChatGPT',
    description: 'Conversational AI model that can be used for various tasks',
    url: 'https://chat.openai.com/',
    image: '/images/tools/chatgpt.png',
    categories: ['ai'],
  },
  {
    id: '7',
    name: 'High Quality Image',
    description: 'High quality image with custom parameters',
    url: 'https://example.com/',
    image: '/images/tools/high-quality-image.avif',
    categories: ['design', 'resources'],
  },
]; 