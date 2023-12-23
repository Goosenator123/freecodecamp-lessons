//! ============================================
//! ||  JavaScript - Modifying Arrays and Nested Arrays  ||
//! ============================================
// Modifying arrays in JavaScript involves changing, adding, or removing elements. This script covers the basics of modifying simple arrays and nested arrays. It includes operations like modifying elements at specific indices, adding elements to the end or beginning, and removing elements from the end or beginning. Additionally, it demonstrates modifying elements within a nested array and manipulating rows in a nested array.

// Modifying elements in a simple array
let numbers = [1, 2, 3, 4, 5];

console.log("- Original Array:", numbers);

// Modify an element at a specific index
numbers[2] = 10;
console.log("Array after modifying at index 2:", numbers);

// Add an element to the end of the array
numbers.push(6);
console.log("Array after pushing an element:", numbers);

// Remove an element from the end of the array
numbers.pop();
console.log("Array after popping an element:", numbers);

// Using unshift to add an element to the beginning of the array
numbers.unshift(0);
console.log("Array after unshifting an element:", numbers);

// Using shift to remove the first element from the array
let shiftedElement = numbers.shift();
console.log("Array after shifting an element:", numbers);
console.log("Shifted Element:", shiftedElement);

// Modifying elements in a nested array
let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("\n- Original Matrix:", matrix2);

// Modify an element in the nested array
matrix2[1][2] = 20;
console.log("Matrix after modifying at row 1, column 2:", matrix2);

// Add a new row to the nested array
matrix2.push([10, 11, 12]);
console.log("Matrix after adding a new row:", matrix2);

// Using unshift to add a new row to the beginning of the nested array
matrix2.unshift([0, 0, 0]);
console.log("Matrix after unshifting a new row:", matrix2);

// Using shift to remove the first row from the nested array
let shiftedRow = matrix2.shift();
console.log("Matrix after shifting the first row:", matrix2);
console.log("Shifted Row:", shiftedRow);