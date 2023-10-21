
var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var intentos = [];

function verificarNumero() {
    var numero = parseInt(document.getElementById("numero").value);

    if (numero >= 1 && numero <= 100) {
        console.log(numeroSecreto)
        intentos.push(numero);

        if (numero === numeroSecreto) {
            mostrarMensaje("Felicidades, adivinaste el número secreto.");
            mostrarIntentos();
        } else {
            mostrarMensaje("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
        }
    } else {
        mostrarMensaje("Por favor, ingresa un número del 1 al 100.");
    }

    document.getElementById("numero").value = "";
    document.getElementById("numero").focus();
}

function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").textContent = mensaje;
}

function mostrarIntentos() {
    var listaIntentos = "Números introducidos: " + intentos.join(", ");
    document.getElementById("intentos").textContent = listaIntentos;
}

const btn = document.querySelector(".btn")

btn.addEventListener("click", e => {

    verificarNumero()

})