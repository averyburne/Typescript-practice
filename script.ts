export {}

let nameHTML: any = document.getElementById("name");
let btnGet = document.getElementById('btn-get')
let nameVal: number = nameHTML.value
let firstNameHTML: any = document.getElementById("first-name");
let lastNameHTML: any = document.getElementById("last-name");
let weightHTML: any = document.getElementById("weight");


btnGet.addEventListener('click', () => {
    document.getElementById("box-text").innerText = nameHTML.value
    console.log(nameVal)
})
