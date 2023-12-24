// For Loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];   
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}
// 0 1 2 3 4 5 6 7 8 9
console.log(element);
// Error

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

// Nested For Loop
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// Break and Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
    // When index=5, after break the loop will stop and the above line is not exceuted
}

// Continue when encounterd will skip the current iteration of the loop wahi pe and move to the next iteration
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);   
}
