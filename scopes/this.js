//what is this
//this is keyword in JS
//which is pointed to object which is currently owning or excuting

//global use of this
//outside any function it's referer to global objecs
// In a browser
console.log(this); // Logs the Window object

// this.globalVariable = "I'm on the global object!";
// console.log(window.globalVariable); // "I'm on the global object!"

//for nodejs replace window with global
this.globalVariable = "I'm on the global object!";
console.log(global.globalVariable); // "I'm on the global object

const person = {
  name: "Alice",
  greet: function() {
    // 'this' points to the 'person' object
    console.log(`Hello, my name is ${this.name}!`);
  }
};

person.greet(); // "Hello, my name is Alice!"
// The object left of the dot (.) is 'person', so 'this' = person

//pitfall of this

const greetPerson = person.greet; // Copying the function, NOT calling it
greetPerson() //undefined 

const group = {
  title: "Our Group",
  names: ["Alice", "Bob"],

  showList() {
    // ✅ 'this' here is the group object (because of the method call group.showList())
    this.names.forEach(name => {
      // This arrow function inherits 'this' from showList()
      console.log(`${this.title}: ${name}`);
    });
  }
};

group.showList();
// Our Group: Alice
// Our Group: Bob

const car = {
  brand: "Ford",
  start: function() {
    console.log(`Starting the ${this.brand}`); // ✅ 'this' is car
    setTimeout(() => {
      // ✅ The arrow function inherits 'this' from the 'start' method
      console.log(`Inside callback: ${this.brand}`); // Logs "Ford"
    }, 1000);
  },
  end: function(){
    console.log(`Ending the ${this.brand}`)
    setTimeout(function(){
         console.log(`Inside callback: ${this.brand}`); //❌ we be getting undeifned value
    },1000)
  }
};
car.start();

//method chaning using this
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(number) {
    this.value += number;
    return this; // <- The magic! Return the instance itself.
  }

  subtract(number) {
    this.value -= number;
    return this; // <- Return the instance again.
  }

  multiply(number) {
    this.value *= number;
    return this;
  }

  getValue() {
    return this.value;
  }
}

// Without chaining (clunky)
const calc = new Calculator();
calc.add(5);
calc.multiply(2);
console.log(calc.getValue()); // 10

// WITH CHAINING (clean and readable)
const result = new Calculator(10)
  .add(5)    // 'this' is the calculator instance, returns the instance
  .multiply(2) // 'this' is still the instance, returns the instance
  .subtract(3)
  .getValue(); // Finally, we get the result

console.log(result); // (10 + 5) * 2 - 3 = 27


