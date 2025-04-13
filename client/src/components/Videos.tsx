import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface VideoData {
  id: number;
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export default function Videos() {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  const videos: VideoData[] = [
    {
      id: 1,
      title: "Встреча с жителями района Каштак",
      date: "15 мая 2023",
      description: "Обсуждение проблем благоустройства дворовых территорий и планов по ремонту детских площадок.",
      thumbnailUrl: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1"
    },
    {
      id: 2,
      title: "Интервью для местного телевидения",
      date: "2 июня 2023",
      description: "Рассказ о моей программе и планах по развитию округа, ответы на вопросы журналистов.",
      thumbnailUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2"
    },
    {
      id: 3,
      title: "Обращение к избирателям",
      date: "20 июня 2023",
      description: "Важное обращение к жителям округа с информацией о предстоящих выборах и призывом к активному участию.",
      thumbnailUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3"
    }
  ];

  const openVideoDialog = (video: VideoData) => {
    setSelectedVideo(video);
    setIsVideoDialogOpen(true);
  };

  return (
    <section id="videos" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">Видео о нашей работе</h2>
        
        <div className="section-card rounded-lg p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => openVideoDialog(video)}
                  >
                    <div className="bg-primary bg-opacity-80 rounded-full w-16 h-16 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <img 
                    src={video.thumbnailUrl} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-lg text-primary mb-1">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">Опубликовано: {video.date}</p>
                  <p className="text-gray-700">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="#" 
              className="inline-flex items-center bg-[#c5cadb] hover:bg-opacity-80 text-primary font-accent font-bold py-2 px-4 rounded-md transition"
            >
              <span>Смотреть все видео</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          {selectedVideo && (
            <div className="p-2">
              <h3 className="font-heading font-bold text-xl text-primary mb-4">{selectedVideo.title}</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-black mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  {/* This is a placeholder for the actual video */}
                  <div className="text-center p-4 text-white">
                    {/* In a real implementation, this would be an iframe or video element */}
                    <p>Здесь будет видео "{selectedVideo.title}"</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{selectedVideo.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
