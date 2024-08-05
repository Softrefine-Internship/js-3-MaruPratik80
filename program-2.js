// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }

'use strict';

const arrToObj = function (arr) {
  const obj = {};

  arr.forEach(entry => {
    const [key, value] = entry;
    obj[key] = value;
  });

  return obj;
};

const input = [
  ['John', 12],
  ['Jack', 13],
  ['Matt', 14],
  ['Maxx', 15],
];

const output = arrToObj(input);
console.log(input);
console.log(output);
