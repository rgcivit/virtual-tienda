import React from 'react';
import { Box, Typography } from '@mui/material';

const Logo = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      cursor: 'pointer',
      '&:hover .cart-icon': {
        transform: 'translateY(-3px)'
      }
    }}>
      {/* Icono de carrito minimalista */}
      <Box className="cart-icon" sx={{
        position: 'relative',
        transition: 'transform 0.3s ease',
      }}>
        {/* Base del carrito */}
        <Box sx={{
          width: 36,
          height: 24,
          borderRadius: '3px 3px 0 0',
          border: '2px solid #3f51b5',
          borderBottom: 'none',
          position: 'relative'
        }}>
          {/* Ruedas */}
          <Box sx={{
            position: 'absolute',
            bottom: -6,
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#3f51b5',
            left: 6
          }} />
          <Box sx={{
            position: 'absolute',
            bottom: -6,
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#3f51b5',
            right: 6
          }} />
        </Box>
        
        {/* Mango del carrito */}
        <Box sx={{
          position: 'absolute',
          top: 4,
          right: -8,
          width: 12,
          height: 2,
          backgroundColor: '#3f51b5',
          transform: 'rotate(-45deg)',
          borderRadius: 1
        }} />
        
        {/* Producto en el carrito */}
        <Box sx={{
          position: 'absolute',
          top: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 12,
          height: 8,
          backgroundColor: '#f50057',
          borderRadius: '2px'
        }} />
      </Box>
      
      {/* Texto del logo */}
      <Typography variant="h5" component="div" sx={{
        fontWeight: 300,
        letterSpacing: '0.1em',
        color: '#333',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        '& span': {
          fontWeight: 400,
          color: '#3f51b5'
        }
      }}>
        VIRTUAL<span>TIENDA</span>
      </Typography>
    </Box>
  );
};

export default Logo;