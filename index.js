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


// function volumeConversion(n) {
//     return (valueInput * 0.264)
// }

// function massConversion(n) {
//     return (valueInput * 2.204)
// }



function lengthConversion(numInput) {
    return (numInput * 3.281)
}

convertBtn.addEventListener("click", function() {
    numInput = valueEl.value
    valueEl.value = ""
    lengthEl.innerText = `${numInput} meters = ${lengthConversion(numInput)} feet`
        
   
}) 