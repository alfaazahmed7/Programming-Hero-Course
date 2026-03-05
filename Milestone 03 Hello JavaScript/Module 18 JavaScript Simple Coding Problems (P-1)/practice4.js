function longestWord(str) {
    const words = str.split(" ");
    let longest = "";

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

const string = "I am learning Programming to become a programmer"
const output = longestWord(string);
console.log(output);