const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )
console.log(values); // undefined
// forEach Loop does not return anything, hence the undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
map.filter( (num) => { num > 4 } ) // pseudo code
// Filters take callback functions as input and return something

const newNums2 = myNums.filter( (num) => { return num > 4 } )
// [5, 6, 7, 8, 9, 10]
const newNums1 = myNums.filter( (num) => (num > 4) )
// [5, 6, 7, 8, 9, 10]
// -> Above two codes will give same output, we just have to use the return keyword whenever we use {} as this creates a scope


// If we wanted same output using ForEach loop
const newNums3 = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums3.push(num)
    }
} )
console.log(newNums3);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')
// bk will store every individual object
// Notice that we haven't opened any sort of scope here
console.log(userBooks);
// Will print an array containing all books(objects) having genre as History

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
// Just another implementation of filter using return keyword
console.log(userBooks);