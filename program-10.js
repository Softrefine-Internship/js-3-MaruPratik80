// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

'use strict';

const findLongestWord = function (str) {
  const maxLength = str.split(' ').reduce(
    (longest, word) => {
      if (word.length > longest.length) longest = word;
      return longest;
    },
    [0]
  ).length;
  return str
    .split(' ')
    .filter(word => word.length === maxLength)
    .join(', ');
};

const input = 'This is a demo String find the largest word from it';
const longestWord = findLongestWord(input);
console.log(input);
console.log(longestWord);

const input2 = 'This is a demo String find the largest or longest word from it';
console.log(input2);
console.log(findLongestWord(input2));
