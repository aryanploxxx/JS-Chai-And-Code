"use strict"
// Treat all JS code as newer version of JS - although optional since by default in new browsers it is treated as newer version only

alert("Hello")
alert(3+3)
// Works on browser, not on nodejs therefore when running by 'node filenam.js' it gives error
// But works perfectly fine when run on browser

// MDN Docs is not the original documentation - tc39.es is!

let name = "hitesh"
let age = 18
let isLoggedIn = false

// # Datatypes
// number -> 2^53
// bigint
// string -> ""
// boolean -> true/false
// null - datatype, also a standalone value - represneation of empty value - undefined nhi hai, bas khaali hai
// undefined - when value hasn't been assigned to a defined variable
// symbols - used when uniqueness is required

console.log(typeof "aryan")
// String
console.log(typeof age)
console.log(typeof(age))
// number
console.log(typeof null)
// Object - Important to note
console.log(typeof undefined)
// undefined
console.log(typeof NaN);
// number - Important to note

const score_1 = 100
const score_2 = 100.3
// Both are of number type


// Symbols
const id = Symbol('123')
const anotherld = Symbol('123')
console.log( id === anotherld )
/// false


// BigInt
const bigNumber = 79867448655877570901n;
// -> adding a 'n' at last ensures that the variable is defined of bigint datatype
