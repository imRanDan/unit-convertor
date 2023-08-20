/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


convertBtn.addEventListener("click", function() {
    console.log('btn is working :)')
})

function lengthConversion(n) {
    return (n * 3.281)
}

function volumeConversion(n) {
    return (n * 0.264)
}

function massConversion(n) {
    return (n * 2.204)
}

console.log(massConversion(1))