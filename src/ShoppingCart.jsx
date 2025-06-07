import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Grid, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentButton from './PaymentButton';

const ShoppingCart = () => {
  // Esto debería venir de tu estado global o contexto
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Encendedor Recargable USB con Linterna Negro",
      price: 11990,
      quantity: 1,
      image: "ensendedorusb.png"
    },
    // Otros productos...
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 1500; // Costo de envío fijo
  const total = subtotal + shipping;

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Carrito de Compras
      </Typography>
      
      <Grid container spacing={4}>
        {/* Lista de productos */}
        <Grid item xs={12} md={8}>
          {cartItems.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: 'center', py: 4 }}>
              Tu carrito está vacío
            </Typography>
          ) : (
            cartItems.map((item) => (
              <Paper key={item.id} sx={{ mb: 2, p: 2, display: 'flex' }}>
                <Box sx={{ width: 100, height: 100, mr: 2 }}>
                  <img 
                    src={require(`./assets/${item.image}`)} 
                    alt={item.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', mt: 1 }}>
                    ${(item.price * item.quantity).toLocaleString('es-AR')}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <IconButton 
                  onClick={() => handleRemove(item.id)}
                  color="error"
                  sx={{ alignSelf: 'flex-start' }}
                >
                  <DeleteIcon />
                </IconButton>
              </Paper>
            ))
          )}
        </Grid>
        
        {/* Resumen del pedido */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
            <Typography variant="h6" gutterBottom>
              Resumen del Pedido
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Subtotal:</Typography>
              <Typography>${subtotal.toLocaleString('es-AR')}</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Envío:</Typography>
              <Typography>${shipping.toLocaleString('es-AR')}</Typography>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" color="primary">
                ${total.toLocaleString('es-AR')}
              </Typography>
            </Box>
            
            {cartItems.length > 0 && (
              <PaymentButton cartItems={cartItems.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
              }))} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;