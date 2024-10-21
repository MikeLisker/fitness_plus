// Crear un arreglo para almacenar los datos de los formularios
const datosFormularios = [];

// Función para capturar datos del formulario de Registro.js
function capturarDatosRegistro() {
  const nombres = document.querySelector("input[placeholder='Ejp: Juan Andres']").value;
  const apellidos = document.querySelector("input[placeholder='Ejp: Garzon Manrique']").value;
  const dia = document.querySelector("#fecha_nacimiento_dia").value;
  const mes = document.querySelector("#mes").value;
  const anio = document.querySelector("#anio").value;
  const genero = document.querySelector("#genero").value;
  const correo = document.querySelector("input[name='correo']").value;
  const direccion = document.querySelector("input[name='direccion']").value;
  const tipoDoc = document.querySelector("#tipo_doc").value;
  const numeroDoc = document.querySelector("input[name='numero_doc']").value;
  const telefono = document.querySelector("input[name='telefono']").value;

  datosFormularios.push({ nombres, apellidos, fechaNacimiento: `${dia}/${mes}/${anio}`, genero, correo, direccion, tipoDoc, numeroDoc, telefono });
}

// Capturar datos al presionar "Siguiente"
document.querySelector("#siguiente").addEventListener("click", function(event) {
  event.preventDefault();
  capturarDatosRegistro();
  window.location.href = "Registro2.html";
});

// Función para mostrar los datos recolectados y guardarlos en JSON
function mostrarDatosRecolectados() {
    const datosJSON = JSON.stringify(datosFormularios, null, 2);
    console.log("Datos recolectados:", datosJSON);
  
    const datosDiv = document.createElement("div");
    datosDiv.textContent = datosJSON;
    document.body.appendChild(datosDiv);
  }