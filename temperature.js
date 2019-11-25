const readlineSync = require("readline-sync");

let originScale = readlineSync.question("\nEnter an origin scale: ");
originScale = originScale.toLowerCase();
while (originScale =! "f" || originScale =! "c" || originScale =! "k") {
  originScale = readlineSync.question("Enter an origin scale: ");
}

let destinationScale = readlineSync.question("\nEnter a destination scale: ");
destinationScale = destinationScale.toLowerCase();

while (destinationScale =! "f" || destinationScale =! "c" || destinationScale =! "k") {
  destinationScale = readlineSync.question("Enter a destination scale: ");
}

let temperature = Number(readlineSync.question("\nEnter a temperature: "));
while (temperature.isNaN() == true) {
  originScale = readlineSync.question("Enter an origin scale: ");
}

if (originScale == "f") {
  if (destinationScale == "c") {
    newTemperature = (temperature - 32) * (5/9);
    console.log(originScale + "\u00b0" + originScale + " equals " + newTemperature + "\u00b0" + destinationScale + ".");
  }
  else {
    newTemperature = (temperature - 32) * (5/9) + 273.15;
    console.log(originScale + "\u00b0" + originScale + " equals " + newTemperature + "\u00b0" + destinationScale + ".");
  }
}
else if (origin scale == "c") {
  if (destinationScale == "f") {
    newTemperature = (temperature * (9/5)) + 32;
    console.log(originScale + "\u00b0" + originScale + " equals " + newTemperature + "\u00b0" + destinationScale + ".");
  }
  else {
    newTemperature = temperature + 273.15;
    console.log(originScale + "\u00b0" + originScale + " equals " + newTemperature + "\u00b0" + destinationScale + ".");
  }
}

else {
  if (destinationScale == "f") {
    newTemperature = (temperature - 273.15) * (9/5) + 32;
    console.log(originScale + "\u00b0" + originScale + " equals " + newTemperature + "\u00b0" + destinationScale + ".");
  }
  else {
    newTemperature = temperature - 273.15;
    console.log(originScale + "\u00b0" + originScale + " equals " + newTemperature + "\u00b0" + destinationScale + ".");
  }
}
