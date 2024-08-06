// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

'use strict';

const isAnagram = function (str1, str2) {
  const nStr1 = str1
    .toLowerCase()
    .split(' ')
    .flatMap(word => word.split(''))
    .sort()
    .join('');
  const nStr2 = str2
    .toLowerCase()
    .split(' ')
    .flatMap(word => word.split(''))
    .sort()
    .join('');

  return nStr1 === nStr2;
};

console.log(isAnagram('evil', 'vile'));
// Output: true

console.log(isAnagram('a gentleman', 'elegant man'));
// Output: true

console.log(isAnagram('eleven plus two', 'twelve plus one'));
// Output: true
