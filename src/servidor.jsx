const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configura Mercado Pago con tu Access Token
mercadopago.configure({
  access_token: 'APP_USR-5595002757319588-050513-92015738b962c0e6b0a280a5c9b6ebdc-205863933', // Tu token real
  sandbox: true // Cambia a false si usas credenciales de producción
});

// Endpoint para crear preferencias de pago
app.post('/create_preference', async (req, res) => {
  try {
    const { items } = req.body;
      if (!items || !Array.isArray(items)) {
      console.error('No se recibieron items válidos:', req.body);
      return res.status(400).json({ error: 'No se recibieron items válidos' });
    }
    
   const preference = {
  items: items.map(item => ({
    title: item.title,
    unit_price: item.unit_price,
    quantity: item.quantity,
    currency_id: 'ARS'
  })),
  back_urls: {
    success: 'https://virtual-tienda.vercel.app/payment/success',
    failure: 'https://virtual-tienda.vercel.app/payment/failure',
    pending: 'https://virtual-tienda.vercel.app/payment/pending'
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

const PORT = process.env.PORT || 3001; // <-- Cambiado aquí
app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));