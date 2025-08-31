// function declration
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice")); // Hello, Alice

// function expresson
const add = function(a, b){
    return a + b;
}

// Arrow function
const multiple = (a, b) => {
    return a * b;
}

// scope
function outer() {
  let outerVar = 'I am outside';
  function inner() {
    console.log(outerVar); // can access outerVar
  }
  inner();
}
outer();