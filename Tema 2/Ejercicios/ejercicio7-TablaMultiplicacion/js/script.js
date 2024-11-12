/* 
Ejercicio 7: Crear una tabla de multiplicación
Genera una tabla de multiplicación completa en el DOM.
En el archivo JavaScript, crea una función que genere la tabla de multiplicar del 1 al 10 y
muéstrala en el DOM como una tabla HTML.
Cada celda debe contener el producto de la multiplicación, y las filas y columnas deben
etiquetarse con los números multiplicados.
*/

function generarTablaMultiplicacion() {
    const tabla = document.createElement('table');
    const headerRow = document.createElement('tr');
    
    // Crear encabezados de columna
    const th = document.createElement('th');
    th.innerText = 'x';
    headerRow.appendChild(th);
    
    for (let i = 1; i <= 10; i++) {
        const th = document.createElement('th');
        th.innerText = i;
        headerRow.appendChild(th);
    }
    
    tabla.appendChild(headerRow);
    
    // Crear filas de la tabla
    for (let j = 1; j <= 10; j++) {
        const row = document.createElement('tr');
        
        // Encabezado de fila
        const th = document.createElement('th');
        th.innerText = j;
        row.appendChild(th);
        
        // Celdas de la fila
        for (let k = 1; k <= 10; k++) {
            const td = document.createElement('td');
            td.innerText = j * k;
            row.appendChild(td);
        }
        
        tabla.appendChild(row);
    }
    
    document.getElementById('tabla-multiplicacion').appendChild(tabla);
}

generarTablaMultiplicacion();
