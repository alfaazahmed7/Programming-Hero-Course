function countVowels (str) {
    let count = 0;

    for (const char of str) {
        if ("aeiou".includes(char)) {
            count = count + 1;
        }
    }
    return count;
}

const phrase = "javascript is awesome";
const output = countVowels (phrase);
console.log(output); 