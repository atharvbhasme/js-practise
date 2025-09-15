class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    sayHello(){
        console.log(`Hi, I am ${this.name} and I am ${this.age} old`)
    }

    static findBirthYear(age){
        const todaysDate = new Date();
        console.log(`birth year is ${todaysDate.getFullYear()  - age}`)

    }
}

Person.findBirthYear();

// Person.sayHello()

const person1 = new Person("Atharv", 24)

person1.sayHello();

Person.findBirthYear(24);

// what is difference between static methods and instance methods?
// static methods belong to class
// insatce merthods belong to object, need to create the object from class using new keyword to access instace methods
// can we access this in static methods?NO
// can we call static methods in instace?No. They are only accessible via the class name.
// can static methods call anoter static method?yes