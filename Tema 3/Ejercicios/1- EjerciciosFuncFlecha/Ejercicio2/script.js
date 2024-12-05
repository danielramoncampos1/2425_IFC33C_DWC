/* 
Ejercicio 2: Generar una lista dinámica
Crea un programa que tome un array de nombres, genere una lista desordenada y agregue
cada nombre como un elemento en la lista. Usa una función flecha para generar los
elementos.
*/

let nombres = ["Daniel", "Helena", "Matias", "Yuk", "Belén"]

let body = document.querySelector('body')
let ul = document.createElement('ul')

nombres.forEach((nombre) => {
    let li = document.createElement('li')
    li.textContent = nombre
    ul.appendChild(li)
})

body.appendChild(ul)
