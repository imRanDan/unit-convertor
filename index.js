/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let valueEl = document.getElementById("input-measurement")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")



function metersToFeet(numInput) {
    return (numInput * 3.281).toFixed(3)
}

function feetToMeters(numInput) {
    return (numInput / 3.281).toFixed(3)
}

function litersToGallons(numInput) {
    return (numInput * 0.264).toFixed(3)
}

function gallonsToLiters(numInput) {
    return (numInput / 0.264).toFixed(3)
}

function kilogramsToPounds(numInput) {
    return (numInput * 2.204).toFixed(3)
}

function poundsToKilograms(numInput) {
    return (numInput / 2.204).toFixed(3)
}

convertBtn.addEventListener("click", function() {
    numInput = valueEl.value
    valueEl.value = ""
    lengthEl.innerText = `${numInput} meters = ${metersToFeet(numInput)} feet | ${numInput} feet = ${feetToMeters(numInput)} meters`
    volumeEl.innerText = `${numInput} liters = ${litersToGallons(numInput)} gallons | ${numInput} gallons = ${gallonsToLiters(numInput)} liters` 
    massEl.innerText = `${numInput} kilograms = ${kilogramsToPounds(numInput)} pounds | ${numInput} pounds = ${poundsToKilograms(numInput)} kilograms`
}) 