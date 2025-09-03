//types of type conversation in JS
// Implicit Conversion (Coercion): JavaScript automatically does it for you.
// Explicit Conversion: You manually tell JavaScript to convert the type.

//Implicit Conversation
// Number + String => String concatenation
console.log(10 + "5");    // "105" // number + string = string
console.log("5" + 10);    // "510" // string + number  = string
console.log(10 - "5");    // 5  (string is coerced to number) number - string = number
console.log("Hello" - "World"); // NaN (not a number)
console.log(10 * "5");    // 50 (string is coerced to number) number * string = number
console.log(10 / "5");    // 2 (string is coerced to number) number / string = number
// coerced meaning forcefully converting

//Explicite Convertions
let value = [[{}]]
console.log(typeof value.toString())
console.log(value)
//toString cannot work on null or undefined
//for null and undefined you can use String()

//for number conversation
console.log(Number("123")); // 123
console.log(Number("123.45")); // 123.45
console.log(Number("123abc")); // NaN (Can't convert fully)
console.log(Number("")); // 0 (Empty string becomes 0)
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// parseInt() and parseFloat() are more flexible for strings
console.log(parseInt("123px")); // 123 (Extracts the number part)
console.log(parseFloat("12.3em")); // 12.3
console.log(parseInt("abc123")); // NaN (Must start with a number)

// The quick unary + trick
console.log(+"456"); // 456 (number)