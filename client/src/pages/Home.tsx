import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Program from '@/components/Program';
import District from '@/components/District';
import Videos from '@/components/Videos';
import MapSection from '@/components/MapSection';
import Party from '@/components/Party';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  // Scroll to anchor when page loads if URL contains hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Program />
      <District />
      <Videos />
      <MapSection />
      <Party />
      <Contact />
      <Footer />
    </div>
  );
}
