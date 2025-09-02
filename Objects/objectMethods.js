//there are static methods and instace methods of objects
//static methods: Can be called wtihout creating objects
//insatce methods: Need to create object to call insatce methods

//static methods in Objects
 let user = {
    name: 'atharv',
    age: 24
 }

 //get keys
 console.log(Object.keys(user))

 //get values
 console.log(Object.values(user))

 //get key-value pairs
 console.log(Object.entries(user))

//merge the object, assign
let obj1 = {
    name: 'one'
}

let obj2 = {
    age: 24
}

let mergedObj = Object.assign(obj1, obj2);
console.log(mergedObj)

//freez, Prevent changes
const config = Object.freeze({ version: "1.0" });
console.log(config.version); // "1.0"
config.version = "2.0"; 

//seal, you can update existing properties, but you cannot add or remove properties.
Object.seal(user);

user.age = 26;       // ✅ allowed (update existing property)
console.log(user.age); // 26

user.city = "Paris"; // ❌ ignored (can't add new properties)
delete user.name;    // ❌ ignored (can't delete properties)

console.log(user); // { name: "Alice", age: 26 }

//create, to create obj with prototypes
const car = Object.create({
    name: 'toyota'
})

//instace methods
let person = {
  name: "Atharv",
  age: 24,

  // instance method
  greet() {
    return `Hello, I am ${this.name}`;
  },

  haveBirthday() {
    this.age += 1;
  }
};

console.log(person.greet()); 
user.haveBirthday();
console.log(person.age); 
