// Structural data for the skills cards.
// Title and bullets are resolved via i18n keys: skills.<id>.{title,bullets[]}
export interface SkillData {
  id: string;
  tags: string[];
}

export const skills: SkillData[] = [
  {
    id: "management",
    tags: ["Scrum", "OKR", "Jira", "Team Lead", "Freelance"],
  },
  {
    id: "product",
    tags: ["UX/UI", "SaaS", "Architecture", "IA / LLM", "Figma"],
  },
  {
    id: "dev",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Angular",
      "Supabase",
      "Docker",
    ],
  },
];
