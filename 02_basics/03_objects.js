// Objects
// Singelton
// Object literals

// Object.create

const mySym = Symbol("key1")

const JSUser= {
    name: "Santosh",
    age: 15,
    [mySym]: "myKey1", // Notation to add a symbol to an object
    "Full Name": "Santosh Achary",
    location: "Delhi",
    email: "san@s0s.in",
    isLoggedin: false,
    lastLoginDays: ["Mon", "Sat"]
}

console.log(JSUser.name);
console.log(JSUser["name"]);

console.log(JSUser[mySym]);
console.log(JSUser["Full Name"]);

JSUser.email = "san@meta.com"
console.log(JSUser);

// Object.freeze(JSUser)
JSUser.email = "san@apple.com"
console.log(JSUser)

JSUser.greeting = function(){
    console.log("Hello JS Users!!");
}

console.log(JSUser.greeting());

JSUser.greetingTwo = function(){
    console.log(`hello !! Mr. ${this.name}`);
}

console.log(JSUser.greetingTwo());