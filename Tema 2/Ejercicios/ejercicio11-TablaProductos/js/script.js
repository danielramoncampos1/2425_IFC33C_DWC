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