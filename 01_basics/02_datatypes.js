"use strict"; // Treat all JS code as newer version

// alert("hello")  // This will not work in node. This will work in browser

console.log(3 + 3); 
console.log("Santosh");

/*
Documentation::
https://developer.mozilla.org/en-US/docs/Web/JavaScript
https://tc39.es/ecma262/

*/

let name = "Santosh"
let age = 26
let isLoogedIn = false


const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);


let bigNumber = 95541654654654541543454n

/*
Primitiev datetypes
======================
number => 2 to power 53
bigint
string => ""
boolean
null => standalone value
undefined 
symbol => unique 
*/

console.log(typeof null) // It is an object
console.log(typeof undefined) // It is undefined


const heros = ["Spiderman", "Ironman", "Thor"] // Array

let myObj = { 
    name: "Santosh",
    age: 18
} // Object

const myFunction = function(){
    console.log("Hello")
} // function object

console.log(typeof(heros));
console.log(typeof(myObj));
console.log(typeof(myFunction));

