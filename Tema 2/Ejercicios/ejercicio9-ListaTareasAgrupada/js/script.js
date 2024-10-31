const tareas = [
    { nombre: "Limpiar la casa", categoria: "Casa" },
    { nombre: "Enviar informes", categoria: "Trabajo" },
    { nombre: "Estudiar JavaScript", categoria: "Estudios" },
    { nombre: "Comprar víveres", categoria: "Casa" },
    { nombre: "Reunión con el equipo", categoria: "Trabajo" },
    { nombre: "Leer un libro", categoria: "Estudios" },
];

// Agrupar tareas por categoría
const tareasAgrupadas = tareas.reduce((acc, tarea) => {
    if (!acc[tarea.categoria]) {
        acc[tarea.categoria] = [];
    }
    acc[tarea.categoria].push(tarea.nombre);
    return acc;
}, {});

// Obtener el contenedor donde se mostrarán las tareas
const container = document.getElementById("tareas-container");

// Crear el HTML para cada categoría y sus tareas
for (const categoria in tareasAgrupadas) {
    // Crear el título de la categoría
    const h2 = document.createElement("h2");
    h2.textContent = categoria;
    container.appendChild(h2);

    // Crear la lista de tareas
    const ul = document.createElement("ul");
    tareasAgrupadas[categoria].forEach(tareaNombre => {
        const li = document.createElement("li");
        li.textContent = tareaNombre;
        ul.appendChild(li);
    });
    
    container.appendChild(ul);
}
