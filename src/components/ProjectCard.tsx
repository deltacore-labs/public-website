"use client";

import { cn } from "@/lib/utils";
import {
  ExternalLink,
  Smartphone,
  Globe,
  Monitor,
} from "lucide-react";
import { GithubIcon, AppleIcon } from "./icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  icon: "smartphone" | "globe" | "monitor";
  websiteUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  features?: string[];
  techStack?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const iconMap = {
  smartphone: Smartphone,
  globe: Globe,
  monitor: Monitor,
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const IconComponent = iconMap[project.icon];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-neutral-900/50 border border-neutral-800",
        "hover:border-neutral-700 hover:bg-neutral-900/80",
        "transition-all duration-500 ease-out",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10" />
      </div>

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/20">
              <IconComponent className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-medium rounded-full bg-neutral-800 text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-neutral-300 mb-3">
              Features
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.slice(0, 4).map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-neutral-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-neutral-300 mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-neutral-800/50 text-neutral-400 border border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-800">
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="app-store-btn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-sm">App Store</span>
            </a>
          )}

          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Website
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/50 text-neutral-300 font-medium text-sm transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
