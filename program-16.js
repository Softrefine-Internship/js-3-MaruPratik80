// Write a JavaScript program to find intersection of two sets.

// Input:
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

'use strict';

const intersection = (set1, set2) =>
  new Set([...set1].filter(el => set2.has(el)));

let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

const set1IntersectSet2 = intersection(set1, set2);
console.log(set1IntersectSet2);
