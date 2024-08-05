// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:
// arr = [
// {
//     employee_id: 1,
//     employee_name: "Aman",
// },
// {
//     employee_id: 2,
//     employee_name: "Bhargava",
// },
// {
//     employee_id: 3,
//     employee_name: "Chaitanya",
// },
//  ]

// Output:
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ]

'use strict';

const changeName = function (arr, id, newName) {
  arr.find(obj => obj.employee_id === id).employee_name = newName;
};

const arr = [
  {
    employee_id: 1,
    employee_name: 'Aman',
  },
  {
    employee_id: 2,
    employee_name: 'Bhargava',
  },
  {
    employee_id: 3,
    employee_name: 'Chaitanya',
  },
];

console.log(arr);
changeName(arr, 2, 'Rahul');
console.log(arr);
