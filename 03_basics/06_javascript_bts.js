/*
Javascript Execution Context

{} -> Global Execution Context
this keyword is prefered to GEC
JS is single threaded

Functional Execution Context
Eval Execution Context (comes in Mongoose -> not necessary to learn)

*/
let val1 = 10
let va12 = 5
function addNum(num1, num2){
    let total = numl +num2
    return total
}
let resultl = addNum(vat1, vat2)
let result2 = addNum(10, 2)

/*
Step 1: Global Execution/Environment
Step 2: Memory Creation Phase (FIrst Cycle) - All variables created and defined as 'undefined'
        val1 -> undefined
        val2 -> undefined
        addNum -> defination
        resultl -> undefined
        result2 -> undefined
Step 3: Execution Phase (Second Cycle) - 
        val1 <- 10
        val2 <- 5
*/