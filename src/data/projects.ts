import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: "linio",
    title: "Linio",
    description:
      "Deine Echtzeit-Reisebegleitung für den Mannheimer ÖPNV. Eine moderne iOS-App für Verbindungen im RNV-Netz – mit Live Activities in der Dynamic Island, Abfahrtsmonitor, Deutschlandticket-Integration und Apple Watch-Unterstützung.",
    tags: ["iOS", "Swift", "ÖPNV", "Open Source"],
    icon: "smartphone",
    websiteUrl: "https://deltacore-labs.github.io/Linio-Mannheim-OEPNV/",
    githubUrl: "https://github.com/deltacore-labs/Linio-Mannheim-OEPNV",
    // App Store URL hier einfügen, wenn die App im Store ist
    // appStoreUrl: "https://apps.apple.com/app/linio/idXXXXXXXX",
    features: [
      "Live Activities & Dynamic Island",
      "Apple Watch App",
      "Deutschlandticket Integration",
      "Abfahrtsmonitor Widget",
      "Echtzeit-Tracking",
      "Karten & Routen",
    ],
    techStack: [
      "SwiftUI",
      "ActivityKit",
      "WidgetKit",
      "WatchKit",
      "MapKit",
      "GraphQL",
    ],
  },
  {
    id: "safari-ai-agent",
    title: "Safari AI Agent",
    description:
      "Ein intelligenter AI-Assistent als Safari Extension. Nutze die Kraft künstlicher Intelligenz direkt in deinem Browser für Recherche, Zusammenfassungen und mehr.",
    tags: ["Safari", "macOS", "AI", "Extension"],
    icon: "monitor",
    githubUrl: "https://github.com/deltacore-labs/safari-ai-agent",
    // Website URL hier einfügen, wenn vorhanden
    // websiteUrl: "https://deltacore-labs.github.io/safari-ai-agent/",
    features: [
      "AI-gestützte Assistenz",
      "Native Safari Integration",
      "Schnelle Zusammenfassungen",
      "Intelligente Suche",
    ],
    techStack: ["Swift", "JavaScript", "Safari Extension API", "AI/ML"],
  },
];
