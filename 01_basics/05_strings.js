// String Concatenation
let name1 = "aryan"
let repoCount = 50
console.log(name1 + repoCount + "Value");

OR

// String Interpolation
console.log(`My name is ${name1} and i have ${repoCount} number of repos.`);
// -> Better way to write
// `` these symobols have been used

const name2 = new String("aryan")
// Another method to declare string
// When console.log is done, it returns an object with key value pairs containing each character and their indexes

console.log(name2[0])
console.log(name2.__proto__)
// this access the prototypes in a string

console.log(name2.length)
// Returns the length of the string

console.log(name2.toUpperCase())
// Converts the string in uppercase characters

console.log(name2.__proto__.toUpperCase())
// Both correct

console.log(name2.charAt(2))
// Returns the character at this index
console.log(name2.indexOf('t'))
// Returns the index of first occurance of this character

const name3 = "aryan-gupta"
const newStringg = name3.substring(0,4)
console.log(newStringg)
// arya
// -> Print characters with index range [0,4) - last value is not included

const newString = namee.slice(0,4)
console.log(newString)
// arya
// Substring and Slice behave the same way except that slice accepts negative values in the range

const name4 = "    gupta   "
console.log(name4);
// '    gupta   '
console.log(name4.trim());
// gupta
// -> Trim removes the whitespace and line termminators both from the start and the end of the word
// -> We have trimStart() and trimEnd() functions too

const url = "https://aryan.com/aryan%20gupta"
console.log(url.replace('%20', '-'))
// https://hitesh.com/hitesh-choudhary
// Will replace %20 with -

url.includes('hitesh')
// true
url.includes('sundar')
// false

const randomName = "aryan-gupta-college"
// We want to break this word into multiple words based on the character -
console.log(randomName.split('-'))
// We now have an array withh 3 different keywords in it, we can print individual keywords too using array indexing
// Slicing can be done with spaces or other characters too, just replace the seperator
// Ex. randomName.split(' ') -> this will seperate into words which are seperated via a space








