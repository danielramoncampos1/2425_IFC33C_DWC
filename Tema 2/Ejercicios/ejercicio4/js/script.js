/* 
Ejercicio 4: Modificar atributos de imagen
Crea un programa que cambie la fuente de una imagen de acuerdo con una condición.
En el archivo HTML, incluye una <img> con una imagen predeterminada.
En el archivo JavaScript, comprueba una condición (por ejemplo, una variable booleana) y,
si es verdadera, cambia el atributo src de la imagen para que muestre una imagen diferente.
*/

let condicion = true; 

let imagen = document.getElementById('imagen')

if (condicion) imagen.src = 'img/amarillo.png'