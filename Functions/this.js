// What is this 
// this is special key word, refer to object that is currently calling the functions

// example 1
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};

// person.greet();

// example 2 where we are using arrow functions
const person2 = {
  name: "Alice",
  greet: () => {
    console.log("Hi, I'm " + this.name);
  }
};

person2.greet();

// greet is an arrow function.
// So this does not refer to person.
// It tries to get this.name from the outer scope (like window in browsers or global in Node.js), 
// which usually doesn’t have a name → undefined.

// Arrow functions behave differently with this.
// they do not have their own this
// instead they use this from surrounding scope

// right way to use this inside arrow functions

const person3 = {
  name: "Charlie",
  hobbies: ["reading", "coding"],
  showHobbies: function () {
    this.hobbies.forEach((hobby) => {
      console.log(this.name + " likes " + hobby);
    });
  }
};

person3.showHobbies();
