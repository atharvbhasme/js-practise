// what is array cloning: creating copy of existing array

//why we need array cloning?
let original = [1, 2, 3];
let copy = original;

copy.push(4);

console.log(original); // [1, 2, 3, 4] 😱 (original is also changed!)

//ways of cloing array
//using ..spread operator
let clone = [...original]
clone.push(5);
console.log(original); // [1, 2, 3, 4] (original is safe now)   

//using slice
let sliceClone = original.slice();
sliceClone.push(6);
console.log(original); // [1, 2, 3, 4] (original is safe now)\

//using Array.from
let arrayFromClone = Array.from(original);
arrayFromClone.push(7);
console.log(original); // [1, 2, 3, 4] (original is safe now)

//using concat
let concatClone = original.concat();
concatClone.push(8);
console.log(original); // [1, 2, 3, 4] (original is safe now)


//what are shallow clone and deep clone
//shallow clone: only copy the top layer
//deep clone: copy all layers

//shallow clone
const exampleArray ={name: 'Alice', hobbies: ['reading', 'gaming'] }
const shallowClone = {...exampleArray};
shallowClone.name = 'Bob';
shallowClone.hobbies.push('cooking');

console.log(exampleArray.name);        // 'Alice' ✅ (Not affected)
console.log(exampleArray.hobbies);     // affected which is wrong

//deep clone

let deepClone = JSON.parse(JSON.stringify(exampleArray));

deepClone.hobbies.push('cooking');

console.log(exampleArray.hobbies);  // ['reading', 'gaming'] ✅ (Not affected)
console.log(deepClone.hobbies); // ['reading', 'gaming', 'cooking']


//structured clone only work for modren browsers
let structuredClone = structuredClone(exampleArray);

//cloneDeep method
