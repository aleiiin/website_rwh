import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: 'Пожалуйста, заполните все обязательные поля' 
        });
      }
      
      // In a real application, you would store this in a database
      // and/or send an email notification
      
      // Return success response
      return res.status(200).json({ 
        message: 'Сообщение успешно отправлено' 
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return res.status(500).json({ 
        message: 'Произошла ошибка при отправке сообщения' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
