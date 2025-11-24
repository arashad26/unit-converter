/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("num-input")
const convertBtn = document.getElementById("btn")
const lengthResultEl = document.getElementById("length-output")
const volumeResultEl = document.getElementById("volume-output")
const massResultEl = document.getElementById("mass-output")

function convert(num) {
    // Length Conversion
    const metersToFeet = (num * 3.281).toFixed(3)
    const feetToMeters = (num / 3.281).toFixed(3)
    lengthResultEl.textContent = `${num} meters = ${metersToFeet} feet | ${num} feet = ${feetToMeters} meters`

    // Volume Conversion
    const litersToGallons = (num * 0.264).toFixed(3)
    const gallonsToLiters = (num / 0.264).toFixed(3)
    volumeResultEl.textContent = `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters`

    // Mass Conversion
    const kilosToPounds = (num * 2.204).toFixed(3)
    const poundsToKilos = (num / 2.204).toFixed(3)
    massResultEl.textContent = `${num} kilos = ${kilosToPounds} pounds | ${num} pounds = ${poundsToKilos} kilos`
}

convertBtn.addEventListener("click", function() {
    const inputValue = Number(inputEl.value)
    convert(inputValue)
})