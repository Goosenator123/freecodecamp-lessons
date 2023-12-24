//! ============================================
//! ||  JavaScript - Switch Statements  ||
//! ============================================
// Switch statements in JavaScript provide a structured way to handle multiple conditions in a more readable and concise manner than a series of if-else statements. They are particularly useful when you want to compare a single value against multiple possible cases. This script introduces the switch statement, explaining its syntax, use cases, and how it differs from traditional if-else structures.

console.log(`
==========
Switch Statements in JavaScript
==========`)

// Introduction to Switch Statements
console.log("- Introduction to Switch Statements:");

// Basic syntax of a switch statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week!");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}

// Handling Multiple Identical Options
let month = "January";

switch (month) {
  case "January":
  case "February":
  case "March":
    console.log("It's winter.");
    break;
  case "April":
  case "May":
  case "June":
    console.log("It's spring.");
    break;
  case "July":
  case "August":
  case "September":
    console.log("It's summer.");
    break;
  case "October":
  case "November":
  case "December":
    console.log("It's fall.");
    break;
  default:
    console.log("Invalid month.");
}
