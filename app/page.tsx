import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Work } from '@/components/sections/work';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Process } from '@/components/sections/process';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
