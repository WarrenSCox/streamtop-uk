# WozzaWatch v4.6

Data reliability update. Keeps the v4.5 swipe + double-tap UX.

## Changes
- Prime Movies: tries multiple official Prime UK page variants first, then a readability transport fallback for the same public Prime UK page. Only labels it Official Prime when 10 UK titles are recovered.
- Prime workflow logs now say whether the UK heading was present and how many title candidates were parsed.
- ITVX / other short JustWatch charts: preserves the ranked chart results and backfills missing positions from JustWatch UK provider popularity, up to 10 unique titles.
- Footer/cache version bumped to v4.6.

## Quick update
At minimum replace `update-data.mjs` and run **Update WozzaWatch rankings** manually.

To visibly confirm the deployed build is v4.6, also replace `index.html` and `sw.js`.

Do not manually edit `data/rankings.json`; the workflow generates it.
