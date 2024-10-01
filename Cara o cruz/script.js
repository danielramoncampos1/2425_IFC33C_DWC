document.getElementById("flipButton").addEventListener("click", flipCoin);

function flipCoin() {
    let resultText = document.getElementById("result");
    let coin = document.getElementById("coin");
    let result = Math.random() < 0.5 ? "Cara" : "Cruz";

    coin.textContent = "Lanzando...";
    resultText.textContent = "";

    setTimeout(() => {
        coin.textContent = result;
        resultText.textContent = "El resultado es: " + result;
    }, 1000);
}
