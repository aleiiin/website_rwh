import { TrafficCone, Network, GraduationCap, Heart, Users, Terminal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProgramItemProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function ProgramItem({ icon, title, items }: ProgramItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary">
      <div className="text-primary text-4xl mb-4">
        {icon}
      </div>
      <h3 className="font-serif font-bold text-xl text-secondary mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2 mt-1">
              <Check size={14} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ProgramProps {
  scrollToSection: (id: string) => void;
}

export default function Program({ scrollToSection }: ProgramProps) {
  const programItems = [
    {
      icon: <TrafficCone className="w-10 h-10" />,
      title: "Развитие инфраструктуры",
      items: [
        "Ремонт дорог в микрорайонах Южный и Мокрушинский",
        "Модернизация коммунальных сетей",
        "Установка современного освещения"
      ]
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "Экология и благоустройство",
      items: [
        "Создание новых парковых зон",
        "Озеленение дворовых территорий",
        "Установка современных детских площадок"
      ]
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Образование",
      items: [
        "Ремонт и модернизация школ района",
        "Создание дополнительных мест в детских садах",
        "Поддержка образовательных инициатив"
      ]
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Здравоохранение",
      items: [
        "Открытие дополнительных пунктов медицинской помощи",
        "Улучшение доступности медицинских услуг",
        "Программы профилактики заболеваний"
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Социальная поддержка",
      items: [
        "Адресная помощь пенсионерам и малоимущим",
        "Развитие программ поддержки молодых семей",
        "Создание безбарьерной среды для людей с ограниченными возможностями"
      ]
    },
    {
      icon: <Terminal className="w-10 h-10" />,
      title: "Спорт и досуг",
      items: [
        "Строительство спортивных площадок",
        "Развитие дворового спорта",
        "Организация культурно-массовых мероприятий"
      ]
    }
  ];

  return (
    <section id="program" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="section-bg p-6 md:p-12">
          <div className="text-center mb-12">
            <h2 className="section-title">Моя программа</h2>
            <div className="section-divider"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Приоритетные направления работы в интересах жителей Кировского района
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programItems.map((item, index) => (
              <ProgramItem 
                key={index} 
                icon={item.icon} 
                title={item.title} 
                items={item.items} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="bg-primary hover:bg-secondary text-white"
              size="lg"
            >
              Поддержать программу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
