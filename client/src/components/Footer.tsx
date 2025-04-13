export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <img 
                src="https://via.placeholder.com/50" 
                alt="Логотип кампании" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <h3 className="font-heading font-bold text-lg">Иван Петров</h3>
                <p className="text-[#c5cadb] text-sm">Кандидат в депутаты г. Томск, округ №5</p>
              </div>
            </div>
          </div>
          
          <div className="mb-4 md:mb-0">
            <p className="text-center">© 2023 Избирательная кампания Ивана Петрова<br/>Все права защищены</p>
          </div>
          
          <div>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-[#c5cadb] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.48 10.5H16V8c0-.89.21-1.5 1.8-1.5h.7V4.43c-.35-.05-1.08-.14-2.03-.14-2.16 0-3.67 1.33-3.67 3.7v2.5H9v3.34h3.8v8.17h3.2v-8.17h2.27l.34-3.34z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#c5cadb] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10zm6.5-1a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM12 4c-2.474 0-2.878.007-3.879.056-.996.045-1.667.207-2.257.44a4.56 4.56 0 00-1.644 1.07 4.565 4.565 0 00-1.07 1.645c-.233.59-.395 1.261-.44 2.256C2.657 10.122 2.65 10.526 2.65 13c0 2.474.007 2.878.056 3.879.045.995.207 1.667.44 2.256a4.56 4.56 0 001.07 1.644 4.565 4.565 0 001.645 1.07c.59.233 1.26.395 2.256.44.999.05 1.403.057 3.877.057 2.474 0 2.878-.007 3.879-.056.995-.045 1.667-.207 2.256-.44a4.56 4.56 0 001.644-1.07 4.563 4.563 0 001.07-1.644c.233-.59.395-1.261.44-2.256.05-1 .057-1.404.057-3.879s-.007-2.878-.056-3.879c-.045-.995-.207-1.667-.44-2.256a4.56 4.56 0 00-1.07-1.644 4.563 4.563 0 00-1.644-1.07c-.59-.233-1.261-.395-2.256-.44-.999-.05-1.403-.057-3.877-.057zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.463.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.246.639.413 1.363.463 2.429.047 1.066.06 1.405.06 4.123 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.463 2.428a4.883 4.883 0 01-1.153 1.772c-.156.157-.329.303-.5.438a4.9 4.9 0 01-1.772 1.153c-.638.246-1.363.413-2.428.463-1.066.048-1.405.06-4.122.06-2.718 0-3.057-.01-4.123-.06-1.065-.05-1.79-.217-2.428-.463a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.246-.639-.413-1.363-.463-2.429-.047-1.066-.06-1.405-.06-4.123 0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.463-2.428a4.88 4.88 0 011.153-1.772c.156-.157.329-.303.5-.438a4.9 4.9 0 011.772-1.153c.638-.246 1.362-.415 2.428-.465 1.066-.047 1.405-.06 4.122-.06z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#c5cadb] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4.481H9.08l-.6-.633A2.25 2.25 0 006.6 3H4.48A2.25 2.25 0 002.23 5.25v3.49l.73-.58.75-.6H4.48v-2.7h13.3v11.733H4.48v-6.113l-2.25 1.8v6.513A2.25 2.25 0 004.48 21h13.04a2.25 2.25 0 002.25-2.25V6.731c0-1.242-1.01-2.25-2.25-2.25z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-[#c5cadb] text-sm">Оплачено из средств избирательного фонда кандидата в депутаты Петрова И.С.</p>
          <p className="text-sm mt-2">
            <a href="#" className="text-[#c5cadb] hover:text-white transition">Политика конфиденциальности</a> | 
            <a href="#" className="text-[#c5cadb] hover:text-white transition"> Карта сайта</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
