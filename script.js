let rain = prompt ("How many inches of rain fell?");

let inches = "*"
console.log("Rainfall: " + inches.repeat(rain));

let yield = 50

if (rain < 10) {
    yield = yield*.8
}
if (rain >= 20) {
    yield = yield*.9
} else {
    yield === yield
}


let fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "no") {
    console.log("The yield should be " + yield + " bushels per acre.")
}
if (fertilizer === "yes") {

    var type = prompt("Did you use regular fertilizer or premium fertilizer?");
}
if (type === "regular") {
    yield = yield*1.1
    console.log("The yield should be " + yield + " bushels per acre.")
} 
if (type === "premium") {
     yield = yield*1.15
     console.log("The yield should be " + yield + " bushels per acre.")
}