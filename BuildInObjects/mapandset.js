//what is map
//map is keyt value data strcuture to store data
//what is differnet between map and objects
//key type in object should only be kays and values but in map key can be anythings like objects or array aslo
//order: not ordered until ES6 in objects.Insertion order grantee
//map have better perfomance for frequant read and write performance
//No default keys for Maps, has default keys for prototypes in Map

//when to use Map
//When you need to use complex objects as keys, or when the order of insertion matters.

const map = new Map();
map.set(1, "value one")
map.set("2", "value two")
const keyObj = { id: "123abs" };
map.set(keyObj, {
    value: "inside objects"
})

//size of objects
console.log(`size of map is ${map.size}`)

//get value from map
console.log(map.get(1))
console.log(JSON.stringify(map.get(keyObj)))

//interating over map
for([key, value] of map ){
    console.log(`Key is ${key} and value is ${JSON.stringify(value)}`)
}


//What is set
//set is array but only store unique values

// Removing duplicates from an array is clumsy with an Array
const arr = [1, 2, 3, 2, 1, 4];
const uniqueArr = [...new Set(arr)]; // [1, 2, 3, 4] ✅ So easy!

// Using a Set directly
const uniqueIds = new Set();
uniqueIds.add(101);
uniqueIds.add(102);
uniqueIds.add(101); // ❌ Duplicate is ignored

console.log(uniqueIds.has(101)); // true (Very fast check!)
console.log(uniqueIds.size); // 2

// Iterating
for (let id of uniqueIds) {
  console.log(id); // 101, 102
}
