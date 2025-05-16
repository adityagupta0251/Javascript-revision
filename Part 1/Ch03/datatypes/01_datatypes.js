"use strict"; // treat all code as strict JS & as js code in newer version

// alert("Hello!"); show alert box with message & we are using node js not browser


// Good Practices
console.log(3 + 3); // print to console
// Output will be : 6



// Not a good Practices
console.log(4 + 
    6); 


// Data Types in javascript

let name = "Aditya Gupta"; // string
let age = 16; // number
let isLoggedIn = true; // boolean


// Number => 2 to power 53
// BigInt 

// String => "" 
// String => ''

// Boolean => true/false

// null => standalone value
// undefined => no value

let state = null; // null


// Symbol => unique identifier




// Object => collection of key value pairs

let user = {
    name: "Aditya",
    age: 16,
    isLoggedIn: true,
    state: null,
    country: "India",
    hobbies: ["coding", "reading"],
    address: {
        city: "Delhi",
        state: "Delhi"
    }

};

// Typeof method : 
console.log(typeof user); // object
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // object
console.log(typeof null); // object


// Complete Oulput will be :
//  node 01_datatypes.js
// 6
// 10
// object
// string
// number
// boolean
// object
// object