function convertTemperature() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultBox = document.getElementById("resultBox");

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
    resultBox.innerHTML = `Converted Temperature: <strong>${convertedTemp.toFixed(
      2
    )}°${toUnit}</strong>`;
  }

  function resetForm()
  {
    document.getElementById("temperature").value= "";
  }

  function swap()
  {
    let fromUnit=document.getElementById("fromUnit").value;
    let toUnit=document.getElementById("toUnit").value;
    console.log(fromUnit+" "+toUnit);

    let conversionKey = fromUnit + "_" + toUnit;

    switch (conversionKey) {
      case "C_F":
        document.getElementById("tc").value= document.getElementById("tf").innerHTML;
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

  }