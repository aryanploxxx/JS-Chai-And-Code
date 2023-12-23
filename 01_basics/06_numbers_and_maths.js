const score = 400
console.log(score)
// 400

const balance = new Number(100)
console.log(balance)
// [Number: 100]

console.log(balance.toString())
// 100
BUT
console.log(typeof balance.toString())
/// String -> Now we have several properties of string like length, concat etc. which we can apply to this number
console.log(balance.toString().length)
// 3 - because 100 has 3 characters

console.log(balance.toFixed(2))
// 100.00 -> added two decimal places to make it a decimal number

const otherNumber1 = 23.8966
console.log(otherNumber1.toPrecision(3))
// Parameter inside the toPrecision function determines the numebr of significant digits to show
// The value it returns is of string datatype
// 23.9 -> Roughly rounds off the value too
const otherNumber2 = 123.8966
console.log(otherNumber2.toPrecision(3))
// 124 -> rounded off value
const otherNumber3 = 1123.8966
console.log(otherNumber3.toPrecision(3))
// 1.12e+3


const hundreds = 10000000
console.log(hundreds.toLocaleString())
// 10,000,000 -> Will insert commas according to the American number system
console.log(hundreds.toLocaleString('en—IN'))
// 1,00,00,000 -> Will insert commas according to the Indian number system


Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
// N in Number is always capital 


/*++++++++++++++++++++++++ [ MATHS ] ++++++++++++++++++++++++*/
// Maths Library come with JS by default
console.log(Math)
// Object in itself with a lot of properites

// abs: ƒ abs()
// acos: ƒ acos()
// acosh: ƒ acosh()
// asin: ƒ asin()
// asinh: ƒ asinh()
// atan: ƒ atan()
// atan2: ƒ atan2()
// atanh: ƒ atanh()
// cbrt: ƒ cbrt()
// ceil: ƒ ceil()
// clz32: ƒ clz32()
// cos: ƒ cos()
// cosh: ƒ cosh()
// exp: ƒ exp()
// expm1: ƒ expm1()
// floor: ƒ floor()
// fround: ƒ fround()
// hypot: ƒ hypot()
// ƒ imul()
// ƒ log()
// ƒ log1p()
// ƒ log2()
// ƒ log10()
// ƒ max()
// ƒ min()
// ƒ pow()
// ƒ random()
// ƒ round()
// ƒ sign()
// ƒ sin()
// ƒ sinh()
// ƒ sqrt()
// tan : ƒ tan()
// tanh: ƒ tanh()
// trunc: ƒ trunc()

// -> Values of some constants we directly get with math library
// E: 2.718281828459045
// LN2 : 0.6931471805599453
// LN10: 2.302585092994046
// LOG2E: 1.4426950408889634
// LOG10E:0.4342944819032518
// PI:3.141592653589793
// SQRT1_2:0.7071067811865476
// SQRT2:1.4142135623730951


// All these are functions, something like length is a property
console.log(Math.abs(-4));
// 4 -> Take absolute value
console.log(Math.round(4.3));
// 4 [4.6 -> 5]
console.log(Math.ceil(4.3));
// 5
console.log(Math.round(4.3));
// 4
console.log(Math.min(4, 3, 6, 8));
// 3 -> returns the minimum value
console.log(Math.max(4, 3, 6, 8));
// 8 -> returns the maximum value

// Most commonly used is the random function
console.log(Math.random());
// Always gives value between [0,1] both inclusive
// 0.38122117591828797
console.log(Math.random()*10);
// Gives value between [0,10] both inclusive
// 9.775204260976148
console.log((Math.random()*10) + 1);
// Ensures the value that we get is always minimum 1
// 6.809937113216133
console.log(Math.floor(Math.random()*10) + 1);
// 6
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// 19
// If we want random numbers in a particular range















