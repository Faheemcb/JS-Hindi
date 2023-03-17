const accountId = 14785;
let accoountEmail = "mohammed@gmail.com";
var accountPassword = "12345";
accountCity  = "Kerala"
let accountState
// accountId = 2  Not allowed

accountEmail = "ddhh";
accountPassword = "55757"
accountCity = "Goa";


console.log(accountId);

/*
Prefered not to use var because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])