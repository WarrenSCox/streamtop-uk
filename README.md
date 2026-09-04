# Wozza

**One place. Every Top Ten.**

Wozza is a personal, mobile-first chart app built to make finding what
is popular **simple, quick and fun**. Instead of jumping between
services, websites and charts, the Wozzas bring the Top 10s together in
one glanceable experience.

## The Wozzas

### 📺 WozzaWatch

UK-focused streaming and cinema Top 10s for:

-   Netflix
-   Prime Video
-   Disney+
-   Apple TV+
-   HBO Max
-   BBC iPlayer
-   ITVX
-   Channel 4
-   UK Cinema
-   US Cinema

Where a reliable public official chart is available, WozzaWatch uses it
first. Where one is not available or cannot be refreshed safely, the app
can use a clearly identified fallback such as JustWatch and can retain
the last successful chart rather than replacing good data with a failed
refresh.

### 🎧 WozzaTune

A simple music chart view covering:

-   UK Singles
-   UK Albums
-   US Singles
-   US Albums

UK charts are sourced from the Official Charts Company, with US charts
sourced from Billboard.

### 📰 WozzaNews

Six simple news charts:

-   UK
-   World
-   Politics
-   Business
-   Tech
-   Entertainment

Each category has **one mixed Top 10**, powered by **Sky News, The
Guardian and Metro**.

Stories are freshness-led with soft source balancing, so the chart stays
current while normally including a healthy mix of providers. If one
source fails, the remaining sources can fill the chart. If live data is
incomplete, WozzaNews can retain previously verified stories rather than
publishing a broken chart.

### 📚 WozzaRead

Two UK reading charts:

-   Top 10 Books --- LoveReading
-   Top 10 Audiobooks --- Audible UK

Book covers link to an Amazon UK search and audiobook covers link to
Spotify search.

### 👀 Watchlist & history

Movies, TV and books can be saved into a shared Watchlist.

Items can then be moved into history, with the live charts recognising
things already completed using the handwritten annotations:

-   **watched it!** --- Movies & TV
-   **read it!** --- Books
-   **already listened!** --- Audiobooks

Watchlist ordering can also be rearranged and is stored locally in the
browser.

## Navigation

Wozza is designed primarily for touch and quick navigation.

Alongside the visible controls, the app uses gestures such as swipes,
flicks and double-taps where appropriate. The main Wozza navigation
cycles continuously through:

**WozzaWatch → WozzaTune → Watchlist → WozzaWatch**

There is also an **All Wozzas** menu for jumping around the wider app.

## Automatic updates

Rankings are refreshed automatically with GitHub Actions.

The current workflow runs:

-   **WozzaNews twice an hour** (`:07` and `:37`)
-   **main rankings every 6 hours**
-   **WozzaRead during the automated update workflow**

The update scripts are:

-   `update-data.mjs` --- streaming, cinema and music
-   `update-news.mjs` --- WozzaNews
-   `update-read.mjs` --- books and audiobooks

Generated chart data is stored in JSON and committed back to the
repository automatically.

## Reliability philosophy

Wozza deliberately favours **reliable data over clever-but-fragile
ranking logic**.

The general approach is:

**official source first → validate the result → use an appropriate
fallback where configured → retain the last known-good chart if a
refresh fails**

Where supported, stale/failed refreshes are surfaced in the app rather
than silently replacing a good chart with incomplete data.

For maintenance and debugging, the rule is equally simple:

**diagnostics → evidence → root cause → targeted fix**

## PWA

WozzaWatch includes a web app manifest and service worker and can be
installed as a standalone-style web app on supported devices.

## Project structure

  File                            Purpose
  ------------------------------- -------------------------------------
  `index.html` / `app.js`         WozzaWatch
  `tune.html` / `tune.js`         WozzaTune
  `news.html` / `news.js`         WozzaNews
  `read.html` / `read.js`         WozzaRead
  `my-list.html` / `my-list.js`   Watchlist
  `watched.html` / `watched.js`   Watched / read / listened history
  `styles.css`                    Shared Wozza styling
  `update-data.mjs`               Streaming, cinema and music updater
  `update-news.mjs`               News updater
  `update-read.mjs`               Books and audiobooks updater
  `sw.js`                         Service worker
  `manifest.webmanifest`          PWA manifest

## Sources

Wozza brings together publicly available chart information from a number
of publishers and services. Source ownership remains with the respective
providers. Source links and/or labels are surfaced in the app where
appropriate.

Wozza is a personal project and is not affiliated with the chart
providers, publishers or streaming services it references.

------------------------------------------------------------------------

**App created by Warren (a.k.a Wozza!) - enjoy!**
