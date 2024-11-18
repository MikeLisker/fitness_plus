document.addEventListener("DOMContentLoaded", () => {
    const sectionHide = document.getElementById('section-hide');
    const showSection = document.getElementById('show-section');
    const closeButtons = document.getElementById('closeOverlay');

    showSection.addEventListener('click', () => {
        sectionHide.style.display = "flex";
    });

    closeButtons.addEventListener('click', () => {
        sectionHide.style.display = "none";
    });

    // Mostrar el formulario al hacer clic en "Nuevo Registro"
const nuevoRegistroBtn = document.getElementById('nuevo-registro-btn');
const formRegistro = document.getElementById('form-registro');
const cancelarRegistroBtn = document.getElementById('cancelar-registro');

nuevoRegistroBtn.addEventListener('click', () => {
  formRegistro.style.display = 'block';
});

// Ocultar el formulario al hacer clic en "Cancelar"
cancelarRegistroBtn.addEventListener('click', () => {
  formRegistro.style.display = 'none';
});

// Manejar el envío del formulario
const registroForm = document.getElementById('nuevo-registro-form');
const tablaCuerpo = document.querySelector('#registro-tabla tbody');

registroForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener los datos del formulario
  const peso = document.getElementById('peso').value;
  const grasa = document.getElementById('grasa').value;
  const muscular = document.getElementById('muscular').value;

  // Crear una nueva fila en la tabla
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${peso}</td>
    <td>${grasa}</td>
    <td>${muscular}</td>
  `;

  // Añadir la fila a la tabla
  tablaCuerpo.appendChild(fila);

  // Limpiar el formulario
  registroForm.reset();

  // Ocultar el formulario
  formRegistro.style.display = 'none';
});
});