//! ==============================
//! ||  JavaScript - Escaping Literal Quotes in Strings  ||
//! ==============================
// In JavaScript, strings are often enclosed in quotes. When a string contains quotes, it is essential to know how to escape them to prevent syntax errors. This script demonstrates various methods of escaping literal quotes in strings, along with other escape sequences.

// Single quotes within double quotes
let singleWithinDouble = "This is a string with a single quote (').\n";

// Double quotes within single quotes
let doubleWithinSingle = 'This is a string with a double quote (").\n';

// Escaping single quotes within single quotes
let escapeSingleWithinSingle = 'Escaping a single quote (\') within single quotes.\n';

// Escaping double quotes within double quotes
let escapeDoubleWithinDouble = "Escaping a double quote (\") within double quotes.\n";

// Combining both types of quotes
let combinedQuotes = 'This string contains both single (\') and double (") quotes.\n';

// Newline character
let newlineExample = 'This string\nspans multiple\nlines.\n';

// Tab character
let tabExample = 'This string\tcontains a tab character.\n';

// Backslash character
let backslashExample = 'This string contains a backslash (\\) character.\n';

// Carriage return character
let carriageReturnExample = 'This string has a carriage return before this line.\rIt returns to the beginning of the line.\n';

// Backspace character
let backspaceExample = 'This string contains a backspace character before this letter: h\b.\n';

// Form feed character
let formFeedExample = 'This string contains a form feed character.\fIt creates a new page.\n';

// Unicode character
let unicodeExample = 'This string contains a Unicode character: \u00A9';

// Displaying the results
console.log(singleWithinDouble);
console.log(doubleWithinSingle);
console.log(escapeSingleWithinSingle);
console.log(escapeDoubleWithinDouble);
console.log(combinedQuotes);
console.log(newlineExample);
console.log(tabExample);
console.log(backslashExample);
console.log(carriageReturnExample);
console.log(backspaceExample);
console.log(formFeedExample);
console.log(unicodeExample);
