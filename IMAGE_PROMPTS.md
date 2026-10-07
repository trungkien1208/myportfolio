# Image requests for the pastel redesign

The site ships and works without these. Each one replaces a placeholder with something more personal.
Generate, export, drop the file at the path given, then make the one-line code change listed.

Palette for every prompt (hex), **pink + mint** (updated 2026-10-07, yellow + purple is retired):
primary pink `#FFB3CF`, soft pink `#FFDCE8`, mint `#B8ECD6`, deep mint `#2F8F6B`, blush background `#FFF6F8`,
support only: sky `#CFE4FF`, peach `#FFD2BF`. Outline ink `#3B2433` (plum, not purple).
Avoid yellow and violet as main colours, they read as the COGINGON app.
Illustrated asset style: soft 3D clay / vinyl-toy look, thick dark ink outline, flat pastel shading, friendly, no text unless stated.
Portrait exception: photographic cutout from the original photo. Preserve facial geometry and camera texture; use only a discreet white edge and a soft CSS shadow.
It should sit next to the COGINGON mascot (`public/quests/cogingon/cogi-cheerful.webp`) without clashing.

## Render status (2026-10-07)

- Social share card: **DONE.** Regenerated with built-in ImageGen in pink + mint, saved to `public/og-image.png` at 1200 × 630 and under 300 KB. Vietnamese name verified after a targeted text correction. Final prompt: `output/imagegen/og-image-pink-mint.prompt.txt`; full-resolution master: `output/imagegen/og-image-pink-mint-master.png`.
- Favicon set: done. Claude recoloured `public/favicon.svg` to the pink tile and re-exported `favicon.ico` and `apple-touch-icon.png`. Nothing to do.
- Hero portrait: **UPDATED TO IMG_5058.** Built-in ImageGen edited a crop of `IMG_5058.HEIC`, retaining the photo's right-facing angle, pink hair and pink striped shirt with face-preservation constraints. Saved to `public/me/kien-photo-5058.webp` at 800 × 800 with alpha transparency and ~8% padding, connected to `about.avatarImage`. Thin white cutout edge; no coloured circular badge. Prompt: `output/imagegen/kien-photo-5058.prompt.txt`; master: `output/imagegen/kien-photo-5058-master.png`. Earlier portrait variants remain unused.
- Day-job stickers: optional, awaiting scope selection.

---

## 1. Hero portrait sticker (highest impact)

- **File:** `public/me/kien-photo-5058.webp`, 800 × 800, transparent background, subject centred, ~8% padding.
- **Wire it up:** in `src/portfolio.js` set `about.avatarImage: asset('me/kien-photo-5058.webp')`.
  It replaces the portrait in the hero collage with a photographic cutout and soft shadow.
- **Input:** Kiên's `IMG_5058.HEIC` photo in Downloads. Use the person in the middle with pink short hair and a pink/white striped baseball shirt. Preserve the original file. The HEIC is converted for tool compatibility; generation uses a 790 × 1060 crop at (1080, 1940) in the auto-oriented 3024 × 4032 photograph.
- **Prompt:**
  > Extract the person with pink hair from the original photo as a photographic head-and-shoulders
  > cutout. Preserve the original face shape, forehead, nose, lips, cheek fullness, chin and jaw;
  > retain the original right-facing angle, pink short hair, hoop earring, glasses behind the head,
  > black undershirt and pink/white striped baseball shirt with its existing chest patches.
  > Keep photographic skin texture and daylight. Change only the crop and background removal.
  > Use a discreet 2–3px white die-cut edge at 800px. No illustration, face reshaping, beauty filter,
  > pastel circle, coloured ring, dark outline, added smile or invented facial details.
  > Remove the plants, yellow wall, window and street background. Crop to upper torso; true alpha
  > transparency and ~8% padding.

## 2. Social share image (rendered in pink + mint)

- **File:** `public/og-image.png`, 1200 × 630, no transparency. Keep it under ~300 KB.
- **Wire it up:** nothing, `index.html` already points at `/og-image.png`.
- **Current state:** pink + mint share card is saved and connected.
- **Prompt:**
  > Website share card, 1200x630, blush #FFF6F8 background with a faint dot grid. Left half: the
  > text "Lưu Trung Kiên" (bold rounded grotesque, plum ink #3B2433) and below it "Senior Front-End
  > Engineer" in a smaller weight. Right half: a playful collage of tilted stickers, mostly pastel
  > pink #FFB3CF and mint #B8ECD6 (an iPhone, a browser window, a star burst reading "8+ years"),
  > thick plum outlines, hard offset shadows, small mint sparkles. No yellow, no purple.
  > Keep 60px safe margins. Text must be spelled exactly, with Vietnamese accents.

## 3. Favicon set (done, pink, no action)

- **Files:** `public/favicon.svg` (or `favicon-32.png`), `public/apple-touch-icon.png` 180 × 180, and refresh `public/favicon.ico` (32 × 32).
- **Wire it up:** in `index.html` add
  `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` and
  `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`.
- **Prompt:**
  > App icon: lowercase letter "k" in a heavy rounded grotesque, ink #3B2433, on a pink #FFB3CF
  > rounded square tilted -6°, 2px ink outline, small hard offset shadow. Flat, readable at 16px.
  > This matches the nav logo mark already on the site.

## 4. Optional: day-job card stickers

Today each day-job card uses a Phosphor icon in a pastel tile. If you want illustrations instead,
make six 256 × 256 transparent stickers in the style above and save them to `public/work/`:

| File | Subject |
|---|---|
| `kiosk.webp` | iPad kiosk on a stand with a receipt printing out |
| `admin.webp` | small dashboard window with a bar chart |
| `platform.webp` | heart with a heartbeat line, hospital cross |
| `bank.webp` | classical bank building, tiny Teams-like chat bubble |
| `radiology-ca.webp` | friendly x-ray bone |
| `radiology-fr.webp` | medical kit with a small beret on top |

Wire-up: add `image: '/work/kiosk.webp'` etc. to each entry in `projects` (`src/portfolio.js`) and
render it in `src/components/DayJob/DayJob.jsx` in place of `<Icon />` inside `.job__icon`
(set the tile to 64 × 64 and drop its background).

---

Do **not** generate fake photos of hospitals, clients or app screens. Every product screenshot on
the site is real (COGINGON App Store frames, Tabi no Chan anonymised portal screens).
