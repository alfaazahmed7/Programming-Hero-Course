const numbers = [1, 2, 3, 4, 5];

// const doubleIt = num => num * 2;
// const doubled = numbers.map(doubleIt);
const doubled = numbers.map(num => num * 2);
const squared = numbers.map(num => num * num);
console.log(doubled);
console.log(squared);

const friends = ["zaved", "naved", "khaled", "sajed"];
const firstLetters = friends.map(friend => friend[2]);
console.log(firstLetters);

// for each - it returns nothing
const result = numbers.forEach(num => console.log(num));
console.log(result);