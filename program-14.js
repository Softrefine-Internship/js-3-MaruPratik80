// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

'use strict';

const charFrequency = function (str) {
  const frequency = {};
  str
    .toLowerCase()
    .split('')
    .forEach(l => (frequency[l] ? frequency[l]++ : (frequency[l] = 1)));
  return frequency;
};

const input = 'hello';
const output = charFrequency(input);

console.log(input);
console.log(output);
