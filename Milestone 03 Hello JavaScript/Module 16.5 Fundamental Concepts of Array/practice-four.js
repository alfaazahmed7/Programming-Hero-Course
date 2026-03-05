const statement = 'I am a hard working person';
const words = statement.split(" ");
let reversedSentence = "";

for (let i = words.length -1; i >= 0; i--) {
    reversedSentence += words[i];
    if (i !== 0) {
        reversedSentence += " ";
    }
}

// console.log(reversedSentence);

let names