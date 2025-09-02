# ES6?

**ES6** (ECMAScript 2015 or ES2015) is the 6th major version of the ECMAScript language specification. JavaScript is the most popular implementation of this specification.

### Summary Table: ES6 vs. Pre-ES6 ("Normal JS")

| Feature                  | Pre-ES6 (ES5)              | ES6 (ES2015+)                            |
| :----------------------- | :------------------------- | :--------------------------------------- | ------------------------- | ------------------------------------ |
| **Variables**            | `var` (function-scoped)    | `let`, `const` (block-scoped)            |
| **Functions**            | `function` keyword         | Arrow Functions (`=>`)                   |
| **Strings**              | Concatenation with `+`     | Template Literals with `` ` `` and `${}` |
| **Data Extraction**      | Manual                     | Destructuring                            |
| **Parameters**           | `                          |                                          | ` workaround for defaults | Default Parameters (`param = value`) |
| **Objects**              | Verbose syntax             | Shorthand properties/methods             |
| **Async Handling**       | Callback Hell              | Promises (then `async/await` in ES2017)  |
| **Code Organization**    | IIFEs, scripts             | Modules (`import`/`export`)              |
| **Object Creation**      | Constructor Functions      | `class` syntax                           |
| **Array/Object Copying** | Manual loops or `.slice()` | Spread Operator (`...`)                  |

### Conclusion

**ES6 is modern JavaScript.** It fixed many of the language's quirks and introduced essential features for building large-scale, maintainable applications. All modern browsers and Node.js fully support ES6 features.

While "normal JS" (ES5) is still valid and will run anywhere, learning and using ES6+ is absolutely critical for any JavaScript developer today. Features like `let`/`const`, arrow functions, template literals, and modules are now fundamental parts of the language.

### Things to remeber

- what is ES6? ES6 modern JS
- how to implement the ES6 in project: in HTML file add type="module", or in package.json add "type":"module"
- what are template litertals ? it `` used to use varibles inside string and also for muti line string
  how Destructure the objects and arrays ? while Destructuring [var1, var2] for array and {var1,var2} from objects
- what are modules: modules are seprated code into different files.
  type="module" is mandatory in the browser.
- Modules are automatically in Strict Mode. Your code is held to higher standards (e.g., can't use undeclared variables).
- Modules have their own scope. Things you don't export are private to that file.
  A variable in mathTools.js isn't global and can't be accessed by main.js unless it's exported.
- File Protocol: If you just open your HTML file directly in the browser (file:///),
  modules won't work due to security restrictions. You need to run a local server (like using the Live Server extension in VSCode) or
  use a tool like Webpack or Vite, which handle modules for you.
- when to rename the import:is its too long or confliting with other name
- optional chainging: check if value exists or not, if not assign undefined,e.g: const data = api?.data?.user
- nullish caolscing: check if value is null,undefined,false,0,Nan,""
- use both for better coding practice
