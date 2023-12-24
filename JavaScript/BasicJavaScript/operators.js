//! ====================================
//! ||  JavaScript Operators Introduction ||
//! ====================================
// In JavaScript, operators are symbols that perform operations on operands. They play a crucial role in performing tasks like arithmetic calculations, string manipulations, comparisons, and logical evaluations. This script provides an introduction to some of the fundamental operators in JavaScript and illustrates their usage through examples.

console.log(`
==========
Operators
==========`)

// Arithmetic Operators
let num1 = 10;
let num2 = 5;
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let remainder = num1 % num2;

console.log("- Arithmetic Operations:");
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Remainder:", remainder);

// String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log("\n- String Concatenation:");
console.log("Full Name:", fullName);

// Logical Operators
let andOperator = true && false;
let orOperator = true || false;
let notOperator = !true;

console.log("\n- Logical Operations:");
console.log("AND Operator:", andOperator);
console.log("OR Operator:", orOperator);
console.log("NOT Operator:", notOperator);


//! ============================================
//! ||  JavaScript - Comparison Operators  ||
//! ============================================
// Comparison operators in JavaScript are essential for evaluating conditions and making decisions in your code. They allow you to compare values, variables, or expressions, producing Boolean results (true or false). This script introduces various comparison operators, demonstrating their usage and explaining the outcomes based on the comparisons made.

console.log(`
==========
Comparison Operators
==========`)

// Introduction to Equality Operators
console.log("- Introduction to Equality Operators:");

// Equal (==) operator
console.log("5 == 5:", 5 == 5); // true
console.log("5 == '5':", 5 == '5'); // true

// Strict Equal (===) operator
console.log("5 === 5:", 5 === 5); // true
console.log("5 === '5':", 5 === '5'); // false

// Not Equal (!=) operator
console.log("5 != 10:", 5 != 10); // true

// Strict Not Equal (!==) operator
console.log("5 !== '5':", 5 !== '5'); // true

// Introduction to Relational Operators
console.log("\n- Introduction to Relational Operators:");

// Greater Than (>) operator
console.log("10 > 5:", 10 > 5); // true

// Less Than (<) operator
console.log("10 < 5:", 10 < 5); // false

// Greater Than or Equal To (>=) operator
console.log("10 >= 10:", 10 >= 10); // true

// Less Than or Equal To (<=) operator
console.log("10 <= 5:", 10 <= 5); // false


//! ==============================
//! ||  JavaScript Shorthand Assignment Operators with Different Types  ||
//! ==============================
// Shorthand assignment operators in JavaScript provide a concise way to perform operations and assignments. This script introduces various shorthand assignment operators for numbers, strings, arrays, and objects, showcasing their usage with different types.

console.log(`
==========
Shorthand Assignemnt Operators
==========`)

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
