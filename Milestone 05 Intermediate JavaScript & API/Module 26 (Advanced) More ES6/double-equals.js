console.log(2 === 2);
console.log(2 == "2"); // converts the string "2" to number 2 and then compares and returns true.

// double equals does type coercion.
// compare the values after converting them to a common type. if the values are equal after type coercion, it returns ture. if the values are not equal after type coercion, it returns false.

console.log(true == "1"); // ture is converted to 1 and then compared with "1". "1" is converted to number 1 and then compared and returns true.

console.log({} == {}); //false
console.log([] == []); //false