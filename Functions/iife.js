//IIFE (Immediately Invoked Function Expression)
// call the function exatcly after defination,it can run only one time

(function(){
    console.log("call immediatly and only one time")
})()

//use case of IIFE
//mostely data privacy
// While IIFEs were essential before ES6 modules, their importance has decreased with the widespread adoption of:
// ES6 Modules (import/export): The modern, native way to achieve privacy and avoid global pollution.
// let/const: Block scoping solves many of the loop variable capture issues.