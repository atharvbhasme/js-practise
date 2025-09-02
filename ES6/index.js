//ES6 is ECMAScript standard for JS
//ES6 is modern JS


//template literals
//instead of using + sign we can use `` for and ${} to insert varibles in string
//also when assigning mutilien string
const test = "atharv";
console.log(`Hi, my name is ${test}`)

//Destructuring arrays and objects
let fruits = ["apple", "banana", "mango"];
let [first, second] = fruits;

console.log(first);  // apple
console.log(second); // banana

let user = { name: "Atharv", age: 22 };
let { name, age } = user;

console.log(name); // Atharv
console.log(age);  // 22


//export import modules in 
import { add, DoThings} from './helper.js'
const addition = add(12,23)
console.log(addition);

const dothingObj = new DoThings('atharv',24);
dothingObj.print()

//import everything
import * as helper from './helper.js'
const pi = helper.PI

//import default
import printNumber from './helper.js';
printNumber()

//rename you exports

//Quetions
//What is ES6 starndard ?
//Difference from ES6 normal JS ?
//how Destructure the objects and arrays ? while Destructuring [var1, var2] for array and {var1,var2} from objects 
//what are modules in JS and how to use modules in JS
//how to implement the ES6 in project


// things to remember
// what is ES6? ES6 modern JS
// how to implement the ES6 in project: in HTML file add type="module", or in package.json add "type":"module"
// what are template litertals ? it `` used to use varibles inside string and also for muti line string
// how Destructure the objects and arrays ? while Destructuring [var1, var2] for array and {var1,var2} from objects 
// what are modules: modules are seprated code into different files.
// type="module" is mandatory in the browser.
// Modules are automatically in Strict Mode. Your code is held to higher standards (e.g., can't use undeclared variables).
// Modules have their own scope. Things you don't export are private to that file. 
// A variable in mathTools.js isn't global and can't be accessed by main.js unless it's exported.
// File Protocol: If you just open your HTML file directly in the browser (file:///), 
// modules won't work due to security restrictions. You need to run a local server (like using the Live Server extension in VSCode) or 
// use a tool like Webpack or Vite, which handle modules for you.
// when to rename the import:is its too long or confliting with other name
// optional chainging: check if value exists or not, if not assign undefined,e.g: const data = api?.data?.user
// nullish caolscing: check if value is null,undefined,false,0,Nan,""
// use both for better coding practice