/* 
Ejercicio 5: Contar palabras en un texto
Dado un texto estático dentro de una variable, usa una función flecha para contar cuántas
palabras tiene y muestra el resultado en un párrafo.
*/

let body = document.querySelector('body');
let texto = "Hola, esto es el ejercicio cinco de funciones flecha hecho por Daniel";

let cuentaPalabras = (palabra) => palabra.split(" ").length;


let totalPalabras = cuentaPalabras(texto);
let p = document.createElement('p');
p.textContent = `El texto contiene ${totalPalabras} palabras.`;

body.appendChild(p);