import { featuredVideo, youtubeEmbedUrl, youtubeWatchUrl } from "@/content/site.config";
import { ActionLink } from "./action-link";
import { ExternalIcon, PlayIcon } from "./icons";

/**
 * The featured video slot. Everything it renders comes from `featuredVideo` in
 * `content/site.config.ts`: set `youtubeId` there and the placeholder is
 * replaced by a real embed and a working "Watch on YouTube" link.
 */
export function FeaturedSystem() {
  const { youtubeId, title, description } = featuredVideo;

  return (
    <section id="videos" className="border-hair border-t">
      <div className="container-page py-20 sm:py-28">
        <p className="eyebrow">Featured system</p>
        <h2 className="text-cream mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.015em] sm:text-4xl">
          {title}
        </h2>
        <p className="text-cream-dim mt-4 max-w-2xl leading-relaxed">{description}</p>

        <div className="panel mt-10 overflow-hidden">
          <div className="relative aspect-video w-full">
            {youtubeId ? (
              <iframe
                src={youtubeEmbedUrl(youtubeId)}
                title={title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <VideoPlaceholder />
            )}
          </div>

          <div className="border-hair flex flex-col gap-4 border-t px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-muted font-mono text-xs">
              {youtubeId ? `youtube · ${youtubeId}` : "video slot · awaiting first upload"}
            </p>
            {youtubeId ? (
              <ActionLink
                href={youtubeWatchUrl(youtubeId)}
                className="btn btn-secondary btn-sm self-start sm:self-auto"
              >
                Watch on YouTube
                <ExternalIcon />
              </ActionLink>
            ) : (
              <span
                className="btn btn-sm btn-inert self-start sm:self-auto"
                aria-disabled="true"
              >
                Watch on YouTube
                <ExternalIcon />
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoPlaceholder() {
  return (
    <div className="bg-ink-raised absolute inset-0 flex flex-col items-center justify-center gap-4">
      <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="border-hair-hi text-muted bg-panel relative flex h-14 w-14 items-center justify-center rounded-full border"
        aria-hidden="true"
      >
        <PlayIcon className="ml-0.5 h-5 w-5" />
      </div>
      <p className="text-muted relative max-w-xs px-6 text-center font-mono text-xs leading-relaxed">
        No video published yet. The first breakdown lands here.
      </p>
    </div>
  );
}
