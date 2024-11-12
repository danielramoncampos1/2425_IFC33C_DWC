/* 
Ejercicio 11: Crear un listado de productos con información detallada
Simula un catálogo de productos de una tienda en línea.
Crea un array de objetos donde cada objeto representa un producto con propiedades como
nombre, precio, descripción y imagenURL.
Genera una estructura en el DOM que muestre cada producto con su nombre en <h3>, el
precio en un <p>, una breve descripción en otro <p> y la imagen en un <img>.
Organiza todos los productos en una cuadrícula con filas y columnas.
*/
const productos = [
    {
        nombre: 'Camiseta',
        precio: 19.99,
        descripcion: 'Camiseta 100% algodón con diseño único.',
        imagenURL: 'https://via.placeholder.com/200'
    },
    {
        nombre: 'Pantalones',
        precio: 39.99,
        descripcion: 'Pantalones de mezclilla ajustados.',
        imagenURL: 'https://via.placeholder.com/200'
    },
    {
        nombre: 'Zapatillas',
        precio: 59.99,
        descripcion: 'Zapatillas deportivas para correr.',
        imagenURL: 'https://via.placeholder.com/200'
    },
    {
        nombre: 'Chaqueta',
        precio: 79.99,
        descripcion: 'Chaqueta de invierno con capucha.',
        imagenURL: 'https://via.placeholder.com/200'
    }
];

const productGrid = document.getElementById('productGrid');

productos.forEach(producto => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const productImage = document.createElement('img');
    productImage.src = producto.imagenURL;
    productImage.alt = producto.nombre;

    const productName = document.createElement('h3');
    productName.textContent = producto.nombre;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Precio: $${producto.precio.toFixed(2)}`;

    const productDescription = document.createElement('p');
    productDescription.textContent = producto.descripcion;

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productDescription);

    productGrid.appendChild(productCard);
});