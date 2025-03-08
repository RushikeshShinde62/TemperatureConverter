function convertTemperature() {
  let temp = parseFloat(document.getElementById("temperature").value);
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;
  let resultBox = document.getElementById("resultBox");

  if (isNaN(temp)) {
    resultBox.innerHTML = `<span class="text-danger">Please enter a valid temperature.</span>`;
    document.getElementById("resultBox").classList.add("alert-danger"); // Adds a class
    document.getElementById("resultBox").classList.remove("alert-info"); // Removes a class 
    return;
  }
  else
  {
      document.getElementById("resultBox").classList.add("alert-info"); // Adds a class
      document.getElementById("resultBox").classList.remove("alert-danger"); // Removes a class
      
  }

  let convertedTemp;
  let conversionKey = fromUnit + "_" + toUnit;

  switch (conversionKey) {
      case "C_F":
          convertedTemp = (temp * 9) / 5 + 32;
          break;
      case "C_K":
          convertedTemp = temp + 273.15;
          break;
      case "F_C":
          convertedTemp = ((temp - 32) * 5) / 9;
          break;
      case "F_K":
          convertedTemp = ((temp - 32) * 5) / 9 + 273.15;
          break;
      case "K_C":
          convertedTemp = temp - 273.15;
          break;
      case "K_F":
          convertedTemp = ((temp - 273.15) * 9) / 5 + 32;
          break;
      default:
          convertedTemp = temp;
  }

  resultBox.innerHTML = `Converted Temperature: <strong>${convertedTemp.toFixed(2)}°${toUnit}</strong>`;
}

function resetForm() {
  document.getElementById("temperature").value = "";
  document.getElementById("fromUnit").value = "C";
  document.getElementById("toUnit").value = "F";
  document.getElementById("resultBox").innerHTML = `<span><strong>Result will be here</strong></span>`;
}

function swap() {
  let fromUnit = document.getElementById("fromUnit");
  let toUnit = document.getElementById("toUnit");

  let temp = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = temp;

  convertTemperature();
}
  
