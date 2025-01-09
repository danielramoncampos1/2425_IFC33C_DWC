/* 
Ejercicio 1: Fases de la propagación de eventos
Crea un documento HTML con tres elementos anidados: un div, un section y un button.
Utiliza JavaScript para agregar manejadores de eventos a cada uno de ellos. Estos
manejadores deben mostrar un mensaje en la consola con el nombre del elemento y la fase
en la que se encuentra (captura o burbuja).
Investiga y responde:
1. ¿En qué orden se ejecutan los eventos en la fase de captura?
2. ¿Qué sucede si detienes la propagación de eventos con stopPropagation()?
3. ¿Cómo afecta la fase de burbuja al comportamiento general?
*/

document.addEventListener('DOMContentLoaded', () => {
    let div = document.getElementById('divElement');
    let section = document.getElementById('sectionElement');
    let button = document.getElementById('buttonElement');

    div.addEventListener('click', (e) => {
        console.log('Div - Captura');
    }, true);

    section.addEventListener('click', (e) => {
        console.log('Section - Captura');
    }, true);

    button.addEventListener('click', (e) => {
        console.log('Button - Captura');
    }, true);

    div.addEventListener('click', (e) => {
        console.log('Div - Burbuja');
    });

    section.addEventListener('click', (e) => {
        console.log('Section - Burbuja');
    });

    button.addEventListener('click', (e) => {
        console.log('Button - Burbuja');
    });

    button.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

/* 
Div - Captura
Div - Burbuja
Div - Captura
Section - Captura
Section - Burbuja
Div - Burbuja
Div - Captura
Section - Captura
Button - Captura
Button - Burbuja
*/

/* 
1. **¿En qué orden se ejecutan los eventos en la fase de captura?**

    En la fase de captura, los eventos se ejecutan desde el elemento más externo hacia el más interno. En el ejemplo dado, 
    el orden sería:
    - `Div - Captura`
    - `Section - Captura`
    - `Button - Captura`

2. **¿Qué sucede si detienes la propagación de eventos con stopPropagation()?**

    Si detienes la propagación de eventos con `stopPropagation()`, el evento no continuará propagándose a los elementos padres. 
    En el ejemplo, si `stopPropagation()` se llama en el manejador de eventos del botón, los eventos de burbuja 
    no se ejecutarán para los elementos `section` y `div`.

3. **¿Cómo afecta la fase de burbuja al comportamiento general?**

    En la fase de burbuja, los eventos se propagan desde el elemento más interno hacia el más externo.
    Esto permite que los elementos padres respondan a eventos que ocurrieron en sus elementos hijos. 
    En el ejemplo, después de que el evento se maneja en el botón, se propaga hacia arriba a `section` y luego a `div`, 
    a menos que se detenga con `stopPropagation()`.

*/