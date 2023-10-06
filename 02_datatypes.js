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
// binint
// string -> ""
// boolean -> true/false
// null - datatype, also a standalone value - represneation of empty value - undefined nhi hai, bas khaali hai
// undefined - when value hasn't been assigned to a defined variable
// symbols - used when uniqueness is required

console.log(typeof "aryan")
// String
console.log(typeof age)
// Number
console.log(typeof null)
// Object - Important to note
console.log(typeof undefined)
// undefined
