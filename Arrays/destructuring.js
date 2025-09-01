//what is destructuring arrays
//unpack the values from array and store it in variables
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);

//skiping items
const [one, , three] = arr;
console.log(one, three);

//using rest operators
const fruits = ['apple', 'banana', 'cherry', 'mango'];
const [first, ...others] = fruits;
console.log(first);   // 'apple'
console.log(others);  // ['banana', 'cherry', 'mango']

//default values
const [x, y, z = 10] = [1, 2];
console.log(x, y, z); // 1 2 10

//real world example
//swapping arrays
const num1 = 10;
const num2 = 20;

[num1, num2] = [num2, num1];

console.log(num1, num2); // 20 10

//Destructuring Parameters in functions
function printCoordinates([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
}

printCoordinates([10, 20]);