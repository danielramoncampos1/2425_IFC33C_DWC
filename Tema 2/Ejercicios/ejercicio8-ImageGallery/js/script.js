/* 
Ejercicio 8: Crear una galería de imágenes dinámica
Genera una galería de imágenes en el DOM a partir de un array de objetos que contenga
URLs y descripciones de las imágenes.
En el archivo JavaScript, crea un array de objetos donde cada objeto tenga dos
propiedades: url y descripción.
Para cada objeto en el array, genera un contenedor <div> que incluya la imagen (<img>) y
un pie de foto (<p>).
Asegúrate de que todos los elementos de la galería se muestren de forma ordenada en el
DOM.
*/
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
