// let myDate = new Date()
// console.log(myDate);
// console.log(typeof(myDate));
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 1, 23) // Month starts from 0, 0th month is January
// console.log(myCreatedDate.toString());


// let myCreatedDateTwo = new Date("2023-01-23") 
// console.log(myCreatedDateTwo.toString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);


console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));




