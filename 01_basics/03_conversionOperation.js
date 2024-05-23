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