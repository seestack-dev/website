# Seestack — website

The official website for **Seestack**: real AI workflows, developer tools, and
automation, demonstrated through working systems.

Live domain: <https://www.seestack.dev>

A single static landing page. No backend, no CMS, no database, no auth, no
analytics.

---

## Stack

| Piece      | Choice                        | Why |
| ---------- | ----------------------------- | --- |
| Framework  | Next.js 16 (App Router)       | First-class Vercel target; file conventions give `robots.txt`, `sitemap.xml`, favicon, and social images with no extra dependencies |
| Language   | TypeScript (strict)           | — |
| Styling    | Tailwind CSS 4                | Design tokens live in `@theme` in one file |
| Fonts      | Geist Sans + Geist Mono       | Self-hosted through `next/font`, so no request leaves the origin |
| Deployment | Vercel                        | — |

Runtime dependencies are `next`, `react`, and `react-dom`. Nothing else.
The page ships one small client component (the mobile menu); everything else is
server-rendered to static HTML at build time.

Requires **Node.js 20.9+** (developed on 22.x).

---

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

### All scripts

| Command             | Does |
| ------------------- | ---- |
| `npm run dev`       | Dev server with hot reload |
| `npm run build`     | Production build (also type-checks) |
| `npm run start`     | Serve the production build locally |
| `npm run lint`      | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

Before pushing, the full check is:

```bash
npm run lint && npm run typecheck && npm run build
```

There is no test suite. The page has no logic worth unit-testing; correctness
is covered by the type checker and the production build.

---

## Content configuration

**Everything you will want to change day to day lives in
[`content/site.config.ts`](content/site.config.ts).** It is the only file you
need to touch to publish a video, add a social link, or switch on the email
list. No component edits required.

It is a plain TypeScript module that ships to the browser, so **never put API
keys, tokens, or anything private in it.**

### Publish the featured video

Set `youtubeId` to the `v=` parameter of the YouTube watch URL:

```ts
export const featuredVideo: FeaturedVideo = {
  youtubeId: "dQw4w9WgXcQ",     // from youtube.com/watch?v=dQw4w9WgXcQ
  title: "The first Seestack breakdown",
  description: "…",
};
```

While `youtubeId` is `null`, the section renders a styled placeholder and the
"Watch on YouTube" button is shown as unavailable. Set it, and the placeholder
is replaced by a real embed (via `youtube-nocookie.com`) and the button starts
working. The header and hero "Watch the latest" buttons follow the same value:
they scroll to the video section until a video exists, then link straight to
YouTube.

### Social, contact, and legal links

```ts
export const links = {
  youtube: null,                              // ← replace with a real URL
  github: "https://github.com/seestack-dev",
  linkedin: null,
  contactEmail: null,                         // plain address, no "mailto:"
  privacy: null,
};
```

Any entry left as `null` renders in the footer as a muted label with a `SOON`
tag rather than a link to nowhere. Fill one in and it becomes a real link.

### Email signup

There is no backend, so the form posts directly to an email provider's hosted
endpoint (Buttondown, Kit/ConvertKit, MailerLite, Beehiiv, …):

```ts
export const emailSignup = {
  formAction: "https://buttondown.email/api/emails/embed-subscribe/seestack",
  emailFieldName: "email",   // whatever field name your provider expects
  disabledNote: "…",
};
```

While `formAction` is `null` the field and button render in full but are
`disabled`, with a visible note explaining that signup is not open. **Nothing
is collected and no submission is faked.** Setting `formAction` turns the same
markup into a working `<form method="post">`.

---

## Project structure

```
app/
  layout.tsx             Metadata, fonts, skip link, page shell
  page.tsx               Section composition, in order
  globals.css            Design tokens, base styles, component classes
  icon.svg               Favicon — the stacked-system mark
  opengraph-image.tsx    Social card (1200×630, generated at build time)
  twitter-image.tsx      Same image, served for twitter:image
  robots.ts              robots.txt
  sitemap.ts             sitemap.xml
components/
  site-header.tsx        Sticky header + primary nav
  mobile-nav.tsx         The one client component: the < md disclosure menu
  hero.tsx               Headline, CTAs, and the hero visual
  system-diagram.tsx     The animated SVG system schematic
  featured-system.tsx    Video slot, driven by site.config
  systems-library.tsx    The three system cards
  method.tsx             Problem → Working System → Reusable Components
  about.tsx
  email-interest.tsx     Email form (disabled until configured)
  site-footer.tsx
  og-image.tsx           Shared social-card renderer
  wordmark.tsx           Mark + name
  action-link.tsx        Anchor that handles external target/rel
  icons.tsx
content/
  site.config.ts         ← all editable content and links
```

### Nav anchors

Every header link points at an `id` on the page: `#systems`, `#videos`,
`#about`, and `#tools` — which is on the *Developer Tooling* card inside the
systems library, since there is no separate tools section yet.

---

## Design

Tokens are defined once, in the `@theme` block at the top of
`app/globals.css`. Change them there and the whole page follows.

| Token                   | Value     | Role |
| ----------------------- | --------- | ---- |
| `--color-ink`           | `#0a0c10` | Page background (dark graphite) |
| `--color-panel`         | `#11151d` | Cards and raised surfaces |
| `--color-hair`          | `#1f2633` | Hairline borders and the grid field |
| `--color-cream`         | `#f1ede5` | Primary type (warm off-white) |
| `--color-muted`         | `#9c968c` | Secondary type |
| `--color-accent`        | `#34ddf5` | Electric cyan — one accent, used sparingly |

Two conventions worth knowing before editing the CSS:

1. **Component classes live in `@layer components`.** Tailwind declares the
   `utilities` layer after `components`, so a utility at the call site
   (`hidden`, `text-accent`, `disabled:bg-transparent`) still wins. Unlayered
   rules would silently beat every utility — that bug is easy to reintroduce.
2. **Animated diagram paths carry `pathLength={100}`,** so the dash values in
   `globals.css` are percentages and behave identically on every path length.

Motion is decorative throughout and is removed wholesale under
`prefers-reduced-motion: reduce`.

The hero diagram is authored twice — `WideDiagram` (≥ 640px, horizontal flow)
and `CompactDiagram` (< 640px, vertical flow) — because a left-to-right
pipeline is unreadable on a phone. Only one is ever in the DOM's accessibility
tree; the other is `display: none`.

---

## Deployment

Vercel auto-detects Next.js; no `vercel.json` and no build configuration are
needed.

### First deploy

1. Import `seestack-dev/website` at [vercel.com/new](https://vercel.com/new).
2. Accept the detected defaults (build `next build`, output `.next`).
3. Deploy.

Or from the command line:

```bash
npx vercel login
npx vercel --prod
```

### Domain

Add `www.seestack.dev` in **Project → Settings → Domains** and point the DNS
record at Vercel. Set `seestack.dev` to redirect to `www.seestack.dev`, since
`https://www.seestack.dev` is the canonical URL declared in the metadata.

If the canonical host ever changes, update `site.url` in
`content/site.config.ts` — the canonical tag, Open Graph URL, `robots.txt`, and
`sitemap.xml` all read from it.

### Environment variables

None. The project requires no environment variables and commits no secrets.
`.env*` files are gitignored.

Every push to `main` deploys to production; other branches get preview URLs.

---

## Scope

Deliberately **not** in this repo: backend, CMS, authentication, blog,
dashboard, payments, analytics, or tracking of any kind. It is a landing page.

If Seestack ships tools later, they get their own repos and are linked from
here.
