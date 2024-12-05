/* 
Ejercicio 4: Generar una tabla con datos estáticos
Crea un programa que genere una tabla HTML con dos columnas: "Nombre" y "Edad". Usa
un array de objetos para los datos y una función flecha para construir las filas.
*/

let body = document.querySelector('body')
let table = document.createElement('table')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')


const personas = [
    { nombre: 'Daniel', edad: 35 },
    { nombre: 'Helena', edad: 28 },
    { nombre: 'Matias', edad: 30 },
    { nombre: 'Yuk', edad: 23 }
];

let headerRow = document.createElement('tr');
let headerNombre = document.createElement('th');
let headerEdad = document.createElement('th');
headerNombre.textContent = 'Nombre';
headerEdad.textContent = 'Edad';
headerRow.appendChild(headerNombre);
headerRow.appendChild(headerEdad);
thead.appendChild(headerRow);

personas.forEach(persona => {
    let fila = document.createElement('tr');
    let nombre = document.createElement('td');
    let edad = document.createElement('td');

    nombre.textContent = persona.nombre;
    edad.textContent = persona.edad;

    fila.appendChild(nombre);
    fila.appendChild(edad);
    tbody.appendChild(fila);
});

table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
