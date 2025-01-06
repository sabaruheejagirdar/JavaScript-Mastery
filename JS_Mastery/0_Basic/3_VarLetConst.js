// ==============================
// 1. Variable Scope: var vs const/let
// ==============================

// `var` is function-scoped and not block-scoped
// Example with `var` in a function
function sayHello() {
    var fullName = "Earth"; // `fullName` is accessible only within this function
    console.log(fullName); // Output: Earth
}
sayHello();
// console.log(fullName); // ReferenceError: fullName is not defined (outside the function)

// Example with `var` in a block
// `var` ignores block scope
// console.log(height); // undefined (due to hoisting)
{
    var height = 180; // `height` is declared using `var` inside the block
}
console.log(height); // Output: 180 (accessible outside the block)

// ==============================
// 2. Block Scope: const and let
// ==============================

// `const` and `let` are block-scoped
{
    const age = 100; // Block-scoped
    let name = "Saba Ruhee"; // Block-scoped
    console.log(age); // Output: 100
    console.log(name); // Output: Saba Ruhee
}
// console.log(age); // ReferenceError: age is not defined (outside the block)
// console.log(name); // ReferenceError: name is not defined (outside the block)

// ==============================
// 3. Hoisting with const and let
// ==============================

// `const` and `let` variables are not hoisted to the top of their block
// console.log(marks); // ReferenceError: Cannot access 'marks' before initialization
// console.log("Saba Ruhee");
// const marks = 100; // Declared here
// console.log(marks); // Output: 100

// ==============================
// 4. Global Scope of Variables
// ==============================

const age = 15; // Globally declared

console.log(age); // Output: 15 (global variable)

// Global variable `age` is accessible inside any block
{
    console.log(age); // Output: 15
}

// Global variable `age` is accessible inside conditional statements
if (true) {
    console.log(age); // Output: 15
}

// Global variable `age` is accessible inside loops
for (let i = 0; i < 2; i++) {
    console.log(age); // Output: 15 (twice, once per iteration)
}

// Global variable `age` is accessible inside functions
function greet() {
    console.log("hi", age); // Output: hi 15
}
greet();
