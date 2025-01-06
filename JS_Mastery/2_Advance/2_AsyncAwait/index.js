// ------------------------ Fetch API Example ------------------------

// Simple example of using the Fetch API to retrieve data
// Fetching a to-do item by its ID
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // Parse the response as JSON
    .then(json => console.log(json)); // Log the JSON data

// ------------------------ Fetch API End ------------------------

// ------------------------ Async/Await Example ------------------------

// Example of an async function with a `setTimeout` to demonstrate asynchronous behavior
async function getData() {
    setTimeout(function () {
        console.log("I am inside the setTimeout block"); // Logs after 3 seconds
    }, 3000);
}

// Calling the async function
let output = getData();
console.log(output); // Logs a Promise since `getData` is asynchronous

// ------------------------ Fetch API with Async/Await ------------------------

// Example of fetching data using async/await
async function getData() {
    // Async fetch request to retrieve comments for a post
    let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    console.log("response:", response); // Logs the response object

    // Parse the response JSON asynchronously
    let data = await response.json();
    console.log(data); // Logs the parsed data
}

// Call the async function to fetch data
getData();

// ------------------------ Post and Get Data Example ------------------------

// Scenario:
// 1. Prepare the API endpoint (synchronous)
// 2. Await fetch data (network call - asynchronous)
// 3. Process the data (synchronous)

// Define headers for a POST request
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// API endpoint for the POST request
const url = "https://jsonplaceholder.typicode.com/posts";

// Define options for the POST request
const options = {
    method: "POST",
    body: JSON.stringify({ username: "love babbar" }), // Example data
    headers: myHeaders,
};

// Async function to send a POST request
async function postData() {
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'Love babbar -> I am in love with someone.',
            userId: 5,
        }),
    });
    let data = await response.json();
    console.log("postData response:", data); // Logs the response from the POST request
}

// Async function to fetch data using a GET request
async function getData() {
    const url = "https://dummyjson.com/posts"; // Endpoint to fetch posts
    const response = await fetch(url);
    let data = await response.json();
    console.log("getData response:", data); // Logs the response data
}

// Process both POST and GET requests sequentially
async function processData() {
    await postData(); // Perform the POST request
    await getData(); // Fetch data after POST request
}

// Call the function to process data
processData();

// ------------------------ Post and Get Data Example End ------------------------

// ------------------------ Practice Post2 and Get2 Example ------------------------

// Define headers for the second POST request
const myHeaders2 = new Headers();
myHeaders2.append("Content-Type", "application/json");

// Define the API endpoint and request options for the second POST request
const url2 = "https://jsonplaceholder.typicode.com/posts";
const options2 = {
    method: "POST",
    body: JSON.stringify({
        userId: 101,
        id: 101,
        title: "Optimism",
        body: "Where there is a will there's a way!!!",
    }),
    headers: myHeaders2,
};

// Async function to send a POST request with predefined data
async function postData2() {
    const response2 = await fetch(url2, options2); // Perform the POST request
    let data2 = await response2.json(); // Parse the response JSON
    console.log("postData2 response:", data2); // Log the POST response
}

// Async function to fetch all posts using a GET request
async function getData2() {
    const response2 = await fetch(url2); // Perform the GET request
    let data2 = await response2.json(); // Parse the response JSON
    console.log("getData2 response:", data2); // Log the GET response
}

// Sequentially process both POST and GET requests
async function processData2() {
    await postData2(); // Perform the POST request
    await getData2(); // Fetch data after the POST request
}

// Call the function to process the second set of requests
processData2();

// ------------------------ Practice Post2 and Get2 Example End ------------------------
