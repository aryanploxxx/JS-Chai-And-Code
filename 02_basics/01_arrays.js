/*
    [] - Brackets
    () - Paranthesis
    {} - Braces
*/

const myArr = [0, 1, 2, 3, 4, 5, 6]
// Array is declared in square brackets
const myArr1 = [0, 1, 2, 3, "hello", true]

/*
    Different datatypes can also be present in a single array
    Javascrip arrays are re-sizable
    Arrays create a shallow copy whenever we perform a copy operation on it
    Shallow copies of an object are copies that share the same reference, i.e chnages made in the copy, will reflect in the original
    Deep copies of an object is a copy which do not share the same reference
    JS Arrays are 0-indexed
*/

const myArr2 = new Array(1, 2, 3, 4)

// Array Methods
myArr.push(6)
// Add value in the array
console.log(myArr)
// [0, 1, 2, 3, 4, 5, 6]
myArr.push(7)
console.log(myArr)

myArr.pop()
// Removes last value in the array

myArr.unshift(9)
// Inserts given value at start of array
// However sometimes not preffered because time consuming operation since entire elements of an array need to be shifted in order to achieve the desired result
// [9, 0, 1, 2, 3, 4, 5, 6]

myArr.shift()
// Removes the starting value of an array
// [0, 1, 2, 3, 4, 5, 6]

myArr.includes(9)
// false

myArr.index(9)
// -1 -> since this value does not exists in the array

const newArr = myArr.join()
console.log(myArr)
// [0, 1, 2, 3, 4, 5, 6]
console.log(newArr)
// 0,1,2,3,4,5,6
console.log(typeof newArr)
// String -> binds the elements of the array and converts them into string


// Slice AND Splice
const myArrr = [0, 1, 2, 3, 4, 5, 6]
console.log("A-original: ", myArrr);
const myn1 = myArrr.slice(1,3)
// last number not included
console.log(myn1);
// [1, 2]
console.log("B-Sliced", myArrr);
// [0, 1, 2, 3, 4, 5, 6] - no change in the original array

const myn2 = myArrr.splice(1,3)
// last number is included
console.log(myn2);
// [1, 2, 3]
console.log("C-Spliced", myArrr);
// [0, 4, 5, 6] - the original array has been changes and the spliced portion has been removed


