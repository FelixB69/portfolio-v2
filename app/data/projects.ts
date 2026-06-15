// Structural data for the personal projects grid.
// Text (title / description / aria-label) is resolved via i18n keys: projects.<id>.{title,desc,aria}
export interface ProjectData {
  id: string;
  image: string;
  href: string;
  tags: string[];
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: "fondio",
    image: "/img/fondio.png",
    href: "https://fondio.felixberger.fr/",
    featured: true,
    tags: ["Next.js", "React", "Supabase", "Ollama", "Mistral", "Qwen", "Llama"],
  },
  {
    id: "simulator",
    image: "/img/project1.png",
    href: "https://simulateur.felixberger.fr/",
    tags: ["Next.js", "Node.js", "NestJS", "TensorFlow"],
  },
  {
    id: "dashboard",
    image: "/img/project2.png",
    href: "https://salaires.felixberger.fr/",
    tags: ["Angular", "Node.js", "NestJS"],
  },
];
