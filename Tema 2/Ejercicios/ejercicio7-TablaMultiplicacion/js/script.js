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
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        
        // Encabezado de fila
        const th = document.createElement('th');
        th.innerText = i;
        row.appendChild(th);
        
        // Celdas de la fila
        for (let j = 1; j <= 10; j++) {
            const td = document.createElement('td');
            td.innerText = i * j;
            row.appendChild(td);
        }
        
        tabla.appendChild(row);
    }
    
    document.getElementById('tabla-multiplicacion').appendChild(tabla);
}

generarTablaMultiplicacion();
