export {}

let nameHTML: any = document.getElementById("name");
let btnGet = document.getElementById('btn-get')
let nameVal: number = nameHTML.value
let heightHTML: any = (<HTMLInputElement>document.getElementById("height")).value;
let weightHTML: any = (<HTMLInputElement>document.getElementById("weight"))

// const convertToMeterSquared = (height: number, units: string): number => {
//     if (units === 'inches') {
//         return (height * 0.3048) ** 2
//     }
//     if 
// }
// setTimeout( () => {
//     console.log(heightHTML)
// }, 3000)
const calculateBMI = (): number => {
    console.log("Hi")
    let heightHTML: any = (<HTMLInputElement>document.getElementById("height")).value
    let weightHTML: any = (<HTMLInputElement>document.getElementById("weight")).value
    return weightHTML/(heightHTML**2)
}

const displayBMI = ():void => {
    console.log(calculateBMI())
    // console.log(weightHTML)
    document.getElementById("BMI-display").innerText = calculateBMI().toString();
}

btnGet.addEventListener('click', () => {
    document.getElementById("box-text").innerText = nameHTML.value
    console.log(nameVal)
})

