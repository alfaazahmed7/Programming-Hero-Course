const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

// console.log(evenNumbers);

const number_s = [22, 43, 53, 46, 25, 90, 76, 45, 88];
const oddNumbers = [];

for (let i = 0; i < number_s.length; i++) {
    if (number_s[i] % 2 !== 0) {
        oddNumbers.push(number_s[i]);
    }
}

console.log(oddNumbers);
