const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const friends = ["zaved", "naved", "khaled", "sajed", "nahid", "nasib"];
const nFriends = friends.filter(firend => firend[0] === "n");
console.log(nFriends);

const students = [
    {name: "tormuj", age: 30},
    {name: "tormu", age: 32},
    {name: "torm", age: 28},
    {name: "tor", age: 52},
    {name: "to", age: 42},
    {name: "tormuja", age: 22},
];

const olderStudents = students.filter(student => student.age > 30);
console.log(olderStudents);