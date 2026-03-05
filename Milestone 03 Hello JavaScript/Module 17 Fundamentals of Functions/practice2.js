function oddOrEven (number) {
    if (number % 2 !== 0) {
        const multifly = number * 2;
        return multifly;
    }
    else {
        const devide = number / 2;
        return devide;
    }
}

const result = oddOrEven(43); //call the function
console.log("The result is:", result);