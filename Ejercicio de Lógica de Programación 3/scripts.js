function calcularFactorial() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');

    function calcularFactorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * calcularFactorial(num - 1);
        }
    }

    const factorial = calcularFactorial(numero);
    resultadoDiv.textContent = `El factorial de ${numero} es: ${factorial}`;
}
const btn = document.querySelector(".btn")

btn.addEventListener("click", e => {

    calcularFactorial()

})