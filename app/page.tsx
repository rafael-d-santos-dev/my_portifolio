import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Work } from '@/components/sections/work';
import { AiCaseStudies } from '@/components/sections/ai-case-studies';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Process } from '@/components/sections/process';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-lavender focus:shadow-lift"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Work />
        <AiCaseStudies />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
