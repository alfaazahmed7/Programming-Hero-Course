// Problem 7: Text Stats Generator
// Function name: textStats(text)
// Statement: Return an object containing:
// .Characters count excluding spaces
// .Words count
// .Vowels count
// .Consonants count
// Test case 1
// Input: "JavaScript is fun to learn"
// Output: { characters: 22, words: 5, vowels: 8, consonants: 14 }

function textStats(text) {
    let mainOutput = {};

    let noSpaces = text.replace(/\s/g, "");
    mainOutput.character = noSpaces.length;

    let totalWords = text.split(" ");
    mainOutput.words = totalWords.length;

    let vowels = "aeiou";
    let count = 0;
    text = text.toLowerCase();

    for (const char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    mainOutput.vowels = count;

    let consonants = "bcdfghjklmnpqrstvwxyz";
    let countConsonats = 0;

    for (const char of text) {
        if (consonants.includes(char)) {
            countConsonats ++;
        }
    }
    mainOutput.consonants = countConsonats;

    return mainOutput
}

let output = textStats("JavaScript is fun to learn");
let output1 = textStats("fuck you bitch");
console.log(output, output1);