/* Not enough material, read more about it from the internet */

let myDate = new Date()
console.log(myDate)
// 2023-10-10T16:43:34.504Z
console.log(myDate.toString())
// Tue Oct 10 2023 22:14:27 GMT+0530 (India Standard Time)

// -> Available methods
// toDateString
// toISOString
// toJSON
// toLocaleDateString
// toLocaleString
// toLocaleTimeString
// toString

console.log(myDate.toDateString())
// Tue Oct 10 2023
console.log(myDate.toLocaleString())
// 10/10/2023, 10:16:48 pm

// -> Every method presents the date in a unique way by adding/removing data 

console.log(typeof myDate)
// Object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())
// Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString())
// 23/1/2023, 5:03:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// 1696957395248
console.log(myCreatedDate.getTime())
// 1674412200000
console.log(Math.floor(Date.now() / 1000)) 
// 1696957395 - converted in seconds


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
// Returns the index of months starting from 0 hence did the plus 1

// getDate
// getDay
// getFullYear
// getHours
// getMilliseconds
// getMinutes
// getMonth
// getSeconds

/// Important
newDate.toLocaleString('default', {
    weekday: "long",

})







