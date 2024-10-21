// Función para capturar datos del formulario de Registro2.js
function capturarDatosRegistro2() {
    const objetivo = document.querySelector("#objetivo").value;
    const nivel = document.querySelector("#nivel").value;
    const condicionesMedicas = document.querySelector("input[placeholder='Ejp: hernesto.2011@gmail.com']").value;
    const horario = document.querySelector("#horario").value;
    const peso = document.querySelector("#num_peso").value;
    const tipoPeso = document.querySelector("#tipo_peso").value;
    const altura = document.querySelector("#num_peso").value;
    const tipoAltura = document.querySelector("#tipo_peso").value;
  
    datosFormularios.push({ objetivo, nivel, condicionesMedicas, horario, peso: `${peso} ${tipoPeso}`, altura: `${altura} ${tipoAltura}` });
  }
  
  // Capturar datos al presionar "Siguiente"
  document.querySelector("#siguiente2").addEventListener("click", function(event) {
    event.preventDefault();
    capturarDatosRegistro2();
    window.location.href = "Registro3.html";
  });

  // Función para mostrar los datos recolectados y guardarlos en JSON
function mostrarDatosRecolectados() {
    const datosJSON = JSON.stringify(datosFormularios, null, 2);
    console.log("Datos recolectados:", datosJSON);
  
    const datosDiv = document.createElement("div");
    datosDiv.textContent = datosJSON;
    document.body.appendChild(datosDiv);
  }