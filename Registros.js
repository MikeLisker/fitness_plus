document.addEventListener('DOMContentLoaded', function() {
  const finalizarButton = document.querySelector('a[name="finalizar"]');

  finalizarButton.addEventListener('click', function(event) {
      event.preventDefault();

      
      const registroData = {
          nombres: document.querySelector('#registro input[placeholder="Ejp: Juan Andres"]').value,
          apellidos: document.querySelector('#registro input[placeholder="Ejp: Garzon Manrique"]').value,
          fechaNacimiento: {
              dia: document.querySelector('#registro select[name="dia"]').value,
              mes: document.querySelector('#registro select[name="mes"]').value,
              anio: document.querySelector('#registro select[name="anio"]').value
          },
          genero: document.querySelector('#registro select[name="genero"]').value,
          correo: document.querySelector('#registro input[name="correo"]').value,
          direccion: document.querySelector('#registro input[name="direccion"]').value,
          tipoDoc: document.querySelector('#registro select[name="tipo_doc"]').value,
          numeroDoc: document.querySelector('#registro input[name="numero_doc"]').value,
          telefono: document.querySelector('#registro input[name="telefono"]').value
      };

      
      const registro2Data = {
          objetivo: document.querySelector('#registro2 select[name="objetivo"]').value,
          nivel: document.querySelector('#registro2 select[name="nivel"]').value,
          condicionesMedicas: document.querySelector('#registro2 input[name="correo"]').value,
          horario: document.querySelector('#registro2 select[name="horario"]').value,
          peso: {
              valor: document.querySelector('#registro2 input[name="num_peso"]').value,
              unidad: document.querySelector('#registro2 select[name="tipo_peso"]').value
          },
          altura: {
              valor: document.querySelector('#registro2 input[name="num_peso"]').value,
              unidad: document.querySelector('#registro2 select[name="tipo_peso"]').value
          }
      };

      
      const registro3Data = {
          nombreUsuario: document.querySelector('#registro3 input[placeholder="Ejp: Angelemss"]').value,
          contrasena: document.querySelector('#registro3 input[placeholder="Ejp: angel2022"]').value,
          confirmaContrasena: document.querySelector('#registro3 input[placeholder="Ejp: angel2021"]').value,
          mediosContacto: document.querySelector('#registro3 select[name="nivel"]').value,
          terminos: [
              document.querySelector('#registro3 input[name="terminos"]').checked,
              document.querySelector('#registro3 input[name="terminos"]').checked,
              document.querySelector('#registro3 input[name="terminos"]').checked
          ]
      };

      
      const finalData = {
          registro: registroData,
          registro2: registro2Data,
          registro3: registro3Data
      };
      console.log("Hola te amo sofi");
      
      fetch('your-backend-endpoint', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(finalData)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
          
          window.location.href = 'loggedin.html';
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  });
});