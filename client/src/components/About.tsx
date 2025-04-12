import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="section-bg p-6 md:p-12">
          <div className="text-center mb-12">
            <h2 className="section-title">О кандидате</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&auto=format&fit=crop&q=80" 
                alt="Иванов в рабочей обстановке" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="md:w-3/5 md:pl-12">
              <h3 className="font-serif font-bold text-2xl text-secondary mb-4">
                Опыт и достижения
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">
                    <CheckCircle size={18} />
                  </span>
                  <span>Более 15 лет опыта работы в сфере муниципального управления</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">
                    <CheckCircle size={18} />
                  </span>
                  <span>Руководитель проекта по благоустройству парковых зон в Томске</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">
                    <CheckCircle size={18} />
                  </span>
                  <span>Организатор общественных инициатив по защите экологии региона</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">
                    <CheckCircle size={18} />
                  </span>
                  <span>Эксперт в области городского планирования и развития инфраструктуры</span>
                </li>
              </ul>
              
              <h3 className="font-serif font-bold text-2xl text-secondary mt-8 mb-4">
                Образование
              </h3>
              <p className="text-gray-700 mb-2">
                Томский государственный университет, факультет государственного управления
              </p>
              <p className="text-gray-700 mb-6">
                Московская школа управления, программа "Эффективное управление городской средой"
              </p>
              
              <div className="mt-6">
                <a 
                  href="#program" 
                  className="text-primary hover:text-secondary transition font-medium inline-flex items-center"
                >
                  Ознакомиться с программой 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
