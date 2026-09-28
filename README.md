# BIFF x NESPRESSO — HQ Guide

Internal production guide site for the HQ team: Schedule, Venue Information, Meal Options, Uber Guide, and What Else Busan. Built as a static site for GitHub Pages.

## Deploying to GitHub Pages

1. Go to the repository: `gdmc-global/BIFF-x-NESPRESSO-HQ-GUIDE`.
2. Click **Add file → Upload files**.
3. Drag in **every file from this folder at once** (do not upload folders — everything must be flat, directly in the repo root). Selecting all files in Finder/Explorer and dragging them together works well.
4. Commit directly to the `main` branch.
5. Go to **Settings → Pages**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`, and save.
6. The site will publish at `https://gdmc-global.github.io/BIFF-x-NESPRESSO-HQ-GUIDE/`.

**Important: keep every file flat, at the repo root.** No subfolders — GitHub's web upload UI does not reliably preserve folder structure, and this site's file paths assume everything sits in one directory.

## Pages

- `index.html` — landing page with links to all five sections
- `schedule.html` — team-tab switcher (HQ / Vandy / Photo / VX) with a Day 0–Day 6 column schedule, powered by `schedule-data.js`
- `venue.html` — a live Google Maps embed showing Cinema Center, HQ Office, HQ Hotel, and Paradise Hotel together, plus hotel details (Lavi de Atlan + Paradise Hotel), HQ office (Bizup Lounge), and office facilities
- `meal.html` — a live Google Maps embed per area (Cinema Center, Lavi de Atlan Hotel, Bizup Lounge) showing the venue and its restaurant options together, plus restaurant cards that link directly to Google Maps
- `uber.html` — step-by-step Uber for Business setup and usage guide
- `what-else-busan.html` — curated maps for off-duty time

## A note on the WiFi facility photo

`facility-wifi.jpg` (in the Venue Information page's facility grid) is a photo of the Bizup Lounge WiFi network card, and it shows the network ID and password as printed on the card. If this repository is public, that credential will be visible to anyone who opens the site. If you'd rather not publish it, let me know and I can crop or redact the image, or swap it for a placeholder before you deploy.
