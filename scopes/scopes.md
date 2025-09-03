# Scopes

### things to remember

- What is scope ? Scope is all about accessibility. It defines where variables and functions can be seen and used in your code.
- what is global, functional, and {} block scope.
- global scope: outside function and {} block.everyone can access it Variables declared inside a function
- block scope: A "block" is any code inside curly braces {}, like an if statement or a for loop.
  Variables declared with let and const are block-scoped. They are trapped inside those {}.
- what is varible showding: inner varible shadow(force other value than global value) gloabl varible
- what is this ? this is keyword in JS. which is pointed to object which is currently owning or excuting
- working of JS in global(lexical), functiona scope ?
- pitfall of this: when you copy the funtion in other varible call that varible it will give you undefined in value of this
- remeber the arrow function use of this. arrow function should be called inside fn to use this in arrow function
- method chaning using this
- what is clousers ? clouser is function, that access the varibles in outerfunctions scope even when outer function excustion is completed.
- how clouser work: clouser the remember enviroment of outer function
- how to create the clousers: return the function with outer function private varibles. see the funciton factory examples
- real life use cases: privacy, event handlings and functional programming

### Summary Table

| Context              | What `this` refers to                                             | Example                                |
| :------------------- | :---------------------------------------------------------------- | :------------------------------------- |
| **Global**           | The global object (`window`, `global`)                            | `console.log(this);`                   |
| **Object Method**    | **The object** calling the method                                 | `obj.method()` → `this` = `obj`        |
| **Regular Function** | **The caller** (often the global object or `undefined`)           | `myFunc()` → `this` = global/undefined |
| **Arrow Function**   | **The `this` value from its parent scope** (where it was written) | `() => {...}` → inherits `this`        |

### Simple Rules to Remember

1.  **Look at the call site:** How is the function being invoked? (`obj.method()` vs. `method()`)
2.  **Left of the dot rule:** For `obj.method()`, `this` is `obj`.
3.  **Arrow functions are different:** They don't have their own `this`. They just use the `this` from the function or scope they were written in.
4.  **Use arrow functions for callbacks:** When you need to access the surrounding `this` inside a callback (like in `setTimeout`, event listeners, or `forEach`), use an arrow function to avoid confusion.
