/* 
Ejercicio 5: Crear una lista interactiva
Crea una lista con tres elementos. Al hacer clic en uno de los elementos, debe aparecer una alerta con el texto del elemento seleccionado.
Plantilla inicial:
<ul>
<li onclick="mostrarTexto(this)">Elemento 1</li>
<li onclick="mostrarTexto(this)">Elemento 2</li>
<li onclick="mostrarTexto(this)">Elemento 3</li>
</ul>
<script>
function mostrarTexto(elemento) {
alert(`Has hecho clic en: ${elemento.innerText}`);
JavaScript: Funciones flecha y callback
Exercicis DWC
}
</script>
Cambia el texto del elemento al que hiciste clic por "Seleccionado".
*/

document.addEventListener('DOMContentLoaded', () => {
    let elemento1 = document.getElementById('elemento1')
    let elemento2 = document.getElementById('elemento2')
    let elemento3 = document.getElementById('elemento3')

    elemento1.addEventListener('click', () => {
        mostrarTexto(elemento1)
    })

    elemento2.addEventListener('click', () => {
        mostrarTexto(elemento2)
    })

    elemento3.addEventListener('click', () => {
        mostrarTexto(elemento3)
    })
})


function mostrarTexto(elemento) {
    alert(`Has hecho clic en: ${elemento.innerText}`)
}