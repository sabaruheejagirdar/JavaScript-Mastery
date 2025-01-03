// DOM | BOM
// let mydiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span');
// newElement.textContent = "Saba "

// mydiv.insertAdjacentElement('afterend', newElement);

// let parent = child.parentElement;
// let child = document.querySelector('#fpara');
// parent.removeChild(child);

// ACCESS element using --- document.:
// getElementById()
// getElementsByClassName()
// getElementsByTagName()

// querySelector('.text')-> returns only first
// querySelector('#text')-> returns only first
// querySelector('p')-> returns only first

// querySelectorAll('.text')-> returns only first
// querySelectorAll('#text')-> returns only first
// querySelectorAll('p')-> returns only first

// UPDATE existing element: 
// 1. InnerHTML-> get/set 
// button.innerHTML- gets the element
// button.innerHTML = "<p>Hellooo</p>" - sets the element
// 2. OuterHTML -> Represents the HTML content of element including itself and descendants
// 3. textContent -> Gives the text including all \n  etc. 
// 4. innerText-> Gives the text as renedered on webpage. 

// CREATE element
// 1. document.createElement()
// 2. insert Adjacent HTML()--> 
// Position: beforebegin, afterbegin, beforeend, afterend

// REMOVAL
// removeChild() -> parent.removeChild(child)




let fHeading = document.createElement('h1')
fHeading.textContent = "My name is saba" // fHeading --> <h1> My name is saba </h1>
let bodyTag = document.querySelector('body');
bodyTag.appendChild(fHeading)


let myDiv = document.querySelector('#myDiv')
let newElement = document.createElement('span');

newElement.textContent = "Myanother name is Tanu";
myDiv.insertAdjacentElement('beforebegin', newElement);

