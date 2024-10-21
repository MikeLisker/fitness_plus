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

  // Cargar JSON y agregar clases dinámicamente
  document.addEventListener("DOMContentLoaded", () => {
    fetch("clases.json")
      .then((response) => response.json())
      .then((data) => {
        const clases = data.clases;
        mostrarClases(clases);
        gestionarReservas(clases);
      })
      .catch((error) => console.error("Error al cargar JSON:", error));
  });

  function mostrarClases(clases) {
    const listaClases = document.getElementById("listaClases");

    clases.forEach((clase) => {
      const claseCard = document.createElement("div");
      claseCard.classList.add("tu-clase-card");

      claseCard.innerHTML = `
        <div class="clase-info">
          <h3>${clase.nombre}</h3>
          <p>${clase.instructor}</p>
        </div>
        <div class="clase-details">
          <span class="clase-date">${clase.fecha}</span>
          <span class="clase-time">${clase.hora}</span>
        </div>
      `;
      listaClases.appendChild(claseCard);
    });
  }

  function gestionarReservas(clases) {
    const botonesReservar = document.querySelectorAll(".showOverlay");
    const overlay = document.getElementById("overlayElement");
    const closeOverlay = document.getElementById("closeOverlay");

    botonesReservar.forEach((boton, index) => {
      boton.addEventListener("click", () => {
        mostrarMensajeReserva(clases[index]);
      });
    });

    closeOverlay.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  }

  function mostrarMensajeReserva(clase) {
    const overlay = document.getElementById("overlayElement");
    overlay.style.display = "flex";

    // Agregar clase reservada a "Tus Clases"
    const listaClases = document.getElementById("listaClases");
    const claseCard = document.createElement("div");
    claseCard.classList.add("tu-clase-card");

    claseCard.innerHTML = `
      <div class="clase-info">
        <h3>${clase.nombre}</h3>
        <p>${clase.instructor}</p>
      </div>
      <div class="clase-details">
        <span class="clase-date">${clase.fecha}</span>
        <span class="clase-time">${clase.hora}</span>
      </div>
    `;
    listaClases.appendChild(claseCard);
  }

});