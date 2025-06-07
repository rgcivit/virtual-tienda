import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Chip } from '@mui/material';
import ensendedorusb from "./assets/ensendedorusb.png";

const ProductCard = ({ product }) => {
  return (
    <Card 
      component={Link} // Convertir toda la Card en un enlace
      to={`/products/${product.id}`} // Ruta dinámica con ID del producto
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s',
        textDecoration: 'none', // Eliminar subrayado de enlace
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 6
        }
      }}
    >
      {/* ... (el resto del contenido permanece igual) ... */}
      <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Typography variant="h6" color="primary">
          ${product.price.toFixed(2)}
        </Typography>
        <Button 
          size="small" 
          variant="contained" 
          color="primary"
          onClick={(e) => e.stopPropagation()} // Evitar que el clic en el botón active el enlace de la tarjeta
        >
          Añadir
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;