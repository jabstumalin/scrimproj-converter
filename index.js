/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input');

let lengthEl = document.getElementById('length-el');
let volEl = document.getElementById('vol-el');
let weightEl = document.getElementById('weight-el');

function meterFeet() {
    let input = inputEl.value;
    
    let feet = input * 3.281;
    let meter = input / 3.281;
    
    let gallon = input * 0.264;
    let liter = input / 0.264;

    let pound = input * 2.204;
    let kilogram = input / 2.204;

    lengthEl.textContent = input + " meters" + " = " + feet.toFixed(3) + " feet" + " | " + input + " feet" + " = " + meter.toFixed(3) + " meters";
    volEl.textContent = input + " liters" + " = " + gallon.toFixed(3) + " gallon" + " | " + input + " gallon" + " = " + liter.toFixed(3) + " liters";
    weightEl.textContent = input + " kilos" + " = " + pound.toFixed(3) + " pounds" + " | " + input + " pound" + " = " + kilogram.toFixed(3) + " kilos";
}