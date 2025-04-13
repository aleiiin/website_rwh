export default function Party() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">Политическая партия</h2>
        
        <div className="section-card rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <img 
                  src="https://via.placeholder.com/200x200?text=Партия" 
                  alt="Логотип партии" 
                  className="w-48 h-48 object-contain mx-auto"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">Партия "Единое будущее"</h3>
              <p className="text-gray-700 mb-6">
                Я горжусь тем, что представляю партию "Единое будущее" – политическую силу, которая последовательно выступает за развитие регионов, социальную справедливость и благополучие каждого гражданина России. Наша партия имеет четкую программу действий, направленную на улучшение качества жизни людей.
              </p>
              
              <div className="mb-6">
                <h4 className="font-heading font-bold text-lg text-[#273779] mb-3">Ключевые направления работы партии:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700">Социальная поддержка населения</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700">Развитие здравоохранения</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700">Модернизация образования</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700">Экономическое развитие регионов</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://example.com/party" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-[#273779] hover:bg-primary text-white font-accent font-bold py-2 px-4 rounded-md transition"
              >
                <span>Посетить сайт партии</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
