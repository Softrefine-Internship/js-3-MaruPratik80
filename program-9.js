// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

const allComb = function (str) {
  const string = str.toLowerCase();
  const comb = [];
  for (let i = 0; i < string.length; i++) {
    let s = '';
    for (let j = i; j < string.length; j++) {
      s += string[j];
      comb.push(s);
    }
  }
  return comb;
};

const input = 'Dog';
const output = allComb(input);
console.log(input, output);
