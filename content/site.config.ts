/**
 * Seestack site configuration
 * =============================================================================
 * This is the single place to edit the content that changes over time:
 * the featured video, the external links in the header/footer, and the email
 * signup provider.
 *
 * Nothing here is a secret. Everything in this file ships to the browser, so
 * never put API keys or tokens in it — use environment variables for those.
 *
 * Anything set to `null` renders as a clearly-marked placeholder instead of a
 * broken or fabricated link. Fill a value in and the UI upgrades itself to a
 * real link automatically. No component changes required.
 * =============================================================================
 */

/** Core brand + metadata values. Used by `app/layout.tsx` and the sitemap. */
export const site = {
  name: "Seestack",
  /** Canonical origin. No trailing slash. */
  url: "https://www.seestack.dev",
  tagline: "See how the system actually works.",
  description:
    "Explore real AI workflows, developer tools, and automation through working systems.",
  author: "Said Nasser",
} as const;

/** Primary navigation. Each `href` must match an `id` rendered on the page. */
export const nav = [
  { label: "Systems", href: "#systems" },
  { label: "Videos", href: "#videos" },
  { label: "Tools", href: "#tools" },
  { label: "About", href: "#about" },
] as const;

/* -------------------------------------------------------------------------- */
/* Featured video                                                             */
/* -------------------------------------------------------------------------- */

export type FeaturedVideo = {
  /**
   * The 11-character YouTube video ID — the `v=` part of a watch URL.
   * e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ this is "dQw4w9WgXcQ".
   *
   * While this is `null` the section renders a styled video placeholder and
   * the "Watch on YouTube" action is shown as not-yet-available.
   */
  youtubeId: string | null;
  title: string;
  description: string;
};

export const featuredVideo: FeaturedVideo = {
  youtubeId: null,
  title: "The first Seestack breakdown",
  description:
    "Each breakdown starts with a problem worth solving, builds the system that solves it on screen, and ends with the parts you can lift into your own setup.",
};

/** Public watch URL for a YouTube video ID. */
export function youtubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

/**
 * Privacy-friendlier embed host. `youtube-nocookie.com` does not set tracking
 * cookies until playback starts.
 */
export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

/* -------------------------------------------------------------------------- */
/* External links                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Outbound links used by the header and footer.
 *
 * `null` means "not published yet" — the footer renders the label as a muted
 * placeholder rather than inventing a destination. Replace a `null` with a real
 * URL to turn it into a working link.
 */
export const links = {
  youtube: null as string | null,
  github: "https://github.com/seestack-dev" as string | null,
  linkedin: null as string | null,
  /** A plain email address, without the `mailto:` prefix. */
  contactEmail: null as string | null,
  /** Path or URL to a privacy policy, once one exists. */
  privacy: null as string | null,
};

/**
 * Where "Watch the latest" points. Falls back to scrolling to the video
 * section while no video is configured, so the button is never a dead end.
 */
export const latestWatchHref: string = featuredVideo.youtubeId
  ? youtubeWatchUrl(featuredVideo.youtubeId)
  : links.youtube ?? "#videos";

/* -------------------------------------------------------------------------- */
/* Email interest                                                             */
/* -------------------------------------------------------------------------- */

/**
 * The email capture form posts directly to an email provider's hosted form
 * endpoint (Buttondown, Kit/ConvertKit, MailerLite, Beehiiv, ...). There is no
 * backend in this project and none is needed.
 *
 * While `formAction` is `null`:
 *   - the field and button still render, fully styled
 *   - both are `disabled`, so nothing can be submitted
 *   - a visible note explains that signup is not open yet
 * Nothing pretends to succeed.
 *
 * To turn it on, paste your provider's form action URL below and, if the
 * provider expects a different field name than `email`, update `emailFieldName`.
 */
export const emailSignup = {
  formAction: null as string | null,
  emailFieldName: "email",
  /** Shown under the form while `formAction` is null. */
  disabledNote:
    "Signup isn't open yet. The list opens alongside the first published system.",
};
