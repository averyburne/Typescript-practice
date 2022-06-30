export {}

let nameHTML: any = document.getElementById("name");
let btnGet = document.getElementById('btn-get')
let nameVal: string = nameHTML.value

btnGet.addEventListener('click', () => {
    document.getElementById("box-text").innerText = nameHTML.value
    console.log(nameVal)
})
