export {}

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
    let heightInMeters: number = heightHTML*0.0254
    let weightInKg: number = weightHTML*0.453592
    let BMI = weightInKg/(heightInMeters**2)
    return Math.round(BMI * 100) / 100
}

const displayBMI = ():void => {
    let BMI = calculateBMI()
    let BMIRange: string
    // console.log(weightHTML)
    if(BMI > 18 && BMI <= 25) {
        BMIRange = "Healthy"
    } else if (BMI < 18 && BMI > 0) {
        BMIRange = "Underweight"
    } else if (BMI > 25 && BMI <= 30) {
        BMIRange = "Overweight"
    } else if (BMI > 30) {
        BMIRange = "Obese"
    } else {
        BMIRange = "Invalid"
        document.getElementById("BMI-display").innerText = ''
        document.getElementById("BMI-range").innerText = BMIRange
        return
    }
    document.getElementById("BMI-display").innerText = BMI.toString();
    document.getElementById("BMI-range").innerText = BMIRange
}

document.getElementById("BMI-btn").addEventListener("click", () => {
    displayBMI();
})
