//what is clousers ?
//clouser is function that access to varible from outer functions scope even though outer scope 
// is already excuted. 
//how it happen because innner function remeber the eenviroment

function outerFunction(outerVar){
    function innerFunction(innerVar){
        console.log(`Outer var is ${outerVar}`)
        console.log(`Inner var is ${innerVar}`)
    }

    return innerFunction;
}

const myClouser = outerFunction("this is outside")

myClouser("this is inside")

//real life example
// data privacy
// event handling
// functional programming 

//data privacy

function createCounter() {
  let count = 0; // This is a "private" variable. You can't access it from outside.

  // We return an object with functions that can access 'count'
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter()
counter.increment()
counter.decrement()
console.log(counter.count)


//function factories
function createGreeting(greetingWord) {
  // The returned function closes over the 'greetingWord'
  return function(name) {
    console.log(`${greetingWord}, ${name}!`);
  };
}

const sayHello = createGreeting('Hello');
const sayHi = createGreeting('Hi');
const sayHola = createGreeting('Hola');

// Now we have three specialized functions
sayHello('Alice'); // "Hello, Alice!"
sayHi('Bob');      // "Hi, Bob!"
sayHola('Charlie'); // "Hola, Charlie!"
