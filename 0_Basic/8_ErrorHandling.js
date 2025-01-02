// ==============================
// 1. Types of Errors in JavaScript
// ==============================

// Compile-Time Error:
// These errors occur before the program is executed, typically due to syntax issues.
// Example: Syntax error
// console.log(1; // Missing closing parenthesis

// Runtime Error:
// These errors occur during program execution, such as accessing an undefined variable.
// Example: Reference error
// console.log(x); // `x` is not defined

// ==============================
// 2. Using try-catch-finally for Error Handling
// ==============================

try {
    console.log("Try block starts here");
    // Triggering a ReferenceError
    console.log(x);
    console.log("Try block ends here");
} catch (err) {
    // Handling the error
    // You can implement retry logic, fallback mechanisms, logging, or throw a custom error.
    console.log("I AM INSIDE THE CATCH BLOCK");
    console.log("Your error is here:", err);
} finally {
    // The finally block always runs, whether an error occurred or not
    console.log("I will run every time, as I am the finally block");
}

// ==============================
// 3. Throwing Custom Errors
// ==============================

// Example of throwing a custom error
try {
    // Reference error
    console.log(x);
} catch (err) {
    // Throw a custom error with a meaningful message
    throw new Error("Variable must be declared before being used");
}

// ==============================
// 4. Conditional Error Throwing
// ==============================

let errorCode = 100;
if (errorCode === 100) {
    throw new Error("Invalid JSON format");
}

// ==============================
// Notes:
// - Use `try-catch` to gracefully handle errors and avoid breaking your application.
// - The `finally` block is optional and runs regardless of whether an error occurs.
// - Throwing custom errors allows you to provide more meaningful feedback.
// ==============================
