// --------------------- Promise Example 1 ---------------------

// Define a promise that resolves immediately after a `setTimeout`.
let firstPromise = new Promise((resolve, reject) => {
    setTimeout(function sayMyName() {
        console.log("My Name is Saba"); // Logs this message asynchronously
    }, 0);
    resolve(); // Immediately resolves the promise
});

// Logs the synchronous flow
console.log("Start"); // Logs "Start"
console.log(firstPromise); // Logs the promise object (resolved state)
console.log("End"); // Logs "End"

// ---------------------- BTN1 and BTN2 ----------------------

// Initialize a variable to demonstrate scope and updates in promises
var myColor = "Yellow";

// Button 1: Asynchronous operation simulation with promises
document.getElementById("myButton").onclick = function () {
    let myPromise = new Promise((resolve, reject) => {
        // Simulate an async operation
        setTimeout(() => {
            let success = true; // Simulate success or failure
            if (success) {
                resolve("Data fetched successfully!"); // Resolves the promise
                myColor = "Pink"; // Update variable after success
                console.log(myColor); // Logs "Pink"
            } else {
                reject("Failed to fetch data."); // Rejects the promise
            }
        }, 2000); // Delay of 2 seconds
    });

    console.log("Promise started..."); // Logs when the promise starts

    // Handling the promise resolution or rejection
    myPromise
        .then((message) => {
            console.log("Success:", message); // Logs success message
        })
        .catch((error) => {
            console.error("Error:", error); // Logs error if rejected
        })
        .finally(() => {
            console.log("Promise completed."); // Always executes
        });
};

// Logs the initial value of `myColor`
console.log(myColor); // Logs "Yellow"

// Button 2: Similar to Button 1, demonstrating another promise-based operation
document.getElementById("myButton2").onclick = function () {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // Simulate success or failure
            if (success) {
                resolve("Data fetched successfully!"); // Resolves promise
                console.log(myColor); // Logs the current value of `myColor`
            } else {
                reject("Failed to fetch data."); // Rejects promise
            }
        }, 2000); // Delay of 2 seconds
    });

    console.log("Promise started..."); // Logs start message

    // Handling the promise
    myPromise
        .then((message) => {
            console.log("Success:", message); // Logs success message
        })
        .catch((error) => {
            console.error("Error:", error); // Logs error if rejected
        })
        .finally(() => {
            console.log("Promise completed."); // Always executes
        });
};

// --------------------- Promise Chain Example ---------------------

// Example of chaining `.then()` with a promise
let promise1 = new Promise((resolve, reject) => {
    let success = true; // Simulate success
    if (success) {
        setTimeout(() => {
            console.log("Timeout ke aas paas"); // Logs after timeout
        }, 5000); // 5-second delay
        resolve(10); // Resolves with 10
    } else {
        reject("Internal Server Error"); // Rejects with an error message
    }
});

// Chaining `.then()` calls
promise1
    .then((message) => {
        console.log("First msg: " + message); // Logs "First msg: 10"
        return 20; // Passes 20 to the next `.then()`
    })
    .then((message) => {
        console.log("Second msg: " + message); // Logs "Second msg: 20"
        return 30; // Passes 30 to the next `.then()`
    })
    .then((message) => {
        console.log("Third msg: " + message); // Logs "Third msg: 30"
    })
    .catch((error) => {
        console.error(error); // Handles any error
    })
    .finally(() => {
        console.log("Main to final hu, chalunga pakka"); // Logs a final message
    });

// --------------------- Promise.all Example ---------------------

let promise01 = new Promise((resolve, reject) => {
    setTimeout(resolve, 0, "First"); // Resolves immediately with "First"
});

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 0, "Second"); // Resolves immediately with "Second"
// });

let promise3 = new Promise((resolve, reject) => {
    console.log(dshg); // This line causes a ReferenceError
    setTimeout(reject, 4000, "Third"); // Rejects after 4 seconds with "Third"
});

// Uncomment to test Promise.all()
// Promise.all([promise3, promise2, promise01])
//     .then((values) => {
//         console.log(values); // Logs resolved values if all succeed
//     })
//     .catch((error) => {
//         console.error("Error:", error); // Logs the first error encountered
//     });
