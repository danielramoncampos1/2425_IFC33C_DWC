/* 
Ejercicio 2: Crear una tabla dinámica de datos
Dado un array de objetos (por ejemplo, personas con nombre y edad), crea una tabla HTML
que muestre estos datos.
Ordena las personas por edad usando sort con un callback.
Añade las filas de la tabla usando forEach.
Requisitos:
● Usa funciones flecha para el callback en sort.
● Usa el DOM para crear y agregar elementos de la tabla.
*/

let body = document.querySelector('body')
let table = document.createElement('table')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')

let personas = [
    {
        "nombre" : "Daniel",
        "edad" : 35
    },
    {
        "nombre" : "Helena",
        "edad" : 29
    },
    {
        "nombre" : "Matias",
        "edad" : 30
    },
    {
        "nombre" : "Yuk",
        "edad" : 23
    }
]

personas.sort((a, b) => a.edad - b.edad);

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