function count_zero(binaryString) {
    let count = 0;
    
    for (let char of binaryString) {
        if (char === "0") {
            count = count + 1;
        }
    }
    return count;
}

let total = count_zero("01000010100010");
console.log("Total zeros:", total);