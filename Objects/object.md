# Objects

### what are objects

building blocks in JS. That can store the data

### Ways to create objects

| Method                   | Use Case                                                 |
| ------------------------ | -------------------------------------------------------- |
| **Object Literal `{}`**  | Default choice for simple objects.                       |
| **new Object()**         | Avoid; same as `{}` but verbose.                         |
| **Constructor Function** | Legacy code (pre-ES6).                                   |
| **Class**                | When building reusable OOP-style models.                 |
| **Factory Function**     | When you prefer functional style and don’t need `class`. |
| **Object.create()**      | When controlling prototype inheritance.                  |
| **Object.freeze()**      | For configs/constants you don’t want changed.            |

### When to use . and []

- Use . : When object is normal
- Use [] :
  - proprety have spaces
  - proprety is nunmber
  - proprety to have dyamic value or want access property using other varibles with same name or same value

### Prototype and inheritance

- Prototype = a “backup object” that JS looks into if a property/method is missing.
- Inheritance = one object can use properties/methods of another via prototype chain.
- Use cases:
  - Share methods between many objects (avoid duplicate code).
  - Build class-like structures in JavaScript.

### Object methods

| Method                                            | What it does                                                                      | When to use (Simple Language)                                                      | Example                                                    |
| ------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **`Object.keys(obj)`**                            | Returns an array of property names (keys).                                        | When you need just the keys of an object.                                          | `Object.keys({a:1,b:2}) → ["a","b"]`                       |
| **`Object.values(obj)`**                          | Returns an array of values.                                                       | When you need only the values.                                                     | `Object.values({a:1,b:2}) → [1,2]`                         |
| **`Object.entries(obj)`**                         | Returns an array of `[key, value]` pairs.                                         | When you want both keys and values (good for looping).                             | `Object.entries({a:1}) → [["a",1]]`                        |
| **`Object.assign(target, ...sources)`**           | Copies properties from source objects into target.                                | When you want to copy or merge objects.                                            | `Object.assign({}, {a:1}, {b:2}) → {a:1,b:2}`              |
| **`Object.freeze(obj)`**                          | Freezes object → cannot add, delete, or change properties.                        | When you want a constant object that should never change.                          | `Object.freeze({pi:3.14})`                                 |
| **`Object.seal(obj)`**                            | Seals object → cannot add/delete, but can update values.                          | When you want to lock object structure but allow updates.                          | `Object.seal({name:"Alice"})`                              |
| **`Object.create(proto)`**                        | Creates new object with given prototype.                                          | When you want to set up inheritance manually.                                      | `Object.create({eats:true})`                               |
| **`Object.getPrototypeOf(obj)`**                  | Gets prototype of an object.                                                      | When debugging or checking inheritance chain.                                      | `Object.getPrototypeOf([]) → Array.prototype`              |
| **`Object.setPrototypeOf(obj, proto)`**           | Sets prototype of an object.                                                      | When you want to change inheritance (⚠️ rarely used, slow).                        | `Object.setPrototypeOf(obj, proto)`                        |
| **`Object.hasOwn(obj, key)`** (newer)             | Checks if object has a given property (own, not inherited).                       | When you want safer property checking than `in`.                                   | `Object.hasOwn({a:1},"a") → true`                          |
| **`Object.is(a, b)`**                             | Compares two values (like `===` but handles `NaN` correctly).                     | When you need strict comparison including special cases.                           | `Object.is(NaN, NaN) → true`                               |
| **`Object.getOwnPropertyNames(obj)`**             | Returns all property names (including non-enumerable).                            | When you need hidden + normal property names.                                      | `Object.getOwnPropertyNames(Math)`                         |
| **`Object.getOwnPropertyDescriptors(obj)`**       | Returns details (descriptors) of all properties.                                  | When you need to copy full property definitions (with writable, enumerable, etc.). | Advanced use                                               |
| **`Object.defineProperty(obj, key, descriptor)`** | Defines or modifies a property with control (writable, enumerable, configurable). | When you want fine control over a property.                                        | `Object.defineProperty(obj,"x",{value:10,writable:false})` |
| **`Object.defineProperties(obj, props)`**         | Defines multiple properties at once.                                              | When you want to define many controlled properties together.                       | Similar to above, but multiple.                            |
| **`Object.getOwnPropertyDescriptor(obj, key)`**   | Gets details about one property.                                                  | When you want to check if a property is writable, enumerable, etc.                 | `Object.getOwnPropertyDescriptor(obj,"x")`                 |
