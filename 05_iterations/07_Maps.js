// Map
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myNumers.map( () => {} )
// Needs callback fxn as input and automatically returns value

const newNums = myNumers.map( (num) => { return num + 10} )

// Chaining - When we can use 2-3 methods simultaneously
newNums1 = myNumers.map().map().filter()

const newNums1 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                // In the above (2nd) map num value that it is using is the one that is updated after passing through the first map
                .filter( (num) => num >= 40)

console.log(newNums1);