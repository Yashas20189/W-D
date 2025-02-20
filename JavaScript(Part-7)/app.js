// When you use this inside a function (eg: getAvg) or method, it refers to the object (eg: student) that is calling that function.

const student = {
    name: "Yashas",
    age:19,
    eng:95,
    maths:89,
    phy:98,
    getAvg(){
        let avg = (this.eng+ this.maths + this.phy)/3;
        console.log(`${this.name} got an avg of ${avg}`);
    }
}

// `${sf}` -> to print our name 
// By default (in the global context), this refers to the global object (window in browsers)

function getAvg(){
    console.log(this);
}

//-----------------------------------------------------------------------------------------------------------------------


// try block: You put the code that might throw an error inside the try block.
// catch block: If an error happens in the try block, the program jumps to the catch block to handle the error gracefully.(by telling we found an error)

console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch{
    console.log("caught an error.. a is not defined");
}
console.log("hello2");
console.log("hello2");

//-----------------------------------------------------------------------------------------------------------------------

// Arrow function -> 
// const functionName = (parameters) => { function body };

const add1 = (a,b) => {
    console.log(a+b);
};

// Implicit Return: If the function body consists of a single expression, you can omit the return keyword and the curly braces. The result of the expression is automatically return 

const add2 = (a,b) => a + b ;
const mul = (a,b) => a*b;
//-----------------------------------------------------------------------------------------------------------------------

// setTimeout(function, delay);
// function: The code you want to run after the delay (usually a function).
// delay: The time (in milliseconds) you want to wait before the function runs (1000 ms = 1 second)

console.log("Hi there!!");

setTimeout( () => {console.log("NHCE");},2000);

console.log("Welcome to");

//-----------------------------------------------------------------------------------------------------------------------

// setInterval(function, interval);
// function: The code (usually a function) that you want to run repeatedly.
// interval: The time interval (in milliseconds) between each function execution.
// To stop you need to store its ID in a variable and then use clearInterval

let id = setInterval( () => {
    console.log("NHCE");
},2000);

console.log(id);

// clearInterval();

//-----------------------------------------------------------------------------------------------------------------------

// this with arrow function 
const student1 = {
    name: "Yashas",
    marks: 95,
    prop: this, // global scope
    getName: function () {
        return this.name;
    },
    getMarks: () => {
        console.log(this); // parent's scope
        return this.marks;
    },
    getInfo1: function() {
        setTimeout( () => {
            console.log(this);
        },2000);
    },
    getInfo2: function(){
        setTimeout(function (){
            console.log(this);
        },2000);
    }
};

// If you call the function as a method of an object, this refers to that object.
// If you call the arrow function as a method of an object, this refers to that parent's scope (like global scope)