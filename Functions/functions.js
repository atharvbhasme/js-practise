//set of statements that performs a task or calculates a value
// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.

function square(number) {
  return number * number;
}

square(40)

// Function declarations & expressions


// function declaration
// You can call it even before its definition!
// Defined with the function keyword
// Hoisted: Can be used before it's defined
greet();

function greet() {
  console.log("Hello from a function declaration!");
}

// function expresion
//Stored in a variable
// Not hoisted: Cannot be used before it's defined
const fun = function(){
    console.log("Hello from a function expression!");
}

fun();

// Arrow function
const add = (a, b) => a + b;

add()

/* 
Differences from normal functions:
No this binding (arrow functions do not have their own this)
Can't be used as constructors (new MyArrowFunc() will fail)
Cleaner syntax for short logic
*/

// callback function
/*
A callback is just a function passed into another function as an argument, to be called later.
Used in asynchronous code, like when reading files, making API calls, or working with timers.
*/

function sayHello(name) {
  console.log("Hello", name);
}

function greetUser(callback) {
  const name = "Alice";
  callback(name); // calling the passed function
}

greetUser(sayHello); // Output: Hello Alice

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);


// Questions
// Can you please explain the hoisting in little deep with examples and simple language
// What is temporal dead zone
// What is working this in functions


// things to remember
// function declration vs function expression
// What is hoisting ?
// Hoisting work for var, let and const, and function expression and function declaration
// what is TDZ ? what is used of TDZ with example ?
// TDZ apply for functions ? (For function declration and var function expression No but for let and const function expression yes)
//  Always declare variables and functions at the top of their scope to avoid confusion with hoisting.
// when we should call regular functions and arrow functions ?
// What is use this in functions and how this works in arrow functions (Note arrow function does not have there own this they take it from
// surroudind)


