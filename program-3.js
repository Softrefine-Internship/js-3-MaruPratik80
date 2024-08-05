// Write a JavaScript program to flatten object into single depth object.

// Input:
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output:
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }

'use strict';

const flattenObj = function (obj) {
  const flatObj = {};
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      Object.entries(obj[key]).forEach(([subkey, value]) => {
        flatObj[`${key}.${subkey}`] = value;
      });
    } else {
      flatObj[key] = obj[key];
    }
  });
  return flatObj;
};

const inputObj = {
  Company: 'GeeksforGeeks',
  Address: 'Noida',
  contact: +91 - 999999999,
  mentor: {
    HTML: 'GFG',
    CSS: 'GFG',
    JavaScript: 'GFG',
  },
};

const outputObj = flattenObj(inputObj);

console.log(inputObj);
console.log(outputObj);
