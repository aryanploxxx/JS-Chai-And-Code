// Learn more about Closures and Mini Hoisting


let a = 10
const b = 20
var c = 30

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

{} // -> Scope

if(true) {
    let a = 10
    const b = 20
    var c = 30
}
console.log(a); // Error
console.log(b); // Error
console.log(c); // 30 -> Due to var - it does npt obey scoping 

// Global Variables are accesible inside scope, but block variables shouldn't be accessible outside block
// Windows global scope and Node environment global scope are different

if (true) {
    const username = "aryan"
    if (username === "aryan") {
        const website = "youtube"
        console.log(username + website)
    }
    console.log(website)
}    
console.log(username)
// Will throw some scope errors


/* +++++++++++++ INTERESTING ++++++++++++++ */

function addone(num) {
    return num+1
}
addone(1)

// Another method to declare function
let addtwo = function(num) {
    return num+2
}
addtwo(5)


// If we change the order of calling the function

addone(1)
function addone(num) {
    return num+1
}
// 2

addtwo(5)
let addtwo = function(num) {
    return num+2
}
// Will throw error, say cannot access the function addtwo - this error is related to the concept of hoisting