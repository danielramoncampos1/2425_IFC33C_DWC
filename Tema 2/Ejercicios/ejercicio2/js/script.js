/* 
Ejercicio 2: Cambiar el color de fondo de varios elementos
Cambia el color de fondo de todos los elementos de una clase específica en el HTML.
En el archivo HTML, crea varios <div> con una misma clase y asigna diferentes textos a
cada uno.
En el archivo JavaScript, selecciona todos los elementos de esa clase y cambia su color de
fondo.
*/

const fondo = document.getElementsByClassName("divs")

for (let i = 0; i<fondo.length; i++){
    fondo[i].style.backgroundColor = "lightblue"
}