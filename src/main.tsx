
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use requestIdleCallback for non-critical initialization
const startApp = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;
  
  // Remove loading state immediately 
  const loader = rootElement.querySelector('.initial-loader');
  if (loader) loader.remove();
  
  createRoot(rootElement).render(<App />);
};

// Start rendering as soon as possible
if (window.requestIdleCallback) {
  window.requestIdleCallback(startApp);
} else {
  // Fallback for browsers not supporting requestIdleCallback
  setTimeout(startApp, 1);
}
