// function expression
const add = function (num1, num2) {
    return num1 + num2;
}
add(20 + 30);

// arrow function
const add2 = (num1, num2) => num1 + num2;
console.log(add2(50, 60));

const doMath = (x, y) => {
    const sum = x + y;
    const dif = x - y;
    const result = sum * dif;
    return result;
}
console.log(doMath(9,7));

const diff = (a, b) => a - b;
console.log(diff(10, 5));