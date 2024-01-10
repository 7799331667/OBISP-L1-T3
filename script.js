function convertTemperature(inputType) {
    var celsiusInput = document.getElementById("inputCelsius").value;
    var fahrenheitInput = document.getElementById("inputFahrenheit").value;
    var kelvinInput = document.getElementById("inputKelvin").value;
  
    if (inputType === 'Celsius' && celsiusInput !== "") {
      var celsius = parseFloat(celsiusInput);
      var fahrenheit = (celsius * 9/5) + 32;
      var kelvin = celsius + 273.15;
  
      document.getElementById("resultCelsius").innerHTML = celsius + " Celsius";
      document.getElementById("resultFahrenheit").innerHTML = fahrenheit.toFixed(2) + " Fahrenheit";
      document.getElementById("resultKelvin").innerHTML = kelvin.toFixed(2) + " Kelvin";
    } else if (inputType === 'Fahrenheit' && fahrenheitInput !== "") {
      var fahrenheit = parseFloat(fahrenheitInput);
      var celsius = (fahrenheit - 32) * 5/9;
      var kelvin = (fahrenheit + 459.67) * 5/9;
  
      document.getElementById("resultCelsius").innerHTML = celsius.toFixed(2) + " Celsius";
      document.getElementById("resultFahrenheit").innerHTML = fahrenheit + " Fahrenheit";
      document.getElementById("resultKelvin").innerHTML = kelvin.toFixed(2) + " Kelvin";
    } else if (inputType === 'Kelvin' && kelvinInput !== "") {
      var kelvin = parseFloat(kelvinInput);
      var celsius = kelvin - 273.15;
      var fahrenheit = (kelvin * 9/5) - 459.67;
  
      document.getElementById("resultCelsius").innerHTML = celsius.toFixed(2) + " Celsius";
      document.getElementById("resultFahrenheit").innerHTML = fahrenheit.toFixed(2) + " Fahrenheit";
      document.getElementById("resultKelvin").innerHTML = kelvin + " Kelvin";
    } else {
      document.getElementById("resultCelsius").innerHTML = "";
      document.getElementById("resultFahrenheit").innerHTML = "";
      document.getElementById("resultKelvin").innerHTML = "";
    }
  }
  