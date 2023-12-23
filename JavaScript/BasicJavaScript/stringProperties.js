//! ====================================
//! ||  JavaScript - String Properties  ||
//! ====================================
// Strings in JavaScript are sequences of characters and are one of the fundamental data types. They come with various built-in properties that provide useful information and functionalities. This introduction explores some common string properties that enhance the manipulation and analysis of string data.

// Example 1: .length Property
console.log("- .length Property");
let exampleString = "Hello, World!";
console.log("Example 1 - String:", exampleString);
console.log("Length:", exampleString.length);
// The .length property returns the number of characters in a string.

// Example 2: .charAt() Method
console.log("\n- .charAt() Method");
console.log("Hello, World!");
console.log("Example 2 - Character at Index 7:", exampleString.charAt(7));
// The .charAt() method returns the character at a specified index in a string.

// Example 3: .toUpperCase() Method
console.log("\n- .toUpperCase() Method");
console.log("Hello, World!");

console.log("Example 3 - Uppercase String:", exampleString.toUpperCase());
// The .toUpperCase() method returns a new string with all characters converted to uppercase.

// Example 4: .toLowerCase() Method
console.log("\n- .toLowerCase() Method");
console.log("Hello, World!");
console.log("Example 4 - Lowercase String:", exampleString.toLowerCase());
// The .toLowerCase() method returns a new string with all characters converted to lowercase.

// Example 5: .indexOf() Method
console.log("\n- .indexOf() Method");
console.log("Hello, World!");
console.log("Example 5 - Index of 'World':", exampleString.indexOf("World"));
// The .indexOf() method returns the index of the first occurrence of a specified substring in a string.

// Example 6: .substring() Method
console.log("\n- .substring() Method");
console.log("Hello, World!");
console.log("Example 6 - Substring (Index 7 to 12):", exampleString.substring(7, 12));
// The .substring() method returns a subset of a string based on specified start and end indices.

// Example 7: .replace() Method
console.log("\n- .replace() Method");
console.log("Hello, World!");
console.log("Example 7 - Replace 'World' with 'Universe':", exampleString.replace("World", "Universe"));
// The .replace() method returns a new string with the first occurrence of a specified value replaced.