import { featuredVideo, links, youtubeEmbedUrl, youtubeWatchUrl } from "@/content/site.config";
import { ActionLink } from "./action-link";
import { ExternalIcon, GitHubIcon, PlayIcon } from "./icons";

/**
 * The featured system slot. Renders the open-source vault architecture card.
 * If a `youtubeId` is configured in `content/site.config.ts`, it also embeds the video player.
 */
export function FeaturedSystem() {
  const { youtubeId, title, description, repoUrl } = featuredVideo;

  return (
    <section id="vault" className="border-hair border-t">
      <div className="container-page py-20 sm:py-28">
        <p className="eyebrow">Featured system</p>
        <h2 className="text-cream mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.015em] sm:text-4xl">
          {title}
        </h2>
        <p className="text-cream-dim mt-4 max-w-2xl leading-relaxed">{description}</p>

        {youtubeId && (
          <div className="panel mt-10 overflow-hidden">
            <div className="relative aspect-video w-full">
              <iframe
                src={youtubeEmbedUrl(youtubeId)}
                title={title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="border-hair flex flex-col gap-4 border-t px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-muted font-mono text-xs">
                youtube · {youtubeId}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {repoUrl && (
                  <ActionLink
                    href={repoUrl}
                    className="btn btn-primary btn-sm self-start sm:self-auto"
                  >
                    <GitHubIcon />
                    Get the Vault
                    <ExternalIcon />
                  </ActionLink>
                )}
                <ActionLink
                  href={youtubeWatchUrl(youtubeId)}
                  className="btn btn-secondary btn-sm self-start sm:self-auto"
                >
                  Watch on YouTube
                  <ExternalIcon />
                </ActionLink>
              </div>
            </div>
          </div>
        )}

        {repoUrl && (
          <div className={`panel ${youtubeId ? "mt-6" : "mt-10"} flex flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-7`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="eyebrow text-accent">Open-Source Vault</span>
                <span className="text-muted font-mono text-xs">MIT License</span>
              </div>
              <h3 className="text-cream mt-2 text-xl font-semibold tracking-[-0.01em]">
                Claude Obsidian Memory
              </h3>
              <p className="text-cream-dim mt-2 max-w-xl text-sm leading-relaxed">
                The persistent context and auto-memory system for Claude Code. Includes daily journal automations, bash scripts, and symlink topology.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <ActionLink
                href={repoUrl}
                className="btn btn-primary self-start whitespace-nowrap sm:self-center"
              >
                <GitHubIcon />
                Star & Clone on GitHub
                <ExternalIcon />
              </ActionLink>
              {links.youtube && (
                <ActionLink
                  href={links.youtube}
                  className="btn btn-secondary self-start whitespace-nowrap sm:self-center"
                >
                  <PlayIcon />
                  Explore Channel
                  <ExternalIcon />
                </ActionLink>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
