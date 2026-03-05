function oddEven(integer) {
    if (integer % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

let integer = 100;
let result = oddEven(integer);
console.log(result);