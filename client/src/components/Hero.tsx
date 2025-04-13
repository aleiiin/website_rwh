export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Вместе изменим Томск к лучшему
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Кандидат в депутаты по избирательному округу №5 города Томск
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#program" 
                className="bg-[#273779] hover:bg-primary text-white font-accent font-bold py-3 px-6 rounded-md transition text-center"
              >
                Моя программа
              </a>
              <a 
                href="#contact" 
                className="bg-[#c5cadb] hover:bg-opacity-80 text-primary font-accent font-bold py-3 px-6 rounded-md transition text-center"
              >
                Связаться со мной
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#273779] rounded-full opacity-20 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Иван Петров" 
                className="relative rounded-full h-64 w-64 object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
