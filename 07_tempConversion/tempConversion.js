const convertToCelsius = function(far) {
  let validNumber = Number(((far-32)*(5/9)).toFixed(1));
  if (Number.isSafeInteger(validNumber)){ validNumber = Math.round(validNumber)}
  //return (Celsius*(9/5)+32).toFixed(1);
  return validNumber
};

const convertToFahrenheit = function(cel) {
  //return ((far-32)*(5/9)).toFixed(1);
  
  let validNumber = Number((cel*(9/5)+32).toFixed(1));
  if (Number.isSafeInteger(validNumber)){ validNumber = Math.round(validNumber)}
  return validNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
