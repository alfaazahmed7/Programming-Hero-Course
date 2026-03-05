function evenSizedString (str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        // console.log("even size");
        return true;
    }
    else {
        // console.log("odd size");
        return false;
    }
}

evenSizedString ("Dhaka");
evenSizedString ("Faka");

function doubleOrTripple (number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTripple(5, true));
// console.log(doubleOrTripple(5, false));

function numberOfElements (numbers) {
    const len = numbers.length;
    return len;
}

numberOfElements([12, 20, 34, 65, 34, 34, 54, 45, 23]);

