// Función para capturar datos del formulario de Registro3.js
function capturarDatosRegistro3() {
  const nombreUsuario = document.querySelector("input[placeholder='Ejp: Angelemss']").value;
  const contrasena = document.querySelector("input[placeholder='Ejp: angel2022']").value;
  const confirmaContrasena = document.querySelector("input[placeholder='Ejp: angel2021']").value;
  const mediosContacto = document.querySelector("#nivel").value;
  const terminos = Array.from(document.querySelectorAll("input[name='terminos']")).map(input => input.checked);

  datosFormularios.push({ nombreUsuario, contrasena, confirmaContrasena, mediosContacto, terminos });
}

// Función para mostrar los datos recolectados y guardarlos en JSON
function mostrarDatosRecolectados() {
  const datosJSON = JSON.stringify(datosFormularios, null, 2);
  console.log("Datos recolectados:", datosJSON);

  const datosDiv = document.createElement("div");
  datosDiv.textContent = datosJSON;
  document.body.appendChild(datosDiv);
}

// Capturar datos al presionar "Finalizar"
document.querySelector("#siguiente2").addEventListener("click", function(event) {
  event.preventDefault();
  capturarDatosRegistro3();
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