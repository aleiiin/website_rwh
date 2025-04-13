import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import puppeteer from 'puppeteer';
import path from 'path';

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
      // Get the server's base URL
      const host = req.get('host');
      const protocol = req.protocol;
      const baseUrl = `${protocol}://${host}`;
      
      console.log(`Generating PDF for URL: ${baseUrl}`);
      
      // Launch puppeteer
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      
      const page = await browser.newPage();
      
      // Set viewport to a large size to capture the whole page
      await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
      });
      
      // Navigate to the website
      await page.goto(baseUrl, {
        waitUntil: 'networkidle2', // Wait until network is idle
        timeout: 30000, // 30 seconds timeout
      });
      
      // Give map and other components time to load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate PDF
      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20px',
          right: '20px',
          bottom: '20px',
          left: '20px'
        },
      });
      
      await browser.close();
      
      // Set response headers
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=campaign-site.pdf');
      res.setHeader('Content-Length', pdfBuffer.length);
      
      // Send the PDF
      res.send(pdfBuffer);
      
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
