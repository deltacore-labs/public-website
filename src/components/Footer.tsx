"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon } from "./icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Δ</span>
              </div>
              <span className="text-lg font-semibold text-white">
                Deltacore Labs
              </span>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs">
              Innovative Apps und Extensions für das Apple-Ökosystem. 
              Open Source mit Leidenschaft entwickelt.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Projekte
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://deltacore-labs.github.io/Linio-Mannheim-OEPNV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Linio ÖPNV App
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deltacore-labs/safari-ai-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Safari AI Agent
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Rechtliches
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/impressum"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Kontakt
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/deltacore-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="mailto:delta.corelabs@gmail.com"
                className="p-2.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                aria-label="E-Mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {currentYear} Deltacore Labs. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-neutral-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> in Germany
          </p>
        </div>
      </div>
    </footer>
  );
}
