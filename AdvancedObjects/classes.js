//what are the class in JS
//class in JS are blueprints for creating objects with similar properties and methods.
//classes are only avaible in ES6 and later versions of JS.

//class example
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const atharv = new Person("Atharv", 24);
atharv.sayHello(); 

//we use extends and super keywords to use inheritance in classes
//extneds: use when one class inherits another class
//super: use to call the parent class constructor and methods

class Student extends Person{
    constructor(name, age, grade){
        super(name, age); 
        this.grade = grade;
    }

    study(){
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
}

const student1 = new Student("John", 20, "A");
student1.sayHello(); 
student1.study();

//can you override the methods in child class?
class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }

    //overriding the sayHello method
    sayHello(){
        console.log(`Hello, I am ${this.name}, a teacher of ${this.subject}`);
    }
}

const teacher1 = new Teacher("Alice", 30, "Math");
teacher1.sayHello();
atharv.sayHello();

//what if you don't use super in child class constructor?
//will get reference error

//can you extneds more than one class in JS?NO, JS does not support multiple inheritance using classes. A class can only extend one parent class.