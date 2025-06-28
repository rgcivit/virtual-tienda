import React, { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { Button, CircularProgress, Box, Typography } from '@mui/material';

initMercadoPago('APP_USR-ccb10d4f-ffb0-4a4c-8404-26e8de87dad6', { locale: 'es-AR' });

const PaymentButton = ({ cartItems }) => {
  const [preferenceData, setPreferenceData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      console.log("Intentando conectar a:", API_URL);
      
      const response = await axios.post(`${API_URL}/create_preference`, {
        items: cartItems
      }, {
        timeout: 10000 // 10 segundos de timeout
      });
      
      setPreferenceData(response.data);
      
      if (isMobile && response.data.init_point) {
        window.location.href = response.data.init_point;
      }
    } catch (err) {
      let errorMessage = 'Error al iniciar el proceso de pago';
      
      if (err.response) {
        // Error de respuesta del servidor
        errorMessage += `: ${err.response.status} - ${err.response.data.error || 'Error desconocido'}`;
      } else if (err.request) {
        // La solicitud fue hecha pero no hubo respuesta
        errorMessage += ': El servidor no respondió. Verifica que el backend esté en ejecución.';
      } else {
        // Error al configurar la solicitud
        errorMessage += `: ${err.message}`;
      }
      
      setError(errorMessage);
      console.error('Error completo:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      {error && (
        <Typography color="error" sx={{ mb: 2, whiteSpace: 'pre-wrap' }}>
          {error}
        </Typography>
      )}
      
      {loading ? (
        <CircularProgress />
      ) : preferenceData && !isMobile ? (
        <Wallet initialization={{ preferenceId: preferenceData.id }} />
      ) : preferenceData && isMobile ? (
        <Box>
          <Typography sx={{ mb: 2 }}>
            Redirigiendo a Mercado Pago...
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => window.location.href = preferenceData.init_point}
            size="large"
            fullWidth
          >
            Ir a Mercado Pago
          </Button>
        </Box>
      ) : (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handlePayment}
          size="large"
          fullWidth
          disabled={loading}
        >
          Pagar con Mercado Pago
        </Button>
      )}
    </Box>
  );
};

export default PaymentButton;