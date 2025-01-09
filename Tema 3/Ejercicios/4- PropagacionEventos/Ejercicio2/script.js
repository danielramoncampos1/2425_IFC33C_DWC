/* 
Ejercicio 2: Detener la propagación de eventos
Diseña un formulario con los siguientes elementos:
1. Un campo de texto para el nombre del usuario.
2. Un botón que diga "Enviar".
Agrega los siguientes manejadores:
● Un manejador en el form que muestre un mensaje en la consola indicando
que el formulario ha sido enviado.
● Un manejador en el botón "Enviar" que detenga tanto la propagación como el
envío del formulario.
Explica cómo cambiaría el comportamiento si stopPropagation() no se
utilizara.
*/

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const submitButton = document.getElementById('submitButton');

    // Manejador para el envío del formulario
    form.addEventListener('submit', (event) => {
        console.log('El formulario ha sido enviado.');
    });

    // Manejador para el botón "Enviar"
    submitButton.addEventListener('click', (event) => {
      event.preventDefault(); // Evita el envío del formulario
      event.stopPropagation(); // Detiene la propagación del evento
        console.log('Evento del botón "Enviar" manejado.');
    });
});

/* 
Si stopPropagation() no se utilizara, el comportamiento del formulario sería diferente 
porque el evento seguiría propagándose a través de la jerarquía del DOM, 
lo que afectaría a otros manejadores registrados en elementos padres.
*/