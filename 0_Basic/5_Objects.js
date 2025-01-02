// ==============================
// 1. Objects in JavaScript
// ==============================

let obj = {
    name: "Saba",
    age: 25,
    weight: 85,
    height: "6ft 1in",
    greet: function () {
        console.log("Hello everyone, how are you all?");
    }
};

// Accessing keys and values in an object using `for-in` loop
for (let key in obj) {
    console.log(key, ":", obj[key]);
}

// Accessing object properties and methods
console.log(obj);
obj.greet();

// Checking the type of an object
console.log(typeof obj); // Output: object

// ==============================
// 2. Arrays in JavaScript
// ==============================

// Array creation
let arr = [1, 2, 3, 4, 5];

// Array creation using constructor
let brr = new Array("Saba", 100, true);

// Array methods
brr.push("Ruhee"); // Adds to the end
brr.pop(); // Removes from the end
brr.shift(); // Removes the first element
brr.unshift("Saba Ruhee"); // Adds to the beginning
brr.push(20, 40, 70); // Adds multiple elements

brr.splice(1, 0, "Kunal"); // Inserts "Kunal" at index 1

console.log(brr); // Modified array

// ==============================
// 3. Array Filtering
// ==============================

let arr2 = [10, 20, 30, 11, 21, 44, 51];

// Filter even numbers
let evenArray = arr2.filter((number) => number % 2 === 0);
console.log(evenArray); // Output: [10, 20, 30, 44]

// Filter numbers from a mixed array
let mixedArray = [1, 2, "Saba", "Kunal", null];
let numbersOnly = mixedArray.filter((value) => typeof value === "number");
console.log(numbersOnly); // Output: [1, 2]

// ==============================
// 4. Array Mapping
// ==============================

// Squaring each number in an array
let squaredArray = arr2.map((number) => number * number);
console.log(squaredArray); // Output: [100, 400, 900, 121, 441, 1936, 2601]

// ==============================
// 5. Array Reduction
// ==============================

let arr3 = [10, 20, 30, 40];

// Calculate the sum of array elements using reduce
let sum = arr3.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 100

// ==============================
// 6. Sorting Arrays
// ==============================

let unsortedArray = [9, 1, 7, 4, 2, 8];

// Default ascending sort
unsortedArray.sort();
console.log(unsortedArray); // Output: [1, 2, 4, 7, 8, 9]

// Descending order sort (homework solution)
unsortedArray.sort((a, b) => b - a);
console.log(unsortedArray); // Output: [9, 8, 7, 4, 2, 1]

// ==============================
// 7. Looping Over Arrays
// ==============================

let arr4 = [10, 20, 30];

// Using a traditional for loop
for (let index = 0; index < arr4.length; index++) {
    console.log(arr4[index]);
}

// Using forEach loop
arr4.forEach((value, index) => {
    console.log("Number:", value, "Index:", index);
});

// Using for-of loop
for (let value of arr4) {
    console.log(value);
}

// ==============================
// 8. Strings and Loops
// ==============================

let fullName = "Saba Ruhee";

// Using for-of loop to iterate over a string
for (let char of fullName) {
    console.log(char);
}

// ==============================
// 9. Custom Function to Calculate Sum of Array Elements
// ==============================

let arr5 = [10, 20, 30, 40, 50];

// Function to calculate the sum of array elements
let getSum = (arr) => {
    let sum = 0;
    arr.forEach((value) => {
        sum += value;
    });
    return sum;
};

let totalSum = getSum(arr5);
console.log(totalSum); // Output: 150
