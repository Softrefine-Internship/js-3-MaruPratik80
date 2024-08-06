// Write a JavaScript program to check subset.

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

'use strict';

const isSubset = (set1, set2) => [...set1].every(el => set2.has(el));

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4]);
console.log(isSubset(set1, set2));

set1 = new Set([3, 4]);
set2 = new Set([1, 2, 3, 4, 5]);
console.log(isSubset(set1, set2));
