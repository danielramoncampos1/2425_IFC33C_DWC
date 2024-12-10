/* 
Ejercicio 10: Calcular el promedio de un array
Dado un array de números, usa una función flecha para calcular su promedio y muestra el
resultado en un párrafo.
*/

let body = document.querySelector('body')
let p = document.createElement('p')

let array = [5, 50, 25, 76, 13, 98]
let resultado = 0

array.forEach((number) => {
    resultado += number
})

resultado = resultado / array.length

p.textContent = `El promedio del array es: ${resultado}`

body.appendChild(p)
