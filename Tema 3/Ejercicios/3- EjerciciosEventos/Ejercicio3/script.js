/* 
Ejercicio 3: Explorar eventos mediante el inspector del navegador
Usa el inspector del navegador para observar eventos en tiempo real:
1. Abre el navegador.
2. Ve a una página web (por ejemplo, un formulario de contacto simple).
3. En el inspector, selecciona la pestaña "Event Listeners" o utiliza el registro en consola con:
document.addEventListener('click', (event) => {
console.log(`Tipo de evento: ${event.type}`);
});
Explica qué acciones generan un click, focus, o keypress.
*/

document.addEventListener('click', (event) => {
    console.log(`Tipo de evento: ${event.type}`);
});
/* 
El evento click se genera cuando un usuario interactúa con un 
elemento de la página web haciendo clic con el ratón
*/

document.addEventListener('focus', (event) => {
    console.log(`Tipo de evento: ${event.type}`);
}, true);

/* 
El evento focus ocurre cuando un elemento de la página, como un campo de texto 
gana el foco, es decir, está preparado para recibir la interacción del usuario.
*/

document.addEventListener('keypress', (event) => {
    console.log(`Tipo de evento: ${event.type}`);
});

/* 
El evento keypress se dispara cuando el usuario presiona una tecla
*/