//What is Math
//Math is build in object with for calculations and mathmatical objects
//Math does not have constrcutor so don't use new keyword for math

//Math properties
console.log(`Value of PI ${Math.PI}`)
console.log(`Value of E ${Math.E}`)
console.log(`Value of SQRT2 ${Math.SQRT2}`)


//Math methods
//Rouding Numbers
const value = 5.2;
//roud to nearest integer
console.log(Math.round(value)) //5
console.log(5.7) //6
//round to down to nearest interger
console.log(Math.floor(5.7))//5
//round to up to nearest interger
console.log(Math.ceil(5.3)) //6
//remove the decimal part and only return interger part
console.log(Math.trunc(4.9999))


//Finding values
//Max value
console.log(`Max value is ${Math.max(10,20,5)}`)

//Min Value
console.log(`Min value is ${Math.min(10,20,5)}`)

//Absoluet value turn negative value into postive\
console.log(`Absolute value is ${Math.abs(-5.5)}`)

//powers and roots
//power
console.log(`Power is ${Math.pow(2,3)}`) //Math.pow(base, exponenet)

//Math
console.log(`square root is ${Math.sqrt(64)}`)

//cuber root
console.log(`cube root is ${Math.cbrt(27)}`)

//random numbers
//return random floating number between 0 inclusive and 1 exclusive
//generate random number between 0 to 10
console.log(`Random number is ${Math.floor(Math.random()* 10 + 1)}`)

//find the maximum and minumum value in array
const numbers = [5, 2, 9, 1, 5];
console.log(`Maximum value is ${Math.max(...numbers)}`)
console.log(`Minimum value is ${Math.min(...numbers)}`)

//how to check if number is interger or not
function isInteger(num) {
  return num === Math.floor(num);
}
console.log(isInteger(5.0)); // true


//what is 0 inclusive and 1 exclusive
//we will ever gate value 1 in Math.random as 1 is exclusive