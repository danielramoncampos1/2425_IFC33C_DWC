/* 
Ejercicio 13: Crear un resumen de artículos o noticias
Construye una sección de artículos destacados en el DOM a partir de datos de ejemplo.
Crea un array de objetos que represente artículos, cada uno con propiedades título, autor,
fecha y resumen.
Genera una sección en el DOM donde cada artículo se muestre en un contenedor con el
título en un <h3>, el autor y fecha en un <p> y el resumen en otro <p>.
Organiza los artículos en orden cronológico descendente, mostrando primero los más
recientes.
*/

const articulos = [
    {
        id: 1,
        titulo: "Artículo Uno",
        autor: "Autor A",
        fecha: "2023-11-12",
        resumen: "Este es el resumen del primer artículo."
    },
    {
        id: 2,
        titulo: "Artículo Dos",
        autor: "Autor B",
        fecha: "2024-01-05",
        resumen: "Este es el resumen del segundo artículo."
    },
    {
        id: 3,
        titulo: "Artículo Tres",
        autor: "Autor C",
        fecha: "2024-09-22",
        resumen: "Este es el resumen del tercer artículo."
    }
];
    
articulos.sort((a,b) => b.id - a.id);

document.addEventListener("DOMContentLoaded", () => {
    const contenedorArticulos = document.createElement("div");
    contenedorArticulos.id = "articulos-destacados";

    articulos.forEach(articulo => {
        const contenedorArticulo = document.createElement("div");
        contenedorArticulo.classList.add("articulo");

        const titulo = document.createElement("h3");
        titulo.textContent = articulo.titulo;
        contenedorArticulo.appendChild(titulo);

        const autorFecha = document.createElement("p");
        autorFecha.textContent = `Por ${articulo.autor} el ${articulo.fecha}`;
        contenedorArticulo.appendChild(autorFecha);

        const resumen = document.createElement("p");
        resumen.textContent = articulo.resumen;
        contenedorArticulo.appendChild(resumen);

        contenedorArticulos.appendChild(contenedorArticulo);
    });


    document.body.appendChild(contenedorArticulos);
});