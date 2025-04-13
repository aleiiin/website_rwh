import { CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Party() {
  return (
    <section id="party" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="section-bg p-6 md:p-12">
          <div className="text-center mb-12">
            <h2 className="section-title">Политическая партия</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center w-full max-w-xs">
                {/* Party logo */}
                <div className="w-full h-48 bg-tertiary bg-opacity-50 rounded flex items-center justify-center">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-24 h-24 text-primary"
                    fill="currentColor"
                  >
                    <path d="M50,10 L10,60 L90,60 Z" />
                    <rect x="10" y="65" width="80" height="25" />
                    <rect x="45" y="60" width="10" height="30" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-12">
              <h3 className="font-sans-bold text-2xl text-secondary mb-4">
                Название партии
              </h3>
              <p className="text-gray-700 mb-4">
                Имя кандидата — кандидат от политической партии «Название партии». 
                Партия отстаивает традиционные ценности и поддерживает стратегический курс на 
                укрепление суверенитета России, развитие экономики и социальной сферы.
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-primary mb-2">Ключевые принципы партии:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">
                      <CheckCircle size={18} />
                    </span>
                    <span>Стабильность и устойчивое развитие</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">
                      <CheckCircle size={18} />
                    </span>
                    <span>Поддержка социально незащищенных слоев населения</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">
                      <CheckCircle size={18} />
                    </span>
                    <span>Сохранение культурных и исторических ценностей</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">
                      <CheckCircle size={18} />
                    </span>
                    <span>Укрепление государственности и суверенитета</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex">
                <Button
                  as="a"
                  href="https://er.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-secondary text-white flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Официальный сайт партии
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
