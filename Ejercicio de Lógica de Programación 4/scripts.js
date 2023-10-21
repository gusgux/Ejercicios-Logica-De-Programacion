function generarFibonacci() {
    var numero = parseInt(document.getElementById("numero").value);
    var fibonacci = [0, 1];

    for (var i = 2; i < numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    var resultado = fibonacci.join(', ');
    document.getElementById("resultado").textContent = resultado;
}
const btn = document.querySelector(".btn")

btn.addEventListener("click", e => {

    generarFibonacci();

})