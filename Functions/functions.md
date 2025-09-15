# Functions

Things to remembers

What are the functions ?

What are callback in functions ? functions calling itself is callback functions

What is different between function declaration and function expression (main different is declaration can be hoisted and expression can not be hoisted, can be called before declaration) ?

What is hoisting ? (calling function or variable before declaration)

let and const can be hoisted but we will get error: reference error when we try get them before declaration

why we get error because the TDZ (temporal dead zone) = time between scope/block and let/const declaration is TDZ.

TDZ apply for functions ? (For function declaration and var function expression No but for let and const function expression yes)

IIFEs: call function immedailty after defination. use mmostely for privacy but improtant before es6

**Always declare variables and functions at the top of their scope to avoid confusion with hoisting.**

when we should call regular functions and arrow functions ?

| Task                                   | Use        |
| -------------------------------------- | ---------- |
| Object or class method                 | Regular 🔄 |
| Simple callback / short function       | Arrow ✅   |
| Function needing `this` or `arguments` | Regular ✅ |
| Avoiding `this` bugs in nested scopes  | Arrow ✅   |

What is use this in functions and how this works in arrow functions (Note arrow function does not have there own this they take it from surrounding

what is difference between static methods and instance methods?
static methods belong to class
insatce merthods belong to object, need to create the object from class using new keyword to access instace methods

can we access this in static methods?NO
can we call static methods in instace?No. They are only accessible via the class name.
can static methods call anoter static method?yes
