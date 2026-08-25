import { About } from "@/components/about";
import { EmailInterest } from "@/components/email-interest";
import { FeaturedSystem } from "@/components/featured-system";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SystemsLibrary } from "@/components/systems-library";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <FeaturedSystem />
        <SystemsLibrary />
        <Method />
        <About />
        <EmailInterest />
      </main>
      <SiteFooter />
    </>
  );
}
