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
import asientomascotas from "./assets/asientomascotas.jpg";
import asientomascotasdetalle from "./assets/asientomascotasdetalle.jpg";
import asientomascotasdetalle1 from "./assets/asientomascotasdetalle1.jpg";
import asientomascotasdetalle2 from "./assets/asientomascotasdetalle2.jpg";
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
    name: "Grifo con Filtro de Agua",
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
    name: "Soporte Universal para Botella y Celular",
    description: "¡La solución práctica y resistente para tus salidas en bici, moto o cochecito!.",
    price: "$55.000",
    image: portavaso,
    detailImage: portavasodetalle,
    tags: ["98V", "Doble batería", "40 N.m", "Herramientas", "Tasbel"],
     stock: 3
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
    tags: ["Inflador", "Portátil", "Batería de larga duración", "Variable", "Digital"],
     stock: 3
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
    tags: ["Restaurador de faros", "Kit de restauración", "Cuidado del automóvil", "Limpieza", "Brillo"],
       stock: 1
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
    tags: ["Bluetooth", "Audio", "Estilo", "Tecnología", "Accesorios"],
       stock: 3
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
    tags: ["Multimedia", "Bluetooth", "Audio", "Tecnología", "Auto"],
       stock: 2
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
    tags: ["Motosierra", "Eléctrica", "Jardinería", "Portátil"],
       stock: 2
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
    tags: ["Guantes", "LED", "Iluminación", "DIY"],
       stock: 3
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
    tags: ["Magnética", "Ajustable", "Ergonómica", "Portátil", "Duradera"],
       stock: 1
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
    price: "$69.990",
    image: asientomascotas,
    detailImage: [asientomascotasdetalle, asientomascotasdetalle1, asientomascotasdetalle2,asientomascotas],
    tags: ["Asiento para mascotas", "Seguridad", "Comodidad", "Viajes"],
     stock: 1
  },
  {
    id: 12,
    name: "Compresor de Aire Portátil 12v",
    description: "El Compresor De Aire Calgary 150 Psi Para Vehículos 12v.",
    longDescription: "Potencia de 2HP con presión máxima de 8 bar. Nivel de ruido reducido (72 dB). Ruedas y asa para fácil transporte. Ideal para inflar neumáticos, uso con herramientas neumáticas y trabajos de pintura. Incluye kit de accesorios básicos.",
    price: "$40.000",
    image: compresor,
    detailImage: compresordetalle,
    tags: ["24L", "Silencioso", "Portátil", "8 bar", "Accesorios"]
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
 // Detecta y une todas las imágenes disponibles
const images = (
  Array.isArray(product.detailImage)
    ? product.detailImage
    : product.detailImages && Array.isArray(product.detailImages)
    ? product.detailImages
    : product.gallery && product.gallery.length > 0
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
