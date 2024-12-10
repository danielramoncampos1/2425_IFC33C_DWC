/* 
Ejercicio 8: Crear un listado numérico
Genera una lista ordenada con los números del 1 al 10. Usa una función flecha para crear
cada elemento de la lista.
*/

let body = document.querySelector('body')
let ol = document.createElement('ol')

let crearLista = () => {
    for (let index = 1; index < 11; index++) {
        let li = document.createElement('li')
        li.textContent = `${index}`
        ol.appendChild(li)    
    }
}

crearLista()

body.appendChild(ol)