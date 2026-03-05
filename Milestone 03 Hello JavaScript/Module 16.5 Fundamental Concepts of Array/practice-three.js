var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = '';

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}

// console.log(result);

const statement = 'I am a hard working person'
let revStatement = [];

for (let i = 0; i > statement.length -1; i--) {
    revStatement.push(statement[i]);
}

console.log(revStatement);