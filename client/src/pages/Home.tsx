import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import District from "@/components/District";
import Program from "@/components/Program";
import Videos from "@/components/Videos";
import Party from "@/components/Party";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80, // Adjust for header height
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <District />
      <Program />
      <Videos />
      <Party />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
