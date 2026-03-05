// Problem 5: Remove Duplicates From Array
// Statement:
//  Return a new array where duplicate values are removed, keeping the original order.
// Test case 1
// Input:
//  [5, 3, 5, 2, 3, 9, 2, 7]
// Output:
// [5, 3, 2, 9, 7]

function removeDuplicates(array) {
    let unique = [];

    for (const arr of array) {
        if (unique.includes(arr) === false) {
            unique.push(arr);
        }
    }
    return unique
}

let output = removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]);
let output2 = removeDuplicates([1, 1, 1, 1]);
console.log(output, output2);