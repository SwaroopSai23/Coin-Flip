const flipButton = document.getElementById("flipButton");
const resultDisplay = document.getElementById("result");
const image = document.getElementById("resultantImage");
const flipGif = document.getElementById("flipGif");

flipButton.addEventListener("click", () => {
    resultDisplay.textContent = "Flipping...";

    flipGif.style.display = "block";
    flipGif.src = flipGif.src;


    setTimeout(() => {
        flipGif.style.display = "none";

        const result = Math.random() < 0.5 ? "Heads" : "Tails";

        if (result === "Heads") {
            image.innerHTML = '<img src="head.jpg" width="200" height="200" alt="Heads">';
        } else {
            image.innerHTML = '<img src="tails 1.png" width="200" height="200" alt="Tails">';
        }

        resultDisplay.textContent = `Result: ${result}`;
    }, 3000);
});
