//! ==============================
//! ||  JavaScript - Scopes  ||
//! ==============================
// In JavaScript, scope refers to the context in which variables are declared and accessed. Understanding the concepts of local scope and global scope is crucial for writing maintainable and error-free code. This script introduces the distinction between local and global scopes, demonstrating how variables behave within different contexts.

// Introduction to Global Scope
console.log("- Introduction to Global Scope:");

// Global scope variable
let globalVariable = "I am a global variable";

// Accessing a global variable
console.log("Global Scope: " + globalVariable);

// Introduction to Local Scope
console.log("\n- Introduction to Local Scope:");

// Function with local scope
function localScopeFunction() {
  // Local scope variable
  let localVariable = "I am a local variable";

  // Accessing local and global variables
  console.log("Local Scope: " + localVariable);
  console.log("Global Scope within Function: " + globalVariable);
}

// Calling the function
localScopeFunction();

// Attempting to access local variable outside its scope (will result in an error)
// console.log("Attempt to access Local Variable outside Function: " + localVariable);

// Attempting to access local variable outside its scope (will result in an error)
// console.log("Attempt to access Local Variable outside Function: " + localVariable);
