//what is json
//json is standard format for data
//JSON is similar to objects but have stricter rules
//different between JSOn Object and JS objects
//JSON keys must be in ""
//No functions,date and undefined value are allowed in JSON
//only string, number, number, boolean, null, array and another JSON objects are allowed in JSON

const person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "hiking"],
  address: {
    city: "Boston",
    zip: null // Using null intentionally
  }
  // Note: no trailing comma (a JS object can have it, but JSON can't)
};

// Convert (stringify) the object into a JSON string
const jsonString = JSON.stringify(person);

console.log(jsonString);

//What will JSON.stringify() do with undefined, a Function, or a Date?
//turn them into null or remove them
const obj = { name: "A", data: undefined, fn: function() {}, now: new Date(), show: [] };
console.log(`Objects is ${JSON.stringify(obj)}`); 

// What will happen if you try to JSON.parse() an invalid JSON string?
// try {
//   const result = JSON.parse('{ invalid JSON }');
// } catch (error) {
//   console.error("Invalid JSON received!", error);
// }