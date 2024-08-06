// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

'use strict';

const groupElByProp = function (arr) {
  const group = {};
  arr.forEach(el => {
    // if (group[el.name]) {
    //   group[el.name].push(el.id);
    // } else {
    //   group[el.name] = [el.id];
    // }
    group?.[el.name]?.push(el.id) || (group[el.name] = [el.id]);
  });
  return group;
};

const arr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Alice' },
];

console.log(arr);
console.log(groupElByProp(arr));
