// Hoisting is JavaScript's default behavior of moving declarations to the top of the current 
// scope (either function or global) before code execution.

// variables and functions can be used before they are declared.
// But only the declarations are hoisted, not the initializations (assignments).

console.log(a); // undefined
var a = 10;
console.log(a); // 10

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ❌ ReferenceError
const c = 30;

// let and const are hoisted, BUT they are in a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration line.
// You cannot access them before the line where they are declared.

sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}

sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};

var sayHi;        // declaration hoisted
sayHi();          // sayHi is undefined, so TypeError
sayHi = function() {
  console.log("Hi!");
};

// Always declare variables and functions at the top of their scope to avoid confusion with hoisting.


// What is temporal dead zone
// time between the starting of block/scope and line where let and const where declared
// you can not access let or const during time 
// you will get refference error if you try to access
// even tho varible is hosited but but not intialed
// 

{
  console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
  let x = 5;
}

{
  let x = 5;
  console.log(x); // ✅ 5
}

// TDZ only applies to let and const, not var.
// what is use of TDZ
// prevent the bug from using varibles before they are declared
// clean coding practices