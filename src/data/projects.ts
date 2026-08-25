import type { Project } from "@/components/ProjectCard";

// Other projects (Linio is featured separately in LinioShowcase)
export const otherProjects: Project[] = [
  {
    id: "safari-ai-agent",
    title: "Safari AI Agent",
    description:
      "Ein intelligenter AI-Assistent als Safari Extension. Nutze die Kraft künstlicher Intelligenz direkt in deinem Browser für Recherche, Zusammenfassungen und mehr.",
    tags: ["Safari", "macOS", "AI", "Extension"],
    icon: "monitor",
    githubUrl: "https://github.com/deltacore-labs/safari-ai-agent",
    features: [
      "AI-gestützte Assistenz",
      "Native Safari Integration",
      "Schnelle Zusammenfassungen",
      "Intelligente Suche",
    ],
    techStack: ["Swift", "JavaScript", "Safari Extension API", "AI/ML"],
  },
];
