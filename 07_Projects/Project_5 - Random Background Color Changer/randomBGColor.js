// Our Usecase is to start generating random background colors every second and applying on the background when we click on start button
// We want it to stop at the particular background color and keep it applied after we click on the 'Stop' button and 

// Random Color Generator
// let randomColor = ;

function changeColor() {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++) {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}

let startChanging;
const start = document.getElementById("start").addEventListener('click', function(e) {
    // We will put a check here to see the function runs only when the value of startchanging is not null.
    if(!startChanging) {
        startChanging = setInterval(function() {
            document.body.style.backgroundColor = changeColor();
        },1000)
    }
})

document.getElementById("stop").addEventListener('click', function() {
    clearInterval(startChanging)
    // The code breaks when we click on 'Start' button multiple times, this happens due to memory issues.
    // Therefore we need to flush out the memory of startChanging each time we stop.
    startChanging = null
})