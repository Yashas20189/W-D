// msg.trim(); -> used to remove whitespaces from both sides || No changes in original string
let msg = "   hel  lo   ";
// let password = prompt("Enter your password");
// console.log(password.trim());

// String are immutable (No changes can be made in original string)

// uppercase and lowercase
let name = "Yashas";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// indexOf -> returns first occurance of the string || if not found returns -1
let str="ILoveCoding";
console.log(str.indexOf("Love")); // 1
console.log(str.indexOf("x"));   //-1

// Method changing
let str1 ="  hello  ";
console.log(str1.trim().toUpperCase());

//slice -> returns part of original string || (start,end) - end index is not included in new string
console.log(str.slice(1,5));
console.log(str.slice(-1)); // str.slice(-num) = str.slice(length-num)

// replace -> search the word and replace it with new word 
console.log(str.replace("Love","do"));

// repeat -> will repeat the word as many time as mentioned
console.log(str.repeat(3));

// array -> linear collection of data 
let students = ["Yashas","Raj","Hithesh"];
let emptyarr = [];

// Arrays are mutable (Changes can be made in original array)
students[2]="Noel";
students[10]="Ash";
// length of arr = 11, will keep rest as empty
console.log(students);

// Array methods
// Push -> add to end
// Pop -> delete from end & returns it
// Unshift -> add to start
// Shift -> delete from start & returns it 

let num = [1,2,3,4];
console.log(num);
num.push(7);
console.log(num);
num.pop();
console.log(num);
num.unshift(0);
console.log(num);
num.shift();
console.log(num);

// indexOf -> returns index value of the array
// includes -> search for value

console.log(num.includes(7)); // false
console.log(num.includes(2)); // true

console.log(num.indexOf(7)); // -1
console.log(num.indexOf(3)); // 2

// concat -> merge 2 arrays
let num1 =[1,2,3,4];
let num2 =[5,62,27,81];
console.log(num1.concat(num2));

//reverse -> reverse the given array
console.log(num1.reverse());

// slice -> copies a portion of an array || (start,end)
console.log(num1.slice(1,3));

//splice -> learn more about it

//sort -> sort the array
let alpa =['a','s','d','k','q'];
console.log(alpa.sort());
console.log(num2.sort()); // doesnot work on numbers

//Array references -> address in memory
let arr=[1,2,3];
let arrcpy = arr; 
// pointing to same address

//Nested array - array of array
let num3=[[1,2],[3,4],[5,6]];
console.log(num3[2][1]);
