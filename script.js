"use strict";
exports.__esModule = true;
var nameHTML = document.getElementById("name");
var btnGet = document.getElementById('btn-get');
var nameVal = nameHTML.value;
btnGet.addEventListener('click', function () {
    document.getElementById("box-text").innerText = nameHTML.value;
    console.log(nameVal);
});
