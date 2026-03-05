// const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// const rev_colors = [];

// for (const col of colors) {
//     rev_colors.unshift(colors);
// }

// console.log(rev_colors);

// let numbers = [12, 45, 65, 65, 45, 75, 97, 23];
// const reversed_numbers = [];

// for (let i = 0; i < numbers.length(); i++) {
//     const num = numbers[i];
//     reversed_numbers.unshift(num);
// }

// console.log(numbers);

const colors = ["red", "blue", "green", "yellow", "orange"];

const reveresColors = [];
for (let i = colors.length -1; i >= 0; i--) {
    reveresColors.push(colors[i]);
}

// console.log(reveresColors);

const numbers = [12, 20, 53, 24, 76, 90, 80];
const revNumbers = [];

for (let i = numbers.length -1; i >= 0; i--) {
    revNumbers.push(numbers[i]);
}

// console.log(revNumbers);