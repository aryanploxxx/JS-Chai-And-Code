// Introduction to arrow function
const user = {
    username: "hitesh",
    price: 99,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        // this keyowrd is used to refer the current context
        console.log(this);
    }
}
user.welcomeMessage()
// hitesh, welcome to website
/* 
    {
    username: 'hitesh',
    price: 99,
    welcomeMessage: [Function: welcomeMessage]
    }
*/
user.username = "Aryan"
// context/values changed
user.welcomeMessage()
// Aryan, welcome to website
/* 
    {
    username: 'Aryan',
    price: 99,
    welcomeMessage: [Function: welcomeMessage]
    }
*/
console.log(this);
// {} -> Prints empty object in node environment because there is not context currently in global
// Returns Window(global object in browser) in browser console

function chai() {
    let username = "hitesh"
    console.log(this.username)
}
chai()
// undefined -> this keyword works only inside objects


/* +++++++++++++++ Arrow Functions +++++++++++++++++++++++++++++++++++++++++++++++ */

const chai = function () {
    let username = "hitesh"
    console.log(this.username)
}
chai()
// undefined

// We can get rid of function keyword altogether
const chai = () => {
    let username = "hitesh"
    console.log(this.username)
}
chai()
// undefined

// () => {}     Arrow Function
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));
// 7


// Implicit method of writing arrow function
const addTwo = (num1,num2) => num1+num2
// It will be assumed that num1+num2 needs to be returned
const addTwo = (num1,num2) => (num1+num2)
// This technique is used in reactjs

const addTwo = (num1,num2) => {username: "hitesh"}
// undefined - When we want to return an object, this is the wrong way
const addTwo = (num1,num2) => ({username: "hitesh"})
// {username: "hitesh"}


// const myArray = [2,3,4,5,6]
// myArray.forEach(function() {})
// myArray.forEach({}=>())