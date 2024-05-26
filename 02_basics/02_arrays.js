const marvelHeros = ["Thor", "Hulk", "BlackWidow"]
const dcHeros = ["batman", "superman", "flash"]

// const comicHeros = marvelHeros
// comicHeros.push(dcHeros) // This will add the full array as another member
// [ 'Thor', 'Hulk', 'BlackWidow', [ 'batman', 'superman', 'flash' ] ]

// const comicHeros = marvelHeros.concat(dcHeros)
// console.log(comicHeros);

// const comicHeros = [...marvelHeros, ...dcHeros] // ... <- Spread operator
// console.log(comicHeros);


// Flat method
// ========+++++++++++===============_________+++++++---_______
// const anotherArr = [1,3,1,[2,23,24],25,[20,87,19,[20,45,48,[23,45,678,2324,56],23],2445]]

// console.log(anotherArr.flat(Infinity));

console.log(Array.isArray("Santosh"));
console.log(Array.from("Santosh"));

let score1 = 100
let score2 = 200
let score3 = 200

console.log(Array.of(score1, score2, score3));