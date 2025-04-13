import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add additional global CSS for font families and paper texture background
const style = document.createElement('style');
style.textContent = `
  :root {
    --primary: 31, 48, 108;
    --secondary: 39, 55, 121;
    --accent: 197, 202, 219;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f8f9fc;
    background-image: url('https://images.unsplash.com/photo-1582900182414-f4e0fa7fbe1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: overlay;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', serif;
  }
  
  .font-accent {
    font-family: 'Roboto Condensed', sans-serif;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  .section-card {
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 4px 6px rgba(31, 48, 108, 0.1);
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
