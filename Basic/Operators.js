// Arithmetic
let sum = 5 + 3;       // 8
let product = 5 * 2;   // 10

// Logical Operations
true && false   // false
true || false   // true
!true           // false

//Comparision
5 == '5'        // true (loose equality)
5 === '5'       // false (strict equality)
5 !== 3         // true

// Quetions
// How operators work in different data types in JS with exmaples ?
// Arithmetic Operators (+, -, *, /, %)
// Strings with +
console.log("Hello" + " World"); // "Hello World"

// Number + String => String concatenation
console.log(10 + "5");    // "105" // number + string = string
console.log("5" + 10);    // "510" // string + number  = string
console.log(10 - "5");    // 5  (string is coerced to number) number - string = number
console.log("Hello" - "World"); // NaN (not a number)
console.log(10 * "5");    // 50 (string is coerced to number) number * string = number
console.log(10 / "5");    // 2 (string is coerced to number) number / string = number
// coerced meaning forcefully converting


// Assignment Operators (=, +=, -=, etc.)
let a = 10;
a += 5;     // Same as a = a + 5;
console.log(a); // 15

let str = "Hello";
str += " World"; // Concatenates strings
console.log(str); // "Hello World"

// Comparison Operators (==, ===, !=, !==, <, >, etc.)
console.log(5 == '5');     // true (type coercion)
console.log(5 === '5');    // false (different types)
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log("10" > 5);     // true (string converted to number)

// Logical Operators (&&, ||, !)
// && returns first falsy or last truthy
console.log(true && false);     // false
console.log("Hello" && 123);    // 123

// || returns first truthy
console.log(false || "Hi");     // "Hi"
console.log("" || 0 || "Yes");  // "Yes"

// ! negates truthiness
console.log(!true);             // false
console.log(!0);                // true

// Unary Operators (typeof, +, -, !)
console.log(typeof 123);        // "number"
console.log(typeof "abc");      // "string"
console.log(typeof true);       // "boolean"
console.log(typeof {});         // "object"
console.log(typeof null);       // "object" (quirk in JS)
console.log(typeof undefined);  // "undefined"

console.log(+"5");              // 5 (string to number)
console.log(-"5");              // -5
console.log(typeof (()=>{}));   // "function"

// Objects and Arrays
console.log([] + []);        // "" (empty strings)
console.log([] + {});        // "[object Object]"
console.log({} + []);        // 0 (quirky result due to parsing as a block)