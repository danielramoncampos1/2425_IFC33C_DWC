/* 
Ejercicio 1: Modificar el contenido de un párrafo
Escribe un programa que modifique el contenido de un párrafo.
Crea un archivo HTML con un párrafo <p> que tenga algún texto inicial.
En el archivo JavaScript, selecciona ese párrafo y cambia su contenido por otro texto.
*/

const p = document.getElementById("parrafo")

p.textContent = "Este es el nuevo contenido del párrafo"
