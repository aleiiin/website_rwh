import { MapPin, Users, Building, GraduationCap, AlertCircle } from "lucide-react";
import Map from "./Map";

export default function District() {
  return (
    <section id="district" className="py-16 md:py-24 bg-tertiary bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="section-bg p-6 md:p-12">
          <div className="text-center mb-12">
            <h2 className="section-title">Избирательный округ</h2>
            <div className="section-divider"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Информация о Кировском районе города Томск, где баллотируется кандидат
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <h3 className="font-serif font-bold text-2xl text-secondary mb-4">
                  Кировский район
                </h3>
                <p className="text-gray-700 mb-4">
                  Кировский район — один из четырёх внутригородских районов города Томска. 
                  Расположен в западной и юго-западной частях города.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-2">
                    Основные характеристики района:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <MapPin size={16} />
                      </span>
                      <span>Площадь: 52 кв. км</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <Users size={16} />
                      </span>
                      <span>Население: более 145 000 человек</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <Building size={16} />
                      </span>
                      <span>
                        Включает микрорайоны: Университетский, Южный, Мокрушинский, 
                        Степановка, посёлок Апрель
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <GraduationCap size={16} />
                      </span>
                      <span>
                        На территории района находятся 6 университетов, 15 школ, 22 детских сада
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Приоритетные проблемы района:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <AlertCircle size={16} />
                      </span>
                      <span>Модернизация инженерных коммуникаций</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <AlertCircle size={16} />
                      </span>
                      <span>Благоустройство дворовых территорий</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <AlertCircle size={16} />
                      </span>
                      <span>Ремонт внутриквартальных дорог</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <AlertCircle size={16} />
                      </span>
                      <span>Развитие спортивной инфраструктуры</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <h3 className="font-serif font-bold text-2xl text-secondary mb-4">
                  Карта округа
                </h3>
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <Map />
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 text-sm">
                    Границы избирательного округа №3 выделены синим цветом.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
