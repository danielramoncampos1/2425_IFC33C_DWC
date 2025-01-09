/* 
Ejercicio 4: Encontrar los nombres únicos
Escribe un programa que cuente cuántas veces se hace clic en un botón y muestre el total en la página.
Plantilla inicial:
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contador de clics</title>
</head>
<body>
<button onclick="incrementar()">Haz clic aquí</button>
<p>Has hecho clic <span id="contador">0</span> veces.</p>
<script>
let contador = 0;
function incrementar() {
contador++;
document.getElementById('contador').innerText = contador;
}
</script>
</body>
</html>
Agregar otro botón para reiniciar el contador.
*/
document.addEventListener('DOMContentLoaded', function() {
let botonIncrementar = document.getElementById('incrementar')

botonIncrementar.addEventListener('click', incrementar);

botonReiniciar = document.getElementById('reiniciar')
botonReiniciar.addEventListener('click', reiniciar);
});

let contador = 0

function incrementar() {
contador++;
document.getElementById('contador').innerText = contador;
}

function reiniciar() {
    contador = 0;
    document.getElementById('contador').innerText = contador;
}

