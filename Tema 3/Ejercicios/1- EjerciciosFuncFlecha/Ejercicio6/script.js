/* 
Ejercicio 6: Crear una tabla de multiplicar
Genera una tabla HTML que muestre la tabla de multiplicar del número 5 (del 1 al 10). Usa
una función flecha para generar cada fila de la tabla.
*/

let body = document.querySelector('body');

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

// Crear encabezado de la tabla
let headerRow = document.createElement('tr');
let header1 = document.createElement('th');
let header2 = document.createElement('th');
let header3 = document.createElement('th');

header1.textContent = 'Operación';
header2.textContent = 'Resultado';
headerRow.appendChild(header1);
headerRow.appendChild(header2);
thead.appendChild(headerRow);

table.appendChild(thead);

for (let i = 1; i <= 10; i++) {
    
    let createRow = (i) => {
        let row = document.createElement('tr');
        let cell1 = document.createElement('td');
        let cell2 = document.createElement('td');

        // Contenido de las celdas
        cell1.textContent = `5 x ${i}`;
        cell2.textContent = `${5 * i}`;

        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    }

    createRow(i);
}

table.appendChild(tbody);
body.appendChild(table);
