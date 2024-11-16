// console.log -> used to print output
console.log("Yashas");
let a = 5;
let b = 10;
console.log("Sum is:", (a+b));

let pen = 10;
let car = 15;
// New way -> using back ticks(`) and dollor($) -> `------ ${} ------- `
let output = `Total of both ${pen+car} rupees`;
console.log(output);

// Comparsion 
let age = 18;
console.log(age>=18);
console.log(4==4);

// == -> compares value, not type
// === -> comapres type & value (strict checking) 
// example -> 
// 123 == "123" --> true
// 123 ==== "123" --> false

// if(contition){
// Inside code}
let color="Green"
if(color=="red"){
    console.log("Stop");
}
if(color=="yellow"){
    console.log("Slow Down");
}
if(color=="Green"){
    console.log("Go");
}

// Example of if,elif
let size ="S"
if(size=="XL"){
    console.log("Price is Rs 250");
}else if(size=="L"){
    console.log("Price is Rs 200");
}else if(size=="M"){
    console.log("Price is Rs 100");
}else if (size=="S") {
    console.log("Price is Rs 50");
}

// alert,.error,.warn,prompt
alert("Something is wrong")
console.log("Simple message");
console.error("Error in console");
console.warn("This is warning message");

let name = prompt("Enter your name ");
console.log(name);