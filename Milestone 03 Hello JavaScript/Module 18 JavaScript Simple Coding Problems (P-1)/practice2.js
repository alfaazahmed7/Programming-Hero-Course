function countOccurrences (array, target) {
    let count = 0;

    for (const num of array) {
        if (num === target) {
            count = count + 1;
        }
    }
    return count;
}

const numbers = [5, 6, 11, 12, 98, 5]; 
const result = countOccurrences(numbers, 5);
console.log(result);