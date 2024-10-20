// Ejecutar todo el código solo cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // 1. Volver a la página anterior
  const backButton = document.querySelector('#backButton');
  if (backButton) {
      backButton.addEventListener('click', () => {
          history.back();
      });
  }

  // 2. Cambiar estado de botones (solo un botón activo a la vez)
  const stateButtons = document.querySelectorAll('.fecha-card');
  stateButtons.forEach(button => {
      button.addEventListener('click', () => {
          stateButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
      });
  });

  // 3. Mostrar mensaje sobrepuesto al hacer clic en un botón y ocultarlo después de 3 segundos
  // Seleccionar todos los botones de reserva
  const reserveButtons = document.querySelectorAll('.showOverlay');
  // Seleccionar todos los mensajes sobrepuestos
  const overlayMessages = document.getElementById('overlayElement');
  // Seleccionar los botones de cerrar
  const closeButtons = document.getElementById('closeOverlay');

  const sectionHide = document.getElementById('section-hide');

  const showSection = document.getElementById('show-section');
  
  showSection.addEventListener('click', () => {  
    sectionHide.style.display = "flex";
    });
  
  // Añadir eventos a los botones de reserva
  reserveButtons.forEach(button => {
    button.addEventListener('click', () => {
      overlayMessages.style.display = "flex"; // Mostrar mensaje
    });
  });

  closeButtons.addEventListener('click', () => {
    overlayMessages.style.display = 'none';
    sectionHide.style.display = "none";
  });

  


  
});