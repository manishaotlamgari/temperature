function convertTemperature() {
    const inputTemperature = document.getElementById('inputTemperature').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const output = document.getElementById('output');

    if (inputTemperature === '') {
        output.textContent = 'Please enter a temperature value.';
        return;
    }

    let convertedTemperature;
    let outputUnit;

    if (inputUnit === 'Celsius') {
        convertedTemperature = (inputTemperature * 9/5) + 32;
        outputUnit = 'Fahrenheit';
    } else {
        convertedTemperature = (inputTemperature - 32) * 5/9;
        outputUnit = 'Celsius';
    }

    output.textContent = `${inputTemperature} ${inputUnit} is equal to ${convertedTemperature.toFixed(2)} ${outputUnit}.`;
}

