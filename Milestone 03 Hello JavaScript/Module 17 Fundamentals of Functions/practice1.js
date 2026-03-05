function parameters(numbers) {
    let multifly = 1;
    for (let number of numbers) {
        console.log(number);
        multifly = multifly * number;
    }
    return multifly;
}

const numbers = [35, 40, 45, 88];
const multifly = parameters(numbers);  //call the function
console.log("multifly of all numbers is:" , multifly);


function sumOfAllNumbers (numbers) {
    let sum = 0;
    for (let number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const numbs = [35, 40, 45, 88];
const sum = sumOfAllNumbers(numbs);
console.log("sum of all numbers is", sum);