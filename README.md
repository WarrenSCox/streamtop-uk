# StreamTop UK

A free, installable PWA for UK streaming popularity charts across Netflix, Prime Video, Disney+, Apple TV+, HBO Max, BBC iPlayer and ITVX.

## What it does

- One-tap provider switching
- Separate Top 10 Movies and Top 10 TV charts
- UK-only results
- Uses JustWatch popularity data for a consistent ranking source
- Installable on Android/iPhone as a PWA
- No API key, account or paid hosting required

## Run locally

Because browser security features do not allow all PWA behaviour from `file://`, run a tiny local server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Free deployment

### GitHub Pages
1. Create a new repository.
2. Upload these files to the repository root.
3. Go to Settings → Pages.
4. Set Source to “Deploy from a branch”, branch `main`, folder `/ (root)`.
5. GitHub will give you a public HTTPS URL.

On Android/Chrome, open the site and choose **Add to Home screen / Install app**.

### Cloudflare Pages
You can also drag this folder into Cloudflare Pages for free static hosting.

## Data note

The app calls JustWatch's public-facing GraphQL endpoint used by its web experience. This is an unofficial integration and could change. The UI therefore includes direct JustWatch chart links as a fallback. These are popularity rankings and may differ from each streamer's proprietary in-app chart.
