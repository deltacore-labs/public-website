"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Header />

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Link>

          {/* Page Header */}
          <div className="mb-8">
            <p className="text-sm font-medium text-primary-400 uppercase tracking-wider mb-2">
              Rechtliches
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Impressum
            </h1>
          </div>

          {/* Highlight Box */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-purple-600/10 border border-primary-500/20">
            <p className="text-neutral-300">
              Angaben gemäß § 5 Telemediengesetz (TMG). Bei dieser App und
              Website handelt es sich um ein{" "}
              <strong className="text-white">
                privates, nicht-kommerzielles Studentenprojekt
              </strong>
              .
            </p>
          </div>

          {/* Herausgeber */}
          <section className="mb-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h2 className="text-xl font-semibold text-white mb-4">Herausgeber</h2>
            <p className="text-neutral-300 mb-4">
              Stefan Friedrich<br />
              Ernst-Reuter-Straße 17<br />
              64823 Groß-Umstadt<br />
              Deutschland
            </p>
            <p className="text-neutral-300 mb-4">
              E-Mail:{" "}
              <a href="mailto:delta.corelabs@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                delta.corelabs@gmail.com
              </a><br />
              Instagram:{" "}
              <a href="https://www.instagram.com/delta.corelabs" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
                @delta.corelabs
              </a>
            </p>
            <p className="text-neutral-400 text-sm">
              Eine USt-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz liegt nicht vor, da es sich um ein nicht-gewerbliches Privatprojekt handelt.
            </p>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section className="mb-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h2 className="text-xl font-semibold text-white mb-4">Verantwortlich für den Inhalt</h2>
            <p className="text-neutral-300 mb-4">
              Stefan Friedrich<br />
              Seckenheimer Landstraße 4A - 0138<br />
              Neuostheim<br />
              68163 Mannheim
            </p>
            <p className="text-neutral-300 mb-4">
              E-Mail:{" "}
              <a href="mailto:delta.corelabs@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                delta.corelabs@gmail.com
              </a>
            </p>
            <p className="text-neutral-400 text-sm">
              Dieses Projekt steht in keiner Verbindung zur rnv GmbH (Rhein-Neckar-Verkehr), dem Verkehrsverbund Rhein-Neckar (VRN) oder anderen Verkehrsbetrieben. Alle Markenzeichen und Logos sind Eigentum ihrer jeweiligen Inhaber.
            </p>
          </section>

          {/* Nutzungsbedingungen und Urheberrecht */}
          <section className="mb-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h2 className="text-xl font-semibold text-white mb-4">Nutzungsbedingungen und Urheberrecht</h2>
            <p className="text-neutral-300 mb-4">
              Texte, Bilder, Grafiken sowie die Gestaltung dieser Website und App können dem Urheberrecht unterliegen.
            </p>
            <p className="text-neutral-300 mb-4">
              Der Quellcode der App ist auf{" "}
              <a href="https://github.com/friedrichstefan/RNV-Transport-App" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
                GitHub
              </a>{" "}
              öffentlich verfügbar. Die dort hinterlegte Open-Source-Lizenz gilt für die Nutzung des Quellcodes.
            </p>
            <p className="text-neutral-400 text-sm">
              Texte, Bilder, Grafiken und sonstige Dateien können ganz oder teilweise dem Urheberrecht Dritter unterliegen. Die Fahrplan- und Echtzeitdaten werden über die öffentliche API der rnv GmbH bezogen; es gelten deren Nutzungsbedingungen.
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section className="mb-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h2 className="text-xl font-semibold text-white mb-4">Haftungsausschluss</h2>
            <p className="text-neutral-300 mb-4">
              Alle auf dieser Website und in der App bereitgestellten Informationen wurden nach bestem Wissen und Gewissen erarbeitet und geprüft. Eine Gewähr für die jederzeitige Aktualität, Richtigkeit, Vollständigkeit und Verfügbarkeit der bereitgestellten Informationen kann nicht übernommen werden. Ein Vertragsverhältnis mit den Nutzern des Angebots kommt nicht zustande.
            </p>
            <p className="text-neutral-400 text-sm">
              Die angezeigten Fahrplan- und Echtzeitdaten stammen ausschließlich aus der öffentlichen API der rnv GmbH. Bei zeitkritischen Verbindungen empfiehlt sich eine Überprüfung über die offiziellen Kanäle der rnv GmbH.
            </p>
          </section>

          {/* Links */}
          <section className="mb-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h2 className="text-xl font-semibold text-white mb-4">Links</h2>
            <p className="text-neutral-300 mb-4">
              Von den eigenen Inhalten sind Querverweise („Links") auf die Webseiten anderer Anbieter zu unterscheiden. Durch diese Links wird lediglich der Zugang zur Nutzung fremder Inhalte nach § 8 Telemediengesetz ermöglicht. Bei der erstmaligen Verknüpfung mit diesen Internetangeboten wurden diese fremden Inhalte daraufhin überprüft, ob durch sie eine mögliche zivilrechtliche oder strafrechtliche Verantwortlichkeit ausgelöst wird.
            </p>
            <p className="text-neutral-400 text-sm">
              Allerdings können diese fremden Inhalte nicht ständig auf Veränderungen überprüft werden, sodass daher auch keine Verantwortung dafür übernommen werden kann. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung von Informationen Dritter entstehen, haftet allein der jeweilige Anbieter der Seite.
            </p>
          </section>

          {/* Stand */}
          <div className="text-center">
            <p className="text-sm text-neutral-500">Stand: Mai 2026</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
