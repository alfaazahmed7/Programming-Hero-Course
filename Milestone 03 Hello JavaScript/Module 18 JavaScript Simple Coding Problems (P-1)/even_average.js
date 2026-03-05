function evenAverage (numbers) {
    const evens = [];
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            evens.push(number);
            sum = sum + number;
        }
    }
    let length = evens.length;
    const avg = sum / length;
    return avg;
}

const numbers = [10, 25, 33, 56, 90, 70, 68, 12, 44, 22, 21]; //Define the array of numbers to check
const avg = evenAverage(numbers);
console.log(avg);