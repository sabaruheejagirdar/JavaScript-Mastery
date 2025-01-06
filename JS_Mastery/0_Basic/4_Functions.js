// ==============================
// 1. Functions as First-Class Citizens
// ==============================

// Functions can be passed as arguments to other functions, 
// returned from other functions, and stored in arrays or objects.

const arrOfFunct = [
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a * b;
    },
    function (a, b) {
        return a / b;
    },
];

let first = arrOfFunct[0]; // Access the first function in the array
console.log(first(5, 10)); // Output: 15 (sum of 5 and 10)

// ==============================
// 2. Function Definitions and Calls
// ==============================

// Function definition
function sayMyName() {
    console.log("Saba Ruhee");
}

// Function call
sayMyName(); // Output: Saba Ruhee

// ==============================
// 3. Loops Inside Functions
// ==============================

// Function to print numbers from 1 to 100
function printCounting() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

// Uncomment to call the function
// printCounting();

// Function to print a single number
function printNumber(num) {
    console.log("Printing Number:", num);
}

printNumber(5); // Output: Printing Number: 5

// Function to calculate and print the average of two numbers
function getAverage(num1, num2) {
    let avg = (num1 + num2) / 2;
    console.log("Average: ", avg);
}

getAverage(3, 70); // Output: Average: 36.5

// ==============================
// 4. Functions That Return Values
// ==============================

// Function to calculate and return the sum of three numbers
function getSum(a, b, c) {
    let sum = a + b + c;
    return sum;
}

let sumResult = getSum(1, 2, 3);
console.log("Sum: ", sumResult); // Output: Sum: 6

// Function to return the full name of a person
function getMyName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}

let fullName = getMyName("Saba", "Ruhee");
console.log("Full Name: ", fullName); // Output: Full Name: Saba Ruhee

// ==============================
// 5. Function Expressions
// ==============================

// Function expression to calculate the product of two numbers
const getMultiplication = function (a, b) {
    return a * b;
};

let product = getMultiplication(2, 20);
console.log("Product: ", product); // Output: Product: 40

// Function expression to calculate the square of a number
let squareNumber = function (num) {
    let ans = num ** 2;
    return ans;
};

let square = squareNumber(5);
console.log("Square: ", square); // Output: Square: 25

// ==============================
// 6. Arrow Functions
// ==============================

// Arrow function to calculate the power of a number
let getExp = (x, y) => {
    let ans = x ** y;
    return ans;
};

console.log(getExp(2, 10)); // Output: 1024
