// DOM manipulations
const myHeading = document.getElementById("main-heading");
console.log(myHeading);

const paragraph = document.querySelector(".first-paragraph")
// using getElementByclassname
const para2 = document.getElementsByClassName("second-paragraph");
console.log(paragraph);
console.log(para2);
//Changing the heading color
myHeading.style.color = "Blue";
myHeading.innerHTML = "Hello This is changed from Js";
paragraph.textContent = "This is changed from Js";
para2[0].innerHTML = "this is changed from Js using getElementsByClassName";