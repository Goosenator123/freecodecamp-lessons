//! ==============================
//! ||  JavaScript Data Types Introduction  ||
//! ==============================
// JavaScript is a dynamically typed language, meaning that variables can hold values of different types. This script introduces some of the fundamental data types in JavaScript and demonstrates their usage.

console.log(`
==========
Data Types
==========`)

// 1. Numbers
let myAge = 25;
let price = 19.99;

// 2. Strings
let myName = "John";
let myMessage = 'Hello, World!';

// 3. Booleans
let isTrue = true;
let isFalse = false;

// 4. Undefined
let undefinedVariable;

// 5. Null
let nullValue = null;

// 6. Arrays
let fruits = ['apple', 'banana', 'orange'];

// 7. Objects
let person = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 30,
  pets: ["Dog", "Cats"]
};

// Displaying Data Types
console.log("- Displaying Data Types:")
console.log("1. Numbers:", myAge, price);
console.log("2. Strings:", myName, myMessage);
console.log("3. Booleans:", isTrue, isFalse);
console.log("4. Undefined:", undefinedVariable);
console.log("5. Null:", nullValue);
console.log("6. Arrays:", fruits);
console.log("7. Objects:", person);


//! =========================================
//! ||  JavaScript - Arrays and Nested Arrays  ||
//! =========================================
// Arrays are versatile data structures in JavaScript that allow you to store and organize multiple values within a single variable. They are used to create lists of elements, where each element can be of any data type, including numbers, strings, or even other arrays. This script introduces the concept of arrays and explores their various features, including creating, accessing, modifying, and working with nested arrays.

console.log(`
==========
Arrays and Nested Arrays
==========`)

// Introduction to Arrays
console.log("- Introduction to Arrays:");

// Creating an array
let fruitList = ["apple", "banana", "orange", "grape"];

// Accessing elements using index
console.log("Array:", fruitList);
console.log("Element at index 1:", fruitList[1]);
console.log("Last element:", fruitList[fruitList.length -1]);

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


//! ==============================
//! ||  JavaScript - Booleans  ||
//! ==============================
// Booleans are a fundamental data type in JavaScript that represent logical values - true or false. Booleans are often used in programming to make decisions and control the flow of a program based on certain conditions.

console.log(`
==========
Booleans
==========`)

// Example 1: Simple Boolean Variables
let isSunny = true;
let isRaining = false;

console.log("Example 1:");
console.log("Is it sunny today?", isSunny); // Output: true
console.log("Is it raining now?", isRaining); // Output: false

// Example 2: Boolean Expressions
let temperature = 25;
let isWarm = temperature > 20; // Evaluates to true if temperature is greater than 20

console.log("\nExample 2:");
console.log("Is it warm?", isWarm); // Output: true

// Example 3: Using Booleans in Conditional Statements
let hasMoney = true;

console.log("\nExample 3:");
if (hasMoney) {
  console.log("I can buy something!");
} else {
  console.log("I need to save money.");
}

// Example 4: Boolean Operations
let hasCoffee = true;
let hasMilk = false;

console.log("\nExample 4:");
let canMakeCoffee = hasCoffee && hasMilk; // Using logical AND
console.log("Can I make coffee?", canMakeCoffee); // Output: false

let shouldTakeUmbrella = isRaining || isSunny; // Using logical OR
console.log("Should I take an umbrella?", shouldTakeUmbrella); // Output: true

let isCold = !isWarm; // Using logical NOT
console.log("Is it cold?", isCold); // Output: false


//! ==============================
//! ||  JavaScript Objects  ||
//! ==============================
// Objects in JavaScript are powerful data structures that allow you to store and organize related information. They consist of key-value pairs, where each key is a unique identifier for a value. This script provides an introduction to JavaScript objects, covering their creation, properties, methods, and common operations. Understanding objects is crucial for working with complex data and building dynamic applications.

console.log(`
==========
JavaScript Objects
==========`)

// Creating an Object
console.log("- Creating an Object:");

// Object literal notation
let person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

// Accessing Object Properties (with dot notation or bracket notation)
console.log("\n- Accessing Object Properties:");

console.log("First Name:", person1.firstName);
console.log("Last Name:", person1["lastName"]);
console.log("Age:", person1.age);
console.log("Is Student:", person1.isStudent);

// Modifying Object Properties
console.log("\n- Modifying Object Properties:");

person1.age = 31;
person1["isStudent"] = true;

console.log("Modified Age:", person1.age);
console.log("Modified Is Student:", person1["isStudent"]);

// Adding and Deleting Object Properties
console.log("\n- Adding and Deleting Object Properties:");

person1.city = "New York";
delete person1.isStudent;

console.log("Added City:", person1.city);
console.log("Deleted Is Student:", person1.isStudent); // undefined


// Testing Object Properties with hasOwnProperty()
console.log("\n- Testing Object Properties with hasOwnProperty():");

// Checking if the object has a direct property
console.log("Has 'firstName':", person1.hasOwnProperty("firstName")); // true
console.log("Has 'gender':", person1.hasOwnProperty("gender")); // false

// Using hasOwnProperty() in a loop
console.log("\n- Using hasOwnProperty() in a Loop:");

for (let key in person1) {
  if (person1.hasOwnProperty(key)) {
    console.log(`Property '${key}' is directly owned by the object.`);
  }
}

// Object Methods
console.log("\n- Object Methods:");

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  startEngine: function () {
    console.log("Engine started!");
  },
  stopEngine: function () {
    console.log("Engine stopped.");
  },
};

car.startEngine();
car.stopEngine();


//! =======================================
//! ||  JavaScript Nested Objects  ||
//! =======================================
// Nested objects in JavaScript provide a powerful way to structure and organize data hierarchically. This concept allows you to represent complex relationships and encapsulate related information within a parent object. This script introduces nested objects, explaining their syntax, creation, access, and common operations. Understanding nested objects is crucial for managing multidimensional data structures and building more sophisticated applications.

console.log(`
==========
JavaScript Nested Objects
==========`)

// Creating an Object with Nested Objects
console.log("- Creating an Object with Nested Objects:");

let person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  contacts: {
    email: "john@example.com",
    phone: "555-1234",
  },
};

// Accessing Nested Object Properties (with dot notation or bracket notation)
console.log("\n- Accessing Nested Object Properties:");
console.log("First Name:", person2.firstName);
console.log("Street Address:", person2.address.street);
console.log("Email:", person2["contacts"]["phone"]);

// Modifying Nested Object Properties
console.log("\n- Modifying Nested Object Properties:");

person2.address.city = "New City";
person2["contacts"]["phone"] = "555-5678";

console.log("Modified City:", person2.address.city);
console.log("Modified Phone:", person2["contacts"]["phone"]);

// Adding Nested Objects
console.log("\n- Adding Nested Objects:");

person2.education = {
  degree: "Bachelor's",
  school: "University XYZ",
};

console.log("Added Education Object:", person2.education);

// Deleting Nested Object Properties
console.log("\n- Deleting Nested Object Properties:");

delete person2["contacts"]["phone"];
delete person2.education;

console.log("Deleted Phone:", person2["contacts"]["phone"]); // undefined
console.log("Deleted Education Object:", person2.education); // undefined

// Testing Object Properties with hasOwnProperty()
console.log("\n- Testing Object Properties with hasOwnProperty():");

// Checking if the object has a nested property
console.log("Has 'address.street':", person2.hasOwnProperty("address.street")); // false
console.log("Has 'street' nested in address property:", person2.address.hasOwnProperty("street")); // true

// Using hasOwnProperty() in a loop
console.log("\n- Using hasOwnProperty() in a Loop:");

for (let key in person2) {
  if (person2.hasOwnProperty(key)) {
    console.log(`Property '${key}' is directly owned by the object.`);

    if (typeof person2[key] === 'object') {
      for (let subkey in person2[key]) {
        if (person2[key].hasOwnProperty(subkey)) {
          console.log(`   Property '${subkey}' is nested in '${key}'`)
        }
      }
    }
  }
}
