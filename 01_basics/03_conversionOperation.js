let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score2 = "33ab"
let valueInNumber2 = Number(score2)

console.log(typeof valueInNumber2);
console.log(valueInNumber2);

/*
"33" => 33
"33abc" => NaN
true => 1
null => 0
*/

/*
Type conversion
===============
Number
Boolean
String
*/

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


// Pre and post Increment operation 
// ================================
// let counter = 5
// counter++
// console.log(counter)
// console.log(counter++)
// console.log(counter)
// console.log(++counter)
// console.log(counter)