import { FaVk, FaTelegram, FaYoutube, FaOdnoklassniki } from "react-icons/fa";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-sans-bold text-xl mb-2">Имя кандидата</h3>
            <p className="text-tertiary">Кандидат в депутаты городской думы г. Томск</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-tertiary hover:text-white transform transition-all duration-300 hover:scale-105"
                >
                  О кандидате
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("district")} 
                  className="text-tertiary hover:text-white transform transition-all duration-300 hover:scale-105"
                >
                  Округ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("program")} 
                  className="text-tertiary hover:text-white transform transition-all duration-300 hover:scale-105"
                >
                  Программа
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("videos")} 
                  className="text-tertiary hover:text-white transform transition-all duration-300 hover:scale-105"
                >
                  Видео
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("party")} 
                  className="text-tertiary hover:text-white transform transition-all duration-300 hover:scale-105"
                >
                  Партия
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-tertiary hover:text-white transform transition-all duration-300 hover:scale-105"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-3 mb-2">
              <a href="#" className="text-tertiary hover:text-white transform transition-all duration-300 hover:scale-110">
                <FaVk className="h-5 w-5" />
              </a>
              <a href="#" className="text-tertiary hover:text-white transform transition-all duration-300 hover:scale-110">
                <FaTelegram className="h-5 w-5" />
              </a>
              <a href="#" className="text-tertiary hover:text-white transform transition-all duration-300 hover:scale-110">
                <FaYoutube className="h-5 w-5" />
              </a>
              <a href="#" className="text-tertiary hover:text-white transform transition-all duration-300 hover:scale-110">
                <FaOdnoklassniki className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-tertiary">&copy; 2023 Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
