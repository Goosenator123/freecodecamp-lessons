//! ===========================================
//! ||  JavaScript - Introduction to Bracket Notation  ||
//! ===========================================
// Bracket notation in JavaScript provides a flexible way to access and manipulate object properties. This script introduces the concept of bracket notation, demonstrating how to access properties, modify values, add new properties, dynamically access properties using variables, and delete properties from an object.

console.log(`
==========
Braket Notation
==========`)

// Create an object
let personJohn = {
  name: "John",
  age: 30,
  job: "Developer"
};

// Accessing properties using dot notation
console.log("- Using dot notation:");
console.log("Name:", personJohn.name);
console.log("Age:", personJohn.age);
console.log("Job:", personJohn.job);

// Accessing properties using bracket notation
console.log("\n- Using bracket notation:");
console.log("Name:", personJohn["name"]);
console.log("Age:", personJohn["age"]);
console.log("Job:", personJohn["job"]);

// Modifying properties using bracket notation
console.log("\n- Modifying job using bracket notation:");
personJohn["job"] = "Designer";
console.log("Updated Job:", personJohn["job"]);

// Adding a new property using bracket notation
console.log("\n- Adding a new property using bracket notation:");
personJohn["location"] = "City";
console.log("Location:", personJohn["location"]);

// Dynamically accessing properties
console.log("\n- Dynamically accessing properties:");
let propertyName = "age";
console.log("Dynamic Access - Age:", personJohn[propertyName]);

// Deleting a property using bracket notation
console.log("\n- Deleting a property using bracket notation:");
delete personJohn["job"];
console.log("Job after deletion:", personJohn["job"]);


//! ===========================================
//! ||  JavaScript - Bracket Notation for Strings  ||
//! ===========================================
// Bracket notation for strings in JavaScript provides a way to access, modify, and manipulate individual characters within a string. This script demonstrates the use of bracket notation for strings, including accessing characters at specific indices, modifying characters, adding new characters, dynamically accessing characters using variables, and finding the length of a string using the .length property.

console.log(`
==========
Braket Notation for Strings
==========`)

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