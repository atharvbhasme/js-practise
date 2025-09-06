//callback exmaple
function print(){
    console.log('Print after 2 sec')
}

setTimeout(print, 2000);

//callbackhell example


//quetions
//Is JS is single threaded lan or multi threded lan ?
//what is async fuctions ?
//what is callback hell ?
//what are promises ?
//How to use async await ?
//What callback queue/event queue



//what is callback: function as an argument and excute it later
//what is thread: A thread is the smallest sequence of programmed instructions that a CPU core can manage. It's a single, ordered task list.
//javascript is single threaded language: javascript manage so many task at single time using event loop
//how JS manage todo that: by non blocking and async
//All below are the part of JS Run Time Enviroments
//JS Engine: CallStack and Heap
//callstack: store sequnce of action to performance
//heap: actaully store the varibles and objects
//Web Apis: Not part of JS Engine but provided by browsers and nodejs, are handled on separate threads managed by the browser/Node.
//callback queue or event queue: queue that holds callback functions waiting to be executed once the Call Stack is empty.
//A constantly running process that monitors the Call Stack and the Callback Queue. If the stack is empty, it takes the first callback from the queue and pushes it onto the stack for execution.
//Callback Hell is the deep nesting of callbacks, making code unreadable and hard to maintain.
//It was a common pattern before Promises and async/await became standard.
//what are promises in JS: promise is object that represent the eventually success or failure of async operation and its results
//promises have three sets pending(intial), fulfil(success) and rejected(failed)
//what is difference between promises and callback ?
//callback lead to deeply nested callback hell, while promises provide flat chained structure for aysnc code. 
// and it's also better for error handling
//promise chaining =>  promise.then().then().catch()
//Promise.all([...promises]) It used to call mutiple async operatons waited all them to conmplete
//diference between promise.all ad promose.allSettled
//promise.all: if any one promise faile, it will not excute other promises, return the rejection
//promise.allSettled: if any one failed it will excute other promised and return data. it will never excute the catch block