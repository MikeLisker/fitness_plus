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

  const fechaCards = document.querySelectorAll('.fecha-card');
  const clasesDisponibles = document.querySelector('.clases-disponibles');

    // Clases disponibles por día (simulación)
    const clasesPorDia = {
        '2': [
            { hora: '7:00 a.m', nombre: 'Cycling', entrenador: 'Néstor Alfaro' },
            { hora: '9:00 a.m', nombre: 'Boxeo', entrenador: 'Diana Cadavid' },
            { hora: '11:00 a.m', nombre: 'Funcional', entrenador: 'Pibe González' }
        ],
        '3': [
            { hora: '7:00 a.m', nombre: 'Boxeo', entrenador: 'Diana Cadavid' },
            { hora: '9:00 a.m', nombre: 'Cycling', entrenador: 'Néstor Alfaro ' },
            { hora: '11:00 a.m', nombre: 'Funcional', entrenador: 'Pibe González' }
        ],
        '4': [
            { hora: '7:00 a.m', nombre: 'Boxeo', entrenador: 'Diana Cadavid' },
            { hora: '9:00 a.m', nombre: 'Funcional', entrenador: 'Pibe González' },
            { hora: '11:00 a.m', nombre: 'Cycling', entrenador: 'Néstor Alfaro ' }
        ],
        '5': [
            { hora: '7:00 a.m', nombre: 'Funcional', entrenador: 'Pibe González' },
            { hora: '9:00 a.m', nombre: 'Cycling', entrenador: 'Néstor Alfaro ' },
            { hora: '11:00 a.m', nombre: 'Boxeo', entrenador: 'Diana Cadavid  ' }
        ],
        '6': [
            { hora: '7:00 a.m', nombre: 'Yoga', entrenador: 'Carla Pérez' },
            { hora: '9:00 a.m', nombre: 'Cycling', entrenador: 'Néstor Alfaro ' },
            { hora: '11:00 a.m', nombre: 'Funcional', entrenador: 'Pibe González' }
        ],
        '7': [
            { hora: '8:00 a.m', nombre: 'Cycling', entrenador: 'Néstor Alfaro ' },
            { hora: '10:00 a.m', nombre: 'Spinning', entrenador: 'Juan Mendoza' }
        ],
        '8': []
    };

    // Función para actualizar las clases disponibles según el día seleccionado
    function actualizarClasesDisponibles(dia) {
      // Limpiar las clases disponibles actuales
      clasesDisponibles.innerHTML = '';

      // Obtener las clases para el día seleccionado
      const clases = clasesPorDia[dia] || [];

      // Mostrar las clases disponibles en la sección
      if (clases.length > 0) {
          clases.forEach(clase => {
              const claseCard = document.createElement('div');
              claseCard.classList.add('clase-card');

              claseCard.innerHTML = `
                  <div class="clase-hora">${clase.hora}</div>
                  <div class="clase-info">
                      <h3>${clase.nombre}</h3>
                      <p>${clase.entrenador}</p>
                  </div>
                  <div class="boton-reservar">
                      <button class="showOverlay">Reservar clase</button>
                  </div>
              `;

              clasesDisponibles.appendChild(claseCard);
          });
      } else {
          clasesDisponibles.innerHTML = '<p>No hay clases disponibles para este día.</p>';
      }
  }

  // Asignar evento click a cada tarjeta de fecha
  fechaCards.forEach(card => {
      card.addEventListener('click', () => {
          // Remover la clase activa de todas las tarjetas
          fechaCards.forEach(card => card.classList.remove('active'));

          // Agregar la clase activa a la tarjeta seleccionada
          card.classList.add('active');

          // Actualizar las clases disponibles según el día seleccionado
          const diaSeleccionado = card.querySelector('.dia-numero').textContent;
          actualizarClasesDisponibles(diaSeleccionado);
      });
  });

  // Inicializar con las clases del día seleccionado por defecto (Lunes)
  actualizarClasesDisponibles('2');
});