import { useState } from "react";
import html2canvas from "html2canvas";
import pptxgen from "pptxgenjs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ExportToPpt() {
  const { toast } = useToast();
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    
    try {
      toast({
        title: "Подготовка презентации",
        description: "Пожалуйста, подождите. Это может занять несколько секунд...",
      });

      // Create a new PowerPoint presentation
      const pptx = new pptxgen();
      
      // Set presentation properties
      pptx.layout = "LAYOUT_16x9";
      pptx.title = "Политическая кампания - Иванов Иван Иванович";
      
      // Define the sections to capture
      const sections = [
        { id: "hero", title: "Иванов Иван Иванович - Кандидат в депутаты" },
        { id: "about", title: "О кандидате" },
        { id: "district", title: "Избирательный округ" },
        { id: "program", title: "Программа кандидата" },
        { id: "videos", title: "Видеообращения" },
        { id: "party", title: "Политическая партия" },
        { id: "contact", title: "Контактная информация" }
      ];
      
      // Iterate through each section and create slides
      for (const section of sections) {
        const element = document.getElementById(section.id);
        
        if (element) {
          // Capture the section as an image
          const canvas = await html2canvas(element, {
            scale: 1,
            useCORS: true,
            allowTaint: true,
            logging: false,
            windowWidth: 1920,
            windowHeight: 1080
          });
          
          // Convert canvas to base64 image
          const imgData = canvas.toDataURL("image/png");
          
          // Add a new slide
          const slide = pptx.addSlide();
          
          // Add a title to the slide
          slide.addText(section.title, { 
            x: 0.5, 
            y: 0.5, 
            w: "90%", 
            fontSize: 24, 
            color: "#1f306c",
            bold: true 
          });
          
          // Add the screenshot to the slide
          slide.addImage({ 
            data: imgData, 
            x: 0.5, 
            y: 1.25, 
            w: "90%", 
            h: "70%" 
          });
        }
      }
      
      // Generate and download the presentation
      await pptx.writeFile({ fileName: "Политическая_кампания_Иванов.pptx" });
      
      toast({
        title: "Экспорт завершен",
        description: "Презентация успешно скачана",
      });
    } catch (error) {
      console.error("Ошибка при экспорте в PowerPoint:", error);
      
      toast({
        title: "Ошибка при экспорте",
        description: "Не удалось создать презентацию. Пожалуйста, попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={handleExport}
      className="bg-primary hover:bg-secondary text-white flex items-center gap-2"
      disabled={isExporting}
    >
      <Download size={16} />
      {isExporting ? "Создание презентации..." : "Экспорт в PowerPoint"}
    </Button>
  );
}