// src/data/mockProducts.js

// IMPORTS DE IMÁGENES
import ensendedorusb from "../components/assets/ensendedorusb.png";
import ensendedordetalle from "../components/assets/ensendedordetalle.png";

import filtrodeagua from "../components/assets/filtrodeagua4.jpg";
import filtrodeaguadetalle from "../components/assets/filtrodeaguadetalle.jpg";

import portavaso from "../components/assets/portavaso (1).jpg";
import portavasodetalle from "../components/assets/portavasodetalle.jpg";

import infladorportatil from "../components/assets/infladorportatil.jpg";
import infladorportatildetalle from "../components/assets/infladorportatildetalle.jpg";

import restauradorfaros from "../components/assets/restauradorfaros.jpg";
import restauradorfarosdetalle from "../components/assets/restauradorfarosdetalle.jpg";

import gafasinteligentes from "../components/assets/gafasinteligentes.jpg";
import gafasinteligentesdetalle from "../components/assets/gafasinteligentesdetalle.jpg";

import multimedia from "../components/assets/multimedia.jpg";
import multimediadetalle from "../components/assets/multimediadetalle.jpg";

import motosierra from "../components/assets/motosierra.jpg";
import motosierradetalle from "../components/assets/motosierradetalle.jpg";

import guantesled from "../components/assets/guantesled.jpg";
import guantesleddetalle from "../components/assets/guantesleddetalle.jpg";

import pulceramagnetica from "../components/assets/pulceramagnetica.jpg";
import pulceramagneticadetalle from "../components/assets/pulceramagneticadetalle.jpg";

import asientomascotas from "../components/assets/asientomascotas.jpg";
import asientomascotasdetalle from "../components/assets/asientomascotasdetalle.jpg";
import asientomascotasdetalle1 from "../components/assets/asientomascotasdetalle1.jpg";
import asientomascotasdetalle2 from "../components/assets/asientomascotasdetalle2.jpg";

import cubreasiento from "../components/assets/cubreasiento.jpg";
import cubreasientodetalle1 from "../components/assets/cubreasientodetalle1.jpg";
import cubreasientodetalle2 from "../components/assets/cubreasientodetalle2.jpg";
import cubreasientodetalle3 from "../components/assets/cubreasientodetalle3.jpg";
import cubreasientodetalle4 from "../components/assets/cubreasientodetalle4.jpg";
import cubreasientodetalle5 from "../components/assets/cubreasientodetalle5.jpg";

import fitnesswatch from "../components/assets/fitnesswatch.jpg";
import fitnesswatchdetalle1 from "../components/assets/fitnesswatchdetalle1.jpg";
import fitnesswatchdetalle2 from "../components/assets/fitnesswatchdetalle2.jpg";
import fitnesswatchdetalle3 from "../components/assets/fitnesswatchdetalle3.jpg";
import fitnesswatchdetalle4 from "../components/assets/fitnesswatchdetalle4.jpg";
import fitnesswatchdetalle5 from "../components/assets/fitnesswatchdetalle5.jpg";
import fitnesswatchdetalle6 from "../components/assets/fitnesswatchdetalle6.jpg";
import fitnesswatchdetalle7 from "../components/assets/fitnesswatchdetalle7.jpg";
import fitnesswatchdetalle8 from "../components/assets/fitnesswatchdetalle8.jpg";

import vasomusical from "../components/assets/vasomusical.jpeg";
import vasomusical1 from "../components/assets/vasomusical1.jpeg";
import vasomusical2 from "../components/assets/vasomusical2.jpeg";
import vasomusical3 from "../components/assets/vasomusical3.jpeg";
import vasomusical4 from "../components/assets/vasomusical4.jpeg";

import placadental from "../components/assets/placadental.jpeg";
import placadental1 from "../components/assets/placadental1.jpeg";
import placadental2 from "../components/assets/placadental2.jpeg";
import placadental3 from "../components/assets/placadental3.jpeg";
import placadental4 from "../components/assets/placadental4.jpeg";
import placadental5 from "../components/assets/placadental5.jpeg";
import placadental6 from "../components/assets/placadental6.jpeg";  


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

// --------------------------------------------
// LISTA COMPLETA DE PRODUCTOS
// --------------------------------------------

export const mockProducts = [
  {
    id: 1,
    name: "Encendedor Recargable USB con Linterna Negro",
    description: "Encendedor multipropósito recargable con linterna LED, compacto y moderno.",
    longDescription:
      "Este encendedor USB es recargable, con carga rápida USB-C, luz indicadora y linterna LED ideal para camping, emergencias o uso diario.",
    price: "$11.990",
    image: ensendedorusb,
    detailImage: ensendedordetalle,
    tags: ["Recargable", "Portátil", "Linterna LED", "USB-C", "Resistente"],
    stock: 1,
    category: "tecnologia",
  },

  {
    id: 2,
    name: "Grifo con Filtro de Agua",
    description: "Grifo con filtro integrado para agua más limpia y ahorro en tu hogar.",
    longDescription:
      "Este grifo cuenta con un filtro de agua integrado, diseño moderno y fácil instalación para cocina o baño.",
    price: "$12.990",
    image: filtrodeagua,
    detailImage: filtrodeaguadetalle,
    tags: ["Grifo", "Filtro de agua", "Cocina", "Baño", "Ahorro"],
    stock: 6,
    category: "hogar",
  },

  {
    id: 3,
    name: "Soporte Universal para Botella y Celular",
    description:
      "Soporte resistente para botella y celular, ideal para bici, moto o cochecito.",
    longDescription:
      "Fijación giratoria 360°, compartimento seguro para celular y espacio firme para botella.",
    price: "$29.900",
    image: portavaso,
    detailImage: portavasodetalle,
    tags: ["Soporte", "Universal", "Botella", "Celular", "Bici"],
    stock: 3,
    category: "auto",
  },

  {
    id: 4,
    name: "Inflador Digital Portátil",
    description: "Compacto, potente y listo para inflar neumáticos, pelotas y más.",
    longDescription:
      "Batería 4000mAh, 150 PSI máx, pantalla digital, apagado automático y diseño compacto.",
    price: "$55.000",
    image: infladorportatil,
    detailImage: infladorportatildetalle,
    tags: ["Inflador", "Portátil", "Batería", "Digital"],
    stock: 3,
    category: "auto,camping",
  },

  {
    id: 5,
    name: "KIT RESTAURADOR DE FAROS",
    description: "Kit completo para devolver la claridad a los faros opacos o amarillentos.",
    longDescription:
      "Incluye lijas, pasta pulidora, aplicador, cinta de enmascarar y protector UV.",
    price: "$14.990",
    image: restauradorfaros,
    detailImage: restauradorfarosdetalle,
    tags: ["Restaurador", "Pulido", "Auto"],
    stock: 5,
    category: "auto",
  },

  {
    id: 6,
    name: "Lentes Inteligentes con Bluetooth y Audio Integrado",
    description: "Audio, llamadas y estilo en un solo accesorio.",
    longDescription:
      "Bluetooth, control táctil, batería recargable, lentes polarizados UV400.",
    price: "$29.900",
    image: gafasinteligentes,
    detailImage: gafasinteligentesdetalle,
    tags: ["Bluetooth", "Audio", "Estilo", "Tecnología"],
    stock: 3,
    category: "tecnologia",
  },

  {
    id: 7,
    name: "Reproductor Universal para Autos",
    description: "Pantalla táctil 7'' con Bluetooth, USB, SD, radio FM.",
    longDescription:
      "Reproduce MP5/MP4/MP3, entradas USB/SD/AUX, manos libres Bluetooth.",
    price: "$89.990",
    image: multimedia,
    detailImage: multimediadetalle,
    tags: ["Multimedia", "Bluetooth", "Audio", "Auto"],
    stock: 2,
    category: "auto",
  },

  {
    id: 8,
    name: "Mini Motosierra Eléctrica BEKR 24V",
    description: "Potencia portátil para poda y corte de troncos.",
    longDescription:
      "Batería integrada 24V, ligera y portátil, ideal para jardinería y poda.",
    price: "$59.990",
    image: motosierra,
    detailImage: motosierradetalle,
    tags: ["Motosierra", "Eléctrica", "Portátil","herramientas"],
    stock: 2,
    category: "Herramientas",
  },

  {
    id: 9,
    name: "Guantes con Linterna LED Luz Blanca",
    description:
      "Guantes con LED integrados para trabajo nocturno o bricolaje.",
    longDescription:
      "Material cómodo y linterna LED en los dedos.",
    price: "$14.990",
    image: guantesled,
    detailImage: guantesleddetalle,
    tags: ["Guantes", "LED", "Iluminación"],
    stock: 4,
    category: "camping",
  },

  {
    id: 10,
    name: "Pulsera Magnética para Tornillos",
    description:
      "Mantiene tornillos y herramientas pequeñas siempre a mano.",
    longDescription:
      "Imanes potentes integrados, ideal para carpintería y mecánica.",
    price: "$14.990",
    image: pulceramagnetica,
    detailImage: pulceramagneticadetalle,
    tags: ["Magnética", "Herramientas", "DIY"],
    stock: 3,
    category: "hogar",
  },

  {
    id: 11,
    name: "Asiento Elevado para Mascotas – Pet Booster Seat",
    description:
      "Lleva a tu mascota segura, cómoda y cerca tuyo.",
    longDescription:
      "Soporta hasta 12 kg, tela resistente y fácil de limpiar.",
    price: "$34.990",
    image: asientomascotas,
    detailImage: asientomascotasdetalle,
    gallery: [asientomascotasdetalle, asientomascotasdetalle1, asientomascotasdetalle2],
    tags: ["Mascotas", "Seguridad", "Viaje"],
    stock: 1,
    category: "mascotas",
  },

  {
    id: 12,
    name: "Funda Protectora de Auto para Mascota",
    description: "Funda impermeable para proteger tapizados.",
    longDescription:
      "Impermeable, lavable y compatible con la mayoría de vehículos.",
    price: "$24.990",
    image: cubreasiento,
    detailImage: cubreasientodetalle1,
    gallery: [
      cubreasientodetalle1,
      cubreasientodetalle2,
      cubreasientodetalle3,
      cubreasientodetalle4,
      cubreasientodetalle5,
    ],
    tags: ["Impermeable", "Funda", "Mascotas", "Auto"],
    stock: 1,
    category: "mascotas",
  },

  {
    id: 13,
    name: "Reloj Fitness con Monitor de Ritmo Cardíaco IP68",
    description:
      "Smartwatch con pulsómetro, podómetro y monitor de sueño.",
    longDescription:
      "Registra pasos, calorías, ritmo cardíaco y sueño.",
    price: "$14.990",
    image: fitnesswatch,
    detailImage: fitnesswatchdetalle1,
    gallery: [
      fitnesswatchdetalle1,
      fitnesswatchdetalle2,
      fitnesswatchdetalle3,
      fitnesswatchdetalle4,
      fitnesswatchdetalle5,
      fitnesswatchdetalle6,
      fitnesswatchdetalle7,
      fitnesswatchdetalle8,
    ],
    tags: ["Smartwatch", "Cardíaco", "Pasos", "IP68"],
    stock: 1,
    category: "tecnologia",
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
    category: "camping",
  },

  {
   id: 15,
      name: "Placa Dental Para Bruxismo Deroyal",
      description: `Placa dental para bruxismo, diseñada para proteger tus dientes durante la noche. `,
      longDescription: `🦷 Placa Dental DeRoyal: Tu Escudo para un Descanso Placentero 🌙
👨‍⚕️🦷 Diseño Profesional: Desarrollada por dentistas para brindarte seguridad y comodidad durante la noche. 🎚️👄 Adaptación Perfecta: Gracias a su diseño moldeable, se ajusta fácilmente a la forma única de tu boca. 🛡️💤 Protección Nocturna: Crea una barrera que limita el contacto involuntario entre los dientes mientras duermes. ✅👍 Fácil de Usar: Simple y práctica para incorporar a tu rutina de sueño. 🦷🛡️ Previene el Desgaste: Ayuda a evitar el daño dental causado por la fricción leve ocasional. 😌🧠 Alivio del Bruxismo: Contribuye a reducir síntomas como el dolor de cabeza y molestias dentales. 🛌✨ Descanso Placentero: Favorece una experiencia de sueño más estable y relajada. 💰👌 Económica: Una solución accesible para cuidar tu salud dental. 🌿✨ Hipoalergénica: Material seguro y amigable con tu boca.`,
      price: "$14.990",
      image: placadental,
      detailImage: "placadental,placadental1, placadental2, placadental3, placadental4, placadental5, placadental6",
      tags:   ["Placa dental", "Bruxismo", "Protección", "Salud dental", "Descanso"] ,
      category: [ "salud", "hogar" ],
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
       category: ["juegos","regalos"],
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
       category: ["regalos" ,"salud & bienestar"],
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
];
