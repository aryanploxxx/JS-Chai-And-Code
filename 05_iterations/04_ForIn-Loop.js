// For-In Loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key) -> This will print all keys in a object
    console.log(`${key} shortcut is for ${myObject[key]}`);
    // This is the method to access values of a key in an object
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
    // console.log(key) -> This will print all indexs of an array - 0 1 2 3 4 
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
// Nothing will be printed as maps are not iterable