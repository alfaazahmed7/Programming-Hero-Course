function getMax (numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const heights = [66, 68, 70, 76, 80, 82, 66, 72, 78];
const max = getMax(heights);
console.log("max value is:", max);

function getMin (numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const height = [70, 76, 80, 66, 82, 83, 72, 62, 78];
const min = getMin(height);
console.log("min value is:", min);
