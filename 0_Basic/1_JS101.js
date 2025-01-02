// 1. Variable Hoisting with `const`
console.log(marks); // ReferenceError: Cannot access 'marks' before initialization
console.log("Saba Ruhee");
console.log("Saba");
const marks = 100;
console.log(marks); // 100

// ------------------------------------------

// 2. Scope of `const` Inside a Block
{
    const age = 100;
}
// console.log(age); // ReferenceError: age is not defined

// ------------------------------------------

// 3. Variable Hoisting with `var`
console.log(height); // undefined (due to hoisting)
{
    var height = 180;
}
console.log(height); // 180

// ------------------------------------------

// 4. Scope of Variables Inside a Function
// Uncommenting the following code will result in errors
// console.log(fullName); // ReferenceError: fullName is not defined
function sayHello() {
    const fullName = "Earth";
    console.log("Hello Dunia", fullName);
}
// console.log(fullName); // ReferenceError: fullName is not defined
sayHello(); // Output: Hello Dunia Earth

// ------------------------------------------

// 5. Global Scope of `const`
const age = 15;

console.log(age); // 15

// Block scope still has access to global `age`
{
    console.log(age); // 15
}

if (true) {
    console.log(age); // 15
}

// Loop also has access to global `age`
for (let i = 0; i < 2; i++) {
    console.log(age); // 15
}

// Function can access global `age`
function greet() {
    console.log("hi", age);
}
greet(); // Output: hi 15
