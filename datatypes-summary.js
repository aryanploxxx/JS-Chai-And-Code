// All the datatypes are catagorized as Primitive and Non-Primitive only - according to the official documentation.
// These differences are based on the basis of the way these data/datatypes are stored in the memory and accessed from the memory.

/*
    Javascrip is a dynamically typed language
    const score = 100
    const score = false
    - We never told JS about what datatype must be in score, it automatically changes the datatype of score varaible

*/

// # PRIMITIVE DATATYPE
/*
    Call by Values - Whenever we call them, we don't get a direct reference to them, instead we get a copy of these data, and whatever we changed is changed in the copy and not the original value
    7 Types: 
        - String, Number, Boolean, null, undefined, Symbol, BigInt
*/


// # Non-Primitive / Reference DATATYPE
/*
    Reference can be directly allocated.
        - Array, Objects, Functions
*/

const heros = ["shaktiman", "naagraj", "doga"]
// Arrays
console.log(typeof heros);
// Object


{
    name: "Aryan",
    age: 22,
}

OR

let myObj = {
    name: "Aryan",
    age: 22,
}
// Objects

const myFunction = function() {
    console.log("Hello World");
}
console.log(typeof myFunction);
// Function / Object Function

// All non-primitive datatypes return objects as their datatypes