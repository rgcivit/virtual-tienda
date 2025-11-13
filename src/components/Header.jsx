// ...existing code...
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';
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
import asientomascotas from "./assets/asientomascotas.jpg";
import asientomascotasdetalle from "./assets/asientomascotasdetalle.jpg";
import asientomascotasdetalle1 from "./assets/asientomascotasdetalle1.jpg";
import asientomascotasdetalle2 from "./assets/asientomascotasdetalle2.jpg";
import lamparadeemergencia from "./assets/lamparadeemergencia.webp";
import lamparadeemergenciadetalle from "./assets/lamparadeemergenciadetalle.webp";
import powerbanksolar from "./assets/powerbanksolar.png";
import powerbanksolardetalle from "./assets/powerbanksolardetalle.jpg";
import linternamultifuncional from "./assets/linternamultifuncional.jpg";
import linternamultifuncionaldetalle from "./assets/linternamultifuncionaldetalle.webp";
import cocinacamping from "./assets/cocinacamping.png";
import cocinacampingdetalle from "./assets/cocinacampingdetalle.png";
import { signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from '../firebase';

import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Box, 
  useMediaQuery, 
  Button, 
  Badge,
  TextField,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Fade,
  ClickAwayListener
} from '@mui/material';
import { 
  WhatsApp, 
  Instagram, 
  Facebook, 
  Person, 
  ShoppingCart, 
  Search, 
  Close 
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

// Importa tu logo
import logotiendavirtual from './assets/logotiendavirtual.png';

const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Mock de productos para la búsqueda
const mockProducts = [
  {
    id: 1,
    name: "Encendedor Recargable USB con Linterna Negro",
    description: "El encendedor multipropósito es una innovación de vanguardia que hará que tus momentos sean más prácticos y emocionantes que nunca! Este versátil dispositivo es mucho más que un simple encendedor; es una herramienta multifuncional que combina elegancia y practicidad.",
    longDescription: "Este encendedor USB es recargable y tiene un diseño moderno y compacto. Perfecto para llevar contigo a todas partes. Con carga rápida USB-C y luz indicadora. Disponible en varios colores. Además, incluye una potente linterna LED que lo hace ideal para acampadas, emergencias o uso diario.",
    price: "$11.990",
    image: ensendedorusb,
    detailImage: ensendedordetalle,
    tags: ["Recargable", "Portátil", "Linterna LED", "USB-C", "Resistente"]
  },
  {
    id: 2,
    name: "Grifo con Filtro de Agua",
    description: "Grifo con Filtro de Agua – Ahorro, limpieza y flexibilidad en tu cocina o baño.",
    longDescription: "Este grifo cuenta con un filtro de agua integrado que garantiza agua limpia y purificada para tu hogar. Su diseño moderno se adapta a cualquier estilo de cocina o baño, y su instalación es rápida y sencilla.",
    price: "$12.990",
    image: filtrodeagua,
    detailImage: filtrodeaguadetalle,
    tags: ["Grifo", "Filtro de agua", "Cocina", "Baño", "Ahorro"]
  },
  {
    id: 3,
    name: "Soporte Universal para Botella y Celular",
    description: "¡La solución práctica y resistente para tus salidas en bici, moto o cochecito!.",
    price: "$55.000",
    image: portavaso,
    detailImage: portavasodetalle,
    tags: ["98V", "Doble batería", "40 N.m", "Herramientas", "Tasbel"]
  },
  {
    id: 4,
    name: "Inflador Digital Portátil",
    description: "Tu compañero ideal para la aventura ¡Compacto, potente y listo para cualquier terreno!.",
    longDescription: `🏕️ Perfecto para salidas de camping, travesías en bici o senderismo
🔋 Batería de larga duración (4000mAh) para inflar sin depender de enchufes
📈 Presión máxima de 150 PSI – ideal para bicicletas, motos, pelotas y más
🎯 Pantalla digital con lectura precisa y apagado automático
🔇 Funcionamiento silencioso (menos de 78dB)
👜 Diseño compacto, fácil de guardar en mochila o alforja

✅ Preset de presión para distintos tipos de ruedas
✅ Compatible con válvulas comunes (Presta, Schrader, etc.)
✅ Carga por USB – ¡siempre listo!

💥 Precio especial: $55.000

🌄 ¡No te quedes varado en medio del camino! Este inflador es tu seguro de movilidad en cualquier aventura 🚵‍♀️`,
    price: "$55.000",
    image: infladorportatil,
    detailImage: infladorportatildetalle,
    tags: ["Inflador", "Portátil", "Batería de larga duración", "Variable", "Digital"]
  },
  {
    id: 5,
    name: "KIT RESTAURADOR DE FAROS",
    description: "¡Volvé a ver con claridad! ¿Tus faros están opacos, amarillentos o rayados? Este kit es la solución rápida, económica y efectiva 💡",
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
💥 Precio promocional: $14.990`,
    price: "$14.990",
    image: restauradorfaros,
    detailImage: restauradorfarosdetalle,
    tags: ["Restaurador de faros", "Kit de restauración", "Cuidado del automóvil", "Limpieza", "Brillo"]
  },
  {
    id: 6,
    name: "Lentes Inteligentes con Bluetooth y Audio Integrado",
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
    tags: ["Bluetooth", "Audio", "Estilo", "Tecnología", "Accesorios"]
  },
  {
    id: 7,
    name: "Reproductor Universal para Autos",
    description: "¡Transformá tu viaje en una experiencia multimedia! 🚗✨",
    longDescription: `📺 Pantalla táctil TFT de 7" (formato 16:9)
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
Sonido potente y envolvente para todos los pasajeros.`,
    price: "$89.990",
    image: multimedia,
    detailImage: multimediadetalle,
    tags: ["Multimedia", "Bluetooth", "Audio", "Tecnología", "Auto"]
  },
  {
    id: 8,
    name: "🪚🔋 Mini Motosierra Eléctrica BEKR 24V",
    description: "¡Potencia portátil para tus tareas de corte! 🌳💪",
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
    tags: ["Motosierra", "Eléctrica", "Jardinería", "Portátil"]
  },
  {
    id: 9,
    name: "🧤🔦 Guantes con Linterna LED Luz Blanca",
    description: "Descubrí los Guantes con Linterna LED Luz Blanca, la solución perfecta para quienes buscan comodidad y funcionalidad en una sola prenda. Con un diseño innovador, son ideales para actividades al aire libre, bricolaje o cualquier situación que requiera buena iluminación.",
    longDescription: `✨ Iluminación Eficiente: Equipados con una linterna LED de luz blanca fría, estos guantes ofrecen una iluminación potente que te permite ver en la oscuridad sin complicaciones. Con un modo de luz simple, iluminás cualquier espacio fácilmente, haciendo tus tareas nocturnas más seguras y prácticas.

🧵 Material de Calidad:
Fabricados en algodón con lycra, son suaves y flexibles, garantizando un ajuste cómodo y excelente rango de movimiento.

🔧 Versatilidad y Prácticidad:
Ya sea que estés trabajando en proyectos DIY, disfrutando de una caminata nocturna o necesites iluminar un área específica, estos guantes se adaptan a todas tus necesidades.`,
    price: "$14.990",
    image: guantesled,
    detailImage: guantesleddetalle,
    tags: ["Guantes", "LED", "Iluminación", "DIY"]
  },
  {
    id: 10,
    name: "Pulsera Muñequera Magnética Para Tornillos Y Herramientas",
    description: "¡La aliada perfecta para tus proyectos de bricolaje, carpintería o mecánica! Esta muñequera magnética te permite tener tornillos, clavos, brocas y pequeñas herramientas siempre al alcance de la mano.",
    longDescription: `🧲🔧 ¿Cansado de que se te caigan los tornillos mientras trabajás?
Imaginá esto: estás en plena reparación, con la herramienta en una mano y… ¡zas! el tornillo rueda y desaparece.
¡Frustrante! Pero con esta pulsera magnética, eso ya es cosa del pasado.

💪 Imanes potentes integrados
Ahora podés mantener tornillos, brocas, tuercas y clavos siempre al alcance, pegados firmemente a tu muñeca.

🧗‍♂️ Ideal para espacios difíciles, escaleras o trabajos bajo el auto.
Liviana, ajustable y cómoda, se adapta perfectamente sin estorbar.`,
    price: "$14.990",
    image: pulceramagnetica,
    detailImage: pulceramagneticadetalle,
    tags: ["Magnética", "Ajustable", "Ergonómica", "Portátil", "Duradera"]
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
    detailImage: asientomascotasdetalle,
    tags: ["Asiento para mascotas", "Seguridad", "Comodidad", "Viajes"],
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
          stock: 1
  },
  {
    id: 13,
    name: "Luz De Emergencia Led Solar 5 Faros 2029",
    description: "Ilumina tus espacios de una manera eficiente y ecológica con la Ampolleta Solar Led Recargable de 5 Caras.",
    longDescription: "Este modelo proporciona una iluminación cálida y acogedora. Funciona con recarga solar y es fácil de instalar; ideal para patios y lugares sin acceso continuo a la red eléctrica.",
    price: "$10.990",
    image: lamparadeemergencia,
    detailImage: lamparadeemergenciadetalle,
    tags: ["Recargable", "Material: plástico ABS", "Luz LED", "Ángulo de luz: 360 grados", "Lúmenes: 400"]
  },
  {
    id: 14,
    name: "Power Bank Solar y Corriente con 4 Cables de 20.000Mah",
    description: "La Batería Genérica Power Bank Solar de 20,000mAh.",
    longDescription: "Capacidad de 20,000mAh con carga solar y cuatro cables incluidos. Compatible con la mayoría de dispositivos y con protecciones integradas.",
    price: "$26.990",
    image: powerbanksolar,
    detailImage: powerbanksolardetalle,
    tags: ["Capacidad: 20000 mAh", "Carga solar incluida", "Puertos: 2 USB, 1 MicroUSB, 1 Tipo C", "Compatible con Android, iPhone y más", "Protección contra sobrecarga y cortocircuito"]
  },
  {
    id: 15,
    name: "Linterna Foco Multifuncional Solar o Recargable USB",
    description: "Linterna foco solar o recargable multifuncional.",
    longDescription: "Versátil linterna con alimentación solar y USB, hasta 5 horas de luz continua, varios modos y función powerbank de emergencia.",
    price: "$35.990",
    image: linternamultifuncional,
    detailImage: linternamultifuncionaldetalle,
    tags: ["360°", "Autonivelante", "Preciso", "Resistente", "Trípode"]
  },
  {
    id: 16,
    name: "Cocina de Camping Portátil a Gas con Maleta Sobremesa",
    description: "Mini cocina de gas de un solo quemador con encendido automático.",
    longDescription: "Diseñada para cocinar y hervir agua en la naturaleza o como respaldo en cortes de luz. Compacta, económica y fácil de transportar.",
    price: "$35.990",
    image: cocinacamping,
    detailImage: cocinacampingdetalle,
    tags: ["Camping", "Portable", "Gas", "Encendido automático"]
  }
];

const Logo = ({ onClick }) => {
  return (
    <Box 
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        mr: { xs: 1, md: 4 },
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    >
      <img 
        src={logotiendavirtual} 
        alt="Logo Virtual Tienda" 
        style={{ 
          height: '100px',
          width: 'auto',
          maxWidth: '200px',
          objectFit: 'contain',
          transition: 'all 0.3s ease',
        }} 
      />
    </Box>
  );
};

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + (item?.quantity || 0), 0);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [elevated, setElevated] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // usar la constante de módulo isMobileDevice (ya definida arriba)

  const handleGoogleRegister = async () => {
    try {
      if (isMobileDevice) {
        await signInWithRedirect(auth, provider);
      } else {
        await signInWithPopup(auth, provider);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  // función para abrir detalle de producto y pasar el objeto (incluye longDescription)
  const openProductDetail = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // cerrar buscador si venía de ahí
    setSearchOpen(false);
    setSearchTerm('');
    setSearchResults([]);
    console.log('Navegando al detalle del producto:', product);
  };

  // Función para hacer scroll suave al inicio
  const scrollToTop = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Función para abrir chat de WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '5492612161271';
    const message = encodeURIComponent('Hola, estoy interesado en sus productos.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Alternar visibilidad del buscador
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => {
        if (searchRef.current) {
          searchRef.current.focus();
        }
      }, 100);
    } else {
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  // Cerrar el buscador al hacer clic fuera
  const handleClickAway = () => {
    if (searchOpen) {
      setSearchOpen(false);
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  // Filtrar productos según el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const term = searchTerm.toLowerCase();
    const results = mockProducts.filter(product =>
      product.name.toLowerCase().includes(term) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(term)))
    );

    setSearchResults(results.slice());
  }, [searchTerm]);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejador global de errores para evitar mensajes en consola
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      if (event.reason?.message?.includes('window.closed') || 
          event.reason?.code === 'auth/popup-closed-by-user') {
        event.preventDefault();
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <>
        <AppBar
          position="sticky"
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            boxShadow: elevated ? theme.shadows[3] : 'none',
            borderBottom: elevated ? 'none' : '1px solid rgba(0, 0, 0, 0.12)',
            py: 1,
            transition: 'all 0.3s ease',
            top: 0,
            zIndex: theme.zIndex.appBar + 100
          }}
        >
          <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
            px: { xs: 1, sm: 2 },
            flexDirection: isMobile && searchOpen ? 'column' : 'row'
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mb: isMobile && searchOpen ? 2 : 0
            }}>
              <Logo onClick={scrollToTop} />

              {isMobile && !searchOpen && (
                <IconButton
                  onClick={toggleSearch}
                  sx={{
                    ml: 1,
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(63, 81, 181, 0.1)',
                    }
                  }}
                >
                  <Search />
                </IconButton>
              )}
            </Box>

            <Box sx={{
              position: 'relative',
              width: isMobile ? '100%' : '40%',
              maxWidth: 600,
              mb: isMobile && searchOpen ? 2 : 0,
              display: searchOpen || !isMobile ? 'block' : 'none'
            }}>
              <TextField
                inputRef={searchRef}
                fullWidth
                variant="outlined"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                  endAdornment: searchTerm && (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => setSearchTerm('')}
                      >
                        <Close fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: theme.shadows[1],
                    '& fieldset': {
                      border: 'none',
                    },
                  }
                }}
              />

              {searchResults.length > 0 && (
                <Fade in={searchResults.length > 0}>
                  <Paper sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    mt: 1,
                    boxShadow: theme.shadows[3],
                    maxHeight: 300,
                    overflowY: 'auto'
                  }}>
                    <List>
                      {searchResults.map(product => (
                        <ListItem
                          key={product.id}
                          button
                          onClick={() => openProductDetail(product)}
                          sx={{
                            '&:hover': {
                              backgroundColor: 'action.hover'
                            }
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              alt={product.name}
                              src={product.image}
                              variant="rounded"
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={product.name}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {product.price}
                                </Typography>
                                {` — ${product.description}`}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Fade>
              )}
            </Box>

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 1 },
              ml: isMobile ? 0 : 1
            }}>
              {!isMobile && (
                <IconButton
                  onClick={toggleSearch}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(63, 81, 181, 0.1)',
                    }
                  }}
                >
                  <Search />
                </IconButton>
              )}

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  gap: 1
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 1, sm: 2 },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    flexWrap: 'wrap'
                  }}
                >
                  <IconButton onClick={openWhatsApp} aria-label="WhatsApp" sx={{ color: 'text.secondary' }}>
                    <WhatsApp sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
                  </IconButton>
                  <IconButton aria-label="Instagram" sx={{ color: 'text.secondary' }}>
                    <Instagram sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
                  </IconButton>
                  <IconButton aria-label="Facebook" sx={{ color: 'text.secondary' }}>
                    <Facebook sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: { xs: 1, sm: 2 },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    alignItems: 'center'
                  }}
                >
                  <Link to="/cart">
                    <IconButton aria-label="Carrito" sx={{ color: 'text.secondary' }}>
                      <Badge badgeContent={totalItems} color="error">
                        <ShoppingCart sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
                      </Badge>
                    </IconButton>
                  </Link>

                  {!user ? (
                    <IconButton
                      onClick={handleGoogleRegister}
                      aria-label="Registro"
                      sx={{
                        color: 'text.secondary',
                        p: 0.5,
                        ml: 1
                      }}
                    >
                      <Person sx={{ fontSize: { xs: '1.7rem', sm: '1.8rem' } }} />
                    </IconButton>
                  ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar
                        src={user.photoURL || ''}
                        alt={user.displayName || ''}
                        sx={{
                          width: 32,
                          height: 32,
                          border: '2px solid #1976d2',
                          ml: 1
                        }}
                      />
                      {!isMobile && (
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {user.displayName}
                        </Typography>
                      )}
                      {isMobile && (
                        <IconButton
                          onClick={handleGoogleRegister}
                          aria-label="Perfil"
                          sx={{
                            color: 'text.secondary',
                            p: 0.5,
                            ml: 1
                          }}
                        >
                          <Person sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
                        </IconButton>
                      )}
                      <Button
                        variant="text"
                        color="secondary"
                        onClick={async () => {
                          await signOut(auth);
                          setUser(null);
                        }}
                        sx={{
                          ml: 1,
                          fontSize: { xs: '0.8rem', sm: '0.875rem' },
                          minWidth: 0,
                          px: 1
                        }}
                      >
                        Logout
                      </Button>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        {location.pathname === '/' && (
          <Box
            sx={{
              position: 'fixed',
              bottom: 40,
              right: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              zIndex: 1300,
            }}
          >
            <IconButton
              onClick={openWhatsApp}
              aria-label="WhatsApp flotante"
              sx={{
                bgcolor: '#25D366',
                color: '#fff',
                boxShadow: 4,
                '&:hover': {
                  bgcolor: '#1ebe5d',
                },
                width: 64,
                height: 64,
              }}
            >
              <WhatsApp sx={{ fontSize: 38 }} />
            </IconButton>

            <Typography
              variant="caption"
              sx={{
                color: 'tomato',
                bgcolor: '#ffffff',
                px: 1.5,
                py: 0.4,
                borderRadius: 999,
                fontWeight: 600,
                textAlign: 'center',
                maxWidth: 140,
                boxShadow: 2,
                border: '1px solid #ffe0d5',
              }}
            >
              ¿Consultas? ¿Dudas?
            </Typography>
          </Box>
        )}
      </>
    </ClickAwayListener>
  );
};

export { mockProducts };
export default Header;