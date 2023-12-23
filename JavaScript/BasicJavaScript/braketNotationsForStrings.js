//! ===========================================
//! ||  JavaScript - Bracket Notation for Strings  ||
//! ===========================================
// Bracket notation for strings in JavaScript provides a way to access, modify, and manipulate individual characters within a string. This script demonstrates the use of bracket notation for strings, including accessing characters at specific indices, modifying characters, adding new characters, dynamically accessing characters using variables, and finding the length of a string using the .length property.

// Create a string
let greeting = "Hello, World!";

// Accessing characters using bracket notation
console.log("- Using bracket notation to access characters:");
console.log("Character at index 0:", greeting[0]);
console.log("Character at index 7:", greeting[7]);

// Modifying characters using bracket notation
console.log("\n- Modifying characters using bracket notation:");
// Strings are immutable, so we need to create a new string
let modifiedGreeting = greeting.substring(0, 7) + "Universe!";
console.log("Modified Greeting:", modifiedGreeting);

// Adding a new character using bracket notation
console.log("\n- Adding a new character using bracket notation:");
let newGreeting = greeting.slice(0, 7) + "Beautiful " + greeting.slice(7);
console.log("New Greeting:", newGreeting);

// Dynamically accessing characters
console.log("\n- Dynamically accessing characters:");
let index = 12;
console.log(`Character at index ${index}:`, greeting[index]);

// Finding the length of the string
console.log("\n- Finding the length of the string using .length property:");
console.log("Length of the string:", greeting.length);