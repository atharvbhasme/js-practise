What is array
Arrays are special variables that can hold more than one value at a time.
They are used to store lists of items, like numbers, strings, or even other arrays.

| ✅ Method                        | 🧩 Type    | ⚙️ Functionality                     | 📥 Parameters                    |
| -------------------------------- | ---------- | ------------------------------------ | -------------------------------- |
| -------------------------------- |
| `push()`                         | Mutating   | Adds item(s) to **end**              | `item1, item2, ...`              |
| `pop()`                          | Mutating   | Removes **last** item                | None                             |
| `shift()`                        | Mutating   | Removes **first** item               | None                             |
| `unshift()`                      | Mutating   | Adds item(s) to **start**            | `item1, item2, ...`              |
| `splice()`                       | Mutating   | Add/remove/replace items             | `start, deleteCount, item1, ...` |
| `sort()`                         | Mutating   | Sorts array (by default, as strings) | Optional: `compareFunction`      |
| `reverse()`                      | Mutating   | Reverses array in place              | None                             |
| `fill()`                         | Mutating   | Fills array with value               | `value, start?, end?`            |
| `copyWithin()`                   | Mutating   | Copies part of array within itself   | `target, start, end?`            |
| `flat()`                         | Mutating\* | Flattens nested arrays               | `depth` (default = 1)            |

| ✅ Method       | 🧩 Type      | ⚙️ Functionality                            | 📥 Parameters                               |
| --------------- | ------------ | ------------------------------------------- | ------------------------------------------- |
| `slice()`       | Non-Mutating | Returns a portion of array                  | `start?, end?`                              |
| `concat()`      | Non-Mutating | Merges arrays                               | `array1, array2, ...`                       |
| `map()`         | Non-Mutating | Transforms each element                     | `callback(currentValue, index, array)`      |
| `filter()`      | Non-Mutating | Filters elements based on condition         | `callback(currentValue, index, array)`      |
| `reduce()`      | Non-Mutating | Reduces array to single value               | `callback(acc, curr, i, arr), initialValue` |
| `reduceRight()` | Non-Mutating | Like reduce but from right                  | Same as `reduce()`                          |
| `find()`        | Non-Mutating | Finds first matching element                | `callback(currentValue, index, array)`      |
| `findIndex()`   | Non-Mutating | Finds index of first match                  | Same as `find()`                            |
| `includes()`    | Non-Mutating | Checks if value exists                      | `valueToFind, fromIndex?`                   |
| `indexOf()`     | Non-Mutating | Gets index of first occurrence              | `searchElement, fromIndex?`                 |
| `lastIndexOf()` | Non-Mutating | Index of last occurrence                    | Same as `indexOf()`                         |
| `every()`       | Non-Mutating | Checks if all elements match condition      | `callback(currentValue, index, array)`      |
| `some()`        | Non-Mutating | Checks if **any** element matches condition | Same as `every()`                           |
| `join()`        | Non-Mutating | Joins array into string                     | `separator` (optional)                      |
| `toString()`    | Non-Mutating | Converts array to string                    | None                                        |
| `entries()`     | Non-Mutating | Returns `[index, value]` pairs              | None                                        |
| `keys()`        | Non-Mutating | Returns array keys (indexes)                | None                                        |
| `values()`      | Non-Mutating | Returns array values                        | None                                        |
| `forEach()`     | Non-Mutating | Loops through array                         | `callback(currentValue, index, array)`      |

### Shallow Clone vs Deep clone

| Feature                     | Shallow Clone                              | Deep Clone                                                                      |
| --------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------- |
| Copies top-level            | ✅ Yes                                     | ✅ Yes                                                                          |
| Copies inner objects/arrays | ❌ No (shared)                             | ✅ Yes (fully copied)                                                           |
| Safe from changes           | ❌ No (linked inside)                      | ✅ Yes (fully separated)                                                        |
| Methods                     | Spread `...`, `slice()`, `Object.assign()` | `JSON.parse(JSON.stringify())`, custom clone functions, libraries like `lodash` |

best cloing methods
| Your Array Type | Best Clone Method |
| ------------------ | ----------------------------------------------- |
| Simple (flat) | `const copy = [...arr];` |
| Nested or complex | `const copy = structuredClone(arr);` |
| JSON-safe nested | `const copy = JSON.parse(JSON.stringify(arr));` |
| Complex + reusable | Use `lodash.cloneDeep(arr);` |

## This to remember

- What is array: store lists of items, like numbers, strings, or even other arrays.
- Methods in which you can interate over array like for, while, forEach, map etc
- what are the mutating and non mutating methods in arrays. mutating = change the original array, non-mutating = not - change the original array
- but return the new array
- fill is a mutating method but can also return the new array
- copyWithin is a mutating method but can also return the new array
- flat is a mutating method but can also return the new array
- how to decide which array method we should use while looping though array
- Ask yourself:
- Do I need a new array → map, filter
- Do I just want to loop and act → for .. of, forEach
- Do I want to find something → find, findIndex
- Do I want a true/false result → some, every
- Do I want to combine into a single value → reduce
- destructuring is used to unpack the values from arrays
- remeber the swap example, parameters destructuring and how we can assign the default value to variables
- ...rest get values from array, break array into different values
- ...spread merged the value into array, combine arrays or add elements
- remebers the examples of spread and rest operators.
- flat() can go deeper using flat(depth) flatMap() only flattens one level, and only works like map — not a general - flattener
- what is array cloning: creating copy of existing array
- what is deep cloning and shallow cloning, one layer clone: shallow clone, all layers clone deep clone
- best way to clone the array: for new browsers use structuredClone, for older browsers use lodash npm library, for - only values no function use JSON
