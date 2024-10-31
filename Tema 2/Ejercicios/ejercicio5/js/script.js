/* 
Ejercicio 5: Cambiar el estilo de todos los títulos
Cambia el estilo de todos los encabezados (<h1>, <h2>, etc.) en la página.
En el archivo HTML, coloca varios títulos (<h1>, <h2>, etc.) con contenido.
En el archivo JavaScript, selecciona todos los encabezados y cambia su color, tamaño o
fuente.
*/

const numeros = [1, 2, 3, 4, 5, 6]

let encabezados

numeros.forEach(numero => {
    encabezados = document.getElementsByTagName(`h${numero}`)
    for (let i = 0; i < encabezados.length; i++) {
        encabezados[i].style.color = 'blue' 
        encabezados[i].style.fontSize = '18px' 
        encabezados[i].style.fontFamily = 'Arial, sans-serif'
    }
});