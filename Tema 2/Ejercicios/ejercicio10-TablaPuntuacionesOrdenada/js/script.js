/* 
Ejercicio 10: Crear una tabla de puntuaciones ordenada
Dado un array de objetos que representa a jugadores con su nombre y puntuación, crea una
tabla HTML en el DOM ordenada por las puntuaciones de mayor a menor.
Crea un array de objetos, donde cada objeto represente un jugador con nombre y
puntuación.
En JavaScript, ordena el array en función de las puntuaciones.
Crea una tabla HTML en el DOM donde cada fila incluya el nombre y la puntuación de cada
jugador, mostrando primero a los jugadores con mayor puntuación.
*/

const jugadores = [
    { nombre: 'Alice', puntuacion: 120 },
    { nombre: 'Bob', puntuacion: 150 },
    { nombre: 'Charlie', puntuacion: 100 },
    { nombre: 'David', puntuacion: 180 },
    { nombre: 'Eve', puntuacion: 130 }
];

// Ordenar el array por puntuaciones de mayor a menor
jugadores.sort((a, b) => b.puntuacion - a.puntuacion);

// Crear la tabla HTML
const tablaContainer = document.getElementById('tabla-container');
const tabla = document.createElement('table');

// Crear la cabecera de la tabla
const cabecera = document.createElement('thead');
cabecera.innerHTML = `
    <tr>
        <th>Nombre</th>
        <th>Puntuación</th>
    </tr>
`;
tabla.appendChild(cabecera);

// Crear el cuerpo de la tabla
const cuerpo = document.createElement('tbody');
jugadores.forEach(jugador => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${jugador.nombre}</td>
        <td>${jugador.puntuacion}</td>
    `;
    cuerpo.appendChild(fila);
});
tabla.appendChild(cuerpo);

tablaContainer.appendChild(tabla);