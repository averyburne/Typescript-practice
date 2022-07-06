"use strict";
exports.__esModule = true;
var nameHTML = document.getElementById("name");
var btnGet = document.getElementById('btn-get');
var nameVal = nameHTML.value;
var heightHTML = document.getElementById("height").value;
var weightHTML = document.getElementById("weight");
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
    console.log(Math.round(4 * 100) / 100);
};
var displayBMI = function () {
    console.log(calculateBMI());
    // console.log(weightHTML)
    document.getElementById("BMI-display").innerText = calculateBMI().toString();
};
btnGet.addEventListener('click', function () {
    document.getElementById("box-text").innerText = nameHTML.value;
    console.log(nameVal);
});
