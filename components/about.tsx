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
              About Seestack.
            </h2>
            <p className="text-accent mt-2 font-mono text-xs uppercase tracking-wider">
              Engineering Lab · Developer Tooling Studio
            </p>
          </div>

          <div className="text-cream-dim max-w-2xl space-y-5 leading-relaxed lg:pt-1">
            <p>
              Seestack is an independent engineering lab and developer tooling
              studio focused on autonomous coding agents, persistent memory
              architectures, and verifiable terminal workflows.
            </p>
            <p>
              The systems come out of real production engineering work and the
              AI tooling used to ship code day to day — running live on actual
              projects with the rough edges left visible.
            </p>
            <p>
              The editorial rule is strict: if a workflow or tool has not been
              built, run, and battle-tested in a live terminal, it does not get
              published here. Zero wrappers, plain markdown, verifiable runs.
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
