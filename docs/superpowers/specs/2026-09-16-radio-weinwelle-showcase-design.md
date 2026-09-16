# Design Spec: Radio WeinWelle Showcase + Web Player

**Date:** 2026-09-16  
**Status:** Approved

## Overview

Add a `RadioWeinWelleShowcase` section to the homepage directly below `LinioShowcase`. The section combines an app showcase (left column) with a live browser-based audio player (right column), using a burgundy/wine-red color scheme to distinguish it from Linio's sky-blue theme.

## Architecture

### New file
`src/components/RadioWeinWelleShowcase.tsx` — self-contained, client component.

### Integration point
`src/app/page.tsx` — insert `<RadioWeinWelleShowcase />` immediately after `<LinioShowcase />`, wrapped in `<div id="radio-weinwelle">`.

### No new dependencies
Uses only existing packages: React, Tailwind, Lucide icons. HTML5 `<audio>` element for playback. `fetch` for metadata.

## Layout

Two-column grid (same pattern as `LinioShowcase`):

```
[ Badge: "Open Source • iOS & macOS" ]

[ RadioWeinWelleInfo (left) ]   [ PlayerCard (right) ]

[ StatsBar (bottom) ]
```

**Background:** `from-neutral-950 via-rose-950/20 to-neutral-950` with two radial glow blobs (`rose-900/15`, `red-900/10`).

## Left Column — RadioWeinWelleInfo

- App icon (public/images/radio-weinwelle-icon.png, fallback: Radio lucide icon in wine-red)
- Title: "Radio Wein-Welle", subtitle: "Dein Regionalradio"
- Description: "Streame Radio Wein-Welle direkt im Browser — oder lade die native App für iOS & macOS."
- Feature grid (2×3):
  1. Radio — "Live Stream" / "Icecast HQ"
  2. Music — "Song-Info" / "Echtzeit-Metadaten"
  3. Image — "Cover Art" / "iTunes API"
  4. Apple logo — "iOS & macOS" / "Native App"
  5. Wifi — "Kostenlos" / "Werbefrei"
  6. Lock — "Lock Screen" / "Control Center"
- Buttons: Website (https://www.radio-wein-welle.de) · GitHub

## Right Column — PlayerCard

A glassmorphic card with animated wine-red background:

- Album artwork (160×160, rounded-2xl, fallback: radio icon placeholder)
- `LIVE` badge (red dot pulsing + text)
- Song title (marquee animation if text overflows)
- Artist name (muted)
- Play/Stop button (large, centered, wine-red accent)
- Loading spinner while buffering

## Audio & Metadata

**Stream URL:** `https://stream.radio-wein-welle.de/radioweinwelle_high`  
**Metadata API:** `https://stream.radio-wein-welle.de/status-json.xsl` (AzuraCast/Icecast JSON)  
**Album art:** `https://itunes.apple.com/search?term={artist}+{title}&media=music&limit=1&country=DE`

### Polling
- Fetch metadata every 15 seconds via `setInterval` while player is active (also fetch once on mount).
- Parse `now_playing.song.title` and `now_playing.song.artist` from the JSON response.
- Split fallback: if no separate artist field, split on ` - ` (artist first).

### Album art
- After metadata fetch, query iTunes. Replace `100x100bb` with `600x600bb` in the artwork URL.
- On error: show a wine-red placeholder with a music note icon.

### CORS
The `status-json.xsl` endpoint may not set CORS headers. Graceful fallback: on `fetch` error, show "Live" as title and hide artist/cover. The audio stream itself is unaffected.

### Audio state
- `idle` → `loading` → `playing` → `stopped`
- Single `<audio>` element, `src` set on first play (avoids auto-loading on page render).
- Cleanup: `audio.pause()` + clear interval on component unmount.

## Stats Bar

| Stat | Label |
|------|-------|
| HQ Stream | Icecast |
| 100% | Open Source |
| iOS 17+ | Minimum |
| 0€ | Werbefrei |

## App Icon

No app icon asset exists yet in the repo. Use a styled placeholder: rounded square with wine-red gradient background and a radio wave SVG, until a real icon is available.

## Out of Scope

- No server-side proxy for metadata (site is statically exported to GitHub Pages)
- No ShazamKit or ICY metadata fallback (browser cannot do audio fingerprinting)
- No volume slider in first version
