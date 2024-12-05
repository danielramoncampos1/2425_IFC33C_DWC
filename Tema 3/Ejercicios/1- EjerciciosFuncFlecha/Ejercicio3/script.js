/* 
Ejercicio 3: Mostrar propiedades del objeto window
Usa una función flecha para obtener las propiedades innerWidth e innerHeight del objeto
window y muéstralas en un párrafo (<p>) en el documento.
*/

let body = document.querySelector('body')
let p = document.createElement('p')
let p2 = document.createElement('p')

let flecha = () => {
    let innerWidth = window.innerWidth
    let innerHeight = window.innerHeight
    p.textContent = "Width = " + innerWidth
    p2.textContent = "Height = " + innerHeight
}

flecha()
body.appendChild(p)
body.appendChild(p2)