//! ==============================
//! ||  JavaScript Variable Declarations  ||
//! ==============================
// JavaScript allows the declaration of variables using various keywords. This script introduces three primary variable declaration keywords: var, let, and const. It provides insights into their scoping rules and usage.

// 1. var (Function-scoped)
var x = 10;
var y = 'Hello';

// 2. let (Block-scoped)
let age = 25;
let message = 'Welcome';

// 3. const (Block-scoped, Immutable)
const PI = 3.14;
const listOfFruits = ['apple', 'banana', 'orange'];

// Displaying Variable Declarations
console.log("- Displaying Variable Declaration:")
console.log("\n1. var:", x, y);
console.log("2. let:", age, message);
console.log("3. const:", PI, listOfFruits);

// Example of reassigning values
x = 20;
age = 30;
// PI = 3.14159; // Uncommenting this line will result in an error (const cannot be reassigned)

// Displaying Updated Values
console.log("\n- Displaying Updated Values:")
console.log("Updated var:", x);
console.log("Updated let:", age);
console.log("Attempt to update const (will result in an error):", PI);
