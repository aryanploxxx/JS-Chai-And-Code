// Reduce
// Can be used to calculate shopping cart bills

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);
// Expected output: 10

/*
    what happens is, currentValue is the value of array we are currently on.
    This value gets added to the value of accumulater and the result of this addition gets stored back to accumulater.
    Again we iterate to the next value of array, add the currentValue to accumulater and update the result in accumulater.
    In the starting since accumulater doesn't know where it should start from, we use the variable initialValue to define the initial value of accumulater.
*/

// Typical Form to write Reduce
const myNums = [1, 2, 3]
// currval is denoting every element of the array
const myTotal1 = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
// 0 here indicates the initial value of the accumulater -> Can be interpreted as 'By Default' value
console.log(myTotal1);
/*
    acc: 0 and currval: 1
    acc: 1 and currval: 2
    acc: 3 and currval: 3
    6
*/

// Arrow Function Form to write Reduce
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// item is denoting every object of the array
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);