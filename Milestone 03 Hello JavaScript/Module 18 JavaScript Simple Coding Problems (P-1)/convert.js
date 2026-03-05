function inchToFeet (inch) {
    const feet = inch / 12;
    return feet;
}

const shuvoHeight = inchToFeet(70);
// console.log(shuvoHeight);

function inchToFeet (inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inch. ";
    return result;
}

const arfinHeight = inchToFeet(75);
// console.log(shuvoHeight)

function mileToKilometer (mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

const mile = mileToKilometer(7);
console.log(mile);