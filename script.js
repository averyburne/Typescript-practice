"use strict";
exports.__esModule = true;
// const convertToMeterSquared = (height: number, units: string): number => {
//     if (units === 'inches') {
//         return (height * 0.3048) ** 2
//     }
//     if 
// }
// setTimeout( () => {
//     console.log(heightHTML)
// }, 3000)
var calculateBMI = function () {
    console.log("Hi");
    var heightHTML = document.getElementById("height").value;
    var weightHTML = document.getElementById("weight").value;
    var heightInMeters = heightHTML * 0.0254;
    var weightInKg = weightHTML * 0.453592;
    var BMI = weightInKg / (Math.pow(heightInMeters, 2));
    return Math.round(BMI * 100) / 100;
};
var displayBMI = function () {
    var BMI = calculateBMI();
    var BMIRange;
    // console.log(weightHTML)
    if (BMI > 18 && BMI <= 25) {
        BMIRange = "Healthy";
    }
    else if (BMI < 18) {
        BMIRange = "Underweight";
    }
    else if (BMI > 25 && BMI <= 30) {
        BMIRange = "Overweight";
    }
    else if (BMI > 30) {
        BMIRange = "Obese";
    }
    document.getElementById("BMI-display").innerText = BMI.toString();
    document.getElementById("BMI-range").innerText = BMIRange;
};
document.getElementById("BMI-btn").addEventListener("click", function () {
    displayBMI();
});
