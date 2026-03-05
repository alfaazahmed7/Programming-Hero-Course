function smallest (names) {
    let smallName = names[0];
    for (const name of names) {
        if (name.length < smallName.length) {
            smallName = name;
        }
    }
    return smallName;
}

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const output = smallest (friends);
console.log(output);