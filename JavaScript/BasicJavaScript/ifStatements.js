//! =====================================
//! ||  JavaScript - If Statements  ||
//! =====================================
// In JavaScript, the `if` statement is a fundamental control flow structure that allows you to execute a block of code conditionally based on a specified condition. It's a powerful tool for making decisions in your programs.

// Example 1: Basic If Statement
let isCloudy = true;

console.log("Example 1:");
if (isCloudy) {
  console.log("It's a cloudy day!");
} else {
  console.log("It's not cloudy today.");
}

// Example 2: If-Else If-Else Statement
let season = "summer";

console.log("\nExample 2:");
if (season === "spring") {
  console.log("It's springtime!");
} else if (season === "summer") {
  console.log("It's summer!");
} else {
  console.log("It's neither spring nor summer.");
}

// Example 3: Nested If Statements
let isHoliday = true;
let hasGift = false;

console.log("\nExample 3:");
if (isHoliday) {
  console.log("It's a holiday!");
  if (hasGift) {
    console.log("You have a gift!");
  } else {
    console.log("No gift this time.");
  }
} else {
  console.log("It's a regular day.");
}

// Example 4: Using Comparison Operators
let speed = 40;

console.log("\nExample 4:");
if (speed > 60) {
  console.log("You're speeding!");
} else if (speed >= 40 && speed <= 60) {
  console.log("You're driving at a reasonable speed.");
} else {
  console.log("You're driving too slow.");
}