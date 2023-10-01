console.log("Aryan")

const accountID = 232142
// can't change/redefine the values of the variables declared using the const keywords
let accountEmail = "aryan@google.com"
// let keyword is used in modern JS
var accountPassword = "9y8y@*bn"
// var keyword has issues with scoping, any function/ piece of code can call it anytime unline locally scoped variables
accountCity = "Jaipur"
// It is not necessary to add a keyword before a variablle name, however it is highly not recommended
let accountRandom;
// Defining a variable, but not declaring it will result in 'undefined'

console.log(accountID)
console.table([accountID, accountEmail, accountPassword, accountRandom])