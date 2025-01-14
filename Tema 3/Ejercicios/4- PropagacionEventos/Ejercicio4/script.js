/* 
Ejercicio 4: Prevenir el comportamiento predeterminado
Crea una página con los siguientes elementos:
1. Un enlace (<a>) que dirija a una página externa.
2. Un contenedor div que rodee al enlace.
Agrega manejadores de eventos que:
● Eviten que el navegador siga el enlace cuando el usuario haga clic en él.
● Registren un mensaje en la consola al detectar un clic en el div.
Prueba el comportamiento con y sin stopPropagation() en el manejador del enlace y
explica qué ocurre.
*/

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById("container")
    const link = document.getElementById("myLink")

    // Manejador del div
    container.addEventListener("click", () => {
        console.log("Div clicked!")
    })

    // Manejador del enlace
    link.addEventListener("click", (event) => {
        event.preventDefault() // Evita que el navegador siga el enlace
        console.log("Link clicked!")

        //event.stopPropagation()
    })
})

/* 
event.preventDefault(): Impide la acción predeterminada asociada al evento 
(en este caso, navegar a la URL del enlace).

event.stopPropagation(): Detiene la propagación del evento hacia los elementos padre, 
por lo que no se ejecutan otros manejadores de eventos en el árbol DOM.
*/