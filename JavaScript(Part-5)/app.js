// Object literals -> (key,value) pair || No order of object || can store even array also

let student = {
    name:"Yashas",
    age: 18,
    cgpa: 9.1
};
console.log(student);

// To get any value -> student.name or student["name"]
// JS converts object key (number) also to string

// Update 
student.age = 20;
console.log(student);

// Add
student.city ="Banglore";
console.log(student);

// Delete any key,pair
delete student.cgpa;
console.log(student);

// Nested objects
let classInfo = {
    Yashas:{
        cgpa: 9.25,
        city:"TTR"
    },
    Raj:{
        cgpa: 9.35,
        city: "BLR"
    },
    Noel:{
        cgpa: 9.45,
        city: "Pune"
    }
}
console.log(classInfo);
console.log(classInfo.Yashas);
console.log(classInfo.Noel.city);

//Math Object
console.log(Math.PI);

 console.log(Math.abs(5.6));
 // Power
 console.log(Math.pow(2,5));
 // floor -> to give nearest small number
 console.log(Math.floor(5.9999));
 // ceil -> to give nearest large number
 console.log(Math.ceil(5.00001));
 // Random -> gives random integer
 console.log(Math.random());

 // To give a random number btw 0 to 100
 let num = Math.random();
 let step1 = num * 10;
 let step2 = Math.floor(step1);
 let step3 = step2 + 1;
 console.log(step3);