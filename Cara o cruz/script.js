document.getElementById("flipButton").addEventListener("click", flipCoin);

function flipCoin() {
    let resultText = document.getElementById("result");
    let coin = document.getElementById("coin");
    let result = Math.floor(Math.random() * 2) + 1 === 1 ? "Cara" : "Cruz";

    coin.textContent = "Lanzando...";
    resultText.textContent = "";

    setTimeout(() => {
        coin.textContent = result;
        resultText.textContent = "El resultado es: " + result;
    }, 1000);
}
