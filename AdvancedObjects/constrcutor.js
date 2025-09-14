//what are the contrcutor funtions?
//functions that create new objects with similar properties and methods by using the 'new' keyword.

//example of a constructor function
function person(name, age){
    this.name = name;
    this.age = age;
    this.printFullname = () => {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}


//please note that we need "new" keyword to create a new object using constructor function
const person1 = new person("Atharv", 20);
const person2 = new person("John", 25);

person1.printFullname();
person2.printFullname(); 


//After ES6 we have classes which are similar to constructor functions
class Animal{
    constructor(name, action){
        this.name = name;
        this.action = action;
    }

    doAction = () => {
        console.log(`${this.name} can ${this.action}`);
    }
}

const dog = new Animal("Dog","BarK");
const cat = new Animal("Cat","Meow");
dog.doAction();
cat.doAction();

//difference between constructor function and class
//1. Classes are not hoisted but constructor functions are hoisted.
//2. Classes always use strict mode but constructor functions may or may not use strict mode.
//3. Classes cannot be called without 'new' keyword but constructor functions can be called without 'new' keyword.
//4. Classes support inheritance using 'extends' and 'super' keywords but constructor functions use prototype chaining for inheritance.

//what happen if you return the object from constructor function or class?
function Test() {
    this.name = "Default";
    return { name: "Overridden" };
}

const obj = new Test();
console.log(obj.name); // Overridden

//can JS class have multiple constructors?NO, JS class have only one constrcutor method. will get syntax error if we try to create multiple constructor methods in a class.


