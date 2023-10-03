
function fahrenheitToCelsius(fahrenheit: number) {
    // Convert Fahrenheit to Celsius using the formula: (F - 32) * 5/9
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

function celsiusToFahrenheit(celsius: number) {
    // Convert Celsius to Fahrenheit using the formula: (C * 9/5) + 32
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}