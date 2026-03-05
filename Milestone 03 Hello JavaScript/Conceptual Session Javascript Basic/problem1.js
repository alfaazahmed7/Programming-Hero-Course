// statement: count how many times each word appears in a sentence and return the result as an object. 
// rules: 
// 1.ignore case differences
// 2.ignore extra spaces

function wordFrequency(sentence) {
    let words = sentence.split(" ");
    let wordsCount = {};

    for (const word of words) {
        let wordLowerCase = word.toLowerCase();
        if (wordsCount.hasOwnProperty(wordLowerCase)) {
            wordsCount[wordLowerCase] = wordsCount[wordLowerCase] + 1;
        }
        else {
            wordsCount[wordLowerCase] = 1;
        }
    }
    return wordsCount
}

let output = wordFrequency("I love JS and I love coding and JS is fun Fun");
console.log(output);