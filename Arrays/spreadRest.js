//..spread: Expands array into items
//break array into indivisual items
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]

//merge the array using spread operator
const a = [1,2]
const b = [3,4]
const mergedArray = [...a,...b];
console.log(mergedArray); //[1,2,3,4]

//pass array using spread operater
console.log(Math.max(...arr1)); // 3

//...rest
//mutiple values into single array
function sum(...mergedArray){
    return mergedArray.reduce((acc, curr) => {
        return acc + curr;
    });
}

console.log(sum(1,2,3,4,5)); // 15

//array destructuring
const colors = ['red', 'green', 'blue', 'yellow'];

const [first, second, ...others] = colors;

console.log(first);  // 'red'
console.log(second); // 'green'
console.log(others); // ['blue', 'yellow']