//what are prototype
//hidden JS object property
//it will point to another object which is not exist,
//inheritance in JS happens through prototypes

let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

// Create a new object with animal as its prototype
let rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true (inherited from animal)
rabbit.walk();            // Animal walks (inherited)
console.log(rabbit.jumps); // true (own property)

//prototype chaning

let tiger = Object.create(animal)
tiger.walk()

tiger.prototype

//using classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

let d = new Dog("Rex");
d.speak(); // Rex barks


