let testScore = 33

console.log(typeof testScore)
console.log(typeof(testScore))
// Both are acceptable methods
// Will output - number

/*-------------- [ Case 1 ]--------------*/
let score1 = 33
let value1 = Number(score1)
// Convert the datatype of score1 in number - N in Number method is capital
console.log(typeof value1)
// number
console.log(value1)
// 33

/*-------------- [ Case 2 ]--------------*/
let score2 = "33abc"
let value2 = Number(score2)
console.log(typeof value2)
// number
console.log(value2)
// NaN

/*-------------- [ Case 3 ]--------------*/
let score3 = true
let value3 = Number(score3)
console.log(typeof value3)
// number
console.log(value3)
// 1

/*-------------- [ Case 4 ]--------------*/
let score4 = null
let value4 = Number(score4)
console.log(typeof value4)
// number
console.log(value4)
// 0

/*-------------- [ Case 5 ]--------------*/
let score5 = undefined
let value5 = Number(score5)
console.log(typeof value5)
// number
console.log(value5)
// NaN

/*-------------- [ Case 6 ]--------------*/
let score6 = "aryan"
let value6 = Number(score6)
console.log(typeof value6)
// number
console.log(value6)
// NaN

/*-------------- [ Case 7 ]--------------*/
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
// -3

console.log(2+2);
console.log(2-2);
console.lo(2*2);
console.lo(2**3);   // Exponent
console.log(2/3);   // 0.6666666666666666
console.log(2%3);   // Remainder - 2


/*-------- [ Confusing String and Num Conversions ]--------*/
console.log("1" + 2)
// 12
console.log(l + "2")
// 12
console.log("1" + 2 + 2)
// 122
console.log(l + 2 + "2")
// 32
// -> Above 4 have a type of 'string'

console.log(true)
// true
console.log(+true)
// 1 - Important to note - Conversion happened using +
console.log(+"")
// 0 - Conversion happened using +

counter++
// increment the value of counter by 1