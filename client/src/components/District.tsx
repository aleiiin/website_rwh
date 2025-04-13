export default function District() {
  return (
    <section id="district" className="py-16 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">Наш округ №5</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <div className="section-card rounded-lg p-6 h-full">
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">О районе</h3>
              <p className="text-gray-700 mb-4">
                Избирательный округ №5 включает в себя микрорайоны Каштак и часть Октябрьского района города Томска. Это один из старейших и крупнейших районов города с богатой историей и культурным наследием.
              </p>
              
              <div className="mb-6">
                <h4 className="font-heading font-bold text-xl text-[#273779] mb-3">Особенности округа:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Население — более 45 000 человек</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>7 школ и 10 детских садов</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3 поликлиники и 1 больница</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Парк "Заречный" и 3 сквера</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Крупный торговый центр и множество предприятий</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-heading font-bold text-xl text-[#273779] mb-3">Ключевые проблемы:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Изношенность инженерных коммуникаций</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Недостаточное количество парковочных мест</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Состояние дорог и тротуаров</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Нехватка врачей в поликлиниках</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="section-card rounded-lg p-6 h-full">
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1578124301759-b76d26ec9485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Вид на район Каштак" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">Наши приоритеты</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-heading font-bold text-lg text-[#273779] mb-2">Коммунальная сфера</h4>
                  <p className="text-gray-700">Модернизация инженерных сетей и повышение качества услуг ЖКХ</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-heading font-bold text-lg text-[#273779] mb-2">Благоустройство</h4>
                  <p className="text-gray-700">Ремонт дворов, создание новых зелёных зон, детских площадок</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-heading font-bold text-lg text-[#273779] mb-2">Социальная сфера</h4>
                  <p className="text-gray-700">Поддержка социально незащищенных слоев населения</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-heading font-bold text-lg text-[#273779] mb-2">Образование</h4>
                  <p className="text-gray-700">Модернизация школ и детских садов, создание кружков</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="inline-block bg-[#273779] hover:bg-primary text-white font-accent font-bold py-3 px-6 rounded-md transition"
                >
                  Присоединяйтесь к нашей команде!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
