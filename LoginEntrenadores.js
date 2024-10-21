// Función para capturar datos del formulario de LoginEntrenadores.js
function capturarDatosLoginEntrenadores() {
    const tipoId = document.querySelector("#tipo_identi_login").value;
    const id = document.querySelector("#id_login").value;
    const contrasena = document.querySelector("#contrasena_login").value;
  
    datosFormularios.push({ tipoId, id, contrasena });
  }
  
  // Capturar datos al presionar "Iniciar Sesión"
  document.querySelector("#boton_ingresar").addEventListener("click", function(event) {
    event.preventDefault();
    capturarDatosLoginEntrenadores();
  });

  // Función para mostrar los datos recolectados y guardarlos en JSON
function mostrarDatosRecolectados() {
    const datosJSON = JSON.stringify(datosFormularios, null, 2);
    console.log("Datos recolectados:", datosJSON);
  
    const datosDiv = document.createElement("div");
    datosDiv.textContent = datosJSON;
    document.body.appendChild(datosDiv);
  }