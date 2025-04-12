import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 100) {
          current = section.getAttribute("id") || "";
        }
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-95 shadow-md z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo/Name */}
          <button 
            onClick={() => handleNavClick("hero")} 
            className="text-primary font-serif font-bold text-xl md:text-2xl"
          >
            Иванов Иван Иванович
          </button>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="md:hidden text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <button 
              onClick={() => handleNavClick("about")} 
              className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            >
              О кандидате
            </button>
            <button 
              onClick={() => handleNavClick("district")} 
              className={`nav-link ${activeSection === "district" ? "active" : ""}`}
            >
              Округ
            </button>
            <button 
              onClick={() => handleNavClick("program")} 
              className={`nav-link ${activeSection === "program" ? "active" : ""}`}
            >
              Программа
            </button>
            <button 
              onClick={() => handleNavClick("videos")} 
              className={`nav-link ${activeSection === "videos" ? "active" : ""}`}
            >
              Видео
            </button>
            <button 
              onClick={() => handleNavClick("party")} 
              className={`nav-link ${activeSection === "party" ? "active" : ""}`}
            >
              Партия
            </button>
            <button 
              onClick={() => handleNavClick("contact")} 
              className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
            >
              Контакты
            </button>
            <Button 
              onClick={() => handleNavClick("contact")} 
              className="bg-primary hover:bg-secondary text-white"
            >
              Поддержать
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="bg-white md:hidden">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <button 
              onClick={() => handleNavClick("about")} 
              className="text-primary hover:text-secondary transition py-2 border-b border-tertiary"
            >
              О кандидате
            </button>
            <button 
              onClick={() => handleNavClick("district")} 
              className="text-primary hover:text-secondary transition py-2 border-b border-tertiary"
            >
              Округ
            </button>
            <button 
              onClick={() => handleNavClick("program")} 
              className="text-primary hover:text-secondary transition py-2 border-b border-tertiary"
            >
              Программа
            </button>
            <button 
              onClick={() => handleNavClick("videos")} 
              className="text-primary hover:text-secondary transition py-2 border-b border-tertiary"
            >
              Видео
            </button>
            <button 
              onClick={() => handleNavClick("party")} 
              className="text-primary hover:text-secondary transition py-2 border-b border-tertiary"
            >
              Партия
            </button>
            <button 
              onClick={() => handleNavClick("contact")} 
              className="text-primary hover:text-secondary transition py-2 border-b border-tertiary"
            >
              Контакты
            </button>
            <Button 
              onClick={() => handleNavClick("contact")} 
              className="bg-primary hover:bg-secondary text-white"
            >
              Поддержать
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
