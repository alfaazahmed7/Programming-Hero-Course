// Problem 3: Password Strength Checker
// Function name: checkPassword(password)
// Rules:
// Length must be at least 8
// Must contain at least 1 number
// Must contain at least 1 uppercase letter
// Must not contain spaces
// Test case 1
// Input:  "helloWorld"
// Output:
// { valid: false, reasons: ["missing number"] }
// Test case 2
// Input:  "Hello123"
// Output: { valid: true, reasons: [] }

function checkPassword(password) {
    let reasons = [];
    let length = password.length;
    let hasUpperCase = false;
    let hasNumber = false;
    let hasSpace = password.includes(" ");

    for (let i = 0; i < length; i++) {
        let character = password[i];

        if (character >= "0" && character <= "9") {
            hasNumber = true;
        }

        if (character >= "A" && character <= "Z") {
            hasUpperCase = true;
        }
    }

    if (hasNumber === false) {
        reasons.push("Missing Number");
    }

    if (hasUpperCase === false) {
        reasons.push("Missing Uppercase");
    }

    if (hasSpace === true) {
        reasons.push("Space Found!");
    }

    let isValid;
    if (reasons.length === 0) {
        isValid = true;
    }

    else {
        isValid = false;
    }

    return {
        valid: isValid,
        reasons
    };
}

let output = checkPassword("HelloWorld121");
console.log(output);