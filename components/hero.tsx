import { latestWatchHref } from "@/content/site.config";
import { ActionLink } from "./action-link";
import { ArrowIcon, PlayIcon } from "./icons";
import { SystemDiagram } from "./system-diagram";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative grid field behind the hero content. */}
      <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container-page relative grid gap-14 pt-16 pb-20 sm:pt-24 sm:pb-28 xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] xl:items-center xl:gap-16">
        <div>
          <p className="eyebrow">AI workflows · Developer tools · Automation</p>

          <h1 className="text-cream mt-5 text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.02em] sm:text-6xl lg:text-[4rem]">
            See how the system{" "}
            <span className="text-accent">actually works.</span>
          </h1>

          <p className="text-cream-dim mt-6 max-w-xl text-lg leading-relaxed">
            Real AI workflows, developer tools, and automation—demonstrated
            through working systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ActionLink href={latestWatchHref} className="btn btn-primary">
              <PlayIcon />
              Watch the latest breakdown
            </ActionLink>
            <a href="#systems" className="btn btn-secondary group">
              Explore the systems
              <ArrowIcon className="h-[1em] w-[1em] transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-2xl xl:max-w-none xl:pl-2">
          <SystemDiagram />
        </div>
      </div>
    </section>
  );
}
