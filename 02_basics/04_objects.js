// Learn more about object destructuring

const tinderUser =  new Object() // Singleton Object
const tinderUser1 = {} // Not a Singleton Object
console.log(tinderUser1)
// {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aryan",
            lastname: "gupta"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
// aryan

console.log(regularUser.fullname?.userfullname.firstname);
// It might be possible that fullname does not exists, in that scenario we can add a little ? to ensure that the given statement executes only if the provided parameter executes, otherwise we would have to use if-else statements

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {obj1, obj2}
console.log(obj3)
// {obj1: {1: 'a', 2: 'b'}, obj2: {3: 'a', 4: 'b'}}
// Same problem as the array, objects added but nor merged
const obj4 = Object.assign(obj1, obj2)
// {1: 'a', 2: 'b', 3: 'a', 4: 'b'}
const obj4 = Object.assign({}, obj1, obj2)
// {1: 'a', 2: 'b', 3: 'a', 4: 'b'}
// -> Same result, but better to write this one - since the first parameter acts as the target as to where the final output is to be pushed
// -> in the above one {} acts as a target and all other objects as source which get pushed into {}, while in the other one obj1 acts as target and obj2 acts as source which gets pushed into obj1

const obj3 = {...obj1, ...obj2}
// Spread Operator - same output
// {1: 'a', 2: 'b', 3: 'a', 4: 'b'}

// Values from database come in the form of array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"        
    },
    {
        id: 2,
        email: "k@gmail.com"        
    },   
]
users[1].email



console.log(tinderUser);
// {id: '123abc', name: 'sammy', isLoggedIn: false}
console.log(Object.keys(tinderUser));
// ['id', 'name', 'isLoggedIn']
// Returns the keys in an array which can be used furthur by looping etc.
console.log(Object.values(tinderUser));
// ['123abc', 'sammy', false]
console.log(Object.entries(tinderUser));
// [['id', '123abc'], ['name', 'sammy'], ['isLoggedIn', false]]
// We get an array inside an array


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aryan"
}


/* ++++++++++++++++++++++++ Destructuring Values ++++++++++++++++++++++++ */

// Writing course.courseInstructor everytime we want to use this variable can lead to a messy code.
// To avoid this we can extract the value in a variable
const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor: Instructor} = course
console.log(Instructor)
// We can even rename the variable to shorten it furthur

// instead of using course.courseInstructor just use {courseInstructor}

// APIS - now in JSON format
// In JSON format - Keys are also stored in string type
// It returns an object without any name
{
    "name": "hitesh" ,
    "coursename": "js in hindi"
    "price": "free"
}

// Sometimes we get apis in the format of arrays of objects
[
    {},
    {},
    {},
    {},
    {}
] 



