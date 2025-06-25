import React, { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { Button, CircularProgress, Box, Typography } from '@mui/material';
import { useCart } from './context/cartContext'; // Asegúrate de tener el contexto de carrito configurado

initMercadoPago('TU_PUBLIC_KEY', { locale: 'es-AR' }); // Reemplaza con tu public key

const PaymentButton = () => {
  const { cartItems } = useCart();
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3001/create_preference', {
        items: cartItems
      });
      setPreferenceId(response.data.id);
    } catch (err) {
      setError('Error al iniciar el proceso de pago');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      {loading ? (
        <CircularProgress />
      ) : preferenceId ? (
        <Wallet initialization={{ preferenceId }} />
      ) : (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handlePayment}
          size="large"
          fullWidth
        >
          Pagar con Mercado Pago
        </Button>
      )}
    </Box>
  );
};

export default PaymentButton;