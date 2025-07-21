const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');

const app = express();

// 1. Configuración mejorada de CORS
const allowedOrigins = [
  'https://virtual-tienda.vercel.app',
  'https://virtual-tienda-git-main-rodrigo-guevara-civits-projects.vercel.app',
  'http://localhost:3001',
   'http://localhost:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir solicitudes sin 'origin' (como apps móviles o curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Origen no permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. Manejar solicitudes OPTIONS (preflight)
app.options('*', cors()); // Habilitar preflight para todas las rutas

app.use(express.json());

// 3. Configura Mercado Pago con tu Access Token
mercadopago.configure({
  access_token: 'APP_USR-5595002757319588-050513-92015738b962c0e6b0a280a5c9b6ebdc-205863933',
  sandbox: false
});

// 4. Endpoint para crear preferencias de pago (con mejoras)
app.post('/create_preference', async (req, res) => {
  try {
    const { items } = req.body;
    console.log('Items recibidos:', items);
    
    if (!items || !Array.isArray(items)) {
      console.error('No se recibieron items válidos:', req.body);
      return res.status(400).json({ error: 'No se recibieron items válidos' });
    }
    
    // Validar y formatear items
    const validItems = items.map(item => ({
      title: item.title || 'Producto sin nombre',
      unit_price: Number(item.unit_price) || 0,
      quantity: Number(item.quantity) || 1,
      currency_id: 'ARS'
    }));

    const preference = {
      items: validItems,
      back_urls: {
        success: 'https://virtual-tienda.vercel.app/payment/success',
        failure: 'https://virtual-tienda.vercel.app/payment/failure',
        pending: 'https://virtual-tienda.vercel.app/payment/pending'
      },
      auto_return: 'approved',
      binary_mode: true
    };

    const response = await mercadopago.preferences.create(preference);
    
    // 5. Devolver más datos para soporte móvil
    res.json({ 
      id: response.body.id,
      init_point: response.body.init_point, // Para redirección en móviles
      sandbox_init_point: response.body.sandbox_init_point
    });
    
  } catch (error) {
    console.error('Error creando preferencia:', error);
    res.status(500).json({ 
      error: 'Error al crear preferencia de pago',
      details: error.message 
    });
  }
});

// 6. Middleware para manejar errores de CORS
app.use((err, req, res, next) => {
  if (err.message === 'Origen no permitido por CORS') {
    res.status(403).json({ error: 'Origen no permitido' });
  } else {
    next(err);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));