// JavaScript supports several primitive data types:

// 1. Number: Represents both integer and floating-point numbers.
let age = 30;

// 2. String: Represents text enclosed in single ('') or double ("") quotes.
let name = "John";

// 3. Boolean: Represents true or false values.
let isStudent = true;

// 4. Undefined: Represents a variable that has been declared but hasn't been assigned a value.
let undefinedVar;

// 5. Null: Represents an intentional absence of any object value.
let nullVar = null;

// JavaScript also has more complex data types:

// 6. Object: Represents a collection of key-value pairs (properties).
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// 7. Array: Represents an ordered list of values.
let colors = ["red", "green", "blue"];

// 8. Function: Represents a reusable block of code.
function greet(name) {
  return "Hello, " + name + "!";
}

// 9. Symbol: Represents a unique and immutable value, often used as object property keys.
const uniqueSymbol = Symbol("description");

// 10. BigInt: Represents large integers, useful for numbers exceeding the Number data type's limit.
let bigIntValue = 1234567890123456789012345678901234567890n;

// 11. Date: Represents dates and times.
let currentDate = new Date();

// 12. Regular Expression (RegExp): Represents a pattern used for matching character combinations.
let regexPattern = /[0-9]{3}-[0-9]{2}-[0-9]{4}/;

// You can check the data type of a variable using the 'typeof' operator.
console.log(typeof age);        // "number"
console.log(typeof name);       // "string"
console.log(typeof isStudent);  // "boolean"
console.log(typeof undefinedVar);// "undefined"
console.log(typeof nullVar);     // "object" (Note: This is a historical quirk in JavaScript)
console.log(typeof person);      // "object"
console.log(typeof colors);      // "object"
console.log(typeof greet);       // "function"
console.log(typeof uniqueSymbol);// "symbol"
console.log(typeof bigIntValue);// "bigint"
console.log(typeof currentDate); // "object" (Date is also an object)
console.log(typeof regexPattern);// "object" (RegExp is also an object)
