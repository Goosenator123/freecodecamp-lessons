//! ==============================
//! ||  JavaScript - Booleans  ||
//! ==============================
console.log(`
==========
Booleans
==========`)

// Booleans are a fundamental data type in JavaScript that represent logical values - true or false. Booleans are often used in programming to make decisions and control the flow of a program based on certain conditions.

// Example 1: Simple Boolean Variables
let isSunny = true;
let isRaining = false;

console.log("Example 1:");
console.log("Is it sunny today?", isSunny); // Output: true
console.log("Is it raining now?", isRaining); // Output: false

// Example 2: Boolean Expressions
let temperature = 25;
let isWarm = temperature > 20; // Evaluates to true if temperature is greater than 20

console.log("\nExample 2:");
console.log("Is it warm?", isWarm); // Output: true

// Example 3: Using Booleans in Conditional Statements
let hasMoney = true;

console.log("\nExample 3:");
if (hasMoney) {
  console.log("I can buy something!");
} else {
  console.log("I need to save money.");
}

// Example 4: Boolean Operations
let hasCoffee = true;
let hasMilk = false;

console.log("\nExample 4:");
let canMakeCoffee = hasCoffee && hasMilk; // Using logical AND
console.log("Can I make coffee?", canMakeCoffee); // Output: false

let shouldTakeUmbrella = isRaining || isSunny; // Using logical OR
console.log("Should I take an umbrella?", shouldTakeUmbrella); // Output: true

let isCold = !isWarm; // Using logical NOT
console.log("Is it cold?", isCold); // Output: false