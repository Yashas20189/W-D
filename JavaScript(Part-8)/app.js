// Array Methods 

// for each -> The forEach method in JavaScript is used to execute a provided function once for each array element.

// array.forEach(function(element, index, array) {
//     Code to execute for each element
//   });

// el -> element 

let arr = [1,2,3,4,5]

arr.forEach((el) => {
    console.log(el);    // using arrow function
});

arr.forEach(function(el){
    console.log(el);    // using normal way
});

//-----------------------------------------------------------------------------------------------------------------------

// The map() method creates a new array by applying a function to each element of the original array. It doesn't modify the original array but returns a new one with transformed values.

let num = [1,2,3,4];

let double = num.map((el) => {
    return el*2;
});

//-----------------------------------------------------------------------------------------------------------------------

// The filter() method creates a new array with all elements that pass a test provided by a function. It only keeps elements that return true from the test function.

let num1 = [1,2,3,4,7,8,2,9,10,12,11];

let even = num1.filter((el) =>{
    return el%2 == 0; //even -> true, odd -> false
});

//-----------------------------------------------------------------------------------------------------------------------

// The reduce() function in JavaScript is like a "summary tool" for arrays. It takes all the values in an array and combines them into one single result.

let num2 = [1,2,3,4];

let finalVal = num2.reduce((res,el) => {
    console.log(res);
    return res+el;
});
console.log(finalVal);

// In simple steps:
// Start with 0 (the initial value).
// Add 1 (the first element) to 0, result is 1.
// Add 2 (the second element) to 1, result is 3.
// Add 3 (the third element) to 3, result is 6.
// Add 4 (the fourth element) to 6, result is 10

//-----------------------------------------------------------------------------------------------------------------------

// Default Parameters

function sum(a,b=2){
    return a+b;
}

// sum(1,4) -> 5
// sum(1) -> 3

//-----------------------------------------------------------------------------------------------------------------------

// In JavaScript, the spread operator (...) is used to expand elements of an array or object into individual elements

const str = "apnacollege";
console.log(...str);  

// Array Literals
const str1 = "apnacollege";
const newArr = [...str1];  
console.log(newArr); 

//Object Literals 
const person = { name: 'Alice', age: 25 };
const updatedPerson = { ...person, age: 26 };  // Only change the age
console.log(updatedPerson);  // Output: { name: 'Alice', age: 26 }

//-----------------------------------------------------------------------------------------------------------------------

// Rest Function -> The rest parameter in JavaScript is like a way to catch all extra things you pass into a function and put them in a array

function sum1(...numbers) {
    // 'numbers' is an array of all the numbers passed to the function
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum1(1, 2, 3)); // This adds 1 + 2 + 3 and gives 6

//-----------------------------------------------------------------------------------------------------------------------

// Array destructuring unpacks elements in order

let names = ["tony","bruce","peter","steve","yashas","chandan"];

let [winner,runnerup,...others] = names;

//-----------------------------------------------------------------------------------------------------------------------

// Object destructuring - You can extract properties from an object into variables

const person1 = {
    name: 'Yashas',
    age: 20,
    city: 'Bangalore',
    username: "yashas@2005",
    password: "abcd",
};

let{username,age: num3,city="pune"} = person1;

// when{username,age} -> type age to get age
// when{username,age: num3} -> type num3 to get age
// default will be banglore for city even if pune id given in argument