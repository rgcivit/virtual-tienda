import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid'; 
import InfoCarousel from './components/InfoCarousel';
import ProductDetailPage from './components/ProductDetailPage';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Importación necesaria para otros componentes que la usen
import ShoppingCart from './ShoppingCart';
import PaymentSuccess from './PaymentSuccess';
import TopBar from "./components/TopBar"; 

// ====================================================
// ✅ COMPONENTE: DECORACIÓN NAVIDEÑA (FIX: Eliminada la declaración de theme no necesaria)
// ====================================================
const ChristmasDecorations = () => {
    // ELIMINAMOS: const theme = useTheme(); // No es necesaria aquí
    
    const adornos = useMemo(() => {
        // Reducimos la cantidad de adornos para mejor performance
        const numAdornos = 12; 
        const symbols = ['🎄', '🌟', '❄️', '🎁', '🎅']; 

        const getFlakeStyle = (index) => {
            return {
                left: `${Math.random() * 100}vw`,
                animationDuration: `${10 + Math.random() * 10}s`, // Caída más lenta
                animationDelay: `-${Math.random() * 10}s`,
                // Tamaño entre 20px y 30px
                fontSize: `${20 + Math.random() * 10}px`, 
                animationName: `fall, sway`,
                animationDuration: `${12 + Math.random() * 8}s, ${3 + Math.random() * 3}s`,
                animationDelay: `-${Math.random() * 12}s`,
                opacity: 0.4 + Math.random() * 0.4,
                zIndex: 1, // Z-index muy bajo (fondo)
            };
        };

        return Array.from({ length: numAdornos }).map((_, index) => (
            <span
                key={index}
                className="christmas-flake"
                style={getFlakeStyle(index)}
            >
                {symbols[index % symbols.length]}
            </span>
        ));
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                pointerEvents: 'none', 
                zIndex: 1, // Z-Index en 1 para que quede detrás del Header
            }}
        >
            {adornos}
        </Box>
    );
};
// ====================================================

// Helper: sube al tope al cambiar de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Componente que envuelve el carrusel Y la lista de productos (ProductGrid)
const HomeWrapper = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    
    return (
        <>
            {/* Carrusel solo en la Home */}
            {isHome && <InfoCarousel />}
            
            {/* USAMOS ProductGrid para mostrar la lista principal */}
            <ProductGrid /> 
        </>
    );
};

const App = () => {
  // ELIMINAMOS: const theme = useTheme(); 
 
  return (
    <Router>
      {/* ✅ 1. Llamada a la decoración de fondo */}
      <ChristmasDecorations /> 
      <ScrollToTop /> 
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            {/* 1. La RUTA PRINCIPAL (Home) y la de PRODUCTOS cargan HomeWrapper */}
            <Route path="/" element={<HomeWrapper />} />
            <Route path="/products" element={<HomeWrapper />} /> 

            {/* 2. Detalle de producto */}
            <Route path="/products/:id" element={<ProductDetailPage />} />

            {/* 3. Carrito */}
            <Route path="/cart" element={<ShoppingCart />} />

            {/* 4. Éxito de pago */}
            <Route path="/payment/success" element={<PaymentSuccess />} />
          </Routes>
        </Box>

        <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
          <Typography variant="body1">
            © {new Date().getFullYear()} Virtual Tienda - Rodrigo Guevara Civit Developer - Todos los derechos reservados
          </Typography>
        </Box>
      </Box>
    </Router>
  );
};

export default App;



