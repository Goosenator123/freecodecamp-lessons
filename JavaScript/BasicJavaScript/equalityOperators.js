//! ========================================
//! ||  JavaScript - Equality Operators  ||
//! ========================================
// In JavaScript, equality operators are used to compare values and determine whether they are equal or not. There are two types of equality operators: strict equality (===) and loose equality (==). Understanding the differences between them is crucial for writing robust and bug-free code.

// Example 1: Strict Equality (===)
x = 5;
y = "5";

console.log("Example 1:");
console.log("Is x strictly equal to y?", x === y); // Output: false

// Strict equality compares both value and data type. In this case, x is a number, and y is a string, so they are not strictly equal.

// Example 2: Loose Equality (==)
let a = 10;
let b = "10";

console.log("\nExample 2:");
console.log("Is a loosely equal to b?", a == b); // Output: true

// Loose equality only compares values, not data types. In this case, a and b have the same value (10), so they are loosely equal.

// Example 3: Not Equal (!==)
let p = true;
let q = "true";

console.log("\nExample 3:");
console.log("Is p not equal to q?", p !== q); // Output: true

// The !== operator checks if values are not equal, regardless of data types. In this case, p is a boolean, and q is a string, so they are not equal.

// Example 4: Equality with Type Conversion
let num = 42;
let strNum = "42";

console.log("\nExample 4:");
console.log("Is num equal to strNum with type conversion?", num == strNum); // Output: true

// Loose equality may perform type conversion. In this case, the numeric value of strNum is compared with num, and they are considered equal.

// Example 5: Strict Equality without Type Conversion
let number1 = 42;
let strNum1 = "42";

console.log("\nExample 5:");
console.log("Is num1 strictly equal to strNum1 without type conversion?", number1 === strNum1); // Output: false

// Strict equality does not perform type conversion, so num1 and strNum1 are not strictly equal.

// Conclusion:
// Choosing between strict and loose equality depends on the specific requirements of your comparison. Strict equality is recommended in most cases to avoid unexpected type conversions.