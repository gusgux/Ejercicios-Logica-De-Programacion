function convertirTemperatura() {
    // Obtener la temperatura en grados Celsius desde el input
    const tempCelsius = parseFloat(document.getElementById('tempCelsius').value);

    // Convertir de Celsius a Farenheit
    const tempFarenheit = (tempCelsius * 9 / 5) + 32;
    document.getElementById('tempFarenheit').textContent = `Temperatura en Farenheit: ${tempFarenheit.toFixed(2)} °F`;

    // Convertir de Celsius a Kelvin
    const tempKelvin = tempCelsius + 273.15;
    document.getElementById('tempKelvin').textContent = `Temperatura en Kelvin: ${tempKelvin.toFixed(2)} K`;
}

const btn = document.querySelector(".button")

btn.addEventListener("click", e => {
    console.log("hello");
    convertirTemperatura()

})