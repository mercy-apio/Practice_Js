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
