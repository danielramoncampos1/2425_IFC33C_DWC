const songs = [
    { title: "Sant Antoni i el Dimoni", notes: ["DO", "DO", "RE", "FA#", "MI"] },
    { title: "La balanguera", notes: ["DO", "FA#", "RE", "RE"] },
    { title: "Joan petit", notes: ["FA", "MI", "FA#", "MI"] },
    { title: "Titelles", notes: ["RE#", "FA#", "FA", "MI#"] }
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

    // Filtrar las canciones según las notas en currentNotes, independientemente del orden pero respetando la cantidad
    const filteredSongs = songs.filter(song => {
        const songNotes = [...song.notes]; // Copia de las notas de la canción

        // Verificar si cada nota en currentNotes aparece en songNotes la cantidad necesaria
        return currentNotes.every(note => {
            // Contar cuántas veces aparece la nota en currentNotes
            const inputNoteCount = currentNotes.filter(n => n === note).length;
            // Contar cuántas veces aparece la nota en songNotes
            const songNoteCount = songNotes.filter(n => n === note).length;

            // La canción debe tener al menos tantas instancias de la nota como se especifica en currentNotes
            return songNoteCount >= inputNoteCount;
        });
    });

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
        container.innerHTML = '<p>No hi ha resultats per a les notes seleccionades..</p>';
    }
}

// Agregar el evento al botón para que llame a addNotes cuando se haga clic
document.querySelector('.buscador button').addEventListener('click', addNotes);