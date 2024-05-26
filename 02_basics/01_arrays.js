// Arrays

const myArr = [0, 1, 2, 3, 4 , 5]

const myArrTwo = new Array(1,2,3,4,5,6)

// console.log(myArrTwo[2]);

/*
If we put an array in browser console we will notice that 
there are prototypes of an array and 
we see more prototypes in side the prototypes for onemore time but not more than that.
*/

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // To add a value at the starting/0th index
// myArr.shift() // To remove a value from the starting/0th index

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join() // This will bind the array and returns a string value


// console.log(myArr);
// console.log(newArr); 

// Slice and Splice

// Slice doesn't manupulate the original array and extracts the required values
// splice manupulates the original array 

console.log("A " + myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B " + myArr);
const myn2 = myArr.splice(1,3)
console.log("C " + myArr);
console.log(myn2)
