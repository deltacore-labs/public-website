"use client";

import {
  Radio, Music, Disc3, Smartphone, Wifi, Lock,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, AppleIcon } from "./icons";

const features = [
  { icon: Radio,      title: "Live Stream",  desc: "Icecast HQ" },
  { icon: Music,      title: "Song-Info",    desc: "Echtzeit-Metadaten" },
  { icon: Disc3,      title: "Cover Art",    desc: "iTunes API" },
  { icon: Smartphone, title: "iOS & macOS",  desc: "Native App" },
  { icon: Wifi,       title: "Kostenlos",    desc: "Werbefrei" },
  { icon: Lock,       title: "Lock Screen",  desc: "Control Center" },
];

export function RadioWeinWelleShowcase() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-rose-950/20 to-neutral-950" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-900/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-red-900/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium">
            <Radio className="w-4 h-4" />
            Open Source · iOS &amp; macOS
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RadioWeinWelleInfo />
          <PlayerCard />
        </div>

        <StatsBar />
      </div>
    </section>
  );
}

function RadioWeinWelleInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-6">
        <div className="relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[1.75rem] overflow-hidden shadow-2xl shadow-rose-500/20 ring-1 ring-white/10 bg-gradient-to-br from-rose-800 to-red-950 flex items-center justify-center">
            <Radio className="w-12 h-12 text-rose-200" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-rose-600 rounded-full p-1.5">
            <AppleIcon className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Radio Wein-Welle
          </h2>
          <p className="text-rose-400 font-medium">Dein Regionalradio</p>
          <p className="text-sm text-neutral-400">Pfalz · Kostenlos · Open Source</p>
        </div>
      </div>

      <p className="text-lg text-neutral-300">
        Streame Radio Wein-Welle direkt im Browser — oder lade die native App für{" "}
        <span className="text-rose-400">iOS &amp; macOS.</span>
      </p>

      <ActionButtons />
      <FeatureGrid />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href="https://www.radio-wein-welle.de"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors"
      >
        <ExternalLink className="w-5 h-5" />
        Website
      </a>
      <a
        href="https://github.com/deltacore-labs/Radio-WeinWelle-Player"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-700 hover:bg-neutral-800/50 text-neutral-300 rounded-xl transition-colors"
      >
        <GithubIcon className="w-5 h-5" />
        GitHub
      </a>
    </div>
  );
}

function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((f) => (
        <div
          key={f.title}
          className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-rose-500/30 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-3 group-hover:bg-rose-500/20 transition-colors">
            <f.icon className="w-5 h-5 text-rose-400" />
          </div>
          <h3 className="font-semibold text-white mb-1">{f.title}</h3>
          <p className="text-sm text-neutral-500">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

// PlayerCard — placeholder replaced in Task 2
function PlayerCard() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-rose-950/80 to-red-950/80 border border-rose-800/30 p-8 flex items-center justify-center min-h-[320px]">
      <p className="text-rose-400/60 text-sm">Wird in Task 2 ersetzt</p>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="mt-16 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <div className="text-2xl font-bold text-rose-400">HQ</div>
        <div className="text-sm text-neutral-500">Stream</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-white">100%</div>
        <div className="text-sm text-neutral-500">Open Source</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-white">iOS 17+</div>
        <div className="text-sm text-neutral-500">Minimum</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-white">0€</div>
        <div className="text-sm text-neutral-500">Werbefrei</div>
      </div>
    </div>
  );
}
