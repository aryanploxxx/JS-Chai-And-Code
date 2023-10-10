let score = 33

console.log(typeof score)
console.log(typeof(score))
// Both are acceptable methods

/*-------------- [ Case 1 ]--------------*/
let value = Number(score)
// Convert the datatype of score in number - N in Number method is capital
console.log(typeof value)
// number
console.log(value)
// 33

/*-------------- [ Case 2 ]--------------*/
let score = "33abc"
let value = Number(score)
console.log(typeof value)
// number
console.log(value)
// NaN

/*-------------- [ Case 3 ]--------------*/
let score = true
let value = Number(score)
console.log(typeof value)
// number
console.log(value)
// 1

/*-------------- [ Case 4 ]--------------*/
let score1 = null
let value2 = Number(score1)
console.log(typeof value2)
// number
console.log(value2)
// 0

/*-------------- [ Case 5 ]--------------*/
let score = undefined
let value1 = Number(score)
console.log(typeof value1)
// number
console.log(value1)
// NaN

/*-------------- [ Case 6 ]--------------*/
let scoree = "aryan"
let valueee = Number(scoree)
console.log(typeof valueee)
// number
console.log(valueee)
// NaN


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
// boolean
console.log(booleanIsLoggedIn)
// true

// 1 => true
// 0 => false
// "" => false [empty string]
// "aryan" => true


let num = 33
let stringToNum = String(num)
console.log(typeof stringToNum)
// String
console.log(stringToNum)
// 33


/*-------------- [ OPERATORS ]--------------*/
const valuee = 3
let negValue = -valuee
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.lo(2*2);
console.lo(2**3);   // Exponent
console.log(2/3);
console.log(2%3);   // Remainder


/*-------- [ Confusing String and Num Conversions ]--------*/
console.log("1" + 2)
// 12
console.log(l + "2")
// 12
console.log("1" + 2 + 2)
// 122
console.log(l + 2 + "2")
// 32
console.log(true)
// true
console.log(+true)
// 1 - Important to note - Conversion happened using +
console.log(+"")
// 0 - Conversion happened using +

counter++