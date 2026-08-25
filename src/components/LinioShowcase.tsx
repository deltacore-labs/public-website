"use client";

import Image from "next/image";
import { Watch, Ticket, MapPin, Bell, Zap, Star, Smartphone, ExternalLink } from "lucide-react";
import { GithubIcon, AppleIcon } from "./icons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const features = [
  { icon: Zap, title: "Live Activities", desc: "Dynamic Island" },
  { icon: Watch, title: "Apple Watch", desc: "Native watchOS" },
  { icon: Ticket, title: "D-Ticket", desc: "Wallet Pass" },
  { icon: MapPin, title: "GPS", desc: "Auto-Erkennung" },
  { icon: Bell, title: "Alerts", desc: "Push-Notifications" },
  { icon: Smartphone, title: "Widgets", desc: "Home Screen" }
];

export function LinioShowcase() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background mit Blautönen wie Linio Website */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-sky-950/20 to-neutral-950" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium">
            <Star className="w-4 h-4 fill-sky-400" />
            Jetzt im App Store
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <LinioInfo />
          <FeatureGrid />
        </div>

        <StatsBar />
      </div>
    </section>
  );
}

function LinioInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-6">
        <div className="relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[1.75rem] overflow-hidden shadow-2xl shadow-sky-500/20 ring-1 ring-white/10">
            <Image src={`${basePath}/images/linio-icon.png`} alt="Linio" width={112} height={112} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-sky-500 rounded-full p-1.5">
            <AppleIcon className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Linio</h2>
          <p className="text-sky-400 font-medium">ÖPNV für Mannheim</p>
          <p className="text-sm text-neutral-400">RNV • Kostenlos • Open Source</p>
        </div>
      </div>

      <p className="text-lg text-neutral-300">
        Echtzeit-Daten des RNV auf deinem iPhone – <span className="text-sky-400">ohne Account, ohne Werbung.</span>
      </p>

      <ActionButtons />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a href="https://apps.apple.com/app/linio/id6740141491" target="_blank" rel="noopener noreferrer"
        className="hover:scale-105 transition-transform">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${basePath}/images/app-store-badge.svg`} alt="Im App Store laden" className="h-12" />
      </a>
      <a href="https://deltacore-labs.github.io/Linio-Mannheim-OEPNV/" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors">
        <ExternalLink className="w-5 h-5" />Website
      </a>
      <a href="https://github.com/deltacore-labs/Linio-Mannheim-OEPNV" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-700 hover:bg-neutral-800/50 text-neutral-300 rounded-xl transition-colors">
        <GithubIcon className="w-5 h-5" />GitHub
      </a>
    </div>
  );
}

function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((f) => (
        <div key={f.title} className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-sky-500/30 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition-colors">
            <f.icon className="w-5 h-5 text-sky-400" />
          </div>
          <h3 className="font-semibold text-white mb-1">{f.title}</h3>
          <p className="text-sm text-neutral-500">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

function StatsBar() {
  return (
    <div className="mt-16 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div><div className="text-2xl font-bold text-sky-400">4.9 ★</div><div className="text-sm text-neutral-500">App Store</div></div>
      <div><div className="text-2xl font-bold text-white">100%</div><div className="text-sm text-neutral-500">Open Source</div></div>
      <div><div className="text-2xl font-bold text-white">iOS 16.2+</div><div className="text-sm text-neutral-500">Minimum</div></div>
      <div><div className="text-2xl font-bold text-white">0€</div><div className="text-sm text-neutral-500">Werbefrei</div></div>
    </div>
  );
}
