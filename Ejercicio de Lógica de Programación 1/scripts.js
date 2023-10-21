// Solicitar tres números al usuario y almacenarlos en variables
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Verificar si los datos ingresados son números
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Por favor, ingrese números válidos.");
} else {
    // Ordenar los números de mayor a menor
    let numerosDesc = [num1, num2, num3].sort(function (a, b) {
        return b - a;
    });
    console.log("Números de mayor a menor: " + numerosDesc.join(", "));

    // Ordenar los números de menor a mayor
    let numerosAsc = [num1, num2, num3].sort(function (a, b) {
        return a - b;
    });
    console.log("Números de menor a mayor: " + numerosAsc.join(", "));

    // Verificar si los números son iguales
    if (num1 === num2 && num2 === num3) {
        console.log("Los 3 números son iguales.");
    }
}
