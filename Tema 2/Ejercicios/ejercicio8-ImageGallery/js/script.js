// Array de objetos que contienen la URL y descripción de las imágenes
const images = [
    {
        url: 'https://via.placeholder.com/200/0000ff',
        description: 'imagen 1'
    },
    {
        url: 'https://via.placeholder.com/200/0000ff',
        description: 'imagen 2'
    },
    {
        url: 'https://via.placeholder.com/200/0000ff',
        description: 'imagen 3'
    },
    {
        url: 'https://via.placeholder.com/200/0000ff',
        description: 'imagen 4'
    }
];

function createGallery() {
    const gallery = document.getElementById('gallery');

    images.forEach(image => {
        const container = document.createElement('div');
        container.className = 'image-container';

        // Crear el elemento de la imagen
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.description;

        // Crear el pie de foto
        const caption = document.createElement('p');
        caption.textContent = image.description;

        // Añadir la imagen y el pie de foto al contenedor
        container.appendChild(img);
        container.appendChild(caption);

        gallery.appendChild(container);
    });
}

createGallery();
