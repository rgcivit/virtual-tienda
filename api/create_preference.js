// api/create_preference.js
import mercadopago from 'mercadopago';

// Configura tu access token de Mercado Pago
// En Vercel: Settings → Environment Variables → MP_ACCESS_TOKEN = tu ACCESS TOKEN de PRODUCCIÓN
mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
  sandbox: false, // pagos reales
});

// Handler para Vercel
export default async function handler(req, res) {
  // Solo permitimos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  // Verificamos que exista el token (por si en Vercel falta algo)
  if (!process.env.MP_ACCESS_TOKEN) {
    console.error('MP_ACCESS_TOKEN no está definido en las variables de entorno');
    return res.status(500).json({
      error: 'Error de configuración',
      details: 'MP_ACCESS_TOKEN no está definido en el servidor',
    });
  }

  try {
    const { items } = req.body;

    // Validación básica de items
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No se recibieron items válidos' });
    }

    // Normalizamos precio por si viene como string "$12.990"
    const parsePrice = (value) => {
      if (typeof value === 'number') return value;
      const str = String(value || '0')
        .replace('$', '')
        .replace(/\./g, '')
        .replace(',', '.');
      const num = Number(str);
      return Number.isFinite(num) ? num : 0;
    };

    const preference = {
      items: items.map((item) => {
        const price = parsePrice(item.unit_price);
        const quantity = Number(item.quantity) || 1;

        if (!price || price <= 0) {
          throw new Error(
            `Precio inválido para el item "${item.title || 'Producto sin nombre'}" (valor recibido: ${item.unit_price})`
          );
        }

        return {
          title: item.title || 'Producto sin nombre',
          unit_price: price,
          quantity,
          currency_id: 'ARS', // Argentina
        };
      }),
      back_urls: {
        success: 'https://virtual-tienda.vercel.app/payment/success',
        failure: 'https://virtual-tienda.vercel.app/payment/failure',
        pending: 'https://virtual-tienda.vercel.app/payment/pending',
      },
      auto_return: 'approved',
      binary_mode: true,
    };

    console.log('Preferencia que se enviará a MP:', JSON.stringify(preference));

    const response = await mercadopago.preferences.create(preference);

    return res.status(200).json({
      id: response.body.id,
      init_point: response.body.init_point,
      sandbox_init_point: response.body.sandbox_init_point,
    });
  } catch (error) {
    console.error('Error al crear preferencia:', error);
    const mpData = error?.response?.data || error?.cause || null;
    if (mpData) {
      console.error('Detalle de error de Mercado Pago:', mpData);
    }

    return res.status(500).json({
      error: 'Error al crear preferencia de pago',
      details: error.message,
      mpError: mpData,
    });
  }
}
