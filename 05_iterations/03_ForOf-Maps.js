// For Of Loop

// ["", "", ""]
// [{}, {}, {}]

// Syntax
for (const iterator of object) {
    // Here object refers to the thing on which we want to apply the for-of loop and not the javascript object
}

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps- Store in Key-Value Pairs but store unique elements
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// Output:
// Map(3) {'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France'}

for (const key of map) {
    console.log(key);
}
// This will print the entire map.

// This will destructure the map and we can individually call for key and value
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
// Will return error as objects are not directly iterable