import React, { useState, useEffect, useRef } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';
import ensendedorusb from "./assets/ensendedorusb.png";
import compresor from "./assets/compresor.png";
import compresordetalle from "./assets/compresordetalle.png";
import filtrodeagua from "./assets/filtrodeagua4.jpg";
import ensendedordetalle from "./assets/ensendedordetalle.png"; 
import filtrodeaguadetalle from "./assets/filtrodeaguadetalle.jpg"; 
import restauradorfaros from './assets/restauradorfaros.jpg'
import restauradorfarosdetalle from './assets/restauradorfarosdetalle.jpg'
import portavaso from './assets/portavaso (1).jpg'
import portavasodetalle from './assets/portavasodetalle.jpg'
import infladorportatil from "./assets/infladorportatil.jpg"; 
import infladorportatildetalle from "./assets/infladorportatildetalle.jpg"; 
import gafasinteligentes from "./assets/gafasinteligentes.jpg"
import gafasinteligentesdetalle from "./assets/gafasinteligentesdetalle.jpg"
import multimedia from "./assets/multimedia.jpg"; 
import multimediadetalle from "./assets/multimediadetalle.jpg"; 
import motosierra from "./assets/motosierra.jpg";
import motosierradetalle from "./assets/motosierradetalle.jpg";
import guantesled from "./assets/guantesled.jpg";
import guantesleddetalle from "./assets/guantesleddetalle.jpg";
import intercomunicadorcasco from "./assets/intercomunicadorcasco.jpg";
import intercomunicadorcascodetalle from "./assets/intercomunicadorcascodetalle.jpg";
import nerdminer1 from "./assets/nerdminer1.webp";
import nerdminer3detalle from "./assets/nerdminer3detalle.webp";
import lamparadeemergencia from "./assets/lamparadeemergencia.webp";
import lamparadeemergenciadetalle from "./assets/lamparadeemergenciadetalle.webp";
import powerbanksolar from "./assets/powerbanksolar.png";
import powerbanksolardetalle from "./assets/powerbanksolardetalle.jpg";
import linternamultifuncional from "./assets/linternamultifuncional.jpg";
import linternamultifuncionaldetalle from "./assets/linternamultifuncionaldetalle.webp";
import cocinacamping from "./assets/cocinacamping.png";
import cocinacampingdetalle from "./assets/cocinacampingdetalle.png";
import { signInWithPopup,signInWithRedirect } from "firebase/auth"; // Ajusta la ruta si es necesario
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
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


// Mock de productos para la búsqueda (deberías importar tus productos reales)
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
      name: "Grifo con Filtro de Agua ",
      description: "Grifo con Filtro de Agua – Ahorro, limpieza y flexibilidad en tu cocina o baño.",
      longDescription: "Este grifo cuenta con un filtro de agua integrado que garantiza agua limpia y purificada para tu hogar. Su diseño moderno se adapta a cualquier estilo de cocina o baño, y su instalación es rápida y sencilla.",
      price: "$12.990",
      image: filtrodeagua,
      detailImage: filtrodeaguadetalle,
      tags: ["Grifo", "Filtro de agua", "Cocina", "Baño", "Ahorro"],
      
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
      tags: ["Inflador", "Portátil", "Batería de larga duración", "Variable", "Digital"]
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
             tags: ["Restaurador de faros", "Kit de restauración", "Cuidado del automóvil", "Limpieza", "Brillo"]
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
            tags: ["Bluetooth", "Audio", "Estilo", "Tecnología", "Accesorios"]
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
      tags: ["Multimedia", "Bluetooth", "Audio", "Tecnología", "Auto"]
          },
          {id: 8,
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
            tags: ["Motosierra", "Eléctrica", "Jardinería", "Portátil"]
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
            mage: guantesled,
            detailImage: guantesleddetalle,
            tags: ["Guantes", "LED", "Iluminación", "DIY"],
            
          },
          {
            id: 10,
            name: "Intercomunicador Audífonos para Casco de Motos Bluetooth Y20",
            description: "Bluetooth Para Casco De Moto Elikidsto Y20: Hifi, Reducción.",
            longDescription: "El intercomunicador Y20-2X de la marca TM ofrece una experiencia de comunicación única para motociclistas que buscan mantenerse conectados mientras disfrutan de la carretera. Con un alcance máximo de 800 metros, este dispositivo asegura una conexión clara y constante, permitiendo intercambiar información con facilidad, incluso a distancias considerables. Equipado con la avanzada tecnología Bluetooth 5, garantiza una conexión estable con dispositivos iOS y Android, optimizando así la interacción durante los viajes. Su autonomía de batería de 24 horas permite largos recorridos sin la preocupación de recargas frecuentes, ideal para aventuras prolongadas. Además, este intercomunicador cuenta con una clasificación de resistencia al agua IPX6, asegurando su funcionalidad en diversas condiciones climáticas. El sistema de reducción de ruido proporciona una calidad de audio superior, permitiendo escuchar música o recibir llamadas de manera clara y sin interrupciones, un imprescindible en cada salida.",
            price: "$89.990",
            image: intercomunicadorcasco,
            detailImage: intercomunicadorcascodetalle,
            tags: ["Inalámbrica", "18V", "Sin escobillas", "Luz LED", "Precisión"]
          },
          {
               id: 11,
               name: "Nerdminer 2 Miner Btc Solo Lotter 55-60 Kh/s",
               description: "Diseño exclusivo: la máquina de lotería BTC adopta la última tecnología y adopta un modo Solo único, lo que te brinda la oportunidad de obtener todo en un área.",
               longDescription: "puedes disfrutarlo exclusivamente (actualmente 3.125) sin compartirlo con otros! Alta eficiencia: el bajo consumo reduce considerablemente sus costos, ¡así que no tiene que preocuparse por las facturas de electricidad! Debido a los diferentes lotes, puede haber diferencias en la apariencia, el color y el texto impreso del producto, lo que no afectará al uso.Color: color aleatorio (el color es aleatorio, no se aceptan especificaciones)Material: PCB.",
               price: "$69.990",
               image: nerdminer1,
               detailImage: nerdminer3detalle,
               tags: ["Minería BTC ", "Solo Mining ", "Bajo consumo", "Pantalla integrada ", "Modo lotería"]
             },
          {
            id: 12,
            name: "Compresor de Aire Portátil 12v",
            description: "El Compresor De Aire Calgary 150 Psi Para Vehículos 12v.",
            longDescription: "Potencia de 2HP con presión máxima de 8 bar. Nivel de ruido reducido (72 dB). Ruedas y asa para fácil transporte. Ideal para inflar neumáticos, uso con herramientas neumáticas y trabajos de pintura. Incluye kit de accesorios básicos.El Compresor De Aire Calgary 150 Psi Para Vehículos 12v/ 215144 Color Plateado – 271017 Frecuencia 150psi-213001 C44 es un dispositivo pequeño, ligero y versátil. Este mini compresor de aire portátil de 12v infla rápidamente neumáticos, pelotas, colchones de aire deportivos y juguetes inflables. Su motor de alta calidad comprime el aire en su tanque. Cuenta con un medidor de presión incorporado que permite comprobar la presión de los neumáticos en cualquier momento. Se conecta a un sistema de coche 12v para las reparaciones o la inflación on-the-go.",
            price: "$40.000",
            image: compresor,
            detailImage: compresordetalle,
            tags: ["24L", "Silencioso", "Portátil", "8 bar", "Accesorios"]
          },
            {
                id: 13,
                name: "Luz De Emergencia Led Solar 5 Faros 2029",
                description: "Ilumina tus espacios de una manera eficiente y ecológica con la Ampolleta Solar Led Recargable de 5 Caras.",
                longDescription: "Este innovador modelo proporciona una iluminación cálida y acogedora, ideal para patios, jardines o ambientes interiores que requieren un toque especial. Su forma de bulbo 5 caras maximiza la emisión de luz, brindando una cobertura óptima en cualquier área.Con tecnología LED, esta ampolleta no solo es amigable con el medio ambiente, sino que también ofrece una duración prolongada, permitiéndote disfrutar de sus beneficios sin preocupaciones. Funciona con un sistema de recarga solar, lo que la hace perfecta para ubicaciones donde la electricidad puede ser limitada o para aquellos que buscan reducir su huella de carbono.El foco Solar Led Recargable es fácil de instalar en cualquier lugar, gracias a su diseño con rosca colgante. No requiere conexión a Wi-Fi ni compatibles con asistentes virtuales, lo que simplifica su uso y mantenimiento. Con este producto, obtienes una iluminación funcional y decorativa que se adapta a diversas necesidades y estilos, ayudándote a crear ambientes únicos y confortables..",
                price: "$10.990",
                image: lamparadeemergencia,
                detailImage: lamparadeemergenciadetalle,
                tags: ["Recargable", "Material: plástico ABS", "Luz LED", "Ángulo de luz: 360 grados", "Lúmenes: 400"]
              },
          {
                         id: 14,
                         name: "Power Bank Solar y Corriente con 4 Cables de 20.000Mah",
                         description: "La Batería Genérica Power Bank Solar de 20,000mAh.",
                         longDescription: "Es la solución ideal para quienes buscan energía portátil y confiable en cualquier momento y lugar. Con su capacidad de 20,000mAh, podrás cargar tus dispositivos múltiples veces, asegurando que nunca te quedes sin batería, ya sea en un viaje, en el campo o en la ciudad. Power bank con linterna.Este modelo es compatible con todas las marcas y modelos de celulares, lo que la convierte en una opción versátil para cualquier usuario. Además, incluye cuatro cables, lo que facilita la carga de diferentes dispositivos sin necesidad de llevar accesorios adicionales.Su diseño solar permite recargar la batería utilizando la energía del sol, lo que la hace perfecta para actividades al aire libre. Con esta batería, no solo estarás cuidando tus dispositivos, sino también el medio ambiente al optar por una fuente de energía renovable.La Batería Genérica Power Bank Solar es compacta y ligera, lo que la hace fácil de transportar. No importa si eres un aventurero, un estudiante o un profesional en movimiento, esta batería se adaptará a tus necesidades y te brindará la tranquilidad de tener energía siempre a tu alcance.Color:  Negro y Blanco.",
                         price: "$26.990",
                         image: powerbanksolar,
                         detailImage: powerbanksolardetalle,
                         tags: ["Capacidad: 20000 mAh", "Carga solar incluida", "Puertos: 2 USB, 1 MicroUSB, 1 Tipo C", "Compatible con Android, iPhone y más", "Protección contra sobrecarga y cortocircuito"]
                       },
         {
               id: 15,
               name: "Linterna Foco Multifuncional Solar o Recargable USB°",
               description: "Linterna foco solar o recargable multifuncionall.",
               longDescription: "es la solución ideal para quienes buscan versatilidad y eficiencia en iluminación. Diseñada para uso doméstico, esta linterna es perfecta tanto para interiores como exteriores, adaptándose a diversas necesidades. Su alimentación solar y recargable garantiza un uso prolongado, permitiendo disfrutar de hasta 5 horas de luz continua.Equipado con tecnología LED, este modelo ofrece tres modos de cambio de luz, lo que permite ajustar la intensidad según la situación. Con un diseño compacto de 16 cm de largo, es fácil de transportar y almacenar. Además, su resistencia al polvo asegura un rendimiento óptimo en diferentes entornos.La carga USB facilita la recarga, brindando comodidad y rapidez. Ideal para actividades al aire libre, emergencias o simplemente para iluminar espacios en el hogar, esta linterna es una herramienta indispensable. Su funcionalidad y diseño práctico la convierten en una opción atractiva para quienes valoran la calidad y la eficiencia en sus productos de iluminación.**TAMBIEN SIRVE COMO POWERBANK SOLO PARA CARGA DE EMERGENCIA**.",
               price: "$35.990",
               image: linternamultifuncional,
               detailImage: linternamultifuncionaldetalle,
               tags: ["360°", "Autonivelante", "Preciso", "Resistente", "Trípode"]
             },
              {
               id: 16,
               name: "Cocina de Camping Portátil a Gas con Maleta Sobremesa",
               description: "Mini cocina de gas de un solo quemador con encendido automático.",
               longDescription: "está diseñada para cocinar y hervir agua, tanto en el hogar como en la naturaleza.Adecuado como opción de respaldo para cocinar en hogares con estufas eléctricas en caso de corte de energía. No te quedarás sin comida caliente, té o café. Una opción de viaje elegante.A pesar de su reducido tamaño, este quemador permite cocinar alimentos en recipientes de hasta 22 cm de diámetro, un litro de agua hierve en cinco minutos.La estufa viene en una maleta de plástico con asa, en la que será conveniente no solo almacenarla sino también transportarla, no ocupa mucho espacio y puede caber fácilmente en el maletero del auto o llevar en la mano.Cuenta con una  construcción sólida, una fijación confiable para las ollas, por lo que el proceso de calentamiento de los alimentos se realiza fácilmente y sin molestias.Está equipado con un sistema de fuga de gas, encendido chispero incorporado, encendido automático de fuego y un quemador de una pieza.A pesar de su tamaño, es muy económico en consumo de gas, un cilindro de boquilla es suficiente para unas tres horas con un modo de combustión medio.Tamaño: aproximadamente 34x27x12 cm.Gas butano.Peso: aproximadamente 1500g.",
               price: "$35.990",
               image: cocinacamping,
               detailImage: cocinacampingdetalle,
               tags: ["360°", "Autonivelante", "Preciso", "Resistente", "Trípode"]
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
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [elevated, setElevated] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate(); // Añadimos el hook de navegación
  const [user, setUser] = useState(null);


// Detectar si es un dispositivo móvil
const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// ...dentro de Header.jsx, dentro del componente Header...
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
  console.log("Usuario logueado:", user);
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

   // 1. Efecto para manejar el resultado de la redirección


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
      // Lógica para hacer una búsqueda en el backend o en un array

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

   // 2. Manejador global de errores para evitar mensajes en consola
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      // Suprimimos errores específicos de Firebase relacionados con ventanas cerradas
      if (event.reason?.message?.includes('window.closed') || 
          event.reason?.code === 'auth/popup-closed-by-user') {
        event.preventDefault();
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
    
  
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
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
          {/* Logo con función para scroll suave */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            mb: isMobile && searchOpen ? 2 : 0
          }}>
            <Logo onClick={scrollToTop} />

            {/* En móviles: Botón de búsqueda cuando no está abierto */}
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

          {/* Buscador */}
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

            {/* Resultados de búsqueda */}
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
                      // En la sección de resultados de búsqueda, cambiamos el ListItem por:
                      <ListItem
                        key={product.id}
                        component={Link} // Convertimos el ListItem en un enlace
                        to={`/products/${product.id}`} // Ruta a la que dirige
                        onClick={() => {
                          setSearchOpen(false); // Cerramos el panel de búsqueda
                          setSearchTerm(''); // Limpiamos el término de búsqueda
                          setSearchResults([]); // Limpiamos los resultados
                        }}
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

          {/* Botones de redes sociales y acciones */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 1 },
            ml: isMobile ? 0 : 1
          }}>
            {/* En escritorio: Botón de búsqueda */}
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

     
{/* Contenedor general de las dos filas */}
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', sm: 'flex-start' },
    gap: 1
  }}
>
  {/* Fila de íconos de redes sociales */}
  <Box
    sx={{
      display: 'flex',
      gap: { xs: 1, sm: 2 },
      justifyContent: { xs: 'center', sm: 'flex-start' },
      flexWrap: 'wrap'
    }}
  >
    {/* Íconos sociales */}
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

  {/* Fila de carrito, registro y buscador*/}
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: { xs: 1, sm: 2 },
      justifyContent: { xs: 'center', sm: 'flex-start' },
      alignItems: 'center'
    }}
  >
    {/* Buscador (si tenés un input o componente SearchBar, colocarlo acá) */}
    {/* <SearchBar /> */}

    {/* Botón del carrito */}
    <Link to="/cart">
  <IconButton aria-label="Carrito" sx={{ color: 'text.secondary' }}>
    <Badge badgeContent={totalItems} color="error">
      <ShoppingCart sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
    </Badge>
  </IconButton>
    </Link>

    {/* Registro solo si no es móvil */}
    
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
      {/* Solo muestra el nombre en escritorio */}
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
    </ClickAwayListener>
  );
};
export { mockProducts };
export default Header;