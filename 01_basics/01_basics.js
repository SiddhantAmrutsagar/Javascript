const accountId = 1234//cannot be changed
let accountEmail = "123@gmail.com"//can be changed
var accountPassword = 12345//prefer not to use because of issue of block scope and function scope
accountCity = "jaipur"
let accountState;

console.table({accountEmail,accountId,accountPassword, accountCity, accountState})

