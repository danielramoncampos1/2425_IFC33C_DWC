/* 
Ejercicio 3: Generar una lista dinámica
Crea una lista HTML desde un array de elementos en JavaScript.
En el archivo JavaScript, crea un array de nombres o elementos.
Genera una lista <ul> con cada uno de los elementos del array y agrégala al DOM.
*/
const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];

const body = document.getElementsByTagName("body")[0]
let ul = document.createElement('ul')
let li

nombres.forEach(nombre => {
    li = document.createElement('li');
    li.textContent = nombre; 
    ul.appendChild(li); 
});

body.appendChild(ul)