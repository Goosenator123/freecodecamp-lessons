//! ===============================
//! ||  JavaScript - Introduction to Functions  ||
//! ===============================
// Functions in JavaScript are reusable blocks of code that can be defined and called to perform specific tasks. They play a crucial role in organizing and structuring code, promoting code reuse, and enhancing readability. This introduction covers different types of functions, including those without parameters, functions with parameters, functions with return values, function expressions, and arrow functions.

// Function without parameters
function sayHello() {
    console.log("Hello, World!");
  }
  
  // Function with parameters
  function greet(name) {
    console.log("Greetings, " + name + "!");
  }
  
  // Function with a return value
  function addNumbers(a, b) {
    return a + b;
  }
  
  // Function expression
  let multiplyNumbers = function (x, y) {
    return x * y;
  };
  
  // Arrow function
  let subtractNumbers = (m, n) => m - n;
  
  // Calling functions
  sayHello();
  
  greet("Alice");
  
  let sum = addNumbers(3, 7);
  console.log("Sum:", sum);
  
  let product = multiplyNumbers(5, 4);
  console.log("Product:", product);
  
  let difference = subtractNumbers(10, 6);
  console.log("Difference:", difference);
  