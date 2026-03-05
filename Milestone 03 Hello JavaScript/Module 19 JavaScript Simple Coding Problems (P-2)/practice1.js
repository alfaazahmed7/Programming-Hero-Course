function minNumber (numbers) {
    let shortest = numbers[0];
    for (const num of numbers) {
        if (num < shortest) {
            shortest = num;
        }
    }
    return shortest;
}

const numbers = [167, 190, 120, 165, 137];
const output = minNumber(numbers);
console.log(output);

// const heights = [167, 190, 120, 165, 137];
// const result = Math.min(...heights);
// console.log(result);
