import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import { CartProvider } from './context/cartContext'; // Importa el provider

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
   <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);