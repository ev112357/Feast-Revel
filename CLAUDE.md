# Feast & Revel landing page

Mock-up landing page for Feast & Revel, a restaurant in Ottawa's ByWard Market. Static HTML, CSS and JS: no bundler,
no framework, no package.json, no external fonts, CDNs or scripts. Everything loads from this folder.

Treat this file as the template for every future change. If the owner changes the brief, update this file in the same commit.

## Design template

- Look: clean, professional, modern. Plenty of white space, one idea per section, no clutter.
- Page background is white. Banner and call-to-action band are green. Accents are black (buttons, rules, stars, footer).
- The green is Maximum Green, `#5e8c31`, the swatch of that name in the owner's `green_shades.svg`. It replaced the first
  choice, fern green `#4f7942`. To change it, edit `--green` only.
- Colours live as variables in `:root` in `styles.css`. Never hard-code a colour anywhere else
  (the placeholder SVGs in `images/` are the one exception).

  | Token | Value | Use |
  | --- | --- | --- |
  | `--green` | `#5e8c31` | header banner, call-to-action band |
  | `--paper` | `#ffffff` | page background |
  | `--ink` | `#111111` | text, black buttons, rules, stars, footer |
  | `--muted` | `#555555` | secondary text |
  | `--line` | `#e4e4e4` | thin dividers and card borders |

- Text on green is black (5.3:1 contrast). White on this green is only 4.0:1, so do not put small white text on it.
  Buttons on green are black.
- Text on photos is white over a dark gradient (`.hero__text`), so it stays readable on any photo.
- Type: serif headings (`--serif`), system sans body (`--sans`). Pill buttons, 14px corners on cards.
- Light theme only. Do not add a dark mode.
- Spelling is Canadian (colour, neighbourhood).

## Page order

1. Green banner (sticky): name, nav links, **Reserve a table** button
2. Hero: a full-width photo slideshow directly under the banner, edge to edge. The headline, one line of copy and the
   Reserve button float on top of the photos. The slideshow controls sit on the photos too.
3. Opening hours (breakfast and dinner columns)
4. Reviews
5. Green call-to-action band with a Reserve button
6. Black footer: address, phone

## Must keep

- Any text in the same area as the photos floats on top of them. Never move it below or beside the photos.
- A Reserve button in the banner, hero, hours section and call-to-action band. Each is a plain link to the OpenTable page,
  `https://www.opentable.ca/r/feast-and-revel-ottawa`, opening in a new tab. To change the booking link, change all four in `index.html`.
- Slideshow: slides scroll on their own, with previous, next, pause and dot controls. It pauses on hover, on keyboard focus,
  while touched, when off screen, and never starts on its own for visitors who prefer reduced motion. Swiping must still work with no JS.
  The first slide is the dining room photo.
- Hours: one row per day (`data-day` 0 is Sunday). The script marks today's row.
- Reviews: three cards in a row on desktop, stacked on phones.
- Works at 375px wide with no sideways scroll. Everything is reachable by keyboard. Keep visible focus outlines and alt text.

## Content rules

- Name, address (325 Dalhousie Street, Ottawa, ON K1N 7G1, inside the Andaz Ottawa ByWard Market), phone and the booking link
  come from public listings (OpenTable, Ottawa Tourism, AAA). The owner still needs to confirm them.
- Hours are from the OpenTable listing: breakfast daily, dinner Tuesday to Saturday. Other listings disagree, so confirm with the restaurant.
- Never invent ratings, awards, press quotes, numbers or testimonials. Reviews must be real, from a guest, used with permission,
  and credited. Sample reviews carry a "Sample" tag until replaced.
- Photos: `images/slide-1.jpg` is a photo the owner supplied. Slides 2 to 5 are generated placeholders (`images/slide-N.svg`).
  Replace them only with photos the owner has the rights to (their own, or licensed). Do not copy guests' Google review photos,
  and do not work around a site that blocks automated access.
  The photos span the full width of the page, so use JPG or WebP at 2000 px wide or more (slide 1 is only 1360 px and looks soft
  on large screens), ideally under 400 KB each. Landscape works best; the crop keeps the middle and a little below.
  Update the `src`, the `alt` (describe what is in the photo) and the caption in `index.html`.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | all page content |
| `styles.css` | colour tokens, layout, buttons, hero slideshow, hours table |
| `main.js` | slideshow and today's row in the hours table |
| `images/` | slideshow photos (one real photo, the rest placeholders) |

## Before finishing a change

- Open the page at 375px and at 1280px wide; check the slideshow and the keyboard Tab order.
- Keep comments short and plain, like quick notes: say why, not what. No em dashes.
- The page is marked `noindex` while it is a mock-up. Remove that tag when the real site goes live.
