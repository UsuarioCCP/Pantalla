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
    "<b>Agendate</b> con la Cámara de Comercio y consulta mas sobre los beneficios de ser un empresario formalmente constituido ingresando a www.camarapamplona.org.co",
    "Recuerda nuestro horario de atención <strong>Lunes a Viernes</strong> de <strong>8:00am - 12:00pm  y  de 2:00pm - 6:00pm</strong>",
    "Nuestro equipo de expertos está aquí para brindarte asesoramiento personalizado y la información que necesitas",
    "Recuerda los canalaes para estar en comunicaciçon con nosotros email: ccpamplona@camarapamplona.org.co  telefonos (60)75680993-(60)75684696 Telefax:(60)75682047 y nuestro whatsapp: 333 0333569",
    "La Cámara de Comercio de Pamplona esta comprometida a impulsar la generación de oportunidades en emprendimiento, fortalecimiento y aceleración empresarial de la región.",
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

