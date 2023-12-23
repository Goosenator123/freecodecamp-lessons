//! =========================================
//! ||  JavaScript - Arrays and Nested Arrays  ||
//! =========================================
// Arrays are versatile data structures in JavaScript that allow you to store and organize multiple values within a single variable. They are used to create lists of elements, where each element can be of any data type, including numbers, strings, or even other arrays. This script introduces the concept of arrays and explores their various features, including creating, accessing, modifying, and working with nested arrays.

// Introduction to Arrays
console.log("- Introduction to Arrays:");

// Creating an array
let fruits = ["apple", "banana", "orange", "grape"];

// Accessing elements using index
console.log("Array:", fruits);
console.log("Element at index 1:", fruits[1]);
console.log("Last element:", fruits[fruits.length -1]);

// Introduction to Nested Arrays
console.log("\n- Introduction to Nested Arrays:");

// Creating a nested array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements in a nested array
console.log("Nested Array:", matrix);
console.log("Element at row 1, column 2:", matrix[1][2]);
console.log("Last element of the last row and the last column:", matrix[matrix.length -1][matrix[matrix.length -1].length -1]);
