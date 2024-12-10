/* 
Ejercicio 7: Mostrar datos del navegador
Crea un programa que muestre el nombre del navegador (navigator.userAgent) y el idioma
(navigator.language) en dos párrafos separados. Usa una función flecha para construir el
contenido.
*/

let body = document.querySelector('body')
let p1 = document.createElement('p')
let p2 = document.createElement('p')

let muestraDatos = () => {
    let userAgent = navigator.userAgent
    let language = navigator.language

    p1.textContent = `Nombre del navegador: ${userAgent}`
    p2.textContent = `Idioma: ${language}`
}

muestraDatos()

body.appendChild(p1)
body.appendChild(p2)