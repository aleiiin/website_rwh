import { useEffect, useRef } from 'react';

export default function MapSection() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  // In a real implementation, this would use Leaflet to initialize the map
  useEffect(() => {
    if (mapContainerRef.current) {
      // This would be replaced with actual Leaflet map initialization in a real implementation
      const mapElement = mapContainerRef.current;
      // Initialize map here if we had the Leaflet library
    }
  }, []);

  return (
    <section id="map" className="py-16 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">Карта избирательного округа №5</h2>
        
        <div className="section-card rounded-lg p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <div 
                ref={mapContainerRef}
                className="rounded-lg overflow-hidden shadow-md h-80 md:h-96 lg:h-[500px] relative"
              >
                {/* Placeholder for the interactive map */}
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Карта избирательного округа №5" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 px-6 py-4 rounded-lg shadow-lg">
                    <p className="text-primary font-bold">Интерактивная карта будет загружена здесь</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <h3 className="font-heading font-bold text-xl text-primary mb-4">Избирательный округ №5</h3>
                
                <div className="mb-6">
                  <h4 className="font-heading font-bold text-lg text-[#273779] mb-2">Границы округа:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Северная граница: улица Ленина</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Южная граница: улица Пушкина</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Западная граница: проспект Мира</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Восточная граница: улица Гагарина</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-heading font-bold text-lg text-[#273779] mb-2">Избирательные участки:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Участок №234 - Школа №15</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Участок №235 - Дом культуры</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Участок №236 - Библиотека №3</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Участок №237 - Школа №22</span>
                    </li>
                  </ul>
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center bg-[#273779] hover:bg-primary text-white font-accent font-bold py-2 px-4 rounded-md transition w-full justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Скачать схему округа</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
