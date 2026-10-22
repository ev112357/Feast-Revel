# Feast & Revel landing page

Mock-up landing page for Feast & Revel, a restaurant in Ottawa's ByWard Market. Static HTML, CSS and JS: no bundler,
no framework, no package.json, no external fonts, CDNs or scripts. Everything loads from this folder.

Treat this file as the template for every future change. If the owner changes the brief, update this file in the same commit.

## Design template

- Look: clean, professional, modern. Plenty of white space, one idea per section, no clutter.
- Page background is white. Banner and call-to-action band are fern green. Accents are black (buttons, rules, stars, footer).
- Colours live as variables in `:root` in `styles.css`. Never hard-code a colour anywhere else.

  | Token | Value | Use |
  | --- | --- | --- |
  | `--fern` | `#4f7942` | header banner, call-to-action band, eyebrow text |
  | `--paper` | `#ffffff` | page background |
  | `--ink` | `#111111` | text, black buttons, rules, stars, footer |
  | `--muted` | `#555555` | secondary text |
  | `--line` | `#e4e4e4` | thin dividers and card borders |

- Text on fern green is white only (5.1:1 contrast). Buttons on fern are black or white.
- Type: serif headings (`--serif`), system sans body (`--sans`). Pill buttons, 14px corners on images and cards.
- Light theme only. Do not add a dark mode.
- Spelling is Canadian (colour, neighbourhood).

## Page order

1. Fern green banner (sticky): name, nav links, **Reserve a table** button
2. Hero: headline, one line of copy, Reserve button
3. Photo slideshow
4. Opening hours (breakfast and dinner columns)
5. Reviews
6. Fern green call-to-action band with a Reserve button
7. Black footer: address, phone

## Must keep

- A Reserve button in the banner, hero, hours section and call-to-action band. Each is a plain link to the OpenTable page,
  `https://www.opentable.ca/r/feast-and-revel-ottawa`, opening in a new tab. To change the booking link, change all four in `index.html`.
- Slideshow: slides scroll on their own, with previous, next, pause and dot controls. It pauses on hover, on keyboard focus,
  while touched, when off screen, and never starts on its own for visitors who prefer reduced motion. Swiping must still work with no JS.
- Hours: one row per day (`data-day` 0 is Sunday). The script marks today's row.
- Reviews: three cards in a row on desktop, stacked on phones.
- Works at 375px wide with no sideways scroll. Everything is reachable by keyboard. Keep visible focus outlines and alt text.

## Content rules

- Name, address (325 Dalhousie Street, Ottawa, ON K1N 7G1, inside the Andaz Ottawa ByWard Market), phone and the booking link
  come from public listings (OpenTable, Ottawa Tourism, AAA). The owner still needs to confirm them.
- Hours are from the OpenTable listing: breakfast daily, dinner Tuesday to Saturday. Other listings disagree, so confirm with the restaurant.
- Never invent ratings, awards, press quotes, numbers or testimonials. Reviews must be real, from a guest, used with permission,
  and credited. Sample reviews carry a "Sample" tag until replaced.
- Photos: the slideshow uses generated placeholders (`images/slide-N.svg`). Replace them only with photos the owner has the rights to
  (their own, or licensed). Do not copy guests' Google review photos, and do not work around a site that blocks automated access.
  Use JPG or WebP, 1600 px wide or more, ideally under 300 KB each, 16:9 or wider crops well.
  Update the `src`, the `alt` (describe what is in the photo) and the caption in `index.html`.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | all page content |
| `styles.css` | colour tokens, layout, buttons, slideshow, hours table |
| `main.js` | slideshow and today's row in the hours table |
| `images/` | slideshow photos (placeholders for now) |

## Before finishing a change

- Open the page at 375px and at 1280px wide; check the slideshow and the keyboard Tab order.
- Keep comments short and plain, like quick notes: say why, not what. No em dashes.
- The page is marked `noindex` while it is a mock-up. Remove that tag when the real site goes live.
