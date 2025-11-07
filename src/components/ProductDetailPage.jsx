// ...existing code...
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { Wallet } from '@mercadopago/sdk-react';

import ensendedorusb from "./assets/ensendedorusb.png";
import compresor from "./assets/compresor.png";
import filtrodeagua from "./assets/filtrodeagua4.jpg";
import ensendedordetalle from "./assets/ensendedordetalle.png";
import filtrodeaguadetalle from "./assets/filtrodeaguadetalle.jpg";
import restauradorfaros from './assets/restauradorfaros.jpg';
import restauradorfarosdetalle from './assets/restauradorfarosdetalle.jpg';
import portavaso from './assets/portavaso (1).jpg';
import portavasodetalle from './assets/portavasodetalle.jpg';
import infladorportatil from "./assets/infladorportatil.jpg";
import infladorportatildetalle from "./assets/infladorportatildetalle.jpg";
import gafasinteligentes from "./assets/gafasinteligentes.jpg";
import gafasinteligentesdetalle from "./assets/gafasinteligentesdetalle.jpg";
import multimedia from "./assets/multimedia.jpg";
import multimediadetalle from "./assets/multimediadetalle.jpg";
import motosierra from "./assets/motosierra.jpg";
import motosierradetalle from "./assets/motosierradetalle.jpg";
import guantesled from "./assets/guantesled.jpg";
import guantesleddetalle from "./assets/guantesleddetalle.jpg";
import pulceramagnetica from "./assets/pulceramagnetica.jpg";
import pulceramagneticadetalle from "./assets/pulceramagneticadetalle.jpg";
import nerdminer1 from "./assets/nerdminer1.webp";
import nerdminer3detalle from "./assets/nerdminer3detalle.webp";
import compresordetalle from "./assets/compresordetalle.png";
import lamparadeemergencia from "./assets/lamparadeemergencia.webp";
import lamparadeemergenciadetalle from "./assets/lamparadeemergenciadetalle.webp";
import powerbanksolar from "./assets/powerbanksolar.png";
import powerbanksolardetalle from "./assets/powerbanksolardetalle.jpg";
import linternamultifuncional from "./assets/linternamultifuncional.jpg";
import linternamultifuncionaldetalle from "./assets/linternamultifuncionaldetalle.webp";
import cocinacamping from "./assets/cocinacamping.png";
import cocinacampingdetalle from "./assets/cocinacampingdetalle.png";
// ...existing code...

// Función para parsear precio desde cadenas tipo "$129.990" a número 129990
const parsePrice = (priceStr) => {
  if (typeof priceStr === 'number') return priceStr;
  const s = String(priceStr || '');
  const cleaned = s.replace(/[^0-9,.-]/g, '');
  const normalized = cleaned.replace(/\./g, '').replace(',', '.');
  const n = parseFloat(normalized);
  return Number.isFinite(n) ? n : 0;
};

const ProductDetailPage = () => {
  const { id } = useParams(); // ID desde la ruta
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    if (!product) return;
    // Crear preferencia cuando se obtenga el producto
    const unitPrice = parsePrice(product.price);
    fetch('/api/create_preference', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [
          {
            title: product.name,
            unit_price: unitPrice,
            quantity: 1
          }
        ]
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.id) setPreferenceId(data.id);
        else {
          console.error('Respuesta inválida al crear preferencia:', data);
        }
      })
      .catch(err => {
        console.error('Error creando preferencia:', err);
      });
  }, [product]);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        // Lista local de productos (simulada)
        const mockProducts = [
          {
            id: 1,
            name: "Encendedor Recargable USB con Linterna Negro",
            description: "El encendedor multipropósito es una innovación de vanguardia.",
            longDescription: `El encendedor multipropósito es una innovación de vanguardia...`,
            price: "$11.990",
            image: ensendedorusb,
            detailImage: ensendedordetalle,
            tags: ["Recargable", "Portátil", "Linterna LED", "USB-C", "Resistente"],
            stock: 10
          },
          {
            id: 2,
            name: "Grifo con Filtro de Agua",
            description: "Grifo con Filtro de Agua – Ahorro, limpieza y flexibilidad en tu cocina o baño.",
            longDescription: `Descripción larga del grifo...`,
            price: "$12.990",
            image: filtrodeagua,
            detailImage: filtrodeaguadetalle,
            tags: ["Grifo", "Filtro de agua", "Cocina", "Baño", "Ahorro"],
            stock: 6
          },
          {
            id: 3,
            name: "Soporte Universal para Botella y Celular",
            description: "Soporte Universal para Botella y Celular",
            longDescription: `Descripción larga soporte...`,
            price: "$29.900",
            image: portavaso,
            detailImage: portavasodetalle,
            tags: ["Soporte", "Universal", "Botella", "Celular", "Bici"],
            stock: 3
          },
          {
            id: 4,
            name: "Inflador Digital Portátil",
            description: "Tu compañero ideal para la aventura.",
            longDescription: `Descripción larga inflador...`,
            price: "$55.000",
            image: infladorportatil,
            detailImage: infladorportatildetalle,
            tags: ["Inflador", "Portátil", "Digital", "USB"],
            stock: 3
          },
          {
            id: 5,
            name: "KIT RESTAURADOR DE FAROS",
            description: "¡Volvé a ver con claridad!",
            longDescription: `Detalle del kit restaurador...`,
            price: "$14.990",
            image: restauradorfaros,
            detailImage: restauradorfarosdetalle,
            tags: ["Restaurador de faros", "Kit de restauración"],
            stock: 5
          },
          {
            id: 6,
            name: "Lentes Inteligentes con Bluetooth y Audio Integrado",
            description: "¡Comodidad, estilo y tecnología!",
            longDescription: `Detalle lentes inteligentes...`,
            price: "$29.900",
            image: gafasinteligentes,
            detailImage: gafasinteligentesdetalle,
            tags: ["Bluetooth", "Audio", "Accesorios"],
            stock: 3
          },
          {
            id: 7,
            name: "Reproductor Universal para Autos",
            description: "¡Transformá tu viaje en una experiencia multimedia!",
            longDescription: `Detalle reproductor...`,
            price: "$89.990",
            image: multimedia,
            detailImage: multimediadetalle,
            tags: ["Multimedia", "Bluetooth"],
            stock: 2
          },
          {
            id: 8,
            name: "Mini Motosierra Eléctrica BEKR 24V",
            description: "Potencia portátil para tus tareas de corte.",
            longDescription: `Detalle motosierra...`,
            price: "$59.990",
            image: motosierra,
            detailImage: motosierradetalle,
            tags: ["Motosierra", "Eléctrica"],
            stock: 2
          },
          {
            id: 9,
            name: "Guantes con Linterna LED Luz Blanca",
            description: "Guantes con linterna integrada.",
            longDescription: `Detalle guantes LED...`,
            price: "$14.990",
            image: guantesled,
            detailImage: guantesleddetalle,
            tags: ["Guantes", "LED"],
            stock: 4
          },
          {
            id: 10,
            name: "Pulsera Muñequera Magnética Para Tornillos Y Herramientas",
            description: "La aliada perfecta para tus proyectos.",
            longDescription: `Detalle pulsera magnética...`,
            price: "$14.990",
            image: pulceramagnetica,
            detailImage: pulceramagneticadetalle,
            tags: ["Magnética", "Ergonómica"],
            stock: 3
          },
          {
            id: 11,
            name: "Nerdminer 2 Miner Btc Solo Lotter 55-60 Kh/s",
            description: "Equipo de minería en modo lotería.",
            longDescription: `Alta eficiencia y bajo consumo.`,
            price: "$69.990",
            image: nerdminer1,
            detailImage: nerdminer3detalle,
            tags: ["55-60 Kh/s", "Modo lotería"],
            stock: 1
          },
          {
            id: 12,
            name: "Compresor de Aire Portátil 12v",
            description: "Mini compresor portátil para inflado.",
            longDescription: `Detalle compresor...`,
            price: "$40.000",
            image: compresor,
            detailImage: compresordetalle,
            tags: ["Portátil", "8 bar"],
            stock: 2
          },
          {
            id: 13,
            name: "Luz De Emergencia Led Solar 5 Faros 2029",
            description: "Ampolleta solar recargable de 5 caras.",
            longDescription: `Detalle lámpara...`,
            price: "$10.990",
            image: lamparadeemergencia,
            detailImage: lamparadeemergenciadetalle,
            tags: ["Recargable", "Solar"],
            stock: 12
          },
          {
            id: 14,
            name: "Power Bank Solar y Corriente con 4 Cables de 20.000Mah",
            description: "Power bank 20000mAh con carga solar.",
            longDescription: `Detalle powerbank...`,
            price: "$26.990",
            image: powerbanksolar,
            detailImage: powerbanksolardetalle,
            tags: ["20000 mAh", "Solar"],
            stock: 5
          },
          {
            id: 15,
            name: "Linterna Foco Multifuncional Solar o Recargable USB",
            description: "Linterna multifuncional con modos y powerbank.",
            longDescription: `Detalle linterna multifuncional...`,
            price: "$35.990",
            image: linternamultifuncional,
            detailImage: linternamultifuncionaldetalle,
            tags: ["Recargable", "Powerbank"],
            stock: 8
          },
          {
            id: 16,
            name: "Cocina de Camping Portátil a Gas con Maleta Sobremesa",
            description: "Mini cocina portátil con encendido automático.",
            longDescription: `Detalle cocina camping...`,
            price: "$35.990",
            image: cocinacamping,
            detailImage: cocinacampingdetalle,
            tags: ["Portátil", "Gas"],
            stock: 3
          }
        ];

        const foundProduct = mockProducts.find(p => p.id === parseInt(id, 10));
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Producto no encontrado</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        {product.price}
      </Typography>

      <Box
        component="img"
        src={product.detailImage || product.image}
        alt={product.name}
        sx={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          margin: '20px 0',
          borderRadius: 2,
          boxShadow: 3,
          maxHeight: 500,
          objectFit: 'contain'
        }}
      />

      <Typography variant="body1" paragraph>
        {product.longDescription || product.description}
      </Typography>

      <Typography variant="body1" color={product.stock > 0 ? 'text.primary' : 'error'} sx={{ mb: 2 }}>
        {product.stock > 0 ? `Disponibilidad: En stock (${product.stock})` : 'Sin stock por el momento'}
      </Typography>

      {/* BOTÓN / WALLET DE MERCADO PAGO */}
      <Box sx={{ mt: 3 }}>
        {preferenceId ? (
          <Wallet
            initialization={{ preferenceId }}
            customization={{ texts: { valueProp: 'smart_option' } }}
          />
        ) : (
          <Button variant="contained" disabled>
            Preparando pago...
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
// ...existing code...