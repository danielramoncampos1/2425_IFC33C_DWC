//Creamos un array de imágenes de cartas
const cards = [
    '2_of_clubs.png', '3_of_clubs.png', '4_of_clubs.png', '5_of_clubs.png', '6_of_clubs.png', 
    '7_of_clubs.png', '8_of_clubs.png', '9_of_clubs.png', '10_of_clubs.png',
    '2_of_diamonds.png', '3_of_diamonds.png', '4_of_diamonds.png', '5_of_diamonds.png', 
    '6_of_diamonds.png', '7_of_diamonds.png', '8_of_diamonds.png', '9_of_diamonds.png', '10_of_diamonds.png',
    '2_of_hearts.png', '3_of_hearts.png', '4_of_hearts.png', '5_of_hearts.png', '6_of_hearts.png', 
    '7_of_hearts.png', '8_of_hearts.png', '9_of_hearts.png', '10_of_hearts.png', 
    '2_of_spades.png', '3_of_spades.png', '4_of_spades.png', '5_of_spades.png', '6_of_spades.png', 
    '7_of_spades.png', '8_of_spades.png', '9_of_spades.png', '10_of_spades.png'
];

//Función para obtener un número aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function jugar() {
    let selectedCards = []; //array vacío que almacenará las cartas seleccionadas
    let cardContainer = document.getElementById('cards-container'); //es una referencia al elemento HTML donde se mostrarán las cartas
    let resultContainer = document.getElementById('result'); //es una referencia al elemento HTML donde se mostrará el resultado del juego.
    
    cardContainer.innerHTML = '';
    resultContainer.innerHTML = '';

    //Selección de cartas aleatorias
    while (selectedCards.length < 5) {
        let randomIndex = getRandomInt(cards.length);
        let selectedCard = cards[randomIndex];
        if (!selectedCards.includes(selectedCard)) {
            selectedCards.push(selectedCard);
        }
    }

    //Mostrar las cartas seleccionadas
    selectedCards.forEach(card => {
        let img = document.createElement('img');
        img.src = `cards/${card}`;
        cardContainer.appendChild(img);
    });

    //Comprobación de combinaciones ganadoras
    if (isPair(selectedCards)) {
        resultContainer.textContent = "¡Tienes una pareja!";
    } else {
        resultContainer.textContent = "No tienes una combinación ganadora.";
    }
}

//Función para Verificar Parejas
function isPair(cards) {
    const counts = {};
    
    // Contamos las apariciones de cada valor de carta
    for (const card of cards) {
        const value = card.split('_')[0];
        counts[value] = (counts[value] || 0) + 1;
    }
    
    // Comprobamos si hay algún valor que aparece exactamente 2 veces
    return Object.values(counts).includes(2);
}
