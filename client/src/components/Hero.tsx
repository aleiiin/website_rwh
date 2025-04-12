import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 relative">
      <div className="container mx-auto px-4">
        <div className="section-bg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-6 md:p-12">
              <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
                Иванов Иван Иванович
              </h1>
              <h2 className="text-xl md:text-2xl text-secondary mb-6">
                Кандидат в депутаты городской думы г. Томск
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Вместе мы сделаем наш округ лучше! Опыт, ответственность, результат.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  onClick={() => scrollToSection("about")} 
                  className="bg-primary hover:bg-secondary text-white"
                  size="lg"
                >
                  Узнать больше
                </Button>
                <Button 
                  onClick={() => scrollToSection("contact")} 
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Связаться
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 p-6">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80" 
                alt="Иванов Иван Иванович" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
