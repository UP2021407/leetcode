function convertTemperature(celsius) {
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius * 1.8 + 32;
    return [kelvin.toFixed(5), fahrenheit.toFixed(5)];
}

convertTemperature("36.50");