import { links, site } from "@/content/site.config";
import { ActionLink } from "./action-link";
import { ExternalIcon } from "./icons";

export function About() {
  return (
    <section id="about" className="border-hair border-t">
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="text-cream mt-4 text-3xl font-semibold tracking-[-0.015em] sm:text-4xl">
              Seestack is built by {site.author}.
            </h2>
          </div>

          <div className="text-cream-dim max-w-2xl space-y-5 leading-relaxed lg:pt-1">
            <p>
              The systems come out of real software engineering work and the AI
              tooling used to do it day to day — the same setups, running on
              real projects, with the rough edges left visible.
            </p>
            <p>
              That is the whole editorial rule: if something has not been built
              and run, it does not get published here. What gets demonstrated is
              what is actually in use, including the parts that are still
              awkward.
            </p>
            <p>
              Seestack is a one-person operation right now. Any tools it
              releases will show up on this page when they exist, not before.
            </p>

            {links.cal && (
              <div className="panel border-hair-hi mt-8 p-6 sm:p-7">
                <div className="flex items-center gap-2">
                  <span className="eyebrow text-accent">1-on-1 Sessions</span>
                  <span className="text-muted font-mono text-xs">60 min · Live Screen-Share</span>
                </div>
                <h3 className="text-cream mt-2 text-xl font-semibold tracking-[-0.01em]">
                  AI Agent & Workflow Architecture Audit
                </h3>
                <p className="text-cream-dim mt-2 text-sm leading-relaxed">
                  Book a private 60-minute session to design, audit, and configure your local AI agent workflows, memory systems, and Obsidian setup live on your machine.
                </p>
                <div className="mt-5">
                  <ActionLink
                    href={links.cal}
                    className="btn btn-primary btn-sm"
                  >
                    Book 1-on-1 Session on Cal.com
                    <ExternalIcon />
                  </ActionLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
