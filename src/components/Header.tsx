"use client";

import { Mail } from "lucide-react";
import { GithubIcon } from "./icons";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
              <span className="text-white font-bold text-lg">Δ</span>
            </div>
            <span className="text-lg font-semibold text-white hidden sm:block">
              Deltacore Labs
            </span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <a
              href="#projects"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="https://github.com/deltacore-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="mailto:delta.corelabs@gmail.com"
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-colors"
              aria-label="Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
