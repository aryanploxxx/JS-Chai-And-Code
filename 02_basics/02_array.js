const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]
marvel.push(dc)
console.log(marvel)
// Expected output was that the elements in dc array will merge in marvel array
// But instead the entire dc array got inserted in marvel as one single Element - since arrays are known to accept any datatype as their element
// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// To access flash - console.log(marvel[3][1])


const all = marvel.concat(dc)
console.log(all)
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// -> Push plays with the original array, while concat returns a new array and therefore that value needs to be stored


const allNew = [...marvel, ...dc]
console.log(allNew);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// Output is same, however this is called SPREAD operator, it spreads every element of an array and combines all the elements as one


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// This flattened the array and merged them in a new single flat array
// The parameter inside flat() denotes the depth upto which we need to flatten the array, passing Infinite as parameter takes care of that aspect if we want to flatten it out entirely


// Sometimes when doing operations like Web Scraping, we see that we get results as strings, booleans etc.
// However we can perform majority actions on array, so need arrises to convert it

// This is the code to check if a particular thing is an array or not.
console.log(Array.isArray("Array"));
// False
console.log(Array.from("Array"));
// ['A', 'r', 'r', 'a', 'y'] -> Converted it into array
// -> Converted the given string into array

console.log(Array.from({name: "Aryan"}));
// [] -> returned an empty array because not able to convert
//  We would have to first specify whether we want the key or value to be converted into array

let score1 = 100    
let score2 = 200
let score3 = 300
console.log(Array.of(scorel, score2, score3))
// [100, 200, 300]
// Creates an array from the given numbers











