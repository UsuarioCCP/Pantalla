// document.addEventListener("DOMContentLoaded", function() {
//     const agregarButton = document.querySelector("#agregar");
//     const guardarButton = document.querySelector("#guardar");
//     const messageList = document.querySelector("#message-list");
//     const arrayTextarea = document.querySelector("#array");
//     const mensajeElement = document.querySelector(".message-text");
//     const footerContainer = document.querySelector(".mensajes");
    
//         let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
    
//     mensajes.forEach(function(mensaje) {
//       agregarInput(mensaje);
//     });
  
//     agregarButton.addEventListener("click", function() {
//       agregarInput();
//     });
  
//     guardarButton.addEventListener("click", function() {
//       actualizarMensajes();
//       actualizarArrayTextarea();
//     });
  
//     function agregarInput(valor = "") {
//       const newIndex = messageList.childElementCount / 3;
//       const newLabel = document.createElement("label");
//       newLabel.textContent = `Mensaje ${newIndex + 1}:`;
//       messageList.appendChild(newLabel);
  
//       const newInput = document.createElement("input");
//       newInput.type = "text";
//       newInput.classList.add("texto-input");
//       newInput.value = valor;
//       messageList.appendChild(newInput);
  
//       const deleteButton = document.createElement("button");
//       deleteButton.textContent = "Eliminar";
//       deleteButton.addEventListener("click", function() {
//         messageList.removeChild(newLabel);
//         messageList.removeChild(newInput);
//         messageList.removeChild(deleteButton);
//         actualizarMensajes();
//         actualizarArrayTextarea();
//       });
//       messageList.appendChild(deleteButton);
//     }
  
//     function actualizarMensajes() {
//       const textoInputs = document.querySelectorAll(".texto-input");
//       mensajes = [];
      
//       textoInputs.forEach(function(input) {
//         mensajes.push(input.value);
//       });
  
//       localStorage.setItem("mensajes", JSON.stringify(mensajes));
//     }
  
//     function actualizarArrayTextarea() {
//       arrayTextarea.value = mensajes.map((mensaje, index) => `${index + 1}: ${mensaje}`).join("\n");
//     }
  
//     updateMessage(mensajeElement, footerContainer);

//   });
  
// segundo intento
//   document.addEventListener("DOMContentLoaded", function() {
//     const agregarButton = document.querySelector("#agregar");
//     const guardarButton = document.querySelector("#guardar");
//     const messageList = document.querySelector("#message-list");
//     const arrayTextarea = document.querySelector("#array");
//     const mensajeElement = document.querySelector(".message-text");
//     const footerContainer = document.querySelector(".mensajes");

//     let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
    

//     mensajes.forEach(function(mensaje) {
//       agregarInput(mensaje);
//     });

//     agregarButton.addEventListener("click", function() {
//       agregarInput();
//     });

//     guardarButton.addEventListener("click", function() {
//       actualizarMensajes();
//       actualizarArrayTextarea();

//       if (mensajes.length > 0) {
//         messages.push(mensajes[0]);
//         localStorage.setItem("messages", JSON.stringify(messages));
//       }
//     });

//     function agregarInput(valor = "") {
//       const newIndex = messageList.childElementCount / 3;
//       const newLabel = document.createElement("label");
//       newLabel.textContent = `Mensaje ${newIndex + 1}:`;
//       messageList.appendChild(newLabel);
  
//       const newInput = document.createElement("input");
//       newInput.type = "text";
//       newInput.classList.add("texto-input");
//       newInput.value = valor;
//       messageList.appendChild(newInput);
  
//       const deleteButton = document.createElement("button");
//       deleteButton.textContent = "Eliminar";
//       deleteButton.addEventListener("click", function() {
//         messageList.removeChild(newLabel);
//         messageList.removeChild(newInput);
//         messageList.removeChild(deleteButton);
//         actualizarMensajes();
//         actualizarArrayTextarea();
//       });
//       messageList.appendChild(deleteButton);
//     }

//     function actualizarMensajes() {
//       const textoInputs = document.querySelectorAll(".texto-input");
//       mensajes = [];
      
//       textoInputs.forEach(function(input) {
//         mensajes.push(input.value);
//       });
  
//       localStorage.setItem("mensajes", JSON.stringify(mensajes));
//     }

//     function actualizarArrayTextarea() {
//       arrayTextarea.value = mensajes.map((mensaje, index) => `${index + 1}: ${mensaje}`).join("\n");
//     }
// });
