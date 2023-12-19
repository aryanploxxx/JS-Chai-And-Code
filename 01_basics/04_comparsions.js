console.log(2 > 1)
console.log(2 >= 1)
console.log(2 > 1)
console.log(2 = 1)
console.log(2 != 1)

console.log("2" > 1)
// true - JS automatically converted string to num
/*
    It performs a numerical comparison if both operands are numbers, 
    and a lexicographical (dictionary order) comparison if one or both operands are strings.
    In this case, you are comparing a string ("2") with a number (1). 
    JavaScript will attempt to convert the string to a number before making the comparison. 
    The string "2" can be converted to the number 2, so the comparison becomes 2 > 1, which is true. 
    Therefore, the output will be true.
*/

console.log("02" > 1)
// true

console.log(null > 0)
//false
// -> when comparing null with a numeric value using the greater than (>) operator, 
//    null is treated as 0.

console.log(null == 0)
// false
// -> The equality operator (==) in JavaScript performs type coercion. 
//    However, null is only equal to undefined or itself when using the equality operator.

console.log(null == undefined)
// true

console.log(null >= 0)
// true

/*-------------- [ IMPORTANT ]--------------*/
/*
    Equality Check ( == ) and 
    Comparisions ( > , < , >= ) work differently
    Comparisions convert null to a number, treating it as 0
    Therefore, null >= 0 is true and null > 0 is false

    These all coversions are very controversial and hence javascript is a confusing language
    */

console.log(undefined > 0)
// false
console.log(undefined == 0)
// false
console.log(undefined < 0)
// false


// Strict Check ( === ) - Not only check the value but also check the datatype.
console.log("2" == 2)
// true - since conversion started to happen
console.log("2" === 2)
// false - value might be same, but datatypes do not match

