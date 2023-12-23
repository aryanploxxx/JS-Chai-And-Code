// Functions are peices of packaged code, whose copies can be used wherever we want

function myName() {
    console.log('A');
    console.log('R');
    console.log('Y');
    console.log('A');
    console.log('N');
}
myName()

// myName - Reference to the function
// myName() - Execute the function

// In JS we do not need to pass datatypes for parameters
function addTwoNumber(num1, num2) {
    console.log(num1+num2);
}
addTwoNumber(3,4)
// 7
addTwoNumber(3,"4")
// 34
addTwoNumber(3,"a")
// 3a
addTwoNumber(3,null)
// 3

/*
    Parameters - Values in the function defination
    Arguements - Values passed when the function is called
*/

const result = addTwoNumber(3, 5)
console.log("Result is: ",result);
// Result is: undefined
// This happened because there was no return type in the function hence it did not return back anything specifically after being called

// To solve this problem, redefine the function
function addTwoNumber(num1, num2) {
    let result = num1+num2
    return result
    // OR return num1+num2
}
// Anything written after return statement will not be executed because function exists after encountering the return function

function loginUserMsg(username) {
    return `${username} just logged in.`
}
console.log(loginUserMsg("Aryan"));
// Aryan just logged in.
console.log(loginUserMsg());
// undefined just logged in. -> To prevent this, we can do something like follows

function loginUserMsg(username) {
    if(username === undefined) {
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in.`
}

// "" - assumed as false value
// undefined - assumed as false value

// if(!username) -> Ensures this statement runs only when username id undefined, because the '!' make the overall statement in if condition as false

function loginUserMsg(username = "sam") {}
// by default value of username would be sam

function calculateCartPrice(num1) {
    return num1
}

// REST Operator
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 100, 3000));
// [200, 100, 3000] -> num1 will now store all these 3 values as an array


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 100, 3000, 10, 50));
// val1 - 200, val2 - 100
// num1 - [3000, 10, 50]


// Handling objects in functions
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
// OR
handleObject({
    username: "hitesh",
    price: 199
})

const myArr = [200, 100, 3000, 10]
function returnSecValue(getarr) {
    return getarr[1]
}
let x = returnSecValue(myArr)
console.log(x)
// 100