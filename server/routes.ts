import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import pdf from "html-pdf";
import path from 'path';
import fs from 'fs';

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

  // PDF Export endpoint
  app.get('/api/export-pdf', async (req, res) => {
    try {
      // Создаем HTML-строку с информацией о кампании
      const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Избирательная кампания - Иванов Иван Иванович</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            color: #333;
          }
          .header {
            background-color: #1f306c;
            color: white;
            padding: 20px;
            text-align: center;
            margin-bottom: 20px;
          }
          .section {
            margin-bottom: 30px;
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
          }
          h1, h2, h3 {
            color: #1f306c;
          }
          .header h1 {
            color: white;
            margin: 0;
          }
          .header p {
            color: #c5cadb;
            margin: 5px 0 0 0;
          }
          ul {
            padding-left: 20px;
          }
          li {
            margin-bottom: 8px;
          }
          .contact-info {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Иванов Иван Иванович</h1>
          <p>Кандидат в депутаты городской думы г. Томск</p>
        </div>
        
        <div class="section">
          <h2>О кандидате</h2>
          <p>Опыт и достижения:</p>
          <ul>
            <li>Более 15 лет опыта работы в сфере муниципального управления</li>
            <li>Руководитель проекта по благоустройству парковых зон в Томске</li>
            <li>Организатор общественных инициатив по защите экологии региона</li>
            <li>Эксперт в области городского планирования и развития инфраструктуры</li>
          </ul>
          
          <p>Образование:</p>
          <ul>
            <li>Томский государственный университет, факультет государственного управления</li>
            <li>Московская школа управления, программа "Эффективное управление городской средой"</li>
          </ul>
        </div>
        
        <div class="section">
          <h2>Избирательный округ</h2>
          <p>Кировский район — один из четырёх внутригородских районов города Томска. Расположен в западной и юго-западной частях города.</p>
          
          <h3>Основные характеристики района:</h3>
          <ul>
            <li>Площадь: 52 кв. км</li>
            <li>Население: более 145 000 человек</li>
            <li>Включает микрорайоны: Университетский, Южный, Мокрушинский, Степановка, посёлок Апрель</li>
            <li>На территории района находятся 6 университетов, 15 школ, 22 детских сада</li>
          </ul>
          
          <h3>Приоритетные проблемы района:</h3>
          <ul>
            <li>Модернизация инженерных коммуникаций</li>
            <li>Благоустройство дворовых территорий</li>
            <li>Ремонт внутриквартальных дорог</li>
            <li>Развитие спортивной инфраструктуры</li>
          </ul>
        </div>
        
        <div class="section">
          <h2>Моя программа</h2>
          
          <h3>Развитие инфраструктуры</h3>
          <ul>
            <li>Ремонт дорог в микрорайонах Южный и Мокрушинский</li>
            <li>Модернизация коммунальных сетей</li>
            <li>Установка современного освещения</li>
          </ul>
          
          <h3>Экология и благоустройство</h3>
          <ul>
            <li>Создание новых парковых зон</li>
            <li>Озеленение дворовых территорий</li>
            <li>Установка современных детских площадок</li>
          </ul>
          
          <h3>Образование</h3>
          <ul>
            <li>Ремонт и модернизация школ района</li>
            <li>Создание дополнительных мест в детских садах</li>
            <li>Поддержка образовательных инициатив</li>
          </ul>
          
          <h3>Здравоохранение</h3>
          <ul>
            <li>Открытие дополнительных пунктов медицинской помощи</li>
            <li>Улучшение доступности медицинских услуг</li>
            <li>Программы профилактики заболеваний</li>
          </ul>
        </div>
        
        <div class="section">
          <h2>Контактная информация</h2>
          <div class="contact-info">
            <p><strong>Общественная приемная:</strong> г. Томск, ул. Ленина, 50, офис 310</p>
            <p><strong>Телефон:</strong> +7 (3822) 55-77-99</p>
            <p><strong>Email:</strong> ivanov@candidate.ru</p>
            <p><strong>Часы работы:</strong> Пн-Пт: 09:00 - 18:00, Сб: 10:00 - 14:00</p>
          </div>
        </div>
        
        <div class="footer">
          <p>© 2023 Иванов Иван Иванович. Все права защищены.</p>
          <p>Предвыборные материалы. Оплачено из средств избирательного фонда кандидата.</p>
        </div>
      </body>
      </html>
      `;

      // Опции для создания PDF
      const options = {
        format: 'A4',
        orientation: 'portrait',
        border: {
          top: '20px',
          right: '20px',
          bottom: '20px',
          left: '20px'
        },
        timeout: 30000
      };

      // Генерируем PDF
      pdf.create(html, options).toBuffer((err, buffer) => {
        if (err) {
          console.error('Error generating PDF:', err);
          return res.status(500).json({
            message: 'Произошла ошибка при создании PDF'
          });
        }

        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=campaign-site.pdf');
        res.setHeader('Content-Length', buffer.length);
        
        // Send the PDF
        res.send(buffer);
      });
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).json({
        message: 'Произошла ошибка при создании PDF'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
