console.log(2 > 1)
console.log(2 >= 1)
console.log(2 > 1)
console.log(2 = 1)
console.log(2 != 1)

console.log("2" > 1)
// true - JS automatically converted string to num
console.log("02" > 1)
// true

console.log(null > 0)
/// false
console.log(null == 0)
// false
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

