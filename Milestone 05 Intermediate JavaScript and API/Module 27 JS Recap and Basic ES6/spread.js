const max = Math.max(3, 50, 5, 2, 5, 8, 9);
console.log(max);

// spread operator
const numbers = [10, 20, 30, 50, 40, 55, 88, 99];
const max2 = Math.max(...numbers);
console.log(max2);

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);