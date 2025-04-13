import { useState } from 'react';
import { useMobileMenu } from '@/hooks/use-mobile-menu';

export default function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://via.placeholder.com/50" 
            alt="Логотип кампании" 
            className="h-12 w-auto mr-3"
          />
          <div className="text-white">
            <h1 className="font-heading font-bold text-xl md:text-2xl">Иван Петров</h1>
            <p className="font-accent text-sm text-accent">Кандидат в депутаты г. Томск</p>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-accent">
          <li><a href="#about" className="hover:text-accent transition">О кандидате</a></li>
          <li><a href="#district" className="hover:text-accent transition">Наш район</a></li>
          <li><a href="#videos" className="hover:text-accent transition">Видео</a></li>
          <li><a href="#map" className="hover:text-accent transition">Карта округа</a></li>
          <li><a href="#contact" className="hover:text-accent transition">Контакты</a></li>
        </ul>
      </nav>
      
      {/* Mobile navigation */}
      <div className={`${isMenuOpen ? '' : 'hidden'} md:hidden bg-primary pb-4 px-4`}>
        <ul className="space-y-3 text-white font-accent">
          <li><a href="#about" onClick={closeMenu} className="block py-2 hover:text-accent transition">О кандидате</a></li>
          <li><a href="#district" onClick={closeMenu} className="block py-2 hover:text-accent transition">Наш район</a></li>
          <li><a href="#videos" onClick={closeMenu} className="block py-2 hover:text-accent transition">Видео</a></li>
          <li><a href="#map" onClick={closeMenu} className="block py-2 hover:text-accent transition">Карта округа</a></li>
          <li><a href="#contact" onClick={closeMenu} className="block py-2 hover:text-accent transition">Контакты</a></li>
        </ul>
      </div>
    </header>
  );
}
