function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("num1 is the ultiimate boss");
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        console.log("num2 is the ultimate boss");
        return num2;
    }
    else {
        console.log("num3 is the ultimate boss");
        return num3;
    }
}

const maxNumber = maxOfThree(55, 80, 98);
console.log("The ultimate max number is:", maxNumber);

const max = Math.max(12, 99, 56, 89, 100);
console.log("max using Math.max:", max);