import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Unsere Projekte
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Open Source Apps und Extensions, entwickelt mit modernsten
              Technologien und Fokus auf User Experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* More Coming Soon */}
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

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-900/30 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                2+
              </div>
              <div className="text-sm text-neutral-500">Active Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                100%
              </div>
              <div className="text-sm text-neutral-500">Open Source</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                Swift
              </div>
              <div className="text-sm text-neutral-500">Primary Language</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                🇩🇪
              </div>
              <div className="text-sm text-neutral-500">Made in Germany</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
