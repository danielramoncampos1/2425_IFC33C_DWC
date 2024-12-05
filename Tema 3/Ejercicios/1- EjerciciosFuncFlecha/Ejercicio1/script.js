/* 
Ejercicio 1: Crear y agregar elementos al DOM
Escribe un programa que cree dinámicamente un párrafo (<p>) con el texto "Este es un
párrafo dinámico" y lo agregue al final del documento usando una función flecha.
*/

let body = document.querySelector('body')
let p = document.createElement('p')

let flecha = () => {
        p.textContent = "Este es un párrafo dinámico"
}

flecha()
body.appendChild(p)