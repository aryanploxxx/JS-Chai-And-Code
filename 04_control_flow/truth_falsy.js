const userEmail = "aryan@gmail.com"
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/*
    userEmail = "aryan@gmail.com"
    -> Got user email
    userEmail = ""
    -> Don't have user email
    userEmail = []
    -> Got user email
*/

/*
    Falsy Values:
    -> false, 0, -0, BigInt 0n, "", null, undefined, NaN
    Truthy Values:
    -> "0", 'false', " ", [], {}, function(){}
*/

// Truthy and Falsy are values we assume by default as True or False

// To check if array is empty or not
if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
// Object.keys(emptyObj) -> This will return an array of keys and .length will check size of array thus created
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

false == 0
// True
false == ''
// True
0 == ''
// True

// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
// Whatever appears first - 5
val1 = null ?? 10
// 10 -> this operator is designed to assign null value to a variation if nothing menaingful is returned on the other side
val1 = undefined ?? 15
// 15 -> sinxe we have a meaningful value 15 so it is assigned to val1
val1 = null ?? 10 ?? 20
// 10 -> since out of all valid entries, it came first
console.log(val1);


// Terniary Operator
condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")