//what is eventloop
//js is single threaded language sometime we have operation that take time to complete like API, setTimeout, file operation
//js use eventloop to handle async operation
//eventloop check if call stack is empty if empty it look at callback queue if there is any function it push to call stack
//eventloop is a mechanism that allows js to perform non-blocking operations by 
// offloading operations to the system kernel whenever possible

console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 0);

console.log("End");


//what is microtask and macrotask
//In js not all async task are same, some are more urgent than other
//macrotask: setTimeout, setInterval, setImmediate, I/O, UI rendering
//microtask: Promises, process.nextTick, MutationObserver
//microtask have higher priority than macrotask
//after executing a script the event loop will first process all microtasks in the microtask queue before moving on to the next macrotask in the macrotask queue

//example
console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});

console.log("End");
//output: Start, End, Microtask: Promise.then, Macrotask: setTimeout`