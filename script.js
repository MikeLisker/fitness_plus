// Selecciona los elementos por su ID
const showOverlayButton = document.getElementById("showOverlay");
const overlayElement = document.getElementById("overlayElement");
const closeOverlayButton = document.getElementById("closeOverlay");

// Mostrar el overlay al hacer clic en el botón "Mostrar Mensaje"
// Asigna un evento 'click' a cada botón que muestra el overlay
showOverlayButton.addEventListener("click", () => {
    overlayElement.style.display = "flex"; // Muestra el overlay
  });

// Ocultar el overlay al hacer clic en el botón "Cerrar"
closeOverlayButton.addEventListener("click", () => {
  overlayElement.style.display = "none"; // Oculta el overlay
});