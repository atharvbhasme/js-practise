//what are the objects
//building blocks in JS.

//Ways of creating the objects

//basic of array
//objhect literals
const obj = {
    name:"Atharv",
    age: 23,
    hoobies: ["reading", "coding"]
}
// console.log(obj)

//using new keyword, try to avoid this methods
const newObj = new Object()
newObj.name = "Atharv"
newObj.age = 24

//ES6 classes
class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    greet(){
        console.log(`Hello, I am ${this.name}`)
    }
}

const p1 = new Person('Atharv',25);
p1.greet()

//using factory functions

function createPreson(name, age){
    return {
        name,
        age,
        greet(){
            console.log(`Name is ${name}`)
        }
    }
}

const p2 = createPreson('Atharv', 24)
p2.greet()

//using Object.create() when you want inheritance and prototyes
let animal = { eats: true };
let rabbit = Object.create(animal);

//using singletone when you want o freez the objects used for configuration and constats
const CONFIG = Object.freeze({
  appName: "MyApp",
  version: "1.0"
});

rabbit.hops = true;
console.log(rabbit.eats); // true (inherited)


//accessing the elements in objects
//accessing though .
console.log(obj.name)
console.log(obj.age)

//accesing though braclet
console.log(obj['hoobies'])

//when to use . and []
//examples

//dynamic property name
let key = "age";
let person = { name: "Bob", age: 30 };

console.log(person[key]);  // 30 ✅
console.log(person.key);   // undefined ❌ (looks for "key" property)

//property name have spaces
let car = { "car brand": "Tesla" };
console.log(car["car brand"]); // "Tesla"

//when property name is number
let data = { 1: "one", 2: "two" };

console.log(data[1]); // "one"
console.log(data["2"]); // "two"

//summary
//when to use []
//proprety have spaces
//proprety is nunmber
//proprety to have dyamic value or want access property using other varibles with same name or same value

//destrcuring the objects
const {name, age, hoobies} = obj

//..spread operator in objects
const obj2 = {...obj}
console.log(obj2);



//Quetions
//what are ways to create objcets which one to use ?
//what are the static and instace methods in objects ?
//when to use static methods and insatce methods
// . vs [] use in array ? When to use . or block ? which one to use and when ?
//methods inside objects
//refference types in objects
//adding, updating and deleting the objects
//looping though objects
//obejct Destructuring
//..spread operatoras in objects
//Prototypes & Inheritance
//Object Methods you MUST know


//things to remember
//which way to use when creating the objects, simple objects us object literals, using when need OOPS
//when to use the . or [], when property name is normal fixed property name, but if key containts dyanamic,unusual, or not a valid identifier like space between characters   
//operations on objects, assign new propery, add property to exisitng object and delete property of object
//object Destructuring is similar to array just use { var1, var2 } curly bases for destrcuring 
//...spread operator is also work like array
//same proprties strcuredClone, JSON.pars(JSON.stringly), and loadh.clonDeep methods we can use to make deep copy
//remerber the object methods like 