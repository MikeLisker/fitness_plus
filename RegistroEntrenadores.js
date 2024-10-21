// Función para capturar datos del formulario de RegistroEntrenadores.js
function capturarDatosRegistroEntrenadores() {
    const nombre = document.querySelector("input[placeholder='Ejp: Sofia Maria Garzon Manrique']").value;
    const correo = document.querySelector("input[placeholder='Ejp: wawawahhhhangel@gmail.com']").value;
    const identificacion = document.querySelector("input[placeholder='Ejp: 10203123829230']").value;
    const universidad = document.querySelector("#universidad").value;
    const sede = document.querySelector("#sede").value;
    const carrera = document.querySelector("input[placeholder='Ejp: Ingenieria multimedia']").value;
    const tiempoExp = document.querySelector("#tiempo_exp").value;
    const areasExp = document.querySelector("#areas_exp").value;
    const certificaciones = document.querySelector("input[placeholder='Ejp: Ninguna']").value;
    const descripcionExp = document.querySelector("input[placeholder='Ejp: Estuve en mi gimnasio anterior 3 años entrenando fuerza, resistencia y flexibilidad.']").value;
    const terminos = Array.from(document.querySelectorAll("input[name='terminos']")).map(input => input.checked);
  
    datosFormularios.push({ nombre, correo, identificacion, universidad, sede, carrera, tiempoExp, areasExp, certificaciones, descripcionExp, terminos });
  }
  
  // Capturar datos al presionar "Enviar Solicitud"
  document.querySelector("#siguiente2").addEventListener("click", function(event) {
    event.preventDefault();
    capturarDatosRegistroEntrenadores();
    mostrarDatosRecolectados();
  });

  // Función para mostrar los datos recolectados y guardarlos en JSON
function mostrarDatosRecolectados() {
    const datosJSON = JSON.stringify(datosFormularios, null, 2);
    console.log("Datos recolectados:", datosJSON);
  
    const datosDiv = document.createElement("div");
    datosDiv.textContent = datosJSON;
    document.body.appendChild(datosDiv);
  }