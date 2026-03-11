// Reduces an array to a single value by repeatedly applying a function to each element.

// syntax
array.reduce((accumulator, currentValue, currentIndex, array) => {
  // return new accumulator
}, initialValue);

//accumulator → stores the accumulated result
// currentValue → current element
// currentIndex → index of current element (optional)
// array → the original array (optional)
// initialValue → starting value for accumulator (optional but recommended)

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total);