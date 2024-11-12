/* 
Ejercicio 12: Construir un menú de navegación dinámico
Genera un menú de navegación para una página web a partir de un array de enlaces.
Crea un array de objetos donde cada objeto represente una sección del menú con
propiedades texto y url.
A partir de este array, genera un menú de navegación <nav> en el DOM que contenga una
lista <ul> con cada enlace <a> dentro de un <li>.
Asegúrate de estructurar el menú de forma limpia para que pueda integrarse en una página
web.
*/

const menuItems = [
    { texto: 'Inicio', url: '/' },
    { texto: 'Nosotros', url: '/nosotros' },
    { texto: 'Servicios', url: '/servicios' },
    { texto: 'Contacto', url: '/contacto' }
];

function generarMenu(menuItems) {
    const ul = document.createElement('ul');

    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.texto;
        a.href = item.url;

        li.appendChild(a);
        ul.appendChild(li);
    });

    const nav = document.getElementById('menu');
    nav.appendChild(ul);
}

generarMenu(menuItems);