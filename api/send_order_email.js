// api/send_order_email.js
import nodemailer from 'nodemailer';

function createTransporter() {
  if (!process.env.SMTP_HOST) {
    throw new Error('Falta la variable SMTP_HOST');
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true', // true si usás 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const {
    paymentId,
    status,
    paymentMethod,
    customerEmail,
    onlyCustomer = false,
  } = req.body || {};

  if (!paymentId) {
    return res.status(400).json({ error: 'Falta paymentId' });
  }

  try {
    const transporter = createTransporter();

    const adminEmail = process.env.ADMIN_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || adminEmail;

    if (!adminEmail) {
      console.warn('ADMIN_EMAIL no está configurado; no se enviará mail al admin.');
    }

    const tasks = [];

    // 1) Mail para vos (detalle de la compra), salvo que solo sea para el cliente
    if (!onlyCustomer && adminEmail) {
      const adminHtml = `
        <h2>Nueva compra en Virtual Tienda</h2>
        <p><strong>ID de pago:</strong> ${paymentId}</p>
        <p><strong>Estado:</strong> ${status}</p>
        <p><strong>Método de pago:</strong> ${paymentMethod}</p>
        <p><strong>Email del cliente:</strong> ${customerEmail || '(no informado)'}</p>
        <hr />
        <p>Podés buscar más info en tu panel de Mercado Pago con el ID de pago.</p>
      `;

      tasks.push(
        transporter.sendMail({
          from: fromEmail,
          to: adminEmail,
          subject: `Nueva compra - Pago ${paymentId}`,
          html: adminHtml,
        })
      );
    }

    // 2) Mail para el cliente (si tenemos email)
    if (customerEmail) {
      const customerHtml = `
        <p>Hola,</p>
        <p>¡Muchas gracias por tu compra en <strong>Virtual Tienda</strong>! 🎉</p>
        <p>Estamos preparando tu pedido para enviártelo lo antes posible.</p>
        <p><strong>Detalles del pago:</strong></p>
        <ul>
          <li><strong>ID de pago:</strong> ${paymentId}</li>
          <li><strong>Estado:</strong> ${status}</li>
          <li><strong>Método de pago:</strong> ${paymentMethod}</li>
        </ul>
        <p>Si tenés alguna duda, podés responder a este correo.</p>
        <p>¡Gracias por confiar en nosotros! 🙌</p>
      `;

      tasks.push(
        transporter.sendMail({
          from: fromEmail,
          to: customerEmail,
          subject: 'Gracias por tu compra en Virtual Tienda',
          html: customerHtml,
        })
      );
    }

    if (tasks.length === 0) {
      return res
        .status(200)
        .json({ ok: true, info: 'No se enviaron mails (faltan emails)' });
    }

    await Promise.all(tasks);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error enviando emails:', error);
    return res.status(500).json({
      error: 'Error enviando emails',
      details: error.message,
    });
  }
}
