import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LinioShowcase } from "@/components/LinioShowcase";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { otherProjects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Linio Featured Section */}
      <div id="projects">
        <LinioShowcase />
      </div>

      {/* Other Projects Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Weitere Projekte
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Mehr Open Source Apps und Extensions von Deltacore Labs.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-800/30 border border-neutral-700/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              <span className="text-sm text-neutral-400">
                Weitere Projekte in Entwicklung...
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
