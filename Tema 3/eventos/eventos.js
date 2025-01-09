/* 
BUENAS PRÁCTICAS CON EVENTOS

1. Usar addeventlistener
2. Organizar los manejadores de eventos en funciones independientes para mejorar
la legibilidad y reutilización del código.

boton1.addEventListener('click', function(){
    alert('Hola')
})
boton2.addEventListener('click', () => {alert('Hola')})
*/

/* BUENAS PRÁCTICAS TRABAJANDO CON HTML Y JS

1. No utilizar eventos dentro del HTML
2. La carga de los ficheros JS se debe añadir en el <head> del HTML
3. No usar código JS dentro del body en HTML (El código JS debe estar en ficheros JS)
*/

/* USOS COMUNES DE EVENTOS

1. Cambiar el contenido de un elemento que recibe el evento (propiedad target)
2. Obtener las coordenadas del ratón
3. Prevenir el comportamiento por defecto de un evento (event.preventDefault())
*/