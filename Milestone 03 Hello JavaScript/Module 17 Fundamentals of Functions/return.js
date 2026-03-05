function tenTimes (number) {
    const result = number * 10;
    return result;
}

const output = tenTimes(5);
console.log("output", output);

// shorthand
function add (price1, price2) {
    return price1 + price2;
}

const bill = add (30, 50);
console.log(bill);