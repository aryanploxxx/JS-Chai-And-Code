// ForEach Loop

const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( callback-fxn);
// It expects us to provide it a function that tells it what to do

coding.forEach( function (val) { console.log(val); } )
// Name of the function is ommitted
// val is each item of the array, console.log is what the function need to do with the array items

// Same thing can also be done using Arrow Functions
coding.forEach( (item) => { console.log(item); } )

// Another way to write this
function printMe(item){
    console.log(item);
} 
coding.forEach(printMe)
// Function's reference is given here, function is not executed directly

// ForEach loop has other parameters also
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

// Array of Objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// Each item is an object
myCoding.forEach( (item) => {   
    console.log(item.languageName);
    // We can now access values inside an Object
} )