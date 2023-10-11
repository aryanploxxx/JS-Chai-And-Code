// Whenever we create an object using constructor, it creates a singleton object i.e. one of it's types
// Object.create -> constructor method to create objects

const jsUser = {
    name: "Aryan",
    age: 18,
    location: "Jaipur",
    email: "hello@helo.com"
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Sunday"]
 // key: value
}

// How to access objects
console.log(jsUser.email)
console.log(jsUser["email"])
// Both are correct

// By default all the keys in object are stroed in string format
console.log(jsUser[email])
// The above output will throw error that email is not defined
// However, in case when we use dot operator, these quotes are not required since it automatically assumes it of string datatypes

// If a key:value pair such as the following was added
"full name": "Aryan Gupta"
// You cannot access it via dot operator
jsUser.full name
OR
jsUser."full name"
// -> Both are wrong methods, in this case you will have to use the square brackets
jsUser.["full name"]


const mySym = Symbol("key1")
// Now we need to use this symbol as a key
{
    mySym: "mykey1"
}
console.log(jsUser.mySym)
// It prints mukey1 as output, but it isn't being used as a symbol
console.log(typeof jsUser.mySym)
// String

{
    [mySym]: "mykey1"
}
console.log(jsUser.[mySym])
// correct syntax to actually use mySym as a symbol

jsUser.email = "change@email.com"
Object.freeze(jsUser)
// Freezes the changes to an object
jsUser.email = "change_again@email.com"
// This line won't throw any error but will not change anything too


jsUser.greeting = function() {
    console.log("hello js user");
}

console.log(jsUser.greeting);
// [Function (anonymous)] -> Function hasn't executed, it's reference has been returned
console.log(jsUser.greeting());
// hello js user

jsUser.greeting2 = function() {
    console.log(`hello js user, ${this.name}`);
} // this keyword specified that the variable name we are accessign belongs to the same object of which property we are defining
console.log(jsUser.greeting2());
// hello js user, Aryan






































