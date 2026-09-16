"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Radio, Music, Disc3, Smartphone, Wifi, Lock,
  Play, Square, ExternalLink, WifiOff,
} from "lucide-react";
import Image from "next/image";
import { GithubIcon, AppleIcon } from "./icons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const STREAM_URL = "https://stream.radio-wein-welle.de/radioweinwelle_high";
const METADATA_URL = "https://stream.radio-wein-welle.de/status-json.xsl";

const features = [
  { icon: Radio,      title: "Live Stream",   desc: "Icecast HQ" },
  { icon: Music,      title: "Song-Info",     desc: "Echtzeit-Metadaten" },
  { icon: Disc3,      title: "Cover Art",     desc: "iTunes API" },
  { icon: Smartphone, title: "iOS & macOS",   desc: "Native App" },
  { icon: Wifi,       title: "Kostenlos",     desc: "Werbefrei" },
  { icon: Lock,       title: "Lock Screen",   desc: "Control Center" },
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
            Event-Radio · Winzerfest Groß-Umstadt
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
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[1.75rem] overflow-hidden shadow-2xl shadow-rose-500/20 ring-1 ring-white/10">
            <Image
              src={`${basePath}/images/radio-weinwelle-icon.png`}
              alt="Radio Wein-Welle"
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-rose-600 rounded-full p-1.5">
            <AppleIcon className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Radio Wein-Welle
          </h2>
          <p className="text-rose-400 font-medium">Winzerfest Groß-Umstadt</p>
          <p className="text-sm text-neutral-400">Groß-Umstadt · Jährliches Event · Open Source</p>
        </div>
      </div>

      <p className="text-lg text-neutral-300">
        Das Event-Radio des Winzerfests in Groß-Umstadt — nur während des Fests on air.
        Nativ auf <span className="text-rose-400">iOS &amp; macOS</span>, oder direkt hier im Browser.
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

type PlayState = "idle" | "loading" | "playing" | "stopped" | "error";

interface NowPlaying {
  title: string;
  artist: string;
}

function PlayerCard() {
  const [playState, setPlayState] = useState<PlayState>("idle");
  const [nowPlaying, setNowPlaying] = useState<NowPlaying>({ title: "", artist: "" });
  const [artworkUrl, setArtworkUrl] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchArtwork = useCallback(async (query: string) => {
    try {
      const encoded = encodeURIComponent(query);
      const res = await fetch(
        `https://itunes.apple.com/search?term=${encoded}&media=music&limit=1&country=DE`,
        { cache: "no-store" }
      );
      const data = await res.json() as { results?: Array<{ artworkUrl100?: string }> };
      const url = data?.results?.[0]?.artworkUrl100;
      if (url) setArtworkUrl(url.replace("100x100bb", "600x600bb"));
    } catch {
      // artwork stays empty
    }
  }, []);

  const fetchMetadata = useCallback(async () => {
    try {
      const res = await fetch(METADATA_URL, { cache: "no-store" });
      const data = await res.json() as {
        icestats?: { source?: { title?: string } | Array<{ title?: string }> };
      };
      const source = data?.icestats?.source;
      const entry = Array.isArray(source) ? source[0] : source;
      const raw = entry?.title ?? "";
      const parts = raw.split(" - ");
      const artist = parts.length > 1 ? parts[0].trim() : "";
      const title = parts.length > 1 ? parts.slice(1).join(" - ").trim() : raw.trim();
      setNowPlaying({ title, artist });
      if (title || artist) fetchArtwork(`${artist} ${title}`.trim());
    } catch {
      // CORS or network failure — metadata stays empty, audio keeps playing
    }
  }, [fetchArtwork]);

  const stopPolling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startPolling = useCallback(() => {
    fetchMetadata();
    intervalRef.current = setInterval(fetchMetadata, 15000);
  }, [fetchMetadata]);

  const togglePlay = useCallback(() => {
    if (playState === "playing") {
      audioRef.current?.pause();
      stopPolling();
      setPlayState("stopped");
      return;
    }

    // Allow retry from error state
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(STREAM_URL);
    audio.addEventListener("playing", () => {
      setPlayState("playing");
      startPolling();
    });
    audio.addEventListener("error", () => {
      stopPolling();
      setPlayState("error");
    });
    audio.addEventListener("waiting", () => setPlayState("loading"));
    audioRef.current = audio;

    setPlayState("loading");
    audio.play().catch(() => setPlayState("error"));
  }, [playState, startPolling, stopPolling]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      stopPolling();
    };
  }, [stopPolling]);

  const isPlaying = playState === "playing";
  const isLoading = playState === "loading";
  const isError = playState === "error";

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-4 w-48 h-48 bg-rose-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-4 right-4 w-40 h-40 bg-red-700/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative rounded-3xl bg-gradient-to-br from-rose-950/80 to-red-950/80 border border-rose-800/30 backdrop-blur-xl p-8 shadow-2xl shadow-rose-900/30">
        <div className="flex flex-col items-center gap-6">

          {/* Album artwork */}
          <div className="relative">
            {artworkUrl && isPlaying ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={artworkUrl}
                alt="Album Cover"
                className="w-40 h-40 rounded-2xl object-cover shadow-xl shadow-black/50"
              />
            ) : (
              <div className={`w-40 h-40 rounded-2xl overflow-hidden shadow-xl shadow-black/50 ${isError ? "opacity-30 grayscale" : ""} transition-all`}>
                <Image
                  src={`${basePath}/images/radio-weinwelle-icon.png`}
                  alt="Radio Wein-Welle"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* LIVE badge — only when actually playing */}
            {isPlaying && (
              <div className="absolute -top-2 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                LIVE
              </div>
            )}

            {/* Offline badge */}
            {isError && (
              <div className="absolute -top-2 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-700 text-neutral-400 text-xs font-bold shadow-lg">
                <WifiOff className="w-3 h-3" />
                Offline
              </div>
            )}
          </div>

          {/* Track info */}
          <div className="text-center w-full overflow-hidden">
            {isError ? (
              <>
                <p className="font-semibold text-neutral-400 text-lg">Sendet gerade nicht</p>
                <p className="text-sm text-neutral-600 mt-1">Nur während des Winzerfests on air</p>
              </>
            ) : (
              <>
                <p className="font-semibold text-white text-lg truncate">
                  {nowPlaying.title || "Radio Wein-Welle"}
                </p>
                <p className="text-sm text-rose-300/60 mt-1 truncate">
                  {nowPlaying.artist || "Jetzt live"}
                </p>
              </>
            )}
          </div>

          {/* Play / Stop button */}
          <button
            onClick={togglePlay}
            disabled={isLoading}
            aria-label={isPlaying ? "Stop" : "Play"}
            className="w-16 h-16 rounded-full bg-rose-600 hover:bg-rose-500 disabled:bg-rose-800 flex items-center justify-center shadow-lg shadow-rose-900/50 transition-all hover:scale-105 active:scale-95 disabled:scale-100 cursor-pointer disabled:cursor-wait"
          >
            {isLoading ? (
              <svg className="w-6 h-6 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : isPlaying ? (
              <Square className="w-6 h-6 text-white fill-white" />
            ) : (
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="mt-16 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <div className="text-2xl font-bold text-rose-400">Event</div>
        <div className="text-sm text-neutral-500">Winzerfest</div>
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
