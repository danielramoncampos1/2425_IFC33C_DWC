const partitures = [
    { title: "Sant Antoni i el Dimoni", notes: ["DO", "DO", "RE", "FA#", "MI"] },
    { title: "La balanguera", notes: ["DO", "FA#", "SOL", "RE", "RE"] },
    { title: "Joan petit", notes: ["FA", "MI", "FA#", "MI", "SOL"] },
    { title: "Escriurem", notes: ["RE#", "FA#", "FA", "MI#"] },
    { title: "Tramuntana", notes: ["MI", "DO", "DO#", "FA#"] },
    { title: "Una lluna a l'aigua", notes: ["FA#", "FA#", "RE", "RE#"] },
    { title: "Som Ocells", notes: ["DO#", "SOL", "DO", "RE", "MI#"] }
];

let cerca = [];

// FUNCIÓ "NOTA"
// Constructor de l'objecte "Nota"
function Nota(nom, sostingut) {
    this.nom = nom.toUpperCase();
    this.sostingut = sostingut;
}

// FUNCIÓN "ADDCERCA"
// Función que añade un objeto "Nota" al array de búsqueda
function addCerca(nomNota, tipusSostingut) {
    const novaNota = new Nota(nomNota, tipusSostingut);
    cerca.push(novaNota);
}

// Función para mostrar los resultados filtrados según el array de búsqueda
function cercador() {
    const container = document.getElementById('cancionesContainer');
    container.innerHTML = ''; // Limpiar resultados previos

    // Filtrar las partituras según si existe un subconjunto que coincida con el array de búsqueda
    const filteredSongs = partitures.filter(partitura => {
        const songNotes = partitura.notes.map(note => note.toUpperCase());

        // Convertir el array de búsqueda en un array de nombres de notas (para la comparación)
        const cercaNotes = cerca.map(nota => nota.nom + (nota.sostingut ? "#" : ""));

        // Verificar si cada nota en cercaNotes aparece en songNotes en el mismo orden
        let cercaIndex = 0;
        for (let i = 0; i < songNotes.length && cercaIndex < cercaNotes.length; i++) {
            if (songNotes[i] === cercaNotes[cercaIndex]) {
                cercaIndex++;
            }
        }

        // Devuelve true si hemos encontrado todas las notas de búsqueda en orden
        return cercaIndex === cercaNotes.length;
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

// Event listener para el botón que añade las notas y ejecuta la búsqueda
document.querySelector('.buscador button').addEventListener('click', () => {
    const noteInput = document.querySelector('.buscador input').value.trim();
    const notes = noteInput.split(' ').map(note => note.toUpperCase());

    // Limpiar el array de búsqueda antes de añadir nuevas notas
    cerca = [];

    // Por cada nota introducida, la añadimos al array de búsqueda
    notes.forEach(note => {
        const isSharp = note.includes('#');
        const noteName = note.replace('#', '');
        addCerca(noteName, isSharp);
    });

    cercador(); // Ejecutar la búsqueda después de añadir las notas.
});
