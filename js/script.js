// Llamado de API Facebook
// window.fbAsyncInit = function() {
//   FB.init({
//       appId            : '256877673892471',
//       autoLogAppEvents : true,
//       xfbml            : true,
//       version          : 'v17.0'
//       });

//       FB.api(
//           '/me',
//           'GET',
//           {"fields": "id,name,picture{url}"},
//           function(response) {
              
//           }
//       );
// };

// Banner para mensajes 

document.addEventListener("DOMContentLoaded", function () {
  const mensajeElement = document.querySelector(".message-text");
  const footerContainer = document.querySelector(".mensajes");

  let messages = [
    //Limite de caracteres por frase 120
    "Agendate con la Cámara de Comercio y consulta los beneficios de estar formalizado en www.camarapamplona.org.co",
    "Recuerda nuestro horario de atención Lunes a Viernes de 8:00am - 12:00pm  y  de 2:00pm - 6:00pm",
    "Nuestros asesores estan aquí para brindarte la información que necesitas",
    "Recuerda nuestros canales de contacto: ccpamplona@camarapamplona.org.co, teléfonos (60)75680993 - 75684696 - 75682047 y WhatsApp: 333 033 3569",
    "La generación de oportunidades en emprendimiento, fortalecimiento y aceleración empresarial de la región, es nuestro compromiso",
    "Recuerda que por nuestros canales virtuales podras realizar cualquier tipo de tramite"
  ];

  const mensajeWidth = mensajeElement.offsetWidth;
  const containerWidth = footerContainer.offsetWidth;

  let currentMessageIndex = 0;

  const updateMessage = () => {
    mensajeElement.textContent = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    
    gsap.set(mensajeElement, { x: containerWidth }); 
    gsap.to(mensajeElement, {
      x: -mensajeWidth, 
      duration: (containerWidth) * 0.03,
      ease: "linear",
      onComplete: updateMessage 
    });
  };

  updateMessage();

});


  

// document.addEventListener("DOMContentLoaded", function() {
//   const obtenerValorButton = document.getElementById("guardar");
//   const mensajeElement = document.querySelector("#texto");
//   const footerContainer = document.querySelector(".mensajes");
//   const texto = document.getElementById("prueba");

//   obtenerValorButton.addEventListener("click", function() {
//     console.log("Botón Guardar clickeado");

//     Recorre los inputs para capturar los valores y actualizar messages
//     const inputElements = document.querySelectorAll("#prueba");
//     inputElements.forEach((input, index) => {
//       const valorIngresado = input.value;
//       messages[index] = valorIngresado;
//     });

//     console.log(messages);
//   });

//   let messages = [];

//   const mensajeWidth = mensajeElement.offsetWidth;
//   const containerWidth = footerContainer.offsetWidth;

//   let currentMessageIndex = 0;

//   const updateMessage = () => {
//     mensajeElement.textContent = messages[currentMessageIndex];
//     currentMessageIndex = (currentMessageIndex + 1) % messages.length;

//     gsap.set(mensajeElement, { x: containerWidth });
//     gsap.to(mensajeElement, {
//       x: -mensajeWidth,
//       duration: containerWidth * 0.02,
//       ease: "linear",
//       onComplete: updateMessage,
//     });
//   };

//   updateMessage();

  
// });

