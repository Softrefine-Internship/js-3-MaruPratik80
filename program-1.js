// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23, degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false

'use strict';

const objProperty = (obj1, obj2) =>
  Object.keys(obj2).every(key => Object.keys(obj1).includes(key));

const obj1 = { name: 'John', age: 23, degree: 'CS' };
const obj2 = { age: 23, degree: 'CS' };

console.log(objProperty(obj1, obj2));
console.log(objProperty(obj2, obj1));
