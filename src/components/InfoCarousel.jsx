import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import fotocarrusel1 from '../components/assets/fotocarrusel1.png';
import fotocarrusel2 from '../components/assets/fotocarrusel2.jpg';
import fotocarrusel3 from '../components/assets/fotocarrusel3.jpg';

const InfoCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Ofertas Especiales",
      description: "En productos electrónicos",
      imageUrl: fotocarrusel1
    },
    {
      title: "Nuevos Productos",
      description: "Descubre nuestra última colección",
      imageUrl: fotocarrusel2
    },
    {
      title: "Envío Gratis",
      description: "En compras superiores a $100.000",
      imageUrl: fotocarrusel3
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

  const handleVerMas = () => {
    navigate('/products');
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
      {/* Imagen de fondo */}
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
      {/* Capa oscura */}
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
      {/* Contenido */}
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
          onClick={handleVerMas}
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
          left: 8,
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 3,
          bgcolor: 'rgba(0,0,0,0.3)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
        }}
        aria-label="Anterior"
      >
        <KeyboardArrowLeft fontSize="large" />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 8,
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 3,
          bgcolor: 'rgba(0,0,0,0.3)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
        }}
        aria-label="Siguiente"
      >
        <KeyboardArrowRight fontSize="large" />
      </IconButton>
      {/* Dots de navegación */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 3
        }}
      >
        {slides.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => handleStepClick(idx)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: idx === activeStep ? 'white' : 'rgba(255,255,255,0.5)',
              border: idx === activeStep ? '2px solid #1976d2' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InfoCarousel;