// ProductDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  IconButton,
} from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Wallet } from '@mercadopago/sdk-react';

// IMPORTS DE IMÁGENES (los dejo como ya los tenías)
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

  // índice del carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // cuando cambia el producto, reseteamos el carrusel a la primera imagen
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product]);

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
            quantity: 1,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.id) setPreferenceId(data.id);
        else {
          console.error('Respuesta inválida al crear preferencia:', data);
        }
      })
      .catch((err) => {
        console.error('Error creando preferencia:', err);
      });
  }, [product]);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const mockProducts = [
          {
            id: 1,
            name: "Encendedor Recargable USB con Linterna Negro",
            description:
              "El encendedor multipropósito es una innovación de vanguardia que hará que tus momentos sean más prácticos y emocionantes que nunca! Este versátil dispositivo es mucho más que un simple encendedor; es una herramienta multifuncional que combina elegancia y practicidad.",
            longDescription:
              "Este encendedor USB es recargable y tiene un diseño moderno y compacto. Perfecto para llevar contigo a todas partes. Con carga rápida USB-C y luz indicadora. Disponible en varios colores. Además, incluye una potente linterna LED que lo hace ideal para acampadas, emergencias o uso diario.",
            price: "$11.990",
            image: ensendedorusb,
            detailImage: ensendedordetalle,
            // 👇 NUEVO: galería opcional
            gallery: [ensendedorusb, ensendedordetalle],
            tags: ["Recargable", "Portátil", "Linterna LED", "USB-C", "Resistente"],
            stock: 1,
          },
          {
            id: 2,
            name: "Grifo con Filtro de Agua ",
            description:
              "Grifo con Filtro de Agua – Ahorro, limpieza y flexibilidad en tu cocina o baño.",
            longDescription:
              "Este grifo cuenta con un filtro de agua integrado que garantiza agua limpia y purificada para tu hogar. Su diseño moderno se adapta a cualquier estilo de cocina o baño, y su instalación es rápida y sencilla.",
            price: "$12.990",
            image: filtrodeagua,
            detailImage: filtrodeaguadetalle,
            gallery: [filtrodeagua, filtrodeaguadetalle],
            tags: ["Grifo", "Filtro de agua", "Cocina", "Baño", "Ahorro"],
            stock: 6,
          },
          // 👉 aquí puedes ir agregando gallery: [...] al resto,
          // por ahora dejo el resto igual que lo tenías:
          {
            id: 3,
            name: "Soporte Universal para Botella y Celular ",
            description:
              "¡La solución práctica y resistente para tus salidas en bici, moto o cochecito!.",
            longDescription: `"🚲 Ideal para bici, moto, cochecito o scooter  
🔒 Fijación giratoria con sistema de bloqueo 360°  
📱 Compartimento seguro para tu celular  
🧴 Espacio firme para botella térmica o de plástico  
🧱 Material plástico resistente y liviano (180g)  
📐 Medidas: 20 x 10 x 11 cm  
🎨 Colores disponibles: Azul, Verde y Negro  
🔧 Fácil de instalar y ajustar."`,
            price: "$29.900",
            image: portavaso,
            detailImage: portavasodetalle,
            gallery: [portavaso, portavasodetalle],
            tags: ["Soporte", "Universal", "Botella", "Celular", "Bici"],
            stock: 3,
          },
          // ... sigue tu lista completa de productos,
          // puedes ir añadiendo gallery a los que quieras
          {
            id: 4,
            name: "Inflador Digital Portátil .",
            description:
              "Tu compañero ideal para la aventura ¡Compacto, potente y listo para cualquier terreno!.",
            longDescription: `"🏕️ Perfecto para salidas de camping, travesías en bici o senderismo  
🔋 Batería de larga duración (4000mAh) para inflar sin depender de enchufes  
📈 Presión máxima de 150 PSI – ideal para bicicletas, motos, pelotas y más  
🎯 Pantalla digital con lectura precisa y apagado automático  
🔇 Funcionamiento silencioso (menos de 78dB)  
👜 Diseño compacto, fácil de guardar en mochila o alforja

✅ Preset de presión para distintos tipos de ruedas  
✅ Compatible con válvulas comunes (Presta, Schrader, etc.)  
✅ Carga por USB – ¡siempre listo!

💥 Precio especial: $55.000

🌄 ¡No te quedes varado en medio del camino! Este inflador es tu seguro de movilidad en cualquier aventura 🚵‍♀️"`,
            price: "$55.000",
            image: infladorportatil,
            detailImage: infladorportatildetalle,
            gallery: [infladorportatil, infladorportatildetalle],
            tags: [
              "Inflador",
              "Portátil",
              "Batería de larga duración",
              "Variable",
              "Digital",
            ],
            stock: 3,
          },
          // ... el resto de productos igual que ya los tenías ...
          {
            id: 11,
            name: "Nerdminer 2 Miner Btc Solo Lotter 55-60 Kh/s",
            description:
              "Diseño exclusivo: la máquina de lotería BTC adopta la última tecnología.",
            longDescription:
              "Alta eficiencia y bajo consumo, modo Solo. Color aleatorio.",
            price: "$69.990",
            image: nerdminer1,
            detailImage: nerdminer3detalle,
            gallery: [nerdminer1, nerdminer3detalle],
            tags: [
              "Opera a 55-60 Kh/s",
              "Pantalla 2.8\"",
              "Eficiencia",
              "PCB",
              "Modo lotería",
            ],
            stock: 1,
          },
          // ... etc. para los demás
        ];

        const foundProduct = mockProducts.find(
          (p) => p.id === parseInt(id, 10)
        );
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

  // armamos el array de imágenes a mostrar en el carrusel
  const images =
    (product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.detailImage, product.image]
    ).filter(Boolean);

  const hasMultipleImages = images.length > 1;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">{product.name}</Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ mb: 2 }}
      >
        {product.price}
      </Typography>

      {/* CARRUSEL DE IMÁGENES */}
      <Box
        sx={{
          position: 'relative',
          maxWidth: 500,
          margin: '20px auto',
        }}
      >
        <Box
          component="img"
          src={images[currentImageIndex]}
          alt={product.name}
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: 2,
            boxShadow: 3,
            maxHeight: 500,
            objectFit: 'contain',
          }}
        />

        {hasMultipleImages && (
          <>
            {/* Flecha izquierda */}
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                top: '50%',
                left: 8,
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.4)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
              }}
              size="small"
            >
              <ArrowBackIosNew fontSize="small" />
            </IconButton>

            {/* Flecha derecha */}
            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                top: '50%',
                right: 8,
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.4)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
              }}
              size="small"
            >
              <ArrowForwardIos fontSize="small" />
            </IconButton>

            {/* Miniaturas / indicadores */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 1.5,
                gap: 1,
              }}
            >
              {images.map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 1,
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border:
                      index === currentImageIndex
                        ? '2px solid #1976d2'
                        : '1px solid rgba(0,0,0,0.2)',
                    opacity: index === currentImageIndex ? 1 : 0.7,
                    transition: 'all 0.2s ease',
                  }}
                />
              ))}
            </Box>
          </>
        )}
      </Box>

      <Typography variant="body1" paragraph>
        {product.longDescription || product.description}
      </Typography>

      <Typography
        variant="body1"
        color={product.stock > 0 ? 'text.primary' : 'error'}
        sx={{ mb: 2 }}
      >
        {product.stock > 0
          ? `Disponibilidad: En stock (${product.stock})`
          : 'Sin stock por el momento'}
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
