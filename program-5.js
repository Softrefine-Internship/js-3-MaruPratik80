// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]

'use strict';

const findNameOccurrences = function (arr) {
  const nameOccurrences = [];
  arr.forEach(obj => {
    const occurrence = {};
    const uniqe = nameOccurrences.find(
      el => el.employeeName === obj.employeeName
    );
    if (uniqe) {
      uniqe.occurrences++;
    } else {
      occurrence.employeeName = obj.employeeName;
      occurrence.occurrences = 1;
      nameOccurrences.push(occurrence);
    }
  });
  return nameOccurrences;
};

const arr = [
  {
    employeeName: 'Ram',
    employeeId: 23,
  },
  {
    employeeName: 'Shyam',
    employeeId: 24,
  },
  {
    employeeName: 'Ram',
    employeeId: 21,
  },
  {
    employeeName: 'Ram',
    employeeId: 25,
  },
  {
    employeeName: 'Kisan',
    employeeId: 22,
  },
  {
    employeeName: 'Shyam',
    employeeId: 20,
  },
];

console.log(findNameOccurrences(arr));
