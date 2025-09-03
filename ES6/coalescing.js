//opetional chaning
//if element exists is not thwen re
// turn undefine
// const user = {
//     name:'atharv'
// }
// const city1 = user.address.city;

// console.log(city1) //will give error: TypeError if user or user.address is null/undefined

// const city2 = user?.address?.city; // will not give you error but return undefined

// console.log(city2)

//what is Nullish Coalescing:ullish coalescing is like asking, "Is this value null or undefined? If yes, use this fallback value instead. 
// If it's any other value (even a "falsy" one like 0 or ''), use it."

const userInput = 0;
const storedData = userInput ?? 10; // ✅ 0 is not null/undefined, so it's used
console.log(storedData); // 0 (The user's real input is preserved!)

// Without these operators (messy)
// let userAge;
// if (user && user.details && user.details.age != null) {
//   userAge = user.details.age;
// } else {
//   userAge = 100; // default age
// }

// // WITH Optional Chaining + Nullish Coalescing (clean!)
// const userAge = user?.details?.age ?? 100;