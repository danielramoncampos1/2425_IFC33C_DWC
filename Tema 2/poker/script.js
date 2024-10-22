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
    //Se obtiene el valor de cada carta (por ejemplo, "jack", "king", "ace")
    //dividiendo la cadena del nombre de la carta en partes y cogiendo la primera parte
    let cardValues = cards.map(card => card.split('_')[0]);  
    //Se crea un objeto counts que cuenta cuántas veces aparece cada valor de carta
    let counts = {};
    cardValues.forEach(value => {
        /*
        Aquí se verifica si counts[value] ya tiene un valor asignado 
        (es decir, si el valor de carta value ya ha sido contado antes). 
        Si counts[value] no tiene un valor (es undefined), se utiliza 0 como valor por defecto
        Después de obtener el valor actual de counts[value] 
        (o 0 si no ha sido contado antes), se le suma 1. Esto incrementa el conteo de la carta actual
        */
        counts[value] = (counts[value] || 0) + 1;
    });
    //se verifica si alguno de los valores en counts es igual a 2, lo que indicaría una pareja
    return Object.values(counts).some(count => count === 2);
}
