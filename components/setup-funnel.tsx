"use client";

import { useState } from "react";

const SCRIPT_SNIPPET = `claude plugin marketplace add see-stack/claude-code-mods
claude plugin install context-bar@seestack-mods`;

const VAULT_URL = "https://github.com/see-stack/claude-obsidian-memory";
const YOUTUBE_SUB_URL = "https://youtube.com/@seestack?sub_confirmation=1";

export function SetupFunnel({ id = "setup" }: { id?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      setSubmitted(true);
    } catch {
      // Still show the user the script so they are never blocked
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(SCRIPT_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id={id} className="relative overflow-hidden py-16 sm:py-24 border-t border-hair">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-page relative mx-auto max-w-3xl">
        {!submitted ? (
          <div className="panel bg-ink-raised relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16 shadow-2xl">
            <div className="mx-auto max-w-xl text-center">
              <p className="eyebrow inline-block">⚡ FREE DEVELOPER ACCESS</p>
              
              <h2 className="text-cream mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                Get the Claude Code Setup & Custom Mods
              </h2>
              
              <p className="text-cream-dim mt-4 text-base leading-relaxed">
                Enter your details below to unlock the one-line install command,
                the live context-bar HUD mod, and the complete Obsidian memory vault.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 text-left">
                <div>
                  <label htmlFor="funnel-name" className="text-cream-dim block text-xs font-mono uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="funnel-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex"
                    className="border-hair-hi bg-panel text-cream placeholder:text-muted focus:border-accent w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="funnel-email" className="text-cream-dim block text-xs font-mono uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="funnel-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="border-hair-hi bg-panel text-cream placeholder:text-muted focus:border-accent w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none"
                  />
                </div>

                {error && <p className="text-red-400 text-xs font-mono mt-1">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary mt-3 w-full py-3.5 text-base font-semibold cursor-pointer disabled:opacity-50"
                >
                  {loading ? "Preparing Your Setup..." : "Get the Script & Vault →"}
                </button>

                <p className="text-muted text-center text-xs font-mono mt-2">
                  🔒 Zero spam. One-click unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        ) : (
          <div className="panel bg-ink-raised relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14 border border-hair-hi shadow-2xl animate-fade-in">
            {/* Header */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 border border-accent/30 text-accent text-2xl mb-4">
                ✓
              </span>
              <h2 className="text-cream text-3xl font-bold tracking-tight sm:text-4xl">
                Thanks, {name ? name.trim() : "Developer"}!
              </h2>
              <p className="text-cream-dim mt-2 text-base">
                Your setup commands are ready. Copy the script below to install it immediately:
              </p>
            </div>

            {/* Script Box */}
            <div className="mt-8 rounded-xl border border-hair-hi bg-panel p-5">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-hair">
                <span className="text-xs font-mono text-muted tracking-wider uppercase">
                  Terminal Commands (Claude Code CLI)
                </span>
                <button
                  onClick={handleCopy}
                  className="btn btn-secondary py-1 px-3 text-xs font-mono transition-all"
                >
                  {copied ? "✓ Copied!" : "📋 Copy Command"}
                </button>
              </div>
              <pre className="font-mono text-accent-hi text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap selection:bg-accent/30">
                {SCRIPT_SNIPPET}
              </pre>
            </div>

            {/* Starter Vault Link */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={VAULT_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary flex-1 justify-center py-3 text-sm"
              >
                📂 Open Obsidian Starter Vault on GitHub ↗
              </a>
            </div>

            {/* Huge YouTube Subscribe Box */}
            <div className="mt-10 rounded-2xl border-2 border-red-500/40 bg-gradient-to-br from-red-950/20 via-panel to-panel p-6 sm:p-8 text-center relative overflow-hidden">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-medium text-red-400 mb-3">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M5.2 3.3a.7.7 0 0 1 1.06-.6l6 4.1a.7.7 0 0 1 0 1.16l-6 4.34a.7.7 0 0 1-1.06-.6V3.3Z" />
                </svg>
                YOUTUBE @SEESTACK
              </div>

              <h3 className="text-cream text-2xl sm:text-3xl font-bold tracking-tight">
                Subscribe for More Free Tools & Weekly Mods
              </h3>

              <p className="text-cream-dim mx-auto mt-3 max-w-lg text-sm sm:text-base leading-relaxed">
                Every week, I build and release new autonomous agent workflows,
                terminal UI mods, and Obsidian PKM systems live. Subscribe so you don't miss next week's drop!
              </p>

              <div className="mt-6">
                <a
                  href={YOUTUBE_SUB_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-base px-8 py-4 shadow-lg shadow-red-600/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg viewBox="0 0 16 16" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M5.2 3.3a.7.7 0 0 1 1.06-.6l6 4.1a.7.7 0 0 1 0 1.16l-6 4.34a.7.7 0 0 1-1.06-.6V3.3Z" />
                  </svg>
                  Subscribe to @SeeStack on YouTube
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
