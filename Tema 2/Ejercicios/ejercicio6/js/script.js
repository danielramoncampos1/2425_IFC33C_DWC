const datos = [
    { nombre: 'Daniel', edad: 30, email: 'Daniel@gmail.com' },
    { nombre: 'Helena', edad: 35, email: 'Helena@gmail.com' },
    { nombre: 'Matias', edad: 28, email: 'Matias@gmail.com' },
    { nombre: 'Yuk', edad: 25, email: 'Yuk@gmail.com' },
    { nombre: 'Marc', edad: 20, email: 'Marc@gmail.com' }
];

const div = document.getElementById("tabla")
const tabla = document.createElement('table');

// Encabezados de la tabla
const encabezados = ['Nombre', 'Edad', 'Email'];
const filaEncabezado = document.createElement('tr');
encabezados.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    filaEncabezado.appendChild(th);
});
tabla.appendChild(filaEncabezado);

// Filas de datos
datos.forEach(item => {
    const fila = document.createElement('tr');
    fila.innerHTML = `<td>${item.nombre}</td><td>${item.edad}</td><td>${item.email}</td>`;
    tabla.appendChild(fila);
});

div.appendChild(tabla)