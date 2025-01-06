// ==============================
// 1. Object Cloning in JavaScript
// ==============================

let src = {
    age: 12,
    wt: 68,
    ht: 180
};

// Cloning an object using three methods

// 1. Using the Spread Operator
let dest1 = { ...src };

// 2. Using Object.assign
let dest2 = Object.assign({}, src);

// 3. Using Iteration
let dest3 = {};
for (let key in src) {
    let newKey = key;
    let newValue = src[key];
    // Insert the new key-value pair into the destination object
    dest3[newKey] = newValue;
}

// Modify the source object to demonstrate cloning
src.age = 90;

// Verify the cloning
console.log("Source (src): ", src); // Output: { age: 90, wt: 68, ht: 180 }
console.log("Cloned Object (dest1 - Spread): ", dest1); // Output: { age: 12, wt: 68, ht: 180 }
console.log("Cloned Object (dest2 - Assign): ", dest2); // Output: { age: 12, wt: 68, ht: 180 }
console.log("Cloned Object (dest3 - Iteration): ", dest3); // Output: { age: 12, wt: 68, ht: 180 }

// ==============================
// 2. Merging Multiple Objects
// ==============================

let src2 = {
    value: 101,
    name: "Saba Ruhee"
};

// Merging src and src2 into a new object
let mergedDest = Object.assign({}, src, src2);
console.log("Merged Object (mergedDest): ", mergedDest);
// Output: { age: 90, wt: 68, ht: 180, value: 101, name: "Saba Ruhee" }

// ==============================
// 3. Using Spread Operator for Cloning
// ==============================

let spreadClone = { ...src };
console.log("Cloned Using Spread (spreadClone): ", spreadClone); // Output: { age: 90, wt: 68, ht: 180 }

// Modify src to verify the clone
src.age = 100;
console.log("Modified Source (src): ", src); // Output: { age: 100, wt: 68, ht: 180 }
console.log("Unchanged Clone (spreadClone): ", spreadClone); // Output: { age: 90, wt: 68, ht: 180 }

// ==============================
// Notes:
// - Spread operator and Object.assign perform shallow cloning.
// - Iterative cloning can be customized for deeper cloning, but a library like Lodash is recommended for deep cloning.
// ==============================
