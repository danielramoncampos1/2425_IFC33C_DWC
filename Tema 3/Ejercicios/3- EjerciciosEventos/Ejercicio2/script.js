/* 
Ejercicio 2: Agregar un evento básico a un botón
Escribe un código HTML simple con un botón y utiliza el atributo onclick para mostrar un mensaje de alerta cuando el botón sea presionado.
Ejemplo inicial:
<button onclick="alert('¡Has hecho clic!')">Presióname</button>
Cambia el texto del botón después de hacer clic utilizando una segunda alerta, como:
alert('El texto del botón cambiará');
this.innerText = '¡Texto cambiado!’;
*/
document.addEventListener('DOMContentLoaded', function () {
    let boton = document.getElementById('boton1');
    boton.addEventListener('click', function () {
        cambiarTexto(boton);
    });
});

function cambiarTexto(boton) {
    alert('¡Has hecho clic!');
    alert('El texto del botón cambiará');
    boton.innerText = '¡Texto cambiado!';
}