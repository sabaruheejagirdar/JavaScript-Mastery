// ==============================
// 1. Working with Dates in JavaScript
// ==============================

// Get the current date and time
let curr = new Date();
console.log("Current Date and Time:", curr);

// Create a specific date using a string
let date = new Date('June 20 1998 07:15');
console.log("Specific Date (String):", date);

// Create a specific date using year, month (0-indexed), day, and time
let newDate = new Date(1998, 5, 20, 7); // Month is 0-indexed, so 5 is June
console.log("Specific Date (Numbers):", newDate);

// Modify the year of the date
newDate.setFullYear(2001); // Change the year to 2001
console.log("Updated Year:", newDate);

// ==============================
// 2. Math Functions in JavaScript
// ==============================

// Value of Pi
console.log("Math.PI:", Math.PI);

// Find the maximum value
console.log("Max Value:", Math.max(60, 30, 24, 600, 712, 89)); // Output: 712

// Find the minimum value
console.log("Min Value:", Math.min(60, 30, 24, 600, 712, 89)); // Output: 24

// Round a number to the nearest integer
console.log("Rounded (1.4):", Math.round(1.4)); // Output: 1

// Round a number up to the nearest integer
console.log("Ceil (1.1):", Math.ceil(1.1)); // Output: 2

// Absolute value of a number
console.log("Absolute Value (-5):", Math.abs(-5)); // Output: 5

// Generate a random number between 0 and 1
console.log("Random Number:", Math.random());

// Square root of a number
console.log("Square Root (5):", Math.sqrt(5)); // Output: ~2.236

// Power of a number
console.log("Power (2^10):", Math.pow(2, 10)); // Output: 1024

// ==============================
// Notes:
// - `new Date()` provides multiple ways to create and manipulate dates.
// - Math functions are part of the built-in `Math` object, offering utilities for numbers.
// ==============================
