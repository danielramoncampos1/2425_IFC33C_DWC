const partitures = [
    { title: "Sant Antoni i el Dimoni", language: "ca" },
    { title: "La balanguera", language: "ca" },
    { title: "Joan petit", language: "ca" },
    { title: "Escriurem", language: "ca" },
    { title: "Tramuntana", language: "ca" },
    { title: "Una lluna a l'aigua", language: "ca" },
    { title: "Som Ocells", language: "ca" },
    { title: "La vie en rose", language: "fr" },
    { title: "Ne me quitte pas", language: "fr" },
    { title: "Les Champs-Élysées", language: "fr" },
    { title: "Comme d'habitude", language: "fr" },
    { title: "Non, je ne regrette rien", language: "fr" },
    { title: "L'hymne à l'amour", language: "fr" },
    { title: "Sous le ciel de Paris", language: "fr" },
    { title: "El perdón", language: "es" },
    { title: "Despacito", language: "es" },
    { title: "Bailando", language: "es" },
    { title: "Vivir mi vida", language: "es" },
    { title: "La bamba", language: "es" },
    { title: "La cucaracha", language: "es" },
    { title: "Héroe", language: "es" },
    { title: "Shape of You", language: "en" },
    { title: "Someone Like You", language: "en" },
    { title: "Rolling in the Deep", language: "en" },
    { title: "Hello", language: "en" },
    { title: "Thinking Out Loud", language: "en" },
    { title: "Perfect", language: "en" },
    { title: "Love Yourself", language: "en" },
    { title: "Bohemian Rhapsody", language: "en" },
    { title: "Stairway to Heaven", language: "en" },
    { title: "Hotel California", language: "en" },
    { title: "Imagine", language: "en" },
    { title: "Let it Be", language: "en" },
    { title: "Yesterday", language: "en" },
    { title: "Hey Jude", language: "en" },
    { title: "I Will Always Love You", language: "en" },
    { title: "My Heart Will Go On", language: "en" },
    { title: "Smells Like Teen Spirit", language: "en" },
    { title: "Billie Jean", language: "en" },
    { title: "Thriller", language: "en" },
    { title: "Like a Prayer", language: "en" },
    { title: "Respect", language: "en" },
    { title: "Good Vibrations", language: "en" },
    { title: "What's Going On", language: "en" },
    { title: "Born to Run", language: "en" },
    { title: "Superstition", language: "en" },
    { title: "Ain't No Sunshine", language: "en" },
    { title: "I Want to Hold Your Hand", language: "en" },
    { title: "All You Need Is Love", language: "en" },
    { title: "Waterloo", language: "en" },
    { title: "Fernando", language: "en" },
    { title: "Dancing Queen", language: "en" },
    { title: "Mamma Mia", language: "en" },
    { title: "Chiquitita", language: "en" },
    { title: "The Winner Takes It All", language: "en" },
    { title: "Take a Chance on Me", language: "en" },
    { title: "Thank You for the Music", language: "en" },
    { title: "Money, Money, Money", language: "en" },
    { title: "Lay All Your Love on Me", language: "en" },
    { title: "Voulez-Vous", language: "en" },
    { title: "Summer Night City", language: "en" },
    { title: "Gimme! Gimme! Gimme!", language: "en" },
    { title: "Super Trouper", language: "en" },
    { title: "The Name of the Game", language: "en" },
    { title: "SOS", language: "en" },
    { title: "Ring Ring", language: "en" },
    { title: "Under Attack", language: "en" },
    { title: "I Have a Dream", language: "en" },
    { title: "One of Us", language: "en" },
    { title: "Eagle", language: "en" },
    { title: "Happy New Year", language: "en" },
    { title: "Knowing Me, Knowing You", language: "en" },
    { title: "Rock Me", language: "en" },
    { title: "Tiger", language: "en" },
    { title: "Move On", language: "en" },
    { title: "When I Kissed the Teacher", language: "en" },
    { title: "Does Your Mother Know", language: "en" },
    { title: "Angel Eyes", language: "en" },
    { title: "Lovers (Live a Little Longer)", language: "en" },
    { title: "Kisses of Fire", language: "en" },
    { title: "Me and I", language: "en" },
    { title: "I Do, I Do, I Do, I Do, I Do", language: "en" },
    { title: "The Day Before You Came", language: "en" },
    { title: "Our Last Summer", language: "en" },
    { title: "On and On and On", language: "en" },
    { title: "Hole in Your Soul", language: "en" },
    { title: "As Good as New", language: "en" },
    { title: "The Piper", language: "en" },
    { title: "Lovelight", language: "en" },
    { title: "When All Is Said and Done", language: "en" },
    { title: "My Mama Said", language: "en" },
    { title: "What About Livingstone", language: "en" },
    { title: "Sitting in the Palmtree", language: "en" },
    { title: "King Kong Song", language: "en" },
    { title: "I've Been Waiting for You", language: "en" },
    { title: "Dance (While the Music Still Goes On)", language: "en" },
    { title: "Honey, Honey", language: "en" },
    { title: "Watch Out", language: "en" },
    { title: "What’s the Name of the Game", language: "en" },
    {  title: "Gonna Sing You My Lovesong", language: "en" },
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
