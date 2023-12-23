//! ===========================================
//! ||  JavaScript - Introduction to Bracket Notation  ||
//! ===========================================
// Bracket notation in JavaScript provides a flexible way to access and manipulate object properties. This script introduces the concept of bracket notation, demonstrating how to access properties, modify values, add new properties, dynamically access properties using variables, and delete properties from an object.

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