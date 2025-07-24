// En src/pages/ProductDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Wallet } from '@mercadopago/sdk-react';
import ensendedorusb from "./assets/ensendedorusb.png";
import compresor from "./assets/compresor.png";
import kitsoldador from "./assets/kitsoldador.jpg";
import ensendedordetalle from "./assets/ensendedordetalle.png"; 
import kitsoldadordetalle from "./assets/kitsoldadordetalle.jpg"; 
import kitemergencia from './assets/kitemergencia.jpg'
import taladroinalambrico98v from './assets/taladroinalambrico98v.png'
import taladroinalambrico98vdetallado from './assets/taladroinalambrico98vdetallado.png'
import taladropequeñotasbel from "./assets/taladropequeñotasbel.jpg"; 
import taladropequeñotasbeldetalle from "./assets/taladropequeñotasbeldetalle.jpg"; 
import PowerBank from "./assets/PowerBank.jpg"
import PowerBankdetalle from "./assets/PowerBankdetalle.jpg"
import bolsobanano from "./assets/bolsobanano.png"; 
import bolsobananodetalle from "./assets/bolsobananodetalle.png"; 
import linternaconluzlateral from "./assets/linternaconluzlateral.jpg";
import linternaconluzlateraldetalle from "./assets/linternaconluzlateraldetalle.jpg";
import inversordecorriente from "./assets/inversordecorriente.jpg";
import inversordecorrientedetalle from "./assets/inversordecorrientedetalle.jpg";
import intercomunicadorcasco from "./assets/intercomunicadorcasco.jpg";
import intercomunicadorcascodetalle from "./assets/intercomunicadorcascodetalle.jpg";
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

const ProductDetailPage = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        // Esta es una simulación - en la práctica deberías tener una API real
        const mockProducts = [
           {
                id: 1,
                name: "Encendedor Recargable USB con Linterna Negro",
                description: "El encendedor multipropósito es una innovación de vanguardia que hará que tus momentos sean más prácticos y emocionantes que nunca! Este versátil dispositivo es mucho más que un simple encendedor; es una herramienta multifuncional que combina elegancia y practicidad.",
                longDescription: "Este encendedor USB es recargable y tiene un diseño moderno y compacto. Perfecto para llevar contigo a todas partes. Con carga rápida USB-C y luz indicadora. Disponible en varios colores. Además, incluye una potente linterna LED que lo hace ideal para acampadas, emergencias o uso diario.",
                price: "$1000",
                image: ensendedorusb,
                detailImage: ensendedordetalle,
                tags: ["Recargable", "Portátil", "Linterna LED", "USB-C", "Resistente"]
              },
              {
                id: 2,
                name: "Kit de Soldador Eléctrico con Herramientas, Puntas y Multímetro",
                description: "Descubre la solución perfecta para tus proyectos de soldadura con el soldador eléctrico de 60 W, diseñado específicamente para ofrecer un rendimiento excepcional y una experiencia cómoda. Su diseño tipo lápiz facilita su manejo, permitiendo un acceso sencillo a las áreas más difíciles, mientras que su punta de acero inoxidable de 4 mm asegura una durabilidad y resistencia excepcionales.",
                longDescription: "Este kit profesional incluye todo lo que necesitas para tus proyectos de electrónica y soldadura. El soldador de 60W tiene un calentamiento rápido (30 segundos) y control de temperatura ajustable. El multímetro digital mide voltaje, corriente, resistencia y continuidad. Además, el kit incluye 5 puntas intercambiables para diferentes tipos de trabajos y un práctico soporte con esponja limpiadora.",
                price: "$39.900",
                image: kitsoldador,
                detailImage: kitsoldadordetalle,
                tags: ["Kit profesional", "60W", "Multímetro", "5 puntas", "Herramientas"]
              },
              {
                id: 3,
                name: "Taladro Portátil Recargable Inalámbrico 98V 2 Baterías y Herramientas",
                description: "El Taladro Azul Doble Batería de 98V Con Herramientas Tasbel es una herramienta profesional de la marca Tasbel. Con una velocidad de 0-500/min y 0-1400/min, ofrece un torque de 40 N.m y cuenta con una potencia de 98v. Viene con un cargador y dos baterías, además de incluir herramientas adicionales para un uso versátil y eficiente, y una hermosa bolsa de transporte de la marca TASBEL.Es una herramienta versátil y muy útil en cada tarea, desde cosas simples como trabajos en casa, hasta trabajos de largas jornadas en tus proyectos de construcción.Atornilla y desatornilla con facilidad. Sin esfuerzo y tiempo record.Sabemos lo difícil y cansado que es atornillar o destornillar, y más cuando lo  haces por mucho tiempo, por ello este taladro inalámbrico te encantara, será tu amigo en cada tarea de esta forma podrás terminar tus trabajos rápidamente.",
                price: "$89.990",
                image: taladroinalambrico98v,
                detailImage: taladroinalambrico98vdetallado,
                tags: ["98V", "Doble batería", "40 N.m", "Herramientas", "Tasbel"]
              },
              {
                id: 4,
                name: "Taladro Pequeño Tasbel con 2 Baterías de 48V.",
                description: "Taladro Inalámbrico Tasbel 48V con 2 Baterías – Compacto y PotenteEste taladro pequeño de la marca Tasbel es la herramienta ideal para trabajos domésticos y proyectos de bricolaje. A pesar de su tamaño compacto, ofrece un rendimiento potente gracias a sus dos baterías recargables de 48V, que garantizan una larga duración y libertad de movimiento sin cables.Características destacadas:Motor potente de 48V, ideal para perforar madera, metal, plástico y tareas de atornillado.Diseño ergonómico y liviano, fácil de manejar incluso en espacios reducidos.2 baterías de litio recargables, para trabajar sin interrupciones.Velocidad variable y control de torque ajustable para mayor precisión.Portabrocas de cambio rápido sin necesidad de herramientas.Perfecto tanto para aficionados como para profesionales que buscan una herramienta práctica, duradera y eficiente..",
                price: "$39.990",
                image: taladropequeñotasbel,
                detailImage: taladropequeñotasbeldetalle,
                tags: ["48V", "Compacto", "2 baterías", "Velocidad variable", "Tasbel"]
              },
              {
                id: 5,
                name: "kit de emergencia con linterna 50w",
                description: "Fácil de trasladar y guardar y podes cargar tu celular!",
                longDescription: "La linterna doméstica con kit de emergencia es la solución ideal para quienes buscan una fuente de luz confiable tanto en interiores como en exteriores. Su diseño compacto de 19,6 cm la hace fácil de manejar y almacenar, mientras que su potente luz LED ofrece tres modos de iluminación para adaptarse a diferentes necesidades y situaciones.Este modelo se alimenta mediante una pila solar, lo que garantiza un uso sostenible y eficiente. Además, es recargable a través de USB, lo que permite mantenerla lista para cualquier eventualidad, con una duración máxima de hasta 10 horas de uso continuo.La linterna es perfecta para actividades al aire libre, como camping o excursiones, así como para emergencias en el hogar. Su resistencia a condiciones adversas la convierte en un accesorio indispensable para quienes valoran la seguridad y la preparación ante imprevistos KIT DE EMERGENCIA INCLUYE: – 2 FOCOS – PANEL SOLAR – 1 LINTERNA RECUERDA QUE TAMBIEN SIRVE COMO POWERBANK EN CASO DE EMERGENCIA",
                price: "$30.000",
                image: kitemergencia,
                tags: ["Emergencia", "Linterna 50W", "Powerbank", "Solar", "USB"]
              },
              {
                id: 6,
                name: "Power Bank 20.000 Mah 3 Entradas con Linterna",
                description: "Power Bank 20.000 Mah 3 Entradas con Linterna.",
                longDescription: "El Power Bank 20.000 Mah con 3 Entradas y Linterna es la solución ideal para mantener tus dispositivos móviles siempre cargados y listos para usar. Con su capacidad de 20.000 mAh, este cargador portátil asegura múltiples cargas para tu celular, permitiéndote disfrutar de tus actividades sin preocuparte por la batería. Su diseño compacto y ligero lo hace perfecto para llevar en el bolso o mochila, ideal para viajes, excursiones o el uso diario.Este cargador es compatible con todas las marcasy modelos de dispositivos móviles, gracias a sus conectores USB. Además, cuenta con tres entradas que permiten cargar varios dispositivos simultáneamente, lo que lo convierte en un accesorio versátil y práctico. La linterna incorporada es un añadido útil para situaciones de emergencia o cuando necesitas iluminación adicional.La eficiencia energética de este Power Bank garantiza un uso prolongado y seguro, brindando tranquilidad en cada carga. Su voltaje de entrada y salida está diseñado para optimizar la carga de tus dispositivos, asegurando que reciban la energía necesaria de manera efectiva. Con este cargador, estarás siempre preparado para cualquier eventualidad, manteniendo tus dispositivos conectados y funcionando.Colores Disponibles:  Amarillo, Blanco, Negro y Azul.",
                price: "$27.990",
                image: PowerBank,
                detailImage: PowerBankdetalle,
                tags: ["20.000 mAh", "3 entradas", "Linterna", "Portátil", "USB"]
              },
              {
                id: 7,
                name: "Bolso Mochila Bandolera Cruzada Antirrobo en 4 Colores",
                description: "Bloqueo antirrobo: con función antirrobo, es práctico y conveniente. Protección de privacidad con bloqueo de contraseña, utiliza una contraseña de tres dígitos para bloquear el control deslizante y evitar que la bolsa del pecho se abra para robar artículos.",
                longDescription: "Cierre antirrobo: el compartimento principal de la mochila antirrobo tiene una cremallera de diseño con candado, que puede cerrar fácilmente tus objetos de valor. Esta mochila de negocios cuenta con un bolsillo de seguridad oculto en la parte trasera para evitar que te roben tus pertenencias. El diseño reflectante de la superficie de la mochila te recuerda que estás más seguro por la noche. Múltiples áreas de organización: la bandolera para hombre tiene un compartimento principal para ropa, libros, lonchera y otros artículos de uso diario. Múltiples bolsillos funcionales para monedas, teléfono móvil, llaves, bolígrafos y otros objetos pequeños. Los bolsillos laterales proporcionan un acceso rápido a tus artículos de uso diario. Puerto de carga USB: esta bolsa de hombro para hombre y mujer tiene un puerto de carga USB (batería externa no incluida), que permite cargar tus dispositivos electrónicos conectando tu propia batería externa. Puedes usarla para actividades al aire libre y cargarla diariamente con las manos libres en cualquier momento y en cualquier lugar. Material de alta calidad: nuestra bolsa de hombro está hecha de tela Oxford de alta densidad impermeable y resistente al desgaste. Sistema transpirable de carga y descompresión, disipación de calor, ventilación, absorción de impactos. Más comodidad en la espalda y menos tensión en los hombros. Proporciona suficiente comodidad de amortiguación para la espalda. Versátil: elegante, neutral y eficaz. Se puede utilizar como bandolera, bandolera, mochila casual, bandolera, bolsa de viaje, para uso diario en la escuela, acampada, senderismo, vacaciones, senderismo, montañismo, escapada de fin de semana, escapada de fin de semana, ciclismo, viaje de una noche.  Especificaciones: tamaño: 32 x 16 x 6 cm Material: Película textil Oxford Color disponibles:  Negro, Azul con cobre, Negro con cobre y Gris con Cobre",
                price: "$59.990",
                image: bolsobanano,
                detailImage: bolsobananodetalle,
                tags: ["Antirrobo", "USB", "Impermeable", "4 colores", "Organización"]
              },
              {
                id: 8,
                name: "Linterna con Luz Frontal Blanca y Lateral Roja Solar y Recargable",
                description: "Esta linterna multifuncional es ideal para emergencias, camping o uso diario en el hogar. Tiene una potente luz LED blanca con 5 modos de iluminación para adaptarse a distintas necesidades.",
                longDescription: "La Linterna con Luz Frontal Blanca y Lateral Roja Solar y Recargable es la compañera ideal para tus aventuras al aire libre y actividades en casa. Diseñada para ofrecer una iluminación versátil, cuenta con dos modos de luz que se adaptan a tus necesidades, ya sea mientras acampas, cazas o realizas senderismo. Su diseño compacto de 20 cm de largo facilita su transporte y la hace perfecta para llevar en tu mochila. Esta linterna es alimentada por energía solar y corriente eléctrica, lo que garantiza que siempre tendrás luz donde la necesites. La batería de litio ion asegura un rendimiento óptimo con una duración de hasta 6 horas, mientras que su resistencia al polvo la convierte en una herramienta confiable en diversas condiciones. Además, incluye una conveniente carga USB, haciendo que recargarla sea rápido y sencillo. La luz lateral roja es una característica útil para situaciones que requieren un enfoque más suave o para señalización. Su construcción asegura durabilidad, brindando la tranquilidad necesaria en cualquier excursión o en el hogar. Eleva tu experiencia de iluminación con esta linterna multifuncional, diseñada pensando en los amantes de las actividades al aire libre y el confort doméstico. Linterna con luz blanca frontal y luz roja lateral, en colores azul y amarilla.",
                price: "$39.990",
                image: linternaconluzlateral,
                detailImage:linternaconluzlateraldetalle,
                tags: ["Linterna", "Recargable", "Camping", "Senderismo", "Emergencia"]
              },
              {
                id: 9,
                name: "Inversor Convertidor de Corriente 200W para Auto 12V 220V",
                description: "El inversor convertidor de corriente YQ-2000WD de 200W transforma la corriente de 12V a 220V.",
                longDescription: "El inversor convertidor de corriente YQ-2000WD es la solución perfecta para aquellos que necesitan potencia en movimiento. Con una capacidad de 200W, este equipo permite transformar la corriente de 12V a 220V, facilitando el uso de dispositivos eléctricos en el automóvil y ofreciendo una versatilidad impresionante para tus viajes. Ideal para camping, viajes por carretera o incluso situaciones de emergencia, este inversor compacto garantiza un voltaje de salida estable entre 5V y 220V. Además, cuenta con una salida USB, lo que lo convierte en un aliado excepcional para cargar tus dispositivos móviles, como teléfonos, tabletas o cualquier equipo con conexión USB. El diseño del YQ-2000WD incluye un botón de encendido/apagado y un indicador LED que ayuda a monitorear el funcionamiento del dispositivo. Esto asegura que tu experiencia sea práctica y segura, brindándote la tranquilidad necesaria para utilizar el producto sin complicaciones. Este inversor es la herramienta que necesitas para potenciar tu día a día y mantenerte conectado, sin importar el lugar donde te encuentres. Su fácil uso y funcionalidad lo hacen esencial para quienes se aventuran en la carretera o quienes simplemente desean disfrutar de la comodidad de la energía eléctrica en cualquier parte.",
                price: "$129.990",
                image: inversordecorriente,
                detailImage: inversordecorrientedetalle,
                tags: ["220v", "Inversor", "Power Bank", "Camping"]
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
                longDescription: "Podes disfrutarlo exclusivamente (actualmente 3.125) sin compartirlo con otros! Alta eficiencia: el bajo consumo reduce considerablemente sus costos, ¡así que no tiene que preocuparse por las facturas de electricidad! Debido a los diferentes lotes, puede haber diferencias en la apariencia, el color y el texto impreso del producto, lo que no afectará al uso.Color: color aleatorio (el color es aleatorio, no se aceptan especificaciones)Material: PCB.",
                price: "$69.990",
                image: nerdminer1,
                detailImage: nerdminer3detalle,
                tags: ["Opera a una tasa de 55-60 Kh/s.", "pantalla de 2.8 pulgadas", "Eficiencia energética", "Material de fabricación PCB", "Modo de operación exclusivo: Utiliza un modo de lotería BTC"]
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
        ]; // Tu lista completa de productos
       const foundProduct = mockProducts.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
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
    <Typography variant="subtitle1" color="text.secondary">
      {product.price}
    </Typography>
    <Box
      component="img"
      src={product.detailImage}
      alt={product.name}
      sx={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: '20px',
        borderRadius: 2,
        boxShadow: 3,
        maxHeight: 400
      }}
    />

    <Typography variant="body1" paragraph>
      {product.longDescription || product.description}
    </Typography>
     {/* BOTÓN DE MERCADO PAGO */}
    <Box sx={{ mt: 3 }}>
      <Wallet
        initialization={{ preferenceId: "TU_PREFERENCE_ID" }} // Reemplaza por tu preferenceId real
        customization={{ texts: { valueProp: 'smart_option' } }}
      />
    </Box>
    </Box>
  )
};

export default ProductDetailPage;