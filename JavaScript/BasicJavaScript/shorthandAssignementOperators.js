//! ==============================
//! ||  JavaScript Shorthand Assignment Operators with Different Types  ||
//! ==============================
// Shorthand assignment operators in JavaScript provide a concise way to perform operations and assignments. This script introduces various shorthand assignment operators for numbers, strings, arrays, and objects, showcasing their usage with different types.

// Number Shorthand Assignment Operators
console.log("- Number Shorthand Assignment Operators");

let numOne = 10;
numOne += 5; // num1 = num1 + 5
console.log("Number +=:", numOne);

let numTwo = 20;
numTwo -= 3; // num2 = num2 - 3
console.log("Number -=:", numTwo);

let numThree = 3;
numThree *= 4; // num3 = num3 * 4
console.log("Number *=:", numThree);

let numFour = 15;
numFour /= 3; // num4 = num4 / 3
console.log("Number /=:", numFour);

let numFive = 10;
numFive %= 3; // num5 = num5 % 3
console.log("Number %=:", numFive);

// String Shorthand Assignment Operator
console.log("\n- String Shorthand Assignment Operators");

let strOne = "Hello";
strOne += " World"; // str1 = str1 + " World"
console.log("String +=:", strOne);

// Array Shorthand Assignment Operators
console.log("\n- Array Shorthand Assignment Operators");

let arrOne = [1, 2, 3];
arrOne.push(4); // Array push method for adding an element
console.log("Array push (+=):", arrOne);

let arrTwo = [1, 2, 3, 4, 5];
arrTwo.pop(); // Array pop method for removing the last element
console.log("Array pop (-=):", arrTwo);

// Object Shorthand Assignment Operator (Merging)
console.log("\n- Object Shorthand Assignment Operators (Merging)");

let objOne = { a: 1, b: 2 };
Object.assign(objOne, { c: 3 }); // Object.assign for merging
console.log("Object.assign (+=):", objOne);

// Object Shorthand Assignment Operator (Removal)
console.log("\n- Object Shorthand Assignment Operators (Removal)");

let objTwo = { a: 1, b: 2, c: 3 };
delete objTwo.c; // Delete operator for property removal
console.log("Delete operator (-=):", objTwo);
