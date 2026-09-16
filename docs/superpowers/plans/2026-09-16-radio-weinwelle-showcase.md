# Radio WeinWelle Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `RadioWeinWelleShowcase` section to the homepage with a wine-red app showcase on the left and a live browser-based audio player on the right.

**Architecture:** Single self-contained client component `RadioWeinWelleShowcase.tsx` with sub-functions for each UI region. HTML5 `<audio>` element handles playback; `fetch` polls the Icecast status JSON every 15 seconds for song metadata; iTunes Search API resolves album artwork.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Lucide React icons. Static export — no server-side API routes.

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `src/components/RadioWeinWelleShowcase.tsx` | Entire showcase section (layout, player logic, metadata) |
| Modify | `src/components/index.ts` | Export the new component |
| Modify | `src/app/page.tsx` | Insert showcase below `LinioShowcase` |

---

## Task 1: Static Section Shell

Build the section background, left column (app info + features), and stats bar. No audio logic yet. Wire into the page and verify it renders.

**Files:**
- Create: `src/components/RadioWeinWelleShowcase.tsx`
- Modify: `src/components/index.ts`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create `src/components/RadioWeinWelleShowcase.tsx` with this exact content**

```tsx
"use client";

import {
  Radio, Music, Disc3, Smartphone, Wifi, Lock,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, AppleIcon } from "./icons";

const STREAM_URL = "https://stream.radio-wein-welle.de/radioweinwelle_high";
const METADATA_URL = "https://stream.radio-wein-welle.de/status-json.xsl";

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

// PlayerCard — to be filled in Task 2
function PlayerCard() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-rose-950/80 to-red-950/80 border border-rose-800/30 p-8 flex items-center justify-center min-h-[320px]">
      <p className="text-rose-400/60 text-sm">Player coming in Task 2</p>
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
```

- [ ] **Step 2: Add export to `src/components/index.ts`**

Open the file and append:
```ts
export { RadioWeinWelleShowcase } from "./RadioWeinWelleShowcase";
```

- [ ] **Step 3: Add component to `src/app/page.tsx`**

Add the import at the top:
```tsx
import { RadioWeinWelleShowcase } from "@/components/RadioWeinWelleShowcase";
```

Insert `<RadioWeinWelleShowcase />` directly after `</LinioShowcase>` closing tag (still inside the `<div id="projects">`):

```tsx
{/* Linio Featured Section */}
<div id="projects">
  <LinioShowcase />
  <RadioWeinWelleShowcase />
</div>
```

- [ ] **Step 4: Run dev server and verify section renders**

```bash
cd /Users/I767513/deltacore-labs/public-website && npm run dev
```

Open http://localhost:3000 in the browser. Scroll down past the Linio section. Verify:
- Wine-red tinted background section appears
- Left column shows icon, title "Radio Wein-Welle", feature grid, buttons
- Right column shows the placeholder text (expected at this stage)
- Stats bar appears at the bottom

- [ ] **Step 5: Commit**

```bash
git add src/components/RadioWeinWelleShowcase.tsx src/components/index.ts src/app/page.tsx
git commit -m "feat: add RadioWeinWelleShowcase static shell"
```

---

## Task 2: PlayerCard with Audio + Metadata

Replace the placeholder `PlayerCard` with the full implementation including HTML5 audio playback, Icecast metadata polling, and iTunes album artwork.

**Files:**
- Modify: `src/components/RadioWeinWelleShowcase.tsx` (replace `PlayerCard` function)

- [ ] **Step 1: Replace the placeholder `PlayerCard` function**

First, update the import block at the top of `RadioWeinWelleShowcase.tsx` to add the missing hooks and icons:

```tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Radio, Music, Disc3, Smartphone, Wifi, Lock,
  Play, Square, ExternalLink,
} from "lucide-react";
import { GithubIcon, AppleIcon } from "./icons";
```

Then find this block:
```tsx
// PlayerCard — to be filled in Task 2
function PlayerCard() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-rose-950/80 to-red-950/80 border border-rose-800/30 p-8 flex items-center justify-center min-h-[320px]">
      <p className="text-rose-400/60 text-sm">Player coming in Task 2</p>
    </div>
  );
}
```

Replace it with:
```tsx
type PlayState = "idle" | "loading" | "playing" | "stopped";

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
      // artwork stays empty — no change needed
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

    if (!audioRef.current) {
      const audio = new Audio(STREAM_URL);
      audio.addEventListener("playing", () => {
        setPlayState("playing");
        startPolling();
      });
      audio.addEventListener("error", () => setPlayState("stopped"));
      audio.addEventListener("waiting", () => setPlayState("loading"));
      audioRef.current = audio;
    }

    setPlayState("loading");
    audioRef.current.play().catch(() => setPlayState("stopped"));
  }, [playState, startPolling, stopPolling]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      stopPolling();
    };
  }, [stopPolling]);

  const isPlaying = playState === "playing";
  const isLoading = playState === "loading";

  return (
    <div className="relative">
      {/* Animated background blobs */}
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
            {artworkUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={artworkUrl}
                alt="Album Cover"
                className="w-40 h-40 rounded-2xl object-cover shadow-xl shadow-black/50"
              />
            ) : (
              <div className="w-40 h-40 rounded-2xl bg-rose-900/50 border border-rose-700/30 flex items-center justify-center">
                <Radio className="w-16 h-16 text-rose-400/40" />
              </div>
            )}
            {/* LIVE badge */}
            <div className="absolute -top-2 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              LIVE
            </div>
          </div>

          {/* Track info */}
          <div className="text-center w-full overflow-hidden">
            <p className="font-semibold text-white text-lg truncate">
              {nowPlaying.title || "Radio Wein-Welle"}
            </p>
            <p className="text-sm text-rose-300/60 mt-1 truncate">
              {nowPlaying.artist || "Jetzt live"}
            </p>
          </div>

          {/* Play / Stop button */}
          <button
            onClick={togglePlay}
            disabled={isLoading}
            aria-label={isPlaying ? "Stop" : "Play"}
            className="w-16 h-16 rounded-full bg-rose-600 hover:bg-rose-500 disabled:bg-rose-800 flex items-center justify-center shadow-lg shadow-rose-900/50 transition-all hover:scale-105 active:scale-95 disabled:scale-100 cursor-pointer disabled:cursor-wait"
          >
            {isLoading ? (
              <svg
                className="w-6 h-6 text-white animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12" cy="12" r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
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
```

- [ ] **Step 2: Verify dev server still compiles**

```bash
npm run dev
```

Expected: No TypeScript compile errors in the terminal. Browser shows the player card with album art placeholder, LIVE badge, and Play button.

- [ ] **Step 3: Manual browser test**

With the dev server running, open http://localhost:3000 and scroll to the Radio WeinWelle section:

1. Click the Play button → button shows spinner while buffering
2. Audio starts → button changes to Stop square icon
3. Wait ~15 seconds → song title and artist should update (if the Icecast CORS policy allows it)
4. If metadata appears: album artwork loads after 1-2 seconds
5. If metadata does NOT appear (CORS blocked): title stays "Radio Wein-Welle", audio keeps playing — this is expected and correct behavior
6. Click Stop → audio pauses, button returns to Play

- [ ] **Step 4: Commit**

```bash
git add src/components/RadioWeinWelleShowcase.tsx
git commit -m "feat: add live audio player with Icecast metadata and iTunes artwork"
```

---

## Task 3: Production Build Verification

**Files:**
- Verify: `src/components/RadioWeinWelleShowcase.tsx`

- [ ] **Step 1: Run lint**

```bash
npm run lint
```

Expected: No errors. If ESLint warns about `@next/next/no-img-element` — that warning is suppressed by the `eslint-disable` comment already in the code.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected output ends with:
```
Route (app)                              Size
┌ ○ /                                   ...
└ ○ /impressum                          ...
✓ Compiled successfully
```

No TypeScript errors. If there are type errors, fix them in `RadioWeinWelleShowcase.tsx` before continuing.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "build: verify production build passes with RadioWeinWelleShowcase"
```

Only create this commit if `git status` shows actual uncommitted changes after fixing any build errors. If the build was clean in Task 2, skip this commit.
