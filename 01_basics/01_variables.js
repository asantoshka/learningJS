const accountId = 14453
let accountEmail = "santosh@google.com"
var accountPassword = "123456"
accountCity = "Delhi"
let accountState;

// accountId = 2

accountEmail = "sa@sa.com"
accountPassword = "1231231321"
accountCity = "Pune"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
1. Prefer not to use var, because of issue in block scope
2. When a variable is defined with let keyword with out any value, then it stores it's value as undefined.  
*/
