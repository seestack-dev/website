import { Metadata } from "next";
import { SetupFunnel } from "@/components/setup-funnel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Get Claude Code Mods & Tools — See Stack",
  description:
    "Unlock the one-line install command, context-bar mod, and Obsidian starter vault.",
};

export default function ModsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 min-h-[75vh] flex items-center justify-center">
        <SetupFunnel id="mods-page" />
      </main>
      <SiteFooter />
    </>
  );
}
