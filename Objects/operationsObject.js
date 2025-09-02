//operations on objects
//adding new property
let car = { brand: "Tesla" };
car.color = "red";   // add new property
console.log(car);    // { brand: "Tesla", color: "red" }

//updating the existing property
car.brand = "BMW";   
console.log(car);    // { brand: "BMW", color: "red" }

//deleting the preoprty
delete car.color;    
console.log(car);    // { brand: "BMW" }

//looping thourgh array
let person = { name: "Dana", age: 28 };

for (let key in person) {
  console.log(key, person[key]);
}

let keys = Object.keys(person);
console.log(keys); // ["name", "age"]

keys.forEach(k => console.log(k, person[k]));

//priting vales
console.log(Object.values(person))