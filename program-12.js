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

const getLongestStr = function (arr) {
  const maxLength = arr.reduce((longest, str) => {
    if (str.length > longest.length) longest = str;
    return longest;
  }, arr[0]).length;
  return arr.filter(str => str.length === maxLength).join(', ');
};

const arr = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Swift'];
const longestStr = getLongestStr(arr);
console.log(arr, longestStr);

const arr2 = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C++',
  'Ruby',
  'Swift',
];
console.log(arr2);
console.log(getLongestStr(arr2));
