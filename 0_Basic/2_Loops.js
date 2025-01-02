// ==============================
// Loops in JavaScript
// ==============================

// Using `for` loop to print a name
for (let i = 1; i <= 10; i++) {
    console.log("Saba Ruhee");
}

// Using `do-while` loop to print a name
let i = 1;
do {
    console.log("Saba Ruhee");
    i++; // Increment the counter
} while (i <= 10);

// Using `while` loop to print a name
i = 1;
while (i <= 10) {
    console.log("Saba Ruhee");
    i++;
}

// Print numbers from 1 to 5 using different loops

// Using `for` loop
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// Using `do-while` loop
i = 1;
do {
    console.log(i);
    i++;
} while (i < 6);

// Using `while` loop
i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

// Print numbers from 5 to 1 using different loops

// Using `for` loop
for (let i = 5; i > 0; i--) {
    console.log(i);
}

// Using `do-while` loop
i = 5;
do {
    console.log(i);
    i--;
} while (i > 0);

// Using `while` loop
i = 5;
while (i > 0) {
    console.log(i);
    i--;
}

// Using `break` statement in a loop
for (let i = 1; i <= 6; i++) {
    if (i == 4) {
        break; // Exit the loop when i equals 4
    } else {
        console.log(i);
    }
}

// Using `continue` statement in a loop
for (let i = 1; i <= 4; i++) {
    if (i == 3) {
        continue; // Skip the current iteration when i equals 3
    } else {
        console.log(i);
    }
}

// Using `while` loop with `continue`
i = 1;
while (i < 5) {
    console.log("Inside the loop");
    if (i == 3) {
        i++;
        continue; // Skip further execution for i = 3
    } else {
        console.log(i);
    }
    i++;
}

// ==============================
// Strings in JavaScript
// ==============================

// Multi-line strings using template literals
let name = `Saba 
Ruhee This is
my 
Name
hello`;

console.log(name);

// String as an object
let firstName = new String("Saba Ruhee");
console.log(firstName);

// String length property
let op1 = "English ";
let op2 = "HINDI ";

console.log(op2.length); // Output: 6

// String concatenation
// Using template literals
let finalAns = `${op1}${op2}`;
console.log(finalAns);

// Using `+` operator
let ans = op1 + op2;
console.log(ans);

// String case conversion
console.log(op1.toUpperCase()); // ENGLISH
console.log(op2.toLowerCase()); // hindi

// Extract substring
let str = "Ruhee";
console.log(str.substring(2, 4)); // he
console.log(str.substring(2));   // hee

// Splitting and joining strings
let sentence = "Hello \\How \\Are\\ \\You \\All";

let words = sentence.split('\\'); // Split the string by '\'
console.log(words);

console.log(words.join('-')); // Join words with '-'
