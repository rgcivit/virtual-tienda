const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configura Mercado Pago con tu Access Token
mercadopago.configure({
  access_token: 'TU_ACCESS_TOKEN_DE_PRODUCCION', // Reemplaza con tu token real
  sandbox: true // Cambiar a false en producción
});

// Endpoint para crear preferencias de pago
app.post('/create_preference', async (req, res) => {
  try {
    const { items } = req.body;
    
    const preference = {
      items: items.map(item => ({
        title: item.name,
        unit_price: item.price,
        quantity: item.quantity,
        currency_id: 'ARS'
      })),
      back_urls: {
        success: 'http://localhost:3000/payment/success',
        failure: 'http://localhost:3000/payment/failure',
        pending: 'http://localhost:3000/payment/pending'
      },
      auto_return: 'approved',
      binary_mode: true
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (error) {
    console.error('Error creando preferencia:', error);
    res.status(500).json({ error: 'Error al crear preferencia de pago' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));