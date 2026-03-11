import React, { useState, useEffect, useMemo } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Modal,
  Grid,
  IconButton,
  Rating,
  Chip,
  useTheme,
  Container,
  Pagination,
  CircularProgress // Para la simulación de carga
} from "@mui/material";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../context/cartContext";

// === CONSTANTE DE PAGINACIÓN ===
const PRODUCTS_PER_PAGE = 16;
// ===============================

// Imágenes (MANTENEMOS ESTOS IMPORTS)
import ensendedorusb from "./assets/ensendedorusb.png";
import cubreasiento from "./assets/cubreasiento.jpg";
import cubreasientodetalle1 from "./assets/cubreasientodetalle1.jpg";
import cubreasientodetalle2 from "./assets/cubreasientodetalle2.jpg";
import cubreasientodetalle3 from "./assets/cubreasientodetalle3.jpg";
import cubreasientodetalle4 from "./assets/cubreasientodetalle4.jpg";
import cubreasientodetalle5 from "./assets/cubreasientodetalle5.jpg";
import filtrodeagua from "./assets/filtrodeagua4.jpg";
import ensendedordetalle from "./assets/ensendedordetalle.png";
import filtrodeaguadetalle from "./assets/filtrodeaguadetalle.jpg";
import restauradorfaros from './assets/restauradorfaros.jpg';
import restauradorfarosdetalle from './assets/restauradorfarosdetalle.jpg';
import portavaso from './assets/portavaso (1).jpg';
import portavasodetalle from "./assets/portavasodetalle.jpg";
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
import asientomascotas from "./assets/asientomascotas.jpg";
import asientomascotasdetalle from "./assets/asientomascotasdetalle.jpg";
import asientomascotasdetalle1 from "./assets/asientomascotasdetalle1.jpg";
import asientomascotasdetalle2 from "./assets/asientomascotasdetalle2.jpg";
import fitnesswatch from "./assets/fitnesswatch.jpg";
import fitnesswatchdetalle1 from "./assets/fitnesswatchdetalle1.jpg";
import fitnesswatchdetalle2 from "./assets/fitnesswatchdetalle2.jpg";
import fitnesswatchdetalle3 from "./assets/fitnesswatchdetalle3.jpg";
import fitnesswatchdetalle4 from "./assets/fitnesswatchdetalle4.jpg";
import fitnesswatchdetalle5 from "./assets/fitnesswatchdetalle5.jpg";
import fitnesswatchdetalle6 from "./assets/fitnesswatchdetalle6.jpg";
import fitnesswatchdetalle7 from "./assets/fitnesswatchdetalle7.jpg";
import fitnesswatchdetalle8 from "./assets/fitnesswatchdetalle8.jpg";
import vasomusical from "../components/assets/vasomusical.jpeg";
import vasomusical1 from "../components/assets/vasomusical1.jpeg";
import vasomusical2 from "../components/assets/vasomusical2.jpeg";
import vasomusical3 from "../components/assets/vasomusical3.jpeg";
import vasomusical4 from "../components/assets/vasomusical4.jpeg";
import placadental from "./assets/placadental.jpeg";
import placadental1 from "./assets/placadental1.jpeg";
import placadental2 from "./assets/placadental2.jpeg";
import placadental3 from "./assets/placadental3.jpeg";
import placadental4 from "./assets/placadental4.jpeg";
import placadental5 from "./assets/placadental5.jpeg";
import placadental6 from "./assets/placadental6.jpeg";
import cepillomascota from "../components/assets/cepillomascota.jpeg";
import cepillomascota1 from "../components/assets/cepillomascota1.jpeg";
import cepillomascota2 from "../components/assets/cepillomascota2.jpeg";
import cepillomascota3 from "../components/assets/cepillomascota3.jpeg";
import cepillomascota4 from "../components/assets/cepillomascota4.jpeg";
import cepillopelosmascotas from "../components/assets/cepillopelosmascotas.jpeg";
import cepillopelosmascotas1 from "../components/assets/cepillopelosmascotas1.jpeg";
import cepillopelosmascotas2 from "../components/assets/cepillopelosmascotas2.jpeg";
import cepillopelosmascotas3 from "../components/assets/cepillopelosmascotas3.jpeg";
import bolsodeviaje from "../components/assets/bolsodeviaje.jpeg";
import bolsodeviaje1 from "../components/assets/bolsodeviaje1.jpeg";
import bolsodeviaje2 from "../components/assets/bolsodeviaje2.jpeg";
import bolsodeviaje3 from "../components/assets/bolsodeviaje3.jpeg";
import bolsodeviaje4 from "../components/assets/bolsodeviaje4.jpeg";
import bolsodeviaje5 from "../components/assets/bolsodeviaje5.jpeg";
import puzzleinteractivo from "../components/assets/puzzleinteractivo.jpeg";
import puzzleinteractivo1 from "../components/assets/puzzleinteractivo1.jpeg";
import puzzleinteractivo2 from "../components/assets/puzzleinteractivo2.jpeg";
import puzzleinteractivo3 from "../components/assets/puzzleinteractivo3.jpeg";
import puzzleinteractivo4 from "../components/assets/puzzleinteractivo4.jpeg";
import puzzleinteractivo5 from "../components/assets/puzzleinteractivo5.jpeg";
import puzzleinteractivo6 from "../components/assets/puzzleinteractivo6.jpeg";
import setperfumes1 from "../components/assets/setperfumes1.jpeg";
import setperfumes2 from "../components/assets/setperfumes2.jpeg";
import setperfumes3 from "../components/assets/setperfumes3.jpeg";
import setperfumes4 from "../components/assets/setperfumes4.jpeg";
import setperfumes5 from "../components/assets/setperfumes5.jpeg";
import ozono from "../components/assets/ozono.jpeg";
import ozono1 from "../components/assets/ozono1.jpeg"; 
import ozono2 from "../components/assets/ozono2.jpeg";
import ozono3 from "../components/assets/ozono3.jpeg";
import ozono4 from "../components/assets/ozono4.jpeg";
import miniperf1   from "../components/assets/miniperf1.jpeg";
import miniperf2 from "../components/assets/miniperf2.jpeg"; 
import miniperf3 from "../components/assets/miniperf3.jpeg";
import miniperf4 from "../components/assets/miniperf4.jpeg";




/* =======================
   CARD DE PRODUCTO (SIN CAMBIOS)
======================= */
const ProductCard = ({ product, onQuickView, onAddToCart }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' },
      position: 'relative',
      borderRadius: 2,
      overflow: 'hidden',
      border: '1px solid rgba(0, 0, 0, 0.1)'
    }}>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<ZoomInIcon />}
        onClick={() => onQuickView(product)}
        sx={{
          position: 'absolute', top: 10, right: 10, zIndex: 1,
          borderRadius: 20, fontWeight: 'bold', textTransform: 'none',
          boxShadow: 3, '&:hover': { boxShadow: 6, transform: 'scale(1.05)' },
          transition: 'all 0.3s ease',
          bgcolor: theme.palette.primary.main, color: 'white',
          fontSize: '0.8rem', px: 1.5, py: 0.5
        }}
      >
        Vista Rápida
      </Button>

      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          '&:hover': { transform: 'scale(1.05)' },
          p: 1,
          backgroundColor: '#f8f9fa',
          cursor: 'pointer'
        }}
        onClick={() => onQuickView(product)}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          mb: 1,
          minHeight: '60px'
        }}>
          {product.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" color="primary" sx={{ mt: 'auto', fontWeight: 'bold' }}>
            {product.price}
          </Typography>
          {product.stock !== undefined && (
            product.stock > 0
              ? <Chip label={`Stock: ${product.stock}`} color="primary" size="small" />
              : <Typography color="error" sx={{ fontWeight: 700, ml: 2 }}>Sin stock por el momento</Typography>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ textTransform: 'none', fontWeight: 600 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate(`/products/${product.id}`, { state: { product } });
            }}
          >
            Detalle
          </Button>
        </Box>
      </CardContent>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 'auto', borderRadius: 0, py: 1.5, fontWeight: 'bold', letterSpacing: '1px', fontSize: '1rem' }}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAddToCart(product); }}
        disabled={product.stock !== undefined && product.stock <= 0}
      >
        Añadir al carrito
      </Button>
    </Card>
  );
};

/* =======================
   MODAL VISTA RÁPIDA (CON CORRECCIÓN DE SINTAXIS)
======================= */
const QuickViewModal = ({ product, open, onClose, onAddToCart }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => { setCurrentImageIndex(0); }, [product?.id]);
  if (!product) return null;

// CORRECCIÓN DE SINTAXIS EN EL ARRAY DE IMÁGENES
const images = (
  Array.isArray(product.detailImage) && product.detailImage.length > 0
    ? product.detailImage
    : product.detailImages && Array.isArray(product.detailImages) && product.detailImages.length > 0
    ? product.detailImages
    : product.gallery && product.gallery.length > 0
    ? product.gallery
    : (product.detailImage ? [product.detailImage, product.image] : [product.image])
).filter(Boolean).flat();


  const hasMultipleImages = images.length > 1;

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddFromModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="quick-view-modal"
      aria-describedby="quick-view-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(3px)' }}
    >
      <Box sx={{
        width: '80%', maxWidth: 900, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4,
        position: 'relative', maxHeight: '90vh', overflowY: 'auto'
      }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              borderRadius: 2, overflow: 'hidden', boxShadow: 3, height: 350, display: 'flex',
              alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5', position: 'relative'
            }}>
              {images.length > 0 && (
                <>
                  <img
                    src={images[currentImageIndex]}
                    alt={product.name + " detalle"}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  />
                  {hasMultipleImages && (
                    <>
                      <IconButton
                        onClick={handlePrevImage}
                        sx={{
                          position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
                          bgcolor: 'rgba(255,255,255,0.8)', '&:hover': { bgcolor: 'rgba(255,255,255,1)' }
                        }}
                      >
                        {"<"}
                      </IconButton>
                      <IconButton
                        onClick={handleNextImage}
                        sx={{
                          position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                          bgcolor: 'rgba(255,255,255,0.8)', '&:hover': { bgcolor: 'rgba(255,255,255,1)' }
                        }}
                      >
                        {">"}
                      </IconButton>
                    </>
                  )}
                </>
              )}
            </Box>

            {hasMultipleImages && (
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                {images.map((img, idx) => (
                  <Box
                    key={idx}
                    component="img"
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    sx={{
                      width: 60, height: 60, objectFit: 'cover', borderRadius: 1, cursor: 'pointer',
                      border: idx === currentImageIndex ? '2px solid #1976d2' : '1px solid #ddd',
                      opacity: idx === currentImageIndex ? 1 : 0.7,
                    }}
                  />
                ))}
            </Box>
            )}

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={handleAddFromModal}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddShoppingCartIcon />}
                sx={{ py: 1.5, px: 4, fontWeight: 'bold', letterSpacing: '1px', borderRadius: 1, width: '100%' }}
                disabled={product.stock !== undefined && product.stock <= 0}
              >
                {product.stock !== undefined && product.stock <= 0 ? 'Sin stock por el momento' : 'Añadir al carrito'}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>{product.name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.5} precision={0.5} readOnly sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">(24 reseñas)</Typography>
            </Box>
            <Typography variant="h5" color="primary" sx={{ mb: 3, fontWeight: 'bold' }}>{product.price}</Typography>
            <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
              {product.longDescription || product.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
              {product.tags?.map((tag, index) => (
                <Chip key={index} label={tag} color="primary" variant="outlined" />
              ))}
            </Box>
            <Typography variant="body1" color="text.secondary">
              <strong>Disponibilidad:</strong>{" "}
              {product.stock !== undefined ? (product.stock > 0 ? `En stock (${product.stock})` : 'Sin stock por el momento') : 'Consultar stock'}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate(`/products/${product.id}`, { state: { product } });
                }}
              >
                Ver detalle
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

// -----------------------------------------------------------
// FUNCIÓN AUXILIAR: Obtiene las categorías a filtrar
// -----------------------------------------------------------
const getCategoriesToFilter = (categoryParam) => {
    // Si el parámetro está vacío o es 'todos', retorna un array vacío.
    if (!categoryParam || categoryParam === 'todos') {
        return [];
    }
    // Convierte el string (ej: "tecnologia,camping") en un array de strings limpios y minúsculas
    return categoryParam
        .split(',')
        .map(c => c.trim().toLowerCase())
        .filter(c => c.length > 0);
};


/* =======================
   GRID DE PRODUCTOS (LÓGICA DE FILTRADO Y PAGINACIÓN)
======================= */
const ProductGrid = () => {
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();
  
  // Leer parámetro de la URL
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || 'todos'; 

  // ✅ ESTADO DE PAGINACIÓN (ÚNICA DECLARACIÓN)
  const [currentPage, setCurrentPage] = useState(1);

  // Lista completa de productos (mantienes tus datos originales)
  const initialProducts = [
    {
      id: 1,
      name: "Encendedor Recargable USB con Linterna Negro",
      description: "El encendedor multipropósito es una innovación de vanguardia que hará que tus momentos sean más prácticos y emocionantes que nunca! Este versátil dispositivo es mucho más que un simple encendedor; es una herramienta multifuncional que combina elegancia y practicidad.",
      longDescription: "Este encendedor USB es recargable y tiene un diseño moderno y compacto. Perfecto para llevar contigo a todas partes. Con carga rápida USB-C y luz indicadora. Disponible en varios colores. Además, incluye una potente linterna LED que lo hace ideal para acampadas, emergencias o uso diario.",
      price: "$11.990",
      image: ensendedorusb,
      detailImage: ensendedordetalle,
      tags: ["Recargable", "Portátil", "Linterna LED", "USB-C", "Resistente", "Accesorios"],
      category: "tecnologia", 
      stock: 1
    },
    {
      id: 2,
      name: "Grifo con Filtro de Agua ",
      description: "Grifo con Filtro de Agua – Ahorro, limpieza y flexibilidad en tu cocina o baño.",
      longDescription: "Este grifo cuenta con un filtro de agua integrado que garantiza agua limpia y purificada para tu hogar. Su diseño moderno se adapta a cualquier estilo de cocina o baño, y su instalación es rápida y sencilla.",
      price: "$12.990",
      image: filtrodeagua,
      detailImage: filtrodeaguadetalle,
      tags: ["Grifo", "Filtro de agua", "Cocina", "Baño", "Ahorro"],
      category: "hogar",
      stock: 6
    },
    {
      id: 3,
      name: "Soporte Universal para Botella y Celular ",
      description: "¡La solución práctica y resistente para tus salidas en bici, moto o cochecito!.",
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
      tags: ["Soporte", "Universal", "Botella", "Celular", "Bici", "Accesorios"],
      category: "camping",
      stock: 3
    },
    {
      id: 4,
      name: "Inflador Digital Portátil .",
      description: "Tu compañero ideal para la aventura ¡Compacto, potente y listo para cualquier terreno!.",
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
      tags: ["Inflador", "Portátil", "Batería de larga duración", "Variable", "Digital", "Camping"],
      category: "camping",
      stock: 3
    },
    {
      id: 5,
      name: "KIT RESTAURADOR DE FAROS ",
      description: " ¡Volvé a ver con claridad! ¿Tus faros están opacos, amarillentos o rayados? Este kit es la solución rápida, económica y efectiva 💡",
      longDescription: `🔧 Incluye todo lo necesario:  
- Lijas de distintos granos 🪵  
- Pasta pulidora profesional 🧴  
- Aplicador de espuma 🧽  
- Cinta de enmascarar para proteger la carrocería 🚗  
- Protector UV para acabado duradero ☀️

✅ Beneficios clave:  
- Mejora la estética del vehículo ✨  
- Aumenta la visibilidad y seguridad al manejar 🌙  
- Fácil de usar, ¡sin necesidad de herramientas especiales! 🛠️  
- Compatible con cualquier tipo de faro 🚘  
- Resultados visibles desde la primera aplicación 👀

📦 Rinde para restaurar 2 faros o más  
💥 Precio promocional: $14.990

📸 Mirá el “ANTES y DESPUÉS”… ¡La diferencia es impresionante!`,
      price: "$14.990",
      image: restauradorfaros,
      detailImage: restauradorfarosdetalle,
      tags: ["Restaurador de faros", "Kit de restauración", "Cuidado del automóvil", "Limpieza", "Brillo", "Automotor"],
      category: "auto",
      stock: 5
    },
    {
      id: 6,
      name: "Lentes Inteligentes con Bluetooth  y Audio Integrado",
      description: "¡Comodidad, estilo y tecnología en un solo accesorio!",
      longDescription: `Disfruta de la música y las llamadas manos libres con estilo. Estos lentes cuentan con tecnología avanzada de audio y un diseño moderno, 🔊 Escuchá música o atendé llamadas sin auriculares  
👆 Control táctil en las patillas  
📱 Compatible con Android & iOS  
🔋 Batería recargable – hasta 6 horas de uso  
🌞 Lentes HD polarizados con protección UV400  
🎧 Audio estéreo abierto, sin tapar tus oídos  
📡 Bluetooth 5.3 / 5.4 de conexión estable

✨ Diseño moderno, liviano y sin género  
📏 Medidas estándar: cómodos para todos.`,
      price: "$29.900",
      image: gafasinteligentes,
      detailImage: gafasinteligentesdetalle,
      tags: ["Bluetooth", "Audio", "Estilo", "Tecnología", "Accesorios"],
      category: "tecnologia",
      stock: 3
    },
    {
      id: 7,
      name: "Reproductor Universal para Autos ",
      description: "¡Transformá tu viaje en una experiencia multimedia! 🚗✨",
      longDescription: `"📺 Pantalla táctil TFT de 7" (formato 16:9)  
Disfrutá de una interfaz moderna y fácil de usar, perfecta para visualizar tus contenidos con claridad.

🎶 Reproduce múltiples formatos: MP5 / MP4 / MP3 / WMA  
¡Llevá tu música y videos favoritos a donde vayas!

🔌 Entradas versátiles: USB / SD / MMC / AUX  
Conectá tus dispositivos sin complicaciones y accedé a tus archivos al instante.

📱 Bluetooth integrado  
Manos libres para llamadas 📞 + transmisión de música 🎧 sin cables.

📻 Radio FM con sintonizador digital  
Hasta 18 estaciones presintonizadas para que nunca te falte ritmo.

🕹️ Control remoto infrarrojo  
Manejá todas las funciones cómodamente desde cualquier lugar del vehículo.

⏰ Reloj en tiempo real  
Siempre puntual, siempre elegante.

🎚️ Ecualizador electrónico  
Ajustá el sonido a tu estilo: Pop 🎤, Rock 🎸 o Clásico 🎼.

🛡️ ESP (antishock electrónico)  
Reproducción estable incluso en caminos irregulares.

🔊 Salidas RCA de línea (baja impedancia)  
Ideal para conectar amplificadores y mejorar la calidad de audio.

⚡ Potencia de salida: 45W × 4  
Sonido potente y envolvente para todos los pasajeros."`,
      price: "$89.990",
      image: multimedia,
      detailImage: multimediadetalle,
      tags: ["Multimedia", "Bluetooth", "Audio", "Tecnología", "Auto"],
      category: "auto",
      stock: 2
    },
    {
      id: 8,
      name: "🪚🔋 Mini Motosierra Eléctrica BEKR 24V ",
      description: " ¡Potencia portátil para tus tareas de corte! 🌳💪",
      longDescription: `⚡ Batería de 24V integrada  
No necesitás retirarla para cargarla 🔌. ¡Más práctico, más eficiente!

🧤 Operación manual  
Diseñada para un uso cómodo y seguro, ideal para usuarios de todos los niveles.

🎒 Ligera y portátil  
Llevála a cualquier parte sin esfuerzo. Perfecta para trabajos en el jardín o en el campo.

🔧 Instalación rápida y sencilla  
En solo 3 pasos estás listo para cortar:
1️⃣ Colocá la guía y la cadena en la rueda dentada  
2️⃣ Cerrá la tapa y ajustá la tuerca  
3️⃣ Ajustá el tornillo con la llave incluida

🌲 Ideal para múltiples tareas  
- Corte de troncos 🪵  
- Jardinería 🌿  
- Poda de árboles 🌳

⛓️ Cadena de alta calidad  
Cortes precisos y duraderos, incluso en madera dura.

🛠️ Construcción robusta y confiable  
Diseñada para resistir el uso intensivo sin perder rendimiento.`,
      price: "$59.990",
      image: motosierra,
      detailImage: motosierradetalle,
      tags: ["Motosierra", "Eléctrica", "Jardinería", "Portátil", "Herramientas"],
      category: "herramientas",
      stock: 2
    },
    {
      id: 9,
      name: "🧤🔦 Guantes con Linterna LED Luz Blanca",
      description: "Descubrí los Guantes con Linterna LED Luz Blanca, la solución perfecta para quienes buscan comodidad y funcionalidad en una sola prenda.",
      longDescription: `Versátiles para actividades al aire libre y bricolaje.`,
      price: "$14.990",
      image: guantesled,
      detailImage: guantesleddetalle,
      tags: ["Guantes", "LED", "Iluminación", "DIY", "Herramientas"],
      category: "tecnologia",
      stock: 4
    },
    {
      id: 10,
      name: "Pulsera Muñequera Magnética Para Tornillos Y Herramientas",
      description: "¡La aliada perfecta para tus proyectos de bricolaje, carpintería o mecánica!",
      longDescription: "Imanes potentes integrados para tornillos, brocas, tuercas y clavos.",
      price: "$14.990",
      image: pulceramagnetica,
      detailImage: pulceramagneticadetalle,
      tags: ["Magnética", "Ajustable", "Ergonómica", "Portátil", "Duradera", "Herramientas"],
      category: "herramientas",
      stock: 3
    },
    {
      id: 11,
    name: "🐾 Asiento Elevado para Mascotas – Pet Booster Seat 🐾",
    description:` "🚘 ¡Llevá a tu mascota segura, cómoda y cerca tuyo en cada viaje!
Olvidate de las preocupaciones al conducir con tu perrito o gatito suelto. Este asiento especial se fija con correas ajustables al respaldo y base del asiento, manteniendo a tu mascota protegida y estable durante todo el trayecto. 💺✨",
    longDescription: "Puedes disfrutarlo exclusivamente sin compartirlo con otros. Alta eficiencia y bajo consumo; puede haber variaciones estéticas entre lotes."`,
     longDescription: `
✅ Correas ajustables – se adapta a cualquier coche con apoyacabezas
✅ Ideal para perros y gatos 🐶🐱
✅ Soporta hasta 12 kg
✅ Tela ligera, resistente y fácil de limpiar 🧼
✅ Interior suave y cómodo con borde acolchado 🤍
✅ Uso práctico y portátil – ¡listo para instalar en segundos! ⏱️
✅ Evita que tu mascota salte o se ensucie el asiento del auto
📦 Incluye:
1️⃣ Asiento de coche para mascotas
📏 Medidas aprox: 34 cm (ancho) × 25 cm (largo) × 18 cm (alto)
💡 Ideal para viajes, paseos o visitas al veterinario.
Cómodo, seguro y con estilo — ¡tu mejor copiloto lo merece! ❤️🐾`,
    price: "$34.990",
    image: asientomascotas,
    detailImage: [asientomascotasdetalle, asientomascotasdetalle1, asientomascotasdetalle2,asientomascotas],
    tags: ["Asiento para mascotas", "Seguridad", "Comodidad", "Viajes"],
    category: "mascotas",
      stock: 1
    },
    {
      id: 12,
      name: "FUNDA PROTECTORA DE AUTO PARA MASCOTA",
      description: "IMPERMIABLE DE FACIL INTALACION Y GUARDADO Lleva a tu mejor amigo a todos lados sin llenar de pelos tu vehículo!",
      longDescription: `🐶🚗 FUNDA PROTECTORA IMPERMEABLE PARA ASIENTO DE AUTO 🐾

💙 ¡Llevá a tu mejor amigo a todos lados sin llenar de pelos tu vehículo!

🔹 BENEFICIOS

✨ Protege el tapizado del auto contra pelos, suciedad y humedad.
✨ Evita rayones, manchas o daños en los asientos.
✨ ¡Ideal para viajes, paseos o visitas al veterinario!

📏 ESPECIFICACIONES

🧺 Funda protectora para mascotas – evita que ensucien o dañen el tapizado.
💧 Tela impermeable y resistente.
📐 Medidas: 130 cm x 130 cm
📦 Incluye 1 unidad.

🐕 BENEFICIOS DEL PRODUCTO

✅ Evita la acumulación de pelos en el auto.
✅ Universal: se adapta a cualquier modelo y tamaño de vehículo.
✅ Fácil de colocar en segundos.
✅ Puede usarse también para cubrir el baúl.
✅ Material impermeable y lavable en lavarropas.
✅ Ligera, plegable y fácil de transportar.`,
      price: "$24.990",
      image: cubreasiento,
      detailImage: [cubreasientodetalle1, cubreasientodetalle2,cubreasientodetalle3,cubreasientodetalle4,cubreasientodetalle5],
      tags: ["Impermeable", "Funda", "Protección", "Mascotas", "Auto"],
      category: "mascotas",
      stock: 1
    },
    {
      id: 13,
    name: "Rastreador De Actividad Con Monitor De Ritmo Cardíaco Ip68",
    description: `Rastreador de actividad física con monitor de ritmo cardíaco, contador de pasos/calorías, reloj inteligente monitor de sueño, IP68, rastreador de salud, podómetro para hombre y mujer`,
    longDescription: `Tu compañero ideal para una vida activa y saludable 🏃‍♀️✨
🌈 Multifunción para disfrutar al máximo:

🕐 Recordatorio de horario
🎨 Reloj personalizado con carátulas ajustables
🌤️ Ajuste de brillo automático
💧 Recordatorio de bebida y sedentarismo
💖 Seguimiento de salud femenina
⚡ Medición de un solo toque
🤖 Asistente MAI inteligente

🔎 ¡Buscá más colores de correa escribiendo: “bandas de seguimiento de fitness BrilliantHouse S5” – compatible con Google Fit! 💚

🏃 Seguimiento deportivo y de actividad:

📊 Registra con precisión tus pasos, distancia, calorías quemadas y minutos activos durante todo el día.
🎯 Incluye 17 modos deportivos para actividades específicas: running, ciclismo, yoga, caminata, y más.
😍 Ligero, cómodo y con un diseño moderno que te encantará llevar.

❤️ Monitoreo completo de salud:

💓 Controla tu frecuencia cardíaca y presión arterial en tiempo real.
🌙 Analiza tu calidad del sueño y mejora tus hábitos de descanso.
📱 Sincroniza todos los datos con la app y obtené un resumen detallado de tu bienestar diario.

📲 Notificaciones inteligentes en tu muñeca:

📞 Recibí alertas de llamadas, mensajes, calendario y redes sociales (Facebook, WhatsApp, Instagram, Twitter, LinkedIn y más).
🚫 Función de rechazo de llamadas y recordatorio de programación para que nunca te pierdas nada.

💦 Resistente al agua + carga práctica USB:

🔋 Conector USB integrado, sin cables extra.
💧 Resistente al agua, ideal para el día a día.
📦 Incluye:

1 Reloj inteligente BrilliantHouse S5

1 Manual de uso

💡 Consejos de solución de problemas

✨ Viví conectado, saludable y con estilo.
Tu tiempo vale oro…`,
    price: "$14.990",
    image: fitnesswatch,
    detailImage: [fitnesswatchdetalle1, fitnesswatchdetalle2, fitnesswatchdetalle3, fitnesswatchdetalle4, fitnesswatchdetalle5, fitnesswatchdetalle6, fitnesswatchdetalle7, fitnesswatchdetalle8],
    tags: ["smartwatch", "Monitor de ritmo cardíaco", "Contador de pasos", "Rastreador de sueño", "IP68"],
    category: "tecnologia",
    stock: 1
    },
    {
      id: 14,
    name: "VASO TÉRMICO DE ACERO INOXIDABLE CON PARLANTE Y ABREBOTELLA INCLUIDO",
    description: `Vaso térmico 500ml con parlante Bluetooth, abrebotellas y diseño resistente.`,
    longDescription:
      `✨ 1. Material Premium 🛡️ Revestimiento interior de acero inoxidable respetuoso con el medio ambiente. Calidad de grado alimenticio con vacío de doble capa para máxima resistencia.

❄️ 2. Aislamiento Superior 🔥 ¡Disfrutá tus bebidas como te gustan! Mantiene frío y calor por horas. Cuenta con sellado seguro a prueba de fugas y una cómoda boca de copa redonda.

🍺 3. Diseño Inteligente 😎 ¿Olvidaste el destapador? ¡No hay problema! La tapa incluye un abrebotellas incorporado, super conveniente y rápido para tus reuniones.

🔊 4. Sonido Inalámbrico Bluetooth 📲 Sistema de sonido integrado en la base. Conectá tu celular por Bluetooth y reproducí tu música favorita en cualquier momento y lugar. ¡El parlante es removible para lavar el vaso!

🏕️ 5. Para Todo Momento 🚗 Ideal para uso en exteriores, hogar, oficina, reuniones o en el auto. ¡Llevalo a donde vayas!

⚙️ CARACTERÍSTICAS TÉCNICAS
⏱️ Rendimiento de aislamiento: 6 a 12 horas.

📏 Capacidad: 16oz (Aprox. 473ml).

🎨 Colores disponibles: ⚫ Negro / ⚪ Blanco / 🔵 Azul / 🟣 Púrpura.

💡 Efecto de iluminación: Luces LED integradas.

📡 Conexión: Bluetooth compatible con todos los dispositivos`,
    price: "$34.990",
    image: vasomusical,
    detailImage: vasomusical1,
       gallery: [
    vasomusical1,
    vasomusical2,
    vasomusical3,
    vasomusical4,
    ],
    tags: ["Vaso", "Térmico", "Bluetooth", "Parlante", "Abrebotellas"],
    stock: 1,
    category: "tecnologia",
    },
    {
      id: 15,
      name: "Placa Dental Para Bruxismo Deroyal",
      description: `Placa dental para bruxismo, diseñada para proteger tus dientes durante la noche. `,
      longDescription: `🦷 Placa Dental DeRoyal: Tu Escudo para un Descanso Placentero 🌙
👨‍⚕️🦷 Diseño Profesional: Desarrollada por dentistas para brindarte seguridad y comodidad durante la noche. 🎚️👄 Adaptación Perfecta: Gracias a su diseño moldeable, se ajusta fácilmente a la forma única de tu boca. 🛡️💤 Protección Nocturna: Crea una barrera que limita el contacto involuntario entre los dientes mientras duermes. ✅👍 Fácil de Usar: Simple y práctica para incorporar a tu rutina de sueño. 🦷🛡️ Previene el Desgaste: Ayuda a evitar el daño dental causado por la fricción leve ocasional. 😌🧠 Alivio del Bruxismo: Contribuye a reducir síntomas como el dolor de cabeza y molestias dentales. 🛌✨ Descanso Placentero: Favorece una experiencia de sueño más estable y relajada. 💰👌 Económica: Una solución accesible para cuidar tu salud dental. 🌿✨ Hipoalergénica: Material seguro y amigable con tu boca.`,
      price: "$14.990",
      image: placadental,
      detailImage: [placadental1, placadental2, placadental3, placadental4, placadental5, placadental6],
      tags: ["Placa dental", "Bruxismo", "Protección", "Salud dental", "Descanso"],
      category: [ "salud"],
      stock: 10
    },
    {
       id: 16,
    name: "Peine Profesional Para Gatos Y Perros De Pelo Largo Amarillo",
    description:`Ideal para razas como ragdoll y otras de pelaje denso, este peine no solo ayuda a mantener a tu mascota impecable, sino que también fomenta la circulación sanguínea mientras alivia el estrés. Con un mango antideslizante, su uso es fácil y cómodo, haciéndolo una herramienta esencial para el cuidado diario de tus compañeros peludos`
     ,
    longDescription:
       `🐾✨ ¡El Secreto para un Pelaje Impecable y Sin Nudos! ✨🐾
Descubrí el accesorio definitivo para el cuidado de tus mascotas. Este peine ergonómico está diseñado específicamente para mimar a perros y gatos de pelo largo, haciendo del cepillado una experiencia placentera.

🔹 Diseño Ergonómico y Especializado 🐶🐱 Creado pensando en la comodidad, es perfecto para razas de pelo largo y denso (como Ragdoll). ¡Adaptado a sus necesidades!

🔹 Cuidado Suave, Resultados Efectivos 🧶✨ Fabricado con materiales de alta calidad. Sus agujas se deslizan suavemente para: ✅ Eliminar el pelo suelto. ✅ Desenredar los nudos difíciles. ✅ Reducir la caída de pelo sin dañar la piel sensible de tu mascota.

🔹 Salud y Bienestar en Cada Pasada ❤️💆‍♀️ Más que un simple cepillo: fomenta una mejor circulación sanguínea y ayuda a aliviar el estrés, convirtiendo el aseo en un masaje relajante.

🔹 Fácil de Usar para Vos 👌🚿 Cuenta con un mango antideslizante que asegura un agarre cómodo y firme, facilitando la rutina de cuidado diario.

🌟 ¡Transforma el momento del aseo en una experiencia relajante y feliz para tu compañero peludo! 🥰`,
    price: "$10.990",
    image: cepillomascota,
    detailImage: [cepillomascota1, cepillomascota2, cepillomascota3, cepillomascota4],
    tags: ["Peine", "Mascotas", "Cuidado", "Pelo largo", "Desenredar"],
    stock: 5,
    category: ["mascotas"],
    },
 {
     id: 17,
    name: "Removedor de pelo reutilizable para gatos y perros y muebles",
    description:`Ideal para razas como ragdoll y otras de pelaje denso, este peine no solo ayuda a mantener a tu mascota impecable, sino que también fomenta la circulación sanguínea mientras alivia el estrés. Con un mango antideslizante, su uso es fácil y cómodo, haciéndolo una herramienta esencial para el cuidado diario de tus compañeros peludos`
     ,
    longDescription:
       `🛑🐶 ¡FIN A LOS PELOS EN TU HOGAR! 🐱🛑
RODILLO QUITAPELOS REUTILIZABLE MULTISUPERFICIE
(Aquí iría la imagen principal del producto en uso)

✨ DESCRIPCIÓN DEL PRODUCTO ✨
¡Recuperá tus muebles y olvidate de los pelos sueltos!

🛋️✨ 1. No Más Pelos por Todas Partes ¡Saca el pelo de los muebles de una vez por todas! Nuestra herramienta funciona de maravilla en sofás, ropa, sillas tapizadas, ropa de cama, alfombras y asientos del auto. ¡Tu casa impecable en segundos!

♻️🌎 2. 100% Reutilizable y Ecológico Si te preocupa el medio ambiente y tu bolsillo, esta es la solución. No requiere cintas adhesivas ni repuestos. Comprás uno y lo usás una y otra vez. ¡Ahorrá dinero y cuidá el planeta!

🔋❌ 3. Simple y Sin Baterías Olvidate de cables, enchufes o pilas. Este rodillo está siempre listo. Simplemente movelo hacia adelante y hacia atrás sobre la superficie y la estática atrapará todo el pelo en su depósito interno.

🧹🗑️ 4. Limpieza Ultra Fácil ¿Terminaste de limpiar? Solo presioná el botón de liberación, abrí el compartimento y vaciá los pelos en la basura. ¡Rápido, higiénico y sin tocar la suciedad!

🧬 5. Tecnología de Nylon Material importado de alta calidad que genera la carga estática perfecta para atrapar hasta el pelo más fino.

(Imagen secundaria mostrando los detalles y el mecanismo)

🛒 ¡LA SOLUCIÓN DEFINITIVA PARA DUEÑOS DE MASCOTAS!
¡Pedí el tuyo hoy y disfrutá de una casa libre de pelos! 🏠✨`,
    price: "$14.990",
    image: cepillopelosmascotas,
    detailImage: [cepillopelosmascotas1, cepillopelosmascotas2, cepillopelosmascotas3,],
    tags: ["Peine", "Mascotas", "Cuidado", "Pelo largo", "Desenredar"],
    stock: 5,
    category: ["mascotas"],
    },
{
   id: 18,
       name: "BOLSO DE VIAJE QUE CABE EN TU BOLSILLO",
       description: `LIGERO, RESISTENTE Y SÚPER ESPACIOSO`,
       longDescription:
         `Olvidate del equipaje pesado y voluminoso. ¡Llevá todo lo que necesitás sin ocupar espacio!

📏 1. Diseño Inteligente y Plegable 🤏 ¡De gigante a diminuto en segundos! Pasa de un bolso de 45 x 30 cm a un estuche compacto de solo 21 x 18 cm. Cuando no lo usás, se pliega fácilmente ocupando un 90% menos de espacio que una valija vacía.

🎒 2. Gran Capacidad de 32 Litros 🚀 Perfecto para escapadas de fin de semana, gimnasio o como equipaje de mano adicional. Diseñado para caber perfectamente debajo del asiento del avión.

☔ 3. Material Resistente y Ligero 💪 Confeccionado en Poliéster + PVC, ofrece durabilidad sin añadir peso extra. Es ideal para proteger tus pertenencias.

🎨 4. Variedad de Estilos 🌈 Disponible en colores modernos para combinar con tu look: Azul, Rosa, Vino y Verde Agua.

🛠️ 5. Práctico y Funcional ⚡ Cuenta con cierre de cremallera seguro y asas reforzadas. Fácil de plegar: simplemente colócalo en una superficie plana, doblá los lados y ¡listo! Se guarda en su propia funda.

📋 ESPECIFICACIONES TÉCNICAS
Tamaño Desplegado: 45 x 17 x 30 cm.

Tamaño Plegado: 21 x 18 cm.

Capacidad: 32 Litros.

Material: Poliéster + PVC (semi-transparente).

Incluye: 2 x Bolsa de Viaje (según paquete).

(Aquí iría la imagen del bolso plegado en su bolsa)

🛒 ¡PREPARATE PARA TU PRÓXIMA AVENTURA!
¡Viajá liviano y con estilo! Pedí tu set hoy mismo. ✈️🌟`,
       price: "$16.990",
       image: bolsodeviaje,
       detailImage: bolsodeviaje1,
          gallery: [
       bolsodeviaje1,
       bolsodeviaje2,
       bolsodeviaje3,
       bolsodeviaje4,
       bolsodeviaje5,
       ],
       tags: ["Bolso", "Viaje", "Plegable", "Ligero", "Resistente"],
       stock: 1,
       category: ["camping"],
  },

  {
   id: 19,
       name: "VASO TÉRMICO DE ACERO INOXIDABLE CON PARLANTE Y ABREBOTELLA INCLUIDO",
       description: `Vaso térmico 500ml con parlante Bluetooth, abrebotellas y diseño resistente.`,
       longDescription:
         `✨ 1. Material Premium 🛡️ Revestimiento interior de acero inoxidable respetuoso con el medio ambiente. Calidad de grado alimenticio con vacío de doble capa para máxima resistencia.

❄️ 2. Aislamiento Superior 🔥 ¡Disfrutá tus bebidas como te gustan! Mantiene frío y calor por horas. Cuenta con sellado seguro a prueba de fugas y una cómoda boca de copa redonda.

🍺 3. Diseño Inteligente 😎 ¿Olvidaste el destapador? ¡No hay problema! La tapa incluye un abrebotellas incorporado, super conveniente y rápido para tus reuniones.

🔊 4. Sonido Inalámbrico Bluetooth 📲 Sistema de sonido integrado en la base. Conectá tu celular por Bluetooth y reproducí tu música favorita en cualquier momento y lugar. ¡El parlante es removible para lavar el vaso!

🏕️ 5. Para Todo Momento 🚗 Ideal para uso en exteriores, hogar, oficina, reuniones o en el auto. ¡Llevalo a donde vayas!

⚙️ CARACTERÍSTICAS TÉCNICAS
⏱️ Rendimiento de aislamiento: 6 a 12 horas.

📏 Capacidad: 16oz (Aprox. 473ml).

🎨 Colores disponibles: ⚫ Negro / ⚪ Blanco / 🔵 Azul / 🟣 Púrpura.

💡 Efecto de iluminación: Luces LED integradas.

📡 Conexión: Bluetooth compatible con todos los dispositivos`,
       price: "$34.990",
       image: vasomusical,
       detailImage: vasomusical1,
          gallery: [
       vasomusical1,
       vasomusical2,
       vasomusical3,
       vasomusical4,
       ],
       tags: ["Vaso", "Térmico", "Bluetooth", "Parlante", "Abrebotellas"],
       stock: 1,
       category: ["camping","auto"],
  },

  {
  id: 20,
         name: "Máquina recargable USB parlante de aprendizaje con tarjetas bilingüe (Español - Inglés)",
         description: `Convierte el aprendizaje en una experiencia divertida y enriquecedora para tus hijos con nuestras flash cards bilingües`,
         longDescription:
           `🎓🗣️ ¡Lector Interactivo Bilingüe Inglés/Español! Aprende 224 Palabras Jugando 🇬🇧🇪🇸
  ¡Convierte el aprendizaje de idiomas en la experiencia más divertida para tus hijos! 🚀
  
  🚚💨 ¡Disponibilidad inmediata para envío! 📦 Realizamos envíos a nivel nacional.
  
  🎁 CON TU COMPRA RECIBES EL KIT COMPLETO:
  Este paquete incluye todo lo necesario para empezar a aprender: 🔹 1 Lector de tarjetas Flash Card 🔊 (¡Del color que seleccionaste! 🎨) 🔹 112 Tarjetas interactivas de doble cara 🃏 (¡Un total de 224 PALABRAS para aprender! 🔤) 🔹 1 Cable de carga tipo USB 🔋. 🔹 Caja e instrucciones de uso 📖.
  
  ✨ DETALLES Y BENEFICIOS DEL PRODUCTO ✨
  Este lector es mucho más que un juguete, ¡es una herramienta de desarrollo!
  
  🧠 Estimulación Cognitiva: Convierte el aprendizaje en una experiencia enriquecedora, estimulando el cerebro y fomentando la creatividad desde temprana edad 💡.
  
  🗣️ Poder Bilingüe: Tus hijos podrán aprender nuevas palabras, ampliar drásticamente su vocabulario y mejorar sus habilidades de comunicación tanto en inglés como en español.
  
  🛡️ Seguridad Primero: Nuestros juguetes son 100% seguros, duraderos y están diseñados específicamente pensando en el aprendizaje temprano 👶.
  
  🌈 Diseño Atractivo: Las tarjetas tienen un diseño colorido que capta la atención de los niños al instante, facilitando su participación y manteniéndolos motivados mientras juegan y aprenden.
  
  ⚙️ ESPECIFICACIONES TÉCNICAS:
  🛠️ Material: Plástico resistente ABS y componentes electrónicos de calidad.
  
  📏 Tamaño portátil: Compacto y fácil de sostener (11 x 9 x 3 cms).
  
  📦 Empaque: Se entrega en caja sellada.
  
  ¡Dale a tus hijos el regalo del bilingüismo y la diversión! 🥳📚`,
         price: "$25.990",
         image: puzzleinteractivo,
         detailImage: puzzleinteractivo1,
            gallery: [
         
          puzzleinteractivo2,
          puzzleinteractivo3,
          puzzleinteractivo4,
          puzzleinteractivo5,
          puzzleinteractivo6,
          
  
         ],
         tags: ["juego", "bilingüe", "educativo", "niños", "aprendizaje"],
         stock: 5,
         category: ["regalos"],
  },
  
   {
      id: 21,
       name: "Set X 3 Perfumes Arabes Originales",
       description: `Set x 3 perfumes árabes originales en versión Body Spray de 200ml.`,
       longDescription:
         `:
​✨ ¡LLEGÓ LA TENDENCIA DE DUBAI A ARGENTINA! ✨
Llevate los perfumes más virales de las redes en su versión Body Spray de 200ml. Lujo, duración y estela increíble a un precio accesible.
​👇 ELEGÍ TU AROMA IDEAL:
​🖤 ASAD (Negro) - EL REY DE LA NOCHE
​Para él. Un aroma poderoso y especiado.
​Huele a: Pimienta, tabaco y vainilla.
​Ideal para: Salidas nocturnas, citas o para dejar huella donde vayas.
​🌸 YARA (Rosa) - LA FAVORITA DE TODAS
​Para ella. Dulce, cremoso y super femenino.
​Huele a: Orquídeas, frutas tropicales y notas atalcadas.
​Ideal para: Usar todos los días y sentirte una reina.
​🤍 ANA ABIYEDH (Blanco) - FRESCURA PURA
​Unisex. Limpio, sofisticado y elegante.
​Huele a: Almizcle blanco (White Musk) y frescura suave.
​Ideal para: Después de la ducha o el gym. ¡Huele a limpio de lujo!
​✅ ¿POR QUÉ ELEGIRNOS?
​Productos 100% Originales Lattafa 🇦🇪.
​Envases grandes de 200ml (Duran muchísimo).
​Envíos rápidos y seguros a todo el país 🚛.
​👉 ¡SELECCIONÁ TU VARIANTE ARRIBA Y COMPRÁ AHORA!`,
       price: "$51.990",
       image: setperfumes1,
       detailImage: setperfumes2,
          gallery: [
       setperfumes2,
       setperfumes3,
       setperfumes4,
       setperfumes5,
       ],
       tags: ["Perfumes", "Árabes", "Originales", "Body Spray", "Set x3"],
       stock: 1,
       category: ["regalos" ,"salud"],
   },
  {
   id: 22,
       name: "VASO TÉRMICO DE ACERO INOXIDABLE CON PARLANTE Y ABREBOTELLA INCLUIDO",
       description: `Vaso térmico 500ml con parlante Bluetooth, abrebotellas y diseño resistente.`,
       longDescription:
         `✨ 1. Material Premium 🛡️ Revestimiento interior de acero inoxidable respetuoso con el medio ambiente. Calidad de grado alimenticio con vacío de doble capa para máxima resistencia.

❄️ 2. Aislamiento Superior 🔥 ¡Disfrutá tus bebidas como te gustan! Mantiene frío y calor por horas. Cuenta con sellado seguro a prueba de fugas y una cómoda boca de copa redonda.

🍺 3. Diseño Inteligente 😎 ¿Olvidaste el destapador? ¡No hay problema! La tapa incluye un abrebotellas incorporado, super conveniente y rápido para tus reuniones.

🔊 4. Sonido Inalámbrico Bluetooth 📲 Sistema de sonido integrado en la base. Conectá tu celular por Bluetooth y reproducí tu música favorita en cualquier momento y lugar. ¡El parlante es removible para lavar el vaso!

🏕️ 5. Para Todo Momento 🚗 Ideal para uso en exteriores, hogar, oficina, reuniones o en el auto. ¡Llevalo a donde vayas!

⚙️ CARACTERÍSTICAS TÉCNICAS
⏱️ Rendimiento de aislamiento: 6 a 12 horas.

📏 Capacidad: 16oz (Aprox. 473ml).

🎨 Colores disponibles: ⚫ Negro / ⚪ Blanco / 🔵 Azul / 🟣 Púrpura.

💡 Efecto de iluminación: Luces LED integradas.

📡 Conexión: Bluetooth compatible con todos los dispositivos`,
       price: "$34.990",
       image: vasomusical,
       detailImage: vasomusical1,
          gallery: [
       vasomusical1,
       vasomusical2,
       vasomusical3,
       vasomusical4,
       ],
       tags: ["Vaso", "Térmico", "Bluetooth", "Parlante", "Abrebotellas"],
       stock: 1,
       category: ["camping","auto"],
   },

  {
   id: 23,
       name: "Vaporizador Facial Profesional Ozono y Iones Frío y Calor 2 En 1",
       description: `Vaporizador facial profesional con ozono e iones frío y calor.`,
       longDescription:
         ` Potencia tus limpiezas faciales con tecnología de vanguardia. Este Vaporozono Profesional es la herramienta ideal para gabinetes de estética y uso personal avanzado. Gracias a su sistema dual de ozono e ionización, garantiza un tratamiento profundo, seguro y totalmente higiénico.

Beneficios principales:

Doble Función: Vapor frío y caliente que pueden utilizarse de forma simultánea.

Ozono e Ionización: Esteriliza el vapor para un tratamiento libre de bacterias y ayuda a suavizar la piel.

Limpieza Profunda: El vapor a alta presión abre los poros, facilitando la extracción de impurezas y puntos negros.

Diseño Profesional: Equipado con tubería de acero inoxidable para mayor durabilidad y máxima higiene.

Características Técnicas:

Cabezales Giratorios: Doble brazo ajustable que gira sobre su eje para dirigir el spray con precisión.

Seguridad Inteligente: Sensor de nivel de agua con apagado automático para proteger el equipo.

Independencia Total: Tanques y canales de pulverización separados para frío y calor.

Densidad de Spray Regulable: Adaptable según la sensibilidad de cada tratamiento.

Medidas: 75 x 18 x 43 cm.

Peso: 5.8 kg.

Color: Blanco con detalles en lila.`,
       price: "$320.000",
       image: ozono,
       detailImage: ozono1,
          gallery: [
       ozono1,
       ozono2,
       ozono3,
       ozono4,
       ],
       tags: [ "Vaporizador", "Facial", "Ozono", "Iones", "Calor", "Frío"],
       stock: 4,
       category: ["estética"],
  },

  {
   id: 24,
       name: "VASO TÉRMICO DE ACERO INOXIDABLE CON PARLANTE Y ABREBOTELLA INCLUIDO",
       description: `Vaso térmico 500ml con parlante Bluetooth, abrebotellas y diseño resistente.`,
       longDescription:
         `✨ 1. Material Premium 🛡️ Revestimiento interior de acero inoxidable respetuoso con el medio ambiente. Calidad de grado alimenticio con vacío de doble capa para máxima resistencia.

❄️ 2. Aislamiento Superior 🔥 ¡Disfrutá tus bebidas como te gustan! Mantiene frío y calor por horas. Cuenta con sellado seguro a prueba de fugas y una cómoda boca de copa redonda.

🍺 3. Diseño Inteligente 😎 ¿Olvidaste el destapador? ¡No hay problema! La tapa incluye un abrebotellas incorporado, super conveniente y rápido para tus reuniones.

🔊 4. Sonido Inalámbrico Bluetooth 📲 Sistema de sonido integrado en la base. Conectá tu celular por Bluetooth y reproducí tu música favorita en cualquier momento y lugar. ¡El parlante es removible para lavar el vaso!

🏕️ 5. Para Todo Momento 🚗 Ideal para uso en exteriores, hogar, oficina, reuniones o en el auto. ¡Llevalo a donde vayas!

⚙️ CARACTERÍSTICAS TÉCNICAS
⏱️ Rendimiento de aislamiento: 6 a 12 horas.

📏 Capacidad: 16oz (Aprox. 473ml).

🎨 Colores disponibles: ⚫ Negro / ⚪ Blanco / 🔵 Azul / 🟣 Púrpura.

💡 Efecto de iluminación: Luces LED integradas.

📡 Conexión: Bluetooth compatible con todos los dispositivos`,
       price: "$34.990",
       image: vasomusical,
       detailImage: vasomusical1,
          gallery: [
       vasomusical1,
       vasomusical2,
       vasomusical3,
       vasomusical4,
       ],
       tags: ["Vaso", "Térmico", "Bluetooth", "Parlante", "Abrebotellas"],
       stock: 1,
       category: ["camping","auto"],
  },

  {
    id: 25,
    name: "PERFUME 919 VIP FEMME - JOIN THE CLUB!",
    description: "Fragancia femenina sofisticada y urbana de 100ml. Un tributo a la creatividad y confianza.",
    longDescription: `✨ 1. Aroma Magnético 💄 Una mezcla fascinante de ron y fruta de la pasión. Dulce, fresca y extremadamente femenina.
      
      🌸 2. Corazón Floral 🛡️ Con notas de almizcle y gardenia que aportan una suavidad lujosa y duradera en la piel.
      
      🏙️ 3. Espíritu Urbano 🏙️ Diseñado para la mujer activa que ama la ciudad y se mueve con total seguridad.
      
      ✨ 4. Toque de Vainilla 🍦 El fondo de haba tonka y vainilla le da ese cierre dulce y adictivo que todos notarán.
      
      ⚙️ CARACTERÍSTICAS TÉCNICAS
      📏 Capacidad: 100ml.
      🎨 Familia: Oriental Vainilla.
      💡 Ocasión: Diario y eventos especiales.
      📡 Calidad: Premium con gran proyección.`,
    price: "$15.000",
    image: vipFemme,
    detailImage: vipFemme1,
    gallery: [vipFemme1, vipFemme2],
    tags: ["Perfume", "Mujer", "Femenino", "VIP", "Dulce"],
    stock: 2,
    category: ["perfumeria", "mujeres"],
  },
  {
    id: 26,
    name: "PERFUME OK ROCK! MEN - REBEL STYLE",
    description: "Fragancia masculina audaz de 100ml. El aroma de la rebeldía y el rock & roll.",
    longDescription: `🎸 1. Actitud Rockera 🤘 Un perfume con carácter fuerte. Notas de cuero y especias para quienes viven al límite.
      
      🔥 2. Energía Pura ⚡ Ideal para recargar energías después de un largo día o para empezar la noche con todo.
      
      🌲 3. Fondo Terroso 🪵 Una base de maderas profundas que garantizan una estela duradera y masculina.
      
      ⚙️ CARACTERÍSTICAS TÉCNICAS
      📏 Capacidad: 100ml.
      🎨 Estilo: Especiado / Cuero.
      ⏱️ Duración: 6 a 10 horas.`,
    price: "$15.000",
    image: okRock,
    detailImage: okRock1,
    gallery: [okRock1, okRock2],
    tags: ["Perfume", "Rock", "Hombre", "Audaz"],
    stock: 2,
    category: ["perfumeria", "hombres"],
  },
  {
    id: 27,
    name: "PERFUME DREAM - CAJA ROJA / ZAPATO",
    description: "Diseño icónico de zapato con una fragancia audaz, sensual y dulce para mujeres poderosas.",
    longDescription: `👠 1. Diseño de Colección 🛡️ El famoso frasco en forma de estilete rojo. Un objeto de deseo para tu tocador.
      
      🍫 2. Aroma Gourmand 🔥 Notas de cacao y café que se mezclan con el jazmín para crear un aroma dulce y envolvente.
      
      🌹 3. Dualidad Femenina 🌗 Representa el lado bueno y el lado malo de la mujer. Es sensual, misterioso y cautivador.
      
      ⚙️ CARACTERÍSTICAS TÉCNICAS
      📏 Capacidad: 80ml / 100ml.
      🎨 Familia: Oriental Floral.
      🎁 Ideal para: Regalo de lujo.`,
    price: "$15.000",
    image: dreamRed,
    detailImage: dreamRed1,
    gallery: [dreamRed1, dreamRed2],
    tags: ["Perfume", "Mujer", "Dream", "Zapato", "Dulce"],
    stock: 2,
    category: ["perfumeria", "mujeres"],
  },
  {
    id: 28,
    name: "PERFUME INVINCIBLE TRIUMPH - CAJA NEGRA",
    description: "Fragancia intensa para el hombre que no conoce la derrota. Frescura y potencia en 100ml.",
    longDescription: `🏆 1. El Aroma de la Victoria 🛡️ Una fragancia que evoca la adrenalina del triunfo. Notas marinas cruzadas con maderas oscuras.
      
      🔥 2. Fuerza Magnética 💪 Potente y varonil. Diseñado para proyectar confianza absoluta en cualquier situación.
      
      🛡️ 3. Presentación Luxury 😎 Frasco robusto y elegante en color negro profundo, símbolo de poder y misterio.
      
      ⚙️ CARACTERÍSTICAS TÉCNICAS
      📏 Capacidad: 100ml.
      🌿 Notas: Pomelo, Hojas de Laurel, Ámbar gris.
      ⏱️ Fijación: Extrema.`,
    price: "$15.000",
    image: invincibleTriumph,
    detailImage: invincibleTriumph1,
    gallery: [invincibleTriumph1, invincibleTriumph2],
    tags: ["Perfume", "Hombre", "Invincible", "Victorioso"],
    stock: 2,
    category: ["perfumeria", "hombres"],
  },
  {
    id: 29,
    name: "PERFUME LADY LUXURY - SOFISTICACIÓN PURA",
    description: "Aroma exclusivo y opulento para mujeres elegantes. El lujo hecho fragancia.",
    longDescription: `💎 1. Exclusividad Total 🛡️ Lady Luxury es para la mujer que busca lo extraordinario. Un aroma que destila riqueza y clase.
      
      ✨ 2. Notas Doradas 🔥 Mezcla de flores blancas con un toque de miel y pachulí que crea un aura dorada a tu alrededor.
      
      🌟 3. Elegancia sin Límites 👑 Ideal para eventos de gala, bodas o cenas importantes donde querés ser la protagonista.
      
      ⚙️ CARACTERÍSTICAS TÉCNICAS
      📏 Capacidad: 100ml.
      🎨 Familia: Floral Blanca / Dulce.
      💡 Efecto: Estela de larga duración.`,
    price: "$15.000",
    image: ladyLuxury,
    detailImage: ladyLuxury1,
    gallery: [ladyLuxury1, ladyLuxury2],
    tags: ["Perfume", "Mujer", "Lujo", "Elegante"],
    stock: 2,
    category: ["perfumeria", "mujeres"],
  },
  {
    id: 30,
    name: "PERFUME NEW YORK - CAJA BLANCA",
    description: "Fragancia clásica, limpia y refrescante de 100ml. La esencia de la gran ciudad.",
    longDescription: `🏙️ 1. Frescura Urbana 🛡️ Inspirado en las mañanas de Manhattan. Un aroma limpio, jabonoso y extremadamente pulcro.
      
      ❄️ 2. Minimalismo Puro ⚪ Notas suaves y equilibradas que no cansan el olfato. Perfecto para quienes prefieren la sutileza.
      
      👔 3. Uso Diario 🚗 El compañero ideal para ir al trabajo, al gimnasio o para estar en casa sintiéndote fresco todo el día.
      
      ⚙️ CARACTERÍSTICAS TÉCNICAS
      📏 Capacidad: 100ml.
      🎨 Estilo: Cítrico / Fresco.
      📡 Recomendación: Aplicar en puntos de pulso.`,
    price: "$15.000",
    image: newYork,
    detailImage: newYork1,
    gallery: [miniperf1, miniperf2, miniperf3, miniperf4],
    tags: ["Perfume", "Clásico", "Fresco", "New York", "Unisex"],
    stock: 2,
    category: ["perfumeria", "unisex"],
  },
  ]; // <-- Cierre final del array de productos

  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);


// 🛑 INICIO LÓGICA DE FILTRADO
const filteredProductsByCategory = useMemo(() => {
    const categoriesToFilter = getCategoriesToFilter(activeCategory);

    if (categoriesToFilter.length === 0) {
        return products;
    }

    return products.filter((product) => {
        // Esta lógica maneja si product.category es un string o un array de categorías
        const productCategories = Array.isArray(product.category) ? product.category : [product.category];

        // Verifica si AL MENOS UNA categoría del producto está en el filtro de la URL
        return productCategories.some(prodCat => categoriesToFilter.includes(prodCat));
    });
}, [products, activeCategory]);
// 🛑 FIN LÓGICA DE FILTRADO

// ✅ Calcular el número total de páginas basado en los productos filtrados
const pageCount = useMemo(() => {
    return Math.ceil(filteredProductsByCategory.length / PRODUCTS_PER_PAGE);
}, [filteredProductsByCategory]);

// Función para manejar el cambio de página
const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // Opcional: Desplazar la vista al inicio del grid al cambiar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Recortar la lista para mostrar solo los productos de la página actual
const visibleProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProductsByCategory.slice(startIndex, endIndex);
}, [filteredProductsByCategory, currentPage]);

// Si el cambio de filtro resulta en una página vacía, volvemos a la página 1.
useEffect(() => {
    if (currentPage > pageCount && pageCount > 0) {
        setCurrentPage(1);
    }
}, [pageCount, currentPage]);


  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  // Comprueba stock antes de añadir y decrementa stock localmente
  const handleAddToCart = (product) => {
    const idx = products.findIndex(p => p.id === product.id);
    if (idx === -1) return;

    const currentStock = products[idx].stock ?? Infinity;
    if (currentStock <= 0) {
      alert('Sin stock por el momento');
      return;
    }

    addToCart({ ...product, quantity: 1 });

    const updated = [...products];
    updated[idx] = { ...updated[idx], stock: currentStock - 1 };
    setProducts(updated);
  };
  
  // 💡 Lógica para mostrar las categorías activas en el título
  const activeLabel = activeCategory === 'todos' 
        ? 'Todos los Productos' 
        : getCategoriesToFilter(activeCategory)
            .map(c => c.charAt(0).toUpperCase() + c.slice(1))
            .join(' & ');
  
  return (
    <Container maxWidth="xl" sx={{ py: 4, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Typography variant="h4" component="h1" sx={{
        textAlign: 'center', mb: 2, fontWeight: 700, color: 'primary.main',
        textTransform: 'uppercase', letterSpacing: 1
      }}>
        {activeCategory === 'todos' ? 'Productos Destacados' : `Categoría: ${activeLabel}`}
      </Typography>

      {/* Chip de filtro activo */}
      {activeCategory !== 'todos' && (
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
          <Chip
            label={`Filtrando por: ${activeLabel}`}
            color="primary"
            onDelete={() => navigate('/products')} // Redirigir a /products (que por defecto es 'todos')
            variant="filled"
            sx={{ fontWeight: 600 }}
          />
        </Box>
      )}

      {/* ============== PAGINACIÓN SUPERIOR ============== */}
      {pageCount > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            showFirstButton
            showLastButton
          />
        </Box>
      )}
      {/* ================================================= */}

      {/* Empty state si el filtro no devuelve nada */}
      {filteredProductsByCategory.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" gutterBottom>No encontramos productos para la categoría “{activeCategory}”.</Typography>
          <Button variant="outlined" onClick={() => navigate('/products')}>Ver todos</Button>
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {visibleProducts.map(product => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2.4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <ProductCard
                product={product}
                onQuickView={handleOpenModal}
                onAddToCart={handleAddToCart}
              />
            </Grid>
          ))}
        </Grid>
      )}
      
      {/* ============== PAGINACIÓN INFERIOR ============== */}
      {pageCount > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            showFirstButton
            showLastButton
          />
        </Box>
      )}
      {/* ================================================= */}

      <QuickViewModal
        product={selectedProduct}
        open={modalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </Container>
  );
};

export default ProductGrid;