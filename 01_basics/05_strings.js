const name = "Santosh"
const repoCount = 10

console.log(name + " Repo count " + repoCount); 

console.log(`My name is ${name} and my repo count is ${repoCount}`); // String Interpolation

const game = new String("Santosh") // Try this line ine browser console and type game and hit enter
console.log(game);
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(2));
console.log(game.indexOf('s'));

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://s0s.in/test%20box"
console.log(url.replace('%20','-'));
console.log(url.includes("s0s"));
console.log(url.includes("asd"));

const newStringTwo = "Hello my name is santosh"
console.log(newStringTwo.split(' '));