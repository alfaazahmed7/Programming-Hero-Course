function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multifly(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === "add") {
        const result = add(a, b);
        return result;
    }
    else if (operation === "subtract") {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === "multifly") {
        const result = multifly(a, b);
        return result;
    }
    else if (operation === "divide") {
        const result = divide(a, b);
        return result;
    }
    else {
        return "Only 'add', 'subtract', 'multifly', 'divide' operation is allowed.";
    }
}

const result = calculator(5, 7, "multifly");
console.log(result);