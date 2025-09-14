// Error objects contains below things
// namer: type of error object error, refference error, type error
// stack: where the error occured

const error = new Error("Something went wrong!");
console.log(error.name);    // "Error"
console.log(error.message); // "Something went wrong!"
console.log(error.stack);   // stack trace

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  divide(5, 0);
} catch (err) {
  console.error(err.name);    // "Error"
  console.error(err.message); // "Cannot divide by zero"
}

// types in error
// Error: Generic Error
// ReferenceError: Using undefiend values
// TypeError: Value of type error
// SyntaxError: Invalid JS Syntax
// RangeError: Value out of range
// URIError: Invalid use of error