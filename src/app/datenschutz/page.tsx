"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Datenschutz() {
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
              Datenschutzerklärung
            </h1>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge>Keine Datenweitergabe</Badge>
            <Badge>Kein Tracking</Badge>
            <Badge>Kein Account erforderlich</Badge>
            <Badge>Standort nur bei Nutzung</Badge>
          </div>

          {/* Highlight Box */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-purple-600/10 border border-primary-500/20">
            <p className="text-neutral-300">
              <strong className="text-white">Kurzfassung:</strong> ÖPNV Mannheim ist ein nicht-kommerzielles Privatprojekt.
              Die App sammelt keine personenbezogenen Daten, enthält kein Tracking und gibt
              keinerlei Informationen an Dritte weiter.
            </p>
          </div>

          {/* I. Informationen gemäß Art. 13 DS-GVO */}
          <section className="mb-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h2 className="text-xl font-semibold text-white mb-4">I. Informationen über die Verarbeitung Ihrer Daten gemäß Art. 13 DS-GVO</h2>
            
            <h3 className="text-lg font-medium text-white mt-6 mb-3">1. Verantwortlicher und Datenschutzbeauftragter</h3>
            <p className="text-neutral-300 mb-4">Verantwortlich für diese Website und App ist:</p>
            <p className="text-neutral-300 mb-4">
              Stefan Friedrich<br />
              Seckenheimer Landstraße 4A - 0138<br />
              Neuostheim<br />
              68163 Mannheim<br />
              E-Mail:{" "}
              <a href="mailto:delta.corelabs@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                delta.corelabs@gmail.com
              </a>
            </p>
            <p className="text-neutral-400 text-sm">
              Ein Datenschutzbeauftragter ist nicht bestellt, da keine gesetzliche Pflicht
              dazu besteht (§ 38 BDSG). Bei datenschutzrechtlichen Anfragen wenden Sie sich
              bitte direkt an die oben genannte E-Mail-Adresse.
            </p>
          </section>

          {/* I.2 Website-Protokolldaten */}
          <section className="mb-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h3 className="text-lg font-medium text-white mb-3">2. Daten, die für die Bereitstellung der Website und die Erstellung der Protokolldateien verarbeitet werden</h3>
            
            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">a. Welche Daten werden für welchen Zweck verarbeitet?</h4>
            <p className="text-neutral-300 mb-3">
              Bei jedem Zugriff auf Inhalte der Website werden vorübergehend Daten gespeichert,
              die möglicherweise eine Identifizierung zulassen:
            </p>
            <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-1 ml-2">
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>IP-Adresse</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Website, von der aus die Website aufgerufen wurde</li>
              <li>Websites, die über die Website aufgerufen werden</li>
              <li>Besuchte Seite auf unserer Website</li>
              <li>Meldung, ob der Abruf erfolgreich war</li>
              <li>Übertragene Datenmenge</li>
              <li>Informationen über den Browsertyp und die verwendete Version</li>
              <li>Betriebssystem</li>
            </ul>
            <p className="text-neutral-400 text-sm mb-4">
              Die vorübergehende Speicherung der Daten ist für den Ablauf eines Websitebesuchs
              erforderlich, um eine Auslieferung der Website zu ermöglichen.
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">b. Auf welcher Rechtsgrundlage werden diese Daten verarbeitet?</h4>
            <p className="text-neutral-300 mb-4">
              Die Daten werden auf der Grundlage des Art. 6 Abs. 1 Buchstabe f DS-GVO verarbeitet.
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">c. Empfänger der personenbezogenen Daten</h4>
            <p className="text-neutral-300 mb-3">
              Die Website wird über <strong className="text-white">GitHub Pages</strong> (GitHub, Inc., 88 Colin P.
              Kelly Jr. St., San Francisco, CA 94107, USA) gehostet. Weitere Informationen in der{" "}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
                Datenschutzerklärung von GitHub
              </a>.
            </p>
            <p className="text-neutral-400 text-sm mb-4">
              Diese Website verwendet keine Cookies, kein Tracking, keine Analytics und
              keine eingebetteten Drittanbieter-Inhalte.
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">d. Wie lange werden die Daten gespeichert?</h4>
            <p className="text-neutral-400 text-sm">
              Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer
              Erhebung nicht mehr erforderlich sind. Die Protokolldateien werden gemäß den 
              Richtlinien von GitHub Pages nach maximal vier Wochen endgültig gelöscht.
            </p>
          </section>

          {/* I.3 App */}
          <section className="mb-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h3 className="text-lg font-medium text-white mb-3">3. Datenverarbeitung in der App</h3>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">Standortdaten</h4>
            <p className="text-neutral-300 mb-3">
              Die App kann optional deinen aktuellen Standort (GPS) abfragen, um nahegelegene
              Haltestellen automatisch zu finden. Der Zugriff erfolgt ausschließlich während
              der aktiven Nutzung der App (<em>„Beim Verwenden der App"</em>) und nur nach
              ausdrücklicher Einwilligung über den iOS-Systempopup.
            </p>
            <p className="text-neutral-300 mb-3">
              <strong className="text-white">Zweck:</strong> Anzeige nahegelegener Haltestellen.<br />
              <strong className="text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1 Buchstabe a DS-GVO (Einwilligung).<br />
              <strong className="text-white">Speicherdauer:</strong> Keine – Koordinaten werden nur für die aktuelle
              API-Anfrage verwendet und nicht gespeichert.
            </p>
            <p className="text-neutral-400 text-sm mb-4">
              Die Einwilligung kann jederzeit widerrufen werden unter
              <em> iOS-Einstellungen → Datenschutz &amp; Sicherheit → Ortungsdienste → ÖPNV Mannheim</em>.
              Der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung
              (Art. 7 Abs. 3 DS-GVO).
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">API-Anfragen (Fahrplandaten)</h4>
            <p className="text-neutral-300 mb-3">
              Verbindungssuche und Abfahrtszeiten werden über die öffentliche GraphQL-API der
              rnv GmbH (rnv-online.de) abgerufen. Dabei werden die gewählten Haltestellen
              sowie der gewünschte Abfahrtszeitpunkt an deren Server übertragen.
              Es existiert kein eigener Server des Entwicklers.
            </p>
            <p className="text-neutral-300 mb-4">
              <strong className="text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1 Buchstabe b DS-GVO (Nutzung der App-Funktion).<br />
              Es gelten ergänzend die{" "}
              <a href="https://www.rnv-online.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
                Datenschutzbestimmungen der rnv GmbH
              </a>.
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">Lokale Datenspeicherung</h4>
            <p className="text-neutral-300 mb-3">
              Folgende Daten werden ausschließlich lokal auf dem Gerät gespeichert
              (via iOS UserDefaults) und verlassen es nicht:
            </p>
            <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-1 ml-2">
              <li>Zuletzt genutzte Haltestellen</li>
              <li>App-Einstellungen (Verkehrsmittel-Filter, Suchradius)</li>
              <li>Daten für laufende Live Activities (Dynamic Island / Sperrbildschirm)</li>
            </ul>
            <p className="text-neutral-400 text-sm mb-4">
              Alle lokal gespeicherten Daten können jederzeit über
              <em> Einstellungen → Cache leeren</em> in der App gelöscht werden.
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">Live Activities &amp; Dynamic Island</h4>
            <p className="text-neutral-300 mb-4">
              Live Activities zeigen Echtzeit-Fahrtinformationen auf dem Sperrbildschirm
              und in der Dynamic Island an. Die Verarbeitung erfolgt vollständig lokal auf
              dem Gerät. Eine Übertragung an externe Dienste findet nicht statt.
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">Drittanbieter &amp; Tracking</h4>
            <p className="text-neutral-400 text-sm">
              Die App enthält keine Analytics-SDKs, Werbenetzwerke, Crash-Reporter oder
              sonstige Drittanbieter-Dienste, die Nutzungsdaten erfassen oder weiterleiten.
            </p>
          </section>

          {/* I.4 Betroffenenrechte */}
          <section className="mb-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h3 className="text-lg font-medium text-white mb-3">4. Betroffenenrechte</h3>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">a. Recht auf Auskunft</h4>
            <p className="text-neutral-300 mb-4">
              Sie können Auskunft nach Art. 15 DS-GVO über Ihre personenbezogenen Daten verlangen, die wir verarbeiten.
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">b. Recht auf Widerspruch</h4>
            <p className="text-neutral-300 mb-4">
              Sie haben ein Recht auf Widerspruch aus besonderen Gründen (siehe Abschnitt II).
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">c. Recht auf Berichtigung</h4>
            <p className="text-neutral-300 mb-4">
              Sollten die Sie betreffenden Angaben nicht (mehr) zutreffend sein, können Sie
              nach Art. 16 DS-GVO eine Berichtigung verlangen.
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">d. Recht auf Löschung</h4>
            <p className="text-neutral-300 mb-4">
              Sie können nach Art. 17 DS-GVO die Löschung Ihrer personenbezogenen Daten verlangen.
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">e. Recht auf Einschränkung der Verarbeitung</h4>
            <p className="text-neutral-300 mb-4">
              Sie haben nach Art. 18 DS-GVO das Recht, eine Einschränkung der Verarbeitung
              Ihrer personenbezogenen Daten zu verlangen.
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">f. Recht auf Beschwerde</h4>
            <p className="text-neutral-300 mb-3">
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten
              gegen Datenschutzrecht verstößt, haben Sie nach Art. 77 Abs. 1 DS-GVO das Recht,
              sich bei einer Datenschutzaufsichtsbehörde zu beschweren:
            </p>
            <p className="text-neutral-300 mb-4">
              <strong className="text-white">Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)</strong><br />
              Gustav-Stresemann-Ring 1, 65189 Wiesbaden<br />
              <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
                datenschutz.hessen.de
              </a>
            </p>

            <h4 className="text-base font-medium text-neutral-200 mt-5 mb-2">g. Recht auf Datenübertragbarkeit</h4>
            <p className="text-neutral-400 text-sm mb-4">
              Für den Fall, dass die Voraussetzungen des Art. 20 Abs. 1 DS-GVO vorliegen,
              steht Ihnen das Recht zu, sich Daten aushändigen zu lassen. Die Erfassung der Daten 
              zur Bereitstellung der Website beruht auf Art. 6 Abs. 1 Buchstabe f DS-GVO und nicht 
              auf Einwilligung oder Vertrag.
            </p>

            <p className="text-neutral-300 mt-6">
              Anfragen zu Ihren Rechten richten Sie bitte an:{" "}
              <a href="mailto:delta.corelabs@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                delta.corelabs@gmail.com
              </a>
            </p>
          </section>

          {/* II. Widerspruchsrecht */}
          <section className="mb-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h2 className="text-xl font-semibold text-white mb-4">II. Recht auf Widerspruch gemäß Art. 21 Abs. 1 DS-GVO</h2>
            <p className="text-neutral-300 mb-4">
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
              jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten, die aufgrund von
              Art. 6 Abs. 1 Buchstabe f DS-GVO erfolgt, Widerspruch einzulegen. Der Verantwortliche
              verarbeitet die personenbezogenen Daten dann nicht mehr, es sei denn, er kann
              zwingende schutzwürdige Gründe für die Verarbeitung nachweisen.
            </p>
            <p className="text-neutral-400 text-sm">
              Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung der
              Protokolldateien sind für den Betrieb der Internetseite zwingend erforderlich.
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800/50 border border-neutral-700/50 text-sm text-neutral-300">
      <span className="w-2 h-2 rounded-full bg-green-500" />
      {children}
    </span>
  );
}
