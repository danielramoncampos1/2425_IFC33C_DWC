/* 
Ejercicio 3: Mostrar propiedades del objeto window
Recorre las propiedades del objeto window y muestra las primeras 10 en una lista <ul>.
Ordena las propiedades alfabéticamente antes de mostrarlas.
Requisitos:
● Usa Object.keys() para obtener las propiedades de window.
● Usa sort con un callback.
● Usa forEach para recorrer las propiedades y manipular el DOM.
*/


let body = document.querySelector('body')
let ul = document.createElement('ul')
let windowProperties = Object.keys(window);

windowProperties.sort((a, b) => a.localeCompare(b))


body.appendChild(ul)

windowProperties.slice(0, 10).forEach(property => {
    let li = document.createElement('li')
    li.textContent = property
    ul.appendChild(li)
})
