/*
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    -> Declaring these outside of the event will give you empty values, as they will be saved as soon as the page loads
    -> You want to extract height and width values at the exact moment we click on submit i.e call for the event, henec it's correct place is inside the event   
*/

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Whenever we submit a form, it's values get submitted to the server/browser and are lost.
    // To prevent that we do this
    /*
        let height = document.querySelector('#height');
        let weight = document.querySelector('#weight');
        -> This method is wrong! This way you are merely selecting the height and width input tags, and not their values!
        -> Correct way would be adding a .value ahead of them to extract the value.
        -> Another thing that we need to do is convert these values in integer, as by default they are in string
        -> And this can be achieved by using parseInt()
    */
    let height = (document.querySelector('#height').value);
    let weight = (document.querySelector('#weight').value);
    let result = document.querySelector('.result');
    // let res = (weight/(height*height));
    let res = (weight/(height*height)).toFixed(2);
    // This will fix the number of decimal places in result to 2.
    
    if (height === '' || height < 0 || isNaN(height)) {
        /*
            Checks if height is empty, negative or NaN 
            For checking NaN, we can do height == NaN
            isNaN returns true if the number is Not-a-Number
        */
        result.innerHTML = `Please give a valid height ${height}`;
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    } 
    else {
        if(res<18.5) {
            result.innerHTML = `The BMI is ${res}. You are Underweight.`
        }
        else if(res>=18.5 && res<=24.9) {
            result.innerHTML = `The BMI is ${res}. You are Normal Weight.`
        }
        else if(res>=25 && res<=29.9) {
            result.innerHTML = `The BMI is ${res}. You are Overweight.`
        }
        else if(res>30) {
            result.innerHTML = `The BMI is ${res}. You are Obese.`
        }
    }
});