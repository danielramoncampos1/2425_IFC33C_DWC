/* 
Ejercicio 9: Crear una lista de enlaces
Dado un array de objetos con propiedades nombre y URL, genera una lista desordenada (
donde cada nombre sea un enlace a la URL correspondiente.
*/

let enlaces = [
    {
        "nombre": "Google",
        "URL": "https://www.google.com"
    },
    {
        "nombre": "Wikipedia",
        "URL": "https://www.wikipedia.org"
    },
    {
        "nombre": "GitHub",
        "URL": "https://www.github.com"
    },
    {
        "nombre": "YouTube",
        "URL": "https://www.youtube.com"
    },
    {
        "nombre": "Stack Overflow",
        "URL": "https://stackoverflow.com"
    }
]

let body = document.querySelector('body')
let ul = document.createElement('ul')


enlaces.forEach((element) => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.textContent = `${element.nombre}`
    a.href = `${element.URL}`

    li.appendChild(a)
    ul.appendChild(li)
})

body.appendChild(ul)
