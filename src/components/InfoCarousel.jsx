import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

// Importa tus imágenes desde assets
import iluminacionsolar from '../components/assets/iluminacionsolar.jpg';  // Ajusta la ruta según tu estructura
import taladroscarrusel from '../components/assets/taladroscarrusel.jpg'
import utensilloscarrusel from '../components/assets/utensilloscarrusel.jpg'
import fotocarrusel1 from '../components/assets/fotocarrusel1.png';
const InfoCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const slides = [
    {
      title: "Ofertas Especiales",
      description: "Descuentos de hasta 50% en electrónicos",
      imageUrl: fotocarrusel1  // Usa la variable importada
    },
    {
      title: "Nuevos Productos",
      description: "Descubre nuestra última colección",
      imageUrl: taladroscarrusel
    },
    {
      title: "Envío Gratis",
      description: "En compras superiores a $100.000",
      imageUrl: utensilloscarrusel
    }
  ];
  
  const maxSteps = slides.length;
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [maxSteps]);
  
  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };
  
  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };
  
  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  
  return (
    <Box sx={{ 
      position: 'relative', 
      height: { xs: 300, md: 400 },
      overflow: 'hidden',
      mt: 2,
      mb: 4,
      borderRadius: '4px',
      boxShadow: 3
    }}>
      {/* Slide actual con imagen de fondo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${slides[activeStep].imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          transition: 'transform 0.5s ease-in-out',
        }}
      />
      
      {/* Overlay oscuro para mejor contraste */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 1
        }}
      />
      
      {/* Contenido del slide */}
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'left',
          color: 'white',
          p: { xs: 2, md: 6 },
          zIndex: 2
        }}
      >
        <Typography variant="h2" component="div" sx={{ 
          mb: 2, 
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3rem' },
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          {slides[activeStep].title}
        </Typography>
        <Typography variant="h5" sx={{ 
          mb: 3, 
          maxWidth: '70%',
          fontSize: { xs: '1.1rem', md: '1.5rem' },
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          {slides[activeStep].description}
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.1rem',
            px: 4,
            py: 1.5,
            boxShadow: 3,
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: 5
            }
          }}
        >
          Ver Más
        </Button>
      </Box>
      
      {/* Flechas de navegación */}
      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          zIndex: 3,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)'
          }
        }}
      >
        <KeyboardArrowLeft fontSize="large" />
      </IconButton>
      
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          zIndex: 3,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)'
          }
        }}
      >
        <KeyboardArrowRight fontSize="large" />
      </IconButton>
      
      {/* Indicadores de posición (puntos) */}
      <Box sx={{
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 3
      }}>
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleStepClick(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: activeStep === index ? '#ff3e00' : 'rgba(255,255,255,0.5)',
              mx: 0.5,
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: activeStep === index ? '#ff5c33' : 'rgba(255,255,255,0.8)'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InfoCarousel;