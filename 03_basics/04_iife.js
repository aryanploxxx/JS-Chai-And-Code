// Immediately Invoked Function Expression - Used to remove the pollution of global scope variables
// When we want function to exceute immediately after writing it

function chai() {
    console.log('DB CONNECTED');
}
chai()

// but if we want to immediately invoke it
// we can do like
function chai() {
    console.log('DB CONNECTED');
}()
// -> but this is syntactically incorrect

(function chai() {
    console.log('DB CONNECTED');
})()
// Enclosing the function in brackets ensures that the function defination is executed as soon as it is written


(function chai() {
    // Named IIFE
    console.log('DB CONNECTED');
})()
( () => {
    console.log('DB CONNECTED TWO');
})()
// Here the first function executes, but the second function does not.
// At first it might seem that it is due to arrow function
// But on carefu; observation, we observe that iife functions do not know where to end the scope, hence they need a semicolon after the end of the function calling
(function chai() {
    console.log('DB CONNECTED');
})();
( () => {
    console.log('DB CONNECTED TWO');
})()
// This piece of code will run

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('aryan')