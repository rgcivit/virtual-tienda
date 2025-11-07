// ...existing code...
import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

// Imágenes
import ensendedorusb from "./assets/ensendedorusb.png";
import compresor from "./assets/compresor.png";
import filtrodeagua from "./assets/filtrodeagua4.jpg";
import ensendedordetalle from "./assets/ensendedordetalle.png";
import filtrodeaguadetalle from "./assets/filtrodeaguadetalle.jpg";
import restauradorfaros from './assets/restauradorfaros.jpg'
import restauradorfarosdetalle from './assets/restauradorfarosdetalle.jpg'
import portavaso from './assets/portavaso (1).jpg'
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

const ProductCard = ({ product, onQuickView, onAddToCart }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      },
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
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 1,
          borderRadius: 20,
          fontWeight: 'bold',
          textTransform: 'none',
          boxShadow: 3,
          '&:hover': {
            boxShadow: 6,
            transform: 'scale(1.05)'
          },
          transition: 'all 0.3s ease',
          bgcolor: theme.palette.primary.main,
          color: 'white',
          fontSize: '0.8rem',
          px: 1.5,
          py: 0.5
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
          '&:hover': {
            transform: 'scale(1.05)'
          },
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
              e.stopPropagation(); // evitar que otros handlers del card se ejecuten
              navigate(`/products/${product.id}`);
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

const QuickViewModal = ({ product, open, onClose, onAddToCart }) => {
  const navigate = useNavigate();

  if (!product) return null;

  // Maneja el clic en "Añadir al carrito" desde el modal:
  const handleAddFromModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('QuickView: añadiendo producto al carrito ->', product?.id);
    onAddToCart(product);
    // cierra el modal para feedback inmediato
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="quick-view-modal"
      aria-describedby="quick-view-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(3px)'
      }}
    >
      <Box sx={{
        width: '80%',
        maxWidth: 900,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
              height: 350,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#f5f5f5'
            }}>
              <img
                src={product.detailImage || product.image}
                alt={product.name + " detalle"}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={handleAddFromModal}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddShoppingCartIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  borderRadius: 1,
                  width: '100%'
                }}
                disabled={product.stock !== undefined && product.stock <= 0}
              >
                {product.stock !== undefined && product.stock <= 0 ? 'Sin stock por el momento' : 'Añadir al carrito'}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              {product.name}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.5} precision={0.5} readOnly sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">(24 reseñas)</Typography>
            </Box>

            <Typography variant="h5" color="primary" sx={{ mb: 3, fontWeight: 'bold' }}>
              {product.price}
            </Typography>

            <Typography variant="body1" paragraph>
              {product.longDescription || product.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
              {product.tags?.map((tag, index) => (
                <Chip key={index} label={tag} color="primary" variant="outlined" />
              ))}
            </Box>

            <Typography variant="body1" color="text.secondary">
              <strong>Disponibilidad:</strong> {product.stock !== undefined ? (product.stock > 0 ? `En stock (${product.stock})` : 'Sin stock por el momento') : 'Consultar stock'}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate(`/products/${product.id}`);
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

const ProductGrid = () => {
  const { cart, addToCart } = useCart();

  // Lista completa de productos con campo stock
  const initialProducts = [
    {
      id: 1,
      name: "Encendedor Recargable USB con Linterna Negro",
      description: "El encendedor multipropósito es una innovación de vanguardia que hará que tus momentos sean más prácticos y emocionantes que nunca! Este versátil dispositivo es mucho más que un simple encendedor; es una herramienta multifuncional que combina elegancia y practicidad.",
      longDescription: "Este encendedor USB es recargable y tiene un diseño moderno y compacto. Perfecto para llevar contigo a todas partes. Con carga rápida USB-C y luz indicadora. Disponible en varios colores. Además, incluye una potente linterna LED que lo hace ideal para acampadas, emergencias o uso diario.",
      price: "$11.990",
      image: ensendedorusb,
      detailImage: ensendedordetalle,
      tags: ["Recargable", "Portátil", "Linterna LED", "USB-C", "Resistente"],
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
      tags: ["Soporte", "Universal", "Botella", "Celular", "Bici"],
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
      tags: ["Inflador", "Portátil", "Batería de larga duración", "Variable", "Digital"],
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
             tags: ["Restaurador de faros", "Kit de restauración", "Cuidado del automóvil", "Limpieza", "Brillo"],
            stock: 5
    },
    {
      id: 6,
            name: "Lentes Inteligentes con Bluetooth  y Audio Integrado",
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
            tags: ["Motosierra", "Eléctrica", "Jardinería", "Portátil"],
            stock: 2
    },
    {
      id: 9,
            name: "🧤🔦 Guantes con Linterna LED Luz Blanca",
            description: "Descubrí los Guantes con Linterna LED Luz Blanca, la solución perfecta para quienes buscan comodidad y funcionalidad en una sola prenda. Con un diseño innovador, son ideales para 🌌 actividades al aire libre, 🛠️ bricolaje o cualquier situación que requiera buena iluminación.",
            longDescription: `
✨ Iluminación Eficiente  
Equipados con una linterna LED de luz blanca fría, estos guantes ofrecen una iluminación potente 💡 que te permite ver en la oscuridad sin complicaciones. Con un modo de luz simple, iluminás cualquier espacio fácilmente, haciendo tus tareas nocturnas más seguras y prácticas 🌙✅.

🧵 Material de Calidad  
Fabricados en algodón con lycra, son suaves y flexibles, garantizando un ajuste cómodo 🤲 y excelente rango de movimiento. La combinación de materiales permite usarlos durante largos períodos sin molestias ⏳👌.

🔧 Versatilidad y Prácticidad  
Ya sea que estés trabajando en proyectos DIY 🧰, disfrutando de una caminata nocturna 🚶‍♂️🌃 o necesites iluminar un área específica, estos guantes se adaptan a todas tus necesidades. Su diseño práctico te permite usar ambas manos mientras mantenés la luz justo donde la necesitás 🙌🔦.

🚫🌑 Conclusión  
No dejes que la oscuridad te detenga. Adquirí tus Guantes con Linterna LED Luz Blanca y experimentá la comodidad de tener luz al alcance de tu mano. ¡Perfectos para cualquier ocasión! 💪✨`,
            price: "$14.990",
            image: guantesled,
            detailImage: guantesleddetalle,
            tags: ["Guantes", "LED", "Iluminación", "DIY"],
            stock: 4
    },
    {
       id: 10,
            name: "Pulsera Muñequera Magnética Para Tornillos Y Herramientas",
            description: "¡La aliada perfecta para tus proyectos de bricolaje, carpintería o mecánica! Esta muñequera magnética te permite tener tornillos, clavos, brocas y pequeñas herramientas siempre al alcance de la mano 🛠️👋.",
            longDescription: `"🧲🔧 ¿Cansado de que se te caigan los tornillos mientras trabajás?  
Imaginá esto: estás en plena reparación, con la herramienta en una mano y… ¡zas! el tornillo rueda y desaparece 😤🔩  
¡Frustrante! Pero con esta pulsera magnética, eso ya es cosa del pasado ✅

💪 Imanes potentes integrados  
Ahora podés mantener tornillos, brocas, tuercas y clavos siempre al alcance, pegados firmemente a tu muñeca 🛠️👋  
¡Nada se te escapa!

👐 ¿Siempre te falta una mano cuando más la necesitás?  
Trabajar solo puede ser complicado 😓  
Pero esta pulsera actúa como una tercera mano invisible 🪄  
Mientras usás el taladro o el destornillador, ella sostiene todo lo que necesitás.  
¡Más práctico, imposible! 🙌

🧗‍♂️ ¿Trabajás en espacios difíciles, escaleras o bajo el auto?  
En esos lugares donde moverse es un desafío, esta pulsera marca la diferencia 🚗🔧  
Liviana, ajustable y cómoda, se adapta perfectamente sin estorbar.  
Cada pieza metálica que necesitás estará justo donde la querés: pegada a vos 🧲💥

⏱️ ¿Querés ahorrar tiempo en cada trabajo?  
Con esta pulsera no perdés más minutos buscando tornillos caídos ni yendo a la caja de herramientas 🧰  
Cada detalle fue pensado para que seas más eficiente, rápido y organizado ⚡  
Ideal para electricistas, carpinteros, mecánicos, técnicos… o cualquier amante del "hacelo vos mismo" 🧑‍🔧✨

🎁 ¿Buscás un regalo original y útil?  
¡La encontraste!  
Esta pulsera magnética no solo es funcional, sino que se convierte en el regalo perfecto para quien ama reparar, construir o crear con sus manos 🎨🛠️

📌 En resumen:  
- Cómoda, liviana y resistente 💪  
- Súper práctica: tus piezas pequeñas siempre a mano 🔩  
- Ahorra tiempo y frustraciones ⏳  
- Ideal para todo tipo de tareas y profesiones 👷‍♂️👨‍🔧

🔄 Transformá la forma en que trabajás  
Una vez que la usás, no vas a querer sacártela nunca más 😍

🛒 ¡Llevate la tuya ahora y dale poder magnético a tus manos! 🧲🔥"`,
            price: "$14.990",
            image: pulceramagnetica,
            detailImage: pulceramagneticadetalle,
            tags: ["Magnética", "Ajustable", "Ergonómica", "Portátil", "Duradera"],
      stock: 3
    },
    {
      id: 11,
      name: "Nerdminer 2 Miner Btc Solo Lotter 55-60 Kh/s",
      description: "Diseño exclusivo: la máquina de lotería BTC adopta la última tecnología.",
      longDescription: "Alta eficiencia y bajo consumo, modo Solo. Color aleatorio.",
      price: "$69.990",
      image: nerdminer1,
      detailImage: nerdminer3detalle,
      tags: ["Opera a 55-60 Kh/s", "Pantalla 2.8\"", "Eficiencia", "PCB", "Modo lotería"],
      stock: 1
    },
    {
      id: 12,
      name: "Compresor de Aire Portátil 12v",
      description: "El Compresor De Aire Calgary 150 Psi Para Vehículos 12v.",
      longDescription: "Mini compresor portátil para inflar neumáticos, colchones y pelotas. Incluye accesorios.",
      price: "$40.000",
      image: compresor,
      detailImage: compresordetalle,
      tags: ["24L", "Silencioso", "Portátil", "8 bar", "Accesorios"],
      stock: 2
    },
    {
      id: 13,
      name: "Luz De Emergencia Led Solar 5 Faros 2029",
      description: "Ilumina tus espacios de una manera eficiente y ecológica con la Ampolleta Solar Led Recargable de 5 Caras.",
      longDescription: "Foco recargable solar, forma bulbo de 5 caras, luz LED y recarga solar.",
      price: "$10.990",
      image: lamparadeemergencia,
      detailImage: lamparadeemergenciadetalle,
      tags: ["Recargable", "Luz LED", "360°", "Solar", "400 lúmenes"],
      stock: 12
    },
    {
      id: 14,
      name: "Power Bank Solar y Corriente con 4 Cables de 20.000Mah",
      description: "La Batería Genérica Power Bank Solar de 20,000mAh.",
      longDescription: "Power bank 20000mAh con carga solar, incluye 4 cables y linterna.",
      price: "$26.990",
      image: powerbanksolar,
      detailImage: powerbanksolardetalle,
      tags: ["20000 mAh", "Solar", "4 cables", "Linterna", "USB"],
      stock: 5
    },
    {
      id: 15,
      name: "Linterna Foco Multifuncional Solar o Recargable USB",
      description: "Linterna foco solar o recargable multifuncional.",
      longDescription: "Versátil, 3 modos de luz, autonomía y carga USB/solar. También sirve como powerbank en emergencia.",
      price: "$35.990",
      image: linternamultifuncional,
      detailImage: linternamultifuncionaldetalle,
      tags: ["360°", "Recargable", "Solar", "Powerbank", "Trípode"],
      stock: 8
    },
    {
      id: 16,
      name: "Cocina de Camping Portátil a Gas con Maleta Sobremesa",
      description: "Mini cocina de gas de un solo quemador con encendido automático.",
      longDescription: "Maleta de transporte, encendido automático, económico en consumo y seguro para camping.",
      price: "$35.990",
      image: cocinacamping,
      detailImage: cocinacampingdetalle,
      tags: ["Portátil", "Gas butano", "Maleta", "Encendido automático", "Camping"],
      stock: 3
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Comprueba stock antes de añadir y decrementa stock localmente
  const handleAddToCart = (product) => {
    console.log('handleAddToCart llamado con:', product?.id);
    const idx = products.findIndex(p => p.id === product.id);
    if (idx === -1) {
      console.warn('Producto no encontrado en lista local', product);
      return;
    }

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

  return (
    <Container maxWidth="xl" sx={{ py: 4, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Typography variant="h4" component="h1" sx={{
        textAlign: 'center',
        mb: 4,
        fontWeight: 700,
        color: 'primary.main',
        textTransform: 'uppercase',
        letterSpacing: 1
      }}>
        Productos Destacados
      </Typography>

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

      <Grid container spacing={4} justifyContent="center">
        {products.map(product => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2.4}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <ProductCard
              product={product}
              onQuickView={handleOpenModal}
              onAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>

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
// ...existing code...