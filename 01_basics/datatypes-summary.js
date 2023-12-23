// All the datatypes are catagorized as Primitive and Non-Primitive only - according to the official documentation.
// These differences are based on the basis of the way these data/datatypes are stored in the memory and accessed from the memory.

/*
    Javascript is a dynamically typed language
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
    age: 22
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




/*----------------------- [ MEMORY ] -----------------------*/
/*
    Stack (Primitive Datatypes) - We get Copy of value
    Heap (Non-Primitive Datatypes) - Change in original value [Reference of original value is passed]

    let var1 = "aryan"  [Primitive Datatype]
    let var2 = var1
    var2 = "gupta"
    console.log(var2)
    -> gupta
    console.log(var1)
    -> aryan [didn't change, because value copied, not passed by refernce]

    let user1 = {                   [Primitive Datatype]
        email: "user@gmail.com"
        upi: "user@xyz"
    }
    let user2 = user1
    -> values of user1 has been passed as reference to user2, any chnages made to user2 will be reflected in user1 also now.
    user2.email = "random@google.com"
    console.log(user1.email) -> random@google.com
    console.log(user2.email) -> random@google.com
*/