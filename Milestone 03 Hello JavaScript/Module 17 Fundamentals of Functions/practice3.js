function make_avg(integers) {
    let sum = 0;
    let average = 0;
    let totalIntegers = integers.length;
    for (let int of integers) {
        console.log(int);
        sum = sum + int;
    }
    average = sum / totalIntegers;
    return average;
}

let integers = [25, 30, 35, 88, 90, 101, 55, 75, 65];
let average = make_avg(integers); //average = return;
console.log("average of all numbers is:", average);
