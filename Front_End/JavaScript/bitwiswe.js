// Bitwise AND (&): Performs a bitwise AND operation on each pair of corresponding bits.
let num1 = 5; // Binary: 0101
let num2 = 3; // Binary: 0011
let resultAnd = num1 & num2; // Binary result: 0001 (Decimal: 1)
console.log(resultAnd); // 1

// Bitwise OR (|): Performs a bitwise OR operation on each pair of corresponding bits.
let resultOr = num1 | num2; // Binary result: 0111 (Decimal: 7)
console.log(resultOr); // 7

// Bitwise XOR (^): Performs a bitwise XOR (exclusive OR) operation on each pair of corresponding bits.
let resultXor = num1 ^ num2; // Binary result: 0110 (Decimal: 6)
console.log(resultXor); // 6

// Bitwise NOT (~): Performs a bitwise NOT operation, inverting each bit.
let resultNotNum1 = ~num1; // Binary result: 11111010 (Decimal: -6)
console.log(resultNotNum1); // -6

// Left Shift (<<): Shifts the bits of the left operand to the left by the number of positions specified by the right operand.
let resultLeftShift = num1 << 2; // Binary result: 010100 (Decimal: 20)
console.log(resultLeftShift); // 20

// Right Shift (>>): Shifts the bits of the left operand to the right by the number of positions specified by the right operand.
let resultRightShift = num1 >> 1; // Binary result: 0010 (Decimal: 2)
console.log(resultRightShift); // 2

// Zero-fill Right Shift (>>>): Similar to the right shift operator, but fills the vacant positions with zeros.
let num3 = -5; // Binary: 11111111111111111111111111111011 (32-bit signed integer)
let resultZeroFillRightShift = num3 >>> 1; // Binary result: 01111111111111111111111111111101 (Decimal: 2147483645)
console.log(resultZeroFillRightShift); // 2147483645
