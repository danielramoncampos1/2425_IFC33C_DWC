/* 
Ejercicio 1: Ordenar y mostrar una lista estática
Crea un array de números y ordénalo en orden ascendente y descendente.
Luego, muestra los números en el DOM dentro de una lista <ul>.
Requisitos:
    ● Usa sort con una función flecha como callback para definir el criterio de orden.
    ● Recorre el array con forEach para crear los elementos <li> y añadirlos al DOM.
    ● Manipula el DOM sin utilizar eventos.
*/

let body = document.querySelector('body')
let ul = document.createElement('ul')

let array = [12, 24, 3, 5, 1]

let ordenar = (array) => {
    let arrayAsc = [...array].sort((a, b) => a - b)
    let arrayDesc = [...array].sort((a, b) => b - a)

    return [arrayAsc, arrayDesc]
}

let mostrar = (ordenar) => {
    ordenar.forEach(array => {
        let ul = document.createElement('ul')
        array.forEach((numero) => {
            let li = document.createElement('li')
            li.textContent = numero
            ul.appendChild(li)
        })
        body.appendChild(ul)
    })
}

mostrar(ordenar(array))

