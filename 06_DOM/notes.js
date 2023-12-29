// DOM -> Document Object Model

/*
                                      /-> Title -> text node            
                                     /            
                             /-> Head            
                            /        \    
                           /          \-> Meta -> attribute  
                          /            
window -> document -> body 
                          \
                           \
                            \          /-> p -> text node            
                             \        /            
                              \ -> div 
                                    | \       /-> attribute  
                                    |  \-> h1 
                                    |         \-> text node  
                                    |
                                attribute

*/

console.log(document.links)
// Will print all the links in a webpage in a 'HTML Collection Format' not in array format

document.getElementById('firstHeading');
// Will return the entire element with this id
// <h1 id="firstHeading" class="firstHeading mw—first—heading">...</h1>

document.getElementById('firstHeading').innerHTML = "<h1>Chai aur code</hl>";
// Will change the code at the element with id - firstHeading


// +++++++++++++++++++   one.html  ++++++++++++++++++++

document.getElementById('title');
// Will return the entire tag whose id is title
document.getElementById('firstHeading').id;
// Will return the value of id attribute of the element which we have captured using document.getElementById('firstHeading');
document.getElementById('firstHeading').class;
// Wrong method to get the value of class attribute
document.getElementById('firstHeading').className;
// Will return the value of class in the selected tag
document.getElementById('firstHeading').getAttribute('id');
// Will return the value of id attribute in the selected tag -> Works as a key value pair
document.getElementById('firstHeading').setAttribute('class', 'tag');
// This inserts a new attribute in the tag, or overwrites any existing one
// If we want to add a new class, retaining the original one also, we can do something as follows
document.getElementById('firstHeading').setAttribute('class', 'heading tag');


const title = document.getElementById('firstHeading');
title.style.backgroundColor = 'green'
title.style.padding = "15px";
title.style.borderRadius = "50px";
// Styles having more than one words are written in camel case

// Till now we learned how to change the attribute values, Now we will learn how to change the value inside them

title.innerText
// DOM learning if fun.
title.innerContent
// DOM learning if fun
title.innerHTML
// DOM learning if fun

// -> We can observe that all three give the same output, however they have differences among them
// To understand the difference between these two, make a sligt change in the h1 tag.
// <h1 id="title" class="heading">DOM learning if fun. <span style="display: none;">test text</span></h1>

title.innerText
// DOM learning if fun.
// innerText just returns the text that is visually visible.
title.innerContent
// DOM learning if fun test text
// innerContent displays the content that might be hidden due to some css properties and their usage depends on our usecase

title.innerHTML
// DOM learning if fun.  <span style="display: none;">test text</span>
// innerHTML returns the entire content inside the target element including any html written inside it


document.querySelector('h2');
// Will return the first h2 tag in the body
document.querySelector('#title');
// <h1 id="title" class="heading">...</h1>
// Will return the element with id=title
document.querySelector('.class');
// <h1 id="title" class="heading">...</h1>
document.querySelector('input[type="password"]')
// Will return the input type with password
document.querySelector('p:first-child');


// ACCESSING SINGLE ELEMENT
document.querySelector('ul');
/* <ul>
    <li class="list-item">one</li>
    <li class="list-item">two</li>
    <li class="list-item">three</li>
    <li class="list-item">four</li>
</ul> */
const litems = document.querySelector('ul');

litems.querySelector('li');
// Returns just the first li
const list = litems.querySelector('li');

list.style.backgroundColor = 'green'
// Accessing individual components



document.querySelectorAll('li');
// It will return all the li items in a 'NodeList' which is iterable using a ForEach loop
const tempLiList = document.querySelectorAll('li');
tempLiList.style.color = 'green'
// Will return an error 
// Instead what we can do is:
tempLiList[0].style.color = 'green'
// It will now color the 0th element as green

// We can iterate templilist using foreach loops
tempLiList.forEach(function (l) {
    l.style.backgroundColor='green';
})
// This will iterate to every li and turns its background color as green



document.getElementsByClassName('list-item')
// This will return all items in a 'HTMLCollection' format, and it is not iterable using foreach loop
// To proove the same, we do the following
const tempClassList = document.getElementsByClassName('list-item')
tempClassList.forEach( function(li) {
    console.log('li')
})
// It will throw an error stating that forEach function is not defined, therefore will have to now convert this into an array to operate on this

const myConvertedArray = Array.from(tempClassList)
// Now the htmlcollection tempClassList is now converted to an array 
myConvertedArray.forEach( function(li) {
    li.style.backgroundColor='orange';
})


package.classList.add("button")
// adds a new class

// +++++++++++++++++++  two.html  ++++++++++++++++++++






















