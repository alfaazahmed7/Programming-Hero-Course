function countVowels(text) {
    let vowels = "aeiou";           
    let count = 0;

    text = text.toLowerCase();      

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

let result = countVowels("JavaScript is fun to learn");
console.log(result);