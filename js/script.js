
// document.addEventListener("DOMContentLoaded", function () {
//   const mensajeElement = document.querySelector(".message-text");
//   const footerContainer = document.querySelector(".mensajes");

//   let messages = [
//     //Limite de caracteres por frase 120
//     "Agendate con la Cámara de Comercio y consulta los beneficios de estar formalizado en www.camarapamplona.org.co",
//     "Recuerda nuestro horario de atención     Lunes a Viernes    de 8:00am - 12:00pm    y    de 2:00pm - 6:00pm",
//     "Nuestros asesores estan aquí para brindarte la información que necesitas",
//     "La generación de oportunidades de emprendimiento, fortalecimiento y aceleración empresarial de la región, son nuestro compromiso",
//     "Siguenos en nuestras redes sociales Facebook, Instagram y Twitter como # Camara de Comercio de Pamplona",
//     "Prestador de Servicios Turisticios-Alojamientos, no olvides alimentar día a día tu Tarjeta de Registro de Alojamiento",
//     "Recuerda nuestros canales de contacto: ccpamplona@camarapamplona.org.co, teléfonos (60)75680993 - 75684696 - 75682047 y WhatsApp: 333 033 3569",
//     "Recuerda que el término de ley para atender tus tramites es de QUINCE (15) DÍAS HÁBILES",
//     "No olvides calificar el servicio prestado por nuestro personal, pregunta con nuestras Asesoras como hacerlo",
//     "Además de tu registro en Cámara de Comercio, adquieres responsabilidades tributarias en la DIAN y en la Alcaldía Municipal  (Impuesto de Industria y Comercio).",
//     "Si tienes actividades de alto impacto, debes gestionar los permisos necesarios ante las autoridades locales (Planeación municipal, sayco y acinpro, bomberos, entre otros).",
//     "Recuerda que puedes realizar tu matrícula mercantil mediante la Ventanilla Unica Empresarial VUE, aplica solo para Pamplona."
//   ];

//   const mensajeWidth = mensajeElement.offsetWidth;
//   const containerWidth = footerContainer.offsetWidth;

//   let currentMessageIndex = 0;

//   const updateMessage = () => {
//     mensajeElement.textContent = messages[currentMessageIndex];
//     currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    
//     gsap.set(mensajeElement, { x: containerWidth }); 
//     gsap.to(mensajeElement, {
//       x: -mensajeWidth, 
//       duration: (containerWidth) * 0.03,
//       ease: "linear",
//       onComplete: updateMessage 
//     });
//   };

//   updateMessage();

// });

