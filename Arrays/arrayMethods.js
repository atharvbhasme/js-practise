// mutating and non-mutating methods in arrays
// mutating change the original array
// non-mutating methods do not change the original array, return the new array

// mutatating methods
const demoArray = [1, 2, 3];

demoArray.push(4); // add element to end of array

demoArray.pop(); // remove last element from array

demoArray.shift(); // remove first element from array

demoArray.unshift(0); // add element to beginning


// add, remove or replace elements
// parameters: start, deleteCount, item1, item2, ...
let fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.splice(1, 2);  // start at index 1, remove 2 items

console.log(fruits); 

fruits.splice(1, 0, 'banana', 'orange');  // start at index 1, remove 0, add 2 items

console.log(fruits);  

fruits.splice(1, 1, 'grape');  // start at index 1, remove 1 item, add 'grape'

console.log(fruits);  

let arr = [1,33, 23, 123,12]
// sort the array
console.log(arr.sort());

// reverse the array
console.log(arr.reverse());

// fill: fill all or part of an array with a static value. It modifies the original array and returns it.
// array.fill(value, start, end)
// value: The value to fill the array with.
// start (optional): The index to start filling (default is 0).
// end (optional): The index to stop filling (default is array length, not inclusive).
let fillarray = [1, 2, 3, 4];
fillarray.fill(0, 1, 3); // [1, 0, 0, 4]
console.log(fillarray);

//arrays copies a sequence of elements within the array to another position in the same array
// array.copyWithin(target, start, end)
// target: Index to copy elements to.
// start: Index to start copying from.
// end (optional): Index to stop copying (not inclusive, default is array length).
let copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3, 5); // [4, 5, 3, 4, 5]
console.log(copyArray)

//flat()
//creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//array.flat(depth)

let flatArray = [1, [2, [3, [4]]]];
flatArray.flat();      // [1, 2, [3, [4]]]
flatArray.flat(2);     // [1, 2, 3, [4]]
flatArray = flatArray.flat(Infinity); // [1, 2, 3, 4]

console.log(flatArray);


// Non mutating methods
// slice return the positions of array, parameters: start?, end?
const sliceArray = [1,2,3,4,56,7,83,3,231,2];
const slicedArray = sliceArray.slice(2, 5);
console.log(slicedArray);

//concat
// merges two or more arrays.
const concatArray1 = [1, 2, 3];
const concatArray2 = [4, 5, 6];
const concatenated = concatArray1.concat(concatArray2);
console.log(concatenated);

// map
// Transforms each element parameters:  callback(currentValue, index, array)
const mapArray = [1, 2, 3];
const mappedArray = mapArray.map((currentValue, index, array) => {
    console.log(currentValue, index, array);
    return currentValue * 2;
});
console.log(mappedArray);

// filter
// Filters elements based on condition parameters: callback(currentValue, index, array)
const filterArray = [1, 2, 3, 4, 5];
const filteredArray = filterArray.filter((currentValue, index, array) => {
    console.log(currentValue, index, array);
    return currentValue > 2;
});
console.log(filteredArray);

//reduce
//Reduces array to single value parameters: callback(acc, curr, i, arr), initialValue
// if we don't provide intial value it will take frist element as initial value
const reduceArray = [1, 2, 3, 4, 5];
const reducedValue = reduceArray.reduce((acc, curr, i, arr) => {
    console.log(acc, curr, i, arr);
    return acc + curr;
}, 0);
console.log(reducedValue);

// another example of reduce
const anotherfruits = ['apple', 'banana', 'apple'];
const count = anotherfruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;   
}, {});
// acc starts as an empty object {}
console.log(count); // { apple: 2, banana: 1 }

//find
//Finds first matching element parameters: callback(currentValue, index, array)
const findArray = [1, 2, 3, 4, 5];
const foundElement = findArray.find((currentValue, index, array) => {
    console.log(currentValue, index, array);
    return currentValue > 3;
});
console.log(foundElement);

//findIndex
//Finds index of first match.
const findIndexArray = [1, 2, 3, 4, 5];
const foundIndex = findIndexArray.findIndex((currentValue, index, array) => {
    console.log(currentValue, index, array);
    return currentValue > 3;
});
console.log(foundIndex);

//includes()
//Checks if value exists. parameters: value, start?
const includesArray = [1, 2, 3, 4, 5];
const includesValue = includesArray.includes(3);
console.log(includesValue);


//indexOf()
//Gets index of first occurrence paramters: searchElement, fromIndex?
const indexOfArray = [1, 2, 3, 4, 5];
const indexOfValue = indexOfArray.indexOf(3);
console.log(indexOfValue);

//every()
//check if all index match the condition. parameters: callback(currentValue, index, array)
const everyArray = [1, 2, 3, 4, 5];
const allGreaterThanZero = everyArray.every((currentValue, index, array) => {
    console.log(currentValue, index, array);
    return currentValue > 0;
});
console.log(allGreaterThanZero);

//some()
//Checks if any element matches condition
const someArray = [1, 2, 3, 4, 5];
const anyGreaterThanThree = someArray.some((currentValue, index, array) => {
    console.log(currentValue, index, array);
    return currentValue > 3;
});
console.log(anyGreaterThanThree);

//one element matched it will return true
//every element should it will return true

//join
//join array into string paramter: separator (optional)
const joinArray = ['Hello', 'World'];
const joinedString = joinArray.join(' ');
console.log(joinedString);

//toString
//convert the array into string
const toStringArray = [1, 2, 3];
const toStringResult = toStringArray.toString();
console.log(toStringResult);


//entries 
//Returns [index, value] pairs
//will only get value in for..of loop before entries() methods excution
const entriesArray = ['a', 'b', 'c'];
const entriesResult = entriesArray.entries();
for (const [index, value] of entriesResult) {
    console.log(index, value);
}

//keys
//returns arrays keys (indexes)
const keysArray = ['a', 'b', 'c'];
const keysResult = keysArray.keys();
for (const key of keysResult) {
    console.log(key);
}

//values
//return the array values
const valuesArray = ['a', 'b', 'c'];
const valuesResult = valuesArray.values();
for (const value of valuesResult) {
    console.log(value);
}
//forEach
//loop though array
const forEachArray = ['a', 'b', 'c'];
forEachArray.forEach((value, index, array) => {
    console.log(value, index, array);
});

//flat() can go deeper using flat(depth)
// flatMap() only flattens one level, and only works like map — not a general flattener
const flatMapArray = [1,2,3,4,5]
const flatMappedArray = flatMapArray.flatMap(x => [x, x * 2]);
console.log(flatMappedArray);

