# JavaScript Basic Concepts

Basic Concepts to revise

- Primitive and Reference Data Types
- What is diffeence between stored by value and stored by reference
- How to avoid unwanted mutation of objects and arrays
- How types add in operations like number and string addition plus other operators
- Diff between == and === ?
- Logicallt operatos first selection ?
- type of null is object
- `string + number` → **string**
- `number + string` → **string**
- `number - string` → **number**
- `number * / string` → **number**
- `==` → value only
- `===` → value + type
- `null == undefined` → **true**
- `null === undefined` → **false**
- `&&` → first **falsy** or last **truthy**
- `||` → first **truthy**
- `typeof null` → **"object"**
- `typeof (+"5")` → **"number"**
- toString cannot work on null or undefined
- for null and undefined you can use String(null) = "null"
- Number(""), Number(null), Number(false) = 0
- Number("abc123), Number(undefined) = NaN
- Unnary Conersation = `console.log(+"456");` // 456 (number)

### IMP

- **Use === instead of ==.**
- **Use Number(), String(), and Boolean() when you need to convert types.**
- **Remember the quirks of the + operator.**
