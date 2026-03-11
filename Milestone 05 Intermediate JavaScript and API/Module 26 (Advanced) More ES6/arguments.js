// arguments is a special array-like object available inside regular (non-arrow) functions.
// It contains all the arguments passed to that function.

function add(num1, num2) {
    console.log("arguments:", arguments, arguments[2]);
    const args = [...arguments];
    console.log("args", args);
    return num1 + num2;
}

add(2, 5, 8, 45, 46);