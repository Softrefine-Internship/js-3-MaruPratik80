// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
// "JavaScript",
// "Python",
// "Java",
// "C++",
// "Ruby",
// "Swift",
// ]

// Output: "JavaScript"

'use strict';

const getLongestStr = arr =>
  arr.reduce((longest, str) => {
    if (str.length > longest.length) longest = str;
    return longest;
  }, arr[0]);

const arr = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Swift'];
const longestStr = getLongestStr(arr);
console.log(arr, longestStr);
