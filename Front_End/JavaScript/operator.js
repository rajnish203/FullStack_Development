// Arithmetic Operators

let num1 = 10;
let num2 = 5;

// Addition (+): Adds two numbers.
let sum = num1 + num2; // 10 + 5 = 15

// Subtraction (-): Subtracts the second number from the first.
let difference = num1 - num2; // 10 - 5 = 5

// Multiplication (*): Multiplies two numbers.
let product = num1 * num2; // 10 * 5 = 50

// Division (/): Divides the first number by the second.
let quotient = num1 / num2; // 10 / 5 = 2

// Modulus (%): Returns the remainder after division.
let remainder = num1 % num2; // 10 % 5 = 0


// Assignment Operators

let x = 5;

// Assignment (=): Assigns a value to a variable.
let y = x; // y is now 5

// Addition Assignment (+=): Adds a value to a variable.
x += 2; // Equivalent to x = x + 2; x is now 7

// Subtraction Assignment (-=): Subtracts a value from a variable.
y -= 3; // Equivalent to y = y - 3; y is now 2

// Multiplication Assignment (*=): Multiplies a variable by a value.
x *= 4; // Equivalent to x = x * 4; x is now 28


// Comparison Operators

let a = 10;
let b = 5;

// Equal (==): Checks if two values are equal.
let isEqual = a == b; // false

// Not Equal (!=): Checks if two values are not equal.
let isNotEqual = a != b; // true

// Greater Than (>): Checks if the first value is greater than the second.
let isGreaterThan = a > b; // true

// Less Than (<): Checks if the first value is less than the second.
let isLessThan = a < b; // false

// Greater Than or Equal To (>=): Checks if the first value is greater than or equal to the second.
let isGreaterOrEqual = a >= b; // true

// Less Than or Equal To (<=): Checks if the first value is less than or equal to the second.
let isLessOrEqual = a <= b; // false


// Logical Operators

let isTrue = true;
let isFalse = false;

// Logical AND (&&): Returns true if both operands are true.
let logicalAnd = isTrue && isFalse; // false

// Logical OR (||): Returns true if at least one operand is true.
let logicalOr = isTrue || isFalse; // true

// Logical NOT (!): Returns the opposite of the operand.
let logicalNot = !isTrue; // false


// Conditional (Ternary) Operator

let isAdult = true;

// Ternary Operator (condition ? value_if_true : value_if_false)
let message = isAdult ? "You are an adult" : "You are not an adult";

console.log(message); // "You are an adult"


// unary opeartor 
//postincrement
let abc=100;
console.log(abc++)// it will first print then increment the value so it will still print 100;
console.log(abc)// the value of abc is 101

//preincrement
// it will first increase the value then print 
console.log(++abc)// it will print 102

// and similar logic for decrement 

