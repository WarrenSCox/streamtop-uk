# WozzaWatch v4.6.2

Stable v4.6.1 UX/data-loading baseline plus a stronger Prime UK official-source fetch.

Prime Movies now tries:
1. Prime Video public UK page directly.
2. The same official Prime page rendered through Jina Reader with browser/no-cache settings.
3. A strict search transport fallback that is only accepted when it contains both the official Prime movie URL and the exact “Top 10 movies in the UK” heading.

It never substitutes a US Prime chart. If all official methods fail, the existing JustWatch UK fallback remains.
