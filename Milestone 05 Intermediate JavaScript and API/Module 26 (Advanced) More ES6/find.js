const students = [
    {name: "tormuj", age: 30},
    {name: "tormu", age: 32},
    {name: "torm", age: 28},
    {name: "tor", age: 52},
    {name: "to", age: 42},
    {name: "tormuja", age: 22},
];

const student = students.find(std => std.name[0] === "t");
console.log(student);