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
    return weightHTML / (Math.pow(heightHTML, 2));
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
