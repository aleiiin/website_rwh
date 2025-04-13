import { useState } from "react";
import { Play } from "lucide-react";

interface VideoData {
  id: number;
  title: string;
  description: string;
  thumbnailSrc: string;
}

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<VideoData>({
    id: 0,
    title: "Обращение к жителям Кировского района",
    description: "В этом видео я рассказываю о ключевых проблемах нашего района и путях их решения.",
    thumbnailSrc: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=800&auto=format&fit=crop&q=80"
  });

  const videoData: VideoData[] = [
    {
      id: 1,
      title: "Встреча с избирателями",
      description: "Отчет о встрече с жителями микрорайона Южный и обсуждение актуальных проблем района.",
      thumbnailSrc: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Благоустройство дворов",
      description: "Подробная презентация программы по модернизации дворовых территорий Кировского района.",
      thumbnailSrc: "https://images.unsplash.com/photo-1608501078713-8e445a709b39?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Интервью для местных СМИ",
      description: "Ответы на актуальные вопросы о развитии города и планах работы в городской думе.",
      thumbnailSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const handleVideoSelect = (video: VideoData) => {
    setActiveVideo(video);
    // Scroll to main video player
    const videoElement = document.getElementById("main-video");
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="videos" className="py-16 md:py-24 bg-tertiary bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="section-bg p-6 md:p-12">
          <div className="text-center mb-12">
            <h2 className="section-title">Видеообращения кандидата</h2>
            <div className="section-divider"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Познакомьтесь с моими выступлениями и узнайте больше о моей программе
            </p>
          </div>
          
          <div className="mb-12">
            <div id="main-video" className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-lg">
              <img 
                src={activeVideo.thumbnailSrc} 
                alt={activeVideo.title} 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-30 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary bg-opacity-80 rounded-full flex items-center justify-center text-white cursor-pointer transition hover:bg-opacity-100">
                  <Play size={30} fill="white" />
                </div>
              </div>
            </div>
            <h3 className="font-serif font-bold text-xl text-secondary mt-4">
              {activeVideo.title}
            </h3>
            <p className="text-gray-600 mt-2">
              {activeVideo.description}
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-2xl text-secondary mb-6">
              Другие видео
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoData.map((video) => (
                <div 
                  key={video.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => handleVideoSelect(video)}
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnailSrc} 
                      alt={video.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-primary bg-opacity-30 flex items-center justify-center">
                      <span className="w-12 h-12 bg-primary bg-opacity-80 rounded-full flex items-center justify-center text-white">
                        <Play size={20} fill="white" />
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-primary">{video.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{video.description.substring(0, 60)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
