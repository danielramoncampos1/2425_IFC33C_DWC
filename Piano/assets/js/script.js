const songs = [
    { title: "Sant Antoni i el Dimoni", notes: ["DO", "DO", "RE", "FA#", "MI"] },
    { title: "La balanguera", notes: ["DO", "FA#", "RE", "RE"] },
    { title: "Joan petit", notes: ["FA", "MI", "FA#", "MI"] },
    { title: "Prueba4", notes: ["RE#", "FA#", "FA", "MI#"] }
];

let currentNotes = [];

// Función para agregar las notas al array y mostrar resultados
function addNotes() {
    // Obtener el valor del input y dividirlo en notas
    const noteInput = document.querySelector('.buscador input').value.trim();
    // Dividir las notas por espacios y convertirlas en mayúsculas
    currentNotes = noteInput.split(' ').map(note => note.toUpperCase());
    displayResults();
}

// Función para mostrar las canciones que coinciden con las notas ingresadas
function displayResults() {
    const container = document.getElementById('cancionesContainer');
    container.innerHTML = ''; // Limpiar resultados previos

    // Filtrar las canciones según las notas en currentNotes
    const filteredSongs = songs.filter(song =>
        currentNotes.every(note => song.notes.includes(note))
    );

    if (filteredSongs.length > 0) {
        filteredSongs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.className = 'canciones';
            songDiv.innerHTML = `
                <div class="tituloCancion">
                    <p>${song.title}</p>
                    <p>Lletra</p>
                </div>
                <button onclick="playSong('${song.title}')">Reproduïr cançó</button>
            `;
            container.appendChild(songDiv);
        });
    } else {
        container.innerHTML = '<p>No hay resultados para las notas seleccionadas.</p>';
    }
}

// Agregar el evento al botón para que llame a addNotes cuando se haga clic
document.querySelector('.buscador button').addEventListener('click', addNotes);

/*ESTE SCRIPT TIENE DIFERENTES ERRORES QUE DEBO CORREGIR, AL PONER EN EL INPUT DO DO RE, MUESTRA 2 CANCIONES
(SANT ANTONI Y LA BALANGUERA, CUANDO REALMENTE LA BALANGUERA SI QUE CONTIENE DO Y RE PERO NO CONTIENE DOS DO*/