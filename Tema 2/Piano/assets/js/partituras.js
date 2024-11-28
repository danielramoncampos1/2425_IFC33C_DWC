const partitures = [
    { id: 1, title: "Sant Antoni i el Dimoni", language: "ca" },
    { id: 2, title: "La balanguera", language: "ca" },
    { id: 3, title: "Joan petit", language: "ca" },
    { id: 4, title: "Escriurem", language: "ca" },
    { id: 5, title: "Tramuntana", language: "ca" },
    { id: 6, title: "Una lluna a l'aigua", language: "ca" },
    { id: 7, title: "Som Ocells", language: "ca" },
    { id: 8, title: "La vie en rose", language: "fr" },
    { id: 9, title: "Ne me quitte pas", language: "fr" },
    { id: 10, title: "Les Champs-Élysées", language: "fr" },
    { id: 11, title: "Comme d'habitude", language: "fr" },
    { id: 12, title: "Non, je ne regrette rien", language: "fr" },
    { id: 13, title: "L'hymne à l'amour", language: "fr" },
    { id: 14, title: "Sous le ciel de Paris", language: "fr" },
    { id: 15, title: "El perdón", language: "es" },
    { id: 16, title: "Despacito", language: "es" },
    { id: 17, title: "Bailando", language: "es" },
    { id: 18, title: "Vivir mi vida", language: "es" },
    { id: 19, title: "La bamba", language: "es" },
    { id: 20, title: "La cucaracha", language: "es" },
    { id: 21, title: "Héroe", language: "es" },
    { id: 22, title: "Shape of You", language: "en" },
    { id: 23, title: "Someone Like You", language: "en" },
    { id: 24, title: "Rolling in the Deep", language: "en" },
    { id: 25, title: "Hello", language: "en" },
    { id: 26, title: "Thinking Out Loud", language: "en" },
    { id: 27, title: "Perfect", language: "en" },
    { id: 28, title: "Love Yourself", language: "en" },
    { id: 29, title: "Bohemian Rhapsody", language: "en" },
    { id: 30, title: "Stairway to Heaven", language: "en" },
    { id: 31, title: "Hotel California", language: "en" },
    { id: 32, title: "Imagine", language: "en" },
    { id: 33, title: "Let it Be", language: "en" },
    { id: 34, title: "Yesterday", language: "en" },
    { id: 35, title: "Hey Jude", language: "en" },
    { id: 36, title: "I Will Always Love You", language: "en" },
    { id: 37, title: "My Heart Will Go On", language: "en" },
    { id: 38, title: "Smells Like Teen Spirit", language: "en" },
    { id: 39, title: "Billie Jean", language: "en" },
    { id: 40, title: "Thriller", language: "en" },
    { id: 41, title: "Like a Prayer", language: "en" },
    { id: 42, title: "Respect", language: "en" },
    { id: 43, title: "Good Vibrations", language: "en" },
    { id: 44, title: "What's Going On", language: "en" },
    { id: 45, title: "Born to Run", language: "en" },
    { id: 46, title: "Superstition", language: "en" },
    { id: 47, title: "Ain't No Sunshine", language: "en" },
    { id: 48, title: "I Want to Hold Your Hand", language: "en" },
    { id: 49, title: "All You Need Is Love", language: "en" },
    { id: 50, title: "Waterloo", language: "en" },
    { id: 51, title: "Fernando", language: "en" },
    { id: 52, title: "Dancing Queen", language: "en" },
    { id: 53, title: "Mamma Mia", language: "en" },
    { id: 54, title: "Chiquitita", language: "en" },
    { id: 55, title: "The Winner Takes It All", language: "en" },
    { id: 56, title: "Take a Chance on Me", language: "en" },
    { id: 57, title: "Thank You for the Music", language: "en" },
    { id: 58, title: "Money, Money, Money", language: "en" },
    { id: 59, title: "Lay All Your Love on Me", language: "en" },
    { id: 60, title: "Voulez-Vous", language: "en" },
    { id: 61, title: "Summer Night City", language: "en" },
    { id: 62, title: "Gimme! Gimme! Gimme!", language: "en" },
    { id: 63, title: "Super Trouper", language: "en" },
    { id: 64, title: "The Name of the Game", language: "en" },
    { id: 65, title: "SOS", language: "en" },
    { id: 66, title: "Ring Ring", language: "en" },
    { id: 67, title: "Under Attack", language: "en" },
    { id: 68, title: "I Have a Dream", language: "en" },
    { id: 69, title: "One of Us", language: "en" },
    { id: 70, title: "Eagle", language: "en" },
    { id: 71, title: "Happy New Year", language: "en" },
    { id: 72, title: "Knowing Me, Knowing You", language: "en" },
    { id: 73, title: "Rock Me", language: "en" },
    { id: 74, title: "Tiger", language: "en" },
    { id: 75, title: "Move On", language: "en" },
    { id: 76, title: "When I Kissed the Teacher", language: "en" },
    { id: 77, title: "Does Your Mother Know", language: "en" },
    { id: 78, title: "Angel Eyes", language: "en" },
    { id: 79, title: "Lovers (Live a Little Longer)", language: "en" },
    { id: 80, title: "Kisses of Fire", language: "en" },
    { id: 81, title: "Me and I", language: "en" },
    { id: 82, title: "I Do, I Do, I Do, I Do, I Do", language: "en" },
    { id: 83, title: "The Day Before You Came", language: "en" },
    { id: 84, title: "Our Last Summer", language: "en" },
    { id: 85, title: "On and On and On", language: "en" },
    { id: 86, title: "Hole in Your Soul", language: "en" },
    { id: 87, title: "As Good as New", language: "en" },
    { id: 88, title: "The Piper", language: "en" },
    { id: 89, title: "Lovelight", language: "en" },
    { id: 90, title: "When All Is Said and Done", language: "en" },
    { id: 91, title: "My Mama Said", language: "en" },
    { id: 92, title: "What About Livingstone", language: "en" },
    { id: 93, title: "Sitting in the Palmtree", language: "en" },
    { id: 94, title: "King Kong Song", language: "en" },
    { id: 95, title: "I've Been Waiting for You", language: "en" },
    { id: 96, title: "Dance (While the Music Still Goes On)", language: "en" },
    { id: 97, title: "Honey, Honey", language: "en" },
    { id: 98, title: "Watch Out", language: "en" },
    { id: 99, title: "What’s the Name of the Game", language: "en" },
    { id: 100, title: "Gonna Sing You My Lovesong", language: "en" },
];

function muestraPartituras(){
    // Selecciona el tbody de la tabla donde se añadirán las filas
    const tbody = document.querySelector('tbody');

    // Itera sobre cada canción en el array de partitures
    partitures.forEach(song => {
        // Crea una nueva fila de tabla
        const tr = document.createElement('tr');

        // Crea una celda para el título y añade el contenido
        const tdTitle = document.createElement('td');
        tdTitle.textContent = song.title;
        tr.appendChild(tdTitle);

        // Crea una celda para el idioma original y añade el contenido
        const tdLanguage = document.createElement('td');
        tdLanguage.textContent = song.language;
        tr.appendChild(tdLanguage);

        // Crea una celda para las acciones
        const tdActions = document.createElement('td');

        // Crea el botón de editar
        const editButton = document.createElement('button');
        const iconoEdit = document.createElement('i');
        iconoEdit.className = 'fas fa-edit';
        const textoEditar = document.createTextNode('Editar');
        
        editButton.appendChild(iconoEdit);
        editButton.appendChild(textoEditar);
        tdActions.appendChild(editButton);

        // Crea el botón de borrar y añade el contenido
        const deleteButton = document.createElement('button');
        const iconoDelete = document.createElement('i');
        iconoDelete.className = 'fas fa-trash';
        const textoBorrar = document.createTextNode('Esborrar');
        
        deleteButton.appendChild(iconoDelete);
        deleteButton.appendChild(textoBorrar);
        tdActions.appendChild(deleteButton);

        // Añade la celda de acciones a la fila
        tr.appendChild(tdTitle)
        tr.appendChild(tdLanguage)
        tr.appendChild(tdActions);

        // Añade la fila completa al tbody
        tbody.appendChild(tr); 
    });
}
