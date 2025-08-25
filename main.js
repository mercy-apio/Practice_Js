console.log("Hello, this is my first Javascript file!");

// variables
// Declare variables using let, const, or var

// Var
var name = "John";
name = "Doe";
console.log(name);

// Let
let age = 30;
age = 31;
console.log(age);

// Const
const pi = 3.14;
console.log(pi);

// Data Types
//String
let greeting = "How are you?";
console.log(greeting);
// Number (integer or float)
//integer
let year = 2024;
console.log(year);

//Float
let price = 19.99;
console.log(price);

//Boolean (true or false)
let isLoggedIn = true;
console.log(isLoggedIn);

//undefined (variable decakred but not assigned)
let notAssigned;
console.log(notAssigned);

//Null (explicity no value)
let emptyValue = null;
console.log(emptyValue);

//Objects 
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
    isStudent: true 
}
console.log(person);

//Arrays
let fruits = ["Apple", "Banana","Orange"];
console.log(fruits);

let numbers =[1, 2, 3, 4, 5];
console.log(numbers);

let mixedArray = [1, "Hello", true, null];
console.log(mixedArray);

//Concatenation
let surname = "Smith";
let giveName = "Outa";
const fullName = surname + " " + giveName;
const nameStatment = "My name is" + " "   + surname + " " + giveName;
console.log(fullName);

//Conditional Statements
let score;
score = 45;
// let condition = score > 50;
if (score >= 50) {
    // code to be executed if code is true
    console.log("you have passed!");
} else {
    // code to be executed if condition is false
    console.log("you failed!");
} 

//comparison operators
//Equal tp (==) and strict equal to (===)
let value;
value = "19";
if (value === 10){
    console.log("value is exactly 10");// this will not execute
}
if (value == 10) {
    console.log("true, they are equal")
}

// not equal to (!=) and strict not Equal to(!==)
let val;
if (val != "20") {
    console.log("True, they are not equal"); //this will not execute
}

if (val !== "20") {
    console.log("true, they are not equal");
}

//more than two conditions
let num;
num = 75;
if (num >= 95) {
    console.log("Grade A");
}else if (num >= 85) {
    console.log("Grade B");
}else if (num >= 75) {
    console.log("Grade C");
} else {
    console.log("you have totally failed!!!");
}

//functions
// functions Declareation
function functionName() {
    console.log("This is a function declaration");
}

// call the function
functionName(); //call the function

// Function with Parameters
function greet(name,) {
    console.log("Hello, How are you " + name + "?");
}
greet("Mercy");
greet("Martha");
greet("Lucy");
greet("mummy");
greet("Gianna");

// function with return value
function add(a, b) {
    return a + b;
}
console.log(add(2 ,3));
console
.log(add(10, 20));

//Arrow Function
const multiply = function(x, y) {
    return x*y;
}
//Or using E56 arrow function syntax
const arrowfunc = () => {
    console.log("This is an arrow function");
}

const multiplyArrow = (x, y) => x * y;

console.log(multiply(3, 4));
console.log("This is the result of arrow function: " + multiplyArrow(3, 4));

//Arrow function with multiple lines
const complexFunc = (a, b) => {
    let sum = a + b;
    let product = a * b;
    let diff = b - a;
    return {sum: sum, product: product, difference: diff};
}
console.log(complexFunc(5, 6));

//Loops
// for Loops
const colors = ["Red", "Orange", "Green", "blue", "Yellow"];
console.log(colors)
// methods under arrays i.a push, pop, shift, unshift, length, indexDf, includes, splice
//Lenth
console.log(colors.Length) //4
console.log(colors[1]) // Orange
console.log(colors[3]) // blue

console.log("Red")
console.log("Orange")
console.log("Green")
console.log("blue")
console.log("Yellow")

//push
//colors.push("purple")
//console.log(colors) //  ["Red", "Orange", "Green", "blue", "Yellow", "purple"]

//pop
//colors.pop() // removes the last element
//console.log(colors) //["Red", "Orange", "Green", "blue", "Yellow"]
 
// splice
colors.splice(0, 1)
console.log(colors)

// shift
colors.shift() //Reamoves the first time
console.log(colors)

//unshift
colors.unshift("Orange") // adds an element to the beginning of the array
console.log(colors)

//IndexOf
let index = colors.indexOf("blue")
console.log(index)
colors.splice(index, 1)
console.log(colors)


//Indexing

//using a for loop to iterate through the array
for (let i = 0; i < colors.length; i++) {
    console.log("This is from the loop", colors[i]);
} 

// while Loop 