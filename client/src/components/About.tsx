export default function About() {
  return (
    <section id="about" className="py-16 bg-white bg-opacity-90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">О кандидате</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="section-card rounded-lg p-6 h-full">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">Биография</h3>
              </div>
              <p className="text-gray-700">
                Родился и вырос в Томске. Окончил Томский государственный университет по специальности "Государственное и муниципальное управление". Более 15 лет работаю в сфере городского хозяйства. Женат, воспитываю двоих детей.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/3">
            <div className="section-card rounded-lg p-6 h-full">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">Достижения</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Реализовал программу по благоустройству 12 дворов</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Инициировал проект по модернизации детских площадок</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#273779] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Организовал волонтёрское движение "Чистый Томск"</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-1/3">
            <div className="section-card rounded-lg p-6 h-full">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">Ценности</h3>
              </div>
              <p className="text-gray-700 mb-4">Мои главные принципы в работе:</p>
              <div className="space-y-3">
                <div className="bg-[#c5cadb] bg-opacity-30 p-3 rounded-md">
                  <p className="font-bold text-primary">Открытость и честность</p>
                </div>
                <div className="bg-[#c5cadb] bg-opacity-30 p-3 rounded-md">
                  <p className="font-bold text-primary">Ответственность перед избирателями</p>
                </div>
                <div className="bg-[#c5cadb] bg-opacity-30 p-3 rounded-md">
                  <p className="font-bold text-primary">Развитие и благоустройство города</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
