const bugButton = document.querySelectorAll(".button");

function handleClick() {
    alert("¡Felicitaciones! Encontraste un Bug. ¡Ve a reportarlo!");
}
bugButton.forEach(function(boton) {
    boton.addEventListener("click", handleClick);
});