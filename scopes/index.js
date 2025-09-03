//scopes
function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // can access outerVar because of lexical scope
  }
  inner();
}
outer(); // Output: I am outer

//varible shadowing
    var y = 10; // Global variable

    function myFunction() {
      var y = 20; // Inner variable shadows the global y
      console.log(y); // Output: 20
    }

    myFunction();
    console.log(y); // Output: 10

//Quetions
// What is scope ? Scope is all about accessibility. It defines where variables and functions can be seen and used in your code.
//what is global, functional, and {} block scope
//what is varible showding


// things to remember
// What is scope ? Scope is all about accessibility. It defines where variables and functions can be seen and used in your code.
// what is global, functional, and {} block scope.
// global scope: outside function and {} block.everyone can access it
// Variables declared inside a function
// block scope: A "block" is any code inside curly braces {}, like an if statement or a for loop.
// Variables declared with let and const are block-scoped. They are trapped inside those {}.
// what is varible showding: inner varible shadow(force other value than global value) gloabl varible
// what is this ? this is keyword in JS. which is pointed to object which is currently owning or excuting
// working of JS in global(lexical), functiona scope ?
// pitfall of this: when you copy the funtion in other varible call that varible it will give you undefined in value of this
// remeber the arrow function use of this. arrow function should be called inside fn to use this in arrow function method chaning using this
// what is clousers ? clouser is function, that access the varibles in outerfunctions scope even when outer function
// excustion is completed.
// how clouser work: clouser the remember enviroment of outer function
// how to create the clousers: return the function with outer function private varibles. see the funciton factory examples
// real life use cases: privacy, event handlings and functional programming 