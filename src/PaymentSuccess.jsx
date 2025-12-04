import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  TextField,
  Alert,
  Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCart } from './context/cartContext';

const PaymentSuccess = () => {
  const location = useLocation();
  const { clearCart } = useCart();

  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get('payment_id');
  const status = queryParams.get('status');
  const paymentMethod = queryParams.get('payment_method_id');

  const [customerEmail, setCustomerEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Envía mail al servidor
  const sendEmails = async (options = { onlyCustomer: false }) => {
    if (!paymentId) return;

    setSending(true);
    setErrorMsg('');
    setSent(false);

    try {
      const res = await fetch('/api/send_order_email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentId,
          status,
          paymentMethod,
          customerEmail: customerEmail || null,
          onlyCustomer: options.onlyCustomer || false,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error desconocido al enviar mails');
      }

      setSent(true);
    } catch (err) {
      console.error('Error enviando emails:', err);
      setErrorMsg(err.message || 'Error al enviar el correo');
    } finally {
      setSending(false);
    }
  };

  // Al entrar a la página:
  //  - limpia el carrito
  //  - manda mail automático al admin (sin necesidad de email del cliente)
  useEffect(() => {
    clearCart();

    if (status === 'approved' && paymentId) {
      // solo admin
      sendEmails({ onlyCustomer: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, paymentId]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        textAlign: 'center',
        p: 3,
      }}
    >
      <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 3 }} />
      <Typography variant="h4" gutterBottom>
        ¡Pago Exitoso!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Gracias por tu compra. Tu pago ha sido procesado correctamente.
      </Typography>

      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 3,
          borderRadius: 2,
          mt: 2,
          maxWidth: 500,
          width: '100%',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Detalles del pago:
        </Typography>
        <Typography variant="body2">
          ID de pago: {paymentId || 'N/A'}
        </Typography>
        <Typography variant="body2">
          Estado: {status || 'N/A'}
        </Typography>
        <Typography variant="body2">
          Método de pago: {paymentMethod || 'N/A'}
        </Typography>
      </Box>

      {/* Sección para que el cliente deje su email */}
      <Box
        sx={{
          mt: 4,
          maxWidth: 500,
          width: '100%',
          textAlign: 'left',
        }}
      >
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
          ¿Querés recibir un comprobante por correo?
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Tu email"
            type="email"
            fullWidth
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="rgcivitt@gmail.com"
          />

          <Button
            variant="outlined"
            color="primary"
            disabled={!customerEmail || sending}
            onClick={() => sendEmails({ onlyCustomer: true })}
          >
            {sending ? 'Enviando...' : 'Enviar comprobante a mi correo'}
          </Button>

          {sent && (
            <Alert severity="success">
              ¡Listo! Te enviamos el comprobante a tu correo.
            </Alert>
          )}

          {errorMsg && (
            <Alert severity="error">
              {errorMsg}
            </Alert>
          )}
        </Stack>
      </Box>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ mt: 4 }}
      >
        Volver al inicio
      </Button>
    </Box>
  );
};

export default PaymentSuccess;
