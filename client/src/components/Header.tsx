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
            className="font-sans-bold text-lg transform transition-all duration-300 hover:scale-105 hover:text-secondary"
          >
            Имя кандидата
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
              className="text-gray-700 hover:text-primary transform transition-all duration-300 hover:scale-105"
            >
              О кандидате
            </button>
            <button 
              onClick={() => handleNavClick("district")} 
              className="text-gray-700 hover:text-primary transform transition-all duration-300 hover:scale-105"
            >
              Округ
            </button>
            <button 
              onClick={() => handleNavClick("program")} 
              className="text-gray-700 hover:text-primary transform transition-all duration-300 hover:scale-105"
            >
              Программа
            </button>
            <button 
              onClick={() => handleNavClick("videos")} 
              className="text-gray-700 hover:text-primary transform transition-all duration-300 hover:scale-105"
            >
              Видео
            </button>
            <button 
              onClick={() => handleNavClick("party")} 
              className="text-gray-700 hover:text-primary transform transition-all duration-300 hover:scale-105"
            >
              Партия
            </button>
            <button 
              onClick={() => handleNavClick("contact")} 
              className="text-gray-700 hover:text-primary transform transition-all duration-300 hover:scale-105"
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
