// mutating and non-mutating methods in arrays
// mutating change the original array
// non-mutating methods do not change the original array, return the new array

// mutatating methods
const demoArray = [1, 2, 3];

demoArray.push(4); // add element to end of array

demoArray.pop(); // remove last element from array

demoArray.shift(); // remove first element from array

demoArray.unshift(0); // add element to beginning

demoArray.splice(1, 2, 'a')
