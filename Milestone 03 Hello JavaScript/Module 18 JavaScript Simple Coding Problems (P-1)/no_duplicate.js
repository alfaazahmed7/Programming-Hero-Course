function noDuplicate (array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
const biryaniKhor = ["abul", "kabul", "cabul", "abul", "kabul", "cabul", "mamul", "tutul", "cabul"];
const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);