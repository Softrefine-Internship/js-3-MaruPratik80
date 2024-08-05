// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output:
// total value for "price": 1850
// total value for "quantity": 6

'use strict';

const totalOfProp = function (arr, property) {
  const total = arr.reduce((acc, obj) => acc + obj[property], 0);
  console.log(total);
  return total;
};

const arr = [
  {
    product: 'Laptop',
    price: 1000,
    quantity: 2,
  },
  {
    product: 'Phone',
    price: 600,
    quantity: 3,
  },
  {
    product: 'Monitor',
    price: 250,
    quantity: 1,
  },
];

totalOfProp(arr, 'price');
totalOfProp(arr, 'quantity');
