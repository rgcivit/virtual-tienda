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
  Container
} from "@mui/material";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../context/cartContext";

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
import linternamultifuncional from "./assets/linternamultifuncional.jpg";
import linternamultifuncionaldetalle from "./assets/linternamultifuncionaldetalle.webp";
import cocinacamping from "./assets/cocinacamping.png";
import cocinacampingdetalle from "./assets/cocinacampingdetalle.png";


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

// ✅ CORRECCIÓN DE SINTAXIS EN EL ARRAY DE IMÁGENES (Línea 199-205)
// Esto soluciona el error "Se esperaba: ts(1005)"
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
   GRID DE PRODUCTOS (LÓGICA DE FILTRADO UNIFICADA)
======================= */
const ProductGrid = () => {
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();
  
  // Leer parámetro de la URL
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || 'todos'; 

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
      category: "auto",
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
      category: "camping",
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
      category: "camping",
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
      category: "hogar",
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
      name: "Linterna Foco Multifuncional Solar o Recargable USB",
      description: "Linterna foco solar o recargable multifuncional.",
      longDescription: "3 modos de luz y función powerbank.",
      price: "$35.990",
      image: linternamultifuncional,
      detailImage: linternamultifuncionaldetalle,
      tags: ["360°", "Recargable", "Solar", "Powerbank", "Trípode", "Iluminación"],
      category: "camping",
      stock: 0
    },
    {
      id: 16,
      name: "Cocina de Camping Portátil a Gas con Maleta Sobremesa",
      description: "Mini cocina de gas de un solo quemador con encendido automático.",
      longDescription: "Maleta de transporte, económico y seguro para camping.",
      price: "$35.990",
      image: cocinacamping,
      detailImage: cocinacampingdetalle,
      tags: ["Portátil", "Gas butano", "Maleta", "Encendido automático", "Camping"],
      category: "camping",
      stock: 0
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);


  // ✅ LÓGICA DE FILTRADO MODIFICADA PARA ARRAYS DE CATEGORÍAS
  const visibleProducts = useMemo(() => {
    // 1. Obtiene el array de categorías a filtrar (o un array vacío si es 'todos')
    const categoriesToFilter = getCategoriesToFilter(activeCategory);

    // 2. Caso 1: Si no hay categorías en el array (es 'todos' o vacío), mostramos todos
    if (categoriesToFilter.length === 0) {
        return products;
    }

    // 3. Caso 2: Filtramos productos.
    return products.filter((product) => {
        // Aseguramos que product.category es un array (incluso si es solo un string)
        const productCategories = Array.isArray(product.category) ? product.category : [product.category];

        // Comprobamos si AL MENOS UNA de las categorías del producto
        // está incluida en la lista de categorías a filtrar (categoriesToFilter).
        return productCategories.some(prodCat => categoriesToFilter.includes(prodCat));
    });
  }, [products, activeCategory]); // Depende del estado local de products y la categoría de la URL


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

      {/* Carrito mini (opcional) */}
      {cart.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">Productos en el carrito:</Typography>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>{item.name} - {item.price} {item.quantity ? `x${item.quantity}` : ''}</li>
            ))}
          </ul>
        </Box>
      )}

      {/* Empty state si el filtro no devuelve nada */}
      {visibleProducts.length === 0 ? (
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