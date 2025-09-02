// What is array
// Arrays are special variables that can hold more than one value at a time.
// They are used to store lists of items, like numbers, strings, or even other arrays.

// array creation and accessing
const arr = [1, 2, 3];
console.log(arr[0]);


// INterating over arrays
const numbers = [1,2,3,4,5,6,7,8,9];
const names = ["one", 'two', 'three', 'four', 'five'];

// using for loops
// for(let i=0;i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// using for of loop
// for (const num of numbers) {
//     console.log(num);
// }

//  using forEach loop
numbers.forEach((num) => {
    console.log(num);
});

// map
numbers.map((num)=>{
    console.log(num);
    
})


// Questions
// Methods in arrays
// mutating and non-mutating methods in arrays
// looping through array
// various methods used in looping
// destructuring arrays
// spread and rest operators in arrays
// Arrays and Array objects in JS
// flapmap and falt in JS
// Arrays cloning
// why we need array cloning
// what is right way to clone the array
// what is deep copy and shallow copy


// This to remember
// What is array: store lists of items, like numbers, strings, or even other arrays.
// Methods in which you can interate over array like for, while, forEach, map etc
// what are the mutating and non mutating methods in arrays. mutating = change the original array, non-mutating = not change the original array
// but return the new array
// fill is a mutating method but can also return the new array
// copyWithin is a mutating method but can also return the new array
// flat is a mutating method but can also return the new array
// how to decide which array method we should use while looping though array
// Ask yourself:
// Do I need a new array → map, filter
// Do I just want to loop and act → for .. of, forEach
// Do I want to find something → find, findIndex
// Do I want a true/false result → some, every
// Do I want to combine into a single value → reduce
// destructuring is used to unpack the values from arrays
// remeber the swap example, parameters destructuring and how we can assign the default value to variables
// ...rest get values from array, break array into different values
// ...spread merged the value into array, combine arrays or add elements
// remebers the examples of spread and rest operators.
// flat() can go deeper using flat(depth) flatMap() only flattens one level, and only works like map — not a general flattener
// what is array cloning: creating copy of existing array
// what is deep cloning and shallow cloning, one layer clone: shallow clone, all layers clone deep clone
// best way to clone the array: for new browsers use structuredClone, for older browsers use lodash npm library, for only values no function use JSON
// static methods in Arrays: from, isArray, of etc.