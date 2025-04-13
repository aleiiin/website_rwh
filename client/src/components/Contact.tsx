import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { 
  FaVk, 
  FaTelegram, 
  FaYoutube, 
  FaOdnoklassniki 
} from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите корректный email",
  }),
  phone: z.string().min(6, {
    message: "Пожалуйста, введите корректный номер телефона",
  }),
  message: z.string().min(10, {
    message: "Сообщение должно содержать не менее 10 символов",
  }),
  agreement: z.literal(true, {
    errorMap: () => ({ message: "Вы должны принять соглашение" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      agreement: false,
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to a backend
      console.log("Form submitted:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше обращение! Мы свяжемся с вами в ближайшее время.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить сообщение. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-tertiary bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="section-bg p-6 md:p-12">
          <div className="text-center mb-12">
            <h2 className="section-title">Контактная информация</h2>
            <div className="section-divider"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Свяжитесь со мной для обсуждения вопросов и предложений
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-serif font-bold text-2xl text-secondary mb-6">
                  Контакты
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Общественная приемная</h4>
                      <p className="text-gray-700">г. Томск, ул. Ленина, 50, офис 310</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Телефон</h4>
                      <p className="text-gray-700">+7 (3822) 55-77-99</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Электронная почта</h4>
                      <p className="text-gray-700">ivanov@candidate.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Часы работы</h4>
                      <p className="text-gray-700">Пн-Пт: 09:00 - 18:00<br />Сб: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-gray-800 mb-3">Социальные сети</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-primary hover:bg-secondary rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                      <FaVk className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary hover:bg-secondary rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                      <FaTelegram className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary hover:bg-secondary rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                      <FaYoutube className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary hover:bg-secondary rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                      <FaOdnoklassniki className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-serif font-bold text-2xl text-secondary mb-6">
                  Обратная связь
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Электронная почта</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Телефон</FormLabel>
                          <FormControl>
                            <Input {...field} type="tel" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Сообщение</FormLabel>
                          <FormControl>
                            <Textarea {...field} rows={5} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="agreement"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              Я согласен на обработку персональных данных в соответствии с Федеральным законом №152-ФЗ "О персональных данных"
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-secondary text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Отправить сообщение
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
