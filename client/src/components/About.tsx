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
                src="/images/photo_2024-06-17_20-53-41.jpg" 
                alt="Кандидат в рабочей обстановке" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="md:w-3/5 md:pl-12">
              <div className="space-y-6 text-gray-700">
                <p className="font-sans text-lg md:text-xl leading-relaxed">
                  Я родилась 24 декабря 1968 года в Томске —городе с богатой историей и сибирским характером. Сначала окончила аграрный колледж, а в 2010 году получила высшее образование по специальности инженер-механик сельскохозяйственной техники.
                </p>
                <p className="font-sans text-lg md:text-xl leading-relaxed">
                  Первые профессиональные шаги делала в селе Баткат Шегарского района Томской области, где жила и проходила стажировку. Этот опыт научил меня ценить труд и понимать людей. С 2008 года я работала главным бухгалтером в нескольких компаниях, совмещая точность расчётов с умением управлять процессами.
                </p>
                <p className="font-sans text-lg md:text-xl leading-relaxed">
                  В марте 2024 года я возглавила медиахолдинг RWH MEDIA —проект моего сына, который уже несколько лет проходит службу в зоне СВО.Для меня это не просто работа, а семейное дело и вклад в развитие честного медиа, отражающего реальные события и поддерживающего социально важные инициативы.
                </p>
                <p className="font-sans text-lg md:text-xl leading-relaxed">
                  В жизни я стараюсь сохранять баланс между делами и личным счастьем. У меня крепкая семья: муж, сын, мама, верный пёс и несколько озорных котов. Я люблю животных, путешествия и вышивку крестиком —в этом нахожу душевное вдохновение.
                </p>
                <p className="font-sans text-lg md:text-xl leading-relaxed">
                  Верю, что успех приходит к тем, кто идёт к нему с теплом в сердце и твёрдым шагом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
