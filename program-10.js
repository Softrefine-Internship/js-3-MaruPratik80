// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

'use strict';

const findLongestWord = str =>
  str.split(' ').reduce(
    (longest, word) => {
      if (word.length > longest.length) longest = word;
      return longest;
    },
    [0]
  );

const input = 'This is a demo String find the largest word from it';
const longestWord = findLongestWord(input);
console.log(input);
console.log(longestWord);
