import { latestWatchHref, nav } from "@/content/site.config";
import { ActionLink } from "./action-link";
import { PlayIcon } from "./icons";
import { MobileNav } from "./mobile-nav";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  return (
    <header className="border-hair bg-ink/85 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="Seestack — home" className="rounded-sm">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-cream-dim hover:text-cream text-sm transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ActionLink
            href={latestWatchHref}
            className="btn btn-primary btn-sm hidden md:inline-flex"
          >
            <PlayIcon />
            Watch the latest
          </ActionLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
