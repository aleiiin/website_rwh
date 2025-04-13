import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать не менее 2 символов' }),
  email: z.string().email({ message: 'Введите корректный email' }),
  phone: z.string().min(6, { message: 'Введите корректный номер телефона' }),
  message: z.string().min(10, { message: 'Сообщение должно содержать не менее 10 символов' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // In a real application, this would send the form data to the server
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Сообщение отправлено',
        description: 'Мы свяжемся с вами в ближайшее время.',
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">Свяжитесь со мной</h2>
        
        <div className="section-card rounded-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">Задайте вопрос</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-gray-700 font-semibold mb-2">Ваше имя</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
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
                        <FormLabel className="block text-gray-700 font-semibold mb-2">Электронная почта</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
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
                        <FormLabel className="block text-gray-700 font-semibold mb-2">Номер телефона</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
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
                        <FormLabel className="block text-gray-700 font-semibold mb-2">Ваш вопрос или предложение</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-[#273779] text-white font-accent font-bold py-3 px-6 rounded-md transition"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-primary rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary">Общественная приёмная</h4>
                    <p className="text-gray-700">г. Томск, ул. Ленина, 54, офис 306</p>
                    <p className="text-gray-700">Время работы: Пн-Пт с 9:00 до 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary">Телефоны</h4>
                    <p className="text-gray-700">+7 (3822) 55-55-55 - Общественная приёмная</p>
                    <p className="text-gray-700">+7 (3822) 55-55-56 - Горячая линия по вопросам ЖКХ</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary">Электронная почта</h4>
                    <p className="text-gray-700">petrov@tomsk-deputy.ru</p>
                    <p className="text-gray-700">info@tomsk-deputy.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary">Социальные сети</h4>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="bg-primary hover:bg-[#273779] text-white p-2 rounded-full transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.48 10.5H16V8c0-.89.21-1.5 1.8-1.5h.7V4.43c-.35-.05-1.08-.14-2.03-.14-2.16 0-3.67 1.33-3.67 3.7v2.5H9v3.34h3.8v8.17h3.2v-8.17h2.27l.34-3.34z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-primary hover:bg-[#273779] text-white p-2 rounded-full transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10zm6.5-1a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM12 4c-2.474 0-2.878.007-3.879.056-.996.045-1.667.207-2.257.44a4.56 4.56 0 00-1.644 1.07 4.565 4.565 0 00-1.07 1.645c-.233.59-.395 1.261-.44 2.256C2.657 10.122 2.65 10.526 2.65 13c0 2.474.007 2.878.056 3.879.045.995.207 1.667.44 2.256a4.56 4.56 0 001.07 1.644 4.565 4.565 0 001.645 1.07c.59.233 1.26.395 2.256.44.999.05 1.403.057 3.877.057 2.474 0 2.878-.007 3.879-.056.995-.045 1.667-.207 2.256-.44a4.56 4.56 0 001.644-1.07 4.563 4.563 0 001.07-1.644c.233-.59.395-1.261.44-2.256.05-1 .057-1.404.057-3.879s-.007-2.878-.056-3.879c-.045-.995-.207-1.667-.44-2.256a4.56 4.56 0 00-1.07-1.644 4.563 4.563 0 00-1.644-1.07c-.59-.233-1.261-.395-2.256-.44-.999-.05-1.403-.057-3.877-.057zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.463.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.246.639.413 1.363.463 2.429.047 1.066.06 1.405.06 4.123 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.463 2.428a4.883 4.883 0 01-1.153 1.772c-.156.157-.329.303-.5.438a4.9 4.9 0 01-1.772 1.153c-.638.246-1.363.413-2.428.463-1.066.048-1.405.06-4.122.06-2.718 0-3.057-.01-4.123-.06-1.065-.05-1.79-.217-2.428-.463a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.246-.639-.413-1.363-.463-2.429-.047-1.066-.06-1.405-.06-4.123 0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.463-2.428a4.88 4.88 0 011.153-1.772c.156-.157.329-.303.5-.438a4.9 4.9 0 011.772-1.153c.638-.246 1.362-.415 2.428-.465 1.066-.047 1.405-.06 4.122-.06z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-primary hover:bg-[#273779] text-white p-2 rounded-full transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4.481H9.08l-.6-.633A2.25 2.25 0 006.6 3H4.48A2.25 2.25 0 002.23 5.25v3.49l.73-.58.75-.6H4.48v-2.7h13.3v11.733H4.48v-6.113l-2.25 1.8v6.513A2.25 2.25 0 004.48 21h13.04a2.25 2.25 0 002.25-2.25V6.731c0-1.242-1.01-2.25-2.25-2.25z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-heading font-bold text-lg text-primary mb-4">График приёма граждан</h4>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <ul className="text-gray-700 space-y-2">
                    <li>Понедельник: 14:00 - 17:00</li>
                    <li>Среда: 10:00 - 13:00</li>
                    <li>Пятница: 14:00 - 17:00</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">* Предварительная запись по телефону: +7 (3822) 55-55-55</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
