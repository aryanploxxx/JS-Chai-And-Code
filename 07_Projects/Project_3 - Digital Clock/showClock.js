const clock = document.getElementById('clock')
/*
    const clock = document.querySelector('clock')
    -> Both will give the same output.
*/

/*
    let date = new Date();
    -> This will give the current date.

    console.log(date.toLocaleTimeString());
    -> This will print the time in this format - 11:59:45 PM
    -> Every time we print this it gets updated to the current time.
    -> What we require is a function that runs every seconds, fetches the new time sand updates it.
*/

/*
    setInterval(function(){}, 1000)
    -> It is a function that runs the given method after every specified interval of time
    -> 1000 here denotes 1 second
*/

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

